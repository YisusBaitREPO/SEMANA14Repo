import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerDestinos } from "../services/destinoService";

export default function Destinos() {

    const [destinos, setDestinos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function cargarDestinos() {
            try {
                const data = await obtenerDestinos();
                setDestinos(data);
            } catch (error) {
                setError("No se pudieron cargar los destinos.");
            } finally {
                setCargando(false);
            }
        }

        cargarDestinos();

    }, []);

    if (cargando) {
        return <p>Cargando destinos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    

    return (
        <section className="destinos">

            <h2>Nuestros destinos turísticos</h2>

            <p className="descripcion">
                Descubre los lugares más maravillosos del Perú.
            </p>

            <div className="contenedor-tarjetas">

                {destinos.map((destino) => (

                    <div className="tarjeta" key={destino.id}>

                        <img
                            src={destino.imagen}
                            alt={destino.nombre}
                        />

                        <div className="tarjeta-info">

                            <h3>{destino.nombre}</h3>

                            <p>
                                <strong>Ciudad:</strong> {destino.ciudad}
                            </p>

                            <p>
                                <strong>Categoría:</strong> {destino.categoria}
                            </p>

                            <Link
                                to={`/destinos/${destino.id}`}
                                className="boton"
                            >
                                Ver destino
                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}
