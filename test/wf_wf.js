// general wf step module js
function enlargeBox(target) {
    $('body').on('click', target, function(e){
    let enlarged = $(this).attr('enlarged');
    $($(this).attr('enlarge_target')).toggleClass('enlarge-full-screen');
    if (enlarged === 'false') {
        $(this).attr('enlarged', 'true').addClass('fa-compress-arrows-alt').removeClass('fa-expand-arrows-alt');
    } else {
        $(this).attr('enlarged', 'false').addClass('fa-expand-arrows-alt').removeClass('fa-compress-arrows-alt');
    }
});
}

enlargeBox('#step_enlarge');
enlargeBox('#wf_plot_enlarge');

$(function(){
    $(document).on('wf_plot_created', function(){
        $('#wf_plot, #wf_plot svg').css({overflow: '', height: '97%', width: '100%'});
    })
})
