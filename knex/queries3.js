const knex=require("./knex");

function GetData3(requery){

    
    //////////////////
        if(requery.circuit=="Men" ){
            const res=  knex("T_ATP_ELO").select('Elo', 'HardRaw', 'ClayRaw', 'GrassRaw')
            .where({ "Player":requery.player_name });
            return res;
            }

        else if(requery.circuit=="Women"){
            const res=  knex("T_WTA_ELO").select('Elo', 'HardRaw', 'ClayRaw', 'GrassRaw')
            .where({ "Player":requery.player_name });
            return res;
            }
        
    }
    module.exports={
        GetData3
    }
    