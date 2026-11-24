export async function obtenerDestinos() {
    try {
        const response = await fetch("/data/destinos.json");

        if (!response.ok) {
            throw new Error("Error al obtener los destinos");
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}