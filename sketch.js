



function mousePressed(){
    let bgpage=chrome.extension.getBackgroundPage();
    let word=bgpage.word;
    let arr=bgpage.arr__;

}

function setup(){
    noCanvas();

    let bgpage=chrome.extension.getBackgroundPage();
    let word=bgpage.word;
    let arr=bgpage.arr_;

    var i;
    for(i=0;i<3;i++){
        createP(i+1+") " + word[i]);
    }

    
    
    
    
}



//load contentscript (set 1) ---> detect change in url ---> load content script