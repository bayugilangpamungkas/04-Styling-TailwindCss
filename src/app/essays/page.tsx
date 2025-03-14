import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Esai",
  description: "Kumpulan esai saya.",
  openGraph: {
    title: "Esai",
    description: "Kumpulan esai saya.",
  },
};

interface Article {
  slug: string;
  date: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
}

const articles: Article[] = [
  {
    slug: "memulai-dengan-nextjs",
    date: "26 Juli 2024",
    title: "Memulai dengan Next.js",
    description:
      "Panduan lengkap memulai project dengan Next.js dan TypeScript. Pelajari cara membangun aplikasi modern dengan performa tinggi.",
    category: "Framework",
    categoryColor: "bg-purple-200 text-purple-800",
  },
  {
    slug: "belajar-typescript",
    date: "26 Juli 2024",
    title: "Belajar TypeScript untuk Pemula",
    description:
      "Pengenalan dasar TypeScript untuk pengembang JavaScript. Pahami type system dan cara menggunakannya untuk meningkatkan kualitas kode.",
    category: "Programming",
    categoryColor: "bg-blue-200 text-blue-800",
  },
  {
    slug: "optimasi-react",
    date: "26 Juli 2024",
    title: "Teknik Optimasi Performa React",
    description:
      "Pelajari berbagai teknik untuk meningkatkan kecepatan aplikasi React Anda, termasuk memoization, code splitting, dan lazy loading.",
    category: "Performance",
    categoryColor: "bg-green-200 text-green-800",
  },
  {
    slug: "tailwind-css-tips",
    date: "26 Juli 2024",
    title: "Tips dan Trik Tailwind CSS",
    description:
      "Kumpulan tips dan trik untuk meningkatkan workflow pengembangan dengan Tailwind CSS. Dapatkan hasil maksimal dengan utility-first CSS.",
    category: "Styling",
    categoryColor: "bg-rose-200 text-rose-800",
  },
];

export default function Essays() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-8">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl"></div>

      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="font-extrabold text-4xl md:text-5xl text-white mb-4 relative inline-block">
            Esai
            <span className="absolute -bottom-2 left-1/2 w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Tulisan dan pemikiran saya tentang teknologi dan pengembangan web.
            Berbagi pengalaman dan wawasan dari perjalanan coding saya.
          </p>
        </header>

        {/* Essay Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article: Article) => (
            <Link
              href={`/essays/${article.slug}`}
              key={article.slug}
              className="group block bg-gray-900/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 transform hover:-translate-y-2"
            >
              <div className="p-6 relative">
                {/* Floating Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Category & Date */}
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${article.categoryColor}`}
                  >
                    {article.category}
                  </span>
                  <time className="text-sm text-gray-400">{article.date}</time>
                </div>

                {/* Title */}
                <h2 className="font-semibold text-2xl text-white group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-400 line-clamp-3">
                  {article.description}
                </p>

                {/* Read More Link */}
                <div className="mt-6 flex justify-end">
                  <span className="inline-flex items-center text-sm font-medium text-blue-400 group-hover:underline">
                    Baca selengkapnya
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
