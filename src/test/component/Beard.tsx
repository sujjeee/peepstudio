"use client"

import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { usePeep } from '@/lib/context/PeepContext'
import { Label } from '@/components/ui/label'

interface BeardsProps {
    beards: any
}

const Beard: React.FC<BeardsProps> = ({ beards }) => {
    const { data, setPeepData } = usePeep()

    return (
        <div className="grid gap-4">
            <RadioGroup
                key={data.head}
                defaultValue={data.beard}
                className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                {beards.map((beard: any, index: any) => (
                    <div key={index}>
                        <RadioGroupItem
                            value={beard.code}
                            id={beard.code}
                            className="peer sr-only" />
                        <Label
                            htmlFor={beard.code}
                            className="p-1.5 w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            onClick={() => {
                                setPeepData("beard", beard.code);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                overflow="hidden"
                                viewBox="0 0 450 450"
                                style={{ width: "100%", height: "100%" }}
                                fill="none"
                            >
                                <g transform="translate(50, 150)" >
                                    {beard.component}
                                </g>
                            </svg>
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default Beard
