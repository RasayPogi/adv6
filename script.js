let stack = [];
const maxStackSize = 8;

document.getElementById('pushButton').addEventListener('click', function() {
    const inputValue = document.getElementById('stackInput').value;

    if (inputValue !== '' && stack.length < maxStackSize) {
        stack.push(inputValue);
        document.getElementById('stackInput').value = ''; 
        updateStackDisplay();
    }
});

document.getElementById('popButton').addEventListener('click', function() {
    if (stack.length > 0) {
        stack.pop();
        updateStackDisplay();
    }
});

function updateStackDisplay() {
    const stackDisplay = document.getElementById('stackDisplay').children;
    
    for (let i = 0; i < maxStackSize; i++) {
        stackDisplay[i].textContent = '';
    }

    for (let i = 0; i < stack.length; i++) {
        stackDisplay[maxStackSize - 1 - i].textContent = stack[i];
    }
}