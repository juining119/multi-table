window.onload = init;

function init() {
    $("#gun_left").jsMovie({
        sequence: 'gunLeft_0#.svg'
        , from: 1
        , to: 6
        , fps: 10
        , repeate: true
        , folder: "images/gun/"
        , showPreLoader: false
        , width: 100 + "%"
        , height: 100
    });
    $("#gun_right").jsMovie({
        sequence: 'gunRight_0#.svg'
        , from: 1
        , to: 6
        , fps: 10
        , repeate: true
        , folder: "images/gun/"
        , showPreLoader: false
        , width: 100 + "%"
        , height: 100
    });
    $("#gun_left").jsMovie("play");
    $("#gun_right").jsMovie("play");
}