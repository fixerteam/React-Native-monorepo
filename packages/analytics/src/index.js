function error(...messages) {
  console.warn('== Error == | ', ...messages)
}

function log(...messages) {
  console.log('== Log == | ', ...messages)
}

function warning(...messages) {
  console.log('== Warning == | ', ...messages)
}

function notImplement() {
  console.warn('== Info == | Not implemented feature')
}

export default {
  error,
  log,
  warning,
  notImplement
}
