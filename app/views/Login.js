import $ from 'jquery';
import Backbone from 'backbone';
import pcapi from 'pcapi';
import modalTemplate from '../templates/modal.hbs!';
import modal from 'bootstrap';


export class LoginView extends Backbone.View {

    initialize () {
        this.$el = $("body");
        this.render();
    }

    render () {
        pcapi.init(System.pcapiOptions);
        pcapi.getProviders().then($.proxy(function(data){
            var providers = this.createLoginOptions(data);
            var $modal = $("#modal-window");
            if($modal.length === 0){
                this.$el.append(modalTemplate());
            }
            $('.modal-body').html(providers.join(""));
            $("#modal-window").modal({show: true});
            this.enableLogin();
        }, this));
        return this;
    }

    createLoginOptions (data) {
        var providers = [];
        providers.push('<ul>');
        for(var prov in data){
            providers.push('<li><a href="javascript:void(0);" class="provider">'+prov+'</a></li>');
        }
        providers.push('</ul>');
        return providers;
    }

    enableEvents () {
        
    }

    enableLogin () {
        $(".provider").off('click');
        $(".provider").on('click', function(){
            pcapi.setProvider($(this).text());
            pcapi.loginCloud();
        })
    }

}