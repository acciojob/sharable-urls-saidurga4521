// your code here
const urlE1=document.getElementById("url")
const nameE1=document.getElementById("name")
const yearE1=document.getElementById('year')
const btn=document.getElementById("button")
btn.addEventListener('click',()=>{
	let name=nameE1.value;
	let year=yearE1.value;
	if(name && year){
		urlE1.innerHTML=`https://localhost:8080/name=${name}&year=${year}`
	}else if(name){
	    urlE1.innerHTML=`https://localhost:8080/name=${name}`	
	}else if(year){
		urlE1.innerHTML=`https://localhost:8080/year=${year}`
	}else{
		urlE1.innerHTML=`https://localhost:8080/`
	}
})