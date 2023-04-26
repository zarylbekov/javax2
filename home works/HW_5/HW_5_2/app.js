 let obj = {
    name:"Ivan",
    age: 14
 }
 let xhr = new XMLHttpRequest();
 xhr.open("POST", "server.php",true);
 xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.send(JSON.stringify(obj))
 xhr.onload = function() {
   if(xhr.status===200){
      alert("luck")
   }else if(xhr.status===400){
      alert("status 400")
   }else if(xhr.status===500){
      alert("status 500")
   }
 };