const theDiv = document.getElementById('thediv');
let i = 1;

const timer = setInterval(() => {
    const content = `<p>Adding paragraph ${i}</p>`;
    theDiv.innerHTML += content;
    i++;
}, 3500);

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timer);
});
