import Rodape from "../Rodape";
import Topo from "../Topo";
import VoltarAoTopo from "../VoltarAoTopo";

const EstruturaPagina = (props) => {
    return (
        <section>
            <Topo />

            {props.children}

            <Rodape />
            <VoltarAoTopo />
        </section>
    );
};

export default EstruturaPagina;
