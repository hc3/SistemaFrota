<script>
const clone = (obj) => JSON.parse(JSON.stringify(obj));

export default {

  data() {
    return {

      driver: {
        nome:'',
        codigo:'',
        telefone:''
      },

      listDrivers: []

    }
  },

  methods: {

    addDriver() {
      const driver = clone(this.driver)
      console.log("driver add: ",driver);
      this.listDrivers.push(driver);
      this.driver = {}
    },

    cleanForm() {
      this.driver = {}
    }

  }

}

</script>

<template>
  <div>
    <form class="form-horizontal" v-on:submit.prevent="addDriver()">
      <div class="row">

        <div class="col-dm-12">
          <div class="form-group erros">
            <p v-if="$validation1.driverNome.required">Required Nome</p>
            <p v-if="$validation1.driverCodigo.required">Required Codigo</p>
            <p v-if="$validation1.driverTelefone.required">Required Telefone</p>
          </div>
        </div>
        
        <div class="col-md-12">
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">Nome: </label>
            <div class="col-sm-10">
              <input id="driverNome type="text" class="form-control" v-model="driver.nome"
                v-validate:driverNome="['required']">
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">Código: </label>
            <div class="col-sm-10">
              <input id="driverCodigo" type="text" class="form-control" v-model="driver.codigo"
                v-validate:driverCodigo="['required']">
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">Telefone: </label>
            <div class="col-sm-10">
              <input id="driverTelefone" type="text" class="form-control" v-model="driver.telefone"
                v-validate:driverCodigo="['required']">
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <input type="submit" class="btn brn-primary" value="Salvar" v-if="$validation1.valid">
            <input type="submit" class="btn btn-danger" value="Cancelar" v-on:click="cleanForm()">
          </div>
        </div>
        <pre>{{driver}}</pre>
        <li v-for="dr in listDrivers">
          {{dr}}
        </li>

      </div>
    <form>
  </div>

</template>

<style>

</style>
