// Make a request for a user with a given ID

axios.get('https://sei-api.herokuapp.com/students')
    .then((res) => {
        const sorted = res.data.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })

        const ul = document.querySelector("#ul")
        sorted.forEach(student => {
            ul.innerHTML += `<li> <strong> ${student.name.toUpperCase()} </strong> <br>
        <em> ${student.knownFor}</em>
        </li>`

        });
    })
    .catch((error) => {
        console.log(error);
    });