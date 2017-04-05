const callback = ((req, res) => {
   
   const defaultResponse = (response) => {
        res.status(response.statusCode);
        res.json(response.data);
    };

    const defaultRemove = (response) => {
        res.sendStatus(response.StatusCode);
    };

    const errorResponse = (error) => {
        console.log('error', error);
    };

    const defaultResponseForError = (response) => {
        res.sendStatus(response.StatusCode);
    };

    const defaultError = (error) => {
        console.log(error);
    };

    return {
        defaultResponse,
        errorResponse,
        defaultResponseForError,
        defaultError,
        defaultRemove
    };


})()

export default callback;