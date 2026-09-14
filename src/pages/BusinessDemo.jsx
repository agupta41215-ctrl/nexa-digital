import { useState } from 'react'

function BusinessDemo() {

  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
})
const [successMessage, setSuccessMessage] = useState('')
const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
setIsSubmitting(true)

    try {
      const response = await fetch('${import.meta.env.VITE_API_URL}/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      console.log(data)
if (data.success) {
  setSuccessMessage('Message sent successfully!')
  setIsSubmitting(false)
  setTimeout(() => {
  setSuccessMessage('')
}, 4000)
  setFormData({
  name: '',
  email: '',
  message: ''
})
}else {
  setIsSubmitting(false)
  alert(data.message || 'Something went wrong!')
}
    }
     catch (error) {
  console.error('Error:', error)
  setIsSubmitting(false)
  alert('Unable to connect to server')
}
  }

  return (
    <div className="business-demo">

      {/* NAVBAR */}

      <nav className="demo-navbar">

        <div className="demo-logo">
          Business
        </div>

        <div className="demo-nav-links">
          <a href="#demo-home">Home</a>
          <a href="#demo-services">Services</a>
          <a href="#demo-about">About</a>
          <a href="#demo-contact">Contact</a>
        </div>

      </nav>


      {/* HERO */}

      <section className="demo-hero" id="demo-home">

        <div className="demo-hero-content">

          <p className="demo-label">
            DIGITAL SOLUTIONS FOR YOUR BUSINESS
          </p>

          <h1>
            Grow your business
            <span>with a better website.</span>
          </h1>

          <p>
            We help businesses build a strong online presence
            with simple, effective digital solutions.
          </p>

          <div className="demo-actions">

            <a
              href="#demo-contact"
              className="demo-primary-button"
            >
              Get Started
            </a>

            <a
              href="#demo-services"
              className="demo-secondary-button"
            >
              Our Services
            </a>

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section
        className="demo-services"
        id="demo-services"
      >

        <div className="demo-section-heading">

          <p className="demo-label">
            WHAT WE DO
          </p>

          <h2>
            Services built around your business.
          </h2>

          <p>
            Practical digital solutions designed to help your
            business build a stronger online presence.
          </p>

        </div>


        <div className="demo-services-grid">

          <article className="demo-service-card">

            <span>01</span>

            <h3>
              Business Websites
            </h3>

            <p>
              Professional and responsive websites designed to
              present your business clearly and build trust.
            </p>

          </article>


          <article className="demo-service-card">

            <span>02</span>

            <h3>
              Web Applications
            </h3>

            <p>
              Custom web applications designed to simplify
              everyday business processes.
            </p>

          </article>


          <article className="demo-service-card">

            <span>03</span>

            <h3>
              Website Improvements
            </h3>

            <p>
              Improvements to existing websites including
              responsive design and user experience.
            </p>

          </article>

        </div>

      </section>


      {/* ABOUT */}

      <section
        className="demo-about"
        id="demo-about"
      >

        <div className="demo-about-content">

          <p className="demo-label">
            ABOUT US
          </p>

          <h2>
            We help businesses make a stronger impression online.
          </h2>

          <p>
            Our approach combines clear design, practical
            technology, and a focus on the people who use the website.
          </p>

          <p>
            From a simple business website to a custom web
            application, every solution is designed around the
            needs of the business.
          </p>

        </div>


        <div className="demo-about-points">

          <div>

            <span>01</span>

            <h3>
              Simple
            </h3>

            <p>
              Clear layouts and straightforward navigation.
            </p>

          </div>


          <div>

            <span>02</span>

            <h3>
              Responsive
            </h3>

            <p>
              Designed to work across different screen sizes.
            </p>

          </div>


          <div>

            <span>03</span>

            <h3>
              Practical
            </h3>

            <p>
              Technology focused on real business needs.
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section
        className="demo-contact"
        id="demo-contact"
      >

        <div className="demo-contact-content">

          <p className="demo-label">
            GET IN TOUCH
          </p>

          <h2>
            Ready to take your business online?
          </h2>

          <p>
            Tell us about your business and what you want to build.
            We would love to discuss how we can help.
          </p>

        </div>


        {/* CONTACT FORM */}

        <form
          className="demo-contact-form"
          onSubmit={handleSubmit}
        >
   {successMessage && (
  <  p className="success-message">
      {successMessage}
    </p>
  )}
          <div className="form-group">

            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              rows="5"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

          </div>


         <button type="submit" disabled={isSubmitting}>
  {isSubmitting ? 'Sending...' : 'Send Message'}
</button>

        </form>

      </section>

    </div>
  )
}

export default BusinessDemo