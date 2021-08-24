require('dotenv').config()
const LOAD = 'LOAD'
const SELECT_BOOK = 'SELECT_BOOK'
const GET_BOOKS = 'GET_BOOKS'
const LOAD_MORE = 'LOAD_MORE'
const TOTAL = 'TOTAL'

let initialState = {
    isLoading: false,
    items: [],
    startIndex: 0,
    book: '',
    selected: '',
    total: '',
    choiceOptions: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
    orderOptions: ['newest', 'relevance'],
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return { ...state, isLoading: !state.isLoading }
        case TOTAL:
            return { ...state, total: action.total }
        case SELECT_BOOK:
            return { ...state, selected: action.selected }
        case GET_BOOKS:
            return { ...state, items: [...action.data] }
        case LOAD_MORE:
            return { ...state, items: [...state.items, action.data] }
        default:
            return state
    }
}

const LoadingAc = () => {
    return { type: LOAD }
}
const SetTotal = (total) => {
    return { type: TOTAL, total }
}

const GetBooks = (data) => {
    return { type: GET_BOOKS, data }
}
const LoadMore = (data) => {
    return { type: LOAD_MORE, data }
}

export const LoadBooksThunkCreator = ({ input, category, order }) => {
    return async (dispatch, getState) => {
        try {
            dispatch(LoadingAc())
            let categoryQuery = category !== 'all' ? `+subject:${category}&` : ''
            let inputQuery = input ? input : 'search+terms'
            let startIndex = getState().startIndex
            let query = `https://www.googleapis.com/books/v1/volumes?q=intitle:${input}${categoryQuery}&startIndex=${startIndex}&maxResults=30&orderBy=${order}&key=${process.env.REACT_APP_KEY}`
            console.log(query)
            let data = await fetch(query)
            let res = await data.json()
            dispatch(SetTotal(res.totalItems))
            dispatch(GetBooks(res.items || []))
            dispatch(LoadingAc())
        } catch (error) {
            throw error
        }
    }
}

export default mainReducer
