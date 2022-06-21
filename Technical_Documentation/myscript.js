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

function showBackground(){
  
}



showBackground();
