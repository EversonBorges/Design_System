import { useState } from "react";

export default function Responsivo() {

    const [ld, setLd] = useState({ //col--ld-3 col--ld-5
        ld1: "",
        ld2: ""
    });
    const [md, setMd] = useState({ //col--md-2 col--md-5
        md1: "",
        md2: ""
    });
    const [tb, setTb] = useState({ //col--tb-2 col--tb-5
        tb1: "",
        tb2: ""
    });
    const [pn, setPn] = useState("");//col--pn-4
    const [sd, setSd] = useState("");//col--sd-12
    const [appliedBreak, setAppliedBreak] = useState(false);

    return (
        <div className="row ">
            <div className="row box__container margin-bottom--medium padding--extra-small">
                <div className="row align--center">
                    <div>Breakpoint (eixo horizontal)</div>
                </div>
                <div className="row align--center">
                    <div> (<strong>Ld - 1200px até +)- </strong></div>
                    <div> (<strong>Md - 1200px até 992px)- </strong></div>
                    <div> (<strong>Tb - 992px até 768px)- </strong></div>
                    <div> (<strong>Pn - 768px até 480px)- </strong></div>
                    <div> (<strong>Sd - 480px até 320px</strong>)</div>
                </div>
            </div>
            <div className="row col col--ld-12 col--md-12 col--tb-12  col--pn-12 col--sd-12 align--center margin--medium">
                <button className="margin--small button_1" onClick={e => {
                    setLd({
                        ld1: "col--ld-3",
                        ld2: "col--ld-5"
                    });
                    setAppliedBreak(true);
                }}>Aplicar Ld</button>

                <button className="margin--small button_1" onClick={e => {
                    setMd({
                        md1: "col--md-2",
                        md2: "col--md-5"
                    });
                    setAppliedBreak(true);
                }}>Aplicar Md</button>

                <button className="margin--small button_1" onClick={e => {
                    setTb({
                        tb1: "col--tb-2",
                        tb2: "col--tb-5"
                    });
                    setAppliedBreak(true);
                }}>Aplicar Tb</button>

                <button className="margin--small button_1" onClick={e => { setPn("col--pn-3"); setAppliedBreak(true); }}>Aplicar Pn</button>

                <button className="margin--small button_1" onClick={e => { setSd("col--sd-6"); setAppliedBreak(true); }}>Aplicar Sd</button>

                <button className="margin--small button_2" onClick={e => {
                    setLd({
                        ld1: "",
                        ld2: ""
                    });
                    setMd({
                        md1: "",
                        md2: ""
                    });
                    setTb({
                        tb1: "",
                        tb2: ""
                    });
                    setSd("");
                    setPn("");
                    setAppliedBreak(false);
                }}>Restaurar</button>
            </div>
            <div className="row box__container margin-bottom--medium align--center">
                {appliedBreak
                    ? <div className="row col col--ld-12 col--md-12 col--tb-12  col--pn-12 col--sd-12 align--center">
                        <span>Media aplicada </span>
                        {ld.ld1 ? <span> (<strong>{ld.ld1}</strong> - <strong>{ld.ld2}</strong>)-</span> : null}
                        {md.md1 ? <span> (<strong>{md.md1}</strong> - <strong>{md.md2}</strong>)-</span> : null}
                        {tb.tb1 ? <span> (<strong>{tb.tb1}</strong> - <strong>{tb.tb2}</strong>)-</span> : null}
                        {pn ? <span> (<strong>{pn}</strong> )-</span> : null}
                        {sd ? <span> (<strong>{sd}</strong>)</span> : null}
                    </div>
                    : null

                }
                <CreateDiv ld={ld.ld2} md={md.md2} tb={tb.tb2} pn={pn} sd={sd} qtd={4} text="GRP_1-DIV" />
                <CreateDiv ld={ld.ld1} md={md.md1} tb={tb.tb1} pn={pn} sd={sd} qtd={3} text="GRP_2-DIV" />
                <CreateDiv ld={ld.ld2} md={md.md2} tb={tb.tb2} pn={pn} sd={sd} qtd={4} text="GRP_3-DIV" />
            </div>
        </div>
    );
}

function CreateDiv(props) {

    const array = [];
    for (let index = 0; index < props.qtd; index++) {
        let textDiv = props.text + "_" + (index + 1);
        array.push(textDiv);
    }

    return (
        array.map((ele) => {
            return (
                <>
                    <div className={`col ${props.ld} ${props.md} ${props.tb}  ${props.pn} ${props.sd} 
                            children align--center align--middle text margin--medium padding--small`}>
                        {ele}
                    </div>
                </>
            );
        })
    );

}