import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, InstagramIcon as TiktokIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#121d3e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="Creating Opportunities Logo" width={120} height={120} className="h-auto" />
            </Link>
            <p className="text-sm md:text-base mb-4">
              Creating Opportunities International is Nepal's foremost platform for educational and professional
              opportunities.
            </p>
            <div className="flex space-x-3">
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://youtube.com" icon={<Youtube size={18} />} label="YouTube" />
              <SocialLink href="https://tiktok.com" icon={<TiktokIcon size={18} />} label="TikTok" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/services" label="Our Services" />
              <FooterLink href="/events-projects" label="Events & Projects" />
              <FooterLink href="/portfolio" label="Portfolio" />
              <FooterLink href="/contact" label="Contact Us" />
              <FooterLink href="/donate" label="Donate" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Opportunities</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <FooterLink href="/opportunities/jobs" label="Jobs" />
              <FooterLink href="/opportunities/internships" label="Internships" />
              <FooterLink href="/opportunities/fellowships" label="Fellowships" />
              <FooterLink href="/opportunities/scholarships" label="Scholarships" />
              <FooterLink href="/opportunities/competitions" label="Competitions" />
              <FooterLink href="/opportunities/workshops" label="Workshops" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-sm md:text-base">
              <p className="mb-2">Kathmandu, Nepal</p>
              <p className="mb-2">
                <a href="mailto:info@creatingoppo.com" className="hover:text-[#0e9aa7]">
                  info@creatingoppo.com
                </a>
              </p>
              <p className="mb-2">
                <a href="tel:+9771234567890" className="hover:text-[#0e9aa7]">
                  +977 1234 567 890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Creating Opportunities International. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-[#0e9aa7]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#0e9aa7]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-[#0e9aa7] transition-colors">
        {label}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="bg-white/10 hover:bg-[#0e9aa7] p-2 rounded-full transition-colors" aria-label={label}>
      {icon}
    </Link>
  )
}
