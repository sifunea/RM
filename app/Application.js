Ext.define('RM.Application', {
    name: 'RM',

    extend: 'Ext.app.Application',
    requires: [
           'Ext.util.History',
           'RM.Constants',
           'RM.extension.Loader'
    ],
    views: [
        'Viewport'
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
        'App'
    ],

    stores: [
        // TODO: add stores here
    ],
    launch: function (args) {
        // "this" = Ext.app.Application
        var me = this;
        // init Ext.util.History on app launch; if there is a hash in the url,
        // our controller will load the appropriate content
        Ext.util.History.init(function () {
            var hash = document.location.hash;
            me.getAppController().fireEvent('tokenchange', hash.replace('#', ''));
        })
        // add change handler for Ext.util.History; when a change in the token
        // occurs, this will fire our controller's event to load the appropriate content
        Ext.util.History.on('change', function (token) {
            me.getAppController().fireEvent('tokenchange', token);
        });
    },
    /*
  * This functions will load controller dynamically and return it first view.
  */
    loadController: function (ctrlName) {
        var me = this,
        ctrl = me.controllers.get(ctrlName); // See if the controller was already loaded

        // If the controller was never loaded before
        if (!ctrl) {
            var ctrl = me.getController(ctrlName); // Dynamically load the controller
        }

        ctrl.init();

        return ctrl;
    },

    /*
     * Update center region of app with passed arguments
     * @param {Ex.app.Controller} centerRef: The reference of controller instance
     * @param {Object} config
     */
    updateCenterRegion: function (ctrlRef, config) {
        var app = RM.app,
            center = ctrlRef.getCenter();

        if (config.controller !== '') {
            ctrl = app.loadController(config.controller);
        }

        // remove all existing component
        center.removeAll(true);
        // add new component
        center.add({
            xtype: config.xtype
        });
    },

    /*
     * Update view in tab panel with passed arguments
     * @param {Ext.tab.Panel} tabPanel: The reference of tab
     * @param {Object} config 
     */
    updateCompInTab: function (tabRef, config) {
        //console.log(tabRef.itemId);
        var app = RM.app,
            comp;

        if (config.controller !== '') {
            ctrl = app.loadController(config.controller);
        }

        comp = Ext.ComponentQuery.query('[xtype=' + config.xtype + ']');

        if (comp.length === 0) {
            // remove all existing componet
            tabRef.removeAll(true);
            // add new componet
            tabRef.add({
                xtype: config.xtype
            });
        }
    }

});
