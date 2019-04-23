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
    toogleForm: false,
    idEdit: ''
}
  

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'TOOGLE_FROM':
            return {
                ...state,toogleForm:!state.toogleForm
            }
        case 'HANDLE_ADD':
            action.action.id = uuidv4();
            return {
                ...state,
                arrayProducts: state.arrayProducts.concat(action.action)
            }
        case 'HANDLE_DELETE': 
            let arrayProducts = state.arrayProducts;
            let idDelete = action.id;
            let itemDelete = arrayProducts.filter(function(value, index) {
                return value.id !== idDelete
            })
            return {
                ...state,arrayProducts: itemDelete
            } 
        case 'HANDLE_EDIT':
            // console.log(action.action);

            return {
                ...state,idEdit: action.action
            }
        default:
        return state
    }
};
export default myReducers;