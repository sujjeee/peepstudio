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
    // console.log("skin", skin)
    const { data, setPeepData } = usePeep()


    return (
        <div className='space-y-4'>
            <Card>
                <CardHeader>
                    <CardTitle>Skin color</CardTitle>
                </CardHeader>
                <CardContent>
                    <RadioGroup
                        key={data.skinColor}
                        defaultValue={data.skinColor}
                        className="grid grid-flow-col gap-2">
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
                        className="grid grid-flow-col gap-2">
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
                        className="grid grid-flow-col gap-2">
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
                        // key={data.frameColor}
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
            {/* <CardContent className="grid gap-4 p-0">
                    <Tabs defaultValue="skin" >
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="skin">Skin</TabsTrigger>
                            <TabsTrigger value="hair">Hair</TabsTrigger>
                            <TabsTrigger value="beard">Beard</TabsTrigger>
                            <TabsTrigger value="frame">Frame</TabsTrigger>
                        </TabsList>
                        <TabsContent value="skin">
                            
                        </TabsContent>
                        <TabsContent value="hair">
                            <CardContent className="space-y-2 p-0">
                                
                            </CardContent>
                        </TabsContent>
                        <TabsContent value="beard">
                            <CardContent className="space-y-2 p-0">
                                <RadioGroup
                                // key={data.beardColor}
                                    defaultValue={data.beardColor}
                                    className="grid grid-flow-col gap-2">
                                    {beard.map((color:any, index:any) => (
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
                        </TabsContent>
                        <TabsContent value="frame">
                            <CardContent className="space-y-2 p-0">
                                <Input
                                    type="color"
                                    placeholder="frame backgound color"
                                    value={data.frameColor}
                                    onChange={(e) => {
                                        console.log("evernt", e.target.value)
                                        setPeepData('frameColor', e.target.value)
                                    }}
                                    className='p-1 rounded-md h-14 overflow-hidden'
                                />
                            </CardContent>
                        </TabsContent>
                    </Tabs>

                </CardContent> */}

        </div>
    )
}

export default Colors
