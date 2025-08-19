import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="footer-content">
          <div className="footer-profile">
            <h3 className="footer-name">Kit Chan</h3>
            <p className="footer-title">Software Engineer & Data Scientist</p>
            <p className="footer-location">
              <span className="footer-detail">Previously in Finance</span>
              <span className="footer-separator">•</span>
              <span className="footer-detail">Based in London</span>
              <span className="footer-separator">•</span>
              <span className="footer-detail">From Hong Kong</span>
            </p>
          </div>
          
          <div className="footer-links">
            <Link 
              href="https://www.linkedin.com/in/kit-chan-953544170/" 
              target="_blank" 
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="social-label">LinkedIn</span>
            </Link>
            
            <Link 
              href="https://x.com/kitkit98_" 
              target="_blank" 
              className="social-link"
              aria-label="X (Twitter) Profile"
            >
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="social-label">X</span>
            </Link>
            
            <Link 
              href="mailto:kitchan98@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <svg className="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="social-label">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}