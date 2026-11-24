import { Routes, Route, Link } from "react-router-dom";

import LayoutPrincipal from "./components/LayoutPrincipal";

import Inicio from "./pages/Inicio";
import Destinos from "./pages/Destinos";
import DetalleDestino from "./pages/DetalleDestino";
import Nosotros from "./pages/Nosotros";

function Pagina404() {
    return (
        <section className="error404">
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>Lo sentimos, la página que buscas no existe.</p>

            <Link to="/" className="boton">
                Volver al inicio
            </Link>
        </section>
    );
}

export default function App() {
    return (
        <Routes>

            <Route path="/" element={<LayoutPrincipal />}>

                <Route index element={<Inicio />} />

                <Route path="destinos" element={<Destinos />} />

                <Route
                    path="destinos/:id"
                    element={<DetalleDestino />}
                />

                <Route path="nosotros" element={<Nosotros />} />

                <Route path="*" element={<Pagina404 />} />

            </Route>

        </Routes>
    );
}

