const AboutSection = () => {
  const skills = [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "💻" },
    { name: "React & Tailwind", icon: "⚛️" },
    { name: "Node.js & Express", icon: "🚀" },
    { name: "MongoDB & Mongoose", icon: "🍃" },
    { name: "REST APIs", icon: "🌐" },
    { name: "Docker", icon: "🐳" },
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Problem Solving (DSA)", icon: "🧠" },
  ];

  return (
    <section className="min-h-screen py-20 relative z-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center min-h-[80vh]">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-16">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
                About{" "}
                <span className="italic font-light text-orange-600">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500"></div>
            </div>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-stone-600">
              <p>
                I'm a passionate and adaptable web developer with a strong
                foundation in building full-stack applications using
                technologies like{" "}
                <span className="font-medium text-stone-800">
                  React, Node.js, Express, and MongoDB
                </span>
                . I enjoy transforming complex problems into clean, intuitive,
                and scalable digital solutions.
              </p>
              <p>
                I believe in{" "}
                <span className="italic">
                  continuous learning, writing maintainable code,
                </span>{" "}
                and being open to feedback. Whether it's debugging an issue,
                brainstorming features, or optimizing performance, I bring a
                problem-solving mindset and a positive attitude. I'm excited to
                work in environments that value growth, mentorship, and building
                impactful products together.
              </p>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-stone-800">
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="group relative">
                  <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300 h-24 md:h-28 flex items-center">
                    <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 rounded-bl-2xl rounded-tr-2xl"></div>

                    <h4 className="font-semibold text-stone-800 text-sm md:text-base lg:text-lg leading-tight">
                      {skill.name}
                    </h4>

                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
