Ext.define("AP.view.Main",{
    extend:"Ext.panel.Panel",
    layout:"border",
    title:"კლიენტის რეგისტრაცია",
    border:false,
    viewModel:{
        xclass:"AP.view.MainViewModel"
    },
    controller:{
        xclass:"AP.view.MainController"
    },
    items:[{
        xtype:"panel",
        // border:false,
        flex:0.3,
        region:"west",
        items:[{
            xtype:"form",
            border:false,
            layout:"vbox",
            reference:"form",
            fieldDefaults:{
                labelAlign: 'top',
                margin:"30 0 0 50",
                allowBlank:false,
                align:"stretch",
                // height:40,
            },
            items:[{
                xtype:"combo",
                fieldLabel:"კლიენტის ტიპი",
                reference:"PersonType",
                editable:false,
                valueField: "id",
                displayField: "name",
                name:"type",
                bind:{
                    store:"{personType}",
                },
                queryMode: 'local',
                listeners:{
                    change:"choosePersonType"
                }
            },{
                xtype:"combo",
                fieldLabel:"სამართლებრივი ფორმა",
                name:"orgType",
                valueField:"id",
                displayField: "name",
                bind:{
                    hidden:"{!legalEntity}",
                    store:"{orgType}",
                    disabled:"{!legalEntity}",
                }
            },{
                xtype:"textfield",
                fieldLabel:"სახელი",
                name:"firstName",
                bind:{
                    hidden:"{!physicalPerson}",
                    disabled:"{!physicalPerson}"
                }
            },{
                xtype:"textfield",
                fieldLabel:"დასახელება",
                name:"name",
                bind:{
                    hidden:"{!legalEntity}",
                    disabled:"{!legalEntity}",
                }
            },{
                xtype:"textfield",
                fieldLabel:"გვარი",
                name:"lastName",
                bind:{
                    hidden:"{!physicalPerson}",
                    disabled:"{!physicalPerson}"
                }
            },{
                xtype:"textfield",
                fieldLabel:"საიდენთიფიკაციო ნომერი",
                name:"idNumber",
                bind:{
                    hidden:"{!legalEntity}",
                    disabled:"{!legalEntity}",
                }
            },{
                xtype:"textfield",
                fieldLabel:"პირადი ნომერი",
                name:"privateNumber",
                regex: /^[0-9 ]+$/,
                minLength:11,
                maxLength:11,
                bind:{
                    hidden:"{!physicalPerson}",
                    disabled:"{!physicalPerson}"
                }
            },{
                xtype:"combo",
                fieldLabel:"რეგიონი",
                valueField: "id",
                editable:false,
                name:"region",
                displayField: "name",
                reference:"regionsCombo",
                bind:{
                    store:"{regionsStore}"

                },
                listeners: {
                    change:"regionChange"
                },
            },{
                xtype:"combo",
                fieldLabel:"რაიონი",
                // queryMode: 'local',
                editable:false,
                name:"district",
                valueField:"id",
                displayField: "name",
                // reference: "districts",
                bind :{
                    store:"{districtsStore}",
                    disabled:"{!regionFieldDisabled}"
                },
            },{
                xtype: 'datefield',
                // anchor: '100%',
                fieldLabel: 'დაბადების თარიღი',
                name: 'birth',
                // value: new Date(),
            },{
                xtype:"button",
                text:"შენახვა",
                scale:"medium",
                margin:"30 0 0 100",
                handler: "savePost",
            },{
                xtype:"button",
                text:"გასუფთავება",
                scale:"medium",
                handler:"reset",
                margin:"30 0 0 100",
            }],


        }]
    },{
        region:"center",
        xclass:"AP.view.Grid"
    }]


})