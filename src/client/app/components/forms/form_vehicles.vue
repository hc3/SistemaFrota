<script>
const clone = (obj) => JSON.parse(JSON.stringify(obj));

export default {
  data() {
    return {

      vehicle: {

      }
    }
  }
}

</script>


<template>
<div>
  <form class="form-horizontal">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="" class="col-sm-2 control-label">Placa: </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="vehicle.placa">
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="" class="col-sm-2 control-label">Modelo: </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="vehicle.modelo">
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="" class="col-sm-2 control-label">Marca: </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="vehicle.marca">
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="" class="col-sm-2 control-label">Eixos: </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="vehicle.eixos">
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="" class="col-sm-2 control-label">Km inicial: </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="vehicle.km_inicial">
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="" class="col-sm-2 control-label">Motorista: </label>
          <div class="col-sm-10">
            <select class="form-control" id="">
              <option>motorista 1</option>
              <option>motorista 2</option>
              <option>motorista 3</option>
              <option>motorista 4</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <input type="submit" class="btn brn-primary" value="Salvar">
          <input type="submit" class="btn btn-danger" value="Cancelar">
        </div>
      </div>
    </div>
  </form>
</div>
  <!-- FIM FORM CADASTRO VEICULOS -->
</template>


<style>

</style>
