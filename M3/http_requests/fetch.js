const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data)=>{
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ?{'content-type': 'application/json'} : {}
    })
    .then( response=>{
        if(response.status >=400){
            // !response.ok
            return response.json().then(errResData =>{
                const error = new Error('Oops somthing went wrong!');
                error.data = errResData ;
                throw error;
            })
        }
        return response.json();
    });
};

const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users')
    .then( responseData =>{
        console.log(responseData);
    });
};

const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
        email: "eve.holt@reqres.in", 
        // password: "pistol" //if email or password is wrong it will be rejected and catch block console logs
    
    })
    .then(responseData=>{
        console.log(responseData);
    })
    .catch(err=>{
        console.log(err);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);