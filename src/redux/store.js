import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"

import scategoriesReducer from "../features/scategorieSlice"

const store = configureStore({
reducer: {
storearticles:articlesReducer,
storescategories: scategoriesReducer,

}
})
export default store