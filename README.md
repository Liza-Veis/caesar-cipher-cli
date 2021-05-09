# Caesar cipher cli

This is a command-line interface to encrypt and decrypt text with Caesar's cipher. The application encrypts and decrypts only latin alphabet letters. All other characters remain unchanged.

---

## How to install

1. Download or clone this repository.
2. Run command line and go to the application folder.

---

## How to use

In the application folder, enter the following into the command line: "node caesar-cli [options]".

**Options**:

- -s, --shift: a shift
- -i, --input: an input file
- -o, --output: an output file
- -a, --action: an action encode/decode

The **action** option is **required** and can take the values of `encode` or `deconde` and indicates what needs to be done with the incoming text: _encrypt_ or _decrypt_.

The **shift** option is **required** and must be an integer (you can also use negative values ​​or values ​​that exceed the length of the alphabet). It denotes a _shift_ of letters for encryption and decryption.

The **input** option must be relative or absolute path to input file. If there are <ins>_spaces in the path_</ins>, it must be wrapped in <ins>_quotes_</ins>.

The **output** option must be relative or absolute path to output file. If there are <ins>_spaces in the path_</ins>, it must be wrapped in <ins>_quotes_</ins>.

If the **input** and/or the **output** options are absent, then reading and writing will be carried out from/to <ins>_the command line_</ins>.

---

## Examples of usage:

Encription with shorthand names of the options

```javascript
$ node caesar-cli -a encode -s 7 -i ./input.txt -o ./output.txt
```

Before:

> input.txt `This is secret. Message about "_" symbol!`

> output.txt _empty_

After:

> input.txt `This is secret. Message about "_" symbol!`

> output.txt `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

Decryption with full names of the options

```javascript
$ node caesar-cli --action decode --shift 7 --input ./plain.txt --output ./decode.txt
```

Before:

> plain.txt `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> decode.txt _empty_

After:

> plain.txt `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> decode.txt `This is secret. Message about "_" symbol!`
