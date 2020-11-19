Ext.define("AP.model.Customers",{
    extend:"Ext.data.Model",
    fields:["id","type","firstName","lastName","name","orgType","privateNumber","idNumber","region","district",
        {
            name:"nameall",
            calculate:function (data){
                if(data.type==="INDIVIDUAL") {
                    return `${data.firstName} ${data.lastName}`;
                }else{
                    var x;
                    switch(data.orgType){
                        case 1: x='შპს';
                        break;
                        case 2: x='სს';
                        break;
                        case 3: x='იმ';
                        break;
                        case 4: x='სსიპ';
                        break;
                    }
                     return `${x} ${data.name}`;
                    // return `${x} ${data.name}`;
                }
            }
        },{
            name:"number",
            calculate:function (data){
                if(data.type==="INDIVIDUAL"){
                    return data.privateNumber;
                }else{
                    return data.idNumber;
                }
            }
        },{
           // name:"bDay",
           //  calculate:function (data){
           //     var obj=JSON.parse(data,function(key, value){
           //         if(key=="birth"){
           //             return new Date(value);
           //         }else{
           //             return value;
           //         }
           //     })
           //  }
        },{
            name:"birth",
            type:"date"
        }],
    proxy:{
        url:"https://softlab-api.softgen.ge/shako/customers",
        type:"rest",
    },
    writer: {
        writeAllFields: true,
        writeRecordId: false,
    }
})