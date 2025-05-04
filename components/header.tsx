"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  InstagramIcon as TiktokIcon,
  X,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#121d3e] text-white py-1 px-4 flex justify-between items-center">
        <div>
          <a href="mailto:info@creatingoppo.com" className="text-sm">
            info@creatingoppo.com
          </a>
        </div>
        <div className="flex space-x-4">
          <Link href="https://facebook.com" aria-label="Facebook">
            <Facebook size={18} />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter">
            <Twitter size={18} />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <Instagram size={18} />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn">
            <Linkedin size={18} />
          </Link>
          <Link href="https://youtube.com" aria-label="YouTube">
            <Youtube size={18} />
          </Link>
          <Link href="https://tiktok.com" aria-label="TikTok">
            <TiktokIcon size={18} />
          </Link>
        </div>
      </div>
      <nav className="bg-white py-2 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.jpg" // Ensure the image is in the 'public/assets/' directory
              alt="Creating Opportunities Logo"
              width={80}
              height={80}
              className="h-auto"
              priority
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavDropdown
              label="Events & Projects"
              items={[
       
                {
                  href: "/events-projects/our-projects",
                  label: "Our Projects and events",
                },
                {
                  href: "/events-projects/our-initiatives",
                  label: "Our Initiatives",
                },
               
              ]}
            />
            <NavDropdown
              label="Our Portfolio"
              items={[
                { href: "/portfolio", label: "Portfolio" },
                { href: "/portfolio/gallery", label: "Gallery" },
                { href: "/portfolio/blog", label: "Blog" },
              ]}
            />
            <NavDropdown
              label="Our Services"
              items={[
                { href: "/services", label: "Services" },

                { href: "/services/merchandise", label: "Merchandise" },
              ]}
            />
            <NavDropdown
              label="Contact Us"
              items={[
                { href: "/contact", label: "Contact Form" },
                { href: "/donate", label: "Donate" },
              ]}
            />
            <NavDropdown
              label="Opportunities"
              items={[
                { href: "/opportunities", label: "All Opportunities" },
                { href: "/opportunities/jobs", label: "Jobs" },
                { href: "/opportunities/internships", label: "Internships" },
                { href: "/opportunities/fellowships", label: "Fellowships" },
                { href: "/opportunities/scholarships", label: "Scholarships" },
                { href: "/opportunities/competitions", label: "Competitions" },
                { href: "/opportunities/workshops", label: "Workshops" },
              
                { href: "/opportunities/post", label: "Post Opportunity" },
              ]}
            />
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50 max-h-[80vh] overflow-y-auto">
          <div className="py-2 px-4">
            <MobileNavLink
              href="/"
              label="Home"
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="/about"
              label="About"
              onClick={() => setMobileMenuOpen(false)}
            />

            <MobileNavAccordion label="Events & Projects">
            
              <MobileNavLink
                href="/events-projects/our-projects"
                label="Our Projects"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="/events-projects/our-initiatives"
                label="Our Initiatives"
                onClick={() => setMobileMenuOpen(false)}
              />
              
            </MobileNavAccordion>

            <MobileNavAccordion label="Our Portfolio">
              <MobileNavLink
                href="/portfolio"
                label="Portfolio"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="/portfolio/gallery"
                label="Gallery"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="/portfolio/blog"
                label="Blog"
                onClick={() => setMobileMenuOpen(false)}
              />
            </MobileNavAccordion>

            <MobileNavAccordion label="Our Services">
              <MobileNavLink
                href="/services"
                label="Services"
                onClick={() => setMobileMenuOpen(false)}
              />
             
              <MobileNavLink
                href="/services/merchandise"
                label="Merchandise"
                onClick={() => setMobileMenuOpen(false)}
              />
            </MobileNavAccordion>

            <MobileNavAccordion label="Contact Us">
              <MobileNavLink
                href="/contact"
                label="Contact Form"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="/donate"
                label="Donate"
                onClick={() => setMobileMenuOpen(false)}
              />
            </MobileNavAccordion>

            <MobileNavAccordion label="Opportunities">
              <MobileNavLink
                href="/opportunities"
                label="All Opportunities"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="/opportunities/jobs"
                label="Jobs"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="/opportunities/internships"
                label="Internships"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="/opportunities/fellowships"
                label="Fellowships"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="/opportunities/scholarships"
                label="Scholarships"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="/opportunities/competitions"
                label="Competitions"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="/opportunities/workshops"
                label="Workshops"
                onClick={() => setMobileMenuOpen(false)}
              />
             
              <MobileNavLink
                href="/opportunities/post"
                label="Post Opportunity"
                onClick={() => setMobileMenuOpen(false)}
              />
            </MobileNavAccordion>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-gray-800 hover:text-[#0e76bc] font-medium"
    >
      {label}
    </Link>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className="relative group">
      <button className="text-gray-800 hover:text-[#0e76bc] font-medium flex items-center">
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="py-1">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="block py-2 text-gray-800 hover:text-[#0e76bc] border-b border-gray-100"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

function MobileNavAccordion({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        className="flex justify-between items-center w-full py-2 text-gray-800 hover:text-[#0e76bc] font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`pl-4 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
