import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import useFetchAllQuotes from '../../hooks/useFetchAllQuotes';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#0a3a70',
  }),
}));

export default function AllQuotes() {
  const {data, isPending, isError, error} = useFetchAllQuotes();
  
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={5}>
        {isPending && <Item>Loading...</Item>}
        {isError && <Item>Error: {error?.message}</Item>}
        {data?.quotes && data.quotes.map((quote: {id: number, author: string, quote: string}) => (
          <Item key={quote.id}>
            <strong>{quote.author}:</strong> {quote.quote}
          </Item>
        ))}
      </Stack>
    </Box>
  );
}