Ext.define('TXG.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onCancelBtnClick: function(){
        this.getView().down('form').getForm().reset();
    },

    onLoginBtnClick: function(){
        var data = this.getViewModel().getData();
        console.log(location);
        Ext.Ajax.request({
            url: 'http://localhost:8889/user/login/',
            params: data,
            cors: true,
            paramsAsJson: true,
            /*withCredentials: true,*/
            success: function(response){
                var responseJson = JSON.parse(response.responseText);
                console.log(responseJson);
                if(responseJson.success){
                    Ext.Msg.alert('Login', Ext.String.format('Login: {0}<br> Password: {1}', data.login, data.password));
                }
                
            }
        });
    }
});