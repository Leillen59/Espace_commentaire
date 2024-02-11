
const commentList = document.getElementById("comment-list");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error-message");

/**
 * @param {SubmitEvent} event - envoi du commentaire
 */

function sendComment(event) {
    try {
        checkFields()

        const comment = createComment();
        commentList.appendChild(comment);

        clearFields();
    } catch (error) {
        sendErrorMessage(true);
    }
}

/**
 * @returns {HTMLDivElement} - Nouveau commentaire
 */

function createComment() {
    const comment = document.createElement("div");
    comment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");

    const contentComment = document.createElement("div");
    contentComment.classList.add("flex-1", "py-10", "border-t", "border-gray-200");


    const author = authorCreator();
    const newMessage = messageCreation();

    contentComment.appendChild(author);
    contentComment.appendChild(newMessage);

    comment.appendChild(contentComment);

    return comment;
}