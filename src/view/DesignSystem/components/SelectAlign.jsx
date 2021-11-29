import { Fragment } from "react";

export default function SelectAlign(props) {
    return (
        <Fragment>
            <select name="select" onChange={e => {
                props.setAlign(e.target.value);
            }
        }>
                {props.tipo === 'vertical'
                    ? <>
                        <option value='align--left'>Left</option>
                        <option value='align--center'>Center</option>
                        <option value='align--right'>Right</option>
                    </>
                    : null
                }
                {props.tipo === 'horizontal'
                    ? <>
                        <option value='align--top'>Top</option>
                        <option value='align--middle'>Middle</option>
                        <option value='align--bottom'>Bottom</option>
                    </>
                    : null
                }
            </select>
        </Fragment>
    );
}