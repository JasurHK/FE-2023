const main = document.getElementById("main")
const btn = document.getElementById("btn");



btn.addEventListener("click", ()=>{
    const movieName = document.getElementById("movie_name").value;
    const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=` + `${movieName}`;
    const secondP = {
    'method': 'GET',
    'headers': {
	    'X-RapidAPI-Key': '902d90da72mshfad27c9b108d434p191acejsn81db4bf0c071',
	    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }};
    // fetch(url, secondP)
    // .then((response) => response.json())
    // .then((data) =>{
    //     console.log(data);

    //     main.innerHTML=`

    //     <div class="movie">
    //     <img src=${data.d[1].i.imageUrl} alt="img">

    //     <div class="movie-info">
    //         <h3>${data.d[1].l}</h3>
    //         <span class="green">${data.d[1].y}</span>
    //     </div>

    //     <div class="overview">
    //         <h3>${data.d[1].l}</h3>
    //         Type: ${data.d[1].q},<br>
    //         Casts: ${data.d[1].s}
    //     </div>
    // </div>`

    // })
    fetch(url, secondP)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let moviesHTML = '';

    data.d.forEach((item) => {
      moviesHTML += `
        <div class="movie">
          <img src="${item.i.imageUrl}" alt="img">
          <div class="movie-info">
            <h3>${item.l}</h3>
            <span class="green">${item.y}</span>
          </div>
          <div class="overview">
            <h3>${item.l}</h3>
            Type: ${item.q},<br>
            Casts: ${item.s}
          </div>
        </div>
      `;
    });

    main.innerHTML = moviesHTML;
  });
  
});



// const movieName = document.getElementById("search")
// fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${movieName}`, {
// 	'method': 'GET',
// 	'headers': {
// 		'X-RapidAPI-Key': '902d90da72mshfad27c9b108d434p191acejsn81db4bf0c071',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch (error =>{
// 	console.error(error);
// })

