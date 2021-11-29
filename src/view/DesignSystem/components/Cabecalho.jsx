import { Select } from "./Select";

export default function Cabecalho(props) {
    return (
        <div className="row align--center padding--medium">
            <div className="margin-horizontal--medium">
                <span className="text">{props.titulo} : </span>
                <Select array={props.array} func={props.onChange} />
            </div>
            <div className="margin-horizontal--medium">
                <button className="button_1" onClick={e => {
                    props.onClick({
                        nome: props.obj.nome,
                        valor: props.obj.valor
                    });
                }}>{props.labelButton}</button>
            </div>
            <div className="margin-horizontal--medium">
                {props.children}
            </div>
        </div>
    );
}