$('.mobile_nav').click(function () {

    $('.toggle_one').toggleClass('first_toggle')
    $('.toggle_three').toggleClass('last_toggle')
    $('.toggle_two').toggleClass('middel_toggle')
    $('.inner_nav').toggleClass('box_toggle')
})



$("#sd_one").on('click', function () {
    $("#anisha").css("display", "block")
    $("#ali,#shanai,#richard").css("display", "none")
    $(this).css("background-color", "hsl(12, 88%, 59%)")

    $("#sd_two").css("background-color", "white")
    $("#sd_three").css("background-color", "")
    $("#sd_four").css("background-color", "")

});
$("#sd_two").on('click', function () {
    $("#ali").css("display", "block")
    $("#shanai,#richard,#anisha").css("display", "none")

    $(this).css("background-color", "hsl(12, 88%, 59%)")
    $("#sd_one").css("background-color", "")
    $("#sd_three").css("background-color", "")
    $("#sd_four").css("background-color", "")
});
$("#sd_three").on('click', function () {
    $("#richard").css("display", "block")
    $("#shanai,#ali,#anisha").css("display", "none")
    $(this).css("background-color", "hsl(12, 88%, 59%)")
    $("#sd_two").css("background-color", "white")
    $("#sd_one").css("background-color", "")
    $("#sd_four").css("background-color", "")
});
$("#sd_four").on('click', function () {
    $("#shanai").css("display", "block")
    $("#richard,#ali,#anisha").css("display", "none")
    $(this).css("background-color", "hsl(12, 88%, 59%)")
    $("#sd_two").css("background-color", "white")
    $("#sd_three").css("background-color", "")
    $("#sd_one").css("background-color", "")
});
