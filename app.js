
const commentList = document.getElementById("comment-list");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error-message");

/**
 * @param {SubmitEvent} event - envoi du commentaire
 */

function sendComment(event) {

    event.preventDefault();
    // Pas de chargement de page
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

/**
 * @returns {HTMLHeadingElement} - Nouvel Auteur
 */

function authorCreator () {
    const author = document.createElement("h3");
    author.classList.add("font-medium", "text-gray-900");

    const authorText = document.createTextNode(
        `${firstName.value} ${lastName.value}`
    );

    author.appendChild(authorText);

    return author;
}

/**
 * @returns {HTMLDivElement} - Nouveau message
 */

function messageCreation () {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add ("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");

    const messageContentEle  = document.createElement("p");
    const messageContentTxt = document.createTextNode(message.value);

    messageContentEle.appendChild(messageContentTxt);
    messageContainer.appendChild(messageContentEle);

    return messageContainer;
}