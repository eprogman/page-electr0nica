

const API_ENDPOINT = "https://api-page-electronica.onrender.com/electronica"

export async function get_DatosAPI() {

    const datosAPI = await fetch(API_ENDPOINT)
    return await datosAPI.json()

}




