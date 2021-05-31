var p = document.getElementById("result");                
setInterval(function() {  
   if (p.style.fontSize != "1em") {                                           
       p.style.fontSize = "1em"; 
       p.style.color = "orange";               
   } else { 
       p.style.fontSize = "2em";
       p.style.color = "teal";
   }   
}, 1000);   
