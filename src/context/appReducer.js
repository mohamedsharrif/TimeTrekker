export const intialState = {
    auth: {
        isAuthenticated: false,
        currentUser: null
    },
    users: [],
    TasksRecord: [],
    WorkRecord: [],
    ShortBreack: [],
    LongBreack: [],
}

const appReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'REGISTER_USER':
            return {
                ...state,
                users: [...state.users, payload.user]
            }
        case 'LOGIN_USER':
            const user = state.users.find(user => user.email === payload.email
                && user.password === payload.password)

            if (user) {
                return {
                    ...state,
                    auth: {
                        isAuthenticated: true,
                        currentUser: user

                    }
                }
            } else {
                return {
                    ...state,
                    auth:{
                        isAuthenticated: false,
                        currentUser: null,
                        authError: true
                    }

                }

            }

    }
}

export default appReducer