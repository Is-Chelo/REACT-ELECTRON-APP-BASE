import logo from './logo.svg';
import firebase from "./utils/Firebase"
import { getAuth } from "firebase/auth";

function App() {
  console.log("Hola mundo")
  const auth = getAuth(firebase);
  
  auth.onAuthStateChanged(currentUser =>{
    console.log(currentUser?"Estan logueados":"No estan logueados")
  })

  return (
    <div>
      <h1>ELECTRON + REACT</h1>
    </div>
  );
}

export default App;
