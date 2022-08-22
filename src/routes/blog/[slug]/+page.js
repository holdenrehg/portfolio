
export const hydate = false;

export async function load({ params, fetch }) {
    const res = await fetch(`/blog/${params.slug}.raw`);
    const body = await res.json();

    return {
        article: body,
    };
}
