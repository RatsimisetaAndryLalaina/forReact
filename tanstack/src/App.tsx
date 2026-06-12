import { Container } from "@mui/material"
import AppRoutes from "./routes/AppRoutes"
import NavBar from "./pages/navbar/NavBar"

function App() {
  return (
    <Container maxWidth="xl">
      <NavBar />
      <AppRoutes />
    </Container>
  )
}

export default App
