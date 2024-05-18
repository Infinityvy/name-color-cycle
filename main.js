process.removeAllListeners('warning');

const logger = require('./Logger.js')
const { getRandomHexCode, changeColor, getRandomBrokieColor, config } = require('./ColorUtils.js')


function changeToRandomColor()
{
    changeColor(getRandomHexCode())
}

function changeToRandomBrokieColor()
{
    changeColor(getRandomBrokieColor())
}

if(config.prime_user)
{
    setInterval(changeToRandomColor, config.change_interval_ms)
    logger.Log('Color cycle enabled.')
}
else
{
    setInterval(changeToRandomBrokieColor, config.change_interval_ms)
    logger.Log('Brokie color cycle enabled.')
}


