"use client"

import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { usePeep } from '@/lib/context/PeepContext'

interface FaceProps {
    faces: any
}

const Face: React.FC<FaceProps> = ({ faces }) => {
    const { setPeepData, data } = usePeep()
    return (
        <div className="grid gap-4">
            <RadioGroup
                key={data.face}
                defaultValue={data.face}
                className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                {faces.map((face: any, index: any) => (
                    <div key={index}>
                        <RadioGroupItem
                            value={face.code}
                            id={face.code}
                            className="peer sr-only"
                            onClick={() => {
                                setPeepData("face", face.code);
                            }} />
                        <Label
                            htmlFor={face.code}
                            className="p-1.5 w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                overflow="hidden"
                                viewBox="0 0 300 300"
                                style={{ width: "100%", height: "100%" }}
                                fill="none"
                                className=" flex justify-center items-center"
                            >
                                {face.component}
                            </svg>
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default Face