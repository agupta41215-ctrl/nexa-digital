import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="hero-label">WEB DESIGN & DEVELOPMENT</p>

            <h1>
              Websites built for
              <span> real business growth.</span>
            </h1>

            <p className="hero-text">
              We create clean, fast, and responsive websites that help
              businesses build a strong online presence.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Start a Project
              </a>

              <a href="#projects" className="secondary-button">
                View Our Work
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="section-label">WHAT WE DO</p>

            <h2>Services built around your business.</h2>

            <p>
              From a simple business website to a complete web application,
              we build solutions that fit your goals.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3>Business Websites</h3>

              <p>
                Professional and responsive websites designed to give your
                business a strong online presence.
              </p>
            </div>

            <div className="service-card">
              <h3>Web Applications</h3>

              <p>
                Modern web applications built with React and a reliable
                backend to support your business needs.
              </p>
            </div>

            <div className="service-card">
              <h3>Website Improvements</h3>

              <p>
                Redesign, bug fixes, performance improvements, and updates for
                existing websites.
              </p>
            </div>
          </div>
        </section>
                {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-content">
            <p className="section-label">ABOUT NEXA DIGITAL</p>

            <h2>
              We turn ideas into websites people enjoy using.
            </h2>

            <p>
              Nexa Digital helps businesses create a professional presence
              online through thoughtful design and reliable web development.
              We focus on building websites that are clear, easy to use, and
              designed around real business goals.
            </p>

            <p>
              From the first idea to the final launch, our approach is simple:
              understand the goal, build with care, and make sure everything
              works smoothly across devices.
            </p>
          </div>

          <div className="about-points">
            <div>
              <strong>01</strong>
              <h3>Clear Communication</h3>
              <p>
                We keep the development process simple and communicate clearly
                throughout the project.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Thoughtful Development</h3>
              <p>
                Every page is built with usability, performance, and
                maintainability in mind.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Built to Grow</h3>
              <p>
                We create websites that can evolve as your business and
                requirements grow.
              </p>
            </div>
          </div>
        </section>
                {/* Projects Section */}

<section className="projects-section" id="projects">

  <div className="section-heading">
    <p className="section-label">SELECTED WORK</p>

    <h2>Websites and applications built with purpose.</h2>

    <p>
      A selection of projects focused on clean design, responsive layouts,
      and practical user experiences.
    </p>
  </div>

  <div className="projects-grid">

 {/* Project 1 */}

<article className="project-card">

  <div className="project-preview preview-business">
    <div className="preview-navbar">
      <strong>Business</strong>
      <span>Home &nbsp; Services &nbsp; Contact</span>
    </div>

    <div className="preview-content">
      <small>WELCOME TO OUR BUSINESS</small>
      <h4>Grow your business online.</h4>
      <div className="preview-button"></div>
    </div>
  </div>

  <div className="project-info">

    <p className="project-type">WEBSITE DEVELOPMENT</p>

    <h3>Business Website</h3>

    <p>
      A responsive business website focused on clear content,
      simple navigation, and a professional online presence.
    </p>

    <div className="project-tags">
      <span>React</span>
      <span>JavaScript</span>
      <span>CSS</span>
    </div>

    <a href="/business-website" className="project-link">
  View Project →
</a>

  </div>

</article>

    {/* Project 2 */}

    <article className="project-card">

      <div className="project-preview preview-dashboard">
        <div className="dashboard-sidebar">
          <strong>Dashboard</strong>
          <span>Overview</span>
          <span>Tasks</span>
          <span>Reports</span>
        </div>

        <div className="dashboard-main">
          <small>OVERVIEW</small>

          <div className="dashboard-cards">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="dashboard-chart"></div>
        </div>
      </div>

      <div className="project-info">

        <p className="project-type">FULL STACK DEVELOPMENT</p>

        <h3>Business Management App</h3>

        <p>
          A full stack web application concept for managing business
          information, tasks, and everyday operations.
        </p>

        <div className="project-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>
        <a href="#contact" className="project-link">
  Discuss Similar Project →
</a>

      </div>

    </article>


    {/* Project 3 */}

    <article className="project-card">

      <div className="project-preview preview-store">
        <div className="store-navbar">
          <strong>STORE</strong>
          <span>Products &nbsp; Cart</span>
        </div>

        <div className="store-products">

          <div className="store-product">
            <div className="product-box"></div>
            <small>Product One</small>
          </div>

          <div className="store-product">
            <div className="product-box"></div>
            <small>Product Two</small>
          </div>

          <div className="store-product">
            <div className="product-box"></div>
            <small>Product Three</small>
          </div>

        </div>
      </div>

      <div className="project-info">

        <p className="project-type">E-COMMERCE WEBSITE</p>

        <h3>Online Store</h3>

        <p>
          A modern online store focused on product presentation,
          responsive design, and a straightforward shopping experience.
        </p>

        <div className="project-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>
        <a href="#contact" className="project-link">
  Discuss Similar Project →
</a>

      </div>

    </article>

  </div>

</section>
                {/* Projects Section */}
        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p className="section-label">SAMPLE WORK</p>

            <h2>Web experiences designed with purpose.</h2>

            <p>
              Examples of the type of websites and web applications we aim to
              build for growing businesses.
            </p>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-image project-one">
                <span>Business Website</span>
              </div>

              <div className="project-info">
                <p className="project-type">WEBSITE</p>

                <h3>Local Business Website</h3>

                <p>
                  A clean website concept focused on presenting services,
                  building trust, and making it easy for customers to get in
                  touch.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image project-two">
                <span>Web Application</span>
              </div>

              <div className="project-info">
                <p className="project-type">WEB APP</p>

                <h3>Business Dashboard</h3>

                <p>
                  A dashboard concept designed to organize business data,
                  tasks, and everyday operations in one place.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MySQL</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image project-three">
                <span>Online Store</span>
              </div>

              <div className="project-info">
                <p className="project-type">E-COMMERCE</p>

                <h3>Modern Online Store</h3>

                <p>
                  An e-commerce concept focused on clear product presentation
                  and a simple shopping experience.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MySQL</span>
                </div>
              </div>
            </article>
          </div>
        </section>
                {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="contact-content">
            <p className="section-label">GET IN TOUCH</p>

            <h2>Have a project in mind?</h2>

            <p>
              Tell us a little about your project, and let's discuss how we
              can turn your idea into a website that works for your business.
            </p>

            <a href="mailto:hello@nexadigital.com" className="primary-button">
              Start a Conversation
            </a>
          </div>

          <div className="contact-details">
            <div>
              <span>Email</span>
              <p>hello@nexadigital.com</p>
            </div>

            <div>
              <span>Services</span>
              <p>Websites · Web Apps · E-commerce</p>
            </div>

            <div>
              <span>Availability</span>
              <p>Available for new projects</p>
            </div>
          </div>
        </section>
                {/* Footer */}
        <footer className="footer">
          <div className="footer-brand">
            <h3>Nexa Digital</h3>
            <p>
              Building clean and reliable websites for growing businesses.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <p className="footer-copy">
            © 2026 Nexa Digital. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}


export default App
