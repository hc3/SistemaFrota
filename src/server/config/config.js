export default {
  database: 'bancoRN',
  username: '',
  password: '',
    params: {
      dialect: 'sqlite',
      storage: 'bancoRN.sqlite',
    define: {
      underscored: true
    },
  },
  jwtSecret: 'Secr3t',
  jwtSession: { session: false },
}
