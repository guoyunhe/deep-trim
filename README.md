# @guoyunhe/deep-trim

![Version](https://img.shields.io/npm/v/@guoyunhe/deep-trim)
![Downloads](https://img.shields.io/npm/dw/@guoyunhe/deep-trim)
![Bundle size](https://img.shields.io/bundlephobia/minzip/@guoyunhe/deep-trim)

Recursively deep trim all string attributes, ideal for form data && request params sanitizing.

## Install

```bash
npm i -S @guoyunhe/deep-trim
```

## Example

```js
import { deepTrim } from '@guoyunhe/deep-trim';

const data = deepTrim(formData);
```
