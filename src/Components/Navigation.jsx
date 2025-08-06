const Navigation = ({ activeSection, setActiveSection }) => (
  <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:top-8">
    <div className="bg-white/80 backdrop-blur-xl rounded-full px-3 py-2 md:px-6 md:py-3 shadow-2xl border border-orange-200/50">
      <div className="flex space-x-1">
        {[
          { id: "home", label: "01", name: "Home" },
          { id: "about", label: "02", name: "About" },
          { id: "experience", label: "03", name: "Experience" },
          { id: "work", label: "04", name: "Work" },
          { id: "contact", label: "05", name: "Contact" },
        ].map(({ id, label, name }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`group relative px-2 py-1.5 md:px-4 md:py-2 rounded-full transition-all duration-300 ${
              activeSection === id
                ? "bg-orange-500 text-white shadow-lg"
                : "text-stone-600 hover:text-orange-600"
            }`}
          >
            <span className="text-xs font-mono hidden sm:inline">{label}</span>
            <span className="text-xs font-mono sm:hidden">
              {name.charAt(0)}
            </span>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap bg-stone-800 text-white px-2 py-1 rounded hidden md:block">
              {name}
            </div>
          </button>
        ))}
      </div>
    </div>
  </nav>
);

export default Navigation;
