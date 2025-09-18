// =======================================================================
// FILE: /components/footer.tsx
// =======================================================================
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import NextLink from "next/link";

export const Footer = () => {
  const sponsors = [
    { src: "/assets/logo_sponsor/logo_ieee.svg", alt: "IEEE" },
    { src: "/assets/logo_sponsor/logo_springer.svg", alt: "Springer" },
    { src: "/assets/logo_sponsor/logo_sciencedirect.svg", alt: "ScienceDirect" },
    { src: "/assets/logo_sponsor/logo_scopus.svg", alt: "Scopus" },
    { src: "/assets/logo_sponsor/logo_ithenticate.svg", alt: "iThenticate" },
    { src: "/assets/logo_sponsor/logo_statiska.svg", alt: "Statiska" },
    { src: "/assets/logo_sponsor/logo_sage.svg", alt: "SAGE" },
    { src: "/assets/logo_sponsor/logo_taylor&francis.svg", alt: "Taylor & Francis" },
    { src: "/assets/logo_sponsor/logo_word-scientific.svg", alt: "World Scientific" },
    { src: "/assets/logo_sponsor/logo_turnitin.svg", alt: "Turnitin" },
    { src: "/assets/logo_sponsor/logo_emerald-publishing.svg", alt: "Emerald Publishing" },
    { src: "/assets/logo_sponsor/logo_inderscience.svg", alt: "Inderscience" },
    { src: "/assets/logo_sponsor/logo_bloomsbury.svg", alt: "Bloomsbury" },
    { src: "/assets/logo_sponsor/logo_scientific-american.svg", alt: "Scientific American" },
    { src: "/assets/logo_sponsor/logo_acm.svg", alt: "ACM" },
    { src: "/assets/logo_sponsor/logo_iet.svg", alt: "IET" },
    { src: "/assets/logo_sponsor/logo_bep.svg", alt: "BEP" },
    { src: "/assets/logo_sponsor/logo_myloft.svg", alt: "MyLoft" },
    { src: "/assets/logo_sponsor/logo_one-search.svg", alt: "OneSearch" },
    { src: "/assets/logo_sponsor/logo_infralib.svg", alt: "Infralib" },
    { src: "/assets/logo_sponsor/logo_perpusnas.svg", alt: "Perpusnas" },
  ];

  return (
    <footer className="w-full bg-dark-red text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: About & Socials */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Open Library</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            A unit under the Vice Rector I for Academic Affairs. Telkom University Open Library envisions becoming a leader in IT-based knowledge and science centers to support a Global Entrepreneurial University by 2038.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="https://openlibrary.telkomuniversity.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
              <FontAwesomeIcon icon={faGlobe} size="lg" />
            </a>
            <a href="https://www.linkedin.com/school/telkom-university" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://www.instagram.com/telkomuniversity" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Right Column: Sponsors */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Partners & Sponsors</h3>
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6 justify-items-center items-center">
              {sponsors.map((sponsor) => (
                <img
                  key={sponsor.alt}
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="h-7 filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 text-center py-4">
        <p className="text-sm text-white/70">
          Copyright © {new Date().getFullYear()} Open Library. All rights reserved.
        </p>
      </div>
    </footer>
  );
};