# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: lack of proper error handling in HTTP servers. The `bug.js` file shows a server without error handling, while `bugSolution.js` provides a corrected version.

## Bug

The original server starts without issue, but it doesn't handle potential errors during request handling or server startup.  This means that errors will silently occur, potentially causing unexpected behavior or crashes without providing any clear indication of the problem.

## Solution

The solution involves adding error handling using the `error` event listener for the server object.  This will catch errors during server startup.  The `uncaughtException` event is a last resort and should be used sparingly. For request handling, ensure that appropriate error handling is present within request handlers. 

This more robust solution will log errors to the console, making debugging significantly easier.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js` to see the problematic server.
4. Run `node bugSolution.js` to see the corrected server.