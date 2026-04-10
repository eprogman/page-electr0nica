
    export async function GET() {

        const API_ENDPOINT = import.meta.env.API_ENDPOINT || 'http://localhost:3000/electronica';

        try {
            const token = import.meta.env.API_TOKEN; // Token desde variable de entorno;
            const res = await fetch(API_ENDPOINT, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!res.ok) {
                return new Response(JSON.stringify({ error: "Error en API" }), {
                    status: res.status
                });
            }

            // Aquí ya NO es JSON como texto, sino un objeto JS
            const json = await res.json();

            // Convierte el objeto JS otra vez a JSON en texto para la respuesta
            return new Response(JSON.stringify(json), {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            });

        } catch (err) {
            return new Response(JSON.stringify({ error: err.message }), {
                status: 500
            });
        } 
    }