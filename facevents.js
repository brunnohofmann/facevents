function facevents(id, token){

    $(".facedata").html('<input type="text" value="" class="id_event form-control" required=""><br>'+
            '<select class="type form-control" required="">'+
            '<option>Selecione uma categoria</option>'+
            '<option value="invited">Convidados</option>'+
            '<option value="attending">Confirmados</option>'+
            '<option value="maybe">Talvez</option>'+
            '<option value="declined">Não vão</option>'+
            '<option value="noreply">Não responderam</option>'+
        '</select>'+
        '<input type="submit" class="btn btn-large btn-block btn-primary" value="Descobrir"/>');


    $(".facedata").submit(function(){
        
        var id_evento = $(".id_event").val();
        var tipo = $(".type").val();
        var resultado = "";
        var quantidade = 0;

        jQuery.getJSON(
            "https://graph.facebook.com/"+id_evento+"/"+tipo+"?access_token=1397133740555718|358ae752274cddfa67a8b770177c085b",
            function (data) {
                $(".result_face").html("");//limpando o conteudo da div
                data.data.forEach(function(cada_pessoa){
                    resultado += "<a class='user' href='https://www.facebook.com/"+cada_pessoa.id+"' target='_blank' title='"+cada_pessoa.name+"' ><img src='https://graph.facebook.com/"+cada_pessoa.id+"/picture?type=square' width='90'/></a>";
                    quantidade++;
                });

                $(".result_face").html(resultado);
            }
        );
        return false;


    });
}