export const additem = (data) => {
    return {
        type : 'ADD_TODO',
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}