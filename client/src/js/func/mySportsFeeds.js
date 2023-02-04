const axios = require('axios');
const key = "8c430a8e-5678-427b-be8b-2f992b";

const config = {
        headers: {
            'Authorization': 'Basic ' + new Buffer(key + ':MYSPORTSFEEDS').toString('base64')
          },
  };

let base = "https://scrambled-api.mysportsfeeds.com/"
let path_dfs_weekly = "v2.1/pull/nfl/2022-regular/week/1/dfs.json";

export const getData = async() => {
    let data;
    const url = getUrl();
    try{
            const response = await axios.get(url, config);
            console.log('draftKings:', response.data.sources);
            let playerMap = buildPlayerMap(response.data.references.playerReferences);
            addPlayerFantasyInf(response.data.sources, playerMap);
            data = response.data;
    }
    catch (error) {
        console.error(error);
    }
    return data;
}

const getUrl = () => {
    return base+path_dfs_weekly;
}

const buildPlayerMap = (players) => {
    let playerMap = {};
    players.forEach( (e, i) => {
        playerMap[e.id] = e;
    })
    return playerMap;
}

const addPlayerFantasyInf = (sources, playerMap) => {
    sources.forEach((e) => {
            e.slates.forEach((f) => {
                if(f.label){
                    f.players.forEach((g) => {
                        if(g.player){
                            if(g.player.id){
                                if(g.player.id in playerMap){
                                    if(!playerMap[g.player.id][e.source]) playerMap[g.player.id][e.source] = {};
                                    if(!playerMap[g.player.id][e.source][f.label]) playerMap[g.player.id][e.source][f.label] = {};
                                    playerMap[g.player.id][e.source][f.label]["salary"] = g.salary;
                                    playerMap[g.player.id][e.source][f.label]["fantasyPoints"] = g.fantasyPoints;
                                }
                            }
                        }
                    })
                }
            })
    });
    console.log(playerMap);
    return playerMap;
}
