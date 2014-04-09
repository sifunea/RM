Ext.define('RM.controller.Qualifications', {
    extend: 'RM.controller.Base',
    views: [
        'admin.qualifications.Main',
        'admin.qualifications.skill.Grid',
        'admin.qualifications.skill.Toolbar',
        'admin.qualifications.skill.Window',
        'admin.qualifications.skill.Form'
    ],
    stores: ['Qualifications'],
    models: ['Qualifications'],
    refs: [
        {
            ref: 'toolbar',
            selector: '[xtype=admin.qualifications.skill.toolbar]'
        },
        {
            ref: 'mainGrid',
            selector: '[xtype=admin.qualifications.skill.grid]'
        },
        {
            ref: 'skillWindow',
            selector: '[xtype=admin.qualifications.skill.window]',
            xtype: 'admin.qualifications.skill.window',
            autoCreate: true
        }
    ],

    init: function () {
        var me = this;

        me.control({
            '#new-skills-btn': {
                click: me.handleNewBtnClick
            },
            'grid[xtype=admin.qualifications.skill.grid]': {
                editclick: me.handleEditIconClick,
                deleteclick: me.handleDeleteIconClick
            },
            '#cancel-skills-btn': {
                click: me.hideSkillWindow
            },
            '#save-skills-btn': {
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
        skillWindow.setTitle("Edit Skill " + skill.get('Name'));
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
            title: 'Delete Skill?',
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
                                title: 'Delete Skill Failed',
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
        skillWindow.setTitle('New Skill');
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
