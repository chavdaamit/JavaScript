
document.getElementById("form").addEventListener("submit", async (e) => {

    e.preventDefault()

    const search = document.getElementById("search").value
    const container = document.getElementById("container")


    try {

        const API = await fetch(`https://www.omdbapi.com/?apikey=42abcc2a&s=${search}`)

        const data = await API.json();

        console.log(data)

        if (data.Response === "True") {


            data.Search.forEach((movie) => {


                container.innerHTML += `
                    <div class="card">
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <h3>${movie.Title}</h3>
                        <p>${movie.Year}</p>
                    </div>
                `;

            });

        } else {
            container.innerHTML = " <h1>no movie found</h1>"
        }


    } catch (error) {
        console.log(error.message);
    }

})
