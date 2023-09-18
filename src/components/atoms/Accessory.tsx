"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { getAccessories } from '@/components/atoms/accessory/index'
import { usePeep } from '@/lib/context/PeepContext'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { getMasks } from '@/components/atoms/mask/index'

interface AccessoryProps {

}

type ComponentData = {
    code: string;
    component: JSX.Element;
    name: string;
};


const Accessory: React.FC<AccessoryProps> = ({ }) => {
    const { data, setPeepData } = usePeep()
    const [accessory, setAccessory] = React.useState<ComponentData[]>([]);
    const [mask, setMask] = React.useState<ComponentData[]>([]);
    const [showRadioGroup, setShowRadioGroup] = React.useState(false);

    React.useEffect(() => {
        const getAccessoriesArray = async () => {
            const fetchedAccessories = await getAccessories();
            const fetchedMasks = await getMasks();

            setAccessory(fetchedAccessories);
            setMask(fetchedMasks);

            const randomAccessoryIndex = Math.floor(Math.random() * fetchedAccessories.length);
            const randomAccessory = fetchedAccessories[randomAccessoryIndex];

            setPeepData("accessory", randomAccessory.code);
            setShowRadioGroup(true)
        };

        getAccessoriesArray();
    }, [data.refresh]);

    return (
        <Card className='w-full'>
            <Tabs defaultValue="glasses">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl flex justify-between items-center">
                        Accessories
                        <TabsList>
                            <TabsTrigger value="glasses" className="relative">
                                Glasses
                            </TabsTrigger>
                            <TabsTrigger value="masks">
                                Masks
                            </TabsTrigger>
                        </TabsList>
                    </CardTitle>
                    <CardDescription>
                        Enter your additional link details here.
                    </CardDescription>
                </CardHeader>
                {showRadioGroup && (
                    <>
                        <TabsContent value="glasses">
                            <CardContent className="grid gap-4">
                                <RadioGroup
                                    key={data.accessory}
                                    defaultValue={data.accessory}
                                    className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                                    {accessory.map((accessory, index) => (
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
                        </TabsContent>
                        <TabsContent value="masks">
                            <CardContent className="grid gap-4">
                                <RadioGroup
                                    key={data.mask}
                                    defaultValue={data.mask}
                                    className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 mx-auto">
                                    {mask.map((mask, index) => (
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
                        </TabsContent>
                    </>
                )}
            </Tabs>
        </Card>
    )
}

export default Accessory
