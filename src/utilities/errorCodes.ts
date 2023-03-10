interface ErrorCodes {
    [key: string]: {
      statusCode: number;
      message: string;
    };
  }
  
  const errorCodes: ErrorCodes = {
    ECONNREFUSED: {
      statusCode: 500,
      message: 'Database connection error',
    },
    ETIMEDOUT: {
      statusCode: 500,
      message: 'Database connection timed out',
    },
    DUPLICATE_ENTRY: {
      statusCode: 409,
      message: 'Duplicate entry',
    },
    FOREIGN_KEY_VIOLATION: {
      statusCode: 409,
      message: 'Foreign key violation',
    },
    DATA_TOO_LONG: {
      statusCode: 400,
      message: 'Data too long',
    },
    INVALID_INPUT_SYNTAX: {
      statusCode: 400,
      message: 'Invalid input syntax',
    },
    INVALID_DATE_FORMAT: {
      statusCode: 400,
      message: 'Invalid date format',
    },
    AUTHENTICATION_ERROR: {
      statusCode: 401,
      message: 'Authentication error',
    },
    INTERNAL_SERVER_ERROR: {
      statusCode: 500,
      message: 'Internal server error',
    },
  };
  
  export default errorCodes;