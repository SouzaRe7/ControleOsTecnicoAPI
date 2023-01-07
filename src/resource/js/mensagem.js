function RetornarMsg(n) {

    var msg = "";

    switch (n) {
        
        case -5:

            msg = "Senha invalida!";

            break;
        case -4:

            msg = "O login é invalido!";

            break;
        case -3:

            msg = "Não foi encontrado nenhum registro!";

            break;
        case -2:

            msg = "Item em uso!";

            break;
        case -1:

            msg = "Ocorreu um erro tente mais tarde!";

            break;
        case 0:

            msg = "Preencher o(s) campo(s) obrigatório(s)";

            break;
        case 1:

            msg = "Ação realizado com sucesso";

            break;

    }
    return msg;
}
function MensagemSenhaInvalida() {
    toastr.warning(RetornarMsg(-5));
}
function MensagemLoginInvalida() {
    toastr.warning(RetornarMsg(-4));
}
function MensagemVazio() {
    toastr.info(RetornarMsg(-3));
}
function MensagemExcluirUso() {
    toastr.info(RetornarMsg(-2));
}
function MensagemErro() {
    toastr.error(RetornarMsg(-1));
}
function MensagemCamposObrigatorios() {
    toastr.warning(RetornarMsg(0));
}
function MensagemSucesso() {
    toastr.success(RetornarMsg(1));
}
function MensagemGenerica(texto){
    toastr.info(texto);
}