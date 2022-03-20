function calculateSquare(){
    let x = document.getElementById('length').value;
    if (isNaN(x)) {
        alert('Please enter numerical values!');
      }
    let y = document.getElementById('width').value;
    if (isNaN(y)) {
        alert('Please enter numerical values!');
      }
    let res = Number(x) * Number(y);
    let n = res.toFixed(2);
    document.getElementById('answer').innerHTML = 'The answer is '+ n;
    document.getElementById('SelectedUnit').innerHTML = units.value;
    myArray.push(n);
    myArray.push(x);
    myArray.push(y);
    document.getElementById('answerhistory').innerHTML = 'The previous calculation was '+ myArray[1+i] + ' multiplied by '+ myArray[2+i] + ' to get an area of '+ myArray[0+i] + " " + units.value;
    i+=3;
}


function calculateTriangle(){
    let x = document.getElementById('base').value;
    if (isNaN(x)) {
        alert('Please enter numerical values!');
      }
    let y = document.getElementById('height').value;
    if (isNaN(y)) {
        alert('Please enter numerical values!');
      }
    let res = Number(x*y) / 2;
    let n = res.toFixed(2);
    document.getElementById('answer').innerHTML = 'The answer is '+ n + " " + units.value;
    myArray.push(n);
    myArray.push(x);
    myArray.push(y);
    document.getElementById('answerhistory').innerHTML = 'The previous calculation was '+ myArray[1+i] + ' added to '+ myArray[2+i] + ' and divided by 2 to get an area of '+ myArray[0+i] + " " + units.value;;
    i+=3;
  }

function calculateTrapezoid(){
    let x = document.getElementById('base1').value;
    if (isNaN(x)) {
        alert('Please enter numerical values!');
      }
    let y = document.getElementById('base2').value;
    if (isNaN(y)) {
        alert('Please enter numerical values!');
      }
    let z = document.getElementById('height').value;
    if (isNaN(z)) {
        alert('Please enter numerical values!');
      }
    let basetotal = Number(x) + Number(y);
    let res = Number(basetotal/2)*Number(z);
    let n = res.toFixed(2);
    document.getElementById('answer').innerHTML = 'The answer is '+ n + " " + units.value;
    myArray.push(n);
    myArray.push(x);
    myArray.push(y);
    myArray.push(z);
    document.getElementById('answerhistory').innerHTML = 'The previous calculation was base1('+ myArray[1+i] + ') added to base2('+ myArray[2+i] + ') and divided by 2 and multiplied by height('+myArray[3+i] + ') to get an area of '+ myArray[0+i] + " " + units.value;;
    i+=4;
}

function displayHistory() {
  var x = document.getElementById('history');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
