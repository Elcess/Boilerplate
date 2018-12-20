// Initial State
const initialState = {};

// Actions
const DO_NOTHING = 'DO_NOTHING';

// Action Creators
export const doNothing = () => {
  return {
    type: DO_NOTHING,
  };
};

// Thunk Creators

export default function dummyReducer(state = initialState, action) {
  switch (action.type) {
    case DO_NOTHING:
      return state;
    default:
      return state;
  }
}
