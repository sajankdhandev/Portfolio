
export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Navigation */}
      <nav className="w-full flex justify-center items-center py-6 px-4 md:px-12 lg:px-24 border-b border-gray-200 dark:border-gray-800">
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">Sajan</span>
          <a href="#home" className="hover:text-blue-500 transition font-medium">Home</a>
          <a href="#about" className="hover:text-blue-500 transition font-medium">About</a>
          <a href="#skills" className="hover:text-blue-500 transition font-medium">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition font-medium">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition font-medium">Contact</a>
          <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full border border-green-300 font-semibold">#open-to-work</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center py-16 px-4 text-center gap-4">
  <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 italic">HELLO, I’M SAJAN</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Recent Computer Science graduate passionate about Cybersecurity, Artificial Intelligence, and Business Strategy. Strong communication, coordination, and documentation skills. I align technology with business outcomes—clear documentation, team leadership, and delivery focus.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700">View Projects</a>
          <a href="https://www.linkedin.com/in/sajan-dhandev-701aaa208" target="_blank" rel="noopener" className="bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white">LinkedIn</a>
          <a href="https://github.com/sajankdhandev/" target="_blank" rel="noopener" className="bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white">GitHub</a>
          <a
            className="bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sajankdhandev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
          <a href="https://instagram.com/sajankdhandev" target="_blank" rel="noopener" className="bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-pink-600 hover:text-white">Instagram</a>
        </div>
  {/* Removed contact info block for cleaner hero section */}
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-4">
          Recent Computer Science graduate passionate about Cybersecurity, Artificial Intelligence, and Business Strategy. Experienced in business analysis, project coordination, and documentation. Completed the Google Cybersecurity Professional Certificate and participated in a national hackathon. Excellent communication, adaptability, and teamwork abilities.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Highlights</h3>
        <ul className="list-disc list-inside grid gap-2">
          <li>V-Architect: 2D Floor Plan Design Application built with Flutter + Voice Commands (project coordination, analytical problem-solving, UX thinking).</li>
          <li>MUET Cybersecurity Hackathon 2024: collaborated under pressure, structured task ownership, clear communication.</li>
          <li>Google Cybersecurity Professional Certificate: SOC fundamentals, network security, risk management.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">Management & Soft Skills</h3>
        <ul className="list-disc list-inside grid gap-2">
          <li>Concise stakeholder communication & documentation</li>
          <li>Team coordination & cross-functional collaboration</li>
          <li>Prioritization, scope clarity, and decision-making</li>
          <li>Ownership mindset and delivery focus</li>
        </ul>
      </section>

  {/* Snapshot Card Section removed for cleaner layout */}

      {/* Skills Card Section */}
      <section id="skills" className="py-4 px-4 max-w-3xl mx-auto">
        <div className="relative group">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:shadow-2xl group-hover:border-transparent group-hover:ring-4 group-hover:ring-purple-400 group-hover:ring-opacity-60">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-semibold text-blue-700 dark:text-blue-300">Cybersecurity Skills:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Risk Management</span>
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">SIEM Tools</span>
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Network Defense</span>
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Incident Response</span>
                </div>
              </div>
              <div>
                <span className="font-semibold text-green-700 dark:text-green-300">Database Management:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Firebase Firestore</span>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">SQLite</span>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">MySQL</span>
                </div>
              </div>
              <div>
                <span className="font-semibold text-yellow-700 dark:text-yellow-300">Customer & Business Skills:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Customer Support</span>
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Communication</span>
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Documentation</span>
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Team Collaboration</span>
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Market Research</span>
                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Stakeholder Interaction</span>
                </div>
              </div>
              <div>
                <span className="font-semibold text-purple-700 dark:text-purple-300">Other:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">RESTful APIs</span>
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Report Writing</span>
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Presentation Skills</span>
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full font-medium text-base transition-transform duration-200 group-hover:scale-105">Data Entry</span>
                </div>
              </div>
            </div>
          </div>
          {/* Animated glowing border effect */}
          <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full h-full rounded-xl border-4 border-purple-400 animate-pulse blur-sm"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Projects & Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: V-Architect */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 flex flex-col gap-3">
            <h3 className="text-xl font-semibold mb-1">V-Architect</h3>
            <p className="mb-2">2D Floor Plan Design app using Flutter + Voice Commands. Focus on UX, coordination, and problem-solving.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">Flutter</span>
              <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">Voice Commands</span>
              <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">UI/UX</span>
              <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">Team Coordination</span>
            </div>
            <a href="/Final%20Thesis.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Thesis (PDF)</a>
            <a href="https://github.com/sajankdhandev/fyp.git" target="_blank" rel="noopener" className="text-blue-600 hover:underline">GitHub Repo</a>
          </div>
          {/* Card 2: SOC Analyst Simulator */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 flex flex-col gap-3">
            <h3 className="text-xl font-semibold mb-1">SOC Analyst Simulator</h3>
            <p className="mb-2">Flask dashboard generating simulated security events; built to practice incident triage & dashboarding.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">Flask</span>
              <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">Pandas</span>
              <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">Dashboard</span>
              <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">Security</span>
            </div>
          </div>
          {/* Card 3: Node.js Intern */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 flex flex-col gap-3">
            <h3 className="text-xl font-semibold mb-1">Node.js Intern – Internee.pk</h3>
            <span className="text-xs text-gray-500 mb-2">Jan 2025 – April 2025 | Remote</span>
            <ul className="list-disc list-inside ml-4 text-base mb-2">
              <li>Supported team with project coordination and backend development for a mock e-commerce platform.</li>
              <li>Assisted in API creation, documentation, and testing using Postman.</li>
              <li>Collaborated with a small agile team to meet weekly goals and ensure smooth communication.</li>
            </ul>
          </div>
        </div>
  {/* Removed Final Year Project section for cleaner projects list */}
      </section>

      {/* Awards & Achievements Section */}
      <section id="awards" className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Personal Awards & Achievements</h2>
        <div className="mb-8">
          <h3 className="font-semibold">Google Cybersecurity Professional Certificate <span className="text-xs text-gray-500">Sept 2024 – Feb 2025</span></h3>
          <ul className="list-disc list-inside ml-4 text-base">
            <li>Gained hands-on skills in system security, network defense, risk management, and incident response.</li>
            <li>Worked with tools like Wireshark, Security Onion, and SIEM platforms.</li>
            <li>Learned foundational cybersecurity frameworks such as NIST, CIA Triad, and Zero Trust.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold">Cyber Security Hackathon – MUET 2024 <span className="text-xs text-gray-500">Participant | On-site | Aug 2024</span></h3>
          <ul className="list-disc list-inside ml-4 text-base">
            <li>Competed in securing a simulated network under attack.</li>
            <li>Applied knowledge of firewalls, port scanning, and brute-force attack prevention.</li>
            <li>Collaborated with teammates to detect vulnerabilities and respond in real-time.</li>
          </ul>
        </div>
        {/* Education Section moved here */}
        <section id="education" className="py-0 px-0 max-w-3xl mx-auto text-left">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-8">
            <h3 className="font-semibold">Isra University Hyd <span className="text-xs text-gray-500">Jan 2021 – Dec 2024</span></h3>
            <p className="text-base">Bachelor of Science in Computer Science<br />Hyderabad, Pakistan</p>
          </div>
        </section>
      </section>
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-auto">
        © 2025 Sajan — Built with React.
      </footer>
    </div>
  );
}
