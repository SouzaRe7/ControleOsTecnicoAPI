<div class="modal fade" id="modal-ver-mais">
    <div class="modal-dialog">
        <div class="modal-content bg-primary">
            <div class="modal-header">
                <h4 class="modal-title">Detalhes do Chamado</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>Data de Atendimento</label>
                        <input id="modalDtAtendimento" class="form-control" readonly>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Data de Encerramento</label>
                        <input id="modalDtEncerramento" class="form-control" readonly>
                    </div>
                    <div class="form-group col-md-12">
                        <label>Técnico que Atendeu</label>
                        <input id="modalTecnicoAtendimento" class="form-control" readonly>
                    </div>
                    <div class="form-group col-md-12">
                        <label>Técnico que Encerrou</label>
                        <input id="modalTecnicoEncerramento" class="form-control" readonly>
                    </div>
                    <div class="form-group col-md-12">
                        <label>Laudo</label>
                        <textarea id="modalLaudo" class="form-control" readonly></textarea>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
                <button style="margin-left: auto;" type="button" class="btn btn-outline-dark" data-dismiss="modal">Fechar</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->