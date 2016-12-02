/// <reference path="../base/base.js" />
/// <reference path="../base/app.js" />
/// <reference path="../base/util.js" />
var _instituicao;

FlashBuy.descricaoInstituicao = {
    init: function (instituicao) {

        FlashBuy.loading(true);

        _instituicao = instituicao;

        instituicao = JSON.parse(instituicao);

        instituicao.modelo = JSON.stringify(instituicao);

     

        FlashBuy.descricaoInstituicao.mostrar(instituicao);
    },
    mostrar: function (instituicao) {

        var templateHtml = FlashBuy.util.templateUrl(
            'views/descricaoInstituicao.html',
            instituicao
        );

        jQuery('#content').empty();
        jQuery('#content').html(templateHtml);
        jQuery('.materialboxed').materialbox();

        FlashBuy.util.configurarRotasControllers();
    
        FlashBuy.loading(false);

    }
};
