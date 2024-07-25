import { useState } from "react";
import B from "./B";
import C from "./C";



function A() {
    const [ count, setCount ] = useState(100);
    return (
        <div>
            <h1>I am A</h1>
            <hr />
            <div className="a-comp">
            <B info={count} />
            <C info={count} />
            </div>
        </div>
    )
}

export default A;