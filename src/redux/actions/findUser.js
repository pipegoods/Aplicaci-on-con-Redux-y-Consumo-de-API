export const type = 'findUser';

const findUser = (usuario, pass) => {
    return {
        type,
        payload: {
            usuario,
            pass
        }
    };
}

export default findUser;