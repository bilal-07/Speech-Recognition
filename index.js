const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  texts.appendChild(p);
  console.log(text);
  if (e.results[0].isFinal) {
    if (text.includes("hello")) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "Hi! How are you? 😀";
      texts.appendChild(p);
    }

    if (
      text.includes("what is your name") ||
      text.includes("what's your name")
    ) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "My name is Bilal,Yours? 😎";
      texts.appendChild(p);
    }

    if (text.includes("open YouTube")) {
      p = document.createElement("p");
      p.classList.add("reply");
      p.innerText = "Opening YouTube 😐";
      texts.appendChild(p);
      window.open("https://www.youtube.com/");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
