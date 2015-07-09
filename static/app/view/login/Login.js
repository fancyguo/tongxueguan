Ext.define('TXG.view.login.Login', {
    extend: 'Ext.window.Window',
    requires: [
        'TXG.view.login.LoginModel',
        'TXG.view.login.LoginController'
    ],
    viewModel: {type: 'login'},
    controller: 'login',
    alias: 'widget.login',
    title: TXG.locale.LOGIN,
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            defaults: {
                xtype: 'textfield'
            },
            items: [
                {
                    itemId: 'login',
                    fieldLabel: TXG.locale.LOGIN,
                    bind: {
                        value: '{login}'
                    }
                },
                {
                    itemId: 'password',
                    inputType: 'password',
                    fieldLabel: TXG.locale.PASSWORD,
                    bind: {
                        value: '{password}'
                    }
                }
            ]
        }
    ],
    bbar: [
        '->',
        {
            itemId: 'login',
            text: TXG.locale.LOGIN,
            handler: 'onLoginBtnClick'
        },
        {
            itemId: 'cancel',
            text: TXG.locale.CANCEL,
            handler: 'onCancelBtnClick'
        }
    ]
});