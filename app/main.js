import Backbone from 'backbone';
import {RecordRouter} from './router';

$(() => {
    // *Finally, we kick things off by creating the **App**.*
    new RecordRouter();
    Backbone.history.start();
});
