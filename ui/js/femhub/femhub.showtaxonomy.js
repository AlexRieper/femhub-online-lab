
FEMhub.ShowTaxonomy = Ext.extend(FEMhub.Window, {

    defaultButtons: {
        close: {
            text: 'Close',
            handler: function() {
                this.close();
            },
        },
    },

    constructor: function(config) {
        config = config || {};

        this.statusbar = new FEMhub.Statusbar({
            defaultText: '',
            busyText: '',
        });

        config = Ext.apply({
            title: "Show taxonomy",
            minimizalble: false,
            maximizable: false,
            closable: true,
            resizable: true,
            width: 500,
            height: 400,
            layout: 'fit',
            items:[{
	        xtype: 'treepanel',
		id: 'tree-panel',
		rootVisible: false,
		root: new Ext.tree.AsyncTreeNode(),

		//Custom TreeLoader:
		loader: new Ext.app.CategoryLoader({
		    dataUrl:'static/xml-tree-data.xml',
		    requestMethod : "GET"
		}),
	    }],

            buttons: ['close'],
            bbar: this.statusbar,
        }, config);

        if (!Ext.isDefined(config.x) && !Ext.isDefined(config.y)) {
            Ext.apply(config, FEMhub.util.getWindowXY({
                width: config.width,
                height: config.height,
            }));
        }

        this.configureButtons(config);

        FEMhub.ShowTaxonomy.superclass.constructor.call(this, config);
    },

    configureButtons: function(config) {
        Ext.each(config.buttons, function(button, i, buttons) {
            if (Ext.isString(button)) {
                var config = this.defaultButtons[button];

                if (Ext.isDefined(config)) {
                    buttons[i] = Ext.applyIf({scope: this}, config);
                }
            }
        }, this);
    },
});

Ext.reg('x-femhub-showtaxonomy', FEMhub.ShowTaxonomy);



