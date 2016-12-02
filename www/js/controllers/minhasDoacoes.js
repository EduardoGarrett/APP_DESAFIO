/// <reference path="../base/base.js" />
/// <reference path="../base/app.js" />
/// <reference path="../base/util.js" />

FlashBuy.minhasDoacoes = {
    init: function () {
        //método para fazer a listagem
        FlashBuy.minhasDoacoes.doacoes();
    },
    //metodo para comunicar com o web service.
    doacoes: function () {

        var user = FlashBuy.util.getUsuario();

        FlashBuy.loading(true);
        jQuery.get('http://localhost:5000/doacoes/' + user._id)
        .success(function (data) {
            FlashBuy.loading(false);
            var htmlTemplate = FlashBuy.util.getHtml('views/minhasDoacoesTemplate.html');

            data.forEach(function (model) {
                //Valida se tem imagem

               
                var htmlRenderizado = FlashBuy.util.templateHtml(htmlTemplate, model);

                jQuery('#divDoacao').append(htmlRenderizado);
            });
            FlashBuy.util.configurarRotasControllers();
        })
        .error(function () {
            FlashBuy.loading(false);
            FlashBuy.erroAjax();
            console.error(arguments);
        });
    }
};
