'use client';

import { useState, useId } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas/contact';
import { submitContactForm } from '@/app/actions/contact';

/**
 * Secure and Accessible Contact Form Component
 * 
 * Accessibility features:
 * - Proper label associations with htmlFor
 * - ARIA error announcements
 * - Focus management
 * - Required field indicators
 * - Screen reader friendly error messages
 * 
 * Security features:
 * - Client + server-side validation
 * - Input sanitization via Zod
 * - Server actions (CSRF protection)
 */
export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    // Generate unique IDs for accessibility
    const nameId = useId();
    const emailId = useId();
    const projectDetailsId = useId();
    const messageId = useId();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('projectDetails', data.projectDetails);

            const result = await submitContactForm(formData);

            if (result.success) {
                setSubmitMessage({ type: 'success', text: result.message });
                reset(); // Clear form on success
            } else {
                setSubmitMessage({
                    type: 'error',
                    text: result.message || 'Please correct the errors in the form.'
                });
            }
        } catch (error) {
            setSubmitMessage({
                type: 'error',
                text: 'An unexpected error occurred. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="font-anton text-6xl md:text-8xl uppercase text-[#f4f4f0] mb-8">
                    Let's Build<br />The Future.
                </h2>
                <p className="font-inter text-lg md:text-xl text-[#f4f4f0]/70 max-w-2xl mx-auto">
                    I'm currently looking for internships and junior roles starting February 2027. If you have a project in mind or just want to talk tech, drop me a line. I usually respond within 24 hours.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8" noValidate>
                {/* Live region for form-level messages */}
                <div
                    id={messageId}
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="min-h-[2rem]"
                >
                    {submitMessage && (
                        <div
                            className={`p-4 rounded-md text-center ${submitMessage.type === 'success'
                                ? 'bg-green-900/20 border border-green-500/30 text-green-400'
                                : 'bg-red-900/20 border border-red-500/30 text-red-400'
                                }`}
                        >
                            {submitMessage.text}
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor={nameId}
                            className="font-inter text-xs uppercase tracking-widest text-gray-500"
                        >
                            Your Name <span className="text-[#ff3c00]" aria-label="required">*</span>
                        </label>
                        <input
                            id={nameId}
                            type="text"
                            placeholder="Enter name"
                            aria-required="true"
                            aria-invalid={errors.name ? 'true' : 'false'}
                            aria-describedby={errors.name ? `${nameId}-error` : undefined}
                            className={`bg-transparent border-b py-4 text-[#f4f4f0] 
                transition-colors
                focus-visible:outline-none focus-visible:border-[#ff3c00] focus-visible:ring-2 focus-visible:ring-[#ff3c00]/20
                ${errors.name ? 'border-red-500' : 'border-white/20'}`}
                            disabled={isSubmitting}
                            {...register('name')}
                        />
                        {errors.name && (
                            <p
                                id={`${nameId}-error`}
                                className="text-red-400 text-sm mt-1"
                                role="alert"
                            >
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor={emailId}
                            className="font-inter text-xs uppercase tracking-widest text-gray-500"
                        >
                            Your Email <span className="text-[#ff3c00]" aria-label="required">*</span>
                        </label>
                        <input
                            id={emailId}
                            type="email"
                            placeholder="Enter email"
                            aria-required="true"
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? `${emailId}-error` : undefined}
                            className={`bg-transparent border-b py-4 text-[#f4f4f0]
                transition-colors
                focus-visible:outline-none focus-visible:border-[#ff3c00] focus-visible:ring-2 focus-visible:ring-[#ff3c00]/20
                ${errors.email ? 'border-red-500' : 'border-white/20'}`}
                            disabled={isSubmitting}
                            {...register('email')}
                        />
                        {errors.email && (
                            <p
                                id={`${emailId}-error`}
                                className="text-red-400 text-sm mt-1"
                                role="alert"
                            >
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Project Details Field */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor={projectDetailsId}
                        className="font-inter text-xs uppercase tracking-widest text-gray-500"
                    >
                        Project Details <span className="text-[#ff3c00]" aria-label="required">*</span>
                    </label>
                    <textarea
                        id={projectDetailsId}
                        rows={4}
                        placeholder="Tell me about your project..."
                        aria-required="true"
                        aria-invalid={errors.projectDetails ? 'true' : 'false'}
                        aria-describedby={errors.projectDetails ? `${projectDetailsId}-error` : undefined}
                        className={`bg-transparent border-b py-4 text-[#f4f4f0]
              transition-colors resize-none
              focus-visible:outline-none focus-visible:border-[#ff3c00] focus-visible:ring-2 focus-visible:ring-[#ff3c00]/20
              ${errors.projectDetails ? 'border-red-500' : 'border-white/20'}`}
                        disabled={isSubmitting}
                        {...register('projectDetails')}
                    />
                    {errors.projectDetails && (
                        <p
                            id={`${projectDetailsId}-error`}
                            className="text-red-400 text-sm mt-1"
                            role="alert"
                        >
                            {errors.projectDetails.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="pt-8 text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#f4f4f0] text-[#0a0a0a] px-12 py-5 font-anton text-xl uppercase tracking-widest
              hover:bg-[#ff3c00] hover:text-white 
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ff3c00]/50
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-300"
                        aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>

            {/* Social Icons Bar */}
            <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-white/10">
                <div className="flex justify-center items-center gap-8">
                    {/* Email Icon */}
                    <a
                        href="mailto:contact.miracledesign@gmail.com"
                        className="text-[#f4f4f0]/60 hover:text-[#ff3c00] transition-all duration-300 hover:scale-110"
                        aria-label="Send me an email"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </a>

                    {/* GitHub Icon */}
                    <a
                        href="https://github.com/K1NGLuFFY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f4f4f0]/60 hover:text-[#ff3c00] transition-all duration-300 hover:scale-110"
                        aria-label="GitHub profile"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                    {/* LinkedIn Icon */}
                    <a
                        href="https://www.linkedin.com/in/chiemerie-okeke-9ba813379/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f4f4f0]/60 hover:text-[#ff3c00] transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn profile"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-center text-[#f4f4f0]/40 text-sm font-inter mt-8">
                    © 2026 Miracle Okeke
                </p>
            </div>
        </section>
    );
}
