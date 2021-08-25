require('dotenv').config()
const LOAD = 'LOAD'
const SELECT_BOOK = 'SELECT_BOOK'
const SET_START_INDEX = 'SET_START_INDEX'
const SET_PARAMS = 'SET_PARAMS'
const GET_BOOKS = 'GET_BOOKS'
const LOAD_MORE = 'LOAD_MORE'
const LOAD_SPECIFIC = 'LOAD_SPECIFIC'
const TOTAL = 'TOTAL'

let initialState = {
    isLoading: false,
    items: [],
    startIndex: 0,
    specificBook: {},
    selected: '',
    total: '',
    params: {},
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
            return { ...state, items: [...state.items, ...action.data] }
        case LOAD_SPECIFIC:
            return { ...state, specificBook: action.data }
        case SET_PARAMS:
            return { ...state, params: action.params }
        case SET_START_INDEX:
            return { ...state, startIndex: action.index }
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
const SetStartIndex = (index) => {
    return { type: SET_START_INDEX, index }
}

const GetBooks = (data) => {
    return { type: GET_BOOKS, data }
}
const SetParams = (params) => {
    return { type: SET_PARAMS, params }
}
const LoadMore = (data) => {
    return { type: LOAD_MORE, data }
}
const LoadSpecific = (data) => {
    return { type: LOAD_SPECIFIC, data }
}

export const LoadBooksThunkCreator = ({ input, category, order }) => {
    return async (dispatch, getState) => {
        try {
            dispatch(LoadingAc())
            dispatch(SetParams({ input, category, order }))
            dispatch(SetStartIndex(0))
            let categoryQuery = category !== 'all' ? `+subject:${category}&` : ''

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
export const LoadMoreBooksThunkCreator = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(LoadingAc())
            let { input, category, order } = getState().params
            let categoryQuery = category !== 'all' ? `+subject:${category}&` : ''

            let startIndex = getState().startIndex + 30

            dispatch(SetStartIndex(startIndex))
            let query = `https://www.googleapis.com/books/v1/volumes?q=intitle:${input}${categoryQuery}&startIndex=${startIndex}&maxResults=30&orderBy=${order}&key=${process.env.REACT_APP_KEY}`
            console.log(query)
            let data = await fetch(query)
            let res = await data.json()

            dispatch(LoadMore(res.items || []))
            dispatch(LoadingAc())
        } catch (error) {
            throw error
        }
    }
}

export const LoadSpecificBookThunkCreator = (id) => {
    return async (dispatch) => {
        try {
            dispatch(LoadingAc())
            let query = `https://www.googleapis.com/books/v1/volumes${id}?key=${process.env.REACT_APP_KEY}`
            console.log(query)
            let data = await fetch(query)
            let res = await data.json()
            dispatch(LoadSpecific(res))
            dispatch(LoadingAc())
        } catch (error) {
            throw error
        }
    }
}

export default mainReducer
