'use strict';

eval(function (p, a, c, k, _e, r) {
    _e = function e(c) {
        return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };if (!''.replace(/^/, String)) {
        while (c--) {
            r[_e(c)] = k[c] || _e(c);
        }k = [function (e) {
            return r[e];
        }];_e = function _e() {
            return '\\w+';
        };c = 1;
    };while (c--) {
        if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
    }return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.head.appendChild(msViewportStyle);
}

$(function () {
    var nua = navigator.userAgent;
    var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%');
    }
});
// Main
// console.log('FullStack Vietnam!')
// $('.slider .owl-carousel').owlCarousel({
//     // loop: true,
//     margin: 30,
//     loop: true,
//     items: 5,
//     nav: true,
//     dots: false,
//     animateOut: 'slideOutDown',
//     animateIn: 'flipInX'
// })
$(document).ready(function () {
    // //tìm mỗi cái class item và ẩn nó đi và set font size cho nó
    // $('.item').each(function() {
    //     var e = $(this).find('.title')
    //     $(this).find('.body').hide()
    //     $(e).css({
    //             "font-size": "2rem"
    //         })
    //         //dùng cái item để tìm cái title và set click để hiện body
    //     $(e).on('click', function() {
    //         // dùng cái this ở đây là cái title và dùng parents để tìm đến item sau đó tìm clas body rồi hiện nó ra
    //         $(this).parents(".home-nay").find('.body').hide()
    //         $(this).parents('.item').find('.body').show()
    //     })
    // })

    setTimeout(function () {
        $('.home-nay').append("ađâsđâsda");
    }, 1000);
});
//# sourceMappingURL=main.js.map
