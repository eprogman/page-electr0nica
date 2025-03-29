
export function Proy({ dato }) {

    const { proyecto, texto, imagen } = dato

    return (
        <>
            <div className="grid grid-cols-1 mr-4 w-auto border-2 min-h-72 lg:grid-cols-3 lg:w-4xl lg:mr-0">
                <aside className="lg:col-span-1 items-start p-4 lg:border-e-2 underline gap-y-10">
                    <div>
                        <a className=" pt-8 h-1/5 text-xl lg:text-base uppercase font-bold " href="http://">{proyecto}</a>
                        <a className="h-4/5 " href=""><img className="min-w-40 min-h-40 object-cover mt-5" src={imagen} alt="d" /></a>
                    </div>
                </aside>
                <section className="lg:col-start-2 lg:col-end-4 p-4">
                    <p><strong>{texto}</strong></p>
                </section>

            </div>
        </>
    )

}


