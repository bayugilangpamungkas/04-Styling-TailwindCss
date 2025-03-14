"use client";
import { usePathname } from "next/navigation";

type NavItemProps = {
  title: string;
  url: string;
  isSelected: boolean;
};

function NavItem({ title, url, isSelected }: NavItemProps) {
  return (
    <li>
      <a
        className={`block px-3 py-2 transition hover:text-teal-500 ${
          isSelected ? "text-teal-500" : ""
        }`}
        href={url}
      >
        {title}
      </a>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6 bg-gray-900 border-2">
      <nav>
        <ul className="flex rounded-full px-3 text-sm font-medium text-white shadow-lg ring-1 ring-gray-700 backdrop-blur bg-gray-800 shadow-gray-950">
          <NavItem title="Tentang Saya" url="/" isSelected={pathname === "/"} />
          <NavItem
            title="Proyek"
            url="/projects"
            isSelected={pathname === "/projects"}
          />
          <NavItem
            title="Esai"
            url="/essays"
            isSelected={pathname === "/essays"}
          />
        </ul>
      </nav>
    </div>
  );
}
