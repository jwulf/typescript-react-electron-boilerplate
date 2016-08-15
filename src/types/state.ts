export type IVisibilityFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'

export interface ITodo {
    id: number
    text: string
    completed: boolean
}

export interface IState {
    visibilityFilter: IVisibilityFilter
    todos: ITodo[]
    nextTodoId: number
}