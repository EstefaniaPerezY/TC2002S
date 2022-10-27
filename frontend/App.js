import { Link } from "react-router-dom";

function App() {
    return (
      <>
      <h1>Bienvenido</h1>
      <Link to = "/users">
      <button type="button" class="btn btn-primary">Go to Users</button>
      </Link>
      </>
      
    );
}
  
export default App;