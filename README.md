# dos2utf8

Convert DOS CP437 text to UTF-8 with cognate codepoints.

#### Install

```shell
npm build && npm i -g .
```

…from local, or

```shell
npm i -g dos2utf8
```

…from NPMJS.

#### Usage

```shell
dos2utf8 input_file >output_file
```

#### What It Does

It converts special characters in DOS text files to UTF-8 using cognates, e.g.

  CP437 `0xdc` is a lower half block (▄ `u+2584`), coded as bytes `0xe2 0x96 0x84`.

Good for e.g. lifting older text files from https://www.srrdb.com/ into the future.

```[ ::.. AND0UiLLE 2023 ..:: ]```