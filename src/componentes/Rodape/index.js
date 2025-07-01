import "./estilo.css";
import {
    FaPhoneAlt,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaExternalLinkAlt,
} from "react-icons/fa";

const Rodape = () => {
    const phoneNumber = "351912345678";
    const whatsappMessage =
        "Olá, gostaria de informações sobre a Clínica Dentes Saudáveis!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <footer className="rodape-personalizado">
            <div className="rodape-conteudo">
                <div className="rodape-logo">
                    <img
                        src="/assets/dente.png"
                        alt="Clínica Dentes Saudáveis"
                    />
                </div>

                <div className="rodape-info">
                    <p>
                        <FaPhoneAlt /> <strong>Telefone:</strong> (91) 234 5678
                    </p>
                    <p>
                        <FaWhatsapp />{" "}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp direto
                        </a>
                    </p>
                    <p>
                        <FaMapMarkerAlt /> Av. Ayrton Senna, 3000 – Leiria,
                        Portugal
                    </p>
                </div>

                <div className="rodape-legenda">
                    <p>
                        © {new Date().getFullYear()} Clínica Dentes Saudáveis –
                        Todos os direitos reservados.
                    </p>
                    <p>
                        Desenvolvido por{" "}
                        <a
                            href="https://portfolio-cleiton.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cleiton Santos <FaExternalLinkAlt />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Rodape;
