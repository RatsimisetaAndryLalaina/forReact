import { useContext, useRef } from "react";
import UserContext from "../store/user/UserContext";

export default function Content() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setCurrentUser } = useContext(UserContext);
  const handleSubmit = () => {
    //update the context here
    if (inputRef.current) {
      console.log('handle submit called');
      setCurrentUser({id: '1', name: inputRef.current.value, email: 'lala@gmail.com'});
    }
  }
  
  return (
    <main>
      <h1>Here is my main content</h1>
      <input ref={inputRef} type="text" />
      <button type="button" onClick={handleSubmit}>Set name</button>
    </main>
  )
}