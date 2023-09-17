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

interface SkinsProps {

}

const Skins: React.FC<SkinsProps> = ({ }) => {
    const { setPeepData } = usePeep()
    const skins = [
        "#FFDBB4",
        "#EDB98A",
        "#D08B5B",
        "#AE5D29",
        "#694D3D",
        "#FFD11B",
    ];
    const hair = [
        "#2C1B18",
        "#D6B370",
        "#F59797",
        "#E8DCBF",
        "#A55728",
        "#B58143",
        "#724133",
        "#4A312C",
        "#C93305"
    ]

    const beard = [
        "#2C1B18",
        "#D6B370",
        "#F59797",
        "#E8DCBF",
        "#A55728",
        "#B58143",
        "#724133",
        "#4A312C",
        "#C93305"
    ];

    React.useEffect(() => {
        const randomIndex = Math.floor(Math.random() * skins.length);
        const randomSkin = skins[randomIndex];
        setPeepData("color", randomSkin);
    }, []);
    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    Body
                </CardTitle>
                <CardDescription>
                    Enter your additional link details here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <Tabs defaultValue="skin" >
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="skin">Skin</TabsTrigger>
                        <TabsTrigger value="hair">Hair</TabsTrigger>
                        <TabsTrigger value="beard">Beard</TabsTrigger>
                    </TabsList>
                    <TabsContent value="skin">
                        <RadioGroup defaultValue="card" className="grid grid-flow-col gap-2">
                            {skins.map((color, index) => (
                                <div key={index}>
                                    <RadioGroupItem value={color} id={color} className="peer sr-only" />
                                    <Label
                                        htmlFor={color}
                                        className="p-0.5 w-full h-14 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        onClick={() => {
                                            setPeepData("color", color);
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
                    </TabsContent>
                    <TabsContent value="hair">
                        <CardContent className="space-y-2 p-0">
                            <RadioGroup defaultValue="card" className="grid grid-flow-col gap-2">
                                {hair.map((color, index) => (
                                    <div key={index}>
                                        <RadioGroupItem value={color} id={color} className="peer sr-only" />
                                        <Label
                                            htmlFor={color}
                                            className="p-0.5 w-full h-14 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            onClick={() => {
                                                setPeepData("color", color);
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
                            <RadioGroup defaultValue="card" className="grid grid-flow-col gap-2">
                                {beard.map((color, index) => (
                                    <div key={index}>
                                        <RadioGroupItem
                                            value={color}
                                            id={color} className="peer sr-only" />
                                        <Label
                                            htmlFor={color}
                                            className="p-0.5 w-full h-14 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            onClick={() => {
                                                setPeepData("color", color);
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
                </Tabs>

            </CardContent>
        </Card>
    )
}

export default Skins
