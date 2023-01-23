const axios = require('axios');

export const getPlayerDataFromEspn = async() => {
    let data;
    try{
        const url = "http://api.espn.com/v1//sports/football/nfl";
            const response = await axios.get(url);
            data = response.data;
    }
    catch (error) {
        console.error(error);
    }
    return data;
}

