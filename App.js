const button =document.querySelector('button');
button.addEventListener('click', onclick);
function onclick() {
    console.log(event)
    console.log(event.type)
    console.log(event.target)

    console.log('You clicked the button')
}