import React, { useState, useEffect } from 'react';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  PROJECTS, 
  SKILL_GROUPS, 
  EDUCATION, 
  CERTIFICATIONS 
} from './data';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-navy dark:text-blue-400 mb-2">
      {children}
    </h2>
    <div className="h-1 w-20 bg-navy dark:bg-blue-500 rounded-full"></div>
  </div>
);

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark mode sebagai default
    document.documentElement.classList.add('dark');
  }, []);

  const toggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button 
      onClick={toggle}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform active:scale-95"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-navy to-blue-700 dark:from-blue-600 dark:to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
            CM
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-bold text-navy dark:text-blue-400">Carlos Marpaung</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 -mt-0.5">Software Engineer</div>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-navy dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-navy dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-navy dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-navy dark:hover:text-blue-400 transition-colors">Skills</a>
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <button className="text-slate-600 dark:text-slate-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 bg-white dark:bg-slate-950 transition-colors duration-300">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-slate-900/50 -skew-x-12 transform origin-top translate-x-1/2 -z-0 hidden lg:block"></div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
      <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-700">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
          Available for Hire
        </div>
        <div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-navy dark:text-slate-100 mb-4 tracking-tight leading-tight">
            {PERSONAL_INFO.fullName}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400">
            {PERSONAL_INFO.role}
          </p>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <a 
            href={PERSONAL_INFO.cvLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 bg-navy dark:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-navy/20 dark:hover:shadow-blue-500/20 hover:-translate-y-1 active:scale-95"
          >
            Download CV
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all hover:-translate-y-1 active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="relative animate-in fade-in zoom-in duration-700">
        <div className="absolute -inset-4 bg-navy/5 dark:bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="w-48 h-48 md:w-72 md:h-72 relative">
           <div className="absolute inset-0 bg-navy dark:bg-blue-600 rounded-2xl rotate-6 -z-10 transition-transform hover:rotate-3 duration-300"></div>
           <img 
            src={PERSONAL_INFO.profileImg} 
            alt={PERSONAL_INFO.fullName} 
            className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-slate-800 transition-transform hover:-rotate-2 duration-300"
          />
        </div>
      </div>
    </div>
  </section>
);

const ExperienceItem: React.FC<{ exp: typeof EXPERIENCES[0] }> = ({ exp }) => (
  <div className="relative pl-12 sm:pl-16 md:pl-24 ml-4 border-l border-slate-200 dark:border-slate-800 last:border-l-0 pb-16 last:pb-0">
  <div className="absolute -left-6 sm:-left-8 md:-left-10 top-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center p-2 sm:p-2.5 transition-transform hover:scale-110">
    <img src={exp.logoUrl} alt={exp.company} className="w-full h-full object-contain rounded-lg grayscale hover:grayscale-0 transition-all" />
  </div>
  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
        <p className="text-navy dark:text-blue-400 font-bold flex items-center gap-2">
          {exp.company}
          <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300"></span>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{exp.period}</span>
        </p>
      </div>
    </div>
    <ul className="grid grid-cols-1 gap-3">
      {exp.achievements.map((item, i) => (
        <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
          <svg className="w-5 h-5 text-navy dark:text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 custom-shadow hover:-translate-y-2 transition-all group h-full flex flex-col">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl text-navy dark:text-blue-400 group-hover:from-navy group-hover:to-blue-700 dark:group-hover:from-blue-600 dark:group-hover:to-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
        {project.role}
      </span>
    </div>
    <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {project.title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
      {project.techStack.map((tech, i) => (
        <span key={i} className="text-[10px] px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold rounded-md uppercase hover:border-navy dark:hover:border-blue-500 hover:text-navy dark:hover:text-blue-400 transition-colors">
          {tech}
        </span>
      ))}
    </div>
    {project.githubUrl && (
      <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-navy dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-white rounded-lg font-semibold text-sm transition-all group/btn"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View on GitHub</span>
          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    )}
  </div>
);

const SkillCategory: React.FC<{ group: typeof SKILL_GROUPS[0] }> = ({ group }) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
    <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-navy dark:bg-blue-500"></span>
      {group.category}
    </h3>
    <div className="flex flex-wrap gap-3">
      {group.items.map((skill, i) => (
        <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-navy hover:text-white dark:hover:bg-blue-600 transition-all cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-navy selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* About Section - Alternating Color */}
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>About Me</SectionTitle>
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              <div className="lg:col-span-3 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                <p>
                  As a software engineer with a strong focus on <strong className="text-navy dark:text-blue-400">Backend Development</strong> and <strong className="text-navy dark:text-blue-400">Full-Stack Systems</strong>, I build reliable and maintainable applications that solve real-world problems through clean code and practical engineering.
                </p>
                <p>
                  I enjoy working on backend logic and database-driven systems, optimizing queries, and designing application workflows that prioritize performance, accuracy, and long-term maintainability.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                     <div className="text-3xl font-bold text-navy dark:text-blue-400 mb-1">Junior</div>
                     <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Level</div>
                  </div>
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                     <div className="text-3xl font-bold text-navy dark:text-blue-400 mb-1">Backend</div>
                     <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Focus</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-navy dark:bg-blue-700 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <h4 className="text-xl font-bold mb-6 relative z-10">Professional Focus</h4>
                  <div className="space-y-4 relative z-10">
                    {['Backend Development', 'SQL & Database Systems', 'Full-Stack Web Applications', 'RESTful API Development'].map((focus, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-medium">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Alternating Color */}
        <section id="experience" className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Work Experience</SectionTitle>
            <div className="max-w-4xl mx-auto">
              {EXPERIENCES.map((exp, i) => (
                <ExperienceItem key={i} exp={exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Alternating Color */}
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Featured Projects</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section - Alternating Color */}
        <section id="skills" className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Expertise</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              {SKILL_GROUPS.map((group, i) => (
                <SkillCategory key={i} group={group} />
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certs - Alternating Color */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <SectionTitle>Education</SectionTitle>
                <div className="space-y-10 mt-8">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center text-navy dark:text-blue-400 group-hover:bg-navy group-hover:text-white transition-all">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-navy dark:group-hover:text-blue-400 transition-colors">{edu.degree}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                        <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionTitle>Certifications</SectionTitle>
                <div className="grid gap-4 mt-8">
                  {CERTIFICATIONS.map((cert, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:border-navy dark:hover:border-blue-400 transition-all group">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-2 h-8 bg-slate-100 dark:bg-slate-700 rounded-full group-hover:bg-navy dark:group-hover:bg-blue-400 transition-colors"></div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 dark:text-slate-100">{cert.name}</h4>
                          <p className="text-xs font-medium text-slate-500 uppercase tracking-tighter">{cert.issuer}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-slate-400 bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-full">
                          {cert.date}
                        </span>
                        {cert.certificateUrl && (
                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-navy dark:bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - CTA Styled */}
        <section id="contact" className="py-24 bg-navy dark:bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to build something together?
            </h2>
            <p className="text-blue-100 dark:text-slate-400 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
              I'm open to software engineering opportunities, particularly in backend and full-stack roles. Feel free to reach out if you'd like to discuss potential collaborations or career opportunities.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-5 bg-white text-navy hover:bg-blue-50 rounded-2xl transition-all font-bold shadow-2xl hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {PERSONAL_INFO.email}
              </a>
              <div className="flex gap-4">
                <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-5 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all hover:-translate-y-1">
                   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="p-5 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all hover:-translate-y-1">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 dark:bg-slate-950 py-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-navy to-blue-700 dark:from-blue-600 dark:to-blue-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  CM
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200 text-lg">{PERSONAL_INFO.fullName}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Software Engineer</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-4">
                <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-navy hover:text-white dark:hover:bg-blue-600 transition-all text-slate-600 dark:text-slate-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-navy hover:text-white dark:hover:bg-blue-600 transition-all text-slate-600 dark:text-slate-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-navy hover:text-white dark:hover:bg-blue-600 transition-all text-slate-600 dark:text-slate-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                © {new Date().getFullYear()} - Built with precision and passion.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;