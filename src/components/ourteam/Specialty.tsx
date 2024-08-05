import React from 'react'
import { SPECIALTY_CARD_DATA } from '../common/Helper'
interface SpecialCard {
    icon: React.ReactNode,
    heading: string,
    para: string,
}

const Specialty = () => {
    return (
        <>
            <div className="container max-w-[1180px] pb-[152px]">
                <h3 className='font-jakarta font-semibold text-4xl text-jet_black text-center'>Specialty in  Pometry team</h3>
                <div className="flex gap-6 mt-8 md:mt-14 justify-center flex-wrap">
                    {SPECIALTY_CARD_DATA.map((data: SpecialCard , index: number) => (
                        <div className="max-w-[250px] rounded-md md:rounded-lg bg-white border border-[#1111111A] pt-4 px-2 2xl:pt-6 lg:px-4 2xl:px-6 pb-[35px] w-full flex flex-col justify-center items-center hover:shadow-7xl hover:border-b-[#E31930] hover:border-transparent hover:border-b transition-all duration-300 " key={index}>
                            <div className="size-[52px] rounded-md bg-smoke_red flex justify-center items-center">
                                {data.icon}
                            </div>
                            <p className='font-jakarta text-xl lg:text-2xl font-semibold text-jet_black mt-4'>{data.heading}</p>
                            <p className='font-jakarta text-md lg:text-base font-normal text-jet_black text-center opacity-80'>{data.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Specialty