import chai from 'chai';
import td from 'testdouble';
import app from '../../app';

global.app = app;
global.expect = chai.expect;
global.td = td;
