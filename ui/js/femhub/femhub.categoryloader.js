Ext.app.CategoryLoader = Ext.extend(Ext.ux.tree.XmlTreeLoader, {
    processAttributes : function(attr){
        if(attr.catid){ // is it an author node?
            attr.text = attr.catid + ' ' + attr.catname;
            attr.loaded = true;
            attr.expanded = true;
        }
        else if(attr.guid){ // is it a book node?
            attr.text = '['+ attr.guid +']' + attr.sheetname ;
            //attr.leaf = true;
        }
    }
});

Ext.reg('x-femhub-categoryloader', FEMhub.CategoryLoader);
