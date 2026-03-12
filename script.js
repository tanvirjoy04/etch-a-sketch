const container = document.querySelector('.container');

for(let j = 0; j < 16; j++){
  const rowOne = document.createElement('div');
  container.appendChild(rowOne);

  for(let i = 0; i < 16; i++){
    const newDiv = document.createElement('div');
    newDiv.style.padding = '5px';
    rowOne.appendChild(newDiv);

    newDiv.addEventListener('mouseenter', function(){
      newDiv.style.backgroundColor = 'aqua';
    });
  }
}


const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  let input = prompt("Number of squares per side: (max 100)");
  if(input <= 100){
    const temp = document.querySelector('.container');
    temp.innerHTML = '';

    for(let b = 0; b < input; b++){
      const line =  document.createElement('div');
      container.appendChild(line);

      for(let a = 0; a < input; a++){
        const sq = document.createElement('div');
        sq.style.padding = '5px';
        line.appendChild(sq);
        
        sq.addEventListener('mouseenter', function(){
        sq.style.backgroundColor = 'aqua';
        });
      }
    }
    
  }

});