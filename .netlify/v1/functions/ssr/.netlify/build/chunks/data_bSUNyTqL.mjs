const prerender = false;
async function GET() {
  const API_ENDPOINT = "https://api-page-electronica.onrender.com/electronica";
  try {
    const token = "TOHFHBARLKEN58";
    const res = await fetch(API_ENDPOINT, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
      cache: "no-store"
    });
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Error en API" }), {
        status: res.status
      });
    }
    const json = await res.json();
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
