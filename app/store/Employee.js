Ext.define('RM.store.Qualifications', {
    extend: 'RM.store.Base',

    model: 'RM.model.Qualifications',
    //storeId: 'companyStructureStore',
    autoLoad: true,
    pageSize: 10,
    ajaxPath: 'data/qualifications.json',
   
});
