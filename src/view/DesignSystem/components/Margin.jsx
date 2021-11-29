import { useState } from "react";
import { createObjeto } from "../commons/propertiesClass";
import Cabecalho from "./Cabecalho";

export default function Margin() {

    const [margin, setMargin] = useState({
        nome: "Sem Margin",
        valor: ""
    });

    const arrayMargin = createObjeto("margin");

    return (
        <>
            <div className="row ">
                <Cabecalho
                    titulo="Margin"
                    labelButton="Restaurar Margin"
                    onClick={setMargin}
                    onChange={setMargin}
                    array={arrayMargin}
                    obj={{ nome: "Sem Margin", valor: "" }} />

                <div className="box__container">
                    <div className="row align--center padding--small color-padding">
                        <div className={`col col--md-12 children align--center align--middle`}>
                            DIV FIXA
                        </div>
                        <CreateDivMargin attr="4" qtde={4} prop={margin.nome} />
                        <CreateDivMargin attr="2" qtde={4} prop={margin.nome} />
                        <div className={`col col--md-12 children align--center align--middle`}>
                            DIV FIXA
                        </div>
                    </div>
                </div>
            </div>
            <div className="row  align--center margin-top--medium">
                <strong>Espelho para analise de onde foram  aplicadas as Margins</strong>
                <div className="row box__container">
                    <div className="row align--center padding--small color-padding">
                        <div className={`col col--md-12 children align--center align--middle`}>
                            DIV FIXA
                        </div>
                        <CreateDivMargin attr="4" qtde={4} prop="modelo" />
                        <CreateDivMargin attr="2" qtde={4} prop="modelo" />
                        <div className={`col col--md-12 children align--center align--middle`}>
                            DIV FIXA
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function CreateDivMargin(props) {
    const array = [];
    for (let index = 0; index < props.qtde; index++) {
        array.push(props.attr);
    }

    return (
        array.map(attr => {
            return (
                <div className={`col col--md-${props.attr} children ${props.prop} align--center align--middle`}>
                    {props.prop}
                </div>
            );
        })
    );
}
