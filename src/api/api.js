import {apikey, apiurl} from "../constants";

export async function getData() {
    const response = await fetch(apiurl);
    const data = await response.json();
    return data.data;
}