module.exports = {
  extends: 'airbnb-base',
  env:{
    node: true,
  },
  rules: {
    'no-console': ['error', { allow: [ 'info', 'debug', 'warn', 'error' ]}],
    'no-underscore-dangle': [ 'error', { 'allowAfterThis': true }],
    'class-methods-use-this': 0,
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  },
  globals: {
    _config: true,
    getEnv: true,
    appEmitter: true,
    logger: true,
  }
};