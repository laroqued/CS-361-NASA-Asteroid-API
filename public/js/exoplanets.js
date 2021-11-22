let exoPlanetsButton = document.querySelector("#exoplanets");

exoPlanetsButton.addEventListener("click", () => {
    console.log("exoplanets pressed");
    exoPlanetsApiRequest();
});
//An asynchronous function to fetch data from the API.

async function exoPlanetsApiRequest() {
    try {
        const response = await axios.get(`http://localhost:4000/getExoPlanet`);

        console.log(response.data);
    } catch (error) {
        // console.log(error.response.body);
    }
}