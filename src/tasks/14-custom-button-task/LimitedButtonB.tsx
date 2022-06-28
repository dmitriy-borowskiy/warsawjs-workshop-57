import { ComponentProps, useState } from "react";
import {ButtonB} from "./ButtonB";

interface Props extends ComponentProps<typeof ButtonB>{
    maxClick: number;
}

export function LimitedButtonB({ maxClick, ...props } : Props)  {
    const [click, setClick] = useState(0);

    if(click >= maxClick)
        props.isBold = true;

    function onClick() {
        setClick(click + 1);
        props.onClick;
    }

    return (
        <ButtonB {...props} onClick={onClick} />
    );
}
