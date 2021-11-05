const a_obj_to_df=function(a_obj){
    var df={};
    for(var a of a_obj){
        for(var [key,value] of Object.entries(a)){
            if(!df[key]) df[key]=[];
            df[key].push(value);
        }
    }
    return df;
}

module.exports=a_obj_to_df;
