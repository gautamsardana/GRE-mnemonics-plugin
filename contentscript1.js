var final=document.location.href.split("/");
var selectedText= final[final.length-1];
var url="https://mnemonicdictionary.com/?word=" + selectedText;

x=window.open(url);
setTimeout("x.close()",3000);


if (selectedText.length>0){

    let message={
        text: selectedText
    };
    chrome.runtime.sendMessage(message);
}




    


