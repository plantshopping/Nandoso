var CommentsModule = (function () {

    // Return anything that you want to expose outside the closure
    return {
        // Get comments from our database
        getComments: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://NandosoRestuarants.azurewebsites.net/api/Comments",
                success: function (data) {
                    callback(data);
                }
            });

        },

        // Post comments to our database
        postComment: function () {
            var name = document.getElementById("name");
            var email = document.getElementById("email");
            var comment = document.getElementById("comment");
            var date = new Date();

            $.ajax({
                type: "POST",
                dataType: "json",
                data: {
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
        },

        // Post our replies to the database
        postReply: function (someid) {
            var id = someid.substring(3);
            var inputReply = document.getElementById("inputReply" + id);

            // Get existing data
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://NandosoRestuarants.azurewebsites.net/api/Comments/" + id,
                success: function (data) {
                    // Put our exisiting data and newly replied comment into the database
                    $.ajax({
                        type: "PUT",
                        dataType: "json",
                        data: {
                            ID: data.ID,
                            Name: data.Name,
                            Email: data.Email,
                            Feedback: data.Feedback,
                            CommentDate: data.CommentDate,
                            ReplyComment: inputReply.value
                        },
                        url: "https://NandosoRestuarants.azurewebsites.net/api/Comments/" + id,
                        error: function () {
                            console.log("POST FAILED");
                        },
                        success: function () {
                            window.location.reload();
                        }
                    });
                }
            });
        }
    };

}());