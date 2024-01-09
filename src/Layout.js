import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css'

export default function Layout() {
    return (
        <div>
        <header>
            <h1>Tanuljunk angolul!</h1>
        </header>
        <nav>
             <ul className="nav">
                 <li className="nav-item">
                     <Link to="/gepel" className="nav-link">Egészítsd ki!</Link>
                 </li>
                 <li className="nav-item">
                     <Link to="/rendez" className="nav-link">Rakd sorba!</Link>
                 </li>
                 <li className="nav-item">
                     <Link to="/valaszto" className="nav-link">Válaszd ki!</Link>
                 </li>
             </ul>
        </nav>
        <main>
        
        <article>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
            <Outlet />
        </article>
        </main>
        <footer>Szendefi Krisztofer</footer>
     </div>
    );
  }
  
  