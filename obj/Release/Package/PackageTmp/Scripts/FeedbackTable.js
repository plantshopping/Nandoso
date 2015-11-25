﻿document.addEventListener("DOMContentLoaded", function () {
    loadComments();
});

function loadComments() {
    CommentsModule.getComments(setupCommentsTable);
}

// This is the callback for when the data comes back in the CommentsModule
function setupCommentsTable(comments) {

    var commentsTable = document.getElementById("commentsList");

    for (i = 0; i < comments.length; i++) {

        // Create row 
        var row = document.createElement('tr');

        // Add the columns in the row (td / data cells)
        var namecol = document.createElement('td');
        namecol.innerHTML = comments[i].Name;
        row.appendChild(namecol);

        var feedbackcol = document.createElement('td');
        feedbackcol.innerHTML = comments[i].Feedback;
        row.appendChild(feedbackcol);

        var commentdatecol = document.createElement('td');
        commentdatecol.innerHTML = comments[i].CommentDate;
        row.appendChild(commentdatecol);

        // Append the row to the end of the table
        commentsTable.appendChild(row);
    }
}

