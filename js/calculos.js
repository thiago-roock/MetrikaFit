$(window).on("load", function () 
{
    $('#ano').text(new Date().getFullYear());

    $('#BotaoCalcular').click(function () 
    {
        var PesoCorporal = $('#pesoCorporal').val();

        if (isNaN(PesoCorporal)) 
        {
            alert("preencha o campo Peso Corporal com números");
            $('#pesoCorporal').val("");
            $('#pesoCorporal').focus();
        } 
        else 
        {
            //macros nutrientes
            var QtdeProteinas = CalcularQuantidadeProteinas(PesoCorporal);
            $('#proteinas').html("Proteínas: <b>" + QtdeProteinas+ "g</b>");

            var QtdeCarboidratos = CalcularQuantidadeCarboidratos(PesoCorporal);
            $('#carboidratos').html("Carboidratos: <b>" + QtdeCarboidratos+ "g</b>");

            $('#fibras').html("Fibras: <b>25g a 30g</b>" );

            var QtdeGorduras = CalcularQuantidadeGorduras(PesoCorporal);
            $('#gorduras').html("Gorduras: <b>" + QtdeGorduras + "g</b>");


            //suplementos
            var QtdeCreatina = CalcularQuantidadeCreatina(PesoCorporal);
            $('#creatina').html("Creatina: <b>" + QtdeCreatina + "g</b>");

            $('#vitaminaC').html("Vitamina C: <b>3000g a 5000g</b>");

            $('#cafeina').html("Cafeína: <b>200mg a 400mg</b>");


            var QtdeVitaminaB6 = CalcularQuantidadeVitaminaB6(QtdeProteinas);
            $('#vitaminaB6').html("Vitamina B6: <b>" + QtdeVitaminaB6 + "mg</b>");

            var QtdeVitaminaD = CalcularQuantidadeVitaminaD();
            $('#vitaminaD').html("Vitamina D: <b>" + QtdeVitaminaD + " UI</b>");

            //agua
            var QtdeAgua = CalcularQuantidadeAgua(PesoCorporal);
            $('#agua').html("Água: <b>" + QtdeAgua + " litros</b>");
        }

    });

    function CalcularQuantidadeProteinas(pesoCorporal) 
    {
        var Total = 0;

        Total = pesoCorporal * 2;

        return Total;
    }

    function CalcularQuantidadeCarboidratos(pesoCorporal) 
    {
        var Total = 0;

        Total = pesoCorporal * 3;

        return Total;
    }
   
    function CalcularQuantidadeGorduras(pesoCorporal) 
    {
        var Total = 0;

        Total = pesoCorporal * 1;

        return Total;
    }

    function CalcularQuantidadeCreatina(pesoCorporal) 
    {
        var Total = 0;

        Total = 0.07 * pesoCorporal;

        return ArredondamentoDosCalculos(Total);
    }


    function CalcularQuantidadeVitaminaB6(proteinaTotal) 
    {
        var Total = 0;

        Total = proteinaTotal * 0.02;

        return ArredondamentoDosCalculos(Total);
    }

    function CalcularQuantidadeVitaminaD() 
    {
        var Total = 2000;

        return Total;
    }

    function CalcularQuantidadeAgua(pesoCorporal) 
    {
        var Total = 0;

        Total = 35 * pesoCorporal;

        return ArredondamentoDosCalculos(Total);
    }

    function ArredondamentoDosCalculos(ValorDosagem) 
    {
        var ValorArredondado = 0;
        
        var casasDecimais = ValorDosagem.toFixed(1).split(".")[1] / 10;
        console.log("casas decimais:" + casasDecimais);
        if(casasDecimais == 0){
            ValorArredondado = ValorDosagem;
        }
        else if (casasDecimais >= 0.1 && casasDecimais <= 0.4) {
            ValorArredondado = Math.floor(ValorDosagem);
        }
        else if (casasDecimais == 0.5) {
            ValorArredondado = Math.floor(ValorDosagem);
        }
        else if (casasDecimais >= 0.6 && casasDecimais <= 0.9) {
            ValorArredondado = Math.ceil(ValorDosagem);
        }
        else {
            ValorArredondado = Math.ceil(ValorDosagem);
        }

        return ValorArredondado;
    }

});

