let datePickerDate1 = document.getElementById("wrapperDateValue1");
let datePickerDate2 = document.getElementById("wrapperDateValue2");
let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
    console.log("button pressed");
    fetchData();
});

function fetchData() {
    let api_key = "ahutoSbmiRJp7CUBrL5s2yefa7OrVrKw1zsel4VF";
    let startDate = datePickerDate1.value;
    let endDate = datePickerDate2.value;

    console.log(startDate);
    console.log(endDate);
    // let startDate = `2021-11-01`;
    // let endDate = `2021-11-02`;
    fetch(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${api_key}`
        )
        .then((response) => {
            if (!response.ok) {
                throw Error("Error: not OK");
            }
            return response.json();
        })

    .then((data) => {
            console.log(data.near_earth_objects);
            // Loop over the array
            const html = data.near_earth_objects[startDate]
                .map((user) => {
                    return `
                            <div class="user">
                            <p>id: ${user.id}</p>
                            <p>Name: ${user.name}</p>
                            <p>Close Approach Date: ${user.close_approach_data[0].close_approach_date}</p>
                            <p>Miss Distance (miles): ${user.close_approach_data[0].miss_distance.miles}</p>
                            <p>Potentially Dangerous: ${user.is_potentially_hazardous_asteroid}</p>
                            <p>Absolute Magnitude: ${user.absolute_magnitude_h}</p>
                            <p>Relative Velocity (MPH): ${user.close_approach_data[0].relative_velocity.miles_per_hour}</p>
                            <p>Estimated Diameter (MIN): ${user.estimated_diameter.miles.estimated_diameter_min}</p>
                            <p>Estimated Diameter (MAX): ${user.estimated_diameter.miles.estimated_diameter_max}</p>
                            <p  href="${user.nasa_jpl_url}">  NASA JPL URL: ${user.nasa_jpl_url}"  </p>
                    
                            </div>
                `;
                })
                .join("");
            console.log(html);
            // inject json data into the HTML
            document
                .querySelector(
                    "#app" // This can be found on main.handlebars
                )
                .insertAdjacentHTML("afterbegin", html);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Don't forget to call the method!!!
// fetchData();