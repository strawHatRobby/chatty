const hintLibrary = {
    firstQues: ['1 hint 1', '1 hint 2']
}

questionHint = () => {
    if(firstQues.length === 0){
        return 'game over';
    }
    return hintLibrary.firstQues.pop()
}

export const normalWords = [{
    id: 'greetings',
    message: 'Hey',
    trigger: 'mode description'
},
{
    id: 'mode description',
    message: "I'll give you a word with some options",
    trigger: 'more description'
},
{
    id: 'more desciption',
    message: "Select the correct option. I'll tell you whether you were correct or not.",
    trigger: '1q'
},
{
    id: '1q',
    message: "Abase",
    trigger: '1opt'
},
{
    id: '1opt',
    options: [
        { value: 1, label: 'something very basic', trigger: '1wr'},
        { value: 2, label: 'Humiliate Yourself', trigger: '1ri'},
        { value: 3, label: 'foundation of something', trigger: '1wr'},
        { value: 4, label: 'abuse', trigger: '1wr'},
    ],
},
{
    id: '1wr',
    message: 'wrong answer',
    delay: 2000,
    trigger: '1cond'
},
{
    id: '1ri',
    message: 'correct',
    trigger: '1 correct'
},
{
    id: '1cond',
    options: [
        {
            value: 10, label: 'hint', trigger: {firstQuesHint.pop()},
        },
        {
            value: 11, label: 'give up', trigger: 'quit',
        },
        {
            value: 12, label: 'try again', trigger: '3',
        }
    ],
},
{
    id: '1 hint 1',
    message: 'desperate people do this',
    delay: 2000,
    trigger: '1opt'
},
{
    id: '1 hint 2',
    message: "You wouldn't want to see your loved ones like this",
    delay: 3000,
    trigger: "1opt"    
},
{
    id:'quit',
    message: 'Okay! Bye!',
    end: true
},
{
    
}



]