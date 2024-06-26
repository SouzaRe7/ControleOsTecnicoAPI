function MeuPerfil(){
    let dadosAPI = GetTnkValue();
    let nome = '<span style="color: #007bff;">'+ dadosAPI.nome_usuario + '</span>';
    $("#divNomePerfil").html(nome);
}
function CarregarMeusDados(){
    let dadosAPI = GetTnkValue();
    if (!dadosAPI.id_tecnico){
        Sair();
    }
    let id_user_logado = dadosAPI.id_tecnico;
    //let id_user_logado = "27";
    let dados = {
        endpoint: "DetalharMeusDados",
        id_user: id_user_logado
    }
    $.ajax({
        type: "post",
        url: BASE_URL_AJAX("porteiro_tecnico_api"),
        data: JSON.stringify(dados),
        headers:{
            'Authorization': 'Bearer ' + GetTnk(),
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
        let dadosAPI = GetTnkValue();
        let id_user_logado = dadosAPI.id_tecnico;
        //let id_user_logado = "27";
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
                'Authorization': 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            }, success: function(dados_ret){
                let resultado = dados_ret['result'];
                if (resultado == '1') {
                    MensagemSucesso();
                } else {
                    MensagemErro();
                }
              
            }
        });    
    }
    return false;
}
function EncerrarChamado(id_form){
    if(NotificarCamposGenerico(id_form)){
        let dadosAPI = GetTnkValue();
        let id_user_logado = dadosAPI.id_tecnico;
        //let id_user_logado = "27";
        let dados = {
            endpoint: "EncerrarAtendimentoChamadoAPI",
            id_tecnico_encerramento: id_user_logado,
            id_chamado: $("#modalIdChamado").val(),
            alocar_id: $("#alocar").val(),
            laudo: $("#Laudo").val().trim()
        }
        console.log(id_user_logado);
        $.ajax({
            type: "post",
            url: BASE_URL_AJAX("porteiro_tecnico_api"),
            data: JSON.stringify(dados),
            headers:{
                'Authorization': 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            }, success: function(dados_ret){
                
                let resultado = dados_ret['result'];
                if (resultado == '1') {
                    MensagemSucesso();
                    FiltaraChamado();
                    FecharModal("modal-finalizar");
                    LimparCamposGenerico(id_form);
                }else{
                    MensagemErro();
                }
              
            }
        })
    }
    return false;
}

function AtenderChamado(){
    let dadosAPI = GetTnkValue();
    let id_user_logado = dadosAPI.id_tecnico;
    //let id_user_logado = "27";
    let dados = {
        endpoint: "AtualizarAtendimentoChamadoAPI",
        id_tecnico_atendimento: id_user_logado,
        id_chamado:$("#id_chamado").val()
    }
    $.ajax({
        type: "post",
        url: BASE_URL_AJAX("porteiro_tecnico_api"),
        data: JSON.stringify(dados),
        headers:{
            'Authorization': 'Bearer ' + GetTnk(),
            'Content-Type': 'application/json'
        }, success: function(dados_ret){
            let resultado = dados_ret['result'];
            if (resultado == '1') {
                MensagemSucesso();
                FiltaraChamado();
                FecharModal("modal-atander");

            }else{
                MensagemErro();
            }
        }
    });
    return false;
}

function VerificarSenhaAtual(id_form){
    if(NotificarCamposGenerico(id_form)){
        let dadosAPI = GetTnkValue();
        let id_user_logado = dadosAPI.id_tecnico;
        //var id_user_logado = "27";
        let dados = {
            endpoint: "VerificarSenhaAtualAPI",
            id: id_user_logado,
            senha: $("#fuSenhaAtual").val().trim()
        }

        $.ajax({
            type: "post",
            url: BASE_URL_AJAX("porteiro_tecnico_api"),
            data: JSON.stringify(dados),
            headers: {
                'Authorization': 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function(dados_ret){
                //alert("aqui");
                console.log(dados_ret);
                var resultado = dados_ret['result'];
                if(resultado == -1){
                    MensagemGenerica("Senha atual não confere");
                }else if(resultado == 1){
                    $("#divSenhaAtual").hide();
                    $("#divSenhaNova").show();
                    LimparCampos(id_form);
                }else if(resultado == -1000){
                    ClearTnk();
                    ChamarOutraPagina("login");
                }
            }
        })
    }
    return false;
}

function AtualizarSenha(id_form){
    if(NotificarCamposGenerico(id_form)){
        let dadosAPI = GetTnkValue();
        let id_user_logado = dadosAPI.id_tecnico;
        //console.log(id_user_logado);
       //var id_user_logado = "27";
        let dados = {
            endpoint: "AtualizarSenhaAPI",
            id: id_user_logado,
            senha: $("#fuSenha").val().trim(),
            repetir_senha: $("#fuReSenha").val().trim()
        }
        $.ajax({
            type: "post",
            url: BASE_URL_AJAX("porteiro_tecnico_api"),
            data: JSON.stringify(dados),
            headers: {
                'Authorization': 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function(dados_ret){
                let resultado = dados_ret['result'];
                if (resultado == -2){
                    MensagemGenerica("A senha deverá conter no mínimo 6 caracteres");
                } else if (resultado == -3){
                    MensagemGenerica("O campo senha e repetir senha não conferem");
                } else if (resultado == 1){
                    MensagemSucesso();
                    $("#divSenhaNova").hide();
                    $("#divSenhaAtual").show();
                    $("#fuSenha").val('');
                } else if (resultado == -1){
                    MensagemErro();
                } else if (resultado == -1000){
                    ClearTnk();
                    ChamarOutraPagina("login");
                }
            }
        })
    }
    return false;
}

function ValidarAcesso(id_form){
    if(NotificarCamposGenerico(id_form)){
        let dados = {
            login: $("#login").val(),
            senha: $("#senha").val(),
            endpoint: "AutenticarAPI"
        }
        $.ajax({
            type: "post",
            url: BASE_URL_AJAX("porteiro_tecnico_api"),
            data: JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json'
            },
            success: function(dados_ret){
                //console.log(dados_ret);
                let resultado = dados_ret['result'];
                console.log(resultado);
                if (resultado == -3){
                    MensagemGenerica("Usuario não autorizado");
                }else{
                    AddTnk(resultado);
                    location = "meus_chamados.php";
                }
            }
        })
    }
    return false;
}

function FiltaraChamado(){
    let dados = {
        endpoint: "FiltrarChamadoAPI",
        situacao: $("#situacao").val()
    }
    $.ajax({
        type: "POST",
        url: BASE_URL_AJAX("porteiro_tecnico_api"),
        data: JSON.stringify(dados),
        headers:{
            //'Authorization': 'Bearer ' + GetTnk(),
            'Content-Type': 'application/json'
        },
        success: function(dados_ret){
            
            let ret_chamado = dados_ret['result'];
            console.log(ret_chamado);
            if (ret_chamado != ""){
                let table_start = '';
                let table_head = '';
                let table_data = '';
                let table_end = '';

                table_start = '<table class="table table-hover" id="divTable"><thead>';
                    table_head = '<tr>';
                    table_head += '<th>Ação</th>';
                    table_head += '<th>Nome</th>';
                    table_head += '<th>Data abertura</th>';
                    table_head += '<th>Equipamento</th>';
                    table_head += '<th>Descrição do Problema</th>';
                    table_head += '<th>Status</th>';
                    table_head += '</tr></thead><tbody>';
                $(ret_chamado).each(function(){
                    table_data += '<tr>';
                    table_data += '<td>';
                    if(this.data_adendimento != null){
                        table_data += '<button onclick="CarregarVerMais('+"'"+this.data_adendimento+"'"+','+"'"+ this.data_encerramento+"'"+','+"'"+ this.tecnico_nome+"'"+','+"'"+ this.nome_tec_encerramento+"'"+','+"'"+ this.laudo_tecnico+"'"+')" type="button" data-toggle="modal" data-target="#modal-ver-mais" class="btn btn-block bg-gradient-primary btn-xs">Ver mais</button>';
                    }
                    if(this.data_adendimento == null){
                        table_data += '<button onclick="CarregarAtenderChamado(' + this.id_chamado + ',' + "'" + this.identificacao + ' / Modelo: '  + this.nome_modelo + ' / ' + this.nome_tipo + "'" + ')" data-toggle="modal" data-target="#modal-atander" type="button" class="btn btn-block bg-gradient-warning btn-xs">Atender</button>';
                    }else if(this.data_adendimento != null && this.data_encerramento == null){
                        table_data += '<button onclick="CarregarEncerramentoChamado(' + this.id_chamado +','+ this.id_alocar + ',' + "'" + this.identificacao + ' / Modelo: '  + this.nome_modelo + ' / ' + this.nome_tipo + "'" +')" type="button" data-toggle="modal" data-target="#modal-finalizar" class="btn btn-block bg-gradient-success btn-xs">Finalizar</button>';
                    }
                    table_data += '</td>';
                    table_data += '<td>' + this.nome_func + '</td>';
                    table_data += '<td>' + this.data_abertura + '</td>';
                    table_data += '<td>' + this.identificacao + ' / Modelo: '  + this.nome_modelo + ' / ' + this.nome_tipo + '</td>';
                    table_data += '<td>' + this.descricao_problema + '</td>';
                    table_data += '<td>'; 
                    if(this.data_adendimento == null){
                        table_data += '<span class="badge badge-warning">Aguardando</span>'; 
                    }else if(this.data_adendimento != null && this.data_encerramento == null){
                        table_data += '<span class="badge badge-primary">Iniciado</span>';
                    }else if(this.data_adendimento != null && this.data_encerramento != null){
                        table_data += '<span class="badge badge-success">Concluído</span>';
                    }
                    table_data += '</td>';
                    table_data += '</tr>';
                })
                table_end = '</tbody></table>';
                // Vaso é toda as partes da tabela
                var vaso = table_start + table_head + table_data + table_end;
                $("#tableResult").html(vaso);
                $("#divChamado").show();
            }else{
                MensagemGenerica("Não foi encontrado nenhum chamado");
                $("#divChamado").hide();
            }
        }
    })
}

function VerificarEmail(emailTela)
{ 
    if(emailTela != "")
    { 
        let dadosAPI = GetTnkValue();
        let id_user_logado = dadosAPI.id_tecnico;
        let dados = {
            endpoint: "VerificarEmailAPI",
            fuEmail: $("#fuEmail").val(),
            id: id_user_logado
        }
        $.ajax({
            type: 'post',
            url: BASE_URL_AJAX("porteiro_tecnico_api"),
            data: JSON.stringify(dados),
            headers:{
                'Authorization': 'Bearer ' + GetTnk(),
                'Content-Type': 'application/json'
            },
            success: function(ret){
                if(ret['result'] == false){
                    MensagemGenerica("O e-mail " + emailTela + " já existe!");
                    $("#fuEmail").val('');
                    $("#fuEmail").focus();
                }
            }
        })
    }
}

function limpa_formulario_cep() {
    // Limpa valores do formulário de cep.
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
}
function TravarCamposEndereco(readonly){
    $("#cidade").attr("readonly",readonly);
    $("#uf").attr("readonly",readonly);  
}
//Quando o campo cep perde o foco.
function BuscarCep() {

    //Nova variável "cep" somente com dígitos.
    var cep = $("#cep").val().replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            $("#rua").val("...");
            $("#bairro").val("...");
            $("#cidade").val("...");
            $("#uf").val("...");

            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#rua").val(dados.logradouro);
                    $("#bairro").val(dados.bairro);
                    $("#cidade").val(dados.localidade);
                    $("#uf").val(dados.uf);
                    TravarCamposEndereco(true);
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    limpa_formulario_cep();
                    TravarCamposEndereco(false);
                }
            });
        } //end if.
        else {
            //cep é inválido.
            limpa_formulario_cep();
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulario_cep();
    }
}
