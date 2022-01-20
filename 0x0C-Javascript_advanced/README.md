# 0x0C. JavaScript advanced

## Resources

**Read or watch:**

-   [Lexical scoping](https://intranet.hbtn.io/rltoken/g-zr8tvvc7rW022BJACkmQ "Lexical scoping")
-   [Closure](https://intranet.hbtn.io/rltoken/O1oMScZjNIWydX6nnV_k3Q "Closure")
-   [Call stack](https://intranet.hbtn.io/rltoken/WsNQ1uR0omWQzaIBBbt14Q "Call stack")
-   [Binding](https://intranet.hbtn.io/rltoken/xJPkQ6H1Ph_GFgSeJzFiOg "Binding")
-   [Callbacks](https://intranet.hbtn.io/rltoken/h1fiqPqwFzQQHNrGR4olxA "Callbacks")

## Learning Objectives

-   What is lexical scoping in JavaScript
-   What is closure in JavaScript
-   How to use closure
-   How to chain different closures
-   How to simulate private methods with Closure
-   The execution stack order with JavaScript
-   How to use binding
-   How to use callbacks

## Requirements

-   Allowed editors:  `vi`,  `vim`,  `emacs`,  `Visual Studio Code`
-   All your files should end with a new line
-   A  `README.md`  file, at the root of the folder of the project, is mandatory
-   Your code should use the  `js`  extension

## Quiz questions

Hide

#### Question #0

What’s the result of this block of code?

```
let i = 12;
console.log(i);

```

-   10
    
-   12
    
-   14
    
-   undefined
    

#### Question #1

What’s the result of this block of code?

```
let i = 12;
{
  i = 15;
}
console.log(i);

```

-   10
    
-   12
    
-   15
    
-   undefined
    

#### Question #2

What’s the result of this block of code?

```
{
  let i = 12;
}
console.log(i);

```

-   10
    
-   12
    
-   14
    
-   undefined
    

#### Question #3

What’s the result of this block of code?

```
let i = 12;
function increase() {
  i += 1;
}
console.log(i);

```

-   10
    
-   12
    
-   13
    
-   14
    
-   undefined
    

#### Question #4

What’s the result of this block of code?

```
let i = 12;
function increase() {
  i += 1;
}
increase();
console.log(i);

```

-   10
    
-   12
    
-   13
    
-   14
    
-   undefined
    

#### Question #5

What’s the result of this block of code?

```
let i = 12;
function increase() {
  let i = 14;
}
increase();
console.log(i);

```

-   10
    
-   12
    
-   13
    
-   14
    
-   undefined
    

## Tasks

### 0. Lexical scoping and welcome message

mandatory

Create a function named  `welcome`:

-   It takes two arguments:  `firstName`  (string) and  `lastName`  (string)
-   It contains a variable named  `fullName`, that will contains the  `firstName`  followed by a space and then the  `lastName`
-   Within the  `welcome`  function, write a function named  `displayFullName`:
    -   It should display an alert with the message  `Welcome`  + the variable  `fullName`  + and exclamation mark.
-   Call the function  `displayFullName`  at the end of the function  `welcome`

**How to test**

-   Open your web inspector in the tab “Console”
-   Copy paste your code
-   Run  `welcome('Holberton', 'School');`  should prompt an alert with this content:  `Welcome Holberton School!`
-   `alert(fullName)`, should return a reference error  `fullName is not defined`

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `0-welcome.js`

Done?  Help

### 1. Closure Scope Chain

mandatory

-   Create a variable named  `globalVariable`  with value  `Welcome`
-   Create a function  `outer`  that:
    -   alerts the content of the variable  `globalVariable`
    -   creates a variable named  `course`  with value  `Holberton`
    -   creates a function  `inner`  that:
        -   alerts the content of the variable  `globalVariable`  and  `course`  (concatenated)
        -   creates a variable named  `exclamation`  with value  `!`
        -   creates a function  `inception`  that alerts the content of the variable  `globalVariable`,  `course`, and  `exclamation`  (concatenated)
        -   calls the function  `inception`
    -   calls the function  `inner`
-   Call the function  `outer`

**Compose the code:**

-   Write the function  `inception`  within  `inner`
-   Write the function  `inner`  within  `outer`
-   Call the function  `outer`  in the main code (outside any function)
-   Call the function  `inner`  within  `outer`
-   Call the function  `inception`  within  `inner`

**Requirements:**

-   Running the script should display three popups one by one with the text  `Welcome`,  `Welcome Holberton`, and  `Welcome Holberton!`

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `1-nested_functions.js`

Done?  Help

### 2. Closure

mandatory

Write a function named  `welcomeMessage`:

-   It accepts one argument  `fullName`  (string)
-   It should be a closure for an alert displaying  `Welcome <fullName>`

After this function definition, create three variables:

-   `guillaume`  contains a call  `welcomeMessage`  with  `Guillaume`  as argument
-   `alex`  contains a call  `welcomeMessage`  with  `Alex`  as argument
-   `fred`  contains a call  `welcomeMessage`  with  `Fred`  as argument

**How to test:**

-   In your web console, cop/paste your file
-   Executing the following in the console:

```
guillaume();
alex();
fred();

```

Should display three alerts like below:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/783cce39c2d154fdd206.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220120T001658Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5ca5db5efb566eb7e84d40ea728fa47ce280bc129465a4100b7145318105a5b5)

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/a1ea60145098f4cf67cd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220120T001658Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f01067495447af9131560a8a8b04be8819f37ed77c8ad54caecb50fa4b5babfd)

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/0b25941037734e3b83d8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220120T001658Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7e5fedd063b2bb67ecfb01c41cf92d58e325c72a0a39202e6d0c031e9a030982)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `2-function_me.js`

Done?  Help

### 3. Closure and loops

mandatory

Write a function named  `createClassRoom`:

-   It takes into argument  `numbersOfStudents`  (number)
-   Inside, it contains a function  `studentSeat`, that takes into argument  `seat`  (number) and returns a function that returns the  `seat`  number
-   After the definition of  `studentSeat`, create and populate a variable  `students`  (array)
    -   Using a loop from 0 to  `numbersOfStudents`, pass the number of iteration + 1 to  `studentSeat`  and add its return value to the  `students`  array
-   Returns the  `students`  array

Create a closure  `classRoom`, calling  `createClassRoom`  with 10 students

**Requirements:**

Executing the following code:

```
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());

```

Should return

```
1
4
10

```

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `3-classrooms.js`

Done?  Help

### 4. Complex Closure

mandatory

Create a function  `divideBy`:

-   It takes into argument  `firstNumber`  (number)
-   It returns a function that takes into argument  `secondNumber`  (number)
    -   It returns the second number divided by the first number

Create a function  `addBy`:

-   It takes into argument  `firstNumber`  (number)
-   It returns a function that takes into argument  `secondNumber`  (number)
    -   It returns the sum of the two numbers

Create four closures:

-   `addBy100`, that uses the function  `addBy`  with the number 100
-   `addBy1000`, that uses the function  `addBy`  with the number 1000
-   `divideBy10`, that uses the function  `divideBy`  with the number 10
-   `divideBy100`, that uses the function  `divideBy`  with the number 100

**Requirements:**

Executing the following code:

```
console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));

```

Should display in the console:

```
120
2
2
1020

```

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `4-math.js`

Done?  Help

### 5. Changing DOM with closure

mandatory

Create a function named  `changeMode`:

-   It accepts 5 arguments  `size`  (number),  `weight`  (string),  `transform`  (string),  `background`  (string),  `color`  (string)
-   Using closure, it changes the style of the entire page and set the  `font-size`,  `font-weight`,  `text-transform`,  `background-color`, and  `color`

Write a function named  `main`:

-   Set a variable named  `spooky`  that passes the arguments  `9`,  `bold`,  `uppercase`,  `pink`,  `green`  to  `changeMode`
-   Set a variable named  `darkMode`  that passes the arguments  `12`,  `bold`,  `capitalize`,  `black`,  `white`  to  `changeMode`
-   Set a variable named  `screamMode`  that passes the arguments  `12`,  `normal`,  `lowercase`,  `white`,  `black`  to  `changeMode`
-   Add a paragraph to the body of the page with the text  `Welcome Holberton!`
-   Add a button to the body with the text  `Spooky`
-   Add a button to the body with the text  `Dark mode`
-   Add a button to the body with the text  `Scream mode`
-   When clicking on each button, the page CSS should change to the different themes you created previously

Call the  `main`  function

**Requirements:**

-   Use vanilla JavaScript to add the elements to the DOM and change the style of the page
-   JQuery not allowed!

Clicking the  `Spooky`  button should change the web page to look something like this:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/e44712a9577dbd8425fd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220120T001658Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=dab306a462afb7e3a11d7d405fd39536e3e6cf5b293a75e7db62f116d5050eb0)

Clicking the  `Dark mode`  button should change the web page to look something like this:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/39d42bc7735aa787ea40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220120T001658Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=0d53cf66c0c928969d27602262d621dc290fc2aa7a75cf4f0105421a52ee4255)

Clicking the  `Scream mode`  button should change the web page to look something like this:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/bd22426bfc6ffed7cf74.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220120T001658Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=098c370a76a45589affbada4f94bd9cf836507d373a1569d65a5780758347b8d)

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `5-mode.js`

Done?  Help

### 6. Private methods with closure

mandatory

Write a module named  `studentHogwarts`:

-   It contains two variables  `privateScore`  set to 0, and  `name`  set to  `null`
-   It contains one private method  `changeScoreBy`, it takes  `points`  in argument and add it to  `privateScore`
-   The module gives access to four public methods (return an object):
    -   `setName`, it takes into argument  `newName`, and set the private variable  `name`
    -   `rewardStudent`, it calls the method  `changeScoreBy`  with 1
    -   `penalizeStudent`, it calls the method  `changeScoreBy`  with -1
    -   `getScore`, it returns  `name: score`  (ex:  `Harry: 14`)

Create one variable named  `harry`, that is an instance of  `studentHogwarts`:

-   Set the name of the object to  `Harry`
-   Reward the student four times
-   Log to the console the name and score

Create one variable named  `draco`, that is an instance of  `studentHogwarts`:

-   Sets the name of the object to  `Draco`
-   Reward the student one time
-   Penalize the student three times
-   Log to the console the name and score

**Requirements:**

-   Executing the code should display in the console

```
Harry: 4
Draco: -2

```

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `6-hogwarts.js`

Done?  Help

### 7. Stack order and setTimeout

mandatory

**Write the following commands in the following order:**

-   Log to the console  `Start of the execution queue`
-   Log to the console  `Final code block to be executed`  using  `setTimeout`  (with delay of 0)
-   Using a loop that iterates 100 times, each iteration logs to the console the iteration number
-   Log to the console  `End of the loop printing`

**Requirements:**

-   Your code should log to the console the following:

```
Start of the execution queue
1
2
...
100
End of the loop printing
Final code block to be executed

```

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `7-timeout.js`

Done?  Help

### 8. Stack order in functions

mandatory

Write a function  `processPayment`:

-   It takes one argument  `amount`  (number)
-   It logs to the console  `Collecting payment of <amount>`

Write a function named  `processOrder`:

-   It takes two arguments  `orderId`  (number), and  `amount`  (number)
-   It logs to the console  `<orderId> is being processed`
-   It calls the function  `processPayment`
-   It logs to the console  `<orderId> has been fully processed`

In the main part of the code:

-   Logs to the console  `Processing orders`
-   Call  `processOrder`  with  `12321`  and  `10.99`
-   Call  `processOrder`  with  `12322`  and  `12.99`
-   Call  `processOrder`  with  `12323`  and  `15.0`
-   Logs to the console  `All the orders have been processed`

**Requirements:**

-   Your code should log the following to the console

```
Processing orders
12321 is being processed
Collecting payment of 10.99
12321 has been fully processed
12322 is being processed
Collecting payment of 12.99
12322 has been fully processed
12323 is being processed
Collecting payment of 15
12323 has been fully processed
All the orders have been processed

```

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `8-payments.js`

Done?  Help

### 9. Prime numbers & timing execution

mandatory

Write a function named  `countPrimeNumbers`:

-   It will return the number of prime numbers from 2 to 100

Log to the console the time in milliseconds to execute the function in this format:  `Execution time of printing countPrimeNumbers was <time used> milliseconds.`

**Requirements:**

-   You must use  `performance`  API to measure the time needed to execute the function (`performance.now()`)
-   Your code should display something in the range of  `Execution time of printing countPrimeNumbers was 0.2700000002514571 milliseconds.`

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `9-prime.js`

Done?  Help

### 10. Execution stack & timing execution

mandatory

Reuse the function  `countPrimeNumbers`  from  `9-prime.js`  (copy/paste)

-   Execute the function  `countPrimeNumbers`  100 times
-   Log to the console the time in milliseconds to execute the function 100 times

**Requirements:**

-   Your code should display something in the range of  `Execution time of calculating prime numbers 100 times was 40.865000002551824 milliseconds.`

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `10-prime.js`

Done?  Help

### 11. Changing stack order using setTimeout

mandatory

Reuse the function  `countPrimeNumbers`  from  `10-prime.js`  (copy/paste)

-   Log to the console the time in milleseconds to execute the function 100 times
-   Find a way to actually do most of the calculation at the end of the execution stack

**Requirements:**

-   Your code should display something in the range of  `Execution time of calculating prime numbers 100 times was 0.03999999910593033 milliseconds.`
-   Use  `setTimeout`  keyword to change the stack order

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `11-prime.js`

Done?  Help

### 12. Binding

mandatory

Create an object named  `roomDimensions`  with the following three attributes:

-   `width`:  `50`
-   `length`:  `100`
-   `getArea`: function that returns the surface area of a the object using the  `width`  and  `length`

Create a variable named  `boundGetArea`, that will bind the object  `roomDimensions`  to the  `getArea`  function

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `12-room_area.js`

Done?  Help

### 13. Binding + Closure

mandatory

Write an object  `user`  with the attributes:

-   `hobby`:  `Calligraphy`
-   `favoriteSport`:  `Hockey`
-   `astrologicalSign`:  `Aries`
-   `firstName`:  `Buillaume`
-   `lastName`:  `Ialva`
-   `location`:  `Telaviv`
-   `occupation`:  `Engineer`

Create a function named  `logWelcomeUser`:

-   It takes one argument  `welcomeString`  (String)
-   It logs to the console  `<welcomeString>, <firstName>. Your occupation is: <occupation>`

Create a variable named  `bindLogWelcomeUser`. It binds the  `logWelcomeUser`  function to the  `user`  object.

Call the function with the string  `Welcome`

**Requirements:**

-   Calling  `bindLogWelcomeUser('Hello');`  should return  `Hello, Buillaume. Your occupation is: Engineer`

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `13-bind_user.js`

Done?  Help

### 14. Simple callback

mandatory

Write a new function named  `createElement`:

-   It accepts one argument  `data`  (String)
-   It creates a paragraph element
-   The content of the paragraph is set to  `data`
-   It appends to the document  `body`  the paragraph

Create a new function named  `queryWikipedia`:

-   It accepts one argument  `callback`  (function)  
    
-   Using  `XMLHttpRequest`, it get the article of Stack Overflow with the URL  `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*`
-   Once the fetch is correctly executed, it calls the  `callback`  function with the  `extract`  of the API response

Call  `queryWikipedia`  with  `createElement`  as callback

**Requirements:**

-   Use vanilla javascript to run the Ajax query (no jQuery or other framework)
-   You must not call  `createElement`  within  `queryWikipedia`  directly

**Repo:**

-   GitHub repository:  `holbertonschool-web_front_end`
-   Directory:  `0x0C-Javascript_advanced`
-   File:  `14-wikipedia.js`

Done?  Help

[Done with the mandatory tasks? Unlock 1 advanced task now!](https://intranet.hbtn.io/projects/625/unlock_optionals)

Ready for a manual  review

Copyright © 2022 Holberton Inc, All rights reserved.