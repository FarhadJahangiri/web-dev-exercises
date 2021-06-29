import * as React from "react";
import { useParams, Link } from "react-router-dom";

interface ProductInfo {
    id: number;
    title: string;
    price: number;
    image: string;
}

export function ProductsList(){

    const [products, setProducts] =
		React.useState<ProductInfo[] | null>(null);

    React.useEffect(() => {
        fetch(`http://127.0.0.1:8000/shop/products/`)
            .then((products) => products.json())
            .then(setProducts);
    }, []);

    if (products === null) {
        return <p>Loading…</p>;
    }
    return (
        <main className="ProductsList-main">
            <h1>Products</h1>
            <section>
              {products.map((product) => (
			  	    <article key={product.id} className="homeArticle">
                <Link to ={`/product/${product.id}/`} className="link">
					  	    <h2>{product.title}</h2>
                  <h2>{product.price} CHF</h2>
                  <img className="listImage" src={product.image}/>
                </Link>
					    </article>
				))}
            </section>
        </main>
    )
}
