import worksData from "../../data/workData";
import WorkDetailClient from "./WorkDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return worksData.map((w) => ({
    slug: w.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = worksData.find((item) => item.slug === slug);

  if (!work) {
    return {
      title: "Project not found | BrytLinks",
    };
  }

  return {
    title: `${work.title} | BrytLinks`,
    description: work.description,
    alternates: {
      canonical: `/work/${work.slug}`,
    },
    openGraph: {
      title: `${work.title} | BrytLinks`,
      description: work.description,
      url: `/work/${work.slug}`,
      siteName: "BrytLinks",
      images: [
        {
          url: work.image,
          width: 1200,
          height: 900,
          alt: `${work.title} project preview`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} | BrytLinks`,
      description: work.description,
      images: [work.image],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const projectIndex = worksData.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const work = worksData[projectIndex];
  const nextWork = worksData[(projectIndex + 1) % worksData.length];

  return (
    <WorkDetailClient
      work={work}
      projectNumber={String(projectIndex + 1).padStart(2, "0")}
      nextWork={nextWork}
    />
  );
}
