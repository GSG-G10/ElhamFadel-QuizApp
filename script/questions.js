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
    }
]