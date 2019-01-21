export default simpleQuiz = {
  {
    id: 'q1',
    msg: 'abase',
    trigger: 'op1'
  },
  {
    id: 'op1',
    options: [
      { value: 1, label: 'something thats very basic', trigger: 'wr1_1'},
      { value: 2, label: 'Humiliate yourself', trigger: 'c1'},
      { value: 3, label: 'something thats very basic', trigger: 'wr1_1'},
      { value: 4, label: 'something thats very basic', trigger: 'wr1_2'},
    ],
  },
  {
    id: 'wr1_1',
    msg: 'wrong',
    trigger: 'h1_1'
  },
  {
    id: 'wr1_2',
    msg: 'wrong',
    trigger: 'h1_2'
  },
  {
    id: 'h1_1',
    msg: 'Hint: Desperate people do this to gain attention',
    trigger: 'op1'
  },
  {
    id: 'h1_2',
    msg: 'Hint: Your loved ones will hate to see you like this',
    trigger: 'op1'
  },
  {
    id: 'c1',
    msg: 'correct!'
    trigger: 'q2'
  },  
}
