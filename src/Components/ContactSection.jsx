import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => (
  <section className="min-h-screen py-20 relative z-10 flex items-center mt-10">
    <div className="max-w-7xl mx-auto px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-6xl font-black mb-6">
              Let's Create
              <br />
              <span className="italic font-light text-orange-600">
                Something Amazing
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500"></div>
          </div>

          <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
            Ready to bring your vision to life? I'm always excited to work on
            innovative projects that challenge the status quo and create
            meaningful experiences.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:shriyakulkarni04@gmail.com"
            className="group flex items-center space-x-4 text-stone-600 hover:text-orange-600 transition-all duration-300 p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/40 hover:border-white/50 shadow-lg hover:shadow-xl"
          >
            <div className="p-3 bg-orange-100/80 backdrop-blur-sm rounded-full group-hover:bg-orange-200/80 transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <div className="font-medium">Email</div>
              <div className="text-lg">shriyakulkarni04@gmail.com</div>
            </div>
          </a>

          <a
            href="https://github.com/Shriya0-4"
            className="group flex items-center space-x-4 text-stone-600 hover:text-orange-600 transition-all duration-300 p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/40 hover:border-white/50 shadow-lg hover:shadow-xl"
          >
            <div className="p-3 bg-orange-100/80 backdrop-blur-sm rounded-full group-hover:bg-orange-200/80 transition-colors">
              <Github size={24} />
            </div>
            <div>
              <div className="font-medium">GitHub</div>
              <div className="text-lg">Shriya0-4</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/shriya-s-a58b62281/"
            className="group flex items-center space-x-4 text-stone-600 hover:text-orange-600 transition-all duration-300 p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/40 hover:border-white/50 shadow-lg hover:shadow-xl"
          >
            <div className="p-3 bg-orange-100/80 backdrop-blur-sm rounded-full group-hover:bg-orange-200/80 transition-colors">
              <Linkedin size={24} />
            </div>
            <div>
              <div className="font-medium">LinkedIn</div>
              <div className="text-lg">Shriya S</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
