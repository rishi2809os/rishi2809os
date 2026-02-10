document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const envelope = document.getElementById("envelope-container");
  const letter = document.getElementById("letter-container");
  const noBtn = document.querySelector(".no-btn");
  const yesBtn = document.querySelector(".yes-btn");

  const title = document.getElementById("letter-title");
  const catImg = document.getElementById("letter-cat");
  const buttons = document.getElementById("letter-buttons");
  const finalText = document.getElementById("final-text");
  const letterWindow = document.querySelector(".letter-window");

  // Safety check (prevents silent failure)
  if (!envelope || !yesBtn || !noBtn) return;

  // Hide letter & final text initially
  letter.style.display = "none";
  finalText.style.display = "none";

  // Click Envelope
  envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
      letterWindow.classList.add("open");
    }, 50);
  });

  // NO button escape logic
  noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // YES button clicked 💖
  yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee! 💕";
    catImg.src = "cat_dance.gif";

    letterWindow.classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
  });
});
