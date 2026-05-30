import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './about.jsx';
import './contact.jsx';
import './services.jsx';

const container = document.getElementById('react-root');
if (container) {
    createRoot(container).render(<Index />);
}

const services = [
    { icon: '📱', cls: 'icon-blue',   title: 'App Development',      desc: 'iOS, Android, and cross-platform mobile apps built with modern SDKs and frameworks.' },
    { icon: '☁️', cls: 'icon-teal',   title: 'Cloud Infrastructure', desc: 'Azure-hosted, scalable backend services designed to grow with your business.' },
    { icon: '📋', cls: 'icon-purple', title: 'Project Management',   desc: 'Agile delivery with sprints, backlogs, and full lifecycle oversight.' },
    { icon: '🎨', cls: 'icon-amber',  title: 'UX & Graphic Design',  desc: 'Interfaces users want to use — designed for both smartphones and tablets.' },
    { icon: '✅', cls: 'icon-coral',  title: 'QA Testing',           desc: 'Multi-device, multi-platform testing across simulators and real hardware.' },
    { icon: '🚀', cls: 'icon-green',  title: 'Deployment Support',   desc: 'App store launch, knowledge transfer, monitoring, and ongoing growth planning.' },
];

const creds = [
    { color: '#1d4ed8', title: 'MCSD · MCSE · MCT',           sub: 'Microsoft Certified since 1998 · ID 1017311' },
    { color: '#065f46', title: 'iOS Developer Program',         sub: 'Member since 2011 · ID 174054634' },
    { color: '#5b21b6', title: 'BlackBerry Enterprise Council', sub: "Selected by RIM's Chief Mobility Officer" },
];

export default function Index() {
    return (
        <div className="ams-page">
            <div className="ams-hero">
                <span className="ams-hero-tag">Microsoft Certified &nbsp;&middot;&nbsp; iOS Developer &nbsp;&middot;&nbsp; Azure Partner</span>
                <h1>Mobile Solutions,<br />Built to Scale</h1>
                <p>
                    We design, build, and deploy enterprise-grade mobile applications using Agile
                    methodology &mdash; on time and on budget.
                </p>
                <div className="ams-hero-btns">
                    <button className="btn-primary" onClick={() => window.show && window.show('services')}>View Services</button>
                    <button className="btn-outline" onClick={() => window.show && window.show('contact')}>Get in Touch</button>
                </div>
                <div className="ams-hero-stats">
                    <div className="ams-stat">
                        <div className="ams-stat-num">25+</div>
                        <div className="ams-stat-label">Years experience</div>
                    </div>
                    <div className="ams-stat">
                        <div className="ams-stat-num">iOS</div>
                        <div className="ams-stat-label">Developer since 2011</div>
                    </div>
                    <div className="ams-stat">
                        <div className="ams-stat-num">MCSD</div>
                        <div className="ams-stat-label">Certified since 1998</div>
                    </div>
                    <div className="ams-stat">
                        <div className="ams-stat-num">Azure</div>
                        <div className="ams-stat-label">Cloud partner</div>
                    </div>
                </div>
            </div>

            <p className="ams-section-label">What we do</p>
            <div className="ams-cards">
                {services.map((s) => (
                    <div className="ams-card" key={s.title}>
                        <div className={`ams-card-icon ${s.cls}`}>{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>

            <p className="ams-section-label">Credentials</p>
            <div className="ams-creds">
                {creds.map((c) => (
                    <div className="ams-cred" key={c.title}>
                        <div className="ams-cred-dot" style={{ background: c.color }} />
                        <div>
                            <h4>{c.title}</h4>
                            <p>{c.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
