export default function ProductReviewCard({ review }) {
    return (<div className="bg-gray-100 w-full max-w-[400px] max-w-lg px-5 py-2.5 space-y-2.5 rounded-lg">
        <div className="flex gap-2 items-center">
            <img src="https://github.com/shadcn.png" className="size-[42.5px] rounded-full" />
            <div>
                <h1 className="font-bold text-xl">{review.reviewerName}</h1>
                <p className="text-slate-500 text-wrap">{review.reviewerEmail}</p>
            </div>
        </div>
        <p className="text-slate-800 text-lg text-wrap">{review.comment}</p>
    </div>)
}