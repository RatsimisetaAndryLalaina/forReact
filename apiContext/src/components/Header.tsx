import { useContext } from "react"
import UserContext from "../store/user/UserContext"

export default function Header() {
  const {currentUser} = useContext(UserContext);
  return (
    <header>
      {JSON.stringify(currentUser)}
      <h1>Welcome to My App {currentUser?.name}</h1>
    </header>
  )
}