console.log('Website gestart');
window.addEventListener("load", function () {
  var robo = document.getElementById("robo1");
  var robo_d = 5;
  setInterval(function () {
    robo_d = (robo.width > 100 | robo.width <5)?robo_d*=-1:robo_d;
    robot.width+= robo_d;
  }, 1000);

  
});