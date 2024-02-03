import { Skeleton } from "../ui/skeleton"

const Loading = () => {
    return (
        <>
            {/* <div className="flex flex-row justify-start items-start gap-6 text-txt-high-contrast">
                <Skeleton className="h-[3.125rem] w-[4.875rem] rounded-full bg-white" />
                <div className="grid grid-cols-1 gap-2 w-full text-left md:grid-cols-2">
                    <Skeleton className="h-2 w-[90px] bg-white" />
                    <Skeleton className="h-2 w-[50px] bg-white md:col-start-1 md:col-end-2" />
                    <Skeleton className="h-2 w-[80px] bg-white md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:self-end md:text-right" />
                </div>
            </div>
            <Skeleton className='my-6 text-left text-txt-low-contrast1 bg-white' /> */}


            <div className="grid gap-8 bg-bg-secondary p-5 w-full rounded-2xl max-w-xl md:p-10 md:grid-cols-[minmax(0,max-content),1fr]">

                {/* <img
                    alt="User Image"
                    width={100}
                    height={100}
                    className="hidden rounded-full md:block"
                /> */}
                <div>
                    <div className="flex flex-row justify-start items-start gap-6 text-txt-high-contrast">
                        <Skeleton className="h-[3.125rem] w-[4.875rem] rounded-full bg-white" />
                        <div className="grid grid-cols-1 gap-2 w-full text-left md:grid-cols-2">
                            <Skeleton className="h-2 w-[90px] bg-white" />
                            <Skeleton className="h-2 w-[50px] bg-white md:col-start-1 md:col-end-2" />
                            <Skeleton className="h-2 w-[120px] bg-white md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:self-end md:text-right" />
                        </div>
                    </div>
                    <Skeleton className="h-3  w-[270px] my-6 text-left text-txt-low-contrast1 bg-white" />
                    <div className='flex justify-around p-3 gap-3 text-txt-high-contrast bg-bg-primary rounded-xl'>
                        <Skeleton className='h-7 w-[90px] bg-white' />
                        <Skeleton className='h-7 w-[90px] bg-white' />
                        <Skeleton className='h-7 w-[90px] bg-white' />
                    </div>
                    <div className='flex flex-col gap-3 pt-6'>
                        <Skeleton className="h-3 w-[300px] bg-white" />
                        <Skeleton className="h-3 w-[120px] bg-white" />
                        <Skeleton className="h-3 w-[200px] bg-white" />
                    </div>
                    {/* <Status />
                    <Links /> */}
                </div>

            </div>
        </>
    );
}

export default Loading;
