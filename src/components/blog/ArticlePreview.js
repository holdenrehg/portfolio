import React from "react"
import { prettyDate } from "../../utils/date"
import { ellipsis } from "../../utils/text"

export const ArticlePreview = (props) => {
    if(props.meta.coverImage) {
        return (
            <a href={`/blog/${props.meta.id}`} className={props.className + " block opacity-90 cursor-pointer hover:underline hover:opacity-100"} style={props.style}>
                <div className="h-64 w-full mb-4 bg-gray-200 overflow-hidden">
                    <img
                        className="w-full"
                        src={props.meta.coverImage}
                        loading="lazy"
                    />
                </div>
                <p className="text-gray-600">{prettyDate(props.meta.datePosted)}</p>
                <p className="text-xl font-bold">{props.meta.title}</p>
                <p className="text-lg mt-3 text-gray-600">{ellipsis(props.meta.description, 210)}</p>
                <div className="mt-4">{props.meta.renderTags("bg-gray-300", "text-gray-600", "xs")}</div>
            </a>
        )
    }

    // "no cover image" article preview style has a dark background, light
    // font, bigger padding to stand out.
    return (
        <a
            href={`/blog/${props.meta.id}`}
            className={props.className + " block cursor-pointer hover:underline hover:opacity-100"}
            style={Object.assign(
                props.style,
                {
                    backgroundColor: props.meta.backgroundColor,
                    textDecorationColor: props.meta.textDecorationColor,
                    minHeight: "400px",
                }
            )}
        >
            <div className="flex flex-col items-center justify-center h-full text-center px-10">
                <p className="text-gray-400">{prettyDate(props.meta.datePosted)}</p>
                <p className="text-xl font-bold text-gray-100">{props.meta.title}</p>
                <p className="text-lg mt-3 text-gray-500">{ellipsis(props.meta.description, 210)}</p>
                <div className="mt-12">{props.meta.renderTags("bg-gray-200", "text-gray-800", "xs")}</div>
            </div>
        </a>
    )
}
