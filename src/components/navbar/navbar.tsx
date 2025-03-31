// // import { useState } from 'react';
// // import { AiFillGithub } from 'react-icons/ai';
// // import { FaLinkedin } from 'react-icons/fa';
// // import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
// // import { SanitizedGithub, SanitizedSocial } from '../../interfaces/sanitized-config';
// // import { BG_COLOR } from '../../constants';

// // interface NavbarProps {
// //   github: SanitizedGithub;
// //   social: SanitizedSocial;
// //   loading: boolean;
// // }

// // const Navbar = ({ github, social, loading }: NavbarProps) => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <nav className={`sticky top-0 z-50 ${BG_COLOR} shadow-md`}>
// //       <div className="container mx-auto px-4 py-3">
// //         <div className="flex justify-between items-center">
// //           {/* Logo/Brand */}
// //           <div className="flex items-center">
// //             <a 
// //               href="#" 
// //               className="text-lg font-bold text-base-content opacity-80"
// //             >
// //               {loading ? 'Loading...' : `${github.username}'s Portfolio`}
// //             </a>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex items-center space-x-6">
// //             <a href="#about" className="text-base-content opacity-70 hover:opacity-100 transition-opacity">
// //               About
// //             </a>
// //             <a href="#skills" className="text-base-content opacity-70 hover:opacity-100 transition-opacity">
// //               Skills
// //             </a>
// //             <a href="#projects" className="text-base-content opacity-70 hover:opacity-100 transition-opacity">
// //               Projects
// //             </a>
// //             <a href="#experience" className="text-base-content opacity-70 hover:opacity-100 transition-opacity">
// //               Experience
// //             </a>
// //             {/* Social Links */}
// //             <div className="flex items-center space-x-3">
// //               {github.username && (
// //                 <a
// //                   href={`https://github.com/${github.username}`}
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="text-base-content opacity-70 hover:opacity-100"
// //                 >
// //                   <AiFillGithub className="w-5 h-5" />
// //                 </a>
// //               )}
// //               {social?.linkedin && (
// //                 <a
// //                   href={`https://www.linkedin.com/in/${social.linkedin}`}
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="text-base-content opacity-70 hover:opacity-100"
// //                 >
// //                   <FaLinkedin className="w-5 h-5" />
// //                 </a>
// //               )}
// //             </div>
// //           </div>

// //           {/* Mobile menu button */}
// //           <div className="md:hidden flex items-center">
// //             <button 
// //               onClick={toggleMenu}
// //               className="text-base-content opacity-70 hover:opacity-100 focus:outline-none"
// //             >
// //               {isMenuOpen ? (
// //                 <RiCloseLine className="w-6 h-6" />
// //               ) : (
// //                 <RiMenuLine className="w-6 h-6" />
// //               )}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isMenuOpen && (
// //           <div className="md:hidden pt-4 pb-2">
// //             <div className="flex flex-col space-y-3">
// //               <a 
// //                 href="#about" 
// //                 onClick={toggleMenu}
// //                 className="text-base-content opacity-70 hover:opacity-100 py-2 transition-opacity"
// //               >
// //                 About
// //               </a>
// //               <a 
// //                 href="#skills" 
// //                 onClick={toggleMenu}
// //                 className="text-base-content opacity-70 hover:opacity-100 py-2 transition-opacity"
// //               >
// //                 Skills
// //               </a>
// //               <a 
// //                 href="#projects" 
// //                 onClick={toggleMenu}
// //                 className="text-base-content opacity-70 hover:opacity-100 py-2 transition-opacity"
// //               >
// //                 Projects
// //               </a>
// //               <a 
// //                 href="#experience" 
// //                 onClick={toggleMenu}
// //                 className="text-base-content opacity-70 hover:opacity-100 py-2 transition-opacity"
// //               >
// //                 Experience
// //               </a>
// //               {/* Mobile Social Links */}
// //               <div className="flex items-center space-x-3 py-2">
// //                 {github.username && (
// //                   <a
// //                     href={`https://github.com/${github.username}`}
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     className="text-base-content opacity-70 hover:opacity-100"
// //                   >
// //                     <AiFillGithub className="w-5 h-5" />
// //                   </a>
// //                 )}
// //                 {social?.linkedin && (
// //                   <a
// //                     href={`https://www.linkedin.com/in/${social.linkedin}`}
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     className="text-base-content opacity-70 hover:opacity-100"
// //                   >
// //                     <FaLinkedin className="w-5 h-5" />
// //                   </a>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import { useState } from 'react';
// import { AiFillGithub } from 'react-icons/ai';
// import { FaLinkedin, FaStar } from 'react-icons/fa';
// import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
// import { SiRocket } from 'react-icons/si';
// import { SanitizedGithub, SanitizedSocial } from '../../interfaces/sanitized-config';

// interface NavbarProps {
//   github: SanitizedGithub;
//   social: SanitizedSocial;
//   loading: boolean;
// }

// const Navbar = ({ github, social, loading }: NavbarProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo/Brand */}
//           <div className="flex items-center">
//             <SiRocket className="text-purple-400 mr-2 h-6 w-6" />
//             <a 
//               href="#" 
//               className="text-lg font-bold text-white flex items-center"
//             >
//               {loading ? 'Loading...' : (
//                 <>
//                   <span className="mr-1">{github.username}'s</span>
//                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Portfolio</span>
//                 </>
//               )}
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#about" className="text-white opacity-80 hover:opacity-100 hover:text-purple-300 transition-all flex items-center">
//               <FaStar className="mr-1 h-3 w-3" />
//               <span>About</span>
//             </a>
//             <a href="#skills" className="text-white opacity-80 hover:opacity-100 hover:text-purple-300 transition-all flex items-center">
//               <FaStar className="mr-1 h-3 w-3" />
//               <span>Skills</span>
//             </a>
//             <a href="#projects" className="text-white opacity-80 hover:opacity-100 hover:text-purple-300 transition-all flex items-center">
//               <FaStar className="mr-1 h-3 w-3" />
//               <span>Projects</span>
//             </a>
//             <a href="#experience" className="text-white opacity-80 hover:opacity-100 hover:text-purple-300 transition-all flex items-center">
//               <FaStar className="mr-1 h-3 w-3" />
//               <span>Experience</span>
//             </a>
            
//             {/* Social Links */}
//             <div className="flex items-center space-x-4 ml-4">
//               {github.username && (
//                 <a
//                   href={`https://github.com/${github.username}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-white hover:text-purple-300 transition-colors"
//                 >
//                   <AiFillGithub className="w-5 h-5" />
//                 </a>
//               )}
//               {social?.linkedin && (
//                 <a
//                   href={`https://www.linkedin.com/in/${social.linkedin}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-white hover:text-purple-300 transition-colors"
//                 >
//                   <FaLinkedin className="w-5 h-5" />
//                 </a>
//               )}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button 
//               onClick={toggleMenu}
//               className="text-white focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <RiCloseLine className="w-6 h-6" />
//               ) : (
//                 <RiMenuLine className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden pt-6 pb-4 animate-fadeIn">
//             <div className="flex flex-col space-y-4">
//               <a 
//                 href="#about" 
//                 onClick={toggleMenu}
//                 className="text-white opacity-80 hover:opacity-100 hover:text-purple-300 transition-all py-2 flex items-center"
//               >
//                 <FaStar className="mr-2 h-3 w-3" />
//                 <span>About</span>
//               </a>
//               <a 
//                 href="#skills" 
//                 onClick={toggleMenu}
//                 className="text-white opacity-80 hover:opacity-100 hover:text-purple-300 transition-all py-2 flex items-center"
//               >
//                 <FaStar className="mr-2 h-3 w-3" />
//                 <span>Skills</span>
//               </a>
//               <a 
//                 href="#projects" 
//                 onClick={toggleMenu}
//                 className="text-white opacity-80 hover:opacity-100 hover:text-purple-300 transition-all py-2 flex items-center"
//               >
//                 <FaStar className="mr-2 h-3 w-3" />
//                 <span>Projects</span>
//               </a>
//               <a 
//                 href="#experience" 
//                 onClick={toggleMenu}
//                 className="text-white opacity-80 hover:opacity-100 hover:text-purple-300 transition-all py-2 flex items-center"
//               >
//                 <FaStar className="mr-2 h-3 w-3" />
//                 <span>Experience</span>
//               </a>
              
//               {/* Mobile Social Links */}
//               <div className="flex items-center space-x-4 py-2">
//                 {github.username && (
//                   <a
//                     href={`https://github.com/${github.username}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-white hover:text-purple-300 transition-colors"
//                   >
//                     <AiFillGithub className="w-5 h-5" />
//                   </a>
//                 )}
//                 {social?.linkedin && (
//                   <a
//                     href={`https://www.linkedin.com/in/${social.linkedin}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-white hover:text-purple-300 transition-colors"
//                   >
//                     <FaLinkedin className="w-5 h-5" />
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;