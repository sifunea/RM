Ext.override(Ext.form.Panel, {
    clearForm: function () {
        Ext.each(this.getForm().getFields().items, function (field) {
            field.setValue('');
        });
    }
});
