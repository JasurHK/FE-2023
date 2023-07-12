const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
console.log('hello bitch');

const sendHttpRequest = (method , url , data) =>{
    const promise = new Promise ( (resolve, reject) =>{
        const xhr = new XMLHttpRequest();
    xhr.open(method , url);

    xhr.responseType = 'json'

    if(data){
        xhr.setRequestHeader('content-type', 'application/json');
    }

    xhr.onload = ()=>{
        if (xhr.status >=400){
            reject(xhr.response);
        }else{
            resolve(xhr.response);
        }
    }

    xhr.onerror = ()=>{
        reject('Oops something went wrong!')
    }

    xhr.send(JSON.stringify(data));
    });
    return promise;
     
};

const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users')
    .then(responseData =>{
        console.log(responseData);
    })
};

const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', { 
        email: "eve.holt@reqres.in", 
        password: "pistol" //if email or password is wrong it will be rejected and catch block console logs
    })
    .then(responseData =>{
        console.log(responseData);
    })
    .catch(err =>{
        console.log(err);
    })
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);