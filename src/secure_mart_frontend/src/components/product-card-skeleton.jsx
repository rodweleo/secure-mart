export const ProductCardSkeleton = () => {
    return (
        <div className="bg-white w-[300px] rounded-lg space-y-2.5 flex flex-col justify-between border shadow-md hover:shadow-lg hover:scale-[1.0075] duration-300 p-2.5">
            <div className="space-y-4 animate-pulse">
                <div className="h-[200px] bg-gray-200 rounded-md" />
                <div className="space-y-2.5 flex flex-col">
                    <div className="space-y-2.5">
                        <h1 className="font-bold text-2xl text-wrap line-clamp-1 w-full h-10 rounded-md bg-gray-200"></h1>
                        <p className="text-slate-400 line-clamp-2 text-md w-full h-6 rounded-md bg-gray-200"></p>
                    </div>
                    <span className="font-bold text-2xl text-green-600 h-10 w-2/4 bg-gray-200 rounded-md"></span>
                </div>
            </div>
        </div>
    )
}