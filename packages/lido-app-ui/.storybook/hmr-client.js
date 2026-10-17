/* global __resourceQuery */
// one EventSource per docs embed exhausts Chrome's 6-connections-per-host limit; only top-level preview frames connect
if (window.parent === window.top) {
  require('webpack-hot-middleware/client?autoConnect=false').setOptionsAndConnect(
    Object.fromEntries(new URLSearchParams(__resourceQuery.slice(1))),
  )
}
