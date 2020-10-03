module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MyUI',
      externals: {
        react: 'React'
      }
    }
  }
}
