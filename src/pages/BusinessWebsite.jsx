function BusinessWebsite() {
  return (
    <div className="project-page">

      <nav className="project-nav">
        <div className="logo">Nexa Digital</div>

        <a href="/" className="back-link">
          ← Back to Website
        </a>
      </nav>

      <main>

        {/* Project Hero */}

        <section className="project-hero">

          <p className="project-label">
            WEBSITE DEVELOPMENT
          </p>

          <h1>
            Business Website
          </h1>

          <p>
            A responsive business website designed to present
            services clearly and create a professional online presence.
          </p>

        </section>


        {/* Website Preview */}

        <section className="project-preview-section">

          <div className="project-preview-heading">

            <p className="project-label">
              WEBSITE PREVIEW
            </p>

            <h2>
              A clean and responsive business website.
            </h2>

            <p>
              Designed with a simple structure to help visitors quickly
              understand the business, explore services, and get in touch.
            </p>

          </div>


          <div className="website-mockup">

            <div className="mockup-topbar">
              <span></span>
              <span></span>
              <span></span>
            </div>


            <div className="mockup-navbar">

              <strong>Business</strong>

              <div>
                <span>Home</span>
                <span>Services</span>
                <span>About</span>
                <span>Contact</span>
              </div>

            </div>


            <div className="mockup-content">

              <small>
                WELCOME TO OUR BUSINESS
              </small>

              <h3>
                Grow your business
                <br />
                with a better website.
              </h3>

              <p>
                Professional digital solutions designed around your business.
              </p>

              <button>
                Get Started
              </button>

            </div>

          </div>

        </section>
<section className="project-features">

  <div className="project-preview-heading">

    <p className="project-label">
      KEY FEATURES
    </p>

    <h2>
      Built around a simple user experience.
    </h2>

  </div>


  <div className="features-grid">

    <div className="feature-card">

      <span>01</span>

      <h3>Responsive Layout</h3>

      <p>
        A flexible layout designed to work smoothly across
        desktop, tablet, and mobile screen sizes.
      </p>

    </div>


    <div className="feature-card">

      <span>02</span>

      <h3>Clear Navigation</h3>

      <p>
        Simple navigation helps visitors quickly find important
        information and explore the website.
      </p>

    </div>


    <div className="feature-card">

      <span>03</span>

      <h3>Modern Interface</h3>

      <p>
        A clean visual structure keeps the interface professional,
        readable, and easy to use.
      </p>

    </div>


    <div className="feature-card">

      <span>04</span>

      <h3>Reusable Components</h3>

      <p>
        React components help keep the interface organized and
        make future updates easier to manage.
      </p>

    </div>

  </div>

</section>

        {/* Project Details */}

   <div className="project-detail-card">

  <span>TECH STACK</span>

  <h2>React + JavaScript</h2>

  <div className="tech-stack-list">
    <span>React</span>
    <span>JavaScript</span>
    <span>HTML</span>
    <span>CSS</span>
  </div>

  <p>
    Built with reusable React components and responsive
    CSS to create a clean experience across different
    screen sizes.
  </p>

</div>
<section>

          <div className="project-detail-card">

            <span>FOCUS</span>

            <h2>Responsive Design</h2>

            <p>
              The layout is designed to remain clean and easy to
              navigate across desktop, tablet and mobile devices.
            </p>

          </div>


          <div className="project-detail-card">

            <span>GOAL</span>

            <h2>Clear Communication</h2>

            <p>
              The website focuses on presenting business information
              in a simple and understandable way.
            </p>

          </div>

        </section>


        {/* Project Summary */}

        <section className="project-summary">

          <p className="project-label">
            PROJECT SUMMARY
          </p>

          <h2>
            Simple design. Clear information. Better user experience.
          </h2>

          <p>
            This project explores how a modern business website can
            combine clean visual design with straightforward navigation.
            The interface was developed from scratch with a focus on
            usability and responsive behavior.
          </p>

        </section>

      </main>

    </div>
  )
}

export default BusinessWebsite
