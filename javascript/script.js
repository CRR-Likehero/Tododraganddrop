const btn = document.querySelector('#btn');
const workRow = document.querySelector('.workrow');
const workRows = document.querySelectorAll('.workrow');


btn.addEventListener('click', makePost);

document.addEventListener('click', delPost);


function makePost() {
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    div.appendChild(input)
    // const textnode = document.createTextNode('Hello World');
    // div.appendChild(textnode);
    div.setAttribute('draggable', true);
    div.className = ('workrowtask');

    const delbtn = document.createElement('button');
    const textnodebtn = document.createTextNode('-');
    delbtn.appendChild(textnodebtn);
    delbtn.className = ('worktaskdelbtn');
    div.appendChild(delbtn);
    workRow.appendChild(div);
};  

function delPost(e) {
    if(e.target && e.target.className === 'worktaskdelbtn') {
        e.target.parentNode.remove();
    };
};
  
for (let r = 0; r < workRows.length; r++) {
    const rows = workRows[r]

    rows.addEventListener('dragover', (e) => {
        e.preventDefault();
        
    });

    rows.addEventListener('dragenter', (e) => {
        e.preventDefault();
        e.target.setAttribute('isdragging', true);
    });

    rows.addEventListener('drop', (e) => {
        e.preventDefault();
        const dragDrop = document.querySelector('.workrowtask[isdragging="true"]');
        dragDrop.removeAttribute('isdragging')
        rows.appendChild(dragDrop);
    });

};   