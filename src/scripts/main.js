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
$(document).ready(function() {
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

    setTimeout(function() {
        $('.home-nay').append("ađâsđâsda")

    }, 1000)
});