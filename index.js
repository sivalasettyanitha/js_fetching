/*const URL ="http://localhost:3000/students";

let options = {
    "method" :"POST",
    "headers": {
        "Content-type":"application/json"
    },
    "body": JSON.stringify(
        {
            "id": "4",
            "name": "Dinesh",
            "course": "CSS"
        })
    }

fetch(URL,options).then(res=>{
    if(res.ok){
        console.log(res.status,res.statusText);
    }
}).catch(res=>console.log(res));
*/
//PUT
/*const URL ="http://localhost:3000/students/1";

let options = {
    "method" :"PUT",
    "headers": {
        "Content-type":"application/json"
    },
    "body": JSON.stringify(
        {
            
            "name": "Deepak"
        })
    }

fetch(URL,options).then(res=>{
    if(res.ok){
        console.log(res.status,res.statusText);
    }
}).catch(res=>console.log(res));
*/
//PATCH
/*const URL ="http://localhost:3000/students/2";

let options = {
    "method" :"PATCH",
    "headers": {
        "Content-type":"application/json"
    },
    "body": JSON.stringify(
        {
            
            "name": "Anitha"
        })
    }

fetch(URL,options).then(res=>{
    if(res.ok){
        console.log(res.status,res.statusText);
    }
}).catch(res=>console.log(res));
*/
//delete
/*fetch("http://localhost:3000/students/1",{
    "method":"DELETE"
})
.then(res=>{
    if(res.ok){
        console.log(res.status,res.statusText)
    }
})*/
//get

const URL = " http://localhost:3000/students";
fetch(URL).then((res)=>res.json())
.then((data1)=>{
    for(i=0;i<data1.length;i++){
        console.log(data1[i])
    }
})
