$(document).ready(function(){
    $("#run").on("click",function(){
        html_content = $("#data-input").val();
        css_content = $("#data-input-css").val();
        //console.log(css_content);
        $("#data-output").html(`${html_content}`)
        let styles = $("<style></style>");
        styles.html(css_content);
        $("#data-output").append(styles)
    })

    $("#clear").on("click",function(){
        $("#data-output").html("")
    })

    $("#clear-html").on("click",function(){
        $("#data-input").val("")
    })

    $("#clear-css").on("click",function(){
        $("#data-input-css").val("")
    })
})