import { c as createComponent } from './astro-component_C96lbvJs.mjs';
import 'piccolore';
import { m as maybeRenderHead, f as renderSlot, r as renderTemplate, g as renderComponent, h as renderHead } from './ssr-function_COjZbt-v.mjs';
import 'clsx';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Iconboy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="" class="flex
    flex-col
    items-center
    border-2
    rounded-2xl
    w-auto
    py-2
    px-4
    bg-gradient-to-bl from-[#991b1b] via-[#dc2626] to-[#f87171]"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/jmanz/Documents/PROGRAMACION/PAGINAS WEB/page-electronica/frontend/src/components/Iconboy.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] py-8 sm:py-6"> <div class="flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-8"> ${renderComponent($$result, "Iconboy", $$Iconboy, {}, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world flex-shrink-0"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path> <path d="M3.6 9h16.8"></path> <path d="M3.6 15h16.8"></path> <path d="M11.5 3a17 17 0 0 0 0 18"></path> <path d="M12.5 3a17 17 0 0 1 0 18"></path> </svg> <span class="font-bold text-xl sm:text-2xl text-center text-stone-200 tracking-wide leading-tight max-w-xs">
Proyectos realizados en Electrónica y Networking
</span> ` })} <nav class="flex gap-6 sm:gap-8 items-center"> <a href="" class="p-2 hover:opacity-80 hover:scale-110 transition-all duration-300 rounded-lg" title="Contacto por email"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail text-stone-200"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path> <path d="M3 7l9 6l9 -6"></path> </svg> </a> <a href="" class="p-2 hover:opacity-80 hover:scale-110 transition-all duration-300 rounded-lg" title="Contacto por WhatsApp"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp text-stone-200"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path> <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path> </svg> </a> </nav> </div> </header>`;
}, "C:/Users/jmanz/Documents/PROGRAMACION/PAGINAS WEB/page-electronica/frontend/src/components/Header.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Page</title>${renderHead()}</head> <body class="bg-gray-900 p-0 m-0 box-border text-stone-200"> ${renderComponent($$result, "Header", $$Header, {})} <main class="w-full pl-5 lg:pl-0 lg:container m-auto"> ${renderSlot($$result, $$slots["default"])} <!-- SLOT - Lo que se va a renderizar en cada pagina --> </main> </body></html>`;
}, "C:/Users/jmanz/Documents/PROGRAMACION/PAGINAS WEB/page-electronica/frontend/src/layouts/Layout.astro", void 0);

const datosProyecto = [
	{
		tema: "Parpadeo de LED mediante el uso del TIMER 1 del PIC18F57Q43",
		descripcion: "Se configuró un programa para el PIC18F57Q43, para el encendido y apagado de un LED, y posteriormente se observó la señal con un osciloscopio, y verificó el tiempo en alto y tiempo en bajo de la señal, y cada cual corresponde a un salto de interrupción generada en el PIC.",
		imagen1: "/images/led.jpeg",
		imagen2: "/images/onda.jpeg",
		datos: "Cabe mencionar que en datasheet indica que el módulo Timer1 es un contador de 16 bits que incrementa y se accede a través del registro TMRx y Cuando se utiliza con una fuente de reloj interna, el módulo funciona como un temporizador que incrementa en cada ciclo de instrucción. El registro TMRx incrementa hasta FFFFh y se reinicia a 0000h. Cuando TMRx se reinicia, se establece el bit de la bandera de interrupción de Timer1 del registro PIRx.",
		"implementación": "Se utiliza dos funciones, la función void __interrupt(irq(IRQ_TMR1)) TMR1_ISR(void) y dentro un if(PIR3bits.TMR1IF) que es la bandera de instrucción para la ejecución del cambio de estado de LED, seguidamente también limpiar la bandera. La otra función es el void main(void), función principal, donde se configurará el registro TRISF y LATF para establecer RF3 como salida, así mismo en el uso del Timer1 se adapta para funcionar con Fosc/4 y Prescaler 1:4, configurando T1CLK=0x01 y T1CON=0x23. Con respecto a las interrupciones, se habilita la interrupción con Alta y Baja prioridad con IPEN, por consiguiente alta y baja prioridad con GIEH y GIEL, adicionalmente se limpia la bandera, se habilita interrupción Timer1 y la prioridad alta del Timer1, usando TMR1IF,TMR1IE,TMR1IP respectivamente. Usando un Oscilador interno de 4Mhz salta a interrupción cada 260ms para cambiar el estado de LED."
	},
	{
		tema: "Uso de display OLED I2C",
		descripcion: "Para este proyecto se realizó un programa para PIC18F4550 con el uso del modo I2C del PIC, para mostrar el texto 'Hola Mundo' en el displey OLED, como también se programó el PIC para mostrar un número escrito en le memoria no volatil EEPROM del PIC, para después ser leído y seguidamente guardado en un 'unsigned char valor', para juntamente con el 'Hola mundo' mostrarlo también por el display OLED",
		imagen1: "/images/oled.jpeg",
		datos: "En datasheet del PIC se indica se utilizan dos pines para la transferencia de datos: Serial clock (SCL) - RB1 y Serial data (SDA) - RB0.  También indica que el usuario debe configurar estos pines como entradas estableciendo los bits TRIS asociados. La EEPROM de datos es una matriz de memoria no volátil, separada de la RAM de datos y de la memoria de programa, que se utiliza para el almacenamiento a largo plazo de datos de programa. No está directamente mapeada ni en el archivo de registros ni en el espacio de memoria de programa, pero se accede de manera indirecta a través de los Registros de Función Especial (SFRs). La EEPROM se puede leer y escribir durante la operación normal en todo el rango de VDD. Se utilizan cuatro SFRs para leer y escribir en la EEPROM de datos, así como en la memoria de programa. Estos son: • EECON1 • EECON2 • EEDATA • EEADR",
		"implementación": "A través de un pequeño protoboard, se armó un circuito con el PIC y el OLED, y un crystal de 4Mhz , con respecto al programa se utilizó 4 funciones, void escribirEEPROM(unsigned char direccion, unsigned char dato), unsigned char leerEEPROM(unsigned char direccion), void MostrarDatosOLED(void) y void main(void), sobre la primera se manda la dirección del EEPROM y el dato '250', con respecto a la segunda es para leer el dato de la EEPROM, la tercera función es para escribir en el display OLED, el número previamente guardado y la ultima es para inicializar el I2C y OLED'."
	},
	{
		tema: "Interruptor automático para el encendido y apagado",
		descripcion: "Para este proyecto se realizó la programación e implementación para lograr el encendido y apagado automático de un equipo eletrónico tipo router o switch, utilizando un PIC16F877A y un módulo Reloj RTC DS1307, un display LCD 16X2 y un teclado matricial 4x4.",
		imagen1: "/images/alarma1.jpeg",
		imagen2: "/images/alarma2.jpeg",
		imagen3: "/images/alarma3.jpeg",
		imagen4: "/images/alarma4.jpeg",
		datos: "Se observa en datasheet del PIC, se utilizan dos pines para la transferencia de datos: Serial clock (SCL)-RC3 y Serial data (SDA)-RC4. SSPCON, SSPCON2 y SSPSTAT son los registros de control y estado en la operación en modo I2C. En el modo Transmisor Maestro, los datos en serie se envían a través de SDA mientras SCL proporciona el reloj en serie. Una secuencia de transmisión típica sería la siguiente: 1. El usuario genera una condición de inicio configurando el bit de Habilitar Inicio, SEN (SSPCON2<0>). 2. Se establece SSPIF. El módulo MSSP esperará el tiempo de inicio requerido antes de que tenga lugar cualquier otra operación. 3. El usuario carga el SSPBUF con la dirección del esclavo para transmitir. 4. La dirección se desplaza por el pin SDA hasta que se transmiten los 8 bits. 5. El módulo MSSP recibe el bit ACK del dispositivo esclavo y escribe su valor en el registro SSPCON2 (SSPCON2<6>). 6. El módulo MSSP genera una interrupción al final del noveno ciclo de reloj configurando el bit SSPIF. 7. El usuario carga el SSPBUF con ocho bits de datos. 8. Los datos se desplazan por el pin SDA hasta que se transmiten los 8 bits. 9. El módulo MSSP recibe el bit ACK del dispositivo esclavo y escribe su valor en el registro SSPCON2 (SSPCON2<6>). 10. El módulo MSSP genera una interrupción al final del noveno ciclo de reloj configurando el bit SSPIF. 11. El usuario genera una condición de parada configurando el bit de Habilitar Parada, PEN (SSPCON2<2>). 12. Se genera una interrupción una vez que la condición de parada se completa.",
		"implementación": "Para este proyecto con componentes electrónicos de fácil adquisición en el mercado, se realizó el diseño en circuito impreso para luego ser implementado y probado para el encendido y apagado de forma automática de un equipo electrónico como un router o switch, el cual se requiere que se apague a una hora nocturna deseada y configurable, para posteriormente se encienda a la hora también elegida y configurable en horas de la mañana. En la programación del PIC se programó 4 funciones, la primera para mostrar los datos a través del LCD, la segunda para obtener y almacenar en un buffer, los dígitos ingresados a través del teclado matricial como también ir mostrándolos por el LCD, la tercera es la función que se llama desde el void main(void) y convierte los dígitos del teclado a formato decimal y se guarda en valores unsigned char, como también escribir valores al módulo RTC, la última es la función void main(void) que habilita los puertos de salida, como también inicializa el modo I2C del PIC, inicializa el LCD 16X2 y el teclado matricial, seguidamente lee los valores del módulo RTC previamente escritos, para ser mostrados en LCD juntos con los demás valores unsigned char, luego tiene una comparación para encendido y apagado de un bit en PORTA'."
	}
];

function Proyectos() {
  return /* @__PURE__ */ jsx(Fragment, { children: Array.isArray(datosProyecto) ? datosProyecto.map((app, index) => /* @__PURE__ */ jsxs("section", { className: "p-8 border-b-[24px] border-gray-200 space-y-6 mb-6 bg-white rounded-xl shadow-lg", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl lg:text-xl font-bold uppercase tracking-wider text-gray-800 leading-tight", children: app.tema }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      app.imagen1 && /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300",
          src: app.imagen1,
          alt: app.tema
        }
      ),
      app.imagen2 && /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300",
          src: app.imagen2,
          alt: app.tema
        }
      ),
      app.imagen3 && /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300",
          src: app.imagen3,
          alt: app.tema
        }
      ),
      app.imagen4 && /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300",
          src: app.imagen4,
          alt: app.tema
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-gray-700 leading-relaxed font-medium", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-gray-900 text-lg", children: "Descripción: " }),
        app.descripcion
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-700 leading-relaxed font-medium", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-gray-900 text-lg", children: "Datos: " }),
        app.datos
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-700 leading-relaxed font-medium", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-gray-900 text-lg", children: "Implementación: " }),
        app.implementación
      ] })
    ] })
  ] }, index)) : /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500 font-medium py-8", children: "No hay datos disponibles" }) });
}

const preguntas = [
	{
		pregunta: "¿Qué es ingeniería electrónica?",
		respuesta: "Se enfoca en el diseño, desarrollo, estudio de dispositivos y sistemas que funcionan con señales electrónicas de baja potencia y electricidad, así mismo abarca el uso de varios componentes electrónicos.",
		areas: [
			{
				subtitulo: "Algunas de las principales áreas de la ingeniería electrónica:"
			},
			{
				"analógica": "Electrónica analógica: Estudia señales continuas y circuitos como amplificadores, filtros, fuentes de alimentación, etc."
			},
			{
				digital: "Electrónica digital: Se enfoca en sistemas que trabajan con señales discretas (0 y 1), como computadoras, sistemas embebidos y lógica programable."
			},
			{
				"automatización": "Automatización y control: Diseño de sistemas que regulan procesos automáticamente (por ejemplo, en fábricas o en robótica)."
			},
			{
				"instrumentación": "Instrumentación electrónica: Desarrollo de equipos para medir variables físicas (temperatura, presión, etc.)."
			},
			{
				telecomunicaciones: "Telecomunicaciones: Diseño de sistemas para transmisión de datos, voz y video (radio, TV, redes móviles, etc.)."
			},
			{
				embebidos: "Sistemas embebidos: Integración de software y hardware en dispositivos inteligentes (desde un reloj digital hasta un automóvil)."
			}
		]
	}
];

const $$PreguntasFrecuentes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- sector preguntas frecuentes -->${preguntas.map((dato) => {
    return renderTemplate`${maybeRenderHead()}<div class="text-center py-8 px-4 max-w-4xl mx-auto"><h1 class="text-2xl lg:text-3xl font-bold text-emerald-700 tracking-wide mb-4">${dato.pregunta}</h1><p class="text-emerald-600 leading-relaxed mb-6 text-lg">${dato.respuesta}</p><div class="bg-emerald-50 rounded-lg p-6 space-y-3 text-start">${Array.isArray(dato.areas) ? dato.areas.map((area, index) => renderTemplate`<div class="space-y-2"><h3 class="font-bold text-emerald-800 tracking-wide">${area.subtitulo}</h3><ul class="text-emerald-700 space-y-1 ml-4">${area.analógica && renderTemplate`<li>• ${area.analógica}</li>`}${area.digital && renderTemplate`<li>• ${area.digital}</li>`}${area.automatización && renderTemplate`<li>• ${area.automatización}</li>`}${area.instrumentación && renderTemplate`<li>• ${area.instrumentación}</li>`}${area.telecomunicaciones && renderTemplate`<li>• ${area.telecomunicaciones}</li>`}${area.embebidos && renderTemplate`<li>• ${area.embebidos}</li>`}</ul></div>`) : renderTemplate`<p class="text-emerald-600">${dato.areas}</p>`}</div></div>`;
  })}`;
}, "C:/Users/jmanz/Documents/PROGRAMACION/PAGINAS WEB/page-electronica/frontend/src/components/Preguntas_frecuentes.astro", void 0);

function DatosAPI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function cargarDatos() {
    setLoading(true);
    try {
      const res = await fetch("/api/data");
      if (!res.ok) throw new Error("Error al cargar datos");
      const dataapi = await res.json();
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
    cargarDatos();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "fixed right-5 bottom-5 lg:ml-5 transform scale-90 hover:duration-500 hover:-translate-x-0.5 hover:rotate-3 !scroll-smooth", children: /* @__PURE__ */ jsxs("div", { className: "w-96 rounded-2xl bg-gradient-to-bl from-[#1d4ed8] via-[#1e40af] to-[#111827] p-6 flex flex-col space-y-4", children: [
    loading && /* @__PURE__ */ jsx("p", { className: "text-center text-blue-200 font-medium", children: "Cargando datos..." }),
    error && /* @__PURE__ */ jsxs("p", { className: "text-center text-red-300 font-semibold bg-red-900 bg-opacity-30 rounded-lg p-3", children: [
      "Error: ",
      error
    ] }),
    data && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-bold text-center tracking-wider text-blue-50 text-2xl leading-tight", children: data.nombre }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-100 leading-relaxed text-center", children: data.descripcion }),
      /* @__PURE__ */ jsx("div", { className: "bg-blue-900 bg-opacity-40 rounded-lg p-3 space-y-2", children: /* @__PURE__ */ jsxs("p", { className: "text-blue-100", children: [
        /* @__PURE__ */ jsx("strong", { className: "text-red-300 font-semibold", children: "Tipo: " }),
        /* @__PURE__ */ jsx("span", { className: "text-blue-50", children: data.tipo })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-blue-900 bg-opacity-40 rounded-lg p-3", children: Array.isArray(data.aplicaciones) ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-blue-100", children: /* @__PURE__ */ jsx("strong", { className: "text-red-300 font-semibold", children: "Aplicaciones:" }) }),
        /* @__PURE__ */ jsx("ul", { className: "text-blue-100 space-y-1 ml-4", children: data.aplicaciones.map((app, index) => /* @__PURE__ */ jsx("li", { className: "list-disc", children: app }, index)) })
      ] }) : /* @__PURE__ */ jsxs("p", { className: "text-blue-100", children: [
        /* @__PURE__ */ jsx("strong", { className: "text-red-300 font-semibold", children: "Aplicaciones:" }),
        /* @__PURE__ */ jsxs("span", { children: [
          " ",
          data.aplicaciones
        ] })
      ] }) })
    ] })
  ] }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "DatosAPI", DatosAPI, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/jmanz/Documents/PROGRAMACION/PAGINAS WEB/page-electronica/frontend/src/components/DatosAPI.jsx", "client:component-export": "default" })}  ${renderComponent($$result2, "Proyectos", Proyectos, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/jmanz/Documents/PROGRAMACION/PAGINAS WEB/page-electronica/frontend/src/components/Proyectos.jsx", "client:component-export": "default" })}  ${renderComponent($$result2, "Preguntas_frecuentes", $$PreguntasFrecuentes, {})} ` })}`;
}, "C:/Users/jmanz/Documents/PROGRAMACION/PAGINAS WEB/page-electronica/frontend/src/pages/index.astro", void 0);

const $$file = "C:/Users/jmanz/Documents/PROGRAMACION/PAGINAS WEB/page-electronica/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
