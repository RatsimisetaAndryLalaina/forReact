import { useMutation, useQueryClient } from '@tanstack/react-query';

function RefreshQuotes() {
    const queryClient = useQueryClient();
    const {mutate, isPending, data } = useMutation({
        mutationFn: () => new Promise<void>((resolve) => {
            setTimeout(() => {
                queryClient.invalidateQueries({ queryKey: ['quotes'] });
                resolve();
            }, 2000);
        })
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