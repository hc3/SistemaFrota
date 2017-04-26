'use strict';

import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = {

    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    }
};

const _user = new Schema(User);

_user.pre('save', (next, done) => {
    let user = this;
    const salt = bcrypt.genSaltSync();

    if(!user.isModified('password')) return next();

    user.password = bcrypt.hashSync(user.password, salt);

    next();
})

_user.methods.isPassword = 
    (encodedPassword, password) => bcrypt.compareSync(this.password, encodedPassword);

export default mongoose.model('User',_user);