function ValidarCampos(n_tela) {

    var ret = true;

    switch (n_tela) {

        case 1:  // 1 referente a tela de setor
            if ($('#nome').val().trim() == '')
                ret = false;
            NotificarCampo('nome');
            break;
        case 2: // 2 referente a tela de modelo 
            if ($('#admNome').val().trim() == '')
                ret = false;
            NotificarCampo('admNome');
            break;
        case 3: // 3 referente a tela de cidade  
            if ($('#admNome').val().trim() == '')
                ret = false;
            NotificarCampo('admNome');
            break;
        case 4:  // 4 referente a tela de novo equipamento
            if ($('#admTipo').val().trim() == '' || $('#admModelo').val().trim() == '' || $('#admIdentificacao').val().trim() == '' || $('#admObs').val().trim() == '')
                ret = false;
            NotificarCampo('admTipo');
            NotificarCampo('admModelo');
            NotificarCampo('admIdentificacao');
            NotificarCampo('admObs');
            break;
        case 5:  // 5 referente a tela de novo estado
            if ($('#admNome').val().trim() == '' || $('#admUf').val().trim() == '')
                ret = false;
            break;
        case 6:  // 6 referente a tela de usuario
            if ($('#admTipo').val().trim() == '' || $('#admSetor').val().trim() == '' || $('#admNome').val().trim() == '' || $('#admSobrenome').val().trim() == '' || $('#admEmail').val().trim() == '' || $('#admFone').val().trim() == '' || $('#admEndereco').val().trim() == '')
                ret = false;
            NotificarCampo('admTipo');
            NotificarCampo('admSetor');
            NotificarCampo('admNome');
            NotificarCampo('admSobrenome');
            NotificarCampo('admEmail');
            NotificarCampo('admFone');
            NotificarCampo('admEndereco');
            break;
        case 7:  // 7 referente a tela de tipo equipamento 
            if ($('#admNome').val().trim() == '')
                ret = false;
            NotificarCampo('admNome');
            break;
        case 8:  // 8 referente a tela de alocar equipamento
            if ($('#admEquipamento').val().trim() == '' || $('#admSetor').val().trim() == '')
                ret = false;
            NotificarCampo('admEquipamento');
            NotificarCampo('admSeto');
            break;
        case 9:  // 9 referente a tela meus dados funcionario 
            if ($('#fuNome').val().trim() == '' || $('#fuEmail').val().trim() == '' || $('#fuFone').val().trim() == '' || $('#fuEndereco').val().trim() == '')
                ret = false;
            NotificarCampo('fuNome');
            NotificarCampo('fuEmail');
            NotificarCampo('fuFone');
            NotificarCampo('fuEndereco');
            break;
        case 10:  // 10 referente a tela mudar senha funcionario
            if ($('#fuSenha').val().trim() == '')
                ret = false;
            NotificarCampo('fuSenha');
            break;
        case 11:  // 11 referente a tela novo chamado
            if ($('#fuEscolhaEp').val().trim() == '' || $('#fuObs').val().trim() == '')
                ret = false;
            NotificarCampo('fuEscolhaEp');
            NotificarCampo('fuObs');
            break;
        case 12:  // 12 referente a tela meus dados tecnico  
            if ($('#tecNome').val().trim() == '' || $('#tecEmail').val().trim() == '' || $('#tecFone').val().trim() == '' || $('#tecEndereco').val().trim() == '')
                ret = false;
            NotificarCampo('tecNome');
            NotificarCampo('tecEmail');
            NotificarCampo('tecFone');
            NotificarCampo('tecEndereco');
            break;
        case 13:  // 13 referente a tela mudar senha tecnico 
            if ($('#tecSenha').val().trim() == '')
                ret = false;
            NotificarCampo('tecSenha');
            break;
        case 14:  // 14 referente a atender chamado tecnico 
            if ($('#tecDataAt').val().trim() == '' || $('#tecNome').val().trim() == '' || $('#tecSetor').val().trim() == '' || $('#tecEquip').val().trim() == '' || $('#tecDesc').val().trim() == '' || $('#tecLaudo').val().trim() == '')
                ret = false;
            NotificarCampo('tecDataAt');
            NotificarCampo('tecNome');
            NotificarCampo('tecSetor');
            NotificarCampo('tecEquip');
            NotificarCampo('tecDesc');
            NotificarCampo('tecLaudo');
            break;
    }
    if (!ret)
        MensagemCamposObrigatorios();
    else
        Load();

    return ret;
}