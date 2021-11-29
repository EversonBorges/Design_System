import { useState } from "react";
import { createObjeto } from "../commons/propertiesClass";
import Cabecalho from "./Cabecalho";

export default function Padding() {

    const [padding, setPadding] = useState({
        nome: "Sem Padding",
        valor: ""
    });

    const arrayPadding = createObjeto("padding");

    return (
        <>
            <div className="row ">
                <Cabecalho
                    titulo="Padding"
                    labelButton="Restaurar Padding"
                    onClick={setPadding}
                    onChange={setPadding}
                    array={arrayPadding}
                    obj={{ nome: "Sem Padding", valor: "" }}
                />
                <div className="box__container">
                    <div className={`row align--center ${padding.nome} color-padding`}>
                        <CreateDivPadding attr="3" qtde={4} prop={padding.nome} />
                    </div>
                </div>
            </div>

            <div className="row align--center margin-top--medium">
                <strong>Espelho para analise de onde foram  aplicados os Paddings</strong>
                <div className="box__container">
                    <div className={`row align--center color-padding`}>
                        <CreateDivPadding attr="3" qtde={4} prop="modelo" />
                    </div>
                </div>
            </div>
        </>
    );
}

function CreateDivPadding(props) {
    const array = [];
    for (let index = 0; index < props.qtde; index++) {
        array.push(props.attr);
    }
    return (
        array.map(() => {
            return (
                <div className={`col col--md-${props.attr} children align--center align--middle`}>
                    {props.prop}
                </div>
            );
        })
    );
}
