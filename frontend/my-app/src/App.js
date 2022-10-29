import { 
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation

} from "react-router-dom";
  import UserPage from './UserPage';
  import Login from './Login';
import { useState } from "react";

function TopBar({ userLogged, logout, userData }) {
  let location = useLocation()
  return  (
    <header className="p-3 text-bg-dark">
    <div className = "container">
    <div classnem = "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-container">
      <a href = "/" className = "d-flex align-items-center mb-2 mg-lg-0 text-white text-decoration-none">
      WebApp
      </a>

      <ul className = "nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li><Link to = "/"
        className = {"nav-link px-2 " + (location.pathname === "/" ? "text-white" : "text-secondary")}>
          Home
        </Link></li>
      <li><Link to = "/users"
        className = {"nav-link px-2 " + (location.pathname === "/users" ? "text-white" : "text-secondary")}>
          Users
        </Link></li>    
      </ul>


      {userLogged ?
      <>
      <div style = {{paddingRight: "1em"}}> Welcome, {userData ? userData.name : ""}</div>
      <div className = "dropdown text-end">
      <a href = "#" className="d-block link-dark text-decoration-none dropdown-toggle" 
      data-bs-toggle= "dropdown" aria-expanded="false">
        <img src={userData.avatar_url} alt = "mdo" width="32" height="32" className = "rounded-circle" />
      </a>
      <ul className="dropdown-menu text-small">
        <li><a className="dropdown-item" href="#">New proyect...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
      </div>
      <button type="button" className="btn btn-outline-light me-2" onClick={logout}>Logout</button>
      </>
      :<div className="text-end">
        <Link to={"/login?next=" + location.pathname}>
          <button type="button" className="btn btn-outline-light me-2">Login</button>
        </Link>
      <button type="button" className="btn btn-warning">Sign-up</button>
      </div>}
    </div>
    </div>
    </header>
  )
}

function LandingPage(){
  return (
    <>
    <h1>Bienvenido</h1>
    <Link to="/users">
      <button type="button" className="btn btn-primary">Go to Users</button>
    </Link>
    </>

  )
}

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData") || "{}"))
  function logout(){
    localStorage.removeItem("token")
    setToken(null)
    localStorage.removeItem("token")
    setToken(null)
    localStorage.removeItem("userData")
    setUserData(null)
  }
  return(
    <>
    <BrowserRouter>
      <TopBar userLogged={!!token} logout={logout} userData={userData}></TopBar>
      <div className="container py-3">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route paht="/users" element={<UserPage token={token} />}></Route>
          <Route path="/login" element={<Login setToken={setToken} setUserData={setUserData} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}
  
export default App;