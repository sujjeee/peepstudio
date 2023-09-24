"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { usePeep } from '@/lib/context/PeepContext'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

interface SkinsProps {

}
export const skins = [
    "#FFDBB4",
    "#EDB98A",
    "#D08B5B",
    "#AE5D29",
    "#694D3D",
    "#FFD11B",
];

const hairs = [
    "#000000",
    "#D6B370",
    "#F59797",
    "#E8DCBF",
    "#F2F2F2",
    "#A55728",
    "#B58143",
    "#724133",
    "#4A312C",
    "#C93305"
]

const beards = [
    "#000000",
    "#D6B370",
    "#F59797",
    "#E8DCBF",
    "#F2F2F2",
    "#A55728",
    "#B58143",
    "#724133",
    "#4A312C",
    "#C93305"
];
const Colors: React.FC<SkinsProps> = ({ }) => {
    const { data, setPeepData } = usePeep()
    return (
        <ScrollArea className="h-[350px] lg:h-auto">
            <div className='space-y-4'>
                <Card>
                    <CardHeader>
                        <CardTitle>Skin color</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup
                            key={data.skinColor}
                            defaultValue={data.skinColor}
                            className="grid gap-2.5 grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
                            {skins.map((color: any, index: any) => {
                                return (
                                    <div key={index}>
                                        <RadioGroupItem
                                            value={color}
                                            id={color}
                                            className="peer sr-only" />
                                        <Label
                                            htmlFor={color}
                                            className="p-0.5 w-full h-14 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            onClick={() => {
                                                setPeepData("skinColor", color);
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                overflow="hidden"
                                                viewBox="0 0 300 300"
                                                style={{ width: "100%", height: "100%", backgroundColor: color, borderRadius: "calc(var(--radius) - 5px)" }}
                                                fill="none"
                                            >
                                            </svg>
                                        </Label>
                                    </div>
                                )
                            })}
                        </RadioGroup>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Hair color</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup
                            key={data.hairColor}
                            defaultValue={data.hairColor}
                            className="grid gap-2.5 grid-cols-[repeat(auto-fill,minmax(55px,1fr))]">
                            {hairs.map((color: any, index: any) => (
                                <div key={index}>
                                    <RadioGroupItem value={color} id={color} className="peer sr-only" />
                                    <Label
                                        htmlFor={color}
                                        className="p-0.5 w-full h-14 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        onClick={() => {
                                            setPeepData("hairColor", color);
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            overflow="hidden"
                                            viewBox="0 0 300 300"
                                            style={{ width: "100%", height: "100%", backgroundColor: color, borderRadius: "calc(var(--radius) - 5px)" }}
                                            fill="none"
                                        >
                                        </svg>
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Beard color</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup
                            key={data.beardColor}
                            defaultValue={data.beardColor}
                            className="grid gap-2.5 grid-cols-[repeat(auto-fill,minmax(55px,1fr))]">
                            {beards.map((color: any, index: any) => (
                                <div key={index}>
                                    <RadioGroupItem
                                        value={color}
                                        id={color} className="peer sr-only" />
                                    <Label
                                        htmlFor={color}
                                        className="p-0.5 w-full h-14 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        onClick={() => {
                                            setPeepData("beardColor", color);
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            overflow="hidden"
                                            viewBox="0 0 300 300"
                                            style={{ width: "100%", height: "100%", backgroundColor: color, borderRadius: "calc(var(--radius) - 5px)" }}
                                            fill="none"
                                        >
                                        </svg>
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Background</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Input
                            type="color"
                            placeholder="frame backgound color"
                            value={data.frameColor}
                            onChange={(e) => {
                                setPeepData('frameColor', e.target.value)
                            }}
                            className='p-1 rounded-md h-14 overflow-hidden'
                        />
                    </CardContent>
                </Card>

            </div>
        </ScrollArea>
    )
}

export default Colors
