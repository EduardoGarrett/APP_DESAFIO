/// <reference path="../base/base.js" />
/// <reference path="../base/app.js" />
/// <reference path="../base/util.js" />

FlashBuy.home = {
    init: function () {
        console.log('home init');
        //MOSTRA BARRA VERTICAL QUE SÓ DEVE APARECER APÓS O LOGIN
        jQuery("#barraVertical").show();
        //PREENCHE INFORMAÇÕES NA HOME
        var usuario = FlashBuy.util.getUsuario();
        var nome = usuario.fullname + '.';  
        jQuery("#nomeHome").text(nome);
 
    },
    ready: function () {
        Materialize.toast('seja bem vindo ao AjudaBR!', 4000);
        console.log('home ready');
    }
};
