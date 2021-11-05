const knex=require("./knex");



function GetData(requery){

    let required=["tourney_name",'round','surface',"tourney_date","winner_name","loser_name","score","nos","comeback","w_dr","l_dr", 'w_1st_In_prc',"w_1stprc","w_2ndprc","w1st_retprc","w2nd_retprc",'w_bpFaced', 'w_bpSavedprc','w_bpSaved', 'l_1st_In_prc',"l_1stprc","l_2ndprc","l1st_retprc","l2nd_retprc", 'l_bpFaced','l_bpSavedprc','l_bpSaved','w_ace','l_ace'];

    if(requery.result=="Win"){
        
        const res=  knex("T_WTA_2021_65").select(...required)
        .where({ "winner_name":requery.player_name ,
        "surface":requery.surface });
        return res;
    }
    else if(requery.result=="Loss"){
        const res= knex("T_WTA_2021_65").select(...required).where({"loser_name":requery.player_name,
        "surface":requery.surface});
        return res;
        }

    }
module.exports={
    GetData
}
