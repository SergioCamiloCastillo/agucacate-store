import React, { useEffect, useState } from 'react'
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        fetch("/api/avo").then(response => response.json()).then(({ data, length }) => {
            setProductList(data);
        })

    }, []);
  
    return (
        <div>

            <NavBar />
     
                {productList.map((product) => (
                    <div>{product.name}</div>
                ))}
           

        </div>
    )
}
