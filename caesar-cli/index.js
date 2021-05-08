const { OPTIONS } = require('./constants');
const { checkArguments, getOption } = require('./arguments');
const { createStream } = require('./stream');
const { applyCipher } = require('./ciper');

checkArguments();
const input = getOption(OPTIONS.input);
const output = getOption(OPTIONS.output);
const action = getOption(OPTIONS.action);
const shift = getOption(OPTIONS.shift) * (action === 'encode' ? 1 : -1);
const transformCallback = (data) => {
  const newData = applyCipher(data, shift);

  return newData + (input ? '\n' : '');
};

createStream({ input, output, transformCallback });
