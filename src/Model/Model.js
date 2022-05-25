function ping(){
    pingAsync()
    .then(function(answer){
      console.log(answer);
    });
}

async function pingAsync(){
    let response = await fetch("http://localhost:8080/GenTree/APP/ping", {method: "GET", headers: {'Content-Type': 'text/plain;charset=utf-8'}});
    return response.text();
}

function register(data){
    registerAsync(JSON.stringify(data))
    .then(function(answer){
      console.log('Model answer: ', answer);
      return answer;
    });
}

async function registerAsync(data){
    let response = await fetch("http://localhost:8080/GenTree/APP/register", {method: "POST", headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: data});
    return response.text();
}

function login(data){
  loginAsync(JSON.stringify(data))
  .then(function(answer){
    console.log('Model answer: ', answer);
    return answer;
  });
}

async function loginAsync(data){
  let response = await fetch("http://localhost:8080/GenTree/APP/login", {method: "POST", headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: data});
  return response.text();
}

export{ping, register, login}