new Vue({
  el: '#app',

  data: {
    drivers:[],
    driver:{
      nome:'',
      codigo:'',
      telefone:''
    }
  },

  methods: {

    loadDrivers: function(event) {

    },
    addDriver: function(event) {
      this.drivers.push({
        nome:this.driver.nome,
        codigo:this.driver.codigo,
        telefone:this.driver.telefone
      });
      console.log('Drivers: ',this.drivers);
    },
    removeDriver: function(event) {

    },
    updateDriver: function(event) {

    }
  }
});
