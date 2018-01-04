const ChangeBg = (state = [], action) => {
    switch (action.type) {
      case 'CHANGE_BG':
        return action.text
      default:
        return state
    }
  }
  
  export default ChangeBg

