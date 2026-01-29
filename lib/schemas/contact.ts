import { z } from 'zod';

/**
 * Contact form validation schema
 * Ensures all inputs are validated before submission
 */
export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must not exceed 100 characters')
        .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address')
        .max(255, 'Email must not exceed 255 characters'),

    projectDetails: z
        .string()
        .min(10, 'Project details must be at least 10 characters')
        .max(2000, 'Project details must not exceed 2000 characters')
        .regex(/^[\w\s.,!?()'-]+$/, 'Project details contain invalid characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
