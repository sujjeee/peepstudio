"use client"

import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { usePeep } from '@/lib/context/PeepContext'

interface HeadProps {
    heads: any
}

const Head: React.FC<HeadProps> = ({ heads }) => {
    const { setPeepData, data } = usePeep()
    return (
        <div>
            <RadioGroup
                key={data.head}
                defaultValue={data.head}
                className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                {heads.map((head: any, index: any) => (
                    <div key={index}>
                        <RadioGroupItem
                            value={head.code}
                            id={head.code}
                            className="peer sr-only"
                            onClick={() => {
                                setPeepData("head", head.code);
                            }} />
                        <Label
                            htmlFor={head.code}
                            className="w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                overflow="hidden"
                                viewBox="0 0 700 700"
                                style={{ width: "100%", height: "100%" }}
                                fill="none"
                            >
                                <g transform="translate(120, 100)">
                                    {head.component}
                                </g>
                            </svg>
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default Head