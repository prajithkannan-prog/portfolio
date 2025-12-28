function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Contact Me
      </h2>

      <p className="text-center text-gray-400 mb-8">
        Feel free to reach out for opportunities or collaboration
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:prajithkannan@student.tce.edu"
          className="px-6 py-2 border border-blue-500 rounded
          hover:bg-blue-500 transition"
        >
          Email
        </a>

        <a
          href="tel:+917418330997"
          className="px-6 py-2 border border-green-500 rounded
          hover:bg-green-500 transition"
        >
          Call
        </a>

        <a
          href="https://github.com/prajithkannan-prog"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 border border-gray-500 rounded
          hover:bg-gray-700 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact
