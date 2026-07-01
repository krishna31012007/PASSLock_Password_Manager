import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
   <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>

      <p className="text-gray-500 text-center max-w-xl mb-10">
        Have a question, feedback, or just want to connect? Feel free to
        reach out through any of the platforms below.
      </p>

      <div className="space-y-5 w-full max-w-md">

        <a
          href="https://github.com/krishna31012007"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl shadow hover:shadow-lg transition"
        >
          <FaGithub size={28} />
          <div>
            <h2 className="font-semibold">GitHub</h2>
            <p className="text-gray-500">@Krishna31012007</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/krishna-chouhan-7006a3333"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl shadow hover:shadow-lg transition"
        >
          <FaLinkedin size={28} />
          <div>
            <h2 className="font-semibold">LinkedIn</h2>
            <p className="text-gray-500">Connect professionally</p>
          </div>
        </a>

        <a
          href="mailto:chouhankrishna2007@gmail.com"
          className="flex items-center gap-4 p-4 rounded-xl shadow hover:shadow-lg transition"
        >
          <FaEnvelope size={28} />
          <div>
            <h2 className="font-semibold">Email</h2>
            <p className="text-gray-500">chouhankrishna2007@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.instagram.com/urs.krishna.hn/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl shadow hover:shadow-lg transition"
        >
          <FaInstagram size={28} />
          <div>
            <h2 className="font-semibold">Instagram</h2>
            <p className="text-gray-500">@urs.krishna.hn</p>
          </div>
        </a>

      </div>
    </div>
  );
}

export default Contact;