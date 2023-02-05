<?php
require_once dirname(__DIR__, 2) . '/vendor/autoload.php';
?>
<!DOCTYPE html>
<html>

<head>
    <?php include_once PATH_URL . '/template/_includes/_head.php' ?>
</head>

<body class="hold-transition sidebar-mini">
    <!-- Site wrapper -->
    <div class="wrapper">
        <?php
        include_once PATH_URL . '/template/_includes/_topo.php';
        include_once PATH_URL . '/template/_includes/_menu.php';
        ?>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Meus chamados</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Técnico</a></li>
                                <li class="breadcrumb-item active">Chamados</li>
                            </ol>
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">

                <!-- Default box -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Consulte todos seus chamados e acompanhe os atendimentos</h3>
                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i class="fas fa-minus"></i></button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label>Escolha a situação</label>
                                <select id="situacao" name="situacao" class="form-control">
                                <option value="<?= SITUACAO_TODOS?>">Todos</option>
                                <option value="<?= SITUACAO_EM_ABERTO?>">Em Aberto</option>
                                <option value="<?= SITUACAO_EM_ATENDIMENTO?>">Em Atendimento</option>
                                <option value="<?= SITUACAO_ENCERRADO?>">Encerrado</option>
                            </select>
                            </div>
                            <div class="form-group col-md-4">
                                <button name="btnBuscar" onclick="FiltaraChamado()" class="btn btn-block bg-gradient-primary">Buscar</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body ocultar" id="divChamado">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Resultado encontrado</h3>
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body table-responsive p-0">
                                        <table class="table table-hover" id="tableResult">
                                            
                                        </table>
                                    </div>
                                    <?php include_once 'modal/modal_ver_mais.php'; 
                                          include_once 'modal/modal_atender_chamado.php'; ?>
                                    <form method="POST" action="meus_chamados.php" id="formFinalizar">
                                        <?php include_once 'modal/modal_finalizar_chamado.php'; ?>
                                    </form>      
                                    <!-- /.card-body -->
                                </div>
                                <!-- /.card -->
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.card -->

            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <?php include_once PATH_URL . '/template/_includes/_footer.php' ?>
        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->

    <?php include_once PATH_URL . '/template/_includes/_script.php' ?>
    <script src="../resource/ajax/tecnico-ajx.js"></script>
</body>

</html>