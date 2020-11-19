Ext.define("AP.view.GridController",{
    extend:"Ext.app.ViewController",
    typeRenderer: function (type) {
        const personType = this.getViewModel().getStore("personType").getById(type);
        return personType.get("name");
    },
    regionRendererGrid: function (region) {
        const regions = this.getViewModel().getStore("regionsStore").getById(region);
        // console.log(region);
        // console.log(regions);
        return regions.get("name");
    },
    districtRenderer:function (district){
        const districtsOne= this.getViewModel().getStore("districtsStore").getById(district);
        console.log(district);
        console.log(districtsOne);
        return districtsOne.get("name");
    }
})