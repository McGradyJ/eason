
$('.tpl-left-nav-link-list').on('click', function() {
    $(this).siblings('.tpl-left-nav-sub-menu').slideToggle(180)
        .end()
        // .find('.tpl-left-nav-more-ico').toggleClass('tpl-left-nav-more-ico-rotate');
})
$('.am-dropdown').on('click', function(){
    $(this).children('.am-dropdown-content').slideToggle(180);
})
