const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id)
        return state
      else
        return Object.assign({}, state, {
          completed: !state.completed
        })
        // {
        //   ...todo,
        //   completed: !todo.completed
        // }
    default:
      return state
  } // switch
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

//*************

const { combineReducers } = Redux
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const { createStore } = Redux
const store = createStore(todoApp)
