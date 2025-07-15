import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Code, Zap, Bot, Sparkles, Shield, Cpu, Database, Terminal, Wifi, Droplets, Cloud } from 'lucide-react';

const projects = [
  {
    title: 'CyberShield',
    description: 'An AI-driven cybersecurity system to identify and track drug trafficking on Telegram, using web scraping, ML, blockchain, and ethical hacking techniques.',
    tags: ['#AI', '#Cybersecurity', '#MachineLearning', '#Blockchain', '#EthicalHacking'],
    github: 'https://github.com/Piouskgeorge/CYBER-AI',
    demo: '',
    tech: ['AI', 'Cybersecurity Tools', 'Blockchain'],
    icon: Shield,
    color: 'text-red-400',
    category: 'Cybersecurity'
  },
  {
    title: 'Garak MCP Server',
    description: 'Garak MCP Server is a Python-based tool that bridges AI assistants with the Garak framework to test Large Language Models (LLMs) for vulnerabilities. It integrates Azure OpenAI and offers natural language and API-based access to run safety evaluations, detect prompt injections.',
    tags: ['#Python', '#MCP', '#Garak', '#AI', '#Security'],
    github: 'https://github.com/Piouskgeorge/GARAK-MCP-SERVER',
    demo: '',
    tech: ['Python', 'Model Context Protocol (MCP)', 'Garak Frameserver'],
    icon: Cpu,
    color: 'text-blue-400',
    category: 'AI/ML'
  },
  {
    title: 'HPC Weather Prediction',
    description: 'HPC Weather Prediction System is a Python-based project that uses real-time weather data and machine learning to predict rainfall across multiple cities. It leverages parallel processing to speed up data analysis and improve forecasting efficiency.',
    tags: ['#Python', '#HPC', '#Weather', '#MachineLearning'],
    github: 'https://github.com/Piouskgeorge/HCP-Weather-prediction-',
    demo: '',
    tech: ['Python', 'Multiprocessing', 'Open-Meteo API'],
    icon: Cloud,
    color: 'text-green-400',
    category: 'AI/ML'
  },
  {
    title: 'Neuro Vision AI Driven System (TN Startup)',
    description: 'Collaborated on the development of an AI-based traffic regulation system to optimize traffic flow and reduce congestion.',
    tags: ['#AI', '#Traffic', '#JetsonNano', '#OpenCV', '#SwinTransformers'],
    github: 'https://github.com/Piouskgeorge/Team_Macrozn',
    demo: '',
    tech: ['NVIDIA Jetson Nano', 'Machine Learning', 'OpenCV', 'Swin Transformers'],
    icon: Bot,
    color: 'text-pink-400',
    category: 'AI/ML'
  },
  {
    title: 'Network Traffic Analysis',
    description: 'Advanced system to monitor, analyze packet flow, and detect unusual traffic patterns with data collection, filtering, and basic anomaly detection techniques.',
    tags: ['#NetworkSecurity', '#TrafficAnalysis', '#AnomalyDetection'],
    github: 'https://github.com/Piouskgeorge/Team_Macrozn',
    demo: 'https://network-analysis-demo.vercel.app',
    tech: ['Python', 'Network Analysis', 'Packet Capture', 'Data Analysis'],
    icon: Wifi,
    color: 'text-blue-400',
    category: 'Cybersecurity'
  },
  {
    title: 'Smart Plant IoT',
    description: 'IoT-based automated plant watering system ensuring optimal hydration with notifications for water tank refill and buzzer alerts when depleted for effortless plant care.',
    tags: ['#IoT', '#Automation', '#Hardware', '#RaspberryPi'],
    github: 'https://github.com/Piouskgeorge/Team_Macrozn',
    demo: 'https://smart-plant-demo.vercel.app',
    tech: ['Raspberry Pi', 'IoT', 'Python', 'Hardware'],
    icon: Droplets,
    color: 'text-green-400',
    category: 'IoT'
  },
];

const techIcons = {
  'Python': Code,
  'React': Code,
  'Node.js': Zap,
  'MongoDB': Database,
  'Machine Learning': Bot,
  'Web Scraping': Terminal,
  'Network Analysis': Wifi,
  'IoT': Cpu,
  'Raspberry Pi': Cpu,
  'Express': Zap,
  'WebSocket': Wifi,
  'Security APIs': Shield,
  'NLP': Bot,
  'Cryptanalysis': Shield,
  'Packet Capture': Wifi,
  'Data Analysis': Sparkles,
  'Hardware': Cpu,
};

const Projects = () => {
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 600], [0, 40]);
  const yBlob2 = useTransform(scrollY, [0, 600], [0, -30]);
  const yBlob3 = useTransform(scrollY, [0, 600], [0, 25]);

  const sectionVariants = {
    hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
    visible: {
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-12 sm:pt-16 lg:pt-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          style={{ y: yBlob1 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-20 w-48 h-48 sm:w-60 sm:h-60 bg-accent-red rounded-full blur-3xl opacity-10 shadow-2xl"
        />
        <motion.div
          style={{ y: yBlob2 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-60 right-32 w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-full blur-3xl opacity-10 shadow-2xl"
        />
        <motion.div
          style={{ y: yBlob3 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-1/2 w-56 h-56 sm:w-72 sm:h-72 bg-black rounded-full blur-3xl opacity-10 shadow-2xl"
        />
      </motion.div>

      <motion.div
        className="responsive-container section-padding relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } } }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="terminal-header mb-4 sm:mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent-red rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full border border-white"></div>
              <span className="text-gray-400 ml-2 sm:ml-4 font-mono text-sm sm:text-base">portfolio:~$ cd /projects</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 font-montserrat bg-gradient-to-r from-accent-red via-white to-accent-red bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Showcasing my expertise in cybersecurity, full-stack development, and AI/ML projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-dark-card p-2 rounded-lg shadow-lg">
            {['All', 'Cybersecurity', 'Web Development', 'IoT', 'AI/ML'].map((category) => (
              <button
                key={category}
                className="px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-200 hover:bg-accent-red/20 hover:text-accent-red focus:bg-accent-red/30 focus:text-accent-red outline-none focus-visible min-h-[44px]"
              >
                <motion.span whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>{category}</motion.span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 card-gap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 32px #ef444488' }}
              className="relative group glass-card p-4 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden shadow-xl hover:shadow-accent-red/40 interactive-element"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-accent-red/10 text-accent-red shadow-md`}>
                  <project.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <span className="text-sm px-2 py-1 rounded bg-dark-card/70 text-gray-400 font-mono">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-accent-red transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {project.tags.map(tag => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05, backgroundColor: '#ef4444', color: '#fff' }}
                    className="text-sm px-2 py-1 rounded bg-dark-card/70 text-accent-red font-semibold font-mono transition-all duration-200"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex items-center justify-between z-20 relative">
                <div className="flex space-x-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-accent-red transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-dark-card/50 shadow-md focus-visible min-h-[44px] min-w-[44px] flex items-center justify-center interactive-element"
                    title="View on GitHub"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-dark-bg/95 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
              >
                <div className="text-center p-4">
                  <h4 className="text-white font-bold mb-3 text-base sm:text-lg">Tech Stack</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm sm:text-base">
                    {project.tech.map((tech, techIdx) => {
                      const IconComponent = techIcons[tech] || Code;
                      return (
                        <div key={techIdx} className="flex items-center space-x-2 text-gray-300">
                          <IconComponent size={12} className="sm:w-3 sm:h-3 text-accent-red" />
                          <span>{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects; 