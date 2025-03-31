// src/components/navbar/navbar.tsx
import { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SanitizedGithub, SanitizedSocial } from '../../interfaces/sanitized-config';

interface NavbarProps {
  github: SanitizedGithub;
  social: SanitizedSocial;
  loading: boolean;
}

const Navbar = ({ github, social, loading }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items
  const navItems = [
    { label: 'HOME', link: '#' },
    { label: 'ABOUT', link: '#about'},
    { label: 'PORTFOLIO', link: '#projects' },
    { label: 'TESTIMONIALS', link: '#testimonials' },
    { label: 'EXPERIENCE', link: '#experience' },
    { label: 'EDUCATION', link: '#education' },
    { label: 'ACHIEVEMENTS', link: '#achievements' },
    { label: 'OUTSIDE WORK', link: '#work' },
    { label: 'CONTACT', link: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-96 h-full bg-transparent backdrop-blur-sm flex flex-col items-center py-8 shadow-lg z-40">
      {/* Profile Photo */}
      <div className="avatar mb-6">
        <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-indigo-500 ring-offset-2 ring-offset-base-100 shadow-lg">
          <img 
            src={`https://github.com/${github.username}.png`} 
            alt={`${github.username}`}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      
      {/* Name and Title */}
      <h1 className="text-2xl font-bold text-base-content">
        {loading ? 'Loading...' : github.username}
      </h1>
      <h2 className="text-indigo-400 mb-10 text-sm"> SOFTWARE ENGINEERING</h2>
      
      {/* Navigation Links */}
      <div className="w-full px-4">
        <ul className="space-y-2 text-base-content text-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.link} 
                className={`block py-2 ${item.active ? 'text-indigo-400' : 'hover:text-indigo-400'} transition-colors`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Social Links */}
      <div className="mt-auto mb-6 flex justify-center space-x-6">
        <a
          href={`https://github.com/${github.username}`}
          target="_blank"
          rel="noreferrer"
          className="text-base-content hover:text-indigo-400 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        
        {social?.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${social.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="text-base-content hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        )}
      </div>
      
      {/* Mobile Menu Button - Only visible on small screens */}
      <div className="md:hidden fixed top-4 right-4">
        <button 
          onClick={toggleMenu}
          className="text-base-content bg-base-300 rounded-full p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <RiCloseLine className="w-6 h-6" />
          ) : (
            <RiMenuLine className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation - Slides in from the side on small screens */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-base-300 bg-opacity-95 z-50 flex flex-col items-center pt-16 animate-fadeIn">
          <button 
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-base-content"
            aria-label="Close menu"
          >
            <RiCloseLine className="w-6 h-6" />
          </button>
          
          <div className="avatar mb-4">
            <div className="w-24 h-24 rounded-full border-2 border-indigo-500/50">
              <img 
                src={`https://github.com/${github.username}.png`} 
                alt={`${github.username}`}
              />
            </div>
          </div>
          
          <h1 className="text-xl font-bold mb-1">{loading ? 'Loading...' : github.username}</h1>
          <h2 className="text-indigo-400 mb-6 text-sm">PRODUCT MANAGER</h2>
          
          <ul className="space-y-4 text-center w-full px-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.link} 
                  onClick={toggleMenu}
                  className={`block py-2 ${item.active ? 'text-indigo-400' : 'hover:text-indigo-400'} transition-colors`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 flex space-x-6">
            <a
              href={`https://github.com/${github.username}`}
              target="_blank"
              rel="noreferrer"
              className="text-base-content hover:text-indigo-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            
            {social?.linkedin && (
              <a
                href={`https://www.linkedin.com/in/${social.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="text-base-content hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;