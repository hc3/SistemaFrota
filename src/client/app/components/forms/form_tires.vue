<script>

export default {

}

</script>


<template>
  <!-- FORM CADASTRO PNEUS -->
  <h1>Cadastro de pneus</h1>
  <div class="form-horizontal div row">
    <div class="col-md-12 div form-group">
      <label for="" class="col-sm-2 control-label">Código: </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" data-v-model="codigo">
      </div>
    </div>
    <div class="col-md-12 div form-group">
      <label for="" class="col-sm-2 control-label">Marca: </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" data-v-model="marca">
      </div>
    </div>
    <div class="col-md-12 div form-group">
      <label for="" class="col-sm-2 control-label">Vida: </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" data-v-model="vida">
      </div>
    </div>
    <div class="col-md-12 div form-group">
      <label for="" class="col-sm-2 control-label">Sulco: </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" data-v-model="sulco">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <input type="submit" class="btn brn-primary" value="Salvar">
        <input type="submit" class="btn btn-danger" value="Cancelar">
      </div>
    </div>
  </div>
  <!-- FIM FORM CADASTRAR PNEUS -->
</template>


<style>

</style>
