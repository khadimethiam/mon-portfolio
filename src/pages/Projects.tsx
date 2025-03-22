import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  ExternalLink,
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Monitor,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: "web" | "iot" | "fullstack";
  featured: boolean;
  icon: "code" | "cpu" | "database" | "globe" | "layers" | "monitor";
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "web" | "iot" | "fullstack"
  >("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Simulate loading projects from an API
    const projectsData: Project[] = [
      {
        id: 1,
        title: "NeoTech Dashboard",
        description:
          "Interface de contrôle futuriste pour la gestion de dispositifs IoT. Visualisation en temps réel des données capteurs avec graphiques interactifs et alertes personnalisables.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["React", "Node.js", "MQTT", "WebSockets", "Chart.js"],
        github: "https://github.com",
        demo: "https://example.com",
        category: "fullstack",
        featured: true,
        icon: "monitor",
      },
      {
        id: 2,
        title: "SmartHome Hub",
        description:
          "Système central de domotique connectant différents appareils IoT. Contrôle vocal, automatisations et scénarios personnalisés pour une maison intelligente.",
        image:
          "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["ESP32", "Raspberry Pi", "MQTT", "React", "Node.js"],
        github: "https://github.com",
        demo: "https://example.com",
        category: "iot",
        featured: true,
        icon: "cpu",
      },
      {
        id: 3,
        title: "CyberShop E-commerce",
        description:
          "Plateforme e-commerce avec design cyberpunk pour vente de gadgets tech. Panier d'achat, paiement sécurisé et système de recommandation basé sur l'IA.",
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
        github: "https://github.com",
        demo: "https://example.com",
        category: "web",
        featured: false,
        icon: "globe",
      },
      {
        id: 4,
        title: "DataViz Platform",
        description:
          "Outil de visualisation de données avec tableaux de bord personnalisables. Transforme des données complexes en visualisations interactives et compréhensibles.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        tags: ["D3.js", "React", "Node.js", "PostgreSQL", "GraphQL"],
        github: "https://github.com",
        demo: "https://example.com",
        category: "web",
        featured: false,
        icon: "database",
      },
      {
        id: 5,
        title: "PlantMonitor IoT",
        description:
          "Système de surveillance pour plantes d'intérieur. Mesure l'humidité du sol, la luminosité et la température pour optimiser la croissance des plantes.",
        image:
          "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        tags: ["Arduino", "ESP8266", "MQTT", "React", "Firebase"],
        github: "https://github.com",
        demo: "https://example.com",
        category: "iot",
        featured: false,
        icon: "cpu",
      },
      {
        id: 6,
        title: "Portfolio Cyberpunk",
        description:
          "Portfolio de développeur avec thème cyberpunk et animations futuristes. Présentation interactive des projets et compétences avec effets visuels immersifs.",
        image: "/public/CyberPunk.jpg",
        tags: ["React", "Framer Motion", "GSAP", "Tailwind CSS", "TypeScript"],
        github: "https://github.com",
        demo: "https://example.com",
        category: "web",
        featured: true,
        icon: "code",
      },
    ];

    setProjects(projectsData);
    setFilteredProjects(projectsData);

    // GSAP animations
    gsap.fromTo(
      ".projects-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Play a subtle click sound when page loads
    const audio = new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-tech-click-1140.mp3"
    );
    audio.volume = 0.1;
    audio.play().catch((e) => console.log("Audio play prevented:", e));

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter, projects]);

  const handleFilterClick = (filter: "all" | "web" | "iot" | "fullstack") => {
    // Play click sound
    const audio = new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-2866.mp3"
    );
    audio.volume = 0.1;
    audio.play().catch((e) => console.log("Audio play prevented:", e));

    setActiveFilter(filter);
  };

  const openProjectDetails = (project: Project) => {
    // Play click sound
    const audio = new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-tech-click-1140.mp3"
    );
    audio.volume = 0.1;
    audio.play().catch((e) => console.log("Audio play prevented:", e));

    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="text-primary" size={24} />;
      case "cpu":
        return <Cpu className="text-neon-blue" size={24} />;
      case "database":
        return <Database className="text-neon-green" size={24} />;
      case "globe":
        return <Globe className="text-neon-pink" size={24} />;
      case "layers":
        return <Layers className="text-neon-purple" size={24} />;
      case "monitor":
        return <Monitor className="text-neon-yellow" size={24} />;
      default:
        return <Code className="text-primary" size={24} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-20"
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="projects-title text-4xl md:text-5xl font-bold mb-8 font-cyber text-center">
              <span className="text-primary">&lt;</span> Mes Projets{" "}
              <span className="text-primary">/&gt;</span>
            </h1>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => handleFilterClick("all")}
                className={`px-6 py-2 rounded-md font-cyber text-sm transition-all duration-300 ${
                  activeFilter === "all"
                    ? "bg-primary text-white shadow-[0_0_10px_rgba(138,43,226,0.7)]"
                    : "bg-dark-lighter text-gray-300 hover:bg-dark-light"
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => handleFilterClick("web")}
                className={`px-6 py-2 rounded-md font-cyber text-sm transition-all duration-300 ${
                  activeFilter === "web"
                    ? "bg-primary text-white shadow-[0_0_10px_rgba(138,43,226,0.7)]"
                    : "bg-dark-lighter text-gray-300 hover:bg-dark-light"
                }`}
              >
                Web
              </button>
              <button
                onClick={() => handleFilterClick("iot")}
                className={`px-6 py-2 rounded-md font-cyber text-sm transition-all duration-300 ${
                  activeFilter === "iot"
                    ? "bg-primary text-white shadow-[0_0_10px_rgba(138,43,226,0.7)]"
                    : "bg-dark-lighter text-gray-300 hover:bg-dark-light"
                }`}
              >
                IoT
              </button>
              <button
                onClick={() => handleFilterClick("fullstack")}
                className={`px-6 py-2 rounded-md font-cyber text-sm transition-all duration-300 ${
                  activeFilter === "fullstack"
                    ? "bg-primary text-white shadow-[0_0_10px_rgba(138,43,226,0.7)]"
                    : "bg-dark-lighter text-gray-300 hover:bg-dark-light"
                }`}
              >
                Full Stack
              </button>
            </div>

            {/* Projects Grid */}
            <div
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="card-cyber overflow-hidden cursor-pointer group"
                  onClick={() => openProjectDetails(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-primary/80 text-white text-xs font-cyber px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 flex space-x-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="bg-dark-lighter/80 backdrop-blur-sm text-white text-xs font-cyber px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="bg-dark-lighter/80 backdrop-blur-sm text-white text-xs font-cyber px-2 py-1 rounded">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <div className="mr-3">
                        {getIconComponent(project.icon)}
                      </div>
                      <h3 className="text-xl font-bold font-cyber text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-primary font-cyber uppercase">
                        {project.category === "fullstack"
                          ? "Full Stack"
                          : project.category === "iot"
                          ? "IoT"
                          : "Web"}
                      </span>
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 font-cyber">
                  Aucun projet trouvé dans cette catégorie.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md"
          onClick={closeProjectDetails}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-lighter border border-primary/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-dark/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {getIconComponent(selectedProject.icon)}
                </div>
                <h2 className="text-2xl font-bold font-cyber text-white">
                  {selectedProject.title}
                </h2>
              </div>

              <p className="text-gray-300 mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-cyber mb-3 text-primary">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-dark px-3 py-1 rounded-full text-sm text-gray-300 border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber group flex-1 flex justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    Code Source
                    <Github
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </span>
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber group flex-1 flex justify-center border-neon-blue"
                >
                  <span className="relative z-10 flex items-center">
                    Démo Live
                    <ExternalLink
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;

// Missing import for X icon
import { X } from "lucide-react";
