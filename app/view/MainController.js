Ext.define("AP.view.MainController", {
    extend: "Ext.app.ViewController",
    reset: function () {
        this.lookup("form").reset();
    },
    choosePersonType: function () {
        const personType = this.lookup("PersonType").getValue();
        if (personType === "INDIVIDUAL") {
            this.getViewModel().set("physicalPerson", true);
            this.getViewModel().set("legalEntity", false);
        } else {
            this.getViewModel().set("physicalPerson", false);
            this.getViewModel().set("legalEntity", true);
        }
    },
    regionChange: function () {
        this.getViewModel().set("regionFieldDisabled",true);
        const values = this.lookup("form").getValues();
        const regionValue = values.region;
        const store = this.getViewModel().getStore("districtsStore");

        store.clearFilter();
        store.filterBy(function (rec) {
            if (rec.get('region_id') === regionValue) {
                return true;
            } else {
                return false;
            }
        })
    },
    savePost: function () {
        const form = this.lookup("form");
        if(form.getForm().isValid()){
            const customerValues = form.getForm().getValues();
            const store = this.getViewModel().getStore("customers");
            const customer = Ext.create("AP.model.Customers", customerValues);
            // store.removeAll();
            // store.sync();
            customer.save(
                {
                    success: function () {
                        Ext.Msg.alert("status", 'მონაცემების შენახვა წარმატებით დასრულდა');
                        store.load();
                        form.reset();
                        form.setLoading(false);
                    },
                    failure: function () {
                        Ext.Msg.alert("status", "მოხდა შეცდომა");
                        form.setLoading(false);
                    }
                })
        }else{
            Ext.Msg.alert("შეცდომა","ყველა ველის შევსება სავალდებულოა!");
        }
    },


})