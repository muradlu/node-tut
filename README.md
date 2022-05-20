#### 2 - Globals

Global variables means that these variables are accessible throughout the app.

```text
__dirname - path to current directory
__filename - file name
require - function to use modules
module - info about the current module (file)
process - info about env where program is being executed
```

#### 3 - Modules

Modules are encapsulated code. We're only sharing the minimum - what we want. Every file in node is a module.

Exmaple for a module syntax:

```js
const john = "john";
const peter = "peter";

module.exports = { john, peter };
```

#### Alternative syntax

There's an alternative way of setting up modules. Here we set up the exports on the go:

```js
module.exports.items = ["item1", "item2"];
module.exports.person = {
  name: "bob",
};
```

#### OS - Module

Some examples of the functions provided by the OS module

```js
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
```

#### PATH - Module

The path module allows us to interact with the file paths easily.

Some examples:

```js
const path = require("path");

// returns a platform specific separator
console.log(path.sep);

// join a sequence of path segments using the platform specific separator and returns the resulting path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// basename() method returns the filename part of a file path.
const base = path.basename(filePath);
console.log(base);

// resolve() returns an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
```

#### FS - Module

The fs module enables interacting with the file system.
We can do it in a synchronous way

```js
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// if the file isn't there, Node will create one
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${(first, second)}`
);

console.log(first, second);
```

Or in an asynchoronous way

```js
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(second);
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
```
