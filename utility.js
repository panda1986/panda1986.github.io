// init vconsole
var vConsole = new VConsole();

// converts seconds to human read, for ex,
function secondsToHumanRead(sec) {
    var hours = Math.floor(sec / 60 / 60);
    var minutes = Math.floor((sec - hours * 60 * 60) / 60);
    var seconds = (sec - hours * 60 * 60 - minutes * 60).toFixed(3);
    return hours + "时" + minutes + "分" + seconds + "秒";
}
