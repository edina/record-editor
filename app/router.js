import Backbone from 'backbone';
import { LoginView } from './views/Login';
import './styles/app.css!';

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
    $("#header-menu").append('<li><a href="#/login">Login</a></li>');
  }

  login () {
    new LoginView();
  }
}
