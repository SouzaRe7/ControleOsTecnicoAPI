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
                            <h1>Meus dados</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Funcionário</a></li>
                                <li class="breadcrumb-item active">Meus dados</li>
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
                        <h3 class="card-title">Aqui você poderá cadastrar seus dados</h3>
                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i class="fas fa-minus"></i></button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <form action="meus_dados.php" method="post" id="formDados">
                                <input type="hidden" id="id_end">
                                <div class="form-group">
                                    <label>Nome</label>
                                    <input id="fuNome" name="fuNome" class="form-control obg" placeholder="Nome">
                                </div>
                                <div class="form-group">
                                    <label>Nome empresa</label>
                                    <input id="empresa" name="empresa" class="form-control obg" placeholder="Nome">
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label>E-mail</label>
                                        <input id="fuEmail" name="fuEmail" class="form-control obg" placeholder="E-mail">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Telefone</label>
                                        <input id="fuFone" name="fuFone" class="form-control obg" placeholder="Telefone">
                                    </div>
                                    <div class="form-group col-md-4">
                                            <label>Cep</label>
                                            <input id="cep" name="cep" class="form-control cep obg" onblur="BuscarCep()" placeholder="Cep">
                                        </div>
                                        <div class="form-group col-md-8">
                                            <label>Rua</label>
                                            <input id="rua" name="rua" class="form-control obg" placeholder="Rua">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label>Bairro</label>
                                            <input id="bairro" name="bairro" class="form-control obg" placeholder="Bairro">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label>Cidade</label>
                                            <input id="cidade" name="cidade" class="form-control obg" placeholder="Cidade">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label>Estado</label>
                                            <input id="uf" name="uf" class="form-control obg" placeholder="Estado">
                                        </div>
                                    </div>    
                                <div class="form-group">
                                    <button onclick=" return AlterarMeusDados()" name="btnGravar" class="btn btn-block btn-primary col-md-4">Gravar</button>
                                </div>
                            </form>
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
    <script>CarregarMeusDados();</script>
    <script>MeuPerfil()</script>
</body>

</html>