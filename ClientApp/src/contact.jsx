import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('react-contact');
if (container) {
    createRoot(container).render(<Contact />);
}
 
export default function Contact() {
    return (
        <div>
            <section className="contact">
                <header>
                    <h3>Phone (React)</h3>
                </header>
                <p>
                    <span className="label">Mobile:</span>
                    <span>904.382.5209</span>
                </p>
            </section>

            <section className="contact">
                <header>
                    <h3>Email</h3>
                </header>
                <p>
                    <span className="label">General:</span>
                    <span>
                        <a href="mailto:engel@agilemobilesolutions.org">
                            Engel@AgileMobileSolutions.org
                        </a>
                    </span>
                </p>
            </section>
        </div>
    );
}


