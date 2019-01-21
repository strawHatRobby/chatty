import Gif from '../components/gif';
import React from 'react';
import Lottie from 'lottie-react-web';
import animation from '../components/the_victory.json'

export const coachSteps = [{
    id: 'first',
    message: 'Alright Maggot!',
    trigger: 'name?'
},
{
    id: 'name?',
    message: 'What do they call ya?',
    trigger: 'name-answer'
},
{
    id: 'name-answer',
    user: true,
    trigger: 'doesntMatter'
},
{
    id: 'doesntMatter',
    component: (
        <Gif url={require('../img/tenor.gif')}/>
    ),
    trigger: 'intro'
},
{
    id: 'intro',
    message: "I'm your coach, you better ot be absconding my training sessions",
    trigger: 'gotIt?'
},
{
    id: 'gotIt?',
    headerTitle: 'Yes or No?',
    placeholder: 'Choose your Answer',
    delay: 1000,
    options: [
        { value: 1, label: 'Yes', trigger: 'question1'},
        { value: 0, label: 'No', trigger: 'explain1'},
    ],
},
{
    id: 'explain1',
    message: "Guess you don't know absconding means, otherwise you wouldn't say that to someone like me!",
    trigger: 'angryGif'
},
{
    id: 'angryGif',
    component: (
        <Gif url={'https://media.giphy.com/media/3t7RAFhu75Wwg/giphy.gif'}/>
    ),
    trigger: 'noQuestion1'
},
{
    id: 'question1',
    message: 'Yes huh? I better make sure then, what does absconding means maggot?',
    trigger: 'abscondingOptions'
},
{
    id:'abscondingOptions',
    placeholder: 'Choose your Answer',
    options: [
        { value: '0', label: 'doing ab crunches', trigger: 'hint1.1'},
        { value: '1', label: 'to secretly evade', trigger: 'questionexplainAbash'},
        { value: '2', label: 'reveal secrets', trigger: 'hint1.2'},
        { value: '3', label: 'make fun of', trigger: 'hint1.1'},
    ]
},
{
    id: 'noQuestion1',
    message: 'I better make sure then, what does absconding means maggot?',
   trigger: 'abscondingOptions'
},
{
    id: 'hint1.1',
    message: 'Lots of college kids do it',
    trigger: 'question1'
},
{
    id: 'hint1.2',
    message: 'If you are in a boring seminar, you might want to absocnd it',
    trigger: 'question1'
},
{
    id: 'questionexplainAbash',
    message: "Do you know why you shouldn't be absocnding my training?",
    trigger: 'evadeTraining'
},
{
    id: 'evadeTraining',
    placeholder: 'Choose your Answer',
    options: [
        { value: '1', label: 'Yes', trigger: 'abash'},
        { value: '0', label: 'No', trigger: 'explainAbash'},       
    ]
},
{
    id: 'abash',
    message: "That's right! cause if you did, I'm gonna abash you like nobody on this planet earth has ever been! Understood?",
    trigger: 'abashYes'
},
{
    id:'abashYes',
    placeholder: 'Choose your Answer',
    options: [
        { value: '1', label: 'Yes', trigger: 'end'},
        { value: '0', label: 'No', trigger: 'explainAbash'},       
    ]
},
{
    id: 'explainAbash',
    message: "It means I'm gonna humiliate you in a way no being has ever been on this planet",
    trigger: 'yoMamaGif'
},
{
    id: 'yoMamaGif',
    component: (
        <Gif url={'https://i.giphy.com/media/bkdMDA577saRi/giphy.webp'}/>
    ),
    trigger: 'end'
},
{
    id: 'end',
    message: "That'll be all maggot!",
    trigger: 'lottie'
},
{
    id: 'lottie',
    component: (
        <Lottie
            options={{animationData: animation}}
            />
    ),
    end: true
}

]
