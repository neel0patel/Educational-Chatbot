const chatlog = document.getElementById("chatlog");
const userInput = document.getElementById("userInput");
const botResponse = document.getElementById("botResponse");

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userMessage = userInput.value;
    userInput.value = "";
    appendMessage("User: " + userMessage);
    respondToUser(userMessage);
  }
});

function appendMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  chatlog.appendChild(messageElement);
  chatlog.scrollTop = chatlog.scrollHeight;
}

function respondToUser(message) {
  let response = "I'm sorry, I don't understand that request.";

  if (message.toLowerCase().includes("math")) {
    response =
      "Here are some math resources: <a href='https://www.khanacademy.org/'>Khan Academy</a>, <a href='https://www.wolframalpha.com/'>Wolfram Alpha</a>.";
  } else if (message.toLowerCase().includes("science")) {
    response =
      "You can learn about science from <a href='https://www.nationalgeographic.com/'>National Geographic</a>, <a href='https://www.sciencenews.org/'>ScienceNews</a>.";
  } else if (message.toLowerCase().includes("technology")) {
    response =
      "Explore technology topics at <a href='https://techcrunch.com/'>TechCrunch</a>, <a href='https://www.technologyreview.com/'>MIT Technology Review</a>.";
  } else if (message.toLowerCase().includes("history")) {
    response =
      "History resources can be found at <a href='https://www.history.com/'>History.com</a>, <a href='https://www.historychannel.com/'>The History Channel</a>.";
  } else if (message.toLowerCase().includes("art")) {
    response =
      "Discover the world of art at <a href='https://www.metmuseum.org/'>The Metropolitan Museum of Art</a>, <a href='https://artsandculture.google.com/'>Google Arts & Culture</a>.";
  } else if (message.toLowerCase().includes("music")) {
    response =
      "Explore the realm of music with <a href='https://www.spotify.com/'>Spotify</a>, <a href='https://www.rollingstone.com/'>Rolling Stone</a>.";
  }

  document.getElementById("botResponse").innerHTML = response;

  document.getElementById("user-input").style.display = "none";

  setTimeout(() => {
    appendMessage("Chatbot: " + response);
  }, 1000);
}
