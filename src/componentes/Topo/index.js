import { useState } from "react";
import { Link } from "react-router-dom";
import "./estilo.css";

const Topo = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const fecharMenu = () => setMenuAberto(false);

    return (
        <header className="topo">
            <div className="topo-conteudo">
                <Link className="topo-logo-box" to="/" onClick={fecharMenu}>
                    <img
                        className="topo-logo"
                        src="assets/dente.png"
                        alt="logo dentes saudáveis"
                    />
                    <p className="topo-nome-empresa">Dentes Saudáveis</p>
                </Link>

                {/* Botão do menu */}
                <button
                    className={`topo-menu-botao linhas ${
                        menuAberto ? "ativo" : ""
                    }`}
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`topo-links ${menuAberto ? "aberto" : ""}`}>
                    <Link className="topo-link" to="/" onClick={fecharMenu}>
                        Home
                    </Link>
                    <Link
                        className="topo-link"
                        to="/contato"
                        onClick={fecharMenu}
                    >
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Topo;
