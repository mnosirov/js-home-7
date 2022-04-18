// Mantiqiy operator: AND (&&), OR (||), NOT (!)

var elCheckTicket = document.querySelector("#ticket");
var elCheckMeet = document.querySelector("#meet");
var elCheckLate = document.querySelector("#late");
var elCheckReady = document.querySelector("#ready");

var elBtnGo = document.querySelector(".go-Egypt");
var elOutStudy = document.querySelector(".Egypt");
var message = "";

elBtnGo.addEventListener("click", function (e) {
  e.preventDefault();
  var ticket = elCheckTicket.checked;
  var meet = elCheckMeet.checked;
  var late = elCheckLate.checked;
  var ready = elCheckReady.checked;

  if ((ticket && !meet && !late) || (ticket && !ready && !late)) {
    message = "Xa, safaringiz bexatar bo'lsin!";
  } else {
    message = "Yo'q, Misrga xozirda borolmaysiz!";
  }

  elOutStudy.textContent = message;
})