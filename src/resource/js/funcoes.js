function Load() {
    $("#divLoad").addClass("overlay dark").html('<div class="overlay dark"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>');
}
function RemoverLoad() {
    $("#divLoad").removeClass("overlay dark").html('');
}
function BASE_URL_AJAX(file_ajax) {
    return "../resource/ajax/" + file_ajax + ".js";
}
function ChamarOutraPagina(pagina){
    window.location.replace(pagina + ".php");
}
function NotificarCampo(nome_id) {
    if ($("#" + nome_id).val().trim() == '')
        $("#" + nome_id).addClass("is-invalid");
    else
        $("#" + $nome_id).removeClass("is-invalid").addClass("is-valid");
}
function NotificarCamposGenerico(form_id) {
    var ret = true;
    $("#" + form_id + " input, select, textarea ").each(function () {
        if ($(this).hasClass("obg")) {
            if ($(this).val().trim() == "") {
                ret = false;
                $(this).addClass("is-invalid");
            } else {
                $(this).removeClass("is-invalid").addClass("is-valid");
            }
        }
    })
    if (!ret)
        MensagemCamposObrigatorios();
    else
        Load();
    return ret;
}
function LimparCamposGenerico(form_id) {

    $("#" + form_id + " input, select, textarea ").each(function () {
        if ($(this).hasClass("obg")) {
            $(this).val('');
        }
        if($(this).hasClass("is-invalid")){
            $(this).removeClass("is-invalid");
        }else{
            $(this).removeClass("is-valid");
        }
    })
}
function LimparNotificarCamposGenerico(form_id){
    $("#" + form_id + " input, select, textarea ").each(function () {
        $(this).removeClass("is-invalid");
        $(this).removeClass("is-valid");
    })
}