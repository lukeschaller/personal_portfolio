"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, MapPin, Calendar, Code, Database, Globe, Smartphone, GraduationCap } from "lucide-react"

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

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-primary-600"
            >
              Luke Schaller
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-6"
            >
              {["About", "Experience", "Projects", "Skills"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* About Me Section */}
      <section id="about" className="pt-32 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <div className="mb-4">
                    <span className="text-primary-500 font-medium text-lg">Hello, I'm</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Luke Schaller
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                    Aspiring software engineer passionate about building impactful technology.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">Birmingham, AL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">Texas A&M University</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a rising senior at Texas A&M University studying Computer Science with a Business minor,
                  currently working as a Technology Intern at Landing. I'm passionate about building innovative
                  solutions that solve real-world problems and enhance user experiences.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  When I'm not coding, you'll find me pushing my limits through fitness and running, always seeking
                  new challenges both in and out of the tech world. I believe in the power of combining technical
                  expertise with business acumen to create impactful solutions that drive meaningful change.
                  </p>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-500 text-primary-600 hover:bg-primary-50 px-6 py-3"
                    onClick={() => window.open('https://github.com/lukeschaller', '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-500 text-primary-600 hover:bg-primary-50 px-6 py-3"
                    onClick={() => window.open('https://www.linkedin.com/in/lukeschaller/', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>

              {/* Right Column - Profile Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gray-200 rounded-3xl shadow-2xl overflow-hidden">
                    <img
                      src="/main_pic.jpg"
                      alt="Luke Schaller"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Optional: Add a subtle background decoration */}
                  <div className="absolute -z-10 top-4 left-4 w-full h-full bg-primary-100 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  company: "Landing",
                  role: "Technology Intern",
                  date: "Current",
                  description: [
                  ],
                },
                {
                  company: "ReliaQuest",
                  role: "Security Operations Intern",
                  date: "Summer 2024",
                  description: [
                    "Safeguarded 1,000s of critical assets across dozens of Fortune 500 clients by identifying and mitigating over 30 types of security risks and processing over 100,000 alerts, leading to a more effective security posture for clients",
                    "Engineered and programmed automation workflows that filtered out 100s of false positive incidents, dramatically accelerating response time to true positive alerts",
                    "Leveraged cross-department mentorship insights to refine my technical communication skills, effectively translating complex security issues into clear, actionable information",
                  ],
                },
                {
                  company: "Lift Foils",
                  role: "Intern",
                  date: "Summer 2022",
                  description: [
                    "Developed and implemented an innovative labeling system for warehouse hard goods and shelves, streamlining inventory management and boosting overall operational efficiency",
                    "Established a real-time tracking system to monitor production progress through assembly stages by managing barcode printing and application on 100s of hydrofoils, boosting workflow visibility and quality control",
                  ],
                },
              ].map((exp, index) => (
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
                              src={
                                exp.company === "Landing" 
                                  ? "/hellolanding_logo.jpg" 
                                  : exp.company === "ReliaQuest"
                                  ? "/reliaquest_logo.jpg"
                                  : exp.company === "Lift Foils"
                                  ? "/lift_foils_logo.jpg"
                                  : "/placeholder.svg"
                              }
                              alt={`${exp.company} logo`}
                              className="w-8 h-8 object-contain"
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
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.date}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>

            {/* Featured Project */}
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
                    <CardTitle className="text-2xl text-gray-900">Panda Express POS System</CardTitle>
                    <CardDescription className="text-lg">
                      A full-stack web application with modern features
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-700 mb-6">
                    Led a cross-functional team as Scrum Master, applying Agile methodologies and facilitating sprint planning, daily
                    stand-ups, and retrospectives to consistently hit project milestones.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Agile (Scrum)", "Vue.js", "Django", "PostgreSQL", "AWS"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary-100 text-primary-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            {/* Other Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Personal Portfolio",
                  description: "Crafted a sleek, fully responsive portfolio website that showcases diverse projects and skills.",
                  tech: ["HTML", "CSS", "JavaScript"],
                  icon: <Smartphone className="w-8 h-8 text-primary-500" />,
                },
                {
                  title: "Wordle Game",
                  description: "Engineered a robust clone of the popular Wordle game, developing intricate game logic and an intuitive interface.",
                  tech: ["Java", "JavaFX", "SceneBuilder"],
                  icon: <Globe className="w-8 h-8 text-primary-500" />,
                },
              ].map((project, index) => (
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
                      <div className="flex flex-wrap gap-2">
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

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Frontend",
                  icon: <Code className="w-8 h-8 text-primary-500" />,
                  skills: ["React", "Vue.js", "JavaScript", "HTML/CSS"],
                },
                {
                  category: "Backend",
                  icon: <Database className="w-8 h-8 text-primary-500" />,
                  skills: ["Python", "Java", "C/C++", "Ruby"],
                },
                {
                  category: "Database",
                  icon: <Database className="w-8 h-8 text-primary-500" />,
                  skills: ["SQL", "PostgreSQL", "AWS", "Database Design"],
                },
                {
                  category: "Tools & Others",
                  icon: <Globe className="w-8 h-8 text-primary-500" />,
                  skills: ["AI/ML", "Git/GitHub", "Agile (Scrum)", "Microsoft Office"],
                },
              ].map((skillGroup, index) => (
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
                      <div className="space-y-2">
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

      {/* Remove the entire Contact Section */}

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 Luke Schaller. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
