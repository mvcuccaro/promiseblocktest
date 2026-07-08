# imported promise block test

### This is a test program to prove that you can import a reference to a single promise that may or may not be resolved and await it multiple times in concurrent code. It demonstrates that all code before the await will run and all code after the await will run but none of the code after any of the awaits can run until the promise is resolved. 

There are 3 similar code blocks that will run concurrently
* one block runs at 1000ms
* one runs at 2000ms
* and one runs randomly between 500 and 3500ms
* The blocking promise resolves at 1500ms
* The value of the blocking promise will be a random number between 1 and 100. It will be the same value in all code blocks proving that there is only one instance of the promise.


## Instructions

Clone repo

```bash
npm install
```

```bash
npm index.js
```

### output examples:

```
start
Promise { true }
code 1 timeout: 1000
code 2 timeout: 2000
code 3 timeout: 1952


blocking code timout: 1500
1 code before block
promise resolving now
1 after block Promise { 80 }
3 code before block
3 after block Promise { 80 }
2 code before block
2 after block Promise { 80 }
```

___

```
start
Promise { true }
code 1 timeout: 1000
code 2 timeout: 2000
code 3 timeout: 1072


blocking code timout: 1500
1 code before block
3 code before block
promise resolving now
1 after block Promise { 52 }
3 after block Promise { 52 }
2 code before block
2 after block Promise { 52 }
```
---
```
start
Promise { true }
code 1 timeout: 1000
code 2 timeout: 2000
code 3 timeout: 582


blocking code timout: 1500
3 code before block
1 code before block
promise resolving now
3 after block Promise { 35 }
1 after block Promise { 35 }
2 code before block
2 after block Promise { 35 }
```