import httpStatus from 'http-status';


const callback = (() => {

  const defaultResponse = (data, statusCode = httpStatus.OK) => ({
    data,
    statusCode
  });

  const errorResponse = (message, statusCode = httpStatus.BAD_REQUEST) => ({
    error:message
  },statusCode);

  return {
    defaultResponse,
    errorResponse
  }

})()

export default callback;
