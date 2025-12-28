import profile from "../assets/profile.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6"
    >
      <div className="mb-6 group">
  <div
    className="w-40 h-40 rounded-full p-1
    bg-gradient-to-r from-blue-500 to-purple-600
    animate-pulse
    transition-transform duration-300
    group-hover:scale-110"
  >
    <img
      src={profile}
      alt="Prajith"
      className="w-full h-full object-cover rounded-full border-4 border-gray-900"
    />
  </div>
</div>


      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
        Hi, I'm{" "}
        <span className="text-blue-400 hover:text-purple-400 transition">
          Prajith Kannan
        </span>
      </h2>

      <p className="mt-4 text-gray-400 max-w-xl text-sm md:text-base">
        Final year Computer Science and Business System student at <b>TCE</b>
      </p>
        <p className="mt-4 text-gray-400 max-w-xl text-sm md:text-base">
        <b>Professional Objective : </b>
        To work in a collaborative and growth-oriented environment where I can continuously
        improve my skills, contribute effectively to the organization’s success, and take on new challenges
        to enhance my expertise.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-2 border border-blue-500 rounded hover:bg-blue-600 hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:scale-105 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero
