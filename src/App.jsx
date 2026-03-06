import { motion } from "framer-motion";
import {
  CheckSquare,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  Image as ImageIcon,
  Layout,
  Linkedin,
  Mail,
  MessageSquare,
  Search,
  Smartphone
} from "lucide-react";

const Navbar = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1W_1Ko3EahrqlJ1qgrxHjEvQb5wAu7Jty/view";

  const handleResume = () => {
    window.open(resumeUrl, "_blank");
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-black tracking-tighter text-white"
        >
          SHAHZAIB
        </button>
        <div className="hidden md:flex gap-8 items-center text-xs font-bold uppercase tracking-widest text-white/70">
          <button
            onClick={() => scrollTo("home")}
            className="hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="hover:text-white transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-white transition-colors text-red-500"
          >
            Projects
          </button>
          <button
            onClick={handleResume}
            className="border border-red-500 text-red-500 px-5 py-2 rounded-sm hover:bg-red-500 hover:text-white transition-all font-mono"
          >
            RESUME
          </button>
        </div>
      </div>
    </nav>
  );
};

const SkillCard = ({ icon, title, tool }) => (
  <div className="bg-[#111] border border-white/5 p-8 flex flex-col items-center justify-center gap-4 rounded-2xl hover:border-red-500/50 transition-all group">
    <div className="text-red-500 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="text-center">
      <h3 className="text-white font-bold text-xs uppercase tracking-widest">
        {title}
      </h3>
      <p className="text-slate-500 text-[10px] mt-2 uppercase font-mono">
        {tool}
      </p>
    </div>
  </div>
);

const ProjectCard = ({ title, tech, icon: Icon, link }) => (
  <motion.a
    whileHover={{ y: -5 }}
    href={link}
    target="_blank"
    rel="noreferrer"
    className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 group hover:border-red-500/30 transition-all flex flex-col h-full"
  >
    <div className="aspect-video bg-zinc-900/30 flex items-center justify-center relative overflow-hidden">
      <Icon
        size={40}
        className="text-white/10 group-hover:text-red-500 group-hover:scale-110 transition-all duration-500"
      />
    </div>
    <div className="p-6 border-t border-white/5">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-white font-bold text-lg">{title}</h4>
        <ExternalLink
          size={14}
          className="text-slate-600 group-hover:text-white transition-colors"
        />
      </div>
      <p className="text-red-500 text-[10px] font-mono uppercase tracking-widest">
        {tech}
      </p>
    </div>
  </motion.a>
);

export default function App() {
  const allProjects = [
    {
      title: "SwiftScan",
      tech: "Flutter OCR PDF",
      icon: Search,
      link: "https://github.com/CodeWithKhan07/SwiftScan",
    },
    {
      title: "WeChat",
      tech: "Flutter Firebase",
      icon: MessageSquare,
      link: "https://github.com/CodeWithKhan07/wechat",
    },
    {
      title: "Vidly",
      tech: "Dart REST API",
      icon: Download,
      link: "https://github.com/CodeWithKhan07/Vidly",
    },
    {
      title: "Tasky",
      tech: "Flutter SQLite",
      icon: CheckSquare,
      link: "https://github.com/CodeWithKhan07/tasky",
    },
    {
      title: "Flux Walls",
      tech: "Flutter API",
      icon: ImageIcon,
      link: "https://github.com/CodeWithKhan07/Flux-Walls",
    },
  ];

  // Helper function to handle Gmail redirection
  const openGmail = () => {
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=shahzaibkhan3356@gmail.com";
    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-red-500/30 overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 max-w-7xl mx-auto gap-8 pt-10"
      >
        <div className="flex-1 space-y-6 z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-1"
          >
            <h2 className="text-red-500 font-black text-4xl md:text-5xl tracking-tighter uppercase italic">
              Mobile App Developer
            </h2>
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tighter uppercase">
              Flutter and Android
            </h2>
          </motion.div>

          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[9.5rem] font-black leading-[0.8] tracking-tighter uppercase"
          >
            SHAHZAIB
            <br />
            <span className="text-white/10">KHAN</span>
          </motion.h1>

          <div className="flex justify-center md:justify-start gap-8 pt-6 text-white/20">
            <a
              href="https://github.com/CodeWithKhan07"
              target="_blank"
              rel="noreferrer"
            >
              <Github
                size={28}
                className="hover:text-white transition-colors"
              />
            </a>
            <a
              href="https://linkedin.com/in/shahzaib-khan-007add"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                size={28}
                className="hover:text-white transition-colors"
              />
            </a>
            <button
              onClick={openGmail}
              className="hover:text-white transition-colors"
            >
              <Mail size={28} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="absolute w-[300px] h-[300px] bg-red-500/5 blur-[100px] rounded-full" />
          <span className="text-[14rem] md:text-[22rem] select-none leading-none z-10 drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            👨‍💻
          </span>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-[#080808] rounded-[2.5rem] p-10 md:p-20 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col gap-12 relative z-10">
            <div className="flex items-center gap-6">
              <div className="h-2 w-20 bg-red-600" />
              <h3 className="text-3xl md:text-6xl font-black uppercase italic tracking-tight">
                Engineering Profile
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <p className="text-3xl md:text-5xl text-white font-bold leading-tight uppercase tracking-tighter">
                  I design and build high performance mobile architectures
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-red-500">
                  <span className="bg-red-500/10 px-6 py-3 rounded-full font-bold uppercase tracking-widest border border-red-500/20">
                    Clean Architecture
                  </span>
                  <span className="bg-red-500/10 px-6 py-3 rounded-full font-bold uppercase tracking-widest border border-red-500/20">
                    Solid Principles
                  </span>
                </div>
              </div>

              <div className="space-y-8 text-slate-300 text-xl md:text-2xl leading-relaxed font-light">
                <p>
                  My primary environment is{" "}
                  <b className="text-white font-bold">Flutter</b> where I
                  leverage tools like{" "}
                  <b className="text-white font-bold">GetX</b>{" "}
                  <b className="text-white font-bold">Provider</b> and{" "}
                  <b className="text-white font-bold">BLoC</b> for state
                  management
                </p>
                <p>
                  I integrate robust backends using{" "}
                  <b className="text-white font-bold">Firebase</b> and{" "}
                  <b className="text-white font-bold">REST APIs</b> ensuring
                  high speed data delivery For local persistence I rely on{" "}
                  <b className="text-white font-bold">SQLite</b> and{" "}
                  <b className="text-white font-bold">Hive</b>
                </p>
                <p className="text-white font-black border-l-8 border-red-600 pl-8 mt-12 uppercase italic text-2xl md:text-3xl tracking-tighter">
                  Bridging the gap between sophisticated UI designs and
                  technical stability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard
            icon={<Smartphone size={32} />}
            title="Platform"
            tool="Flutter Android Dart"
          />
          <SkillCard
            icon={<Layout size={32} />}
            title="Management"
            tool="GetX Provider BLoC"
          />
          <SkillCard
            icon={<Database size={32} />}
            title="Storage"
            tool="SQLite Hive Firestore"
          />
          <SkillCard
            icon={<Cpu size={32} />}
            title="Infrastructure"
            tool="Firebase REST API"
          />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter">
            Deployed Projects
          </h2>
          <div className="h-1 bg-white/5 flex-grow rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* CONTACT SECTION - GMAIL REDIRECT */}
      <section
        id="contact"
        className="py-24 px-6 max-w-5xl mx-auto text-center"
      >
        <div className="bg-red-600 p-12 md:p-20 rounded-[3rem] text-black">
          <h2 className="text-5xl md:text-8xl font-black mb-6 italic uppercase tracking-tighter leading-none">
            Lets Build
          </h2>
          <p className="text-black text-xl md:text-2xl mb-12 font-bold max-w-2xl mx-auto">
            Available for Mobile Application Development and Architectural
            Consulting
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button
              onClick={openGmail}
              className="bg-black text-white px-14 py-6 rounded-full hover:bg-zinc-900 transition-all uppercase text-sm font-black tracking-[0.2em] shadow-2xl inline-block"
            >
              Send Message
            </button>
            <a
              href="https://linkedin.com/in/shahzaib-khan-007add"
              target="_blank"
              rel="noreferrer"
              className="border-4 border-black px-14 py-6 rounded-full hover:bg-black hover:text-white transition-all uppercase text-sm font-black tracking-[0.2em] inline-block"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-white/5 opacity-20">
        <p className="text-[10px] font-mono uppercase tracking-[1em]">
          Shahzaib Khan Mobile Engineer 2026
        </p>
      </footer>
    </div>
  );
}
