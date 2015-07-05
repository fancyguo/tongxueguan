Ext.define('TXG.view.Login', {
    extend: 'Ext.window.Window',
    requires: [
        'TXG.view.LoginModel',
        'TXG.view.LoginController'
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
            itemId: 'cancel',
            text: TXG.locale.CANCEL,
            handler: 'onCancelBtnClick'
        },
        {
            itemId: 'login',
            text: TXG.locale.LOGIN,
            handler: 'onLoginBtnClick'
        }
    ]
});