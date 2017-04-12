export default {
  database: 'bancoRN',
  username: '',
  password: '',
  logging: false,
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
