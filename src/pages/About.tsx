import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Cpu,
  Lightbulb,
  Rocket,
  GraduationCap,
  Briefcase,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // GSAP animations
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".about-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      ".about-content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 70%",
        },
      }
    );

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-20"
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="about-title text-4xl md:text-5xl font-bold mb-8 font-cyber text-center">
              <span className="text-primary">&lt;</span> À Propos{" "}
              <span className="text-primary">/&gt;</span>
            </h1>

            <div className="about-content bg-dark-lighter/70 backdrop-blur-md rounded-lg p-6 md:p-8 border border-primary/20 shadow-lg mb-12">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary mb-6 md:mb-0 md:mr-8 relative">
                  <img
                    src="Mon_profil_Portfolio.jpeg"
                    alt="Portrait du développeur"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2 font-cyber text-white">
                    Développeur Web & IoT | Créatif et Passionné
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Bienvenue dans mon univers technologique ! Je suis un
                    développeur full-stack et technicien en électronique
                    industrielle, passionné par l'innovation et la création de
                    solutions connectées. Mon objectif est de bâtir des systèmes
                    intelligents et des expériences interactives alliant
                    hardware et software.
                  </p>
                  <p className="text-gray-300">
                    Avec une approche axée sur la performance et l'optimisation,
                    je conçois des projets qui allient créativité, fiabilité et
                    accessibilité. Je suis toujours en quête de nouveaux défis
                    pour repousser les frontières du numérique.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="about-content">
                  <h3 className="text-xl font-bold mb-3 font-cyber flex items-center">
                    <Code className="mr-2 text-primary" size={20} />
                    <span>Développement Web</span>
                  </h3>
                  <p className="text-gray-300">
                    Laravel , Angular et Réact. Je développe des applications
                    web modernes et performantes, optimisées pour une expérience
                    utilisateur fluide. Mon approche combine bonnes pratiques,
                    accessibilité et design intuitif, avec une forte expertise
                    en intégration d'APIs et gestion de bases de données.
                  </p>
                </div>

                <div className="about-content">
                  <h3 className="text-xl font-bold mb-3 font-cyber flex items-center">
                    <Cpu className="mr-2 text-neon-blue" size={20} />
                    <span>Internet des Objets</span>
                  </h3>
                  <p className="text-gray-300">
                    Passionné par l'IoT, je conçois des systèmes intelligents en
                    intégrant des microcontrôleurs (ESP32, Arduino, Raspberry
                    Pi) et des capteurs pour connecter le monde physique au
                    digital. Je maîtrise les protocoles de communication et
                    l'intégration cloud pour des solutions évolutives et
                    sécurisées.
                  </p>
                </div>

                <div className="about-content">
                  <h3 className="text-xl font-bold mb-3 font-cyber flex items-center">
                    <Lightbulb className="mr-2 text-neon-yellow" size={20} />
                    <span>Approche</span>
                  </h3>
                  <p className="text-gray-300">
                    Ma vision repose sur l'innovation et l'efficacité. Chaque
                    projet est une opportunité d’explorer de nouvelles
                    technologies et d’apporter des solutions concrètes aux défis
                    du numérique et de l’embarqué. Mon processus de travail est
                    structuré et axé sur la rigueur technique tout en laissant
                    place à la créativité.
                  </p>
                </div>

                <div className="about-content">
                  <h3 className="text-xl font-bold mb-3 font-cyber flex items-center">
                    <Rocket className="mr-2 text-neon-pink" size={20} />
                    <span>Objectifs</span>
                  </h3>
                  <p className="text-gray-300">
                    Je vise l'excellence dans le développement web et l'IoT,
                    avec l’ambition de créer des solutions innovantes qui
                    améliorent le quotidien. Mon objectif est de partager mon
                    expertise, d'inspirer d'autres développeurs et de contribuer
                    à l'évolution des technologies connectées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section py-16 bg-dark-lighter/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="about-title text-3xl font-bold mb-12 font-cyber text-center">
              <span className="text-primary">&lt;</span> Parcours{" "}
              <span className="text-primary">/&gt;</span>
            </h2>

            <div className="relative border-l-2 border-primary/50 pl-8 ml-4 md:ml-8">
              <div className="timeline-item mb-12 relative">
                <div className="absolute -left-[42px] bg-dark p-2 rounded-full border-2 border-primary">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div className="bg-dark-lighter/70 backdrop-blur-md rounded-lg p-6 border border-primary/20">
                  <h3 className="text-xl font-bold font-cyber mb-2">
                    BTS en Électronique Industrielle
                  </h3>
                  <p className="text-sm text-primary mb-2">2021 - 2023</p>
                  <p className="text-gray-300">
                    Formation en systèmes embarqués et automatisation. Projet de
                    fin d’études sur l'intégration de solutions connectées en
                    industrie.
                  </p>
                </div>
              </div>

              <div className="timeline-item mb-12 relative">
                <div className="absolute -left-[42px] bg-dark p-2 rounded-full border-2 border-neon-blue">
                  <Briefcase className="text-neon-blue" size={20} />
                </div>
                <div className="bg-dark-lighter/70 backdrop-blur-md rounded-lg p-6 border border-neon-blue/20">
                  <h3 className="text-xl font-bold font-cyber mb-2">
                    Stage à la Raffinerie de Mbao
                  </h3>
                  <p className="text-sm text-neon-blue mb-2">2023 - 2024</p>
                  <p className="text-gray-300">
                    Expérience en maintenance industrielle et supervision
                    d’équipements électroniques dans un environnement de
                    production.
                  </p>
                </div>
              </div>

              <div className="timeline-item relative">
                <div className="absolute -left-[42px] bg-dark p-2 rounded-full border-2 border-neon-pink">
                  <Rocket className="text-neon-pink" size={20} />
                </div>
                <div className="bg-dark-lighter/70 backdrop-blur-md rounded-lg p-6 border border-neon-pink/20">
                  <h3 className="text-xl font-bold font-cyber mb-2">
                    Développeur Full-Stack | IoT & Web
                  </h3>
                  <p className="text-sm text-neon-pink mb-2">2022 - Présent</p>
                  <p className="text-gray-300">
                    Conception et développement de solutions IoT connectées au
                    web. Création d'interfaces utilisateur pour le monitoring et
                    le contrôle de dispositifs connectés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
