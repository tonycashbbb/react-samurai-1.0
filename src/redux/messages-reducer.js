const ADD_MESSAGE = 'ADD-MESSAGE'

const initState = {
  dialogs: [
    {id: 1, name: 'Andrey', avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg'},
    {id: 2, name: 'Leha', avatar: 'https://radiokp.ru/sites/default/files/styles/kp_fullnode_730_486/public/2020-02/screenshot_31.jpg?itok=O3F2zIFU'},
    {id: 3, name: 'Nikita', avatar: 'https://kadikama.ru/uploads/posts/2018-09/1535870577_zheleynyy.jpg'},
    {id: 4, name: 'Lera', avatar: 'https://klv-oboi.by/img/gallery/52/thumbs/thumb_l_20735.jpg'},
    {id: 5, name: 'Tony', avatar: 'https://sun9-70.userapi.com/c10103/u167323869/a_7e1101c5.jpg?ava=1'},
  ],
  messages: [
    {id: 1, text: 'hi'},
    {id: 2, text: 'q'},
    {id: 3, text: 'gay'},
  ],
  newMessageText: '',
  messageId: 4,
}

export const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: state.messageId, text: action.messageBody}],
        messageId: ++state.messageId,
      }
    default:
      return state
  }
}

export const addMessage = (messageBody) => ({type: ADD_MESSAGE, messageBody})
