(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    function HorizontalRule(){
        console.log('this code has been collected from the HR component');
    }

    function ProgressButton(){
        console.log('this code has been collected from the progress button component');
    }

    HorizontalRule();
    ProgressButton();

}));
