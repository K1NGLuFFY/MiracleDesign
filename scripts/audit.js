#!/usr/bin/env node

/**
 * Security & Quality Quick Audit Script
 * Runs automated checks for common issues
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Running Security & Quality Audit...\n');

const results = {
    passed: [],
    failed: [],
    warnings: [],
};

// Helper function to add result
function addResult(category, test, status, message) {
    const result = { category, test, message };
    if (status === 'pass') results.passed.push(result);
    else if (status === 'fail') results.failed.push(result);
    else results.warnings.push(result);
}

// Helper function to run command
function runCommand(cmd) {
    try {
        return execSync(cmd, { encoding: 'utf-8', stdio: 'pipe' });
    } catch (error) {
        return error.stdout || error.stderr || '';
    }
}

// 1. Check for .env files in git
console.log('📋 Checking Environment Security...');
try {
    const gitIgnore = fs.readFileSync('.gitignore', 'utf-8');
    if (gitIgnore.includes('.env')) {
        addResult('Security', '.env Protection', 'pass', '.env files are ignored by git');
    } else {
        addResult('Security', '.env Protection', 'fail', '.env not in .gitignore');
    }
} catch (e) {
    addResult('Security', '.env Protection', 'warn', 'Could not read .gitignore');
}

// 2. Run npm audit
console.log('🔐 Running npm audit...');
const auditOutput = runCommand('npm audit --json');
try {
    const audit = JSON.parse(auditOutput);
    const vulnerabilities = audit.metadata?.vulnerabilities || {};
    const total = Object.values(vulnerabilities).reduce((a, b) => a + b, 0);

    if (total === 0) {
        addResult('Dependencies', 'npm audit', 'pass', 'No vulnerabilities found');
    } else {
        const critical = vulnerabilities.critical || 0;
        const high = vulnerabilities.high || 0;
        if (critical > 0 || high > 0) {
            addResult('Dependencies', 'npm audit', 'fail',
                `${critical} critical, ${high} high vulnerabilities found`);
        } else {
            addResult('Dependencies', 'npm audit', 'warn',
                `${total} vulnerabilities (moderate/low)`);
        }
    }
} catch (e) {
    addResult('Dependencies', 'npm audit', 'warn', 'Could not parse npm audit output');
}

// 3. Check for TypeScript errors
console.log('📝 Running TypeScript check...');
try {
    execSync('npm run type-check', { stdio: 'pipe' });
    addResult('Code Quality', 'TypeScript', 'pass', 'No type errors');
} catch (e) {
    addResult('Code Quality', 'TypeScript', 'fail', 'TypeScript errors found');
}

// 4. Check for ESLint errors
console.log('🔍 Running ESLint...');
try {
    execSync('npm run lint', { stdio: 'pipe' });
    addResult('Code Quality', 'ESLint', 'pass', 'No linting errors');
} catch (e) {
    addResult('Code Quality', 'ESLint', 'fail', 'Linting errors found');
}

// 5. Check for dangerouslySetInnerHTML
console.log('⚠️  Checking for XSS risks...');
const cmdGrep = process.platform === 'win32'
    ? 'findstr /s /i "dangerouslySetInnerHTML" *.tsx *.ts *.jsx *.js'
    : 'grep -r "dangerouslySetInnerHTML" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" .';

const grepResult = runCommand(cmdGrep);
if (!grepResult || grepResult.trim() === '') {
    addResult('Security', 'XSS Check', 'pass', 'No dangerouslySetInnerHTML found');
} else {
    addResult('Security', 'XSS Check', 'warn', 'dangerouslySetInnerHTML usage detected');
}

// 6. Check for security headers in next.config
console.log('🛡️  Checking security headers...');
try {
    const nextConfig = fs.readFileSync('next.config.mjs', 'utf-8');
    if (nextConfig.includes('headers()') && nextConfig.includes('Content-Security-Policy')) {
        addResult('Security', 'Security Headers', 'pass', 'CSP configured');
    } else if (nextConfig.includes('headers()')) {
        addResult('Security', 'Security Headers', 'warn', 'Some headers configured, CSP missing');
    } else {
        addResult('Security', 'Security Headers', 'fail', 'No security headers configured');
    }
} catch (e) {
    addResult('Security', 'Security Headers', 'fail', 'Could not read next.config.mjs');
}

// 7. Check for metadata
console.log('🔎 Checking SEO metadata...');
try {
    const layout = fs.readFileSync('app/layout.tsx', 'utf-8');
    if (layout.includes('metadata') && layout.includes('description')) {
        addResult('SEO', 'Metadata', 'pass', 'Basic metadata configured');
    } else {
        addResult('SEO', 'Metadata', 'fail', 'Missing metadata in layout');
    }

    // Check for Open Graph
    if (layout.includes('openGraph') || layout.includes('twitter')) {
        addResult('SEO', 'Social Metadata', 'pass', 'Social metadata configured');
    } else {
        addResult('SEO', 'Social Metadata', 'warn', 'Missing Open Graph/Twitter metadata');
    }
} catch (e) {
    addResult('SEO', 'Metadata', 'fail', 'Could not read app/layout.tsx');
}

// 8. Check for sitemap
console.log('🗺️  Checking sitemap...');
if (fs.existsSync('app/sitemap.ts') || fs.existsSync('app/sitemap.xml')) {
    addResult('SEO', 'Sitemap', 'pass', 'Sitemap file exists');
} else {
    addResult('SEO', 'Sitemap', 'fail', 'No sitemap.ts or sitemap.xml found');
}

// 9. Check for robots.txt
if (fs.existsSync('app/robots.ts') || fs.existsSync('public/robots.txt')) {
    addResult('SEO', 'Robots.txt', 'pass', 'Robots file exists');
} else {
    addResult('SEO', 'Robots.txt', 'warn', 'No robots.ts or robots.txt found');
}

// 10. Check for focus-visible classes (accessibility)
console.log('♿ Checking accessibility...');
const filesWithOutlineNone = runCommand(
    process.platform === 'win32'
        ? 'findstr /s /i "outline-none" *.tsx *.css'
        : 'grep -r "outline-none" --include="*.tsx" --include="*.css" . || true'
);
if (filesWithOutlineNone && filesWithOutlineNone.trim() !== '') {
    addResult('Accessibility', 'Focus Indicators', 'warn',
        'outline-none detected - ensure focus-visible alternatives exist');
} else {
    addResult('Accessibility', 'Focus Indicators', 'pass', 'No outline-none violations');
}

// Print Results
console.log('\n' + '='.repeat(60));
console.log('📊 AUDIT RESULTS');
console.log('='.repeat(60) + '\n');

console.log(`✅ Passed: ${results.passed.length}`);
console.log(`⚠️  Warnings: ${results.warnings.length}`);
console.log(`❌ Failed: ${results.failed.length}\n`);

if (results.failed.length > 0) {
    console.log('❌ FAILURES:\n');
    results.failed.forEach(r => {
        console.log(`  [${r.category}] ${r.test}`);
        console.log(`    → ${r.message}\n`);
    });
}

if (results.warnings.length > 0) {
    console.log('⚠️  WARNINGS:\n');
    results.warnings.forEach(r => {
        console.log(`  [${r.category}] ${r.test}`);
        console.log(`    → ${r.message}\n`);
    });
}

if (results.passed.length > 0) {
    console.log('✅ PASSED:\n');
    results.passed.forEach(r => {
        console.log(`  [${r.category}] ${r.test}`);
    });
    console.log('');
}

// Summary
console.log('='.repeat(60));
if (results.failed.length === 0) {
    console.log('✅ Overall Status: GOOD');
} else if (results.failed.length < 3) {
    console.log('⚠️  Overall Status: NEEDS ATTENTION');
} else {
    console.log('❌ Overall Status: CRITICAL ISSUES');
}
console.log('='.repeat(60));

console.log('\n📖 See .agent/SECURITY_AUDIT_REPORT.md for full details');
console.log('📋 See .agent/IMPLEMENTATION_PLAN.md for fixes\n');

// Exit with error code if failures
process.exit(results.failed.length > 0 ? 1 : 0);
