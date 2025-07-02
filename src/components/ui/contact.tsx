import { FaEnvelope, FaPhone, FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="w-screen py-16 flex flex-col items-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mb-2 hover:bg-blue-700 transition">
          Get in touch
        </button>
        <p className="text-gray-600 text-center max-w-lg text-lg">
          What’s next? Feel free to reach out to me if you are looking for a designer, have a query, or simply want to connect.
        </p>
        <div className="flex flex-col items-center gap-2 mt-6">
          <div className="flex items-center gap-2 md:text-2xl text-xl font-bold text-gray-800">
            <FaEnvelope className="text-3xl" />
            <span>oliveiraguieveraldo@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 md:text-2xl text-xl font-bold text-gray-800">
            <FaPhone className="text-3xl" />
            <span>+55 (47) 99738-0671</span>
          </div>
        </div>
        <div className="mt-8 text-gray-600">You may also find me on these platforms!</div>
        <div className="flex gap-3 mt-2">
          <a href="https://www.behance.net/guioli/moodboards" target="_blank" rel="noopener noreferrer">
            <FaBehance className="text-3xl text-blue-600 bg-white rounded hover:bg-blue-100 transition" />
          </a>
          <a href="https://www.linkedin.com/in/guioli/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-blue-700 bg-white rounded hover:bg-blue-100 transition" />
          </a>
          <a href="https://github.com/GuiEveOli" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-gray-800 bg-white rounded hover:bg-gray-200 transition" />
          </a>
        </div>
      </div>
      <footer className="mt-12 text-gray-500 text-center text-sm">
        ©2025 – Designed and Coded by Guilherme Oliveira
      </footer>
    </section>
  );
}