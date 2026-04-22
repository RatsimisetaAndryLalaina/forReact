type Product = {
    id: string;
    url: string;
    width: number;
    height: number;
};

export async function loadProduct(): Promise<Product[] | Response> {
    const data = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    if (!data.ok) {
        return new Response("Failed to fetch products", { status: 500 });
    }
    
    return await data.json();
};