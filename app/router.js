import Backbone from 'backbone';
import { LoginView } from './views/Login';
import { RecordView } from './views/Record';
import './styles/app.css!';
import getParams from '../utils';

export class RecordRouter extends Backbone.Router {

    constructor () {
        super();
        this.routes = {
            'record-editor': 'recordEdit',
            'login': 'login'
        };
        this._bindRoutes();
    }

    recordEdit () {
        console.log('Route#recordEdit');
        if("oauth_token" in getParams()) {
            new RecordView(getParams()['oauth_token']);
        }
        else {
            $("#header-menu").append('<li><a href="#/login">Login</a></li>');
        }
    }

    login () {
        new LoginView();
    }
}
