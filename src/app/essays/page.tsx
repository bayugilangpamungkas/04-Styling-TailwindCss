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
}

const articles: Article[] = [
  {
    slug: "memulai-dengan-nextjs",
    date: "26 Juli 2024",
    title: "Memulai dengan Next.js",
    description:
      "Panduan lengkap memulai project dengan Next.js dan TypeScript. Pelajari cara membangun aplikasi modern dengan performa tinggi.",
    category: "Framework",
  },
  {
    slug: "belajar-typescript",
    date: "26 Juli 2024",
    title: "Belajar TypeScript untuk Pemula",
    description:
      "Pengenalan dasar TypeScript untuk pengembang JavaScript. Pahami type system dan cara menggunakannya untuk meningkatkan kualitas kode.",
    category: "Programming",
  },
  {
    slug: "optimasi-react",
    date: "26 Juli 2024",
    title: "Teknik Optimasi Performa React",
    description:
      "Pelajari berbagai teknik untuk meningkatkan kecepatan aplikasi React Anda, termasuk memoization, code splitting, dan lazy loading.",
    category: "Performance",
  },
  {
    slug: "tailwind-css-tips",
    date: "26 Juli 2024",
    title: "Tips dan Trik Tailwind CSS",
    description:
      "Kumpulan tips dan trik untuk meningkatkan workflow pengembangan dengan Tailwind CSS. Dapatkan hasil maksimal dengan utility-first CSS.",
    category: "Styling",
  },
];

export default function Essays() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="font-extrabold text-4xl md:text-5xl text-gray-800 mb-4 relative inline-block">
            Esai
            <span className="absolute -bottom-2 left-1/2 w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
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
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex justify-between items-center mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                  <time className="text-sm text-gray-500">{article.date}</time>
                </div>

                {/* Title */}
                <h2 className="font-semibold text-2xl text-gray-800 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-600 line-clamp-3">
                  {article.description}
                </p>

                {/* Read More Link */}
                <div className="mt-6 flex justify-end">
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:underline">
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
