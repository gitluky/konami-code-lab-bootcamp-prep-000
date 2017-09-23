const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;

function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.which);
  if (key === code[index]){
    index++;
    if (index === code.length){
      alert('Konami Code Enabled');
    }
  }
  else {
    index = 0;
  }
}

document.body.addEventListener('keydown', init)
