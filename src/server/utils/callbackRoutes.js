const callback = (() => {
   
   const defaultResponse = (response ,req , res) => {
        res.status(response.statusCode);
        res.json(response.data);
    };

    const defaultRemove = (response , req ,res) => {
        res.status(response.statusCode);
        res.json(response.data);
    };

    const errorResponse = (error , req ,res) => {
        console.log('error', error);
    };

    const defaultResponseForError = (response , req ,res) => {
        res.sendStatus(response.StatusCode);
    };

    const defaultError = (error , req ,res) => {
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