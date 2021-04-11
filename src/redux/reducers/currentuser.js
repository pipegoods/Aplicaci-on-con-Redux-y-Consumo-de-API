const defaultState = {
    id: 1,
    nombre: 'pipe',
    pass: '123',
    usuario: 'pipegoods',
    email: 'pipe.jaider@gmail.com'
};

function reducer(state = defaultState, {type, payload}) {
    switch (type) {
            case 'findUser': {
                return {
                    id: 1,
                    nombre: 'pipe',
                    pass: '123',
                    usuario: 'pipegoods',
                    email: 'pipe.jaider@gmail.com'
                }
            }
        default:
            return state;
    }
}

export default reducer;