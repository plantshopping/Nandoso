document.addEventListener("DOMContentLoaded", function () {
    loadComments();
});

function loadComments() {
    CommentsModule.getComments(setupCommentsTable);
}

function setupCommentsTable(comments) {
    var commentsDiv = document.getElementById("feedbackDiv");
    var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
    ];



    for (i = comments.length - 1 ; i >= 0; i--) {

        // Formart our date nicely
        var current = new Date(comments[i].CommentDate);
        var day = current.getDate();
        var monthIndex = current.getMonth();
        var year = current.getFullYear();

        var commentDiv = document.createElement("div");
        commentDiv.id = comments[i].ID;
        commentDiv.setAttribute("style", "background-color:#F6F6F6; margin:20px; padding-top: 20px; padding-bottom: 10px");

        var dateDiv = document.createElement("div");
        dateDiv.setAttribute("class", "row");
        dateDiv.setAttribute("style", "font-size:11px");
        dateDiv.innerHTML = day + ' ' + monthNames[monthIndex] + ' ' + year;
        commentDiv.appendChild(dateDiv);


        var nameDiv = document.createElement("div");
        nameDiv.setAttribute("class", "row");
        nameDiv.setAttribute("style", "font-style:italic");
        nameDiv.innerHTML = comments[i].Name + " said:";
        commentDiv.appendChild(nameDiv);


        var userCommentDiv = document.createElement("div");
        userCommentDiv.setAttribute("class", "row");
        userCommentDiv.setAttribute("style", "font-size:13px");
        userCommentDiv.innerHTML = comments[i].Feedback;
        commentDiv.appendChild(userCommentDiv);

        var replyDiv = document.createElement("div");
        //replyDiv.setAttribute("style", "font-color:#F6F6F6");

        // Make this div initially hidden - this divider is for posting replies
        var postReplyDiv = document.createElement("div");
        postReplyDiv.setAttribute("id", "replyDiv" + comments[i].ID)
        postReplyDiv.setAttribute("style", "display: none");
        // Input for the reply
        var inputReply = document.createElement("textarea");
        inputReply.setAttribute("id", "inputReply" + comments[i].ID);
        inputReply.setAttribute("class", "form-control");
        inputReply.setAttribute("rows", "2");
        inputReply.setAttribute("cols", "10");
        inputReply.setAttribute("style", "resize: none");
        postReplyDiv.appendChild(inputReply);

        
        var link = document.createElement("a");

        link.setAttribute("onclick","document.getElementById('replyDiv" + comments[i].ID + "').style.display='';return false;");
        link.setAttribute("href","");
        link.innerHTML = "Reply";
        link.style.color = "#F6F6F6";
        link.style.fontSize = "7px";
        link.id = "sweetalert";
        commentDiv.appendChild(link);
        commentDiv.appendChild(replyDiv);

        

        var breakFormat = document.createElement("br");
        postReplyDiv.appendChild(breakFormat);

        var postReplyBtn = document.createElement("button");

        postReplyBtn.setAttribute("id", "btn" + comments[i].ID);
        postReplyBtn.setAttribute("onclick", "CommentsModule.postReply(this.id); document.getElementById('replyDiv" + comments[i].ID + "').style.display='none';return false;");
        postReplyBtn.innerHTML = "Post Reply";
        postReplyDiv.appendChild(postReplyBtn);

        commentDiv.appendChild(postReplyDiv);


        var replyDiv = document.createElement("div");
        replyDiv.setAttribute("style", "background-color:#F0F0F0; padding-top: 10px; padding-bottom: 10px; font-size:13px");
        replyDiv.innerHTML = comments[i].ReplyComment;
        commentDiv.appendChild(replyDiv);

        commentsDiv.appendChild(commentDiv);
    }

}

