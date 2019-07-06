function read(){
  fetch('http://localhost:3000/employees') 
  .then(response => response.json())
  .then(response => {
    document.getElementById("employees").innerHTML = JSON.stringify(response);
  })
}

function query(){
  var uuid = document.getElementById("queryID").value;
  url = "http://localhost:3000/employees/" + uuid;
  fetch(url) 
  .then(response => response.json())
  .then(response => {
    document.getElementById("queryEmployee").innerHTML = JSON.stringify(response);
  })
}

function create(){
  data = {name: document.getElementById("newEmployee").value};
  fetch('http://localhost:3000/employees', {
    method: 'POST', 
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => console.log('Success:', response))
}

function update(){
  var uuid = document.getElementById("updateID").value;
  var newName = {name: document.getElementById("updateEmployeeName").value};
  url = "http://localhost:3000/employees/" + uuid;
  fetch(url, {
    method: 'PUT', 
    body: JSON.stringify(newName),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => console.log('Success:', response))
}

function remove(){
  var uuid = document.getElementById("deleteID").value;
  var url = "http://localhost:3000/employees/" + uuid
  fetch(url,{
    method: 'DELETE'
  })
  .then(response => response)
  .then(response => console.log("employee has been deleted"))
}