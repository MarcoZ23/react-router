import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleProductPage() {


    const { id } = useParams()

    const api_url = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState([])

    useEffect(() => {

        fetch(api_url)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err))
    })

    return (

        <>
            <div className="card mt-2">
                <h3>{product?.title}</h3>
                <img src={product?.image} alt={product?.title} />
                <div className="card-body">
                    <h5>{product?.category}</h5>
                    <p>{product?.description}</p>
                </div>
                <div className="d-flex justify-content-between fw-bold">€{product?.price}
                    <span>Rate {product?.rating?.rate}</span>
                </div>
            </div>
        </>
    )
}