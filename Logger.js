function Log(text)
{
  const date = new Date()
  console.log('[' + date.toLocaleTimeString() + ']' + ' ' + text)
}

function Error(text)
{
  const date = new Date()
  console.error('[' + date.toLocaleTimeString() + ']' + ' Error: ' + text)
}

module.exports = {
  Log,
  Error,
}
