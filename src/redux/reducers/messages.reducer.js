import {
    ADD_MESSAGE,
    GET_CHATS,
    GET_CHAT_MESSAGES,
    RESET_MESSAGES,
    SEND_MESSAGE,
} from "../types/messages.types";

const initialState = {
    chats: [],
    messages: [],
    loading: false,
    error: "",
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHATS.REQUEST:
            return { ...state, loading: true, error: "" };
        case GET_CHATS.SUCCESS:
            return {
                ...state,
                chats: action.payload,
                loading: false,
                error: "",
            };
        case GET_CHATS.FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case GET_CHAT_MESSAGES.REQUEST:
            return { ...state, loadingMessages: true, messages: [], error: "" };
        case GET_CHAT_MESSAGES.SUCCESS:
            return {
                ...state,
                messages: action.payload,
                loadingMessages: false,
            };
        case GET_CHAT_MESSAGES.FAIL:
            return {
                ...state,
                loadingMessages: false,
                error: action.payload,
            };

        case SEND_MESSAGE.REQUEST:
            return { ...state, sendingMessages: false };
        case SEND_MESSAGE.SUCCESS:
            return {
                ...state,
                messages: [...state.messages, action.payload],
                sendingMessages: false,
            };
        case SEND_MESSAGE.FAIL:
            return {
                ...state,
                sendingMessages: false,
            };

        case RESET_MESSAGES:
            return {
                ...state,
                messages: [],
            };

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
                chats: [...state.chats.map(chat => {
                    if (chat._id === action.payload.chat._id) {
                        chat.latestMessage = action.payload
                    }
                    return chat;
                })]
            };

        default:
            return { ...state };
    }
};

export default messagesReducer;
