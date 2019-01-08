var i;
var arr=[];
for(i=0;i<3;i++){
    
    if(document.getElementsByClassName("card mnemonic-card")[i].getElementsByTagName("p")[0].textContent !== "Powered by Mnemonic Dictionary")
    {
      
        arr.push(document.getElementsByClassName("card mnemonic-card")[i].getElementsByTagName("p")[0].textContent);
    }

    else{
      
        arr.push(document.getElementsByClassName("card mnemonic-card")[i].getElementsByTagName("p")[1].textContent);
    }
}

console.log(arr);


    let message1={
        text: arr
    };
    chrome.runtime.sendMessage(message1);
