import { Link } from "react-router-dom";

function Product() {
    const products = [
        { id: 1, name: "Laptop", price: 999.99 },
        { id: 2, name: "Smartphone", price: 699.99 },
        { id: 3, name: "Tablet", price: 449.99 },
        { id: 4, name: "Headphones", price: 199.99 },
    ];

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