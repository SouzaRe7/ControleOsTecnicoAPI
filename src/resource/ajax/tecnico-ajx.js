function CarregarMeusDados(){
    let id_user_logado = "27";
    let dados = {
        endpoint: "DetalharMeusDados",
        id_user: id_user_logado
    }
    $.ajax({
        type: "post",
        url: BASE_URL_AJAX("porteiro_tecnico_api"),
        data: JSON.stringify(dados),
        headers:{
            'Content-Type': 'application/json'
        }, success: function(dados_ret){
            //console.log(dados_ret);
            let resultado = dados_ret['result'];
            $("#fuNome").val(resultado.nome);
            $("#empresa").val(resultado.empresa_tecnico);
            $("#fuEmail").val(resultado.login);
            $("#fuFone").val(resultado.fone);
            $("#cep").val(resultado.cep);
            $("#rua").val(resultado.rua);
            $("#bairro").val(resultado.bairro);
            $("#cidade").val(resultado.cidade);
            $("#uf").val(resultado.sigla_estado);
            $("#id_end").val(resultado.id_end);
        }
    }) 
    return false;
}

function AlterarMeusDados(id_form){
    if (NotificarCamposGenerico(id_form)) {
        let id_user_logado = "27";
        //console.log($("#fuNome").val());
        let dados = {
            endpoint: "AlterarTecnico",
            nome_usuario: $("#fuNome").val(),
            login: $("#fuEmail").val(),
            telefone: $("#fuFone").val(),
            cep: $("#cep").val(),
            rua: $("#rua").val(),
            bairro: $("#bairro").val(),
            cidade: $("#cidade").val(),
            uf: $("#uf").val(),
            nome_empresa: $("#empresa").val(),
            id_end: $("#id_end").val(),
            tipo: "3",
            id_user: id_user_logado
        }
        $.ajax({
            type: "post",
            url: BASE_URL_AJAX("porteiro_tecnico_api"),
            data: JSON.stringify(dados),
            headers:{
                'Content-Type': 'application/json'
            }, success: function(dados_ret){
                let resultado = dados_ret['result'];
                if (resultado == '1') {
                    MensagemSucesso();
                }else{
                    MensagemErro();
                }
              
            }
        });    
    }
    return false;
}