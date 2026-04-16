import { useParams } from "react-router-dom";

function ProductDetails() {
    const {id} = useParams();

    return (
        <div>
            <h1>Product Details</h1>
            <p>you are now viewing the product id: { id }</p>
        </div>
    );
};

export default ProductDetails;