let input = document.querySelector('.input');
let ul = document.querySelector('ul');
let add = () => {
    let newLi = document.createElement('li');
    let newSpan = document.createElement('span');
    newLi.textContent = input.value;
    ul.prepend(newLi);
    input.value = '';
    input.focus();

    newSpan.textContent = 'x';
    newSpan.classList = 'text-danger';
    newLi.append(newSpan);

    newLi.addEventListener('click', doneTask(newLi));
    newSpan.addEventListener('click', removeItem(newSpan));
}

input.addEventListener('keyup', function(e){
    if(e.which == 13){
        add();
    }
});

let doneTask = (x) => {
    x.addEventListener('click', function(){
        if(x.classList.contains('checked')){
            x.style.backgroundColor = '';
            x.style.color = '';
            x.classList = ''
        }else{
            x.style.backgroundColor = '#535353';
            x.style.color = 'white';
            x.classList = 'checked'
        }
    })
}

let removeItem = (x) => {
    x.addEventListener('click', function(){
        x.parentElement.remove();
    });
}