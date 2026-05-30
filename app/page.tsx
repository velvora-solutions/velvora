export default function VelvoraWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
  <img
    src="/logo.png"
    alt="Velvora Logo"
    className="h-16 w-auto transition-transform duration-300 hover:scale-110"
  />

  <h1 className="text-2xl md:text-4xl font-extrabold text-yellow-400 tracking-wide text-center md:text-left">
    Velvora Solutions
  </h1>
</div>


          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#process" className="hover:text-yellow-400">Process</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>

          <button className="w-full md:w-auto bg-yellow-500 text-black hover:bg-yellow-600 px-5 py-2 rounded-xl text-sm font-medium shadow-[0_0_25px_rgba(234,179,8,0.4)]">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-52 md:pt-36 pb-24 px-6 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-yellow-400 font-semibold mb-4 uppercase tracking-wider">
              Web Development • AI Automation • Accessibility Solutions
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Making Digital Documents
<span className="text-yellow-400"> Accessible </span>
for Everyone
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Velvora Solutions provides modern web development, AI-powered automation, IT services, and accessibility solutions for businesses and global organizations.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
  href="#contact"
  className="bg-yellow-500 text-black hover:bg-yellow-600 px-7 py-4 rounded-2xl font-medium shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all duration-300 hover:scale-105"
>
  Free Consultation
</a>

              <a
    href="#services"
    className="bg-yellow-500 text-black hover:bg-yellow-600 px-7 py-4 rounded-2xl font-medium shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all duration-300 hover:scale-105"
  >
    View Services
  </a>
            </div>
          </div>

          <div className="bg-black rounded-3xl p-10 shadow-2xl border">
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-zinc-900 border border-blue-100">
                <h3 className="font-semibold text-lg mb-2">Web Development</h3>
                <p className="text-gray-300 text-sm">
                  Tagged PDFs, reading order correction, alt text creation,
                  table remediation, and PAC validation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900 border border-purple-100">
                <h3 className="font-semibold text-lg mb-2">AI-Assisted Workflows</h3>
                <p className="text-gray-300 text-sm">
                  Smart automation for faster and scalable accessibility remediation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900 border border-cyan-100">
                <h3 className="font-semibold text-lg mb-2">WCAG & PDF/UA Compliance</h3>
                <p className="text-gray-300 text-sm">
                  Accessibility solutions aligned with international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 font-semibold uppercase tracking-wide mb-3">
              About Us
            </p>

            <h3 className="text-4xl font-bold mb-6">
              Technology & Digital Solutions Company
            </h3>

            <p className="text-gray-300 leading-relaxed mb-5 text-lg">
              Velvora Solutions is a technology-driven company dedicated to delivering innovative, accessible, and high-quality digital solutions. We specialize in PDF Accessibility Remediation, Web Development, AI-powered Solutions, Digital Services, and IT Consulting.

Our mission is to help businesses, educational institutions, publishers, and organizations create inclusive digital experiences that meet global accessibility standards while improving efficiency and user engagement.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              At Velvora Solutions, we combine technology, creativity, and expertise to provide reliable solutions that empower businesses to grow in the digital world.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white text-black rounded-3xl p-5 shadow-xl flex flex-col md:flex-row items-center gap-4">
              <img
                src="/Founder.png"
                alt="Founder"
                className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-3xl bg-gray-100 p-2 shadow-xl"
              />

              <div>
                <p className="text-yellow-400 font-semibold mb-2">
                  Founder & CEO
                </p>

                <h4 className="text-3xl font-bold mb-4">
                  Iyshwariya Senthil
                </h4>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Passionate about technology, AI automation, web development,
                  and accessibility solutions. Focused on building modern digital
                  experiences and scalable digital services for global businesses.
                </p>

                <a
  href="https://www.linkedin.com/in/iyshwariya-senthil-bb7707287/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="w-full md:w-auto bg-yellow-500 text-black hover:bg-yellow-600 px-5 py-3 rounded-2xl font-medium shadow-[0_0_25px_rgba(234,179,8,0.4)]">
    Connect on LinkedIn
  </button>
</a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-3xl p-8 border border-blue-100">
              <h4 className="text-4xl font-bold text-yellow-400 mb-3">WCAG</h4>
              <p className="text-gray-300">Accessibility compliance workflows</p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-purple-100">
              <h4 className="text-4xl font-bold text-yellow-400 mb-3">PDF/UA</h4>
              <p className="text-gray-300">Accessible document standards</p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-cyan-100">
              <h4 className="text-4xl font-bold text-yellow-400 mb-3">AI</h4>
              <p className="text-gray-300">AI-assisted remediation workflows</p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-gray-200">
              <h4 className="text-4xl font-bold text-yellow-400 mb-3">QA</h4>
              <p className="text-gray-300">Manual accessibility verification</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 font-semibold uppercase tracking-wide mb-3">
              Our Services
            </p>

            <h3 className="text-4xl font-bold mb-5">
              Professional IT & Digital Services
            </h3>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              End-to-end web development, automation, accessibility, and IT solutions tailored for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Modern responsive websites, business websites, landing pages, and web applications."              },
              {
                title: "AI Automation Solutions",
                desc: "AI-powered workflows, automation tools, and productivity solutions using Python and modern technologies.",
              },
              {
                title: "PDF Accessibility Remediation",
                desc: "PDF remediation, WCAG compliance, accessible document workflows, and accessibility QA services."
              },
              {
                title: "Custom IT Services",
                desc: "Technology support, workflow optimization, backend solutions, and digital transformation services.",
              },
              {
                title: "Accessibility & QA Testing",
                desc: "Accessibility testing, PAC validation, screen reader QA, and compliance verification.",
              },
              {
                title: "Document & Automation Solutions",
                desc: "OCR processing, document automation, and digital workflow solutions.",
              },
              {
                title: "IT Services & Automation",
                desc: "Custom automation solutions, Python development, AI workflows, and digital support services.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border"
              >
                <h4 className="text-2xl font-semibold mb-4">{service.title}</h4>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-yellow-400 font-semibold uppercase tracking-wide mb-3">
            Our Process
          </p>

          <h3 className="text-4xl font-bold mb-16">
            Accessibility Workflow
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Document Analysis",
              "OCR & Structure Detection",
              "Accessibility Remediation",
              "Alt Text & Table Fixes",
              "PAC Validation",
              "Screen Reader Testing",
              "Quality Assurance",
              "Final Delivery",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-black border rounded-3xl p-8 shadow-sm"
              >
                <div className="w-14 h-14 bg-yellow-500 text-black rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-5">
                  {index + 1}
                </div>

                <h4 className="font-semibold text-lg">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 font-semibold uppercase tracking-wide mb-3">
              Portfolio
            </p>

            <h3 className="text-4xl font-bold mb-5">
              Our Work & Expertise
            </h3>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Delivering accessibility-focused and technology-driven solutions across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "PDF Accessibility Projects",
                desc: "Accessible PDF remediation projects aligned with WCAG and PDF/UA standards.",
              },
              {
                title: "AI Automation Workflows",
                desc: "AI-assisted document processing and workflow automation solutions.",
              },
              {
                title: "Python Development",
                desc: "Custom Python-based tools for productivity, automation, and document workflows.",
              },
              {
                title: "OCR & Document Processing",
                desc: "Scanned document cleanup, OCR correction, and structured digital conversion.",
              },
              {
                title: "Accessibility QA & Testing",
                desc: "PAC validation, screen reader testing, and accessibility quality assurance.",
              },
              {
                title: "IT Support Services",
                desc: "Technology solutions, digital workflows, and client-focused IT support services.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl mb-5 flex items-center justify-center text-yellow-400 font-bold text-xl">
                  {index + 1}
                </div>

                <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-yellow-500 text-black">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-6">
            Make Your PDFs Accessible and Compliant
          </h3>

          <p className="text-lg text-black/80 mb-10 max-w-3xl mx-auto">
            Professional PDF accessibility services with AI-assisted workflows and manual quality assurance.
          </p>

          <button className="bg-black text-yellow-400 hover:bg-zinc-900 px-8 py-4 rounded-2xl font-semibold shadow-[0_0_25px_rgba(234,179,8,0.4)]">
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-14">
      <p className="text-yellow-400 font-semibold uppercase tracking-wide mb-3">
        Contact Us
      </p>

      <h3 className="text-4xl font-bold mb-5">
        Let’s Discuss Your Accessibility Project
      </h3>
    </div>

    <form
      action="https://formsubmit.co/info@velvorasolutions.com"
      method="POST"
      className="bg-black border rounded-3xl p-10 shadow-xl"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Website Enquiry - Velvora Solutions"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 bg-black text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 bg-black text-white"
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your project"
        rows={6}
        required
        className="w-full border rounded-2xl px-5 py-4 mt-6 outline-none focus:border-yellow-400 bg-black text-white"
      />

      <button
        type="submit"
        className="mt-6 bg-yellow-500 text-black hover:bg-yellow-600 px-8 py-4 rounded-2xl font-medium shadow-[0_0_25px_rgba(234,179,8,0.4)]"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

      <footer className="bg-black border-t border-yellow-500/20 text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
    
    <div>
      <h4 className="text-2xl font-bold text-white mb-3">
        Velvora Solutions
      </h4>

      <p className="max-w-md text-gray-400">
        Professional PDF accessibility remediation and AI-assisted document accessibility solutions.
      </p>
    </div>

    <div>
  <p className="mb-2">
    <a
      href="mailto:info@velvorasolutions.com"
      className="text-white hover:underline"
    >
      Email: info@velvorasolutions.com
    </a>
  </p>

  <a
    href="https://www.linkedin.com/company/118444302/admin/dashboard/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:underline"
  >
    LinkedIn: Velvora Solutions
  </a>
</div>
  </div>

  <div className="border-t border-yellow-500/20 mt-8 pt-6 text-center text-gray-500 text-sm">
    © 2026 Velvora Solutions. All Rights Reserved.
  </div>
</footer>
    </div>
  );
}
