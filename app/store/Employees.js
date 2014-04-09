Ext.define('RM.store.Employees', {
    extend: 'RM.store.Base',
    alias: 'store.employees',
    model: 'RM.model.Employee',
    //storeId: 'companyStructureStore',
    autoLoad: true,
    pageSize: 10,
    ajaxPath: 'data/employees.json'
});
