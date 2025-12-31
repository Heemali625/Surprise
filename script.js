const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s =>
    s.classList.remove("active")
  );
  document.getElementById(id).classList.add("active");
}

function goToEnvelope() {
  showScreen("screen2");
}

function openLetter() {
  showScreen("screen3");
}

function showNewYear() {
  showScreen("screen4");
}

function showFinal() {
  showScreen("screen5");

  const line = document.getElementById("s5-line");
  const btn  = document.getElementById("s5-btn");

  if (!line || !btn) return; // safety guard

  // reset
  line.className = "line";
  line.innerHTML = "";
  btn.classList.add("hidden");

  // STEP 1: Line 1 (IMMEDIATE)
  line.innerHTML = "Arey nhi nhi ek ajun hota 😁😁";

  // STEP 2: Line 2 (after reading time)
  setTimeout(() => {
    line.innerHTML = "kya? kya dhundh rahe ho? 😁";
    line.classList.add("clickable");
  }, 3000);

  // STEP 3: click → Line 3 → Button
  line.onclick = () => {
    if (!line.classList.contains("clickable")) return;

    line.classList.remove("clickable");

    line.innerHTML =
      "oh ha yahi soch rahe ho na roka kyu?<br>nhi soch rahe toh socho yaar 😂";

    setTimeout(() => {
      line.innerHTML = "";
      btn.classList.remove("hidden");
    }, 3500);
  };
}


function showPhoto() {
  showScreen("screen6");
}

