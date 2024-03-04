
'use client'
// to show error whenever loading failed.

export default function Error({ error }){
    return(
        <main className="error">
            <h1>An error occureed!</h1>
            <p>Failed to fetch meal data. Please try again later.</p>
        </main>
    )
}