import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <section className="inicio">
            <div className="inicio-texto">
                <h2>¡Bienvenido a Perú Turístico!</h2>

                <p>
                    Explora los lugares más hermosos del Perú.
                    Descubre paisajes increíbles, culturas,
                    tradiciones y destinos que te sorprenderán.
                </p>

                <Link to="/destinos" className="boton">
                    Explorar destinos
                </Link>
            </div>

            <img
                src="https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900"
                alt="Machu Picchu"
            />
        </section>
    );
}
