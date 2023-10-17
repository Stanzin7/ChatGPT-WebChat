jQuery(document).ready(function () {
  $("#chatbot-icon").on("click", function (e) {
    $("#chat-window").toggle(); // Just use toggle here to switch between show/hide
  });

  $("#chat-close").on("click", function (e) {
    $("#chat-window").hide();
  });
});

function sendMessage() {
  let userInput = document.getElementById("user_input2").value;
  fetch("/ask", {
    method: "POST",
    body: new URLSearchParams({ user_message: userInput }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("chat-box").innerHTML +=
        "<span class='me'>You: " + userInput + "</span>";
      document.getElementById("chat-box").innerHTML +=
        "<span class='bot'>Bot: " + data.message + "</span>";
      document.getElementById("user_input").value = "";

      $("#chat-box").animate({ scrollTop: $("#chat-box")[0].scrollHeight }, 0);
    });
}
