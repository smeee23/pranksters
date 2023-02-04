const fdClientModule = require('fantasydata-node-client');

const key = "35ca287a6a1e47ac918f98ed3df7c672";
const keys = {
    'NFLv3StatsClient': key,
};


const FantasyDataClient = new fdClientModule(keys);

export const getAllPlayerDataFromSportsDataIO = async() => {
    FantasyDataClient.NFLv3StatsClient.getPlayerDetailsByAvailablePromise()
        .then((resp) => {
            console.log("reponse", resp)
        })
        .catch((err) => {
            // handle errors
            console.log(err);
        });
        console.log("Fantasy", FantasyDataClient)
}