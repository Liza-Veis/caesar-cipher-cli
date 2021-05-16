const UNCAUGHT_FATAL_EXCEPTION = 1;

const INVALID_ARGUMENT_EXIT_CODE = 9;

const OPTIONS = {
  action: 'action',
  shift: 'shift',
  input: 'input',
  output: 'output',
};

const ALIASES = {
  [OPTIONS.action]: ['--action', '-a'],
  [OPTIONS.shift]: ['--shift', '-s'],
  [OPTIONS.input]: ['--input', '-i'],
  [OPTIONS.output]: ['--output', '-o'],
};

const ACTION_VALUES = ['encode', 'decode'];

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

module.exports = {
  UNCAUGHT_FATAL_EXCEPTION,
  INVALID_ARGUMENT_EXIT_CODE,
  OPTIONS,
  ALIASES,
  ACTION_VALUES,
  ALPHABET,
};
