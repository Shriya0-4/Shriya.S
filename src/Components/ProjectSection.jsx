import React from "react";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Metric Flow",
      subtitle: "Real-time performance tracking",
      description:
        "A full-stack dashboard for real-time monitoring of CPU, memory, disk usage, and API traffic.",
      keyPoints: [
        "Real-time system metrics via Socket.IO",
        "Interactive charts with Chart.js",
        "Modular backend with Express APIs",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Chart.js"],
    },
    {
      id: 3,
      title: "Vertex",
      subtitle: "Stock trading & market insights platform",
      description:
        "A full-stack stock trading and insights platform offering real-time market updates, personalized watchlists, curated financial news, and AI-powered stock analysis.",
      keyPoints: [
        "Real-time market data integration with secure buy/sell functionality",
        "Personalized watchlists and curated financial news feed",
        "AI-powered assistant for stock analysis and learning",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "REST API",
        "WebSockets",
      ],
    },
    {
      id: 3,
      title: "Shriniketan",
      subtitle: "Apartment Management Platform",
      description:
        "Shriniketan is a web application built to simplify the management of monthly expenses and administrative tasks for the Shriniketan apartment. It provides a secure, resident-friendly interface for tracking finances and organizing responsibilities.",
      keyPoints: [
        "Track shared monthly expenses and individual contributions",
        "Add and manage maintenance expenses with breakdowns",
        "View upcoming meetings and access past meeting summaries",
      ],
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <section className="min-h-screen py-20 relative z-10 mt-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-4">
            Selected{" "}
            <span className="italic font-light text-orange-600">Works</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            A curated collection of projects that showcase innovation,
            creativity, and technical excellence.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100 hover:shadow-orange-200/30 transition-all duration-500"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-4xl font-black mb-2">{project.title}</h3>
                  <p className="text-lg text-orange-600 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-stone-600 leading-relaxed">
                  {project.description}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600 text-base mt-2">
                  {project.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
