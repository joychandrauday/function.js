// task 1
console.log('============Take four parameters. Multiply the four numbers and then return the result============')

function sumOfFour(num1,num2,num3,num4) {
    const sum=num1+num2+num3+num4;
    console.log('the sum of four numbers is',sum);
}
sumOfFour(3,2,4,2); //input your numbers here


// task 2
console.log('============Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.============')

function calcNum(num5) {
    if(num5%2!=0){
        const result=num5*2
        return console.log('the number is odd and',result,'is its double.')
    }else{
        const result=num5/2;
        return console.log('the number is even and',result,'is its half.')
    }
    
}
calcNum(6) //insert your number.



// task 3
console.log('============Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.============')

function make_avg(numbers) {
    let sumNum=0;
    const numNum= numbers.length;
    for(const number of numbers){
        sumNum+=number;
    }
    const averageNum=sumNum/numNum;
    return averageNum;
}

const numbers1=[15,15,5,5]; //insert your number in this array and i will make their average 
const averageNum=make_avg(numbers1)
console.log('the average of the numbers of the array',numbers1,'is',averageNum);


// task 4
console.log('============Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.============')

function count_zero(str){
    let totalZero=0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i]==='0') {
            totalZero=totalZero+1;
        }
    }
    return totalZero;
}
const binaryOne="0111001001";//insert your binary strings here

const totalZero=count_zero(binaryOne);
console.log('there are total',totalZero,'zero in this binary string');


// task 4
console.log('============Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd============')

function odd_even(number) {
    if (number%2===0) {
        console.log('the number',number,'is even.')
    }else{
        console.log('the number',number,'is odd.')
    }
}
odd_even(5);//insert you number into the () to find its even or odd.

