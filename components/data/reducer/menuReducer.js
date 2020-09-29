const initialRestau = { initialmenu: [] };

function Menurestau(state = initialRestau, action) {
  let nextState;
  switch ((action, type)) {
    case "TOGGLE_MENU":
      const favoritmenuIndex = state.initialmenu.findIndex(
        (item) => item.id === action.value.id
      );
      if (favoritmenuIndex !== -1) {
        nextState = {
          ...state,
          initialmenu: state.initialmenu.filter(
            (valeur, index) => index !== favoritmenuIndex
          ),
        };
      }else {
          nextState = {
              ...state,
              initialmenu: [...state.initialmenu, action.value]
          }
      }
      return nextState || state ;

    default:
      break;
  }
}


export default Menurestau;
