// import React from 'react';
// import { SanitizedEducation } from '../../interfaces/sanitized-config';
// import { skeleton } from '../../utils';

// const ListItem = ({
//   time,
//   degree,
//   institution,
// }: {
//   time: React.ReactNode;
//   degree?: React.ReactNode;
//   institution?: React.ReactNode;
// }) => (
//   <li className="mb-5 ml-4">
//     <div
//       className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
//       style={{ left: '-4.5px' }}
//     ></div>
//     <div className="my-0.5 text-xs">{time}</div>
//     <h3 className="font-semibold">{degree}</h3>
//     <div className="mb-4 font-normal">{institution}</div>
//   </li>
// );

// const EducationCard = ({
//   loading,
//   educations,
// }: {
//   loading: boolean;
//   educations: SanitizedEducation[];
// }) => {
//   const renderSkeleton = () => {
//     const array = [];
//     for (let index = 0; index < 2; index++) {
//       array.push(
//         <ListItem
//           key={index}
//           time={skeleton({
//             widthCls: 'w-5/12',
//             heightCls: 'h-4',
//           })}
//           degree={skeleton({
//             widthCls: 'w-6/12',
//             heightCls: 'h-4',
//             className: 'my-1.5',
//           })}
//           institution={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
//         />,
//       );
//     }

//     return array;
//   };

//   return (
//     <div className="card shadow-lg compact bg-transparent border border-slate-700/30 cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500/20 hover:to-purple-600/30 backdrop-blur-sm">
      
//       <div className="card-body">
//         <div className="mx-3">
//           <h5 className="card-title">
//             {loading ? (
//               skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
//             ) : (
//               <span className="text-base-content opacity-70">Education</span>
//             )}
//           </h5>
//         </div>
//         <div className="text-base-content text-opacity-60">
//           <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
//             {loading ? (
//               renderSkeleton()
//             ) : (
//               <>
//                 {educations.map((item, index) => (
//                   <ListItem
//                     key={index}
//                     time={`${item.from} - ${item.to}`}
//                     degree={item.degree}
//                     institution={item.institution}
//                   />
//                 ))}
//               </>
//             )}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationCard;

import React, { useState } from 'react';
import { SanitizedEducation } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaChevronDown, FaChevronUp, FaGraduationCap, FaUniversity } from 'react-icons/fa';

interface EducationItemProps {
  time: string;
  degree?: string;
  institution?: string;
  gpa?: string;
  relevantCourses?: string[];
  awards?: string[];
  expanded: boolean;
  toggleExpand: () => void;
}

const EducationItem: React.FC<EducationItemProps> = ({
  time,
  degree,
  institution,
  gpa,
  relevantCourses,
  awards,
  expanded,
  toggleExpand
}) => (
  <div className="mb-6 bg-base-100 bg-opacity-30 rounded-lg p-4 border border-base-300 border-opacity-30 transition-all duration-300 hover:shadow-md">
    <div 
      className="flex justify-between items-center cursor-pointer" 
      onClick={toggleExpand}
    >
      <div className="flex-1">
        <div className="flex items-center">
          {degree?.toLowerCase().includes('master') || degree?.toLowerCase().includes('m.s.') ? (
            <FaGraduationCap className="mr-2 text-primary opacity-70" />
          ) : (
            <FaUniversity className="mr-2 text-primary opacity-70" />
          )}
          <h3 className="font-bold text-base">{degree}</h3>
        </div>
        <div className="text-sm opacity-70 mt-1">{institution}</div>
        <div className="text-xs opacity-60 mt-1">{time}</div>
      </div>
      <div>
        {expanded ? (
          <FaChevronUp className="text-primary opacity-70" />
        ) : (
          <FaChevronDown className="text-primary opacity-70" />
        )}
      </div>
    </div>
    
    {expanded && (
      <div className="mt-4 text-sm pt-3 border-t border-base-300 border-opacity-30">
        {gpa && (
          <div className="mb-2">
            <span className="font-semibold">GPA: </span>
            <span className="opacity-70">{gpa}</span>
          </div>
        )}
        
        {relevantCourses && relevantCourses.length > 0 && (
          <div className="mb-3">
            <h4 className="font-semibold mb-1">Relevant Coursework:</h4>
            <ul className="list-disc pl-5 opacity-70 space-y-1">
              {relevantCourses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        )}
        
        {awards && awards.length > 0 && (
          <div>
            <h4 className="font-semibold mb-1">Achievements & Awards:</h4>
            <ul className="list-disc pl-5 opacity-70 space-y-1">
              {awards.map((award, i) => (
                <li key={i}>{award}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )}
  </div>
);

interface EnhancedEducation extends SanitizedEducation {
  gpa?: string;
  relevantCourses?: string[];
  awards?: string[];
  type: 'undergraduate' | 'graduate' | 'other';
}

const EducationCard = ({
  loading,
  educations,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
}) => {
  // Track expanded state for each education item
  const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>({});
  
  // Enhanced educations with additional fields and categorization
  const enhancedEducations: EnhancedEducation[] = educations.map(edu => {
    const enhanced = { 
      ...edu,
      // Determine type based on degree
      type: edu.degree?.toLowerCase().includes('master') || 
             edu.degree?.toLowerCase().includes('m.s.') || 
             edu.degree?.toLowerCase().includes('ph.d') ? 
             'graduate' : 'undergraduate',
      // Additional info can be extracted from degree/institution if needed
      gpa: (edu as any).GPA,
      relevantCourses: (edu as any).relevantCourses || [],
      awards: (edu as any).awards || []
    };
    return enhanced;
  });
  
  // Group by education type
  const graduateEducation = enhancedEducations.filter(edu => edu.type === 'graduate');
  const undergraduateEducation = enhancedEducations.filter(edu => edu.type === 'undergraduate');
  const otherEducation = enhancedEducations.filter(edu => edu.type === 'other');
  
  const toggleExpand = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const renderSkeleton = () => {
    return (
      <div className="space-y-4">
        {[1, 2].map((_, index) => (
          <div key={index} className="bg-base-100 bg-opacity-30 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                {skeleton({ widthCls: 'w-3/4', heightCls: 'h-5', className: 'mb-2' })}
                {skeleton({ widthCls: 'w-1/2', heightCls: 'h-4', className: 'mb-2' })}
                {skeleton({ widthCls: 'w-1/3', heightCls: 'h-3' })}
              </div>
              <div>
                {skeleton({ widthCls: 'w-4', heightCls: 'h-4', shape: 'rounded' })}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderEducationSection = (items: EnhancedEducation[], title: string, startIndex: number) => {
    if (items.length === 0) return null;
    
    return (
      <div className="mb-6">
        <h3 className="text-base-content opacity-80 font-bold mb-3 pl-2 border-l-4 border-primary">
          {title}
        </h3>
        <div className="space-y-3">
          {items.map((item, idx) => (
            <EducationItem
              key={startIndex + idx}
              time={`${item.from} - ${item.to}`}
              degree={item.degree}
              institution={item.institution}
              gpa={item.gpa}
              relevantCourses={item.relevantCourses}
              awards={item.awards}
              expanded={!!expandedItems[startIndex + idx]}
              toggleExpand={() => toggleExpand(startIndex + idx)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/30 backdrop-blur-sm">
      <div className="card-body">
        <div className="flex items-center mb-4">
          <FaGraduationCap className="text-primary mr-2 text-xl" />
          <h5 className="card-title text-base-content opacity-80 m-0">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span>Education</span>
            )}
          </h5>
        </div>
        
        <div className="text-base-content">
          {loading ? (
            renderSkeleton()
          ) : (
            <>
              {renderEducationSection(graduateEducation, "Graduate Education", 0)}
              {renderEducationSection(undergraduateEducation, "Undergraduate Education", graduateEducation.length)}
              {renderEducationSection(otherEducation, "Other Education", graduateEducation.length + undergraduateEducation.length)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;