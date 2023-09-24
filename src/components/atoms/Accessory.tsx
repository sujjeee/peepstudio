"use client"

import React from 'react'
import {
    CardContent,
} from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { usePeep } from '@/lib/context/PeepContext'
import { ScrollArea } from '@/components/ui/scroll-area'

interface AccessoryProps {
    masks: ComponentData[]
    glasses: ComponentData[]
}
const Accessory: React.FC<AccessoryProps> = ({ masks, glasses }) => {
    const { data, setPeepData } = usePeep()
    return (
        <ScrollArea className="h-[350px] lg:h-auto">
            <div className='w-full space-y-4 '>
                <CardContent className="grid gap-4 p-0">
                    <RadioGroup
                        key={data.accessory}
                        defaultValue={data.accessory}
                        className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                        {glasses.map((accessory, index) => (
                            <div key={index}>
                                <RadioGroupItem
                                    value={accessory.code}
                                    id={accessory.code}
                                    className="peer sr-only" />
                                <Label
                                    htmlFor={accessory.code}
                                    className="p-1.5 w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    onClick={() => {
                                        setPeepData("accessory", accessory.code);
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
                                            {accessory.component}
                                        </g>
                                    </svg>
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </CardContent>
                <CardContent className="grid gap-4 p-0">
                    <RadioGroup
                        key={data.mask}
                        defaultValue={data.mask}
                        className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                        {masks.map((mask, index) => (
                            <div key={index}>
                                <RadioGroupItem
                                    value={mask.code}
                                    id={mask.code}
                                    className="peer sr-only" />
                                <Label
                                    htmlFor={mask.code}
                                    className="p-1.5 w-full h-full flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    onClick={() => {
                                        setPeepData("mask", mask.code);
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
                                            {mask.component}
                                        </g>
                                    </svg>
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </CardContent>
            </div>
        </ScrollArea>
    )
}

export default Accessory
