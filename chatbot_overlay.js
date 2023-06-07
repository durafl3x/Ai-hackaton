// Create the overlay container div
  var overlayDiv = document.createElement("div");
  overlayDiv.className = "overlay-container";
  overlayDiv.id = "overlay-container";

  


  // Add the HTML code to the overlay container
  overlayDiv.innerHTML = overlayContent;

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
  overlayContainer.appendChild(overlayContent);

  // Apply CSS styles to the overlay container
  overlayContainer.style.position = "fixed";
  overlayContainer.style.bottom = "0";
  overlayContainer.style.right = "0";
  overlayContainer.style.width = "100px";
  overlayContainer.style.height = "100px";
  overlayContainer.style.background = "rgba(0, 0, 0, 0.5)";
  overlayContainer.style.zIndex = "9999";

  // Append the overlay container to the body of the webpage
  document.body.appendChild(overlayContent);
