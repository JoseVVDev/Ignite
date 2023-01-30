import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        backgroundColor: "$gray900",
        color: '$gray100',
        fontFamily: 'Roboto',
        fontWeight: 400,
    }
})