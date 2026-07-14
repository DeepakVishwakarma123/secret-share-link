function HiddenData(
    {
        secret="Nothing Data is here 🤣"
    }
)
{
    return (
        <>
          <div className="bg-gray-200 p-4 h-[50vh] flex justify-center items-center">
           <div className="bg-teal-300 w-[60%] p-6 grid gap-4">
            <div>
            <h2>Copy Below Secret</h2>
            <p>Once You Close This Page It Get Not Recover Back</p>
            </div>
             <textarea name="" id="" rows={4} cols={55} value={
            secret
        } readOnly className=" resize-none bg-purple-500 flex border border-2  justify-center items-center cursor-pointer  p-2"> 
        </textarea>
            </div>
            </div>
        </>
    )
}

export default HiddenData