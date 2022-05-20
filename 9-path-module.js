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
