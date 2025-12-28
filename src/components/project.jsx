function Projects() {
  const projects = [
    {
      title: "Vegetable Quality Detection",
      description:
        "CNN-based system to classify vegetables as Fresh, Moderate, or Rotten with 92% accuracy using TensorFlow.",
      tech: "React • Python • CNN • TensorFlow",
      status: "Completed",
    },
    {
      title: "AI Resume Job Recommendation System",
      description:
        "A platform that matches resumes with job requirements using NLP and machine learning techniques.",
      tech: "MERN • NLP • Machine Learning",
      status: "In Progress",
    },
    {
      title: "Chatty - RealTime Chat Application",
      description:
        "A complete MERN stack chat application featuring real-timecommunication user profiles, image sharing, and private chatfunctionality Built with Socket IO for live messaging and includes robust user authentication system",
      tech: "React.js • Node.js • Express.js • MongoDB • Socket.io",
      status: "Completed",
    },
    {
      title: "Portfolio Website",
      description:
        "ShopSphere is a comprehensive e-commerce platform that connects manufacturers and customers, offering a centralized marketplace for various products. The platform provides seamless B2C transactions with features such as user authentication, product browsing, cart management, order processing, and secure PayPal payments.",
      tech: "React.js • Node.js • Express.js • MongoDB ",
      status: "Completed",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded hover:scale-105 transition"
          >
            {/* Title */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              {project.status === "In Progress" && (
                <span className="text-xs px-2 py-1 bg-yellow-500 text-black rounded">
                  In Progress
                </span>
              )}
            </div>

            <p className="text-gray-400 text-sm mb-4">
              {project.description}
            </p>

            <p className="text-sm text-blue-400">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
