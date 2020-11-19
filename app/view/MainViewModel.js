Ext.define("AP.view.MainViewModel",{
    extend:"Ext.app.ViewModel",
    requires:["AP.model.Districts","AP.model.Regions","AP.model.Customers"],
    stores:{
        districtsStore:{
            model:"AP.model.Districts",
            autoLoad:true,
        },
        regionsStore:{
            model:"AP.model.Regions",
            autoLoad:true,
        },
        personType: {
            fields: ['id', 'name'],
            data: [{id:"INDIVIDUAL", name:'ფიზიკური პირი'}, {id:"LEGAL_ENTITY", name:'იურიდიული პირი'}],
        },
        orgType:{
            fields: ['id','name'],
            data: [{id: 1, name:'შპს'}, {id: 2, name:'სს'},{id: 3, name:'იმ'},{id: 4, name:'სსიპ'}],
        },
        customers:{
            model:"AP.model.Customers",
            autoLoad:true,
        }
    },
    data:{
        physicalPerson:false,
        legalEntity:false,
        regionFieldDisabled:false,
    }
})