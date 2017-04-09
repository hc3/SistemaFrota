const callback = (() => {

    const defaultGet = (done, request, token, defaultObject, ROTA) => {
        request
            .get(ROTA)
            .set('Authorization', `JWT ${token}`)
            .end((err, res) => {
                const fields = Object.keys(res.body[0]);
                const doTest = (elemento) => {
                    if(defaultObject[elemento])
                    expect(res.body[0][elemento]).to.be.eql(defaultObject[elemento])
                }
                fields.map(doTest);
                done(err);
            });
    };

        const defaultGetOne = (done, request, token, defaultObject, ROTA) => {
        request
            .get(ROTA)
            .set('Authorization', `JWT ${token}`)
            .end((err, res) => {
                const fields = Object.keys(res.body);
                const doTest = (elemento) => {
                    if(defaultObject[elemento])
                    expect(res.body[elemento]).to.be.eql(defaultObject[elemento])
                }
                fields.map(doTest);
                done(err);
            });
    };

    const defaultPost = (done,request,token,defaultObject,ROTA) => {
        request
            .post(ROTA)
            .set('Authorization', `JWT ${token}`)
            .send(defaultObject)
            .end((err, res) => {
                const fields = Object.keys(res.body);
                const doTest = (elemento) => {
                    if(defaultObject[elemento])
                    expect(res.body[elemento]).to.be.eql(defaultObject[elemento])
                }
                fields.map(doTest);
                done(err);
            });
    };

    const defaultPut = (done, request, token , defaultObject,  ROTA) => {
        request
          .put(ROTA)
          .set('Authorization', `JWT ${token}`)
          .send(defaultObject)
          .end((err,res) => {
            expect(res.body).to.be.eql([1]);
            done(err);
          });
    };

    const defaultDelete = (done, request, token, ROTA) => {
        request
          .delete(ROTA)
          .set('Authorization', `JWT ${token}`)
          .end((err,res) => {
            expect(res.statusCode).to.be.eql(204);
            done(err);
          }) 
    }

    return {
        defaultGet,
        defaultPost,
        defaultPut,
        defaultDelete,
        defaultGetOne
    };

})()

export default callback;