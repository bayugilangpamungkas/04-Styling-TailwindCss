import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tentang Saya | BAYU GILANG PAMUNGKAS - Pengembang Web",
  description:
    "Saya adalah seorang pengembang perangkat lunak yang berfokus pada teknologi web modern seperti React, TypeScript, dan Next.js.",
};

export default function About() {
  const techStack = {
    frontend: [
      {
        name: "JavaScript",
        color: "bg-amber-100 text-amber-800 border-amber-200",
      },
      {
        name: "TypeScript",
        color: "bg-blue-100 text-blue-800 border-blue-200",
      },
      { name: "React", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
      { name: "Next.js", color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
      {
        name: "HTML5",
        color: "bg-orange-100 text-orange-800 border-orange-200",
      },
      {
        name: "CSS3",
        color: "bg-indigo-100 text-indigo-800 border-indigo-200",
      },
      { name: "Tailwind", color: "bg-sky-100 text-sky-800 border-sky-200" },
    ],
    backend: [
      { name: "PHP", color: "bg-purple-100 text-purple-800 border-purple-200" },
      { name: "Laravel", color: "bg-rose-100 text-rose-800 border-rose-200" },
      { name: "CodeIgniter", color: "bg-red-100 text-red-800 border-red-200" },
      { name: "MySQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
      {
        name: "Firebase",
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      },
    ],
    other: [
      {
        name: "Python",
        color: "bg-emerald-100 text-emerald-800 border-emerald-200",
      },
      {
        name: "Java",
        color: "bg-orange-100 text-orange-800 border-orange-200",
      },
      {
        name: "Kotlin",
        color: "bg-violet-100 text-violet-800 border-violet-200",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-0">
            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 relative">
                <span className="relative inline-block">
                  Bayu Gilang Pamungkas
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
                </span>
              </h1>
              <p className="text-lg md:text-xl font-light text-zinc-700 mt-4">
                Saya seorang pengembang perangkat lunak yang berfokus pada{" "}
                <span className="font-medium text-zinc-900">
                  teknologi web modern
                </span>
                .
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/bayugilangpamungkas"
                  target="_blank"
                  className="px-5 py-3 bg-zinc-800 text-white font-medium rounded-xl shadow-md hover:bg-zinc-700 transition-all"
                >
                  GitHub
                </a>
                <a
                  href="mailto:gilangb256@gmail.com"
                  className="px-5 py-3 bg-blue-50 text-blue-700 font-medium rounded-xl border-2 border-blue-100 hover:bg-blue-100 transition-all"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-full md:h-full max-w-xs">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-sm opacity-75"></div>
                <Image
                  src="/images/project2.jpg"
                  alt="Bayu Gilang"
                  width={300}
                  height={300}
                  className="relative rounded-2xl shadow-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white rounded-3xl shadow-md p-8 border border-blue-100 mb-12">
          <h2 className="text-2xl font-bold text-zinc-800 mb-8">
            Teknologi & Keahlian
          </h2>

          <div className="space-y-6">
            {Object.entries(techStack).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-zinc-700 mb-3 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full border text-sm font-medium ${tech.color} hover:scale-105 transition-transform`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
