import axios from "axios";

export const baseDomain = import.meta.env.VITE_API_URL;
export const baseURL = `${baseDomain}/v1`

export const $api = axios.create({
	baseURL,
	withCredentials: true,
	withXSRFToken: true,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
	},
})

$api.interceptors.response.use(({ data }) => data)