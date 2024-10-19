export default function Badge(){
return(
    <>
         <div className="relative inline-block">
            <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
              Nổi bật
            </span>
            <span className="absolute left-0 top-1 w-1.5 h-5 bg-orange-500 rounded-bl-full mt-1"></span>
          </div>
    </>
)
}