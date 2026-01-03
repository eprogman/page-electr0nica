
import datosProyecto from "../config/data_proyectos.json";

export default function Proyectos() {


    return (
        <>
            {Array.isArray(datosProyecto) ? datosProyecto.map((app, index) => // {} para comandos javascript y () para JSX 

            (
                <section key={index} className="p-5 border-b-[20px]">
                    <h2 className="text-xl lg:text-base uppercase font-bold mb-3">{app.tema}</h2>
                    {app.imagen1 && <img className="w-full max-w-xs h-auto inline" src={app.imagen1} alt="img" />}
                    {app.imagen2 && <img className="w-full max-w-xs h-auto inline" src={app.imagen2} alt="img" />}
                    <p className="mt-3"><span className="font-bold">Descripción: </span>{app.descripcion}</p>
                    <p className="mt-6"><span className="font-bold">Datos: </span>{app.datos}</p>
                    <p className="mt-6"><span className="font-bold">Implementación: </span>{app.implementación}</p>
                </section >
            )

            ) : (<p>{datosProyecto}</p>) // Por si viene como string
            }
        </>
    );

}


