let getEl=(id)=>document.getElementById(id);//was added later,first few functions wont use it until upd

function handleInput(){
  const daform=document.getElementById("input-box").value
  document.getElementById("mirror-input").innerHTML=daform;
}

function validateForm(){
  const formInput=document.getElementById("input-box");
  if(formInput.value===""){
    alert("Please write something in the form");
    formInput.style.backgroundColor="gold";
    return false;
  }
}


function mouseEnter(id){
  getEl(id).addEventListener("mouseenter",getEl(id).style.backgroundColor="red");
}

function mouseLeave(id){
  getEl(id).addEventListener("mouseleave",getEl(id).style.backgroundColor="initial");
}

function showBackground(){
  
  const sectionA=getEl("Section_A");
  let elementsArr=["p1","p1b","p1c","p1d","p1e","p1f"];

  elementsArr.map(x=>{
    if(sectionA.contains(getEl(x))){
      getEl(x).addEventListener("mouseenter",getEl(x).style.color="red");
      getEl(x).addEventListener("mouseleave",getEl(x).style.color="white");
    }
  })

}

function childrenSections(){
  getEl("test-div").innerHTML=document.body.innerHTML;
}

/*function addToList(){
  const items=getEl("todo-input").value;
  if(getEl("todo-list").innerHTML===""){
    document.createElement("ul").setAttribute("id","la-liste");
    let listTitle=document.createTextNode("Your List");
    let myList=getEl("la-liste");
    myList.appendChild(listTitle);
    getEl("todo-list").appendChild(myList);
  }else{
    let newItem=document.createElement("li");
    newItem.innerHTML=items;
    myList.appendChild(newItem);
  }
  return false;
}*/


function test(){
  const inputVal=getEl("todo-input").value;
  const textVal=document.createTextNode(inputVal);
  const listInput=document.createElement("li");
  const listItem=listInput.append(textVal);
  getEl("todo-list").append(listItem)
  getEl("todo-input").value="";  
}
//remember to create to to list with create elem,appenchild...