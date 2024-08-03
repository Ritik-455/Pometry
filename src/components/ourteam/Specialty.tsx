import React from 'react'
import { SPECIALTY_CARD_DATA } from '../common/Helper'
interface Special_Card {
    icon: any,
    head: string,
    para: string,
}

const Specialty = () => {
    return (
        <>
            <div className="container max-w-[1180px]">
                <h3 className='font-jakarta font-semibold text-4xl text-jet_black text-center'>Specialty in  Pometry team</h3>
                <div className="flex gap-6 mt-14">
                    {SPECIALTY_CARD_DATA.map((data: Special_Card, index) => (
                        <div className="max-w-[250px] rounded-lg bg-white border border-[#1111111A] pt-6 pl-6 px-6 pb-[53px] w-full flex flex-col justify-center items-center hover:shadow-3xl" key={index}>
                            <div className="size-[52px] rounded-md bg-smoke_red flex justify-center items-center">
                                {data.icon}
                            </div>
                            <p className='font-jakarta text-2xl font-semibold text-jet_black mt-4'>{data.head}</p>
                            <p className='font-jakarta text-base font-normal text-jet_black text-center opacity-80'>{data.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Specialty