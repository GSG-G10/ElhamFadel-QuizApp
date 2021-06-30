const qusetions =
[
    {
        "qusetion":"function sayHi() { \n console.log(name); console.log(age); \n var name = 'Lydia'; \n let age = 21; \n sayHi();",
        "answer_1":"Lydia and undefined",
        "answer_2":"Lydia and ReferenceError",
        "answer_3":"ReferenceError and 21",
        "answer_4":"undefined and ReferenceError",
        "right_answer":"undefined and ReferenceError"    
    },
    {
        "qusetion":"+true; \n !'Lydia';  ",
        "answer_1":"1 and false",
        "answer_2":"false and NaN",
        "answer_3":"false and false",
        "right_answer":"1 and false" 
    }
    ,
    {
        "qusetion":"const bird = { \n size: 'small', \n }; \n const mouse = { \n name: 'Mickey', \n small: true, \n }; ",
        "answer_1":"mouse.bird.size is not valid",
        "answer_2":"mouse[bird.size] is not valid",
        "answer_3":'mouse[bird["size"]] is not valid',
        "right_answer":"All of them are valid" 
    },
    {
        "qusetion":"let c = { greeting: 'Hey!' }; \n let d; \n d = c; \n c.greeting = 'Hello'; \n console.log(d.greeting);",
        "answer_1":"Hello",
        "answer_2":"Hey!",
        "answer_3":'undefined',
        "answer_4":"ReferenceError",
        "right_answer":"Hello" 
    },
    {
        "qusetion":"let a = 3; \n let b = new Number(3); \n let c = 3; \n console.log(a == b); \n console.log(a === b); \n console.log(b === c);",
        "answer_1":"true false true",
        "answer_2":"false false true",
        "answer_3":'true false false',
        "answer_4":"false true true",
        "right_answer":"true false false" 
    },
    {
        "qusetion":"let greeting; \n greetign = {}; // Typo! \n console.log(greetign);",
        "answer_1":"{}",
        "answer_2":"ReferenceError: greetign is not defined",
        "answer_3":'undefined',
        "answer_4":"false true true",
        "right_answer":"{}" 
    },
    {
        "qusetion":"function bark() { \n console.log('Woof!'); \n  } \n bark.animal = 'dog';", 
        "answer_1":"Nothing, this is totally fine!",
        "answer_2":"SyntaxError. You cannot add properties to a function this way.",
        "answer_3":'"Woof" gets logged.',
        "answer_4":"ReferenceError",
        "right_answer":"Nothing, this is totally fine!" 
    },
    {
        "qusetion":"function sum(a, b) { \n  return a + b; \n } \n sum(1, '2');", 
        "answer_1":"NaN",
        "answer_2":"TypeError",
        "answer_3":'"12"',
        "answer_4":3,
        "right_answer":"'12'" 
    },
    {
        "qusetion":"let number = 0; \n console.log(number++); \n console.log(++number); \n console.log(number);",
        "answer_1":"1 1 2",
        "answer_2":"1 2 2",
        "answer_3":'0 2 2',
        "answer_4":"0 1 2",
        "right_answer":"0 2 2" 
    },
]
