
import React from 'react';
import { 
  WORK_EXPERIENCES_DATA, 
  // SKILL_CATEGORIES_DATA, // Removed
  CAREER_OUTLOOK_DATA,
  INTRO_TEXT,
  SKILLS_HIGHLIGHTS_CONTENT // Added
  // AUTHOR_NAME, // No longer directly used here
  // SITE_TITLE // No longer directly used here
} from '../constants';
// import { WorkExperienceItem, SkillCategory, Skill } from '../types'; // SkillCategory and Skill removed from types
import { WorkExperienceItem } from '../types';


const SectionTitle: React.FC<{ children: React.ReactNode; id: string }> = ({ children, id }) => (
  <h2 id={id} className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 md:mb-12 text-center relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-20 after:h-1 after:bg-indigo-500 after:rounded-full">
    {children}
  </h2>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Intro Section */}
      <section id="intro" className="py-12 md:py-20 text-center bg-white rounded-xl shadow-lg">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-4">
            {INTRO_TEXT.greeting}
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 font-medium mb-6">
            {INTRO_TEXT.tagline}
          </p>
          <p className="text-md md:text-lg text-slate-500 leading-relaxed">
            {INTRO_TEXT.bio}
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" aria-labelledby="experience-heading">
        <SectionTitle id="experience-heading">工作经历</SectionTitle>
        <div className="space-y-12">
          {WORK_EXPERIENCES_DATA.map((exp: WorkExperienceItem) => (
            <div key={exp.id} className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-start">
              {exp.logoUrl && (
                <img src={exp.logoUrl} alt={`${exp.company} logo`} className="w-20 h-20 rounded-full mb-4 md:mb-0 md:mr-6 object-contain border border-slate-200 p-1 flex-shrink-0" />
              )}
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-slate-800 mb-1">{exp.role}</h3>
                <p className="text-indigo-600 font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-slate-500 mb-3">{exp.duration}</p>
                <div 
                  className="text-slate-600 space-y-2" // prose classes are in the constant string itself
                  dangerouslySetInnerHTML={{ __html: exp.description }} 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" aria-labelledby="skills-heading">
        <SectionTitle id="skills-heading">核心能力与语言优势</SectionTitle>
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <div dangerouslySetInnerHTML={{ __html: SKILLS_HIGHLIGHTS_CONTENT }} />
        </div>
      </section>

      {/* Career Outlook Section */}
      <section id="outlook" aria-labelledby="outlook-heading">
        <SectionTitle id="outlook-heading">{CAREER_OUTLOOK_DATA.title}</SectionTitle>
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <div 
            dangerouslySetInnerHTML={{ __html: CAREER_OUTLOOK_DATA.content }} 
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
