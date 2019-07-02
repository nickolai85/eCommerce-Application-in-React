import {
    SET_USER_PURCHASES, SET_PURCHASE_DETAIL
} from '../actions/types';

const INITIAL_STATE = {
    purchases: [],
    purchaseDetail:{
        _id: 4,
        total: 19.40,
        orderNumber: 'A0048248343',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
            name: 'Nicolai Organ',
            shippingAddress: '1234 West State Street'
        }
    }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_USER_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            }
            case SET_PURCHASE_DETAIL:
            let purchaseDetail;
            state.purchases.map(purchase => {
                if(purchase._id = action.payload) {
                    purchaseDetail = purchase;
                }
            })
            return {
                ...state,
                purchaseDetail
            }
        default: return state;
    }
}