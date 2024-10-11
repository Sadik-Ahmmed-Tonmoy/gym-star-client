import { baseApi } from './api/baseApi'
import counterReducer from './features/counter/counterSlice'

export const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
    counter: counterReducer,
}