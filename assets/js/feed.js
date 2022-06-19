
/**
 * TMS Content Management System
 * @version 4.x
 * @author Tập Đoàn TMS Holdings <contact@tms.vn>
 * @copyright (C) 2009-2021 Tập Đoàn TMS Holdings. All rights reserved
 * @license GNU/GPL version 2 or any later version
 * @see https://tms.vn
 */

 $(function(){
    var banboxHeight = $('.banbox').outerHeight(true) + 15;
    $('.mainbox').css("padding-top", banboxHeight + 'px');

    $('[data-toggle=pubdate]').each(function(e) {
        var pubdate = $(this).data('pubdate');
        $(this).text(moment(pubdate).format('DD/MM/YYYY HH:mm Z'));
    });

    $(window).on("resize orientationchange", function() {
        banboxHeight = $('.banbox').outerHeight(true) + 15;
        $('.mainbox').css("padding-top", banboxHeight + 'px');
    });
});