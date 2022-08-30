import { useEffect } from "react";
import { themeChange } from "theme-change";

const Buttons = () => {
    const lbtn = <button id="light" data-set-theme="cmyk" data-act-class="ACTIVECLASS"></button>;
    const dbtn = <button id="dark" data-set-theme="forest" data-act-class="ACTIVECLASS"></button>;
    useEffect(() => {
        themeChange(false)
    }, [])
    return (
        <>
        {lbtn}
        {dbtn}
        </>
    )
}

export default Buttons;