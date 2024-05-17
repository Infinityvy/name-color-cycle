process.removeAllListeners('warning');

const logger = require('./Logger.js')
const { getRandomHexCode, changeColor } = require('./ColorUtils.js')
const config = require('./config.json')


function changeToRandomColor()
{
    changeColor(getRandomHexCode())
}

setInterval(changeToRandomColor, config.change_interval_ms)

logger.Log('Color cycle enabled.')

