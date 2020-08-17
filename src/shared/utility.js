export const updatedObject = ( oldState , updatedValue) => {
    return {
        ...oldState,
        ...updatedValue
    }
}