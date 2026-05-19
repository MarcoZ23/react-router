import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ProductsPage() {

    const [products, setProducts] = useState([])
    const apiProducts = "https://fakestoreapi.com/products"
    useEffect(() => {
        fetch(apiProducts)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])


    return (

        <>
            <h4 className="text-center">I nostri prodotti</h4>
            <div className="container">
                <div className="row g-3">
                    {products.map((product) => (
                        <div className="col-sm-6 col-md-4" key={product.id}>
                            <div className="card mt-2">
                                <h3>{product.title}</h3>
                                <img src={product.image} alt={product.title} />
                                <div className="card-body">
                                    <h5>{product.category}</h5>
                                    <p>{product.description}</p>
                                </div>
                                <div className="d-flex justify-content-between fw-bold">€{product.price}
                                    <span>Rate {product.rating.rate}</span>
                                </div>
                                <div className="card-footer">
                                    <Link to={`/products/${product.id}`}>Vai ai dettagli</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
