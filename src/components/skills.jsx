import {
  Atom,
  Code,
  Database,
  Brain,
  GitBranch,
  Cpu,
} from "lucide-react"

function Skills() {
  const skills = [
    { name: "React", icon: <Atom size={20} />, style: "top-0 left-1/2 -translate-x-1/2" },
    { name: "Java", icon: <Code size={20} />, style: "top-1/2 right-0 -translate-y-1/2" },
    { name: "Python", icon: <Code size={20} />, style: "bottom-0 left-1/2 -translate-x-1/2" },
    { name: "Node.js", icon: <Cpu size={20} />, style: "top-1/2 left-0 -translate-y-1/2" },
    { name: "MongoDB", icon: <Database size={20} />, style: "top-6 right-6" },
    { name: "ML / AI", icon: <Brain size={20} />, style: "bottom-6 left-6" },
  ]

  return (
    <section id="skills" className="py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Skills
        </h2>

        <div className="relative w-72 h-72 mx-auto">
          
          {/* Orbit Ring */}
          <div className="absolute inset-0 rounded-full border border-white/10 orbit">
            {skills.map((skill, index) => (
              <div
                key={index}
                title={skill.name}
                className={`absolute ${skill.style}
                w-12 h-12 flex items-center justify-center
                bg-gray-900 rounded-full text-blue-400
                hover:scale-125 hover:text-purple-400
                transition`}
              >
                {skill.icon}
              </div>
            ))}
          </div>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-full
              bg-gradient-to-r from-blue-500 to-purple-600
              flex items-center justify-center
              shadow-xl"
            >
              <GitBranch size={32} className="text-white" />
            </div>
          </div>

        </div>
    </section>
  )
}

export default Skills
