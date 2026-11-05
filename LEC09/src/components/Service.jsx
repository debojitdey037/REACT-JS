import React from 'react'
import './Service.css'

function Service() {
  return (
    <div className="service-container">
      <div className="service-header">
        <h1>Our Services</h1>
        <p>Explore the services we offer to help you grow.</p>
      </div>

      <div className="service-cards">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            We build responsive and modern websites
            using the latest web technologies.
          </p>
        </div>

        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>
            We create clean, user-friendly designs
            for a better user experience.
          </p>
        </div>

        <div className="service-card">
          <h2>App Development</h2>
          <p>
            We develop powerful applications
            for your business and personal needs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Service
