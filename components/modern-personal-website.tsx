'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Moon, Sun, Download, ChevronRight } from "lucide-react"

export function ModernPersonalWebsite() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">Theo Luo</h1>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Skills</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Contact</a>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5 text-gray-600" />}
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-24">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Theo Luo</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">Computer Science and Data Science Student at UW Madison</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </section>

        <section id="about" className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">About Me</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
            I'm a passionate student at the University of Wisconsin-Madison, pursuing a double major in Computer Science and Data Science. 
            My goal is to leverage cutting-edge technology and data-driven insights to solve complex real-world problems. 
            I'm particularly interested in machine learning, big data analytics, and their applications in improving everyday life.
          </p>
        </section>

        <section id="skills" className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Programming", skills: ["Python", "Java", "C++", "JavaScript", "SQL"] },
              { title: "Data Science", skills: ["Machine Learning", "Data Analysis", "Data Visualization", "Statistical Modeling", "Big Data"] },
              { title: "Tools & Tech", skills: ["Git", "TensorFlow", "Pandas", "Scikit-learn", "Docker", "AWS"] }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-gray-600 dark:text-gray-300 transition-colors duration-200">
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Sentiment Analysis Tool",
                description: "Developed a machine learning model to analyze sentiment in social media posts, achieving 85% accuracy.",
                tags: ["Python", "NLP", "Machine Learning"]
              },
              {
                title: "Campus Navigation App",
                description: "Created a mobile app to help students navigate the UW Madison campus, integrating real-time bus schedules.",
                tags: ["React Native", "Google Maps API", "Real-time Data"]
              }
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm transition-colors duration-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Get in Touch</h3>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200 border-gray-300 dark:border-gray-600">
              <Mail className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200 border-gray-300 dark:border-gray-600">
              <Github className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200 border-gray-300 dark:border-gray-600">
              <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-center py-6 mt-12 transition-colors duration-200">
        <p>&copy; {new Date().getFullYear()} Theo Luo. All rights reserved.</p>
      </footer>
    </div>
  )
}