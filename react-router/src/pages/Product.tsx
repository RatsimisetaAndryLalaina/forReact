import { Link, useActionData, useLoaderData, useNavigation } from "react-router-dom";

interface ProductType {
    id: number;
    url: string;
    width: number;
    height: number;
}

function Product() {
    const navigation = useNavigation();
    //if the action return directly data, we can use useActionData to get the data, but if the action return a redirect, we can't use useActionData to get the data, because the component will be unmounted and remounted again, so we can use useNavigation to check the state of the navigation, if the state is loading, we can show a loading spinner, otherwise we can show the data.
    //const actionData = useActionData();
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