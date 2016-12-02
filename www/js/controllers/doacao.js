/// <reference path="../base/base.js" />
/// <reference path="../base/app.js" />
/// <reference path="../base/util.js" />
var _inst;
FlashBuy.doacao = {
    init: function (instituicao) {

        FlashBuy.loading(true);

        instituicao = JSON.parse(instituicao);

        _inst = instituicao;

        FlashBuy.doacao.mostrar(instituicao);


        FlashBuy.loading(false);

    },
    doar: function () {
        FlashBuy.loading(true);

        var user = FlashBuy.util.getUsuario();
        var _descricao = jQuery('#txtDoacao').val();

        var dados = {
            descricao: _descricao,
            data_inicio: '2016-09-08T02:15:24.481Z',
            data_fim: '2016-09-08T02:15:24.481Z',
            id_usuario: user._id,
            id_instituicao: _inst._id,
            created_at: '2016-09-08T02:15:24.481Z'

        }

        //EXECUTA A VERIFICAÇÃO DE SE  HÁ REGISTROS DESSE IMEI NA BASE
        jQuery.ajax({
            type: 'POST',
            async: false,
            data: dados,

            url: 'http://127.0.0.1:5000/doacoes',

            success: function (data) {
                //ANALISA RETORNO          
                if (data.length || data._id) {
                    if (data.length > 0) {
                        data = data[0];
                    }
                    retorno = "Doação efetuada com sucesso!";

                    FlashBuy.doacao.concluir();
                }
            },

            error: function (data) {

                Materialize.toast('Não foi possível concluir a sua doação.', 3000, 'rounded');
            }
        });

        FlashBuy.loading(false);
    },

    mostrar: function (instituicao) {

        var templateHtml = FlashBuy.util.templateUrl(
            'views/doacao.html',
            instituicao
        );

        jQuery('#content').empty();
        jQuery('#content').html(templateHtml);
        jQuery('.materialboxed').materialbox();

        FlashBuy.util.configurarRotasControllers();



    },
    concluir: function () {


        var templateHtml = FlashBuy.util.templateUrl(
          'views/finalDoacao.html',
          _inst
        );

        jQuery('#content').empty();
        jQuery('#content').html(templateHtml);
        jQuery('.materialboxed').materialbox();

    }
};
