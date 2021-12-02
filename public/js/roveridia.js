let downloadButton1 = document.querySelector("#roveridia1");

downloadButton1.addEventListener("click", () => {
    console.log("roveridia pressed");
    downloadApiRequest1();
});
//An asynchronous function to fetch data from the API.

async function downloadApiRequest1() {
    try {
        const response = await axios.get(`http://localhost:58471/data?waypoint=1`);

        console.log(response.data);
    } catch (error) {
        console.log(error.response.body);
    }
}
// ====================================================
let downloadButton2 = document.querySelector("#roveridia2");

downloadButton2.addEventListener("click", () => {
    console.log("roveridia1 pressed");
    downloadApiRequest2();
});
//An asynchronous function to fetch data from the API.

async function downloadApiRequest2() {
    try {
        const response = await axios.get(`http://localhost:58471/data?waypoint=2`);

        console.log(response.data);
    } catch (error) {
        console.log(error.response.body);
    }
}

// ====================================================

let downloadButton3 = document.querySelector("#roveridia3");

downloadButton3.addEventListener("click", () => {
    console.log("roveridia1 pressed");
    downloadApiRequest3();
});
//An asynchronous function to fetch data from the API.

async function downloadApiRequest3() {
    try {
        const response = await axios.get(`http://localhost:58471/data?waypoint=3`);

        console.log(response.data);
    } catch (error) {
        console.log(error.response.body);
    }
}


// ====================================================

let downloadButton4 = document.querySelector("#roveridia4");

downloadButton4.addEventListener("click", () => {
    console.log("roveridia1 pressed");
    downloadApiRequest4();
});
//An asynchronous function to fetch data from the API.

async function downloadApiRequest4() {
    try {
        const response = await axios.get(`http://localhost:58471/data?waypoint=4`);

        console.log(response.data);
    } catch (error) {
        console.log(error.response.body);
    }
}

// ====================================================
let downloadButton5 = document.querySelector("#roveridia5");

downloadButton5.addEventListener("click", () => {
    console.log("roveridia5 pressed");
    downloadApiRequest5();
});
//An asynchronous function to fetch data from the API.

async function downloadApiRequest5() {
    try {
        const response = await axios.get(`http://localhost:58471/data?waypoint=5`);

        console.log(response.data);
    } catch (error) {
        console.log(error.response.body);
    }
}

// ====================================================
let downloadButton6 = document.querySelector("#roveridia6");

downloadButton6.addEventListener("click", () => {
    console.log("roveridia6 pressed");
    downloadApiRequest6();
});
//An asynchronous function to fetch data from the API.

async function downloadApiRequest6() {
    try {
        const response = await axios.get(`http://localhost:58471/data?waypoint=6`);

        console.log(response.data);
    } catch (error) {
        console.log(error.response.body);
    }
}


// ====================================================


let downloadButton7 = document.querySelector("#roveridia7");

downloadButton7.addEventListener("click", () => {
    console.log("roveridia7 pressed");
    downloadApiRequest7();
});
//An asynchronous function to fetch data from the API.

async function downloadApiRequest7() {
    try {
        const response = await axios.get(`http://localhost:58471/data?waypoint=7`);

        console.log(response.data);
    } catch (error) {
        console.log(error.response.body);
    }
}
// ====================================================