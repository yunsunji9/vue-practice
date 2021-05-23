export const scrollNode = document.scrollingElement || document.documentElement || document.body;

export const getScrollOffsetY = function(){
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}

export function scrollTo (to, duration) {
  const element = document.scrollingElement || document.documentElement
  const start = element.scrollTop
  const change = to - start
  const startDate = +new Date()

  const animateScroll = () => {
    const currentDate = +new Date()
    const currentTime = currentDate - startDate

    element.scrollTop = Math.floor(easeInOutQuad(currentTime, start, change, duration))
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll)
    } else {
      element.scrollTop = to
    }
  }
  animateScroll()
}

export function easeInOutQuad(t, b, c, d) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}
