let reg=document.getElementById("reg");
let join=document.getElementById("join");
let form1=document.getElementById("form1");
let form2=document.getElementById("form2");
let sighn=document.getElementById("Sighn");
let welcome=document.getElementById("welcome");
let tryagain=document.getElementById("try");
let gtreg=document.getElementById("gtreg");
let wrong=document.getElementById("wrong");

join.onclick=function(){
 
  form1.style.display="none";
  form2.style.display="block";
}

 
function change(){
  let obj={
   fname: document.forms["form1"]["fname"].value,
   lname: document.forms["form1"]["lname"].value,
   mail: document.forms["form1"]["mail"].value,
   login: document.forms["form1"]["login"].value,
   pass: document.forms["form1"]["pass"].value,
  }
  return obj;
}

function check(){
  let obj=change();
  let keys=Object.keys(obj);
  
   for(let i=0;i<keys.length;i++){

   
    if(obj[keys[i]]==""){

      
      return false;
      break;
      
    }
    

  }
  return true;
}
function sighncheck(){
  if(document.forms["form2"]["slogin"].value!="" && document.forms["form2"]["spass"].value!="")
  {
    return true;
  }
  return false;
}

function logpasschek(){
  let login=document.forms["form2"]["slogin"].value;
  let pass=document.forms["form2"]["spass"].value;
  let temp=localStorage.getItem("baza");   
  let form=JSON.parse(temp);
  for (let i=0;i< form.length;i++){
    if(form[i].login==login && form[i].pass==pass){
      return form[i];
    }
  }
  return false;
}





reg.onclick=function(){

  if(check()){
    if(localStorage.getItem("baza")===null){
      console.log("Start");
      let form=new Array();
      form.push(change());
      localStorage.setItem("baza",JSON.stringify(form));
    }else{
      let temp=localStorage.getItem("baza");
      
      let form=JSON.parse(temp);
     
      form.push(change());
      localStorage.setItem("baza",JSON.stringify(form));
      
    }
    
  }
  else{
    alert("Lracreq Bolor@");
  } 
}

sighn.onclick=function(){
if(sighncheck()){
  form2.style.display="none";
    welcome.style.display="block";
  if(logpasschek()==false){
    wrong.style.display="block";
    tryagain.style.display="block";
    gtreg.style.display="block";
  }
  else{
    wrong.style.display="none";
    tryagain.style.display="none";
    gtreg.style.display="none";
    let info=logpasschek();
    let infop=new Array();
    for (let i=0;i<5;i++){
      infop[i]=document.createElement("h1");
      welcome.append(infop[i]);
      
      infop[i].style.border="3px solid black";
      infop[i].style.fontWeight="bold";
    }
    
    infop[0].innerHTML=`First Name: ${info.fname}`;
    infop[1].innerHTML=`Last Name: ${info.lname}`;
    infop[2].innerHTML=`Mail: ${info.mail}`;
    infop[3].innerHTML=`Login: ${info.login}`;
    infop[4].innerHTML=`Password: ${info.pass}`;
  }
}
}


tryagain.onclick=function(){
  welcome.style.display="none";
  form2.style.display="block";
}

gtreg.onclick=function(){
  welcome.style.display="none";
  form1.style.display="block";
}