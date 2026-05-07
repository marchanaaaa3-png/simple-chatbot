function sendMessage() {

    const input =
        document.getElementById("userInput");

    const message =
        input.value.trim();

    if(message === "") return;

    addMessage(message, "user");

    input.value = "";

    let botReply = getBotReply(
        message.toLowerCase()
    );

    setTimeout(() => {

        addMessage(botReply, "bot");

    }, 500);

}

function getBotReply(message) {

    if(message.includes("hello") ||
       message.includes("hii") ||
       message.includes("hey")) {

        return "Hello 👋 How can I help you?";

    }

    else if(message.includes("your name")) {

        return "I'm your AI chatbot 🤖";

    }

    else if(message.includes("study") ||
            message.includes("exam")) {

        return "Study regularly 📚 and practice daily.";

    }

    else if(message.includes("javascript")) {

        return "JavaScript is used for web development 💻";

    }

    else if(message.includes("python")) {

        return "Python is beginner friendly 🐍";

    }

    else if(message.includes("weather")) {

        return "I can't check live weather yet 🌦️";

    }

    else if(message.includes("bye")) {

        return "Goodbye 👋";

    }

    else if(message.includes("how are you")) {

        return "I'm doing great 😄";

    }

    else {

        const randomReplies = [

            "Interesting 🤔 Tell me more.",

            "I understand 👍",

            "Can you explain differently?",

            "That sounds cool 😄",

            "I'm still learning 🤖"

        ];

        return randomReplies[
            Math.floor(
                Math.random() *
                randomReplies.length
            )
        ];

    }

}

function addMessage(text, sender) {

    const chatBox =
        document.getElementById("chat-box");

    const div =
        document.createElement("div");

    div.classList.add("message", sender);

    div.innerText = text;

    chatBox.appendChild(div);

    chatBox.scrollTop =
        chatBox.scrollHeight;

}

document
.getElementById("userInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter") {

        sendMessage();

    }

});

window.onload = () => {

    addMessage(
        "Hello! I'm your AI chatbot 🤖",
        "bot"
    );

};