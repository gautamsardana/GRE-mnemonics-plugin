 chrome.runtime.onMessage.addListener(receiver1);
 chrome.runtime.onMessage.addListener(receiver2);

window.arr_="s";
function receiver1(request, sender, sendResponse){
    console.log(request);
    window.arr=request.text;
}

window.word="abcd";
function receiver2(request, sender, sendResponse){
    console.log(request);
    window.word=request.text;
}



chrome.webNavigation.onHistoryStateUpdated.addListener(function() {
    chrome.tabs.executeScript({file: "contentscript1.js"}); 
});



 