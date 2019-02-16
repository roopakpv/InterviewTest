const todos = (state = [{ searchText: '' }], action) => {
  switch (action.type) {
    case 'SEARCH':
      return [

        {
          searchText: action.item
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todos
