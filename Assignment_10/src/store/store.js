import { createStore } from 'redux';

const initialState = {
  user: {
    name: 'MuhammedShaik',
    country: 'India',
    gender: 'Male',
    pan: '1234567',
    education: {
      tenth: { instituteName: 'G.H.S.S.Eravipuram', cgpa: '9.5' },
      higherSecondary: { instituteName: 'G.V.H.S.S.valathungal', cgpa: '8.7' },
      graduation: { instituteName: 'CEP', cgpa: '7.5' },
    },
    certifications: ['certification1,certification2'],
  },
};

function profile(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: action.payload };
    case 'ADD_CERTIFICATION':
      return {
        ...state,
        user: {
          ...state.user,
          certifications: [...state.user.certifications, action.payload],
        },
      };
    default:
      return state;
  }
}

const Store = createStore(profile);

export default Store;
