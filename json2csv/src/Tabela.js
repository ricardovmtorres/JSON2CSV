import React from "react";

function Tabela() {
    const [disable, setDisable] = React.useState(false);

    return (
        <button disabled={disable} onClick={() => setDisable(true)}>
            Gerar Tabela
        </button>
    );
}

export default Tabela;