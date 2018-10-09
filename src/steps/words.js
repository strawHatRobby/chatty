import Gif from '../components/gif';
import React from 'react';

export const words = [{
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
    heaerTitle: 'Chatty says, select your answer',
    placeholder: 'Select an Option OR Type in your Answer',
    options: [
        { value: 1, label: 'something very basic', trigger: '4'},
        { value: 2, label: 'humiliate', trigger: '5'},
        { value: 3, label: 'foundation of something', trigger: '4'},
        { value: 4, label: 'abuse', trigger: '4'},
    ],
},
{
    id: '4',
    message: 'wrong answer',
    delay: 2000,
    trigger: '6'
},
{
    id: '5',
    component: (
        <Gif url={'https://media.giphy.com/media/5xxnEC4NF0x0c/giphy-downsized.gif'}/>
    ),
    trigger: '2'
},
{
    id: '6',
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
    trigger: '3'
},
{
    id:'100',
    message: 'You suck for quitting. Bye!',
    end: true
}

]