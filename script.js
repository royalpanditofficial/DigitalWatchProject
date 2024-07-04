const quotes = [
    "You have to dream before your dreams can come true. - Dr. APJ Abdul Kalam",
    "Arise, awake and stop not until the goal is reached. - Swami Vivekananda",
    "The present is theirs; the future, for which I really worked, is mine. - Nikola Tesla",
    "Success is not a destination, but the road that you're on. - Deepak Chopra",
    "The world is changing very fast. Big will not beat small anymore. It will be the fast beating the slow. - Rupert Murdoch",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
    "I don’t count my sit-ups; I only start counting when it starts hurting because they’re the only ones that count. - Muhammad Ali",
    "The difference between stupidity and genius is that genius has its limits. - Albert Einstein",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The only thing worse than being blind is having sight but no vision. - Helen Keller",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Action is the foundational key to all success. - Pablo Picasso",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Quality is not an act, it is a habit. - Aristotle",
    "Well done is better than well said. - Benjamin Franklin",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates"
];

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to display time immediately
updateClock();

// Update quote on page load
updateQuote();
