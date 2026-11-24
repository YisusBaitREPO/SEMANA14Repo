import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { obtenerDestinos } from "../services/destinoService";

export default function DetalleDestino() {

    const { id } = useParams();

    const [destino, setDestino] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        async function cargarDetalle() {
            try {
                const data = await obtenerDestinos();

                const encontrado = data.find(
                    (item) => String(item.id) === id
                );

                setDestino(encontrado || null);

            } catch (error) {
                console.error(error);
            } finally {
                setCargando(false);
            }
        }

        cargarDetalle();

    }, [id]);

    if (cargando) {
        return <p>Cargando información...</p>;
    }

    if (!destino) {
        return (
            <section className="detalle">
                <h2>Destino no encontrado</h2>
                <Link to="/destinos" className="boton">
                    Volver a destinos
                </Link>
            </section>
        );
    }

    return (
        <section className="detalle">

            <h2>{destino.nombre}</h2>

            <img
                src={destino.imagen}
                alt={destino.nombre}
            />

                
            

            <div className="detalle-info">

                <p>
                    <strong>Ciudad:</strong> {destino.ciudad}
                </p>

                <p>
                    <strong>Categoría:</strong> {destino.categoria}
                </p>

                <p>
                    <strong>Descripción:</strong> {destino.descripcion}
                </p>

            </div>

            <Link to="/destinos" className="boton">
                Volver a destinos
            </Link>

        </section>
    );
}
