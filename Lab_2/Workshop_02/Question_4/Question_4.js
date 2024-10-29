const textarea = document.getElementById("message");
const container = document.getElementById("container");
const charCount = document.getElementById("charCount");
const maxChars = 250;

function autoResize() {
  textarea.style.height = 'auto'; // Reset height
  textarea.style.height = `${textarea.scrollHeight}px`;
}

textarea.addEventListener("input", () => {
  const currentChars = textarea.value.length;
  charCount.textContent = `${currentChars} / ${maxChars}`;

  if (currentChars >= maxChars) {
    container.classList.add("limit");
    textarea.classList.add("limit");
    charCount.classList.add("limit");
    textarea.value = textarea.value.substring(0, maxChars); // Prevent additional input
  } else {
    container.classList.remove("limit");
    textarea.classList.remove("limit");
    charCount.classList.remove("limit");
    
  }
  autoResize();
});

