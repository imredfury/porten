// $(document).ready(function() {
//     $('.menu-burger__header').click(function() {
//         $('.menu-burger__header').toggleClass('open-menu');
//     });
// });

$(document).ready(function () {
    $('.burger').on('click',function () {
        $('.burger, .header__nav-bottom, .header__nav').toggleClass('active')

    })
});