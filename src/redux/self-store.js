import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

const store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: 'Hi', likeCounter: 1},
        {id: 2, message: 'Hey', likeCounter: 2},
        {id: 3, message: 'Sveta', likeCounter: 3},
        {id: 4, message: 'Salut', likeCounter: 4},
        {id: 5, message: 'Salam', likeCounter: 5},
        {id: 6, message: 'Q', likeCounter: 6}
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Dimych', imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg"},
        {
          id: 2,
          name: 'Andrey',
          imgUrl: "https://radiokp.ru/sites/default/files/styles/kp_fullnode_730_486/public/2020-02/screenshot_31.jpg?itok=O3F2zIFU"
        },
        {id: 3, name: 'Sveta', imgUrl: "https://kadikama.ru/uploads/posts/2018-09/1535870577_zheleynyy.jpg"},
        {id: 4, name: 'Sasha', imgUrl: "https://klv-oboi.by/img/gallery/52/thumbs/thumb_l_20735.jpg"},
        {
          id: 5,
          name: 'Victor',
          imgUrl: "https://vignette.wikia.nocookie.net/buldog/images/8/87/%D0%9F%D1%83%D0%B4%D0%B5%D0%BB%D1%8C.jpg/revision/latest/scale-to-width-down/340?cb=20150816140928&path-prefix=ru"
        },
        {id: 6, name: 'Valera', imgUrl: "https://sun9-70.userapi.com/c10103/u167323869/a_7e1101c5.jpg?ava=1"}
      ],
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
      ],
      newMessageText: ''
    },
    navbar: {
      friendsListData: [
        {id: 1, name: "Misha"},
        {id: 2, name: "Petya"},
        {id: 3, name: "Vasya"},
        {id: 4, name: "Lenya"}
      ]
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navbar = navbarReducer(this._state.navbar, action)

    this._callSubscriber(this._state)
  }
}

export default store
window.store = store