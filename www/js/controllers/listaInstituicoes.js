/// <reference path="../base/base.js" />
/// <reference path="../base/app.js" />
/// <reference path="../base/util.js" />

FlashBuy.listaInstituicoes = {
    init: function () {
        //método para fazer a listagem
        FlashBuy.listaInstituicoes.Instituicoes();
    },
    //metodo para comunicar com o web service.
    Instituicoes: function () {
        FlashBuy.loading(true);
        jQuery.get('http://localhost:5000/instituicoes')
        .success(function (data) {
            FlashBuy.loading(false);
            var htmlTemplate = FlashBuy.util.getHtml('views/listaInstituicoesTemplate.html');

            data.forEach(function (model) {
                //Valida se tem imagem
            
                model.imgMime = "img/semImagem.png";
                
                model.instituicao = JSON.stringify(model);
         

                var htmlRenderizado = FlashBuy.util.templateHtml(htmlTemplate, model);

                jQuery('#divInstituicao').append(htmlRenderizado);
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
