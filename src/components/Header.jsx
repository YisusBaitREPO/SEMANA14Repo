import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>PERÚ TURÍSTICO</h1>
                <p>Descubre lugares increíbles</p>
            </div>

            <nav>
                <NavLink to="/" end>Inicio</NavLink>
                <NavLink to="/destinos">Destinos</NavLink>
                <NavLink to="/nosotros">Nosotros</NavLink>
            </nav>
        </header>
    );
}