"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { projects, Project } from "../../data/projects";
import { WorkDetails } from "../../components/WorkDetails";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const decodedId = decodeURIComponent(id);
  const project = projects.find((p) => p.id === decodedId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <WorkDetails project={project} />
      <Footer />
    </div>
  );
}

