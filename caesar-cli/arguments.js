const fs = require('fs');
const process = require('process');
const {
  INVALID_ARGUMENT_EXIT_CODE,
  OPTIONS,
  ALIASES,
  ACTION_VALUES,
} = require('./constants');

const argv = process.argv.slice(2);

const handleError = (message) => {
  console.error(message + '\n');
  process.exit(INVALID_ARGUMENT_EXIT_CODE);
};

const checkFileAccess = (path, option) => {
  try {
    fs.accessSync(
      path,
      fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK
    );

    if (!fs.statSync(path).isFile()) {
      handleError(`The ${option} file on path "${path}" does not exist`);
    }
  } catch (error) {
    handleError(
      `The ${option} file on path "${path}" does not exist or you do not have access rights to write or read file`
    );
  }
};

const getOption = (option) => {
  const optionIndex = argv.findIndex((argument) =>
    ALIASES[option].includes(argument)
  );

  if (optionIndex === -1) return false;

  return argv[optionIndex + 1];
};

const checkArguments = () => {
  const action = getOption(OPTIONS.action);
  const shift = getOption(OPTIONS.shift);
  const output = getOption(OPTIONS.output);
  const input = getOption(OPTIONS.input);

  if (action === false) {
    handleError('Missing required argument "--action"');
  }
  if (!ACTION_VALUES.includes(action)) {
    handleError(
      `Expected "--action" value to be "encode" or "decode", instead received "${action}"`
    );
  }
  if (shift === false) {
    handleError('Missing required argument "--shift"');
  }
  if (!shift || !Number.isInteger(+shift)) {
    handleError(
      `Expected "--shift" value to be an integer, instead received "${shift}"`
    );
  }
  if (input !== false) {
    if (!input) {
      handleError('Value for "--input" was not provided');
    }
    checkFileAccess(input, OPTIONS.input);
    if (input === output) {
      handleError('"--input" and "--output" values must be different');
    }
  }
  if (output !== false) {
    if (!output) {
      handleError('Value for "--output" was not provided');
    }
    checkFileAccess(output, OPTIONS.output);
  }
};

module.exports = {
  getOption,
  checkArguments,
};
