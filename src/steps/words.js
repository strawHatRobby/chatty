import Gif from '../components/gif';
import React from 'react';

export const words = [{
    id: 'first',
    message: 'Hey there!',
    trigger: 'name?'
},
{
    id: 'name?',
    message: 'Whats your name?',
    isLast: true,
    trigger: 'name-answer'
},
{
    id: 'name-answer',
    placeholder: 'You can type or use the mic to speak your name',
    user: true,
    trigger: 'salutation'
},
{
    id: 'salutation',
    message: 'Nice to meet you {previousValue}!',
    trigger: 'ready'
},
{
    id: 'ready',
    message: 'Ready to play the game?',
    trigger: 'ready-answer',
},
{
    id: 'ready-answer',
    options: [
        { value: 1, label: 'Yes', trigger: '1'},
        { value: 0, label: 'No', trigger: 'affirm-ready'}
    ],
},
{ 
    id: 'affirm-ready',
    message: 'Click yes Whenever you are ready!',
    trigger: 'ready-answer'
},

{
    id: '1',
    message: 'You first word is ',
    trigger: '2',
},
{
    id: '2',
    message: 'abase',
    trigger: '3'
},
{
    id: '3',
    headerTitle: 'Chatty says, select your answer',
    placeholder: 'Select an Option OR Type in your Answer',
    delay: 7000,
    options: [
        { value: 1, label: 'something very basic', trigger: '4'},
        { value: 2, label: 'Feel Humiliated', trigger: '5'},
        { value: 3, label: 'foundation of something', trigger: '4'},
        { value: 4, label: 'abuse', trigger: '4'},
    ],
},
{
    id: '4',
    message: 'wrong answer',
    delay: 2000,
    trigger: '7'
},
{
    id: '5',
    message: 'correct',
    trigger: '6'
},
{
    id: '6',
    component: (
        <Gif url={'https://media.giphy.com/media/5xxnEC4NF0x0c/giphy-downsized.gif'}/>
    ),
    trigger: '2'
},
{
    id: '7',
    options: [
        {
            value: 10, label: 'hint', trigger: '15'
        },
        {
            value: 11, label: 'give up', trigger: '100',
        },
        {
            value: 12, label: 'try again', trigger: '3',
        }
    ]
},
{
    id: '15',
    message: 'desperate people do this',
    delay: 2000,
    trigger: '3'
},
{
    id:'100',
    message: 'You suck for quitting. Bye!',
    end: true
},
{
    
}

]
