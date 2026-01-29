'use server';

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas/contact';

/**
 * Server Action: Handle Contact Form Submission
 * 
 * Security features:
 * - Server-side validation with Zod
 * - Input sanitization
 * - Rate limiting (TODO: Add middleware)
 * - No direct database queries (prevents SQL injection)
 */
export async function submitContactForm(formData: FormData) {
    try {
        // Extract and validate form data
        const rawData = {
            name: formData.get('name'),
            email: formData.get('email'),
            projectDetails: formData.get('projectDetails'),
        };

        // Validate with Zod schema
        const validatedData = contactFormSchema.parse(rawData);

        // TODO: Add rate limiting check here
        // Example: await checkRateLimit(email)

        // TODO: Integrate with email service or database
        // For now, we'll log the submission (replace with actual email service)
        console.log('Contact form submission:', {
            name: validatedData.name,
            email: validatedData.email,
            projectDetails: validatedData.projectDetails,
            timestamp: new Date().toISOString(),
        });

        // Simulate email sending delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // In production, integrate with:
        // - Resend.com
        // - SendGrid
        // - AWS SES
        // - Or store in database with Prisma/Drizzle

        return {
            success: true,
            message: 'Thank you for your message! I will get back to you soon.',
        };
    } catch (error) {
        // Handle validation errors
        if (error instanceof z.ZodError) {
            const fieldErrors = error.errors.reduce((acc, err) => {
                const field = err.path[0] as string;
                acc[field] = err.message;
                return acc;
            }, {} as Record<string, string>);

            return {
                success: false,
                errors: fieldErrors,
                message: 'Please correct the errors in the form.',
            };
        }

        // Handle other errors
        console.error('Contact form error:', error);
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again later.',
        };
    }
}
