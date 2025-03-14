import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import laravelLogo from "../../../public/images/laravel.jpg";
import nextjsLogo from "../../../public/images/next js.png";

export const metadata: Metadata = {
  title: "Proyek Saya",
  description: "Kumpulan proyek yang telah saya kembangkan.",
  openGraph: {
    title: "Proyek Saya",
    description: "Kumpulan proyek saya.",
  },
};

interface Project {
  name: string;
  slug: string;
  url: string;
  urlDisplay: string;
  description: string;
  imageSrc: any;
  technologies: string[];
}

const projects: Project[] = [
  {
    name: "Sistem Arsip",
    slug: "sistem-arsip",
    url: "https://github.com/bayugilangpamungkas/sistemarsip",
    urlDisplay: "Website Laravel",
    description: "Aplikasi berbasis website secara real-time.",
    imageSrc: laravelLogo,
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    name: "Website Next.js",
    slug: "website-nextjs",
    url: "https://github.com/bayugilangpamungkas/03-praktikum-next.js",
    urlDisplay: "Website Next.js",
    description: "Platform Website real-time yang modern.",
    imageSrc: nextjsLogo,
    technologies: ["Next.js", "MySQL", "Tailwind CSS", "Alpine.js"],
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-20">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="font-extrabold text-5xl md:text-6xl text-white mb-6 relative">
            Proyek Saya
            <span className="absolute -bottom-2 left-1/3 right-1/3 h-1 bg-gray-300 rounded-full"></span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Jelajahi proyek-proyek yang telah saya kembangkan dengan berbagai
            teknologi modern.
          </p>
        </header>

        {/* Grid Project */}
        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative w-full h-64 flex justify-center items-center bg-gray-900/10">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                  width={150}
                  height={150}
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-8 text-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="inline-block px-4 py-1.5 bg-gray-700/40 text-gray-300 text-xs rounded-full font-medium border border-gray-500/20">
                    {project.urlDisplay}
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>

                <h2 className="font-semibold text-2xl">{project.name}</h2>
                <p className="text-gray-300">{project.description}</p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-gray-700/30 text-gray-300 rounded-xl border border-gray-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Detail Button */}
                <Link
                  href={project.url}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-500 transition-all duration-300"
                >
                  Lihat Detail
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
