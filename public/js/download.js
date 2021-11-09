let downloadButton = document.querySelector("#download");
API_KEY = "ahutoSbmiRJp7CUBrL5s2yefa7OrVrKw1zsel4VF";
startDate = "2021-10-01";
endDate = "2021-10-02";

downloadButton.addEventListener("click", () => {
    console.log("download pressed");
    downloadApiRequest();
});
async function downloadApiRequest() {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;
    axios({
            method: "get",
            url: url,
            responseType: "stream",
        })
        .then((res) => {
            res.data.pipe(fs.createWriteStream("nasa_api.json"));
        })
        .catch((err) => console.log(err));
}