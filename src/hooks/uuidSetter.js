const uuidv4 = require('uuid/v4');

function uuidSetter(context) {
  const updatedContext = context;
  updatedContext.data.id = uuidv4();
}

module.exports = {
  uuidSetter,
};
