Ext.define('TXG.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onCancelBtnClick: function(){
        this.getView().down('form').getForm().reset();
    },

    onLoginBtnClick: function(){
        var data = this.getViewModel().getData();
        console.log(location);
        /*Ext.Msg.alert('Login', Ext.String.format('Login: {0}<br> Password: {1}', data.login, data.password));*/
    }
});