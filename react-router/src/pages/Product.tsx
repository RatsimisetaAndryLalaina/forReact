import { Link, useLoaderData, useNavigation } from "react-router-dom";

interface ProductType {
    id: number;
    url: string;
    width: number;
    height: number;
}

function Product() {
    const navigation = useNavigation();
    console.log('from product component', navigation.state);
    const products = useLoaderData() as ProductType[];
    return (
        <div>
            <h1>Product Page</h1>
            {navigation.state === "loading" ? <p>Loading...</p> : <ul>
                {products.map((product) => (
                    <li key={product.id}>
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <img src={product.url} width={250} height={150} alt="" />
                    </Link>
                    </li>
                ))}
            </ul>} 
            
        </div>
    );
};

export default Product;