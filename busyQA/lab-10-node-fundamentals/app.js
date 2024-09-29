// app.js

// Import the custom module 
const math = require("./math");

// Import the custom event emitter
const myEmitter = require("./emitter");

// Use the custom module
const result = math.square(5);
console.log(`Square of 5 is: ${result}`);

// Emit the custom Event
myEmitter.emit("customEvent");
