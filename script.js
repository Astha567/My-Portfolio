// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
  navLinks.style.display = navLinks.classList.contains('nav-open') ? 'flex' : 'none';
});

// ===== "Currently learning" rotator =====
// Edit this list to reflect what you're actually learning right now.
const learningTopics = [
  "HTML & CSS",
  "JavaScript",
  "Git & GitHub",
  "How the web actually works"
];

let topicIndex = 0;
const learningWordEl = document.getElementById('learningWord');

setInterval(() => {
  topicIndex = (topicIndex + 1) % learningTopics.length;
  if (learningWordEl) {
    learningWordEl.style.opacity = 0;
    setTimeout(() => {
      learningWordEl.textContent = learningTopics[topicIndex];
      learningWordEl.style.opacity = 1;
    }, 200);
  }
}, 2600);
