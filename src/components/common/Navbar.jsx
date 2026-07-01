import "../../styles/navbar.css";

function Navbar() {

  const scrollToSection = (sectionId) => {

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }

  };

  return (

    <header className="navbar">

      <div className="nav-container">

        <div
          className="logo"
          onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth"
          })}
          style={{ cursor: "pointer" }}
        >

          <h2>USHA</h2>

          <span>FURNISHING & GADI KARKHANA</span>

        </div>

        <nav>

          <ul className="menu">

            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("products");
                }}
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>

          </ul>

        </nav>

      </div>

    </header>

  );

}

export default Navbar;