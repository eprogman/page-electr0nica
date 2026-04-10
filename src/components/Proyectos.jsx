
import datosProyecto from "../config/data_proyectos.json";

export default function Proyectos() {
    return (
        <>
            {Array.isArray(datosProyecto) ? (
                datosProyecto.map((app, index) => (
                    <section key={index} className="p-8 border-b-[24px] border-gray-200 space-y-6 mb-6 bg-white rounded-xl shadow-lg">
                        <h2 className="text-2xl lg:text-xl font-bold uppercase tracking-wider text-gray-800 leading-tight">
                            {app.tema}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {app.imagen1 && (
                                <img
                                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                    src={app.imagen1}
                                    alt={app.tema}
                                />
                            )}
                            {app.imagen2 && (
                                <img
                                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                    src={app.imagen2}
                                    alt={app.tema}
                                />
                            )}
                            {app.imagen3 && (
                                <img
                                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                    src={app.imagen3}
                                    alt={app.tema}
                                />
                            )}
                            {app.imagen4 && (
                                <img
                                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                    src={app.imagen4}
                                    alt={app.tema}
                                />
                            )}
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed font-medium">
                                <span className="font-bold text-gray-900 text-lg">Descripción: </span>
                                {app.descripcion}
                            </p>

                            <p className="text-gray-700 leading-relaxed font-medium">
                                <span className="font-bold text-gray-900 text-lg">Datos: </span>
                                {app.datos}
                            </p>

                            <p className="text-gray-700 leading-relaxed font-medium">
                                <span className="font-bold text-gray-900 text-lg">Implementación: </span>
                                {app.implementación}
                            </p>
                        </div>
                    </section>
                ))
            ) : (
                <p className="text-center text-gray-500 font-medium py-8">No hay datos disponibles</p>
            )}
        </>
    );
}


