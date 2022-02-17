console.log("!!!");

//const axios = require('axios');
// import axios from 'axios';

axios.get('http://localhost:8000').then(resp => {

    console.log(resp.data);

document.getElementById("demo").innerHTML = resp.data.message;
});
