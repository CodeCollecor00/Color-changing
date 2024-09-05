const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
const heading = document.querySelector("h1");
const logo = document.querySelector('.code')
const count = document.querySelector(".container")
const paragraph = document.getElementById('para');
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            heading.style.color = 'white';
            logo.style.color = 'white'
            count.style.border = '4px solid white'
            paragraph.style.color = 'black';
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = '#bf42f5';
            heading.style.color = 'black';
            logo.style.color = 'black';
            count.style.border = '4px solid black';
            paragraph.style.color = 'white';
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = '#f58d42';
            heading.style.color = 'white';
            logo.style.color = 'white';
            count.style.border = '4px solid white'
        }
        if (e.target.id === 'green'){
            body.style.backgroundColor = '#f542b3';
            heading.style.color = 'black';
            logo.style.color = 'black'
            count.style.border = '4px solid black'
        }
        if (e.target.id === 'brown'){
            body.style.backgroundColor = e.target.id;
            heading.style.color = 'white';
             logo.style.color = 'white'
            count.style.border = '4px solid white'
        }
    })
})