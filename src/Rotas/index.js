import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../paginas/Home";
import Contato from "../paginas/Contato";
import EstruturaPagina from "../componentes/EstruturaPagina";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={
                    <EstruturaPagina>
                        <Home />
                    </EstruturaPagina>
                }
            />
            <Route
                path="/contato"
                element={
                    <EstruturaPagina>
                        <Contato />
                    </EstruturaPagina>
                }
            />
        </Routes>
    </BrowserRouter>
);

export default Rotas;
