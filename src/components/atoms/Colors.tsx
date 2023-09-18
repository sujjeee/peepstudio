"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { usePeep } from '@/lib/context/PeepContext'
import { Input } from '../ui/input'

interface SkinsProps {

}

const Colors: React.FC<SkinsProps> = ({ }) => {
    const { data, setPeepData } = usePeep()
    const [showRadioGroup, setShowRadioGroup] = React.useState(false);

    const skins = [
        "#FFDBB4",
        "#EDB98A",
        "#D08B5B",
        "#AE5D29",
        "#694D3D",
        "#FFD11B",
    ];
    const hair = [
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

    const beard = [
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

    React.useEffect(() => {
        const randomIndex = Math.floor(Math.random() * skins.length);
        const randomSkinColor = skins[randomIndex];
        // const randomHairColor = hair[randomIndex];
        // const randomBeardColor = beard[randomIndex];
        setPeepData("skinColor", randomSkinColor);
        // setPeepData("hairColor", randomHairColor);
        // setPeepData("beardColor", randomBeardColor);
        setShowRadioGroup(true)
    }, [data.refresh]);

    return (
        <Card className='w-full rounded-md p-6'>
            {showRadioGroup && (
                <CardContent className="grid gap-4 p-0">
                    <Tabs defaultValue="skin" >
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="skin">Skin</TabsTrigger>
                            <TabsTrigger value="hair">Hair</TabsTrigger>
                            <TabsTrigger value="beard">Beard</TabsTrigger>
                            <TabsTrigger value="frame">Frame</TabsTrigger>
                        </TabsList>
                        <TabsContent value="skin">
                            <RadioGroup
                                key={data.face}
                                defaultValue={data.skinColor}
                                className="grid grid-flow-col gap-2">
                                {skins.map((color, index) => {
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
                        </TabsContent>
                        <TabsContent value="hair">
                            <CardContent className="space-y-2 p-0">
                                <RadioGroup
                                    defaultValue={data.hairColor}
                                    className="grid grid-flow-col gap-2">
                                    {hair.map((color, index) => (
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
                        </TabsContent>
                        <TabsContent value="beard">
                            <CardContent className="space-y-2 p-0">
                                <RadioGroup
                                    defaultValue={data.beardColor}
                                    className="grid grid-flow-col gap-2">
                                    {beard.map((color, index) => (
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
                                {/* <RadioGroup
                                        
                                    defaultValue='frame'
                                    className="grid grid-flow-col gap-2">
                                    <RadioGroupItem
                                        value='frame'
                                        id='frame'
                                        className="peer sr-only" />
                                    <Label
                                        htmlFor='frame'
                                        className="p-0.5 w-full h-14 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                    </Label>
                                </RadioGroup> */}
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

                </CardContent>
            )}
        </Card>
    )
}

export default Colors
