import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // Never manipulate the state or dirty it. So basically create a new array and return it.
            // Keep old stuff, return a new version of the state. The two lines do the same thing.
            return state.concat([ action.payload.data ]);
            // return [ action.payload.data, ...state];
    }
    return state;
}