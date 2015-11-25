var CommentsModule = (function () {

    // Return anything that you want to expose outside the closure
    return {
        getComments: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://NandosoRestuarants.azurewebsites.net/api/Comments",
                success: function (data) {
                    callback(data);
                }
            });

        }
    };

}());


function postComment() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    var date = new Date();

    $.ajax({
        type: "POST",
        dataType: "json",
        data:{
            Name: name.value,
            Email: email.value,
            Feedback: comment.value,
            CommentDate: date.toLocaleString()
        },
        url: "https://NandosoRestuarants.azurewebsites.net/api/Comments",
        error: function () {
            console.log("POST FAILED");
        }
    });
}
