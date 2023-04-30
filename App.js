
const listitem = document.querySelectorAll('li');

const p = document.createElement('p');
p.textContent = 'hello world'

 document.body.append(p)

 const parent = document.querySelector('ol')
 const fragment =document.createDocumentFragment()
 
 for (let i = 0; i < 3; i++) {
    const li = document.createElement('li')
    li.textContent =   `list item with i=${i}`
fragment.append(li)
    
}
parent.append(fragment)

console.log(listitem[0].textContent = 'hello ask; asm')



