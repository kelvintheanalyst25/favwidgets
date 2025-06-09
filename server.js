
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const descriptions = [
  '🔥 This is a blazing hot widget!',
  '🔥 Stay fired up with this visual spark!',
  '🔥 Visual heatwave incoming!',
  '🔥 The widget that burns bright!',
  '🔥 Heat meets style — fire it up!',
];

// Endpoint serving random widget data
app.get('/widget-data', (req, res) => {
  const randomIndex = Math.floor(Math.random() * descriptions.length);
  const data = {
    image: `https://source.unsplash.com/random/400x300?sig=${Math.floor(Math.random() * 1000)}`,
    text: descriptions[randomIndex],
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Widget backend running on port ${PORT}`);
});
