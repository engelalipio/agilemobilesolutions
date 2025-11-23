import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './about.jsx'; 
import './contact.jsx';
import './services.jsx';

const container = document.getElementById('react-root');
if (container) {
    createRoot(container).render(<Index />);
}

export default function Index() {
    return (
        <div>
            <h3>Why Agile Mobile Solutions Development Services (React)</h3>
            <ol className="round">
                <li className="one">
                    <h5>Agile Methodology</h5>
                    We leverage set of tools and associated services that enable us to design, build, deploy and manage mobile applications in a very rapid fashion. <br />
                    In today’s constantly changing world, organizations require mobility solutions that can quickly respond to the rapidly evolving needs of their user base.<br /> 
                    <a href="https://en.wikipedia.org/wiki/Agile_software_develoment" target="_blank" rel="noopener noreferrer">More Details…</a>
                </li>
                <li className="two">
                    <h5>Apple's iOS Developer Program</h5>
                    iOS is without a doubt the world’s most advanced mobile operating system, continually redefining what people can do with a mobile device.<br />
                    Solutions will leverage the iOS SDK (Software Development Kit) and XCode IDE (Integrated Design Editor) to be able to provide the best experience to your customers.<br />
                    Additionally, the iOS platform provides the ability to seamlessly integrate with multiple back-end applications and data sources using standards-based API’s. This reduces the complexity of interfacing your mobile applications with internal, external third-party or public applications and data sources when required.
                    <a href="https://developer.apple.com/" target="_blank" rel="noopener noreferrer">More Details…</a>
                </li>
                <li className="three">
                    <h5>Cloud Infrastructure and Services</h5>
                    We are member of Windows Azure cloud Infrastructure and Services for both the middle and back end tiers of your solution if required.<br />
                    This is Microsoft's Cloud offering that provides highly-available, infinitely scalable applications and data centers. <br />
                    This allows us to focus on the actual application and not the plumbing. It is built on modern cloud architecture which respond faster and never go down also providing, monitoring, alerting and auto-scaling.
                    <a href="http://www.azure.microsoft.com/‎" target="_blank" rel="noopener noreferrer">More Details…</a>
                </li>
            </ol>
        </div>
    );
}