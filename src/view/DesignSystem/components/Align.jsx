import { useState } from "react";
import SelectAlign from "./SelectAlign";

export default function Align() {

    const [align, setAlign] = useState("align--left");

    return (
        <div className="row ">
            <div className="row align--center  align--middle padding--medium">
                <span className="text ">Align : </span>
                <SelectAlign setAlign={setAlign} tipo='vertical' />
            </div>
            <div className="row box__container">
                <CreateDivAlign attr1="9" attr2="5" qtde={1} prop={align} />
                <CreateDivAlign attr1="3" attr2="3" qtde={1} prop={align} />
                <CreateDivAlign attr1="5" attr2="5" qtde={1} prop={align} />
            </div>
            <AlignMiddle></AlignMiddle>
        </div>
    );
}

function CreateDivAlign(props) {
    const array = [];
    for (let index = 0; index < props.qtde; index++) {
        array.push(props.attr);
    }

    return (

        <div className={`row ${props.prop} text margin-vertical--small`}>
            {
                array.map(() => {
                    return (
                        <>
                            <div className={`col col--md-${props.attr1} children align--center align--middle text`}>
                                {props.prop}
                            </div>
                            <div className={`col col--md-${props.attr2} children align--center align--middle text`}>
                                {props.prop}
                            </div>
                        </>

                    );
                })
            }
        </div>
    );
}

export function AlignMiddle() {

    const [align, setAlign] = useState("align--left");
    const [alignOne, setAlignOne] = useState("align--top");

    return (
        <div className="row ">
            <div className="row align--center align--middle ">
                <span className="text ">Align : </span>
                <span className="padding--medium ">
                    <SelectAlign setAlign={setAlign} tipo="vertical" />
                </span>
                <span className="padding--medium ">
                    <SelectAlign setAlign={setAlignOne} tipo="horizontal" />
                </span>
            </div>
            <div className="row box__container align--center">
                <div className={`row col col--md-12 children ${align} ${alignOne}  text size-fixo`}>
                    <h1 className="margin-right--large">{align}
                    </h1> <h1 className="margin-right--large">{alignOne}</h1>
                </div>
            </div>
        </div>
    );
}
