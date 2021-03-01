/**
 * Formats a "YYYY-MM-DD" string type object into a "pretty" formatted date.
 *
 *     prettyDate("2020-03-01") -> "March 1st, 2020"
 *
 * @param {string} date
 */
export const prettyDate = (date) => {
    date = date.split("-")

    const dateFormat = new Intl.DateTimeFormat("en-us", { "dateStyle": "long" })
    const year = date[0]
    const month = date[1] - 1 // Date uses 0 indexed months
    const day = date[2]

    return dateFormat.format(new Date(year, month, day))
}
