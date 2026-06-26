import footer from "../../data/footer";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h2>{footer.business}</h2>

          <p>{footer.tagline}</p>

          <p className="developer">
            {footer.developer}
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>

            {footer.quickLinks.map((link) => (

              <li key={link}>
                {link}
              </li>

            ))}

          </ul>

        </div>

        <div className="footer-column">

          <h3>Services</h3>

          <ul>

            {footer.services.map((service) => (

              <li key={service}>
                {service}
              </li>

            ))}

          </ul>

        </div>

        <div className="footer-column">

          <h3>Contact</h3>

          <p>📍 {footer.contact.address}</p>

          <p>📞 {footer.contact.phone}</p>

          <p>🕒 {footer.contact.timing}</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>{footer.copyright}</p>

      </div>

    </footer>
  );
}

export default Footer;