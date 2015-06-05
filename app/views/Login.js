import Backbone from 'backbone';
import pcapi from 'pcapi';

export class LoginView extends Backbone.View {

    initialize () {
        this.$el = $("#content");
        this.render();
    }

    render () {
        pcapi.init({
            "url": "",
            "version": 1.3
        });
        console.log(pcapi.getProviders())
        return this;
    }

}