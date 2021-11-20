const knex=require("./knex");
let required=["tourney_name",'round','surface',"tourney_date","winner_name","loser_name","score","nos","comeback","w_dr","l_dr", 'w_1st_In_prc',"w_1stprc","w_2ndprc","w1st_retprc","w2nd_retprc",'w_bpFaced', 'w_bpSavedprc','w_bpSaved', 'l_1st_In_prc',"l_1stprc","l_2ndprc","l1st_retprc","l2nd_retprc", 'l_bpFaced','l_bpSavedprc','l_bpSaved','w_ace','l_ace','w_df','l_df'];
let empty_data={"tourney_name":[],"round":[],"surface":[],"tourney_date":[],"winner_name":[],"loser_name":[],"score":[],"nos":[],"comeback":[],"w_dr":[],"l_dr":[],"w_1st_In_prc":[],"w_1stprc":[],"w_2ndprc":[],"w1st_retprc":[],"w2nd_retprc":[],"w_bpFaced":[],"w_bpSavedprc":[],"w_bpSaved":[],"l_1st_In_prc":[],"l_1stprc":[],"l_2ndprc":[],"l1st_retprc":[],
"l2nd_retprc":[],"l_bpFaced":[],"l_bpSavedprc":[],"l_bpSaved":[],
"w_ace":[],"l_ace":[],"w_df":[],"l_df":[]}



function GetData2(requery){

    
//////////////////
    if(requery.circuit=="Men" && requery.year=="2021" && requery.sets=="All"){

        if(requery.result=="Win"){
        
            const res=  knex("T_ATP_CHQ_2021_65").select(...required)
            .where({ "winner_name":requery.player_name ,
            "surface":requery.surface });
            return res;
        }
        else if(requery.result=="Loss"){
            const res= knex("T_ATP_CHQ_2021_65").select(...required)
            .where({"loser_name":requery.player_name,
            "surface":requery.surface});
            return res;
            }

    }
///////////////////
    if(requery.circuit=="Men" && requery.year=="2021" && requery.sets=="2"){
        if(requery.result=="Win"){
        
            const res=  knex("T_ATP_CHQ_2021_65").select(...required)
            .where({ "winner_name":requery.player_name ,
            "surface":requery.surface,"nos":parseInt(requery.sets) });
            return res;
        }
        else if(requery.result=="Loss"){
            const res= knex("T_ATP_CHQ_2021_65").select(...required).where({"loser_name":requery.player_name,
            "surface":requery.surface,"nos":parseInt(requery.sets)});
            return res;
            }
        
    }
////////////////
if(requery.circuit=="Men" && requery.year=="2021" && requery.sets=="3"){
    if(requery.result=="Win"){
    
        const res=  knex("T_ATP_CHQ_2021_65").select(...required)
        .where({ "winner_name":requery.player_name ,
        "surface":requery.surface ,"nos":parseInt(requery.sets)});
        return res;
    }
    else if(requery.result=="Loss"){
        const res= knex("T_ATP_CHQ_2021_65").select(...required).where({"loser_name":requery.player_name,
        "surface":requery.surface,"nos":parseInt(requery.sets)});
        return res;
        }
    
}

/////////////////////
if(requery.circuit=="Men" && requery.year=="2020" && requery.sets=="All"){

    if(requery.result=="Win"){
    
        const res=  knex("T_ATP_CHQ_2020_65").select(...required)
        .where({ "winner_name":requery.player_name ,
        "surface":requery.surface });
        return res;
    }
    else if(requery.result=="Loss"){
        const res= knex("T_ATP_CHQ_2020_65").select(...required).where({"loser_name":requery.player_name,
        "surface":requery.surface});
        return res;
        }

}
///////////////////
if(requery.circuit=="Men" && requery.year=="2020" && requery.sets=="2"){
    if(requery.result=="Win"){
    
        const res=  knex("T_ATP_CHQ_2020_65").select(...required)
        .where({ "winner_name":requery.player_name ,
        "surface":requery.surface,"nos":parseInt(requery.sets) });
        return res;
    }
    else if(requery.result=="Loss"){
        const res= knex("T_ATP_CHQ_2020_65").select(...required).where({"loser_name":requery.player_name,
        "surface":requery.surface,"nos":parseInt(requery.sets)});
        return res;
        }
    
}
////////////////
if(requery.circuit=="Men" && requery.year=="2020" && requery.sets=="3"){
if(requery.result=="Win"){

    const res=  knex("T_ATP_CHQ_2020_65").select(...required)
    .where({ "winner_name":requery.player_name ,
    "surface":requery.surface,"nos":parseInt(requery.sets) });
    return res;
}
else if(requery.result=="Loss"){
    const res= knex("T_ATP_CHQ_2020_65").select(...required).where({"loser_name":requery.player_name,
    "surface":requery.surface,"nos":parseInt(requery.sets)});
    return res;
    }

}

///////////////////////-------------------

//////////////////
if(requery.circuit=="Women" && requery.year=="2021" && requery.sets=="All"){

    if(requery.result=="Win"){
    
        const res=  knex("T_WTA_CHQ_2021_65").select(...required)
        .where({ "winner_name":requery.player_name ,
        "surface":requery.surface });
        return res;
    }
    else if(requery.result=="Loss"){
        const res= knex("T_WTA_CHQ_2021_65").select(...required).where({"loser_name":requery.player_name,
        "surface":requery.surface});
        return res;
        }

}
///////////////////
if(requery.circuit=="Women" && requery.year=="2021" && requery.sets=="2"){
    if(requery.result=="Win"){
    
        const res=  knex("T_WTA_CHQ_2021_65").select(...required)
        .where({ "winner_name":requery.player_name ,
        "surface":requery.surface,"nos":parseInt(requery.sets) });
        return res;
    }
    else if(requery.result=="Loss"){
        const res= knex("T_WTA_CHQ_2021_65").select(...required).where({"loser_name":requery.player_name,
        "surface":requery.surface,"nos":parseInt(requery.sets)});
        return res;
        }
    
}
////////////////
if(requery.circuit=="Women" && requery.year=="2021" && requery.sets=="3"){
if(requery.result=="Win"){

    const res=  knex("T_WTA_CHQ_2021_65").select(...required)
    .where({ "winner_name":requery.player_name ,
    "surface":requery.surface ,"nos":parseInt(requery.sets)});
    return res;
}
else if(requery.result=="Loss"){
    const res= knex("T_WTA_CHQ_2021_65").select(...required).where({"loser_name":requery.player_name,
    "surface":requery.surface,"nos":parseInt(requery.sets)});
    return res;
    }

}

/////////////////////
if(requery.circuit=="Women" && requery.year=="2020" && requery.sets=="All"){

if(requery.result=="Win"){

    const res=  knex("T_WTA_CHQ_2020_65").select(...required)
    .where({ "winner_name":requery.player_name ,
    "surface":requery.surface });
    return res;
}
else if(requery.result=="Loss"){
    const res= knex("T_WTA_CHQ_2020_65").select(...required).where({"loser_name":requery.player_name,
    "surface":requery.surface});
    return res;
    }

}
///////////////////
if(requery.circuit=="Women" && requery.year=="2020" && requery.sets=="2"){
if(requery.result=="Win"){

    const res=  knex("T_WTA_CHQ_2020_65").select(...required)
    .where({ "winner_name":requery.player_name ,
    "surface":requery.surface,"nos":parseInt(requery.sets) });
    return res;
}
else if(requery.result=="Loss"){
    const res= knex("T_WTA_CHQ_2020_65").select(...required).where({"loser_name":requery.player_name,
    "surface":requery.surface,"nos":parseInt(requery.sets)});
    return res;
    }

}
////////////////
if(requery.circuit=="Women" && requery.year=="2020" && requery.sets=="3"){
if(requery.result=="Win"){

const res=  knex("T_WTA_CHQ_2020_65").select(...required)
.where({ "winner_name":requery.player_name ,
"surface":requery.surface,"nos":parseInt(requery.sets) });
return res;
}
else if(requery.result=="Loss"){
const res= knex("T_WTA_CHQ_2020_65").select(...required).where({"loser_name":requery.player_name,
"surface":requery.surface,"nos":parseInt(requery.sets)});
return res;
}

}
    
    

    }
module.exports={
    GetData2
}
