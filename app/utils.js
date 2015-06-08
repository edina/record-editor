

export default function getParams () {
    var query = window.location.search.substring(1);
    var query_string = {};
    var params = query.split("&");
    for(var i=0; i<params.length; i++){
        var pair = params[i].split("=");
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = pair[1];
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [ query_string[pair[0]], pair[1] ];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(pair[1]);
        }
    }
    return query_string;
}

export function giveFeedback(msg){
    if($("#feedback").length ===0){
        $("body").append(makeAlertModal("feedback", msg).join(""));
    }else{
        $("#feedback").find('.alert').html(msg);
    }
    $('#feedback').modal('show');
}

export function doLoading(param){
    console.log('xxxxxxxx')
    $("#loader").toggle(param);
}

function makeAlertModal(id, msg){
    var header = new Array(), body = new Array(), footer = new Array();
    header.push('<h3 id="myModalLabel">Feedback</h3>');
    body.push('<div class="alert">');
    body.push(msg);
    body.push('</div>');
    body.push('<div id="feedback-extra"></div>');
    return makeModalWindow(id, header, body, footer);
}

function makeModalWindow(id, header, body, footer){
    var form = new Array();
    form.push('<div class="modal hide fade" id="'+id+'" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">');
    form.push('<div class="modal-header">');
    form.push('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>');
    form.push('<h3 id="myModalLabel">');
    form = form.concat(header);
    form.push('</h3>');
    form.push('</div>');
    form.push('<div class="modal-body">');
    form.push('<p>');
    form = form.concat(body);
    form.push('</p></div>');
    form.push('<div class="modal-footer">');
    form = form.concat(footer);
    form.push('</div></div>');
    return form;
}
