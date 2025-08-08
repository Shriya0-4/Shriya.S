import { ArrowRight } from "lucide-react";

const HomeSection = ({ mousePosition, setActiveSection }) => (
  <section className="min-h-screen flex items-center justify-center relative z-10 overflow-hidden pt-20 md:pt-24 lg:pt-10">
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-stone-400"></div>
          ))}
        </div>
      </div>
      <div className="absolute top-20 left-10 text-8xl font-black text-orange-100 opacity-30 rotate-12 select-none">
        CODE
      </div>
      <div className="absolute bottom-32 right-16 text-6xl font-black text-stone-200 opacity-20 -rotate-12 select-none">
        DESIGN
      </div>
      <div className="absolute top-1/3 right-20 text-4xl font-light text-orange-200 opacity-40 rotate-45 select-none">
        CREATIVE
      </div>
      <div className="absolute bottom-1/4 left-20 text-5xl font-black text-stone-200 opacity-25 -rotate-6 select-none">
        WEB
      </div>

      <div className="absolute top-40 right-1/4 w-32 h-32 border-4 border-orange-300 opacity-30 rotate-45"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-orange-200 opacity-20 rounded-full"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 opacity-25 rotate-12"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-stone-300 opacity-40 rounded-full"></div>

      <div
        className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-30"
        style={{ transform: `translateX(${mousePosition.x * 0.5}px)` }}
      ></div>
      <div
        className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-stone-300 to-transparent opacity-20"
        style={{ transform: `translateX(-${mousePosition.x * 0.3}px)` }}
      ></div>
    </div>

    <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
      <div className="space-y-8 md:space-y-12">
        <div className="relative space-y-4 md:space-y-6">
          <div className="relative overflow-hidden">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-10xl leading-none tracking-widest relative z-10 bg-stone-800 via-orange-600 to-stone-800 bg-clip-text text-transparent font-black"
              style={{ fontFamily: "Playwrite Australia NSW" }}
            >
              SHRIYA S
            </h1>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-stone-600 tracking-[0.3em] uppercase">
              Web Developer
            </h2>
            <div className="absolute -bottom-3 md:-bottom-5 left-1/2 transform -translate-x-1/2 space-y-1">
              <div className="w-32 md:w-48 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500"></div>
              <div className="w-24 md:w-32 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto"></div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-4 md:-top-6 left-0 text-4xl md:text-6xl text-orange-200 opacity-30 font-serif">
            "
          </div>
          <div className="absolute -bottom-4 md:-bottom-6 right-0 text-4xl md:text-6xl text-orange-200 opacity-30 font-serif">
            "
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-stone-700 leading-relaxed px-4 md:px-8">
            Crafting Code{" "}
            <span className="relative italic text-orange-600 font-medium">
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-300 opacity-50"></div>
            </span>{" "}
            That Thinks, and{" "}
            <span className="relative italic text-orange-600 font-medium">
              Design That Speaks
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-300 opacity-50"></div>
            </span>
          </p>
        </div>

        <div className="flex items-center justify-center text-stone-500 bg-white/30 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 border border-orange-100 mx-4">
          <span className="text-xs md:text-sm tracking-wide font-bold text-center">
            From Logic to Design, Always Learning!
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-6 md:pt-8">
          <button
            onClick={() => setActiveSection("work")}
            className="group relative bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-500 flex items-center space-x-3 shadow-2xl hover:shadow-orange-200/50 overflow-hidden text-sm md:text-base"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="tracking-wide relative z-10">VIEW PORTFOLIO</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform duration-300 relative z-10 md:w-5 md:h-5"
            />
          </button>

          <button
            onClick={() => setActiveSection("contact")}
            className="group relative px-8 md:px-12 py-4 md:py-5 rounded-full font-medium border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 tracking-wide overflow-hidden text-sm md:text-base"
          >
            <div className="absolute inset-0 bg-stone-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative z-10">GET IN TOUCH</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HomeSection;