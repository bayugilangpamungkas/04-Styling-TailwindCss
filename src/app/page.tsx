import type { Metadata } from "next";
import Image from "next/image";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Tentang Saya | BAYU GILANG PAMUNGKAS - Pengembang Web",
  description:
    "Mengembangkan aplikasi web modern menggunakan teknologi seperti React, TypeScript, dan Next.js untuk solusi digital yang berorientasi pengguna.",
};

export default function About() {
  const techStack = [
    {
      name: "JavaScript",
      color: "bg-amber-100 text-amber-800 border-amber-200",
      icon: "💻",
    },
    {
      name: "TypeScript",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      icon: "🔷",
    },
    {
      name: "React",
      color: "bg-cyan-100 text-cyan-800 border-cyan-200",
      icon: "⚛️",
    },
    {
      name: "Next.js",
      color: "bg-zinc-100 text-zinc-800 border-zinc-200",
      icon: "▲",
    },
    {
      name: "HTML5",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      icon: "📄",
    },
    {
      name: "CSS3",
      color: "bg-indigo-100 text-indigo-800 border-indigo-200",
      icon: "🎨",
    },
    {
      name: "Tailwind",
      color: "bg-sky-100 text-sky-800 border-sky-200",
      icon: "🌊",
    },
  ];

  const experiences = [
    {
      title: "Pengembang Web Frontend",
      company: "PT. SEMUA APLIKASI INDONESIA",
      duration: "2024 - Sekarang",
      description:
        "Mengembangkan aplikasi web modern dengan React dan Laravel.",
    },
    {
      title: "Pengembang Front-end dan Styling",
      company: "Startup Digital",
      duration: "2024 - 2025",
      description:
        "Membangun antarmuka pengguna responsif dengan Next.js, Laravel, dan Tailwind CSS.",
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/bayugilangpamungkas",
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      bgColor: "bg-zinc-800 hover:bg-zinc-700 text-white",
    },
    {
      href: "mailto:gilangb256@gmail.com",
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      bgColor:
        "bg-blue-50 hover:bg-blue-100 text-blue-700 border-2 border-blue-100",
    },
    {
      href: "https://linkedin.com/in/bayugilangpamungkas",
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      bgColor:
        "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-2 border-indigo-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50 py-16 font-sans ">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 ">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden mb-16 transition-transform hover:scale-[1.01] duration-300">
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-0">
            {/* Content Section */}
            <div className="p-8 md:p-14 flex flex-col justify-center">
              <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-pulse">
                Frontend Developer
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 relative">
                Bayu Gilang Pamungkas
                <span className="absolute -bottom-3 left-0 w-1/2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
              </h1>

              <p className="text-lg md:text-xl font-light text-zinc-600 mt-6 leading-relaxed max-w-2xl">
                Teknologi web modern seperti{" "}
                <span className="font-medium text-zinc-900 underline decoration-blue-500 decoration-2 underline-offset-2">
                  React, TypeScript, dan Next.js
                </span>{" "}
                adalah kanvas bagi kreativitas saya dalam menghadirkan solusi
                digital yang memukau dan berorientasi pengguna.
              </p>
            </div>

            {/* Profile Image Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 md:w-full md:h-full max-w-xs mb-8">
                <Image
                  src="/images/project2.jpg"
                  alt="Foto Profil Bayu Gilang Pamungkas"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-lg object-cover border-4 border-white"
                  priority
                />
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 ${link.bgColor} font-medium rounded-xl shadow-md transition-all flex items-center gap-2`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white rounded-3xl shadow-lg p-10 border border-blue-100 mb-16">
          <h2 className="text-3xl font-bold text-zinc-800 mb-4">
            Teknologi & Keahlian
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-xl border-2 text-sm font-medium ${tech.color} hover:scale-105 transition-transform flex items-center gap-2 shadow-sm`}
              >
                <span className="text-lg">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Mari Terhubung!</h2>
          <p className="text-zinc-600 max-w-xl mb-8">
            Apakah Anda memiliki proyek menarik atau ingin berkolaborasi? Jangan
            ragu untuk menghubungi saya.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:gilangb256@gmail.com"
              className="px-6 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2"
            >
              <FaEnvelope className="text-xl" />
              <span>gilangb256@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
