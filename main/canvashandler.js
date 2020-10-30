const iframe = document.getElementById('iframe');

addEventListener('click',()=>{
    //console.log('event');
    iframe.focus();
})


var myLinks = document.getElementsByTagName('a');

for(var i = 0; i<myLinks.length;i++){
    myLinks[i].addEventListener('click',link=>{
        for(var j=0; j<myLinks.length;j++){
            if(link.target == myLinks[j]){
                //myLinks[j].style.color = "red";
                myLinks[j].className = 'active';
            } else {
                myLinks[j].className = "notActive";
            }
        }
    })
}