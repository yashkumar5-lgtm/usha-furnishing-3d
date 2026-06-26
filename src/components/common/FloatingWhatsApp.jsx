import contact from "../../data/contact";

function FloatingWhatsApp() {

    const whatsappNumber = contact.whatsapp.replace(/\D/g, "");

    const message = encodeURIComponent(contact.whatsappMessage);

    return (

        <a

            className="floating-whatsapp"

            href={`https://wa.me/${whatsappNumber}?text=${message}`}

            target="_blank"

            rel="noopener noreferrer"

            aria-label="Chat on WhatsApp"

        >

            💬

        </a>

    );

}

export default FloatingWhatsApp;