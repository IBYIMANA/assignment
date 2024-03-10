        //fuction q11
        function displayPattern(rows) {
            for (let i = rows; i > 0; i--) {
                let pattern = '';
                for (let j = 0; j < i; j++) {
                    pattern += '1 ';
                }
                console.log(pattern);
            }
        }
        
        displayPattern(4);
        //q12
        function display(rows) {
            for (let i = 0; i < rows; i++) {
                let pattern = '';
                for (let j = 0; j < rows; j++) {
                    if (j >= rows - i - 1) {
                        pattern += '1 ';
                    } else {
                        pattern += '0 ';
                    }
                }
                console.log(pattern);
            }
        }
        display(5);
        //q9
        function combineArrays(arr1, arr2) {
            return arr1.concat(arr2);
        }
        
        const arrange = ['a', 'b', 'c', 'd'];
        const to = ['e', 'f', 'g'];
        
        const combinedArray = combineArrays(arrange, to);
        console.log(combinedArray);
        
        //q1 sum
        function Numbers(num1, num2) {
            return num1 + num2;
        }
        
        const sum = Numbers(5, 10);
        console.log(sum); 
        
        //q2 prodect
        function multiply(num1, num2) {
            return num1 * num2;
        }
        const product = multiply(5, 10);
        console.log(product); 
        
        //q3
        function subtract(num1, num2) {
            return num1 - num2;
        }
        
        const difference = subtract(5, 10);
        console.log(difference);
        
        //q4
        function divide(num1, num2) {
           
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Division by zero is not allowed";
            }
        }
        
        const result = divide(10, 2);
        console.log(result);
        
        //q5
        function sumArray(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
        
        const array = [1, 2, 3, 4, 5];
        const totalSum = sumArray(array);
        console.log(totalSum); 
        //q6
        function findGreatestValue(arr) {
            if (arr.length === 0) {
                return "Array is empty";
            }
            
            let greatest = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > greatest) {
                    greatest = arr[i];
                }
            }
            return greatest;
        }
        
        const arra = [1, 6, 3, 9, 2, 8];
        const greatestValue = findGreatestValue(array);
        console.log(greatestValue); 
        
        //q7
        
        function findSmallestNumber(arr) {
            if (arr.length === 0) {
                return "Array is empty";
            }
            
            let smallest = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < smallest) {
                    smallest = arr[i];
                }
            }
            return smallest;
        }
        
        const arr = [10, 6, 3, 9, 2, 8];
        const smallestNumber = findSmallestNumber(arr);
        console.log(smallestNumber); 
        
        //q8
        function calculateAverage(arr) {
            if (arr.length === 0) {
                return "Array is empty";
            }
            
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            
            return sum / arr.length;
        }
        
        const array1 = [1, 2, 3, 4, 5];
        const average = calculateAverage(array1);
        console.log(average); 
        
        //q10
        
        function displayPattern(rows, cols) {
            for (let i = 0; i < rows; i++) {
                let row = '';
                for (let j = 0; j < cols; j++) {
                    row += '* ';
                }
                console.log(row);
            }
        }
        
        const rows = 4;
        const cols = 5;
        displayPattern(rows, cols);
        //q13
        function displayPattern(rows, cols) {
            for (let i = 0; i < rows; i++) {
                let row = '';
                for (let j = 0; j < cols; j++) {
                    if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
                        row += '1 ';
                    } else {
                        row += '0 ';
                    }
                }
                console.log(row);
            }
        }
        const rows1 = 5;
        const cols1 = 5;
        displayPattern(rows1, cols1);
            //  Q14
            function displayPattern(rows) {
                for (let i = 0; i < rows; i++) {
                    let row = '';
                    for (let j = 0; j < rows - i - 1; j++) {
                        row += '  ';
                    }
                    row += '1\n';
                    console.log(row);
                }
            }
            const rows2 = 3;
            displayPattern(rows2);
            
             //q15
             function reverseArray(array) {
                return array.reverse();
            }
            
            var numbers = [1, 3, 4, 3, 7, 8, 0, 12, 19];
            var reversedArray = reverseArray(numbers);
            console.log(reversedArray); 
        
            //Q16 a
            function sortAscending(array) {
                return array.sort(function(a, b) {
                    return a - b;
                });
            }
            
            var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
            var sortedArray = sortAscending(someNumbers);
            console.log(sortedArray); 
            
           //   Q16 b
           function modifyArray(array) {
            var sortedArray = array.slice().sort((a, b) => a - b);
            var firstThree = sortedArray.slice(0, 3);
            var lastThree = sortedArray.slice(-3);
            return lastThree.concat(sortedArray, firstThree);
        }
        
        var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
        var modifiedArray = modifyArray(someNumbers);
        console.log(modifiedArray);
        
        
        //q17
        function classAge(age) {
                
            if(age >=0 && age <=12){
                return 'MIMICRY';
            }
            else if (age >=13 && age <=19) {
               return 'SELF-DISCOVERY';
            }
            else if (age >=20 && age<=45) {
                return 'COMMITMENT';
            } 
            else if( age >= 46) {
                return 'LEGACY';
            }
            else{
                return 'Your age is not classfied';
            }
        }
         let ageNumber =classAge(-2);
        console.log('Your Classification is :' , ageNumber);
        
        //q18
        function calculateBMI(weight, height) {
            height = height / 100;
            var bmi = weight / (height * height);
            var classification;
            if (bmi < 18.5) {
                classification = "Underweight";
            } else if (bmi >= 18.5 && bmi < 25) {
                classification = "Normal weight";
            } else if (bmi >= 25 && bmi < 30) {
                classification = "Overweight";
            } else {
                classification = "Obese";
            }
            
            return classification;
        }
        var weight = 70; 
        var height = 175; 
        var bmiClassification = calculateBMI(weight, height);
        console.log("BMI Classification:", bmiClassification);
        
        //q19
        const counts=(amr)=>{
            amr.trim();
            let amf =[...amr];
        
            let fils = amf.filter((char)=> {
                return char !== ' ';
            });
            return fils.length;
        }
        console.log('The number of character is ',counts('you are good'));
        
        //q20
        
        const evenNumber=()  =>{
            let numbers =[];
            for (let j = 1; j <=100; j++) {
                if (j %2 === 0) {
               numbers.push(j);
                }
                
            }
            return numbers;
        }
        console.log('The even number from 1 to 100 are ',evenNumber());
        
        //21
        function calculateSquare(number) {
            return number * number;
        }
        var number = 5;
        var square = calculateSquare(number);
        console.log("Square of", number, "is", square);
        
        //22
        function isEven(number) {
            return number % 2 === 0;
        }
        var number = 6;
        if (isEven(number)) {
            console.log(number + " is even.");
        } else {
            console.log(number + " is odd.");
        }
        
        //23
        function isOdd(number) {
            return number % 2 !== 0;
        }
        var number = 7;
        if (isOdd(number)) {
            console.log(number + " is odd.");
        } else {
            console.log(number + " is even.");
        }
        
        //24
        function getMax(num1, num2) {
            return num1 > num2 ? num1 : num2;
        }
        var number1 = 10;
        var number2 = 20;
        var maxNumber = getMax(number1, number2);
        console.log("The maximum of", number1, "and", number2, "is", maxNumber);
        
        //25
        function getMin(num1, num2) {
            return num1 < num2 ? num1 : num2;
        }
        var number1 = 10;
        var number2 = 20;
        var minNumber = getMin(number1, number2);
        console.log("The minimum of", number1, "and", number2, "is", minNumber);
        
        //26
        function factorial(number) {
            if (number === 0 || number === 1) {
                return 1;
            } else {
                var result = 1;
                for (var i = 2; i <= number; i++) {
                    result *= i;
                }
                return result;
            }
        }
        var num = 5;
        var fact = factorial(num);
        console.log("Factorial of", num, "is", fact);
        
        //29
        const displayOdd=() =>{
            let odds=[];
            for (let u =1; u<=100; u++){
                if (u % 2!== 0) {
                  odds.push(u);
            }
        }
            return odds;
        }
        console.log(displayOdd());
        //30
        function displayMultiplesOf5(limit) {
            if (typeof limit !== 'number' || limit <= 0) {
                console.log("Invalid limit. Please provide a positive number.");
                return;
            }
        
            console.log("Multiples of 5 up to", limit, ":");
            for (let i = 1; i <= limit / 5; i++) {
                console.log(i * 5);
            }
        }
        displayMultiplesOf5(20); 
        //31
        function squareRoot(number) {
            if (typeof number !== 'number' || number < 0) {
                console.log("Please provide a valid non-negative number.");
                return;
            }
        
            return Math.sqrt(number);
        }
        
        // Example usage:
        const result1 = squareRoot(25);
        console.log("Square root:", result1); // Output: Square root: 5
        
        //32.    Create a function that receives two numbers and returns the bigger number.
        function findBiggerNumber(num1, num2) {
            if (typeof num1 !== 'number' || typeof num2 !== 'number') {
                console.log("Please provide valid numbers.");
                return;
            }
        
            return num1 > num2 ? num1 : num2;
        }
        
        const biggerNumber = findBiggerNumber(10, 5);
        console.log("The bigger number is:", biggerNumber); 
        
        
        //33.    Create a function that receives a string and changes it into capital letters.
        const capitalString=(cap)=>{
        let capStr = cap.toUpperCase();
        return capStr;
        }
        let banger = capitalString('hello world');
        console.log(banger);
        
        //34.    Create a function called “stringModifier”. This function allows a user to provide a string, 
         const stringModifier=(k,l,t)=>{
         let modif = k.split('');
         modif[l]=t;
         let modifArr= modif.join('');
         return modifArr;
         }
         let original='A theodette';
         let mango =stringModifier(original,0,'A');
         console.log(mango);
         //35.    Write a function that counts the number of vowels in a string.
         const countString=(strg)=>{
            let vowels =0;
            let turnToStr = strg.toString();
            for (let bm = 0; bm < strg.length; bm++) {
            if(turnToStr.charAt(bm)==='u'|| turnToStr.charAt(bm)==='o'||turnToStr.charAt(bm)==='a'||turnToStr.charAt(bm)==='e' ||turnToStr.charAt(bm)==='i' )
                vowels += 1;
            }
        return vowels;
         }
         let bgm = countString('We are going to landon');
         console.log('The number of vowels in this string are',bgm);
        
        //36
        function findCharacterIndex(str, char) {
            for (let i = 0; i < str.length; i++) {
                if (str.charAt(i) === char) {
                    return i; 
                }
            }
            return -1;
        }
        
        let index = findCharacterIndex("hello", "e");
        console.log("Index of 'e' in 'hello':", index); 
        
        //37.    Write a function that finds the index of a given character in a string.
        function findCharacterIndex(str, char) {
            for (let i = 0; i < str.length; i++) {
                if (str[i] === char) {
                    return i;
                }
            }
          
            return -1;
        }
        const inpString = 'Hello World';
        const charToFind = 'o';
        const charIndex = findCharacterIndex(inpString, charToFind);
        console.log(charIndex);
        //38.    Write a function that removes duplicates from an array.
        
        const removeDuplicate=(dup)=>{
            let rem =[...new Set(dup)];
            return rem;
        }
        let dup =[1,2,3,5,3,7,6,4,2,1,5];
        console.log(removeDuplicate(dup));
        //39
        function isValuePresent(arr, value) {
            return arr.includes(value);
        }
        let array2 = [1, 2, 3, 4, 5];
        console.log(isValuePresent(array2, 3)); 
        console.log(isValuePresent(array2, 6)); 
        
        //40.    Write a function that squares each element of an array.
        function squareArrayElements(arr) {
            return arr.map(element => element * element);
        }
        const numbe= [1, 2, 3, 4, 5];
        const squaredNumbers = squareArrayElements(numbe);
        console.log("Squared array:", squaredNumbers);
        
        //41.    Write a function that returns the first n elements of an array.
        function getFirstNElements(arr, n) {
            return arr.slice(0, n);
        }
        let array3 = [1, 2, 3, 4, 5];
        console.log(getFirstNElements(array3, 3)); 
        
        //42.    Write a function that removes the last element from an array.
        function removeLastElement(abi){
          abi.pop();
          return abi;
        }
        const abi =[1,2,3,4,5,6];
        console.log(removeLastElement(abi));
        
        //43.    Write a function that sorts an array of numbers in ascending order.
        function sortArrays(soso){
            let sol =soso.sort((a,b) => a-b);
            return soso;
        }
         const soso =[6,8,9,3,2,6];
         console.log(sortArrays(soso));
        
        //44.    Write a function that checks if all elements in an array are positive.
         const positivdeNumber=(posi)=>{
            if(posi >=0){
                return 'The number is positive';
            }
            else {
                return 'The number is not posistive';
            }
         }
         let positive = positivdeNumber(-43);
         console.log(positive);
        
        //45.    Write a function that calculates the sum of the even numbers in an array.
        const evenArray=(sum)=>{
            let sums = 0;
            for( let i = 0;i<= sum.length; i++){
            if(sum[i] % 2===0){
                sums += sum[i];
            }
        }
            return sums;
        }
        let evenSum= evenArray([1,2,3,4,5,6]);
        console.log(evenSum);
        
        //46.    Write a function that converts an array of strings to uppercase.
         const convertArray=(strArray)=>{
            let covertString = strArray.map(index => index.toUpperCase());
            return covertString;
         }
         let remy = convertArray(['ange','alice','amaya','ashley']);
         console.log(remy);
        
        //47.    Write a function that generates a random number between a given range.
        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const minRange = 1;
        const maxRange = 10;
        const randomNumber = generateRandomNumber(minRange, maxRange);
        console.log("Random number between", minRange, "and", maxRange, ":", randomNumber);
        
        //48.    Write a function that returns the reverse of an array.
        const revArray=(odi)=>{
            let gabby = odi.reverse();
            return gabby;
        }
         let kami =revArray([1,2,3,4,5,6]);
        console.log(kami);
        
        //49
        function fibonacciSequence(n) {
            let fibonacciNumbers = [0, 1]; 
            
          
            for (let i = 2; i < n; i++) {
                let nextFibonacciNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
                fibonacciNumbers.push(nextFibonacciNumber);
            }
            
            return fibonacciNumbers;
        }
        
        
        const ny = 10; 
        const fibonacciSequenceResult = fibonacciSequence(n);
        console.log("Fibonacci sequence up to", n, "numbers:", fibonacciSequenceResult);
        
        //50.    Write a function that checks if an array is sorted in ascending order.
        function isSortedAscending(arr) {
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    return false; 
                }
            }
            return true; 
        }
        
        const sortedArray = [1, 2, 3, 4, 5];
        console.log("Is the array sorted in ascending order?", isSortedAscending(sortedArray));
        
        const unsortedArray = [5, 3, 1, 4, 2];
        console.log("Is the array sorted in ascending order?", isSortedAscending(unsortedArray)); 
        
        //51.    Write a function that filters out negative numbers from an array.
        function filterNegative(fil) {
            let rab = fil.filter(fil => fil <=0)
                return rab;
            }
        let fils = filterNegative([1,-2,-5,-7,2,3]);
        console.log(fils);
        
        //52.    Write a function that calculates the square root of a number.
        const calculate=(root)=>{
            let jaja = Math.sqrt(root);
            return jaja;
        }
        console.log('The squareroot is',calculate(81));
        
        //53.    Write a function that finds the median of an array of numbers.
        function findMedian(arr) {
           const n = arr.length;
            
            if (n % 2 === 0) {
               
                const middleIndex1 = n / 2 - 1;
                const middleIndex2 = n / 2;
                return (arr[middleIndex1] + arr[middleIndex2]) / 2;
            } else {
               
                const middleIndex = Math.floor(n / 2);
                return arr[middleIndex];
            }
        }
        
        const numbers1 = [1, 3, 2, 5, 4];
        console.log("Median:", findMedian(numbers1));
        
        //54.    Write a function that capitalizes the first letter of each word in a sentence.
        function capitalizeFirstLetter(sentence) {
          const words = sentence.split(' ');
             const capitalizedWords = words.map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            });
             const capitalizedSentence = capitalizedWords.join(' ');
            return capitalizedSentence;
        }
        const sentence = "this is a sentence";
        console.log("Capitalized sentence:", capitalizeFirstLetter(sentence));
        
        //55.    Write a function that checks if a given year is a leap year.
        function isLeapYear(year) {
            if (year % 4 === 0) {
                if (year % 100 === 0 && year % 400 !== 0) {
                    return false;
                }
                return true;
            }
            return false;
        }
        let year = 2024;
        if (isLeapYear(year)) {
            console.log(year + " is a leap year.");
        } else {
            console.log(year + " is not a leap year.");
        }
        //56.    Write a function that finds the intersection of two arrays.
        function intersection(arr1, arr2) {
            const intersect = [];
            for (let element of arr1) {
          
                if (arr2.includes(element) && !intersect.includes(element)) {
                    intersect.push(element);
                }
            }
            
            return intersect;
        }
        const array0 = [1, 2, 3, 4, 5];
        const array01 = [3, 4, 5, 6, 7];
        console.log("Intersection:", intersection(array0, array01));
        //57
        function isPrime(number) {
            if (number < 2) {
                return false;
            }
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return false;
                }
            }
            return true;
        }
        let number = 17;
        if (isPrime(number)) {
            console.log(`${number} is a prime number.`);
        } else {
            console.log(`${number} is not a prime number.`);
        }
        
        
        //58.    Write a function that returns the power of a number (base, exponent).
        function power(base, exponent) {
            if (exponent === 0) {
                return 1;
            }
            let result = base;
            for (let ir = 1; ir < exponent; ir++) {
                result *= base;
            }
         return result;
        }
        
        console.log(power(2, 3));
        console.log(power(5, 2)); 
        
        //59.    Write a function that calculates the area of a rectangle.
        function rectangleArea(wid,hei) {
            return wid*hei;
        }
        let gag =rectangleArea(6,7);
        console.log('The area of rectangle is',gag);
        
        //60.    Write a function that calculates the perimeter of a rectangle.
        function rectanglePerimeter(widt,heig) {
            return 2*(widt+heig);
        }
        let gage =rectanglePerimeter(6,7);
        console.log('The area of rectangle is',gage);
        
        //61.    Write a function that checks if a given string contains only digits.
        function containsOnlyDigits(str) {
            const chars = str.split('');
            for (let char of chars) {
            
                if (char < '0' || char > '9') {
                    return'String are not only digits';
                }
            }
             return 'String are only digits';
        }
        console.log(containsOnlyDigits("123"));
        
        //62.    Write a function that counts the number of words in a sentence.
        function countWords(sentence) {
            let rr =sentence.split(' ');
              let words = rr.filter((word)=> word !==' ');
              return words.length;
           }
           const sentences = "the learning is good";
           console.log("Number of words:", countWords(sentences));
        
        //63.    Write a function that converts a temperature from Celsius to Fahrenheit.
        function celsiusToFahrenheit(celsius) {
            let fahrenheit = (celsius * 9/5) + 32;
            return fahrenheit;
        }
        let celsiusTemperature = 20;
        let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
        console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
        
        //64.    Write a function that generates a pyramid pattern of a given height.function generatePyramid(height) {
            // Iterate over each row of the pyramid
            function Pyramid(heights) {
                let rowy ='';
                for (let it = 1; it<= heights; it++) {
                
                    for (let jj = 1; jj <= heights- it; jj++) {
                        rowy += ' ';
                    }
                    for (let kb = 1; kb <= 2 * it - 1; kb++) {
                        rowy+= '*';
                    }
                    rowy +='\n';
                }
                    console.log(rowy); 
                
            }
            Pyramid(5);
             //65.    Switch Case:
        //.    Calculator Switch:
        //a.Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.
        function calculator(num4, num5, operator) {
            let result;
            switch (operator) {
                case '+':
                    result = num4+ num5;
                    break;
                case '-':
                    result = num4 - num5;
                    break;
                case '*':
                    result = num4* num5;
                    break;
                case '/':
                    if (num5 !== 0) {
                        result = num4 / num5;
                    } else {
                        result = "Cannot divide by zero";
                    }
                    break;
                default:
                    result = "Invalid operator";
            }
            return result;
        }
        console.log(calculator(5, 3, '+')); 
        
        //b.    Day of Week:
        //Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.
        function getDay(dayNum) {
            let dayName;
            switch (dayNum) {
        
                case 1:
                    dayName = "Monday";
                    break;
                case 2:
                    dayName = "Tuesday";
                    break;
                case 3:
                    dayName = "Wednesday";
                    break;
                case 4:
                    dayName = "Thursday";
                    break;
                case 5:
                    dayName = "Friday";
                    break;
                case 6:
                    dayName = "Saturday";
                    break;
                            case 7:
                    dayName = "Sunday";
                    break;
                default:
                    dayName = "Invalid day number";
            }
            return dayName;
        }
        console.log(getDay(1));
        
        
        //c.    Grade System:
        //Design a grading system that takes a student's score as input and returns the corresponding grade using a switch case.
        function getGrade(score) {
            let grade;
            switch (true) {
                case (score >= 90 && score <= 100):
                    grade = 'A';
                    break;
                case (score >= 80 && score < 90):
                    grade = 'B';
                    break;
                case (score >= 70 && score < 80):
                    grade = 'C';
                    break;
                case (score >= 60 && score < 70):
                    grade = 'D';
                    break;
                case (score >= 0 && score < 60):
                    grade = 'F';
                    break;
                default:
                    grade = 'Invalid score';
            }
            return grade;
        }
        console.log(getGrade(95));
        
        //d.    Traffic Light:
        //Simulate a traffic light using a switch case. The program should output the color of the traffic light based on user input (1 for red, 2 for yellow, and 3 for green).
        function trafficLight(colorCode) {
            let color;
            switch (colorCode) {
                case 1:
                    color = 'Red';
                    break;
                case 2:
                    color = 'Yellow';
                    break;
                case 3:
                    color = 'Green';
                    break;
                default:
                    color = 'Invalid input';
            }
            return color;
        }
        console.log(trafficLight(1));
        
        //e.    Month Name:
        //Write a program that takes a number (1-12) representing a month and outputs the name of the month using a switch case.
        function getMonth(monthNumber) {
            let monthName;
            switch (monthNumber) {
                case 1:
                    monthName = 'January';
                    break;
                case 2:
                    monthName = 'February';
                    break;
                case 3:
                    monthName = 'March';
                    break;
                case 4:
                    monthName = 'April';
                    break;
                case 5:
                    monthName = 'May';
                    break;
                case 6:
                    monthName = 'June';
                    break;
                    case 7:
                        monthName = 'July';
                        break;
                    case 8:
                        monthName = 'August';
                        break;
                    case 9:
                        monthName = 'September';
                        break;
                    case 10:
                        monthName = 'October';
                        break;
                    case 11:
                        monthName = 'November';
                        break;
                    case 12:
                        monthName = 'December';
                        break;
                    default:
                        monthName = 'Invalid month number';
                }
                return monthName;
            }
            console.log(getMonth(1)); 
            
            //f.    Simple Menu:
            //Implement a simple menu system using a switch case. The menu should have options for different operations, and the program should execute the selected operation.
            
            //g.    Currency Converter:
            function simpleMenu(option) {
                switch (option) {
                    case 1:
                        console.log("Performing operation 1...");
                        break;
                    case 2:
                        console.log("Performing operation 2...");
                        break;
                    case 3:
                        console.log("Performing operation 3...");
                        break;
                    default:
                        console.log("Invalid option selected.");
                }
            }
            let selectedOption = 2;
            simpleMenu(selectedOption); 
            
            //h.    Shape Area:
            //Write a program that calculates and outputs the area of different shapes (circle, square, triangle) based on user input using a switch case.
            // Function to calculate area of shapes
        function calculateArea(shape, side, height, base, radius) {
            let area;
            switch (shape) {
                case 'circle':
                    area = Math.PI * radius * radius;
                    break;
                case 'square':
                    area = side * side;
                    break;
                case 'triangle':
                    area = 0.5 * base * height;
                    break;
                default:
                    area = 'Invalid shape';
            }
            return area;
        }
        
        // Function to detect season
        function detectSeason(month) {
            let season;
            switch (month) {
                case 3:
                case 4:
                case 5:
                    season = 'spring';
                    break;
                case 6:
                case 7:
                case 8:
                    season = 'summer';
                    break;
                case 9:
                case 10:
                case 11:
                    season = 'fall';
                    break;
                case 12:
                case 1:
                case 2:
                    season = 'winter';
                    break;
                default:
                    season = 'Invalid month';
            }
            return season;
        }
        let shape = 'circle';
        let area = calculateArea(shape, 0, 0, 0, 2); 
        console.log(`Area of ${shape} shape is ${area}`);
        let month = 6;
        console.log(`Season for month ${month} is ${detectSeason(month)}`);
        //67
        function printObjectProperties(obj) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    console.log(`${key}: ${obj[key]}`);
                }
            }
        }
        let person = {
            name: 'John',
            age: 30,
            city: 'New York',
            occupation: 'Engineer'
        };
        console.log("Properties of the object:");
        printObjectProperties(person);
         //68
                function power(base, exponent) {
                    let result = 1;
                    for (let i = 0; i < exponent; i++) {
                        result *= base;
                    }
                    return result;
                }
                let base = 2;
                let exponent = 3;
                console.log(power(base, exponent)); 
                