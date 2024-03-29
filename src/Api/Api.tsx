import axios from "axios";


export async function fetchContacts() {
	const result = await axios.get("http://127.0.0.1:8000/api/conf/");
	return(result.data);
 }

export async function fetchNews() {
	const result = await axios.get("http://127.0.0.1:8000/api/news/");
	return(result.data);
 }
export async function fetchNew(id:number | undefined ) {
	const result = await axios.get(`http://127.0.0.1:8000/api/news/${id}/`);
	return(result.data);
 }

export async function fetchMenu( ) {
	const result = await axios.get(`http://127.0.0.1:8000/api/conf/menu/`);
	return(result.data);
 }
export async function fetchDoclist(id:number ) {
	const result = await axios.get(`http://127.0.0.1:8000/api/doclist/menu${id}/`);
//	console.log(result.data);
	
	return(result.data);
 }

export async function fetchLogin (data: any){
	//console.log(data);	
	const result = await axios.post(`http://127.0.0.1:8000/api/auth/`, data)
	//console.log(result);
	
	return result.data
}

export async function fetchRefresh (token: any){
	//console.log(token);	
	const result = await axios.post(`http://127.0.0.1:8000/api/auth/refresh/`, {
		refresh: token
	})
	//console.log(result);
	
	return result.data
}



export async function fetchVotingList (){
	//console.log(token);	
	const result = await axios.get(`http://127.0.0.1:8000/api/voting/list/`)
	//console.log(result);
	
	return result.data
}