function NothingIsLeft()
{
    return (
        <>
        <div className="text-2xl text-center leading-16 bg-gray-200 p-2 flex flex-col">
 
 🔒 This secret is no longer available

<span className="bg-red-300">
This link has already been viewed, or it has expired.
For security, secrets can only be opened once — the
message, password, and encryption key have all been
permanently deleted from our server.
</span>

<span className="bg-amber-500 italic">
 There's no way to recover it, even by us.
</span>

<span className="bg-pink-300">
If you were expecting this secret, ask the sender to  <a href="/" className="underline hover:text-yellow-900">
create a new link.
</a>
</span>
        </div>
        </>
    )
}

export default NothingIsLeft