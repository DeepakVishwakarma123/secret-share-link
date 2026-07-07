function CreateSecretLink() {

    return (
           <div className="bg-gray-200 p-4 flex justify-center items-center">
           <div className="bg-teal-300 w-[60%] p-4 grid gap-4">
            <div>
            <h2>Create a one-time Link</h2>
            <p>your secret is encrypted in broswer before it leaves</p>
            </div>
            <form className="flex flex-col gap-2">
                <textarea id="secret" name="secret" rows="4" cols="55" className="border-2 bg-amber-300" autoFocus placeholder="Enter a Secret here.Get a secure one-time link in return"></textarea>
                <button type="button" className="bg-purple-500 flex justify-center items-center cursor-pointer w-[15%] p-2">Create Link</button>
            </form>
           </div>
           </div>
    );
}

export default CreateSecretLink;