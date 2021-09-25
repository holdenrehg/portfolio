import hljs from 'highlightjs';

export function highlight(element) {
    return hljs.highlightBlock(element);
}

export function highlightAll(query) {
    document.querySelectorAll(query).forEach(highlight);
}
