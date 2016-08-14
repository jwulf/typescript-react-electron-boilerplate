export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'

export interface Todo {
    text: string
    completed: boolean
}

export interface State {
    visibilityFilter: VisibilityFilter
    todos: Todo[]
}