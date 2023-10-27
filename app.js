const text = document.getElementById("text");
const generated = Math.floor(Math.random() * 10);
const input = document.getElementById("input").value;
const huckle = (number) => {
  number.preventDefault;
  console.log(input);
  console.log(generated);
  if (number == generated) {
    console.log("corrrect number you won");
    text.innerHTML = "correct number you won 🤩🤩 ";
  } else if (number > generated) {
    console.log("bigger");
    text.innerHTML = "bigger than the number try again 😥😥";
  } else if (number < generated) {
    console.log("smaller");
    text.innerHTML = "smaller than the number try again 😥😥";
  }
};

// huckle(10)
// function showText(){
//   text.innerHTML = "fftyqfytqf"

// }
// huckle(10)

// Compute this sequence  1, 2, 3, 5, 8, 13, 21, 33  ... to 100

// Can start with this: x = 5, y = 10.
// Exchange x and y

// for (let i = 2; i <= 12; i++) {
//     for(let j =1; j<=12; j++){
//         console.log(`${i} x ${j} = ${i*j}`)

// }
// }

// let x = 5
// let y  = 10

// let exchange = x
// x= y
// y= exchange
// let a = 1;
// let b = 1;
// console.log(a);
// for (let i = 2; i <= 10; i++) {
//   let temp = a + b;
//   console.log(temp);
//   a = b;
//   b = temp;
// }
