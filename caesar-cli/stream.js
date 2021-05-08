const { stdin, stdout } = require('process');
const { Transform, pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');
const { UNCAUGHT_FATAL_EXCEPTION } = require('./constants');

const pipelineCallback = (error) => {
  if (!error) return;

  console.error(error.message + '\n');
  process.exit(UNCAUGHT_FATAL_EXCEPTION);
};

const createStream = ({ input, output, transformCallback }) => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(transformCallback(chunk));
      callback();
    },
  });
  const readStream = input ? createReadStream(input) : stdin;
  const writeStream = output
    ? createWriteStream(output, { flags: 'a+' })
    : stdout;

  pipeline(readStream, transform, writeStream, pipelineCallback);
};

module.exports = {
  createStream,
};
