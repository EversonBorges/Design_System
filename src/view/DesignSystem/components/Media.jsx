import { useState } from "react";
import Cabecalho from "./Cabecalho";

export default function Media() {

    const [media, setMedia] = useState({
        nome: "col--sd-1",
        valor: 12
    });

    const [marginComp, setMarginComp] = useState({
        nome: "Sem Margin",
        valor: ""
    });

    const array = [];

    for (let index = 1; index <= 12; index++) {
        const obj = {
            value:
            {
                nome: `col--sd-${index}`,
                valor: setValue(index)
            },
            label: `col--${index}`
        };
        array.push(obj);
    }

    function setValue(index) {
        switch (index) {
            case 1:
                return 12;
            case 2:
                return 6;
            case 3:
                return 4;
            case 4:
                return 3;
            case 5:
            case 6:
                return 2;
            default:
                return 1;
        }
    }

    function criaMedia(nome, valor) {

        const arr = [];

        for (let index = 0; index < valor; index++) {
            arr.push(
                nome
            );
        }
        return arr;
    }

    const arr = criaMedia(media.nome, media.valor);
    return (
        <div >
            <div className="row align--center padding--medium">
                <Cabecalho
                    titulo="Media"
                    labelButton="Aplicar Margin 24px"
                    onChange={setMedia}
                    onClick={setMarginComp}
                    array={array}
                    obj={{ nome: "margin-horizontal--large", valor: "24px" }}>
                    <button className="button_2" onClick={e => { setMarginComp(""); }}>Retirar Margin 24px</button>
                </Cabecalho>
            </div>
            <div className="row box__container">
                {
                    arr.map((media) => {
                        return (
                            <div className={`col ${media} children align--center align--middle text ${marginComp.nome}`}>
                                {media}
                            </div>
                        );
                    })
                }
            </div>
            <div className="row align--center">
                <h3 >Visualização de quebras com Divs fixas (col-3, col-4, col-6, col-9, col-10)</h3>
                <div className="row box__container">
                    <CreateDivMedia attr="3" qtde={1} prop={media.nome} />
                    <CreateDivMedia attr="4" qtde={1} prop={media.nome} />
                    <CreateDivMedia attr="6" qtde={1} prop={media.nome} />
                    <CreateDivMedia attr="9" qtde={1} prop={media.nome} />
                    <CreateDivMedia attr="10" qtde={1} prop={media.nome} />
                </div>
            </div>
        </div>
    );
}



export function CreateDivMedia(props) {
    const array = [];
    for (let index = 0; index < props.qtde; index++) {
        array.push(props.attr);
    }

    return (
        array.map(() => {
            return (
                <div className="row margin-bottom--medium">
                    <div className={`col ${props.prop} children align--center align--middle text `}>
                        {props.prop}
                    </div>
                    <div className={`col col--sd-${props.attr} children align--center align--middle text `}>
                        col--sd-{props.attr}
                    </div>
                </div>
            );
        })
    );
}




    


