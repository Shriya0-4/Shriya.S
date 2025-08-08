import { Calendar, Building, MapPin } from "lucide-react";
const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Technokrax",
      position: "Full Stack Developer Intern",
      duration: "October 2024 – May 2024",
      location: "Remote",
      type: "Internship",
      description:
        "Worked on enhancing core features of an ed-tech platform by contributing to both frontend and backend components. Focused on improving user experience, developing learning content modules, and optimizing the APIs.",
      skills: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "YouTube API",
        "REST APIs",
      ],
      achievements: [
        "Revamped the homepage design including the hero section and added a new Communities section",
        "Improved the search feature with categorized tabs (videos, articles, etc.), user-based personalization, and refresh functionality",
        "Built 7 AI-powered course modules with video integration, quizzes, progress tracking, and certificates using the YouTube API",
        "Enabled users to share course certificates on external platforms",
        "Updated the admin panel with course management tools and a referral form to suggest useful videos",
      ],
    },
  ];

  return (
    <section className="min-h-screen py-20 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4">
            Professional{" "}
            <span className="italic font-light text-orange-600">
              Experience
            </span>
          </h2>
          <p className="text-base md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            A journey through hands-on learning and real-world application of
            skills across various tech environments.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="group relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 md:left-8 top-20 md:top-24 w-0.5 h-full bg-gradient-to-b from-orange-300 to-stone-200 opacity-30"></div>
              )}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-300">
                <div className="absolute -left-2 md:-left-4 top-6 md:top-8 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                  <div className="lg:col-span-2 space-y-4 md:space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-orange-600 font-medium">
                        <span className="px-2 md:px-3 py-1 bg-orange-100 rounded-full">
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="md:w-3.5 md:h-3.5" />
                          <span className="text-xs md:text-sm">{exp.duration}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="md:w-3.5 md:h-3.5" />
                          <span className="text-xs md:text-sm">{exp.location}</span>
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-800 leading-tight">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-base md:text-lg lg:text-xl text-orange-600">
                        <Building size={16} className="md:w-5 md:h-5" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <p className="text-stone-600 leading-relaxed text-sm md:text-base lg:text-lg">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-bold text-stone-800 text-sm md:text-base">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                            <span className="text-stone-600 text-sm md:text-base leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-stone-800 mb-4 text-sm md:text-base">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 md:px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs md:text-sm font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative p-4 md:p-6 bg-gradient-to-br from-orange-50 to-stone-50 rounded-2xl border border-orange-100">
                      <div className="absolute top-2 right-2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full"></div>
                      <div className="text-center">
                        <div className="text-xl md:text-2xl font-black text-orange-600 mb-1">
                          6 mo
                        </div>
                        <div className="text-xs text-stone-500 uppercase tracking-wider">
                          Duration
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl md:rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
