
import "./index.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
function Layout() {
    return (
      <div>
        <h1>Bienvenue sur mon application</h1>
  
        <p>
            TD ECR721_UX
        </p>
  
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Connection">Connexion</Link>
            </li>
            <li>
              {/* Use a normal <a> when linking to the "Inbox" app so the browser
                  does a full document reload, which is what we want when exiting
                  this app and entering another so we execute its entry point in
                  inbox/main.jsx. */}
              <a href="/ChainInfo">ChainInfo</a>
            </li>
            <li>
              <Link to="/FakeBayc">FakeBayc</Link>
            </li>
            <li>
              <Link to="/FakeBaycTokenId">FakeBaycTokenId</Link>
            </li>
            <li>
              <Link to="/FakeNefturians">FakeNefturians</Link>
            </li>
            <li>
              <Link to="/FakeNefturiansWallet">FakeNefturiansWallet</Link>
            </li>
            
            
           
          </ul>
        </nav>
  
        <hr />
  
        <Outlet />
      </div>
    );
  }

  export default Layout;