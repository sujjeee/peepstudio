"use client"

import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { usePeep } from '@/lib/context/PeepContext'

interface BodyProps {
    bodies: any
}

const Body: React.FC<BodyProps> = ({ bodies }) => {
    const { setPeepData, data } = usePeep()

    return (
        <div className="grid gap-4">
            <RadioGroup
                key={data.body}
                defaultValue={data.body}
                className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                {bodies.map((body: any, index: any) => (

                    <div key={index}>
                        <RadioGroupItem
                            value={body.code}
                            id={body.code}
                            className="peer sr-only"
                            onClick={() => {
                                setPeepData("body", body.code);
                            }}
                        />
                        <Label
                            htmlFor={body.code}
                            className="p-1.5 w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                overflow="hidden"
                                viewBox="0 0 900 900"
                                style={{ width: "100%", height: "100%" }}
                                fill="none"
                            >
                                <g transform="translate(40, 100)" >
                                    {body.component}
                                </g>
                            </svg>
                        </Label>
                    </div>

                ))}
            </RadioGroup>
        </div>
    )
}

export default Body