import { useCallback } from "react";

const API_KEY = "?api_key=9042622973be3bf9c566b65a236a89bc";
const BASE_URL = "https://api.themoviedb.org/3/";

const useHttp = () => {
    const sendRequest = useCallback(async (route, applyData, query = '') => {
        const response = await fetch(BASE_URL + `${route}` + API_KEY + query);
        if (!response.ok) {
            throw new Error("Request Failed!");
        }
        const data = await response.json();
        applyData(data);
    }, []);

    return sendRequest;
};

export default useHttp;