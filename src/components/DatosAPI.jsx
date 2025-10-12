// src/components/DatosAPI.jsx

import { useEffect, useState } from 'react';

const API_ENDPOINT = "https://api-page-electronica.onrender.com/electronica";

export default function DatosAPI() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchDatos() {
        try {
            setLoading(true);
            const res = await fetch(API_ENDPOINT);
            if (!res.ok) throw new Error(`Error ${res.status}`);
            const json = await res.json();

            // Validar si los campos existen
            const { nombre, descripcion, tipo, aplicaciones } = json;

            setData({ nombre, descripcion, tipo, aplicaciones });
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDatos(); // fetch solo una vez al montar
    }, []); // ← dependencia vacía = solo una vez

    return (
        <div className="flex flex-col gap-y-5 px-5 py-3 rounded-2xl mt-20 w-96 transform scale-90 fixed right-5 bottom-5 !scroll-smooth hover:duration-500 hover:-translate-x-0.5 hover:rotate-3 lg:ml-5 bg-gradient-to-bl from-[#1d4ed8] via-[#1e40af] to-[#111827]">
            {loading && <p>Cargando datos...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data && (
                <div>
                    <h1 className="font-bold text-center tracking-wider text-blue-50 text-2xl"> {data.nombre}</h1>
                    <p className="text-blue-100">{data.descripcion}</p>
                    <code className="text-blue-100"><strong className="text-red-400">Tipo:</strong>{data.tipo}</code>

                    <div>
                        {Array.isArray(data.aplicaciones) ? (
                            <ul className="text-blue-100">
                                <code><strong className="text-red-400">Aplicaciones:</strong></code>
                                {data.aplicaciones.map((app, index) => (
                                    <li key={index}>{app}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{data.aplicaciones}</p> // Por si viene como string
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
