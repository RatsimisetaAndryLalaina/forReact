import { Link, useLoaderData } from "react-router-dom";

interface ProductType {
    id: number;
    name: string;
    price: number;
}

function Product() {
    const products = useLoaderData() as ProductType[];
    return (
        <div>
            <h1>Product Page</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                    <Link key={product.id} to={`/product/${product.id}`}>
                        {product.name} - ${product.price}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Product;


export function ProductLoader() {
    return [
        { id: 1, name: "Laptop", price: 100.99 },
        { id: 2, name: "Smartphone", price: 699.99 },
        { id: 3, name: "Tablet", price: 449.99 },
        { id: 4, name: "Headphones", price: 200.99 },
    ];
};