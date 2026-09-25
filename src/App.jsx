import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("skills");
  const [showResume, setShowResume] = useState(false);

  // Resume Page
  if (showResume) {
    return (
      <div className="resume-page">
        <div className="resume-header">
          <button
            className="back-to-portfolio"
            onClick={() => setShowResume(false)}
          >
            ← Back to Portfolio
          </button>

          <a
            href="resume.pdf.pdf"
            download="Roshan-Kumar-Resume.pdf"
            className="download-pdf-btn"
          >
            Download PDF
          </a>
        </div>

        <div className="resume-viewer">
          <iframe
            src="resume.pdf.pdf"
            title="Roshan Kumar Resume"
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio">

      {/* ========================= */}
      {/* Navbar */}
      {/* ========================= */}

      <nav className="navbar">
        <h2>PORTFOLIO</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* ========================= */}
      {/* Home Section */}
      {/* ========================= */}

      <section id="home" className="home">

        <div className="home-content">

          <p className="hello">Hello, I'm</p>

          <h1>Roshan K</h1>

          <br />

          <h2>Full Stack Developer</h2>

          <p className="intro">
            Building modern, responsive web experiences with a focus on
            clean code, seamless functionality, and meaningful user
            experiences.
          </p>

          <div className="button-group">

            <a
              href="#projects"
              className="project-btn"
            >
              View My Projects
            </a>

            <button
              className="resume-btn"
              onClick={() => setShowResume(true)}
            >
              Resume
            </button>

          </div>

        </div>


        <div className="home-photo">

          <img
            src="/Roshan.jpg"
            alt="Roshan Kumar"
            className="profile-photo"
          />

        </div>

      </section>


      {/* ========================= */}
      {/* About Section */}
      {/* ========================= */}

      <section
        id="about"
        className="about-section"
      >

        <div className="about-container">

          <div className="about-image">

            <img
              src="image pc.jpg"
              alt="Roshan Kumar"
            />

          </div>


          <div className="about-content">

            <h2>About Me</h2>

            <p className="about-description">
              I am a passionate Full Stack Developer with an interest
              in developing responsive and user-friendly web applications.
              I have knowledge of Java, HTML, CSS, JavaScript, React.js,
              SQL, Git & GitHub and REST APIs. I have a strong interest
              in Java and aspire to build my career as a Java Developer.
              I enjoy learning new technologies and improving my
              programming skills through practical projects and
              real-world development.
            </p>


            {/* About Tabs */}

            <div className="about-tabs">

              <button
                className={
                  activeTab === "skills" ? "active" : ""
                }
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>


              <button
                className={
                  activeTab === "softskills" ? "active" : ""
                }
                onClick={() => setActiveTab("softskills")}
              >
                Soft Skills
              </button>


              <button
                className={
                  activeTab === "education" ? "active" : ""
                }
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>


              <button
                className={
                  activeTab === "certification" ? "active" : ""
                }
                onClick={() => setActiveTab("certification")}
              >
                Certification
              </button>


              <button
                className={
                  activeTab === "internship" ? "active" : ""
                }
                onClick={() => setActiveTab("internship")}
              >
                Internship
              </button>

            </div>


            {/* Skills */}

            {activeTab === "skills" && (
              <div className="tab-content">

                <ul>

                  <li>Java</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>SQL</li>
                  <li>Git & GitHub</li>
                  <li>REST API</li>

                </ul>

              </div>
            )}


            {/* Soft Skills */}

            {activeTab === "softskills" && (
              <div className="tab-content">

                <ul>

                  <li>Communication</li>
                  <li>Teamwork</li>
                  <li>Problem Solving</li>
                  <li>Adaptability</li>
                  <li>Time Management</li>

                </ul>

              </div>
            )}


            {/* Education */}

            {activeTab === "education" && (
              <div className="tab-content">

                <ul>

                  <li>
                    <p>
                      Pursuing Bachelors in Computer science and
                      Engineering at RVS Institute of Technology
                    </p>
                  </li>

                </ul>

              </div>
            )}


            {/* Certification */}

            {activeTab === "certification" && (
              <div className="tab-content">

                <ul>

                  <li>
                    <strong>
                      Python Programming
                    </strong>
                  </li>

                  <h5>
                    Certified by Eduprep
                  </h5>

                  <h5>
                    Completed training in python programming fundamentals
                  </h5>

                </ul>

              </div>
            )}


            {/* Internship */}

            {activeTab === "internship" && (
              <div className="tab-content internship-content">

                <ul>

                  <li>

                    <strong>
                      Nxtlogic Software Solution
                    </strong>

                    <br />

                    <p>
                      Role: AI/ML Intern
                    </p>

                    Gained practical experience in AI/ML concepts,
                    programming and industry-oriented technologies.

                  </li>


                  <li>

                    <strong>
                      Prodigy Infotech
                    </strong>

                    <br />

                    <p>
                      Role: Software Developer Intern
                    </p>

                    Gained practical experience in software development,
                    programming and project development.

                  </li>


                  <li>

                    <strong>
                      Xenora Technology
                    </strong>

                    <br />

                    <p>
                      Role: Full Stack Developer Intern
                    </p>

                    Currently gaining practical experience in full stack
                    development and modern web technologies.

                  </li>

                </ul>

              </div>
            )}

          </div>

        </div>

      </section>


      {/* ========================= */}
      {/* Projects Section */}
      {/* ========================= */}

      <section
        id="projects"
        className="section"
      >

        <h2 className="section-title">
          My Projects
        </h2>


        <div className="projects">

          <div className="project-card">

            <h3>Project 1</h3>

            <p>
              Project details will be added here.
            </p>

          </div>


          <div className="project-card">

            <h3>Project 2</h3>

            <p>
              Project details will be added here.
            </p>

          </div>


          <div className="project-card">

            <h3>Project 3</h3>

            <p>
              Project details will be added here.
            </p>

          </div>

        </div>

      </section>


      {/* ========================= */}
      {/* Contact Section */}
      {/* ========================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-wrapper">

          <div className="contact-heading">

            <p className="contact-label">
              GET IN TOUCH
            </p>

            <h2>
              Let's <span>Connect</span>
            </h2>

            <p className="contact-main-text">
              Whether it’s a new opportunity, a collaboration, or an interesting idea,
              I’d be glad to connect and start a conversation.
            </p>

          </div>

          {/* Message Form */}

          <form
            className="contact-form"
            action="https://formsubmit.co/roshan.k8606@gmail.com"
            method="POST"
          >

            <input
              type="hidden"
              name="_subject"
              value="New Message from Roshan Kumar Portfolio"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_replyto"
              value=""
            />

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="send-message-btn"
            >
              Send Message ↗
            </button>

          </form>

          <div className="contact-cards">

            {/* GitHub */}

            <a
              href="https://github.com/Roshankumar019"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >

              <div className="contact-icon github-icon">

                <svg
                  viewBox="0 0 24 24"
                  width="23"
                  height="23"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.4-5.28 5.69.42.36.79 1.08.79 2.18v3.24c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>

              </div>

              <div className="contact-info">
                <span>GITHUB</span>
                <h3>Roshankumar019</h3>
              </div>

              <div className="contact-arrow">↗</div>

            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/roshankumar019"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >

              <div className="contact-icon linkedin-icon">

                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.3V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.28 7.4a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.5 20.45h3.57V8.98H3.5v11.47ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
                </svg>

              </div>

              <div className="contact-info">
                <span>LINKEDIN</span>
                <h3>Roshan Kumar</h3>
              </div>

              <div className="contact-arrow">↗</div>

            </a>

          </div>

          <div className="contact-status">
            <span></span>
            Available for opportunities
          </div>

        </div>

      </section>


      {/* ========================= */}
      {/* Footer */}
      {/* ========================= */}

      <footer>

        <p>
          © 2026 Roshan Kumar. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;