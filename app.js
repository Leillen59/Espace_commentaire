
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

        let comment = createComment();
        commentList.appendChild(comment);

        clearFields();
    } catch (error) {
        sendErrorMessage(true);
    }
}

