var timeEl = $("#currentDay");
var currentTime;
clockUpdater();
loadData();

var clock = setInterval(clockUpdater, 1000)

function clockUpdater(){
    currentTime = moment();
    timeEl.text(currentTime);
    checkTimeBlock();
}
