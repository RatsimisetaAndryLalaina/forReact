import { useQuery } from '@tanstack/react-query';

const BASE_URL = 'https://dummyjson.com/quotes';

function useFetchAllQuotes() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['quotes'],
        queryFn: async ({signal}) => {
            const response = await fetch(BASE_URL, {signal: signal});
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        },
    });

    return {
        data,
        isPending,
        isError,
        error
    };
};


export default useFetchAllQuotes;