"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, MapPin, Calendar, Code, Database, Globe, Smartphone, GraduationCap, Briefcase, Gamepad2, Wallet } from "lucide-react"
import Head from 'next/head'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Navigation items
const NAV_ITEMS = ["About", "Experience", "Projects", "Skills"]

// Experience data
const EXPERIENCE_DATA = [
  {
    company: "Landing",
    role: "Technology Intern",
    date: "Current",
    description: [
      "Delivered full-stack enhancements across React frontend and Ruby on Rails admin tools, submitting 10s of pull requests improving internal workflows, dashboard UX, and data transparency for product leadership",
      "Initiated development of a machine learning prototype to drive business insights, applying data wrangling, preprocessing, and model experimentation to explore internal decision support use cases",
    ],
    logo: "/hellolanding_logo.jpg"
  },
  {
    company: "ReliaQuest",
    role: "Security Operations Intern",
    date: "Summer 2024",
    description: [
      "Safeguarded 1,000s of critical assets across dozens of Fortune 500 clients by identifying and mitigating over 30 types of security risks and processing over 100,000 alerts, leading to a more effective security posture for clients",
      "Engineered and programmed automation workflows filtering out 100s of false positive incidents, dramatically accelerating response time to true positive alerts",
      "Leveraged cross-department mentorship insights to sharpen technical communication skills, translating complex security issues into clear, actionable information",
    ],
    logo: "/reliaquest_logo.jpg"
  },
  {
    company: "Lift Foils",
    role: "Intern",
    date: "Summer 2022",
    description: [
      "Built and deployed warehouse labeling and barcode systems tracking 100+ hydrofoils, streamlining inventory, improving part traceability, and enhancing production visibility",
    ],
    logo: "/lift_foils_logo.jpg"
  },
]

// Projects data
const PROJECTS_DATA = {
  featured: {
    title: "Panda Express POS System",
    description: "A full-stack web application with modern features",
    content: "Led a cross-functional team as Scrum Master, applying Agile methodologies and facilitating sprint planning, daily stand-ups, and retrospectives to consistently hit project milestones.",
    tech: ["Agile (Scrum)", "Vue.js", "Django", "PostgreSQL", "AWS"]
  },
  other: [
    {
      title: "PennyPilot (in development)",
      description: "Building an AI-powered budgeting assistant with personalized financial insights. \"Your co-pilot for smarter spending.\"",
      tech: ["React", "Supabase", "Plaid", "OpenAI"],
      icon: <Wallet className="w-8 h-8 text-primary-500" />
    },
    {
      title: "Wordle Game",
      description: "Engineered a robust clone of the popular Wordle game, developing intricate game logic and an intuitive interface.",
      tech: ["Java FX", "SceneBuilder"],
      icon: <Gamepad2 className="w-8 h-8 text-primary-500" />
    }
  ]
}

// Skills data
const SKILLS_DATA = [
  {
    category: "Frontend",
    icon: <Code className="w-8 h-8 text-primary-500" />,
    skills: ["React", "Vue.js", "JavaScript", "HTML / CSS"]
  },
  {
    category: "Backend",
    icon: <Database className="w-8 h-8 text-primary-500" />,
    skills: ["Python", "Java", "C / C++", "Ruby"]
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8 text-primary-500" />,
    skills: ["SQL", "PostgreSQL", "Supabase", "Database Design"]
  },
  {
    category: "Tools & Others",
    icon: <Globe className="w-8 h-8 text-primary-500" />,
    skills: ["AI / ML", "Git / GitHub", "Agile (Scrum)", "Microsoft Office"]
  }
]

// Navigation Component
const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-primary-600"
          >
            <a href="/" aria-label="Home">Luke Schaller</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-6"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label={`Scroll to ${item} section`}
              >
                {item}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

// About Section Component
const AboutSection = () => (
  <section id="about" className="pt-32 pb-16 px-4 bg-gray-50" aria-labelledby="about-heading">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="mb-4">
                <span className="text-primary-500 font-medium text-lg">Hello, I'm</span>
              </div>
              <h1 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Luke Schaller
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Aspiring Software Engineer | Passionate about building impactful technology.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary-500" aria-hidden="true" />
                <span className="font-medium">Birmingham, AL</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-primary-500" aria-hidden="true" />
                <span className="font-medium">Texas A&M University</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-primary-500" aria-hidden="true" />
                <span className="font-medium">Landing</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
              I'm a rising senior at Texas A&M, majoring in Computer Science with a Business minor. Currently, I'm
              interning at Landing, where I contribute to internal platforms using React and Ruby on Rails, and explore
              machine learning applications to support product decisions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
              I'm passionate about building innovative solutions that solve real-world problems and enhance user
              experiences. Outside of coding, I enjoy golf and staying active through fitness, currently training
              for a marathon and Hyrox competition.
              </p>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-500 text-primary-600 hover:bg-primary-50 px-6 py-3"
                onClick={() => window.open('https://github.com/lukeschaller', '_blank')}
                aria-label="Visit my GitHub profile"
              >
                <Github className="w-5 h-5 mr-2" aria-hidden="true" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-500 text-primary-600 hover:bg-primary-50 px-6 py-3"
                onClick={() => window.open('https://www.linkedin.com/in/lukeschaller/', '_blank')}
                aria-label="Visit my LinkedIn profile"
              >
                <Linkedin className="w-5 h-5 mr-2" aria-hidden="true" />
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-[28rem] lg:w-96 lg:h-[36rem] bg-gray-200 rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/ring.jpg"
                  alt="Luke Schaller - Software Engineer and Technology Intern"
                  className="w-full h-full object-cover object-center scale-125"
                  width={384}
                  height={576}
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-primary-100 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

// Experience Section Component
const ExperienceSection = () => (
  <section id="experience" className="py-16 px-4" aria-labelledby="experience-heading">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Professional Experience</h2>
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} company logo`}
                          className="w-8 h-8 object-contain"
                          width={32}
                          height={32}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{exp.role}</CardTitle>
                        <CardDescription className="text-primary-600 font-medium text-lg">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                      <span className="text-sm">{exp.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2" role="list">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// Projects Section Component
const ProjectsSection = () => (
  <section id="projects" className="py-16 px-4 bg-gray-50" aria-labelledby="projects-heading">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="shadow-xl hover:shadow-2xl transition-shadow overflow-hidden">
            <div className="p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl text-gray-900">{PROJECTS_DATA.featured.title}</CardTitle>
                <CardDescription className="text-lg">
                  {PROJECTS_DATA.featured.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700 mb-6">
                  {PROJECTS_DATA.featured.content}
                </p>
                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                  {PROJECTS_DATA.featured.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary-100 text-primary-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8" role="list" aria-label="Other projects">
          {PROJECTS_DATA.other.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 transform duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    {project.icon}
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// Skills Section Component
const SkillsSection = () => (
  <section id="skills" className="py-16 px-4" aria-labelledby="skills-heading">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Skill categories">
          {SKILLS_DATA.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">{skillGroup.icon}</div>
                  <CardTitle className="text-lg text-gray-900">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2" role="list" aria-label={`${skillGroup.category} skills`}>
                    {skillGroup.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="w-full justify-center bg-primary-50 text-primary-700 hover:bg-primary-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// Footer Component
const Footer = () => (
  <footer className="py-8 px-4 bg-gray-900 text-white" role="contentinfo">
    <div className="container mx-auto text-center">
      <p className="text-gray-400">© {new Date().getFullYear()} Luke Schaller. All rights reserved.</p>
    </div>
  </footer>
)

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Luke Schaller | Software Engineer & Technology Intern</title>
        <meta name="description" content="Luke Schaller is a Computer Science student at Texas A&M University and Technology Intern at Landing. Passionate about building innovative software solutions and enhancing user experiences." />
        <meta name="keywords" content="Luke Schaller, Software Engineer, Computer Science, Texas A&M University, Technology Intern, Landing, Web Development, Full Stack Developer" />
        <meta property="og:title" content="Luke Schaller | Software Engineer & Technology Intern" />
        <meta property="og:description" content="Computer Science student at Texas A&M University and Technology Intern at Landing. Passionate about building innovative software solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lukeschaller.com" />
        <meta property="og:image" content="/main_pic.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luke Schaller | Software Engineer & Technology Intern" />
        <meta name="twitter:description" content="Computer Science student at Texas A&M University and Technology Intern at Landing. Passionate about building innovative software solutions." />
        <meta name="twitter:image" content="/main_pic.jpg" />
        <link rel="canonical" href="https://lukeschaller.com" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
