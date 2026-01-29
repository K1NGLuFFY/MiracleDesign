"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projects";
import EnuguReservePage from "@/components/projects/EnuguReservePage";
import NoireModelsPage from "@/components/projects/NoireModelsPage";
import PulseFitnessPage from "@/components/projects/PulseFitnessPage";

export default function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const project = getProjectById(slug);

    if (!project) {
        notFound();
    }

    // Render the appropriate project component based on the slug
    switch (slug) {
        case "enugu-reserve":
            return <EnuguReservePage project={project} />;
        case "noire-models":
            return <NoireModelsPage project={project} />;
        case "pulse-fitness":
            return <PulseFitnessPage project={project} />;
        default:
            notFound();
    }
}
