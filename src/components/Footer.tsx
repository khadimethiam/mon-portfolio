import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 bg-dark-lighter/50 backdrop-blur-md border-t border-primary/20 py-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-cyber text-sm text-gray-400">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-primary">BAMBA</span>DEV
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/khadimethiam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://sn.linkedin.com/in/khadime-mbacke-thiam-5963751ba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/@KhadimT76278346"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:thiamkhadim154@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-gray-500 flex items-center">
            <span>Fait avec</span>
            <Heart size={14} className="mx-1 text-neon-pink" />
            <span>et React</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
