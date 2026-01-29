'use client';

import { notFound } from 'next/navigation';
import { getProjectById } from '@/data/projects';
import EnuguReservePage from '@/components/projects/EnuguReservePage';

export default function EnuguLivePage() {
    // We know the ID is 'enugu-reserve' for this specific page
    const project = getProjectById('enugu-reserve');

    if (!project) {
        return notFound();
    }

    return (
        <EnuguReservePage project={project} />
    );
}
