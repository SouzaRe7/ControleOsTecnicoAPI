<?php require_once dirname(__DIR__, 2) . '/vendor/autoload.php'; ?>
<!DOCTYPE html>
<html>
<head>
<?php include_once PATH_URL . '/template/_includes/_head.php' ?>
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    controle de CHAMADOS - TÉCNICO
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Faça seu acesso</p>

      <form action="login.php" method="post" id="formLogin">
        <div class="input-group mb-3">
          <input type="email" class="form-control obg" id="login" name="login" placeholder="E-mail" value="<?= isset($_POST['login']) ? $_POST['login'] : '' ?>">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control obg" id="senha" name="senha" placeholder="Digite senha">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- /.col -->
          <div class="col-12">
            <button type="submit" name="btnAcessar" class="btn btn-primary btn-block" onclick="return ValidarAcesso('formLogin')">Acessar</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
<!-- jQuery -->
<?php include_once PATH_URL . '/template/_includes/_script.php';
      include_once PATH_URL . '/template/_includes/_msg.php'; ?>
<script src="../resource/ajax/tecnico-ajx.js"></script>
</body>
</html>
