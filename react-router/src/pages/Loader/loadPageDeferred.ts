async function loadPageDeferred() {
    const data = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    
    if (!data.ok) {
        throw new Error('Failed to fetch data');
    }
    
    return data.json();
}

function load() {
    return {
        //add await to the function to make it return a promise, and the promise will be resolved when the data is fetched, and the data will be passed to the component as props.
        events: loadPageDeferred()
    }
};


export default load;