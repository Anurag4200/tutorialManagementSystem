// console.log("enetr");
// let status=document.querySelector("#check");
// constructor
let i=1;
function Tut(subject,dop,doc,tut_name,marks,status){
    this.subject=subject;
    this.dop=dop;
    this.doc=doc;
    this.tut_name=tut_name;
    this.marks=marks;
    this.status=status;

}
// display constructor
function Display(){

}
// add methods to prorotype
Display.prototype.add=function(tut){
    tableBody=document.getElementById("tableBody");
    let uistring=`<tr>
    <td>${i}</td>
    <td>${tut.subject}</td>
    
    <td>${tut.tut_name}</td>
    <td>${tut.dop}</td>
    <td>${tut.doc}</td>
    <td>${tut.marks}</td>
    <td>${tut.status}</td>
    
  </tr>`
  tableBody.innerHTML+=uistring;
  i++;

    

}
Display.prototype.clear=function(){
    let tutorialForm=document.querySelector("#tutorialForm");
    tutorialForm.reset();
}



// add submit event listener tutorialForm
let tutorialForm=document.querySelector("#tutorialForm");
let add= document.querySelector("#add");

add.addEventListener("click",tutorialFormSubmit);

// subject,dob,doc,tut_name,marks,status

function tutorialFormSubmit(e){
    
    console.log("you have submitted form");
    let subject=document.getElementById("subject").value;
    let tut_name=document.getElementById("tut_name").value;
    let dop=document.getElementById("dop").value;
    let doc=document.getElementById("doc").value;
    
    let marks=document.getElementById("marks").value;
    let corrected=document.getElementById("corrected");
    let notcorrected=document.getElementById("notcorrected");
    let incomplete=document.getElementById("incomplete");
    // let subject=document.getElementById("").value;
    let status
    if (corrected.checked){
        status=corrected.value;
    }
    else if (notcorrected.checked){
        status=notcorrected.value;
    }
    else if (incomplete.checked){
        status=incomplete.value;
    }
    
    let tut=new Tut( subject,dop,doc,tut_name,marks,status);

    let display=new Display()
    display.add(tut);
    display.clear();
    // console.log(tut);

}