
import datosProyecto from "../config/data_proyectos.json";

export default function Proyectos() {


    return (
        <>
            {Array.isArray(datosProyecto) ? datosProyecto.map((app, index) => // {} para comandos javascript y () para JSX 

            (
                <section key={index} className="p-5 border-b-[20px]">
                    <h2 className="text-xl lg:text-base uppercase font-bold ml-12 underline mb-3">{app.proyecto}</h2>
                    <div className="aspect-video md:w-6/12">
                        <iframe className="w-full h-full" width="560" height="315"
                            src={`https://www.youtube.com/embed/${app.codigo}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <p className="mt-3 max-w-5xl"><span className="font-bold">Explicación: </span>{app.descripcion}</p>
                    <p className="mt-6 max-w-5xl"><span className="font-bold">Observaciones: </span>{app.observaciones}</p>
                    <p className="mt-6 max-w-5xl"><span className="font-bold">Conclusión: </span>{app.conclusiones}</p>
                </section >
            )

            ) : (<p>{datosProyecto}</p>) // Por si viene como string
            }
        </>
    );

}


