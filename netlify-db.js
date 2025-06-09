

exports.handler = async function(event, context) {
  const descriptions = [
    '🔥 This is a blazing hot widget!',
    '🔥 Stay fired up with this visual spark!',
    '🔥 Visual heatwave incoming!',
    '🔥 The widget that burns bright!',
    '🔥 Heat meets style — fire it up!',
  ];

  const randomIndex = Math.floor(Math.random() * descriptions.length);
  
  const data = {
    image: `https://source.unsplash.com/random/400x300?sig=${Math.floor(Math.random() * 1000)}`,
    text: descriptions[randomIndex],
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // allow CORS
    },
  };
};
