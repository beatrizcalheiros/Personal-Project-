
$(function () {
    $("a[id^='link']").click(function (e) {
        e.preventDefault();
        var ola = this.id.replace("link", "");
        $(".panel").hide(1000);
        $("#panel" + ola).show(1000);
    });
});


$(function () {
    $("a[id^='link']").click(function (e) {
        e.preventDefault();
        var index = this.id.replace("link", "");
        $("#work" + index).show(1000);
        $(".work").hide(1000);

    });
});






/* secção panel2 imagens */
