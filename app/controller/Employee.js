Ext.define('RM.controller.Employee', {
    extend: 'RM.controller.Base',
    views: [
        'admin.employee.Main',
        'admin.employee.Grid',
        'admin.employee.Toolbar',
        'admin.employee.Window',
        'admin.employee.Form'
    ],
    stores: ['Employees'],
    models: ['Employee'],
    refs: [
        {
            ref: 'toolbar',
            selector: '[xtype=admin.employee.toolbar]'
        },
        {
            ref: 'mainGrid',
            selector: '[xtype=admin.employee.grid]'
        },
        {
            ref: 'skillWindow',
            selector: '[xtype=admin.employee.window]',
            xtype: 'admin.employee.window',
            autoCreate: true
        }
    ],

    init: function () {
        var me = this;

        me.control({
            '#new-employees-btn': {
                click: me.handleNewBtnClick
            },
            'grid[xtype=admin.employee.grid]': {
                editclick: me.handleEditIconClick,
                deleteclick: me.handleDeleteIconClick
            },
            '#cancel-employees-btn': {
                click: me.hideSkillWindow
            },
            '#save-employees-btn': {
                click: me.handleSaveBtnClick
            }
        });
    },

    handleEditIconClick: function (view, rowIndex, colIndex, column, e) {
        this.showSkillWindow(view.getRecord(view.findTargetByEvent(e)));
    },

    showSkillWindow: function(skill){
        var me = this,
            skillWindow = me.getSkillWindow();
        skillWindow.setTitle("Edit Employee " + skill.get('Name'));
        skillWindow.down('form').loadRecord(skill);
        skillWindow.show();
    },

    handleDeleteIconClick: function (view, rowIndex, colIndex, column, e) {
        this.deleteSkill(this.getQualificationsStore().getAt(rowIndex));
    },
    handleNewBtnClick: function (s, r) {
        this.showNewWindow();
    },

    deleteSkill: function (skill, successCallback) {
        var me = this;
        Ext.Msg.show({
            title: 'Delete Employee ?',
            msg: 'Are you sure you want to delete this record?',
            button: Ext.Msg.YESNO,
            fn: function (respone) {
                if (respone == 'yes') {
                    skill.destroy({
                        succes: function (skill, operation) {
                            me.getQualificationsStore().remove(skill);
                            me.refreshFiltersAndCount();
                            if (successCallback) {
                                successCallback();
                            }
                        },
                        failure: function (company, operation) {
                            var error = operation.getError(),
                                msg = Ext.isObject(error) ? error.status + ' ' + error.statusText : error;

                            Ext.MessageBox.show({
                                title: 'Delete Employee Failed',
                                msg: msg,
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        }
                    });
                }
            }
        });
    },

    resetForm: function () {
        var me = this,
        skillWindow = me.getSkillWindow();
        skillWindow.down('form').getForm().reset();
    },

    showNewWindow: function () {
        var me = this,
            skillWindow = me.getSkillWindow();
        //companyWindow.clearListeners();

        // Set the title
        me.resetForm();
        skillWindow.setTitle('New Employee');
        skillWindow.show();
    },

    hideSkillWindow: function (button, e) {
        this.getSkillWindow().close();
    },

    handleSaveBtnClick: function () {
        var me = this,
            skillWindow = me.getSkillWindow();
        grid = me.getMainGrid();
    }


});
