const callback = (() => {

  const defaultResponse = (data, statusCode = 200) => ({
    data,
    statusCode
  });

  const errorResponse = (message, statusCode = 400) => ({
    error:message
  },statusCode);

  return {
    defaultResponse,
    errorResponse
  }

})()

export default callback;
