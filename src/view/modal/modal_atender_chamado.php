<div class="modal fade" id="modal-atander">
    <div class="modal-dialog">
        <div class="modal-content bg-warning">
            <div class="modal-header">
                <h4 class="modal-title">Manutenção do Equipamento</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="id_chamado">
                <label>Nome do equipamemto: </label> <span id="modalEquipamento"></span><br>
            </div>
            <center><label>Deseja iniciar a manutenção do equipamento?</label></center>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancelar</button>
                <button onclick="return AtenderChamado()" name="btnAlterar" type="submit" class="btn btn-outline-dark">Sim</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->