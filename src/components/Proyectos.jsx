import { useState } from "react"

/* en esta funcion recibo los datos JSON, de index.astro --> */

export function Proyectos({ dato }) {

    const { proyecto, descripcion, codigo, observaciones, conclusiones } = dato

    return (
        <>
            <section className="p-5 border-b-[20px]">
                <h2 className="text-xl lg:text-base uppercase font-bold ml-12 underline">{proyecto}</h2>
                <div className="pb-3">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${codigo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className="mt-3 max-w-5xl"><span className="font-bold">Explicación: </span>{descripcion}</p>
                <p className="mt-6 max-w-5xl"><span className="font-bold">Observaciones: </span>{observaciones}</p>
                <p className="mt-6 max-w-5xl"><span className="font-bold">Conclusión: </span>{conclusiones}</p>
            </section >

        </>
    )

}


