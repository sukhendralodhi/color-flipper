const hex = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const nav = document.getElementById('nav');

const simpleBtn = document.querySelector('.simple');
const hexBtn = document.querySelector('.hex');

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[ranNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    color.style.color = hexColor;
    
    console.log(ranNumber());
});

hexBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    hexBtn.classList.add('active');
    simpleBtn.classList.remove('active');
    nav.style.backgroundColor = 'lightgreen';
});


simpleBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    simpleBtn.classList.add('active');
    hexBtn.classList.remove('active');
    nav.style.backgroundColor = 'violet';
});

const ranNumber = () => {
    return Math.floor(Math.random() * hex.length);
}
