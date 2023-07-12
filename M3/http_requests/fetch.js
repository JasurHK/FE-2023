const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    fetch('https://reqres.in/api/users')
    .then( response=>{
        return response.json();
    })
    .then( responseData =>{
        console.log(responseData);
    })
};

const sendData = () => {};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);