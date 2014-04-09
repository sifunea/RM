Ext.define('RM.view.admin.employee.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.admin.employee.grid',
    requires: [
        'Ext.toolbar.Paging'
    ],
    store: 'Employees',
    layout: 'fit',
    tripeRows: true,
   // title: 'All Company Structures',
    loadMask: false,
    viewConfig: {
        forcefit: true
    },
    selType: 'rowmodel',
    dockedItems: [
   		{ xtype: 'admin.employee.toolbar' }
    ],

    initComponent: function () {
        var me = this,
    	baseurl = RM.Constants.BASE_URL;
        RM.extension.Loader.loadCss('resources/css/tasks.css');

        me.columns = {
            defaults: {
                draggable: false,
                resizable: false,
                hideable: false
            },
            items: [
        		{
        		    width: 25
        		},
        		{
        		    flex: 30 / 100,
        		    text: 'Name',
        		    dataIndex: 'Name'
        		},
		    	{
		    	    flex: 30 / 100,
		    	    text: 'Description',
		    	    dataIndex: 'Description'
		    	},
		    	{
		    	    xtype: 'actioncolumn',
		    	    width: 25,
		    	    cls: 'tasks-icon-column-header tasks-edit-column-header',
		    	    icon: 'resources/images/edit_task.png',
		    	    // iconCls: 'x-hidden',
		    	    tooltip: 'Edit',
		    	    menuDisabled: true,
		    	    sortable: false,
		    	    handler: Ext.bind(me.handleEditClick, me)
		    	},
                {
                    xtype: 'actioncolumn',
                    width: 25,
                    cls: 'tasks-icon-column-header tasks-delete-column-header',
                    icon: 'resources/images/delete.png',
                    //iconCls: 'x-hidden',
                    tooltip: 'Delete',
                    menuDisabled: true,
                    sortable: false,
                    handler: Ext.bind(me.handleDeleteClick, me)
                }
            ]
        };

        me.bbar = Ext.create('Ext.PagingToolbar', {
            store: 'Employees',
            displayInfo: true,
            displayMsg: 'Displaying records {0} - {1} of {2}',
            emptyMsg: "No records to display"
        });

        me.callParent(arguments);

        me.addEvents(
        	/**
             * @event editclick
             * Fires when an edit icon is clicked
             * @param {Ext.grid.View} view
             * @param {Number} rowIndex
             * @param {Number} colIndex
             * @param {Ext.grid.column.Action} column
             * @param {EventObject} e
             */
            'editclick',

            /**
             * @event deleteclick
             * Fires when a delete icon is clicked
             * @param {Ext.grid.View} view
             * @param {Number} rowIndex
             * @param {Number} colIndex
             * @param {Ext.grid.column.Action} column
             * @param {EventObject} e
             */
            'deleteclick'
        );
    },

    /**
     * Handles a click on the edit icon
     * @private
     * @param {Ext.grid.View} gridView
     * @param {Number} rowIndex
     * @param {Number} colIndex
     * @param {Ext.grid.column.Action} column
     * @param {EventObject} e
     */
    handleEditClick: function (gridView, rowIndex, colIndex, column, e) {
        // Fire a "deleteclick" event with all the same args as this handler
        //console.log("gridView edit");
        this.fireEvent('editclick', gridView, rowIndex, colIndex, column, e);
    },

    /**
     * Handles a click on a delete icon
     * @private
     * @param {Ext.grid.View} gridView
     * @param {Number} rowIndex
     * @param {Number} colIndex
     * @param {Ext.grid.column.Action} column
     * @param {EventObject} e
     */
    handleDeleteClick: function (gridView, rowIndex, colIndex, column, e) {
        // Fire a "deleteclick" event with all the same args as this handler
        this.fireEvent('deleteclick', gridView, rowIndex, colIndex, column, e);
    }
});
