import action from './../actions/index';
const uuidv4 = require('uuid/v4');

var initialState = {
    arrayProducts:[
        {
            id: uuidv4(),
            name: 'Iphone 6S',
            ram: '64GB',
            price: '600USD',
            img: 'asset/images/img_1.png'
        },
        {
            id: uuidv4(),
            name: 'Iphone 6S Plus',
            ram: '32GB',
            price: '700USD',
            img: 'asset/images/img_1.png'
        },
        {
            id: uuidv4(),
            name: 'Iphone 7',
            ram: '16GB',
            price: '750USD',
            img: 'asset/images/img_1.png'
        }  
    ],
    toggleFormEdit: false
}
  

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'TOOGLE_EDIT':
            return {
                ...state,toggleFormEdit:!state.toggleFormEdit
            }   
        case 'HANDLE_DELETE': 
            console.log(action);
            return {
                ...state
            } 
        default:
        return state
    }
};
export default myReducers;