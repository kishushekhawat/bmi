let heightDiv = document.getElementById('height');
let weightDiv = document.getElementById('weight');
let btn = document.getElementById('btn')
let bmiValue = document.getElementById('bmi');



function calc() {
  let height = heightDiv.value;
  let weight = weightDiv.value;
  let result = (weight) / (Math.pow(height * 0.01, 2))
  let status = ""

  if (result < 18.5) {
    status = "Underweight"
  } else if (result < 25) {
    status = "Underweight"
  } else if(result < 30) {
    status = "Normal Weight"
  }
  else if(result < 35){
    status = "Obesity"
  }
  else{
status="Severe Obesity"
  }

  bmiValue.innerText = status + ", BMI: " + result.toFixed(2)

}
