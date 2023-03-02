const globalState = { title: "Notes" }

const navReducer = (state = globalState, actions) => {
    switch (actions?.type) {
        case 'Notes':
            return { title: 'Notes' }

        case 'Archive':
            return { title: 'Archive' }

        case 'Trash':
            return { title: 'Trash' }


        default:
            return state;
    }
}
export default navReducer