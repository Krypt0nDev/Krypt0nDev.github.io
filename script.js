const loveMessages = [
    "רוצה איתך מאה אלף נקניקים",
    "אוהב את דני עד השמיים מאוהב לדני בעיניים",
    "אוהב אותך מאוד",
    "מה ההבדל בין צ'ס לדני? את דני אני אוהב יותר",
    "חולה בבית וחולה עלייך",
    "בא לי לחבק אותך",
    "רוצה להיות חברה שלי?",
    "מה ההבדל ביו כל בת ישראל לדני? דני יפה",
    "תגידי את דני? יופי מעולה",
    "אם היה לי נקניק על כל טיפת אהבה אלייך לא היו נשארים נקניקים לאמץ :("





];

const loveMessageElement = document.getElementById('love-message');
const changeMessageButton = document.getElementById('change-message');

changeMessageButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    loveMessageElement.textContent = loveMessages[randomIndex];
});
