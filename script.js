console.log('Website gestart');
window.addEventListener("load", function () {
  var robo = document.getElementById("robo1");
  robo.width=20;
  var robo_d = 5;
  setInterval(function () {
    robo_d = (robo.width > 100 || robo.width <5)?robo_d*-1:robo_d;
    robo.width+= robo_d;
  }, 1000);

  
});