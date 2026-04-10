
import { useEffect, useState } from 'react';
'use client';

export default function DatosAPI() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function cargarDatos() {
        setLoading(true);
        try {
            const res = await fetch(`/api/data?t=${Date.now()}`);
            if (!res.ok) throw new Error("Error al cargar datos");

            const dataapi = await res.json();

            // Validar si los campos existen
            const { nombre, descripcion, tipo, aplicaciones } = dataapi;
            setData({ nombre, descripcion, tipo, aplicaciones });
         
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        cargarDatos(); // fetch solo una vez al montar
    }, []); // ← dependencia vacía = solo una vez

    return (
        <div className="fixed right-5 bottom-5 lg:ml-5 transform scale-90 hover:duration-500 hover:-translate-x-0.5 hover:rotate-3 !scroll-smooth">
            <div className="w-96 rounded-2xl bg-gradient-to-bl from-[#1d4ed8] via-[#1e40af] to-[#111827] p-6 flex flex-col space-y-4">
                {loading && (
                    <p className="text-center text-blue-200 font-medium">Cargando datos...</p>
                )}

                {error && (
                    <p className="text-center text-red-300 font-semibold bg-red-900 bg-opacity-30 rounded-lg p-3">
                        Error: {error}
                    </p>
                )}

                {data && (
                    <div className="space-y-4">
                        <h1 className="font-bold text-center tracking-wider text-blue-50 text-2xl leading-tight">
                            {data.nombre}
                        </h1>

                        <p className="text-blue-100 leading-relaxed text-center">
                            {data.descripcion}
                        </p>

                        <div className="bg-blue-900 bg-opacity-40 rounded-lg p-3 space-y-2">
                            <p className="text-blue-100">
                                <strong className="text-red-300 font-semibold">Tipo: </strong>
                                <span className="text-blue-50">{data.tipo}</span>
                            </p>
                        </div>

                        <div className="bg-blue-900 bg-opacity-40 rounded-lg p-3">
                            {Array.isArray(data.aplicaciones) ? (
                                <div className="space-y-2">
                                    <p className="text-blue-100">
                                        <strong className="text-red-300 font-semibold">Aplicaciones:</strong>
                                    </p>
                                    <ul className="text-blue-100 space-y-1 ml-4">
                                        {data.aplicaciones.map((app, index) => (
                                            <li key={index} className="list-disc">
                                                {app}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p className="text-blue-100">
                                    <strong className="text-red-300 font-semibold">Aplicaciones:</strong>
                                    <span> {data.aplicaciones}</span>
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
