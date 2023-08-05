let element = document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('span ho main ' + event.target.textContent);
    }
});