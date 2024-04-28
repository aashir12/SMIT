// const parent = document.getElementById('parent');
// const childs = document.getElementsByClassName('childs');

// parent.addEventListener('mouseover', () => {
//     console.log('enterd parent');
// });
// parent.addEventListener('mouseout', () => {
//     console.log('left parent');
// });

// for (let i = 0; i < childs.length; i++) {
//     childs[i].addEventListener('click', () => {
//         console.log(` clicked on ${i + 1} child`);
//     });
// }


// task2
const submit = document.getElementById('submit');
const remove = document.getElementsByClassName('remove');

function Remover(li) {
    li.style.display = 'none'; 
}

submit.addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const list = document.getElementById('list');
    var li = document.createElement('li');
    li.innerHTML = `${text} <button onclick="Remover(this.parentNode)">Remove</button>`;
    list.appendChild(li);
});
