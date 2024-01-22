import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'
const Products = () => {
    const [product, setProduct] = useState([])
    async function getProduct() {
        const data = await fetch("http://localhost:3000/datas")
        const res = await data.json()
        setProduct(res)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
            <section id='Product'>
                <div className="ProductArea">
                    <div className="TextProduct">
                        <h1>Popular Courses</h1>
                    </div>
                    <div className="CarddAreaa">
                        {product && product.map((item) => (
                            <div className="CardBoxing">
                                <Card key={item._id} id={item._id} image={item.image} text={item.text} author={item.author} imagetwo={item.imagetwo} price={item.price} />
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
