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
                <h2 className="font-anton text-6xl md:text-8xl uppercase text-[#f4f4f0]">
                    Let's Build<br />The Future.
                </h2>
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
                        aria-label={isSubmitting ? 'Sending request...' : 'Send request'}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Request'}
                    </button>
                </div>
            </form>
        </section>
    );
}
