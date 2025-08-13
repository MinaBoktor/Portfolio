import React, { useState, useEffect, useRef, memo } from 'react';
import career180 from '../assets/career180.png';
import react from '../assets/react.png';
import harvard from '../assets/harvard.png';
import meta from '../assets/meta.png';




const TimelineItem = memo(({ exp, isVisible, index }) => {
  return (
    <div
      data-id={exp.id}
      data-timeline-item
      className="relative mb-12 md:mb-16 group"
    >
      {/* Timeline Year Badge */}
      <div
        className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 z-30 transition-all duration-500`}
      >
        <div
          className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-xl border-4 border-slate-900 bg-gradient-to-r ${exp.color} ${
            isVisible ? `${exp.glowColor} shadow-lg` : ''
          }`}
        >
          {exp.year}
        </div>
      </div>

      {/* Content Container */}
      <div
        className={`ml-20 md:ml-0 transition-all duration-700 ${
          index % 2 === 0 ? 'md:pr-1/2 md:pr-12' : 'md:pl-1/2 md:pl-12'
        } ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : `opacity-0 ${index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'}`
        }`}
      >
        {/* Timeline Card */}
        <div
          className={`timeline-card relative bg-slate-800/95 backdrop-blur-sm border-2 rounded-2xl p-6 md:p-8 transition-all duration-500 border-slate-700 shadow-lg hover:border-slate-600`}
        >
          {/* Connecting Line */}
          <div
            className={`hidden md:block absolute top-8 w-12 h-0.5 bg-gradient-to-r ${exp.color} ${
              index % 2 === 0 ? '-right-12' : '-left-12'
            } transition-all duration-500`}
          />

          {/* Card Arrow */}
          <div
            className={`hidden md:block absolute top-6 w-4 h-4 transform rotate-45 border-2 bg-slate-800 border-slate-700 ${
              index % 2 === 0 ? '-right-2' : '-left-2'
            }`}
          />

          {/* Hover Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
          />

          {/* Card Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`text-4xl p-3 rounded-xl `}
              >
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-14 h-14 mt-10" />
              </div>

              <div className="flex-1 min-w-0">
                {/* Type Badge */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg transition-all duration-300 ${
                      exp.type === 'Internship'
                        ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400/50'
                        : 'bg-blue-500/30 text-blue-300 border border-blue-400/50'
                    } hover:scale-105 shadow-xl`}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 leading-tight transition-colors duration-300 group-hover:text-slate-100">
                  {exp.role}
                </h3>

                {/* Company */}
                <div className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-slate-200">
                  {exp.company}
                </div>

                {/* Date and Location */}
                <div className="space-y-1 text-slate-300">
                  <div className="font-semibold text-lg">{exp.period}</div>
                  <div className="text-sm opacity-90">
                    {exp.location} • {exp.duration}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3 mb-6">
              {exp.achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 bg-gradient-to-r ${exp.color} shadow-sm hover:scale-125 hover:shadow-md`}
                  />
                  <p className="leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-slate-700/60 border border-slate-600/60 text-slate-300 text-sm font-medium rounded-lg hover:border-slate-500 hover:bg-slate-600/60 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const Career = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);

  const experiences = [
    {
      id: 1,
      role: "Freelancer Full Stack Web Developer",
      company: "React.js",
      type: "Part-time",
      period: "Jul 2025 - Aug 2025",
      duration: "2 mos",
      location: "Cairo · Remote",
      achievements: [
        "Customizing Storefronts with Shopify's Liquid template language",
        "Styling and Responsiveness using CSS for seamless user experience",
        "Theme Management ensuring efficient implementation",
        "Troubleshooting design-related bugs and issues"
      ],
      skills: ["Liquid", "HTML5", "+3 skills"],
      color: "from-green-400 to-emerald-400",
      shadowColor: "shadow-green-500/30",
      glowColor: "shadow-emerald-400/50",
      logo: react,
      year: "2025"
    },
    {
      id: 2,
      role: "Software Quality Assurance Intern",
      company: "Career 180",
      type: "Internship",
      period: "Sep 2024 - Dec 2024",
      duration: "4 mos",
      location: "Cairo · Hybrid",
      achievements: [
        "Full ISTQB Foundation level and Agile certificate",
        "Manual testing: writing test cases and bug reports",
        "API testing using Postman",
        "Testing Automation using Selenium"
      ],
      skills: ["Test Assurance", "Software Quality", "+3 skills"],
      color: "from-red-400 to-pink-400",
      shadowColor: "shadow-red-500/30",
      glowColor: "shadow-red-400/50",
      logo: career180,
      year: "2024"
    },

    {
      id: 3,
      role: "Meta Front End Web Developer",
      company: "Meta",
      type: "Internship",
      period: "Sep 2023 - Nov 2023",
      duration: "3 mos",
      location: "United States · Remote",
      achievements: [
        "Successfully completed Meta Front-End Developer Professional Certificate",
        "Mastered essential development tools including Git/GitHub for version control",
        "Gained proficiency in ReactJS framework and UI/UX design principles",
        "Built complete web application as capstone project showcasing clean, functional design"
      ],
      skills: ["ReactJS", "JavaScript", "+3 skills"],
      color: "from-blue-400 to-cyan-400",
      shadowColor: "shadow-blue-500/30",
      glowColor: "shadow-blue-400/50",
      logo: meta,
      year: "2023"
    },
    {
      id: 4,
      role: "Computer Science Student",
      company: "Harvard University",
      type: "Internship",
      period: "Jun 2021 - Aug 2021",
      duration: "3 mos",
      location: "United States · Remote",
      achievements: [
        "Successfully completed Harvard's CS50 Introduction to Computer Science course",
        "Developed skills in algorithmic thinking, problem-solving, and abstraction",
        "Designed and built online quizzes application with full-stack implementation",
        "Demonstrated proficiency in UI/UX Design, Front-end, and Back-end Development using Flask"
      ],
      skills: ["Python", "Computer Science", "+4 skills"],
      color: "from-purple-400 to-violet-400",
      shadowColor: "shadow-purple-500/30",
      glowColor: "shadow-purple-400/50",
      logo: harvard,
      year: "2021"
    }
  ];

  useEffect(() => {
    const visibleSet = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        let changed = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            if (!visibleSet.has(id)) {
              visibleSet.add(id);
              changed = true;
            }
          }
        });
        if (changed) {
          setVisibleItems(new Set(visibleSet));
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const timelineItems = sectionRef.current.querySelectorAll(
      '[data-timeline-item]'
    );
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
            Career{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            My professional timeline through software development and
            continuous learning
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-px">
            <div className="w-full h-full bg-gradient-to-b from-blue-500/60 via-purple-500/60 via-emerald-500/60 to-red-500/60 rounded-full shadow-lg" />
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full shadow-xl transition-all duration-1000 ease-out"
              style={{
                height: `${Math.min(
                  (visibleItems.size / experiences.length) * 100,
                  100
                )}%`,
              }}
            />
          </div>

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              index={index}
              isVisible={visibleItems.has(exp.id)}
            />
          ))}
        </div>

        {/* Timeline End Marker */}
        <div className="flex justify-center mt-12">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 border-4 border-slate-800 shadow-lg" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 text-sm font-medium whitespace-nowrap">
              The Journey Continues...
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Career;
