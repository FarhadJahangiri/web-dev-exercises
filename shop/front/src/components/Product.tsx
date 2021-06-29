import * as React from "react";
import { useParams, Link } from "react-router-dom";

interface ProductInfo {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    image: string;
}

export function Product(){

    const [product, setProduct] =
		React.useState<ProductInfo | null>(null);

    const params = useParams<{ id: string }>();

    React.useEffect(() => {
        fetch(`http://127.0.0.1:8000/shop/products/${params.id}/`)
            .then((product) => product.json())
            .then(setProduct);
    }, []);

    if (product === null) {
        return <p>Loading…</p>;
    }
    return (
        <main>
            <section className="productSection">
                <article key={product.id}>
                    <h2>{product.title}</h2>
                    <h3>{product.category}</h3>
                    <p>{product.description}</p>
                    <h2>{product.price} CHF</h2>
                    <img className="productImage" src={product.image}/>
                </article>
            </section>
        </main>
    )
}
