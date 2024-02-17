// errorMiddleware.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Check for specific error types and send an appropriate response
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      res.status(400).json({ message: 'Bad Request: Malformed JSON' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Some Comment for testing.....
  module.exports = errorHandler;
  