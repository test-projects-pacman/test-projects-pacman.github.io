$(function() {
    const btn = $('a.btn');

    const modalLink = $('.modal-link');
    const modalClose = $('.modal-link__close');
    
    btn.each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();

            modalLink.addClass('active');
        })
    });

    modalClose.on('click', function() {
        modalLink.removeClass('active');
    })
});