Ext.define("AP.view.Grid",{
    extend:"Ext.grid.Panel",
   bind:{
        store:"{customers}"
   },
    controller:{
        xclass:"AP.view.GridController"
    },
    requires:["AP.model.Customers"],
    columns:[{
        text:"ID",
        dataIndex:"id",
        flex:0.3
    },{
        text:"კლიენტის ტიპი",
        dataIndex:"type",
        flex:1,
        renderer:"typeRenderer"
    },{
        text:"დასახელება",
        dataIndex:"nameall",
        flex:1,
        // renderer:"nameallRenderer"
    },{
        text:"საინ.ნომერი",
        dataIndex:"number",
        flex:1
    },{
        text:"რეგიონი",
        dataIndex:"region",
        flex:1,
        renderer:"regionRendererGrid"
    },{
        text:"რაიონი",
        dataIndex:"district",
        flex:1,
        renderer:"districtRenderer"
    },{
        xtype:"datecolumn",
        text:"დაბადების თარიღი",
        dataIndex:"date",
        flex:1,
        format:"Y/m/d"
        // // renderer: Ext.util.Format.dateRenderer('d.m.Y')
    }]
})