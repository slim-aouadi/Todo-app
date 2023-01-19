import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

export default axios.create({
  baseURL: BASE_URL,
});

// comment écrire l'intercepteur
// - récupérer l'access token depuis les cookie
// - vérifier si le token a expiré (utiliser la librairie jwt-decode)
// - si il n'est PAS expiré: on ne fait rien
// - si il est expiré, on va appeler l'endpoint /api/auth/refresh, qui va nous remettre les noueaux token dans les cookie (access ET refresh)
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
