const path = "http://localhost:8080/GenTree/APP/";

function ping(){
    pingAsync()
    .then(function(answer){
      console.log(answer);
    });
}

async function pingAsync(){
    let response = await fetch(path + "ping", {method: "GET", headers: {'Content-Type': 'text/plain;charset=utf-8'}});
    return response.text();
}

function register(data, decider){
    registerAsync(JSON.stringify(data))
    .then(function(answer){
      console.log('Model answer: ', answer);
      decider(answer);
    });
}

async function registerAsync(data){
    let response = await fetch(path + "register", {method: "POST", headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: data});
    return response.text();
}

function login(data, decider){
  loginAsync(JSON.stringify(data))
  .then(function(answer){
    decider(answer);
    console.log('Model answer: ', answer);
  });
}

async function loginAsync(data){
  let response = await fetch(path + "login", {method: "POST", headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: data});
  return response.text();
}

function personalData(data){
  let response = fetch(path + "personalData", {method: "POST", headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: data});
}

export{ping, register, login, personalData}