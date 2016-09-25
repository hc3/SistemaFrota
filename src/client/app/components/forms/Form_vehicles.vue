<script>
const clone = (obj) => JSON.parse(JSON.stringify(obj));

export default {
  data() {

    return {

      vehicle: {
        placa:'',
        modelo:'',
        marca:'',
        eixos:'',
        km_inicial:'',
        driver_id:''
      },

      listVehicles: []
    }
  },

  methods: {

    addVehicle() {
      const vehicle = clone(this.vehicle);
      console.log("Vehicle add: ",vehicle);
      this.listVehicles.push(vehicle);
      this.vehicle = {}
    },

    cleanForm() {
      this.vehicle = {}
    }
  }
}

</script>


<template>
<div>
  <form class="form-horizontal" v-on:submit.prevent="addVehicle()">
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
            <select class="form-control" v-model="vehicle.driver_id">
              <option value="0">motorista 1</option>
              <option value="1">motorista 2</option>
              <option value="2">motorista 3</option>
              <option value="3">motorista 4</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <input type="submit" class="btn brn-primary" value="Salvar">
          <input type="submit" class="btn btn-danger" value="Cancelar" v-on:click="cleanForm()">
        </div>
      </div>
    </div>
  </form>
  <pre>{{vehicle}}</pre>
  <li v-for="v in listVehicles">
    {{v}}
  </li>
</div>
</template>


<style>

</style>
