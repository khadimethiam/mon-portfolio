import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Server,
  Database,
  Cpu,
  Globe,
  Layers,
  Palette,
  Lightbulb,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "iot" | "tools";
  icon: React.ReactNode;
}

const Skills = () => {
  const [frontendRef, frontendInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [backendRef, backendInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [databaseRef, databaseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [iotRef, iotInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [toolsRef, toolsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    // Frontend
    {
      name: "Angular",
      level: 90,
      category: "frontend",
      icon: <Code className="text-primary" size={20} />,
    },
    {
      name: "React",
      level: 80,
      category: "frontend",
      icon: <Code className="text-neon-green" size={20} />,
    },
    {
      name: "TypeScript",
      level: 80,
      category: "frontend",
      icon: <Code className="text-neon-blue" size={20} />,
    },
    {
      name: "Tailwind CSS",
      level: 70,
      category: "frontend",
      icon: <Palette className="text-neon-blue" size={20} />,
    },
    {
      name: "Bootstrap CSS",
      level: 95,
      category: "frontend",
      icon: <Palette className="text-neon-blue" size={20} />,
    },

    // Backend
    {
      name: "Node.js",
      level: 85,
      category: "backend",
      icon: <Server className="text-neon-green" size={20} />,
    },
    {
      name: "Express",
      level: 80,
      category: "backend",
      icon: <Server className="text-primary" size={20} />,
    },
    {
      name: "Laravel",
      level: 70,
      category: "backend",
      icon: <Server className="text-neon-pink" size={20} />,
    },

    {
      name: "REST API",
      level: 90,
      category: "backend",
      icon: <Globe className="text-neon-blue" size={20} />,
    },

    // Database
    {
      name: "MongoDB",
      level: 85,
      category: "database",
      icon: <Database className="text-neon-green" size={20} />,
    },
    {
      name: "MySQL",
      level: 75,
      category: "database",
      icon: <Database className="text-neon-blue" size={20} />,
    },
    {
      name: "Firebase",
      level: 50,
      category: "database",
      icon: <Database className="text-neon-yellow" size={20} />,
    },

    // IoT
    {
      name: "Arduino,ESP32/ESP8266",
      level: 90,
      category: "iot",
      icon: <Cpu className="text-neon-blue" size={20} />,
    },
    {
      name: "Raspberry Pi",
      level: 85,
      category: "iot",
      icon: <Cpu className="text-primary" size={20} />,
    },

    {
      name: "MQTT",
      level: 75,
      category: "iot",
      icon: <Cpu className="text-neon-pink" size={20} />,
    },
    {
      name: "Sensors Integration",
      level: 70,
      category: "iot",
      icon: <Lightbulb className="text-neon-yellow" size={20} />,
    },

    // Tools
    {
      name: "Git/GitHub",
      level: 90,
      category: "tools",
      icon: <Code className="text-neon-pink" size={20} />,
    },
    {
      name: "Docker",
      level: 75,
      category: "tools",
      icon: <Layers className="text-neon-blue" size={20} />,
    },
    {
      name: "CI/CD",
      level: 70,
      category: "tools",
      icon: <Layers className="text-primary" size={20} />,
    },

    {
      name: "Figma",
      level: 80,
      category: "tools",
      icon: <Palette className="text-neon-green" size={20} />,
    },
  ];

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      ".skills-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  const renderSkillBars = (categorySkills: Skill[], inView: boolean) => {
    return categorySkills.map((skill, index) => (
      <div key={skill.name} className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center">
            {skill.icon}
            <span className="ml-2 font-cyber text-sm">{skill.name}</span>
          </div>
          <span className="text-xs font-cyber text-primary">
            {skill.level}%
          </span>
        </div>
        <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-neon-blue"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </div>
    ));
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
          <div className="max-w-5xl mx-auto">
            <h1 className="skills-title text-4xl md:text-5xl font-bold mb-8 font-cyber text-center">
              <span className="text-primary">&lt;</span> Compétences{" "}
              <span className="text-primary">/&gt;</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Frontend Skills */}
              <div ref={frontendRef} className="card-cyber p-6">
                <h2 className="text-2xl font-bold mb-6 font-cyber flex items-center">
                  <Code className="mr-2 text-primary" size={24} />
                  <span>Frontend</span>
                </h2>
                {renderSkillBars(
                  getSkillsByCategory("frontend"),
                  frontendInView
                )}
              </div>

              {/* Backend Skills */}
              <div ref={backendRef} className="card-cyber p-6">
                <h2 className="text-2xl font-bold mb-6 font-cyber flex items-center">
                  <Server className="mr-2 text-neon-green" size={24} />
                  <span>Backend</span>
                </h2>
                {renderSkillBars(getSkillsByCategory("backend"), backendInView)}
              </div>

              {/* Database Skills */}
              <div ref={databaseRef} className="card-cyber p-6">
                <h2 className="text-2xl font-bold mb-6 font-cyber flex items-center">
                  <Database className="mr-2 text-neon-blue" size={24} />
                  <span>Bases de données</span>
                </h2>
                {renderSkillBars(
                  getSkillsByCategory("database"),
                  databaseInView
                )}
              </div>

              {/* IoT Skills */}
              <div ref={iotRef} className="card-cyber p-6">
                <h2 className="text-2xl font-bold mb-6 font-cyber flex items-center">
                  <Cpu className="mr-2 text-neon-pink" size={24} />
                  <span>Internet des Objets</span>
                </h2>
                {renderSkillBars(getSkillsByCategory("iot"), iotInView)}
              </div>
            </div>

            {/* Tools & Others */}
            <div ref={toolsRef} className="card-cyber p-6">
              <h2 className="text-2xl font-bold mb-6 font-cyber flex items-center">
                <Layers className="mr-2 text-neon-yellow" size={24} />
                <span>Outils & Autres</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {renderSkillBars(getSkillsByCategory("tools"), toolsInView)}
              </div>
            </div>

            {/* Additional Skills Section */}
            <div className="mt-16">
              <h2 className="skills-title text-3xl font-bold mb-8 font-cyber text-center">
                <span className="text-primary">&lt;</span> Soft Skills{" "}
                <span className="text-primary">/&gt;</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-dark-lighter/70 backdrop-blur-md rounded-lg p-5 border border-primary/20 text-center"
                >
                  <div className="bg-dark-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="text-neon-yellow" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-cyber">
                    Résolution de problèmes
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Approche analytique et créative pour résoudre des défis
                    techniques complexes.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-lighter/70 backdrop-blur-md rounded-lg p-5 border border-primary/20 text-center"
                >
                  <div className="bg-dark-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-neon-blue" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-cyber">
                    Travail d'équipe
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Collaboration efficace, communication claire et partage de
                    connaissances.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-dark-lighter/70 backdrop-blur-md rounded-lg p-5 border border-primary/20 text-center"
                >
                  <div className="bg-dark-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-neon-pink" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-cyber">
                    Gestion du temps
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Organisation efficace des tâches et respect des délais dans
                    les projets.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-dark-lighter/70 backdrop-blur-md rounded-lg p-5 border border-primary/20 text-center"
                >
                  <div className="bg-dark-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-cyber">
                    Apprentissage continu
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Veille technologique et adaptation rapide aux nouvelles
                    technologies.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;

// Missing imports
import { Users, Clock, BookOpen } from "lucide-react";
