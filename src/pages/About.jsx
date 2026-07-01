function About() {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">
        About Password Manager
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Password Manager is a secure and user-friendly application
        designed to help users organize and store their login
        credentials safely.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Features
      </h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Save website credentials</li>
        <li>Edit passwords anytime</li>
        <li>Delete saved passwords</li>
        <li>Copy credentials with one click</li>
        <li>Fast and responsive interface</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Built With
      </h2>

      <div className="flex gap-4 flex-wrap">
        <span>React</span>
        <span>Tailwind CSS</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>MongoDB</span>
      </div>
    </div>
  );
}

export default About;