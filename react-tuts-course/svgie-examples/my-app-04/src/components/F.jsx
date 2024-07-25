import { useContext } from "react";
import { CartContext, UserContext } from "../App";

function F() {
    const value = useContext(UserContext);
    const value2 = useContext(CartContext);
    return (
        <div className="c-comp">
            <h1>I am F {value2}</h1>
            <h3>{value}</h3>
        </div>
    )
}

export default F;