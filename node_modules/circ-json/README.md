# Circ json

Json (readable) inspired serializer for cyclic objects.

## Installation

```shell
 $ npm i circ-json
```

## Usage

Analog to `JSON`

```ts
import { stringify, parse } from "circ-json"

const c = {
  a: 1,
  b: {i: 1}
}

c.c = c
c.bb = c.b

const s = stringify(c) //{"a":1,"b":{"i":1},"c":{"$ref":"#"},"bb":{"$ref":"#/b"}}

deepEqual(parse(s), c) // true
```

## Contribute

All feedback is appreciated. Create a pull request or write an issue.
