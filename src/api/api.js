import {apikey, apiurl_fulldata} from "../constants";

export async function getData(ticker) {
    const response = await fetch(
        `${apiurl_fulldata}fsyms=${ticker}&tsyms=USD&${apikey}`, {
        method: "GET",
        headers: {
            "authorization": `Apikey ${apikey}`,
            "Content-Type": "application/json"
        },
    });
    const data = await response.json();
    return data.RAW[ticker]['USD'];
}
