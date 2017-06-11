(function(){

  var loadScript = function(src) {
    var script = document.createElement('script');
    var first = document.getElementsByTagName('script')[0];
    script.src = src;
    first.parentNode.insertBefore(script, first);
  };

  setTimeout(function(){
    var img = document.getElementById("splash-logo-img");
    img.src = "img/logo-splash.jpg";
    img.onload = function() {
      setTimeout(function(){
        img.style.opacity = 1;
        loadScript("/js/lightgl.js");
        loadScript("/js/bundle.min.js");
        // loadScript("/js/dev/bundle.js");
      }, 1);
    };
  },500);
})();
