import { useRouteError } from "react-router";

function ProductError() {
    const error = useRouteError() as { message: string; status: number };
    return (
        <div>
            <h1>Product Error</h1>
            <p>{error.message}</p>
        </div>
    );
};

export default ProductError;