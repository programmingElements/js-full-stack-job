import {useEffect, useState} from "react";

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //     .then(response => response.json())
    //     .then(json => setProducts(json))
    // });

    useEffect(() => {
        console.log("component did mount");

        return () => {
              // cleanup activities
            console.log("component will unmount");
        }
    }, [])

    useEffect(() => {
        console.log("component did update");

        return () => {
            // cleanup operations
            console.log("update component will unmount");
        }
    }, [count])

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Products List</h1>
            <h2>Count : {count}</h2>
            <button onClick={handleClick}>increment</button>
            {/* {
                products.map((prod) => <div key={prod.id}>
                    <h3>{prod.title}</h3>
                    <img src={prod.image} alt="Image" width={"300px"} height={"300px"} />
                </div>)
            } */}
        </div>
    )
}