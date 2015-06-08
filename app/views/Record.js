import $ from 'jquery';
import Backbone from 'backbone';
import pcapi from 'pcapi';
import doLoading from '../utils';
import giveFeedback from '../utils';
import Mapper from '../map';
import Recordjs from 'fieldtrip-records';

export class RecordView extends Backbone.View {

    initialize (uid) {
        this.$el = $("body");
        this.render(uid);
    }

    render (uid) {
        if($("#map").length === 0){
            this.$el.append('<div id="map"></div>');
        }
        let mapper = new Mapper();
        mapper.init('map');

        let recordjs = new Recordjs('annotation');

        pcapi.init(System.pcapiOptions);
        doLoading(true);
        pcapi.checkLogin($.proxy(function(result, data){
            console.log(data);
            if(result){
                if(data.state === 1){
                    pcapi.getItems({
                        'remoteDir': 'records',
                        'filters': 'filter=format&frmt=geojson'
                    }).then(function(data){
                        mapper.addGeojsonToMap(data);
                        recordjs.putFeatureCollection(data, {"metadata": false});
                        doLoading(false);
                    });
                }
                else{
                    giveFeedback("There is a problem loading all the editors.");
                    //doLoading(false);
                }
            }
            else{
                giveFeedback("You need to refresh your page. The session with the provider has problems!");
                //doLoading(false);
            }
        }, this));
        return this;
    }

}