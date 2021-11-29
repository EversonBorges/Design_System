import { Fragment } from "react";

export function Select(props) {
    return (
        <Fragment>
            <select name="select" onChange={e => {
                const obj = JSON.parse(e.target.value);
                props.func({
                    nome: obj.nome,
                    valor: obj.valor
                }
                );
            }
            }>
                {
                    props.array.map(opt => {
                        const valor = JSON.stringify(opt.value);
                        return (
                            <option value={valor}>{opt.label}</option>
                        );
                    })

                }
            </select>
        </Fragment>
    );
}