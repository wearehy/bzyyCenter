$(function () {
    if (!navigator.userAgent.match(/mobile/i)) {
      //PC端
      $('#about').attr('href','./about.html')
    } else {
      //移动端
      $('#about').attr('href','https://zs.baozaoyunyu.com/')
    }
  })