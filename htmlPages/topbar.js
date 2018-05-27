function menu() {
    console.log("function ran");
    if ($('ul.topnav li:nth-child(2)').css('display') == 'none'){
        $('ul.topnav li:nth-child(n+2)').css("display", "block");
    }
    else {
        console.log("running else");
        $('ul.topnav li:nth-child(n+2)').css("display", "none");
    }
}