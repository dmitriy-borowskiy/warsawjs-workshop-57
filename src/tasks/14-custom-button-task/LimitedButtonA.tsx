import {ButtonA, ButtonAProps} from "./ButtonA";
import {useState} from "react";


interface Props extends ButtonAProps {
    maxClick: number;
}

export function LimitedButtonA({ maxClick, ...props} : Props) {
    const [click, setClick] = useState(0);

    if (click >= maxClick) {
        return null;
    }

    function onClick() {
        setClick(click + 1);
    }

    return (
        <div>
            <ButtonA onClick={onClick} color={props.color} children={props.children} />
        </div>
    );
}
