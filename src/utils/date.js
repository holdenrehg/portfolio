const hasTime = dateStr => dateStr.includes(":")

/**
 * Formats a "YYYY-MM-DD" string type object into a "pretty" formatted date.
 *
 *     prettyDate("2020-03-01") -> "March 1st, 2020"
 *
 * @param {string} date
 */
export const prettyDate = (dateStr) => {
    let formatterOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    if(hasTime(dateStr)) {
        formatterOptions = Object.assign(formatterOptions, {
            hour: "numeric",
            minute: "numeric",
        })
    }

    return (new Intl.DateTimeFormat("en-us", formatterOptions)).format(Date.parse(dateStr))
}
