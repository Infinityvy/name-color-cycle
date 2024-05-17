const path = require('path');
const fs = require('fs');
const logger = require('./Logger')

const execDir = path.dirname(process.execPath);
const configPath = path.join(execDir, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const options = {
  method: 'PUT',
  headers: {
    'Client-ID': config.helix_id,
    authorization: `Bearer ${config.helix_token}`,
  },
}

const changeColor = async (hexColor) =>
{
  const encodedColor = encodeURIComponent(hexColor)
  const url = `chat/color?user_id=${config.user_id}&color=${encodedColor}`
  const response = await fetch('https://api.twitch.tv/helix/' + url, options)

  if (response.status !== 204)
  {
    logger.Error('Something went wrong trying to change your color. Make sure your config is setup correctly.')
  }
}

function getRandomHexCode()
{
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  // Convert each component to hexadecimal and pad with zeros if necessary
  let redHex = red.toString(16).padStart(2, '0');
  let greenHex = green.toString(16).padStart(2, '0');
  let blueHex = blue.toString(16).padStart(2, '0');

  // Concatenate the hexadecimal values to form the hex code
  let hexCode = '#' + redHex + greenHex + blueHex;

  return hexCode;
}

module.exports =
{
  changeColor,
  getRandomHexCode,
}
