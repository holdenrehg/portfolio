import React from "react"
import { prettyDate } from "../../utils/date"
import { ellipsis } from "../../utils/text"

export const ArticlePreview = (props) => {
    return (
        <a href={`/blog/${props.meta.id}`} className={props.className + " block opacity-90 cursor-pointer hover:underline hover:opacity-100"} style={props.style}>
            <div
                className={(!props.meta.coverImage ? "hidden ": "") + "bg-cover h-64 w-full mb-4"}
                style={{ backgroundImage: `url(${props.meta.coverImage})` }}/>
            <p className="text-gray-600">{prettyDate(props.meta.datePosted)}</p>
            <p className="text-xl font-bold">{props.meta.title}</p>
            <p className="text-lg mt-3 text-gray-600">{ellipsis(props.meta.description, 210)}</p>
            <div className="mt-4">{props.meta.renderTags("bg-gray-300", "text-gray-600", "xs")}</div>
        </a>
    )
}
