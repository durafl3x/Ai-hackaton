// Create the overlay container div
  var overlayDiv = document.createElement("div");
  overlayDiv.className = "overlay-container";

  

    // Create the overlay content
  var overlayContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Collect&Go Vollenbot</title>
        <link href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
        <style>
        body {
    display: flex;
    justify-content: center;
    font-family: "roboto";
}

.chatbot-container {
    width: 500px;
    margin: 0 auto;
    background-color: #f5f5f5;
    border: 1px solid #cccccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .overlay-container {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 300px; /* Adjust the width as needed */
            height: 200px; /* Adjust the height as needed */
            background: rgba(0, 0, 0, 0.5);
            z-index: 9999;

#chatbot {
    background-color: #f5f5f5;
    border: 1px solid #eef1f5;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  #header {
    background-color: #1687C6;
    color: #ffffff;
    padding: 20px;
    font-size: 1em;
    font-weight: bold;
  }

  message-container {
    background: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
  }


  #conversation {
    height: 500px;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  @keyframes message-fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .chatbot-message {
    display: flex;
    align-items: flex-start;
    position: relative;
    font-size: 16px;
    line-height: 20px;
    border-radius: 20px;
    word-wrap: break-word;
    white-space: pre-wrap;
    max-width: 100%;
    padding: 0 15px;
  }

  .user-message {
    justify-content: flex-end;
  }


.chatbot-text {
    background-color: white;
    color: #333333;
    font-size: 1.1em;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .user-text {
    background-color: #1687C6;;
    color: white;
    font-size: 1.1em;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  #input-form {
    display: flex;
    align-items: center;
    border-top: 1px solid #eef1f5;
  }

  #input-field {
    flex: 1;
    height: 60px;
    border: 1px solid #eef1f5;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 14px;
    transition: border-color 0.3s;
    background: #ffffff;
    color: #333333;
    border: none;
  }

  .send-icon {
    margin-right: 10px;
    cursor: pointer;
  }

  #input-field:focus {
    border-color: #333333;
    outline: none;
  }

  #submit-button {
    background-color: transparent;
    border: none;
  }

  p[sentTime]:hover::after {
    content: attr(sentTime);
    position: absolute;
    top: -3px;
    font-size: 14px;
    color: gray;
  }

  .chatbot p[sentTime]:hover::after {
    left: 15px;
  }

  .user-message p[sentTime]:hover::after {
    right: 15px;
  }

  /* width */
::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .chip {
    color: #ffffff;
    display: inline-block;
    padding: 0 5px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    border-radius: 25px;
    background-color: #1687C6;
  }
        </style>
    </head>
    <body>
        <div class="chatbot-container">
            <div id="header">
                <!--<img src="images/collect_logo_680x680.png" alt="" width="60" height="60">-->
            </div>
            <div id="chatbot">
                <div id="conversation">
                  <div class="chatbot-message">
                    <p class="chatbot-text">Welkom bij Collect&Go! Waarmee kan ik je helpen?</p>
                  </div>
                </div>
                <form id="input-form">
                  <message-container>
                    <input id="input-field" type="text" placeholder="Typ hier je bericht">
                    <button id="submit-button" type="submit">
                        <i class="fa-solid fa-2x fa-share" style="color: #1687C6;"></i>
                    </button>
                  </message-container>

                </form>
                <!--<button id="chiptest" style="border:0;">
                  <div class="chip">John Doe</div>
                </button>-->
            </div>
        </div>
        <script src="chatbot.js"></script>
    </body>
    </html>
  `;



  // Add the HTML code to the overlay container
  overlayDiv.innerHTML = overlayContent;

  // Apply CSS styles to the overlay container
  overlayDiv.style.position = "fixed";
  overlayDiv.style.top = "0";
  overlayDiv.style.left = "0";
  overlayDiv.style.width = "200px";
  overlayDiv.style.height = "500px";
  overlayDiv.style.background = "rgba(0, 0, 0, 0.5)";
  overlayDiv.style.zIndex = "9999";

  // Append the overlay container to the body of the webpage
  document.body.appendChild(overlayDiv);
})();

// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="user-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});

    // Append the overlay content to the overlay container
  overlayContent.appendChild(overlayContent);

  // Apply CSS styles to the overlay container
  overlayContent.style.position = "fixed";
  overlayContent.style.top = "0";
  overlayContent.style.left = "0";
  overlayContent.style.width = "100%";
  overlayContent.style.height = "100%";
  overlayContent.style.background = "rgba(0, 0, 0, 0.5)";
  overlayContent.style.zIndex = "9999";

  // Append the overlay container to the body of the webpage
  document.body.appendChild(overlayContent);
