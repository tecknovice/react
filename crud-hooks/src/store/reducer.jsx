import { initialState } from "./state";
export const ActionTypes = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
}

export const reducer = (state, action) => {
    const { type, payload } = action

    const { items } = state
    switch (type) {
        case ActionTypes.CREATE:
            return { items: [...items, payload] }
        case ActionTypes.UPDATE:
            const newItems = JSON.parse(JSON.stringify(items))
            const updateIndex = newItems.findIndex(item => item.id === payload.id)
            newItems.splice(updateIndex, 1, payload)
            return { items: newItems }
        case ActionTypes.DELETE:
            return { items: items.filter(item => item.id !== payload) }
        default:
            return state
    }
}