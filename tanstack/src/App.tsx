import { Container } from "@mui/material"
import AppRoutes from "./routes/AppRoutes"
import NavBar from "./pages/navbar/NavBar"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}>
     <Container maxWidth="xl">
      <NavBar />
      <AppRoutes />
    </Container>
  </QueryClientProvider>
}

export default App
