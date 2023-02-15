
Conversation opened. 1 unread message.


Skip to content
Using Gmail with screen readers
1 of 18,294
(no subject)
Inbox

saranya veeramani <saran19.vera@gmail.com>
7:31 AM (1 minute ago)
to me

const express = require('express');
const app = express();

app.get('/even-numbers', (req, res) => {
  let evenNumbers = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  res.send(`Even numbers between 1 and 50: ${evenNumbers.join(', ')}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

