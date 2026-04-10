
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

            const json = await res.json();

            return new Response(JSON.stringify(json), {
                status: 200
            });

        } catch (err) {
            return new Response(JSON.stringify({ error: err.message }), {
                status: 500
            });
        } 
    }