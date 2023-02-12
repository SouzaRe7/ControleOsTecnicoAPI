<div class="modal fade" id="modal-finalizar">
    <div class="modal-dialog">
        <div class="modal-content bg-success">
            <div class="modal-header">
                <h4 class="modal-title">Encerramento do Chamado</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="modalIdChamado">
                <input type="hidden" id="alocar">
                <label>Nome do equipamemto: </label> <span id="NomeEquipamento"></span><br>
                <label>Laudo</label>
                <textarea id="Laudo" class="form-control obg" maxlength="500" placeholder="Laudo da manutenção"></textarea>
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancelar</button>
                <button onclick="return EncerrarChamado('formFinalizar')" name="btnAlterar" type="submit" class="btn btn-outline-dark">Finalizar</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->