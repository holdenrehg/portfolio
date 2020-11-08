export const ellipsis = (text, length) => {
    if(text.length <= length) {
        return text
    }
    return text.slice(0, length - 3) + "..."
}
