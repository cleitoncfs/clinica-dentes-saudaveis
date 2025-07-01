import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./estilo.css";

const VoltarAoTopo = () => {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const mostrarBotao = () => {
            if (window.scrollY > 300) {
                setVisivel(true);
            } else {
                setVisivel(false);
            }
        };

        window.addEventListener("scroll", mostrarBotao);
        return () => window.removeEventListener("scroll", mostrarBotao);
    }, []);

    const rolarParaTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        visivel && (
            <button
                className="botao-topo"
                onClick={rolarParaTopo}
                title="Voltar ao topo"
            >
                <FaArrowUp />
            </button>
        )
    );
};

export default VoltarAoTopo;
