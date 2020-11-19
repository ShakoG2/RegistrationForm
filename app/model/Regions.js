Ext.define("AP.model.Regions",{
    extend:"Ext.data.Model",
    fields:["id","name"],
    proxy:{
        url:"https://softlab-api.softgen.ge/regions",
        type:"rest",
        writer: {
            writeAllFields: true,
            writeRecordId: false,
        }
    }
})