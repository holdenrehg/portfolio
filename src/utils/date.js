export const prettyDate = (date) => {
    return new Intl.DateTimeFormat("en-us", {"dateStyle": "long"}).format(new Date(date))
}
