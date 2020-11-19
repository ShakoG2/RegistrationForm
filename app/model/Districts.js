Ext.define("AP.model.Districts",{
    extend:"Ext.data.Model",
    fields:["id","name","region_id"],
    proxy:{
        url:"https://softlab-api.softgen.ge/districts",
        type:"rest",
        writer: {
            writeAllFields: true,
            writeRecordId: false,
        }
    }
})