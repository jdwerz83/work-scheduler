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

function checkTimeBlock(){
    var currentHour = currentTime.hours();
    var timeBlock = $(".time-block");
    for (let i = 0; i < timeBlock.length; i++) {
        var block = timeBlock[i];
        if (parseInt(block.id.split("-")[0]) < currentHour){
            $(block).addClass("past");
        }   else if (parseInt(block.id.split("-")[0]) === currentHour){
                $(block).removeClass("past");
                $(block).addClass("present");                
        }   else{
                $(block).removeClass("past");
                $(block).removeClass("present");
                $(block).addClass("future");
        }        
    }
}

$(".saveBtn").on("click", saveClick);

function saveClick(event){
    var text = $(event.target).siblings(".description").val();
    var time = $(event.target).parent().attr("id");

    if(text === "")
        alert("Type appointments into the field to save")
    else{
        localStorage.setItem(time, text);
        alert("Task saved");
    }
}