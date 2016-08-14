// https://github.com/acdlite/flux-standard-action
export interface Action<T>{
  type: string
  payload: T
  error?: boolean
  meta?: any
}