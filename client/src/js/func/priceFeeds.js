const axios = require('axios');

const key = "35ca287a6a1e47ac918f98ed3df7c672";
const config = {
    headers:{
        "Ocp-Apim-Subscription-Key": key,
    }
  };
const url = "https://api.sportsdata.io/v3/nfl/scores/xml/Players?api_key=35ca287a6a1e47ac918f98ed3df7c672";

export const getAllPlayerDataFromSportsDataIO_2 = async() => {
    let data;
    try{
            axios.get(url)
                .then(response => {
                    // access parsed JSON response data using response.data field
                    data = response.data
                    console.log(data.count)
                    console.log(data.products)
                })
                .catch(error => {
                    if (error.response) {
                    //get HTTP error code
                    console.log(error.reponse.status)
                    } else {
                    console.log(error.message)
                    }
                })
    }
    catch (error) {
        console.error(error);
        }
    return data;
}
