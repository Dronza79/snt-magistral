import axios from "axios";


export async function fetchContacts() {
	const result = await axios.get("http://127.0.0.1:8000/api/conf/");
	return(result.data);
 }

export async function fetchNews() {
	const result = await axios.get("http://127.0.0.1:8000/api/news/");
	
	
	
	return(result.data);
 }

