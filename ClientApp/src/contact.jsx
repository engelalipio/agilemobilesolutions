import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('react-contact');
if (container) {
    createRoot(container).render(<Contact />);
}

export default function Contact() {
    return (
        <div className="ams-page">
            <div className="ams-contact-hero">
                <h2>Get in Touch</h2>
                <p>Ready to start your next mobile project? Reach out and we&rsquo;ll get back to you promptly.</p>
            </div>

            <p className="ams-section-label">Contact details</p>

            <div className="ams-contact-card">
                <div className="ams-contact-icon">📱</div>
                <div>
                    <h3>Mobile</h3>
                    <p>904.382.5209</p>
                </div>
            </div>

            <div className="ams-contact-card">
                <div className="ams-contact-icon">✉️</div>
                <div>
                    <h3>General Inquiries</h3>
                    <a href="mailto:engel@agilemobilesolutions.org">Engel@AgileMobileSolutions.org</a>
                </div>
            </div>

            <div className="ams-contact-card">
                <div className="ams-contact-icon">🌐</div>
                <div>
                    <h3>Website</h3>
                    <a href="https://agilemobilesolutions.azurewebsites.net" target="_blank" rel="noopener noreferrer">
                        agilemobilesolutions.azurewebsites.net
                    </a>
                </div>
            </div>
        </div>
    );
}
