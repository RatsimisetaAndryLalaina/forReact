import { useMutation, useQueryClient } from '@tanstack/react-query';

function RefreshQuotes() {
    const queryClient = useQueryClient();
    const {mutate, isPending, data } = useMutation({
        mutationFn: () => new Promise<void>((resolve) => {
            setTimeout(() => {
                queryClient.invalidateQueries({ queryKey: ['quotes'] });
                resolve();
            }, 2000);
        }),
        onMutate: async (data) => {
            // Annule les refetchs en cours (pour qu'ils n'écrasent pas notre optimistic update)
            await queryClient.cancelQueries({ queryKey: ['quotes'] });
        
            // Sauvegarde l'état précédent pour pouvoir faire un rollback en cas d'erreur
            const previousQuotes = queryClient.getQueryData(['quotes']);
        
            queryClient.setQueryData(['quotes'], (oldData: any) => {
                // Optimistic update
                return [...oldData, { id: oldData.length + 1, text: 'New quote' }];
            });
        
            console.log('Refreshing quotes...', data);
        
            // Le contexte retourné, accessible dans onError / onSuccess / onSettled
            return { previousQuotes };
        },
        onSuccess: (resonseData, data, context) => {
            //only when success
            console.log('Quotes refreshed successfully', resonseData, data, context);
        },
        onError: (error, data, context) => {
            console.error('Error refreshing quotes:', error, data, context);
        },
        onSettled: (responseData, error, data, context) => {
            //the finally version after onSuccess or onError
            console.log('Refresh quotes mutation settled', responseData, error, data, context);
        }
    });
    
    const handleRefresh = () => {
        mutate();
    };

  return (
    <div>
      <h1>
        <button onClick={handleRefresh}>
            {isPending ? '...': 'Refresh quotes' + data}
        </button></h1>
    </div>
  )
};

export default RefreshQuotes;