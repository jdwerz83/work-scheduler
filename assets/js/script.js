var timeEl = $("#currentDay");
var currentTime;
clockUpdater();
loadField();

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
    var text = $(event.target).siblings(".appointment").val();
    var time = $(event.target).parent().attr("id");

    if(text === "")
        alert("Type appointments into the field to save")
    else{
        localStorage.setItem(time, text);
        alert("Task saved");
    }
}

function loadField(){
    $('#9 .appointment').val(localStorage.getItem('9'));
    $('#10 .appointment').val(localStorage.getItem('10'));
    $('#11 .appointment').val(localStorage.getItem('11'));
    $('#12 .appointment').val(localStorage.getItem('12'));
    $('#13 .appointment').val(localStorage.getItem('13'));
    $('#14 .appointment').val(localStorage.getItem('14'));
    $('#15 .appointment').val(localStorage.getItem('15'));
    $('#16 .appointment').val(localStorage.getItem('16'));
    $('#17 .appointment').val(localStorage.getItem('17'));
}