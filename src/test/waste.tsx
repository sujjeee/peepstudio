// "use client"

// import React from 'react'
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle
// } from '@/components/ui/card'
// import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
// import { Label } from '../ui/label'
// import { usePeep } from '@/lib/context/PeepContext'

// interface SkinProps {

// }

// const Skins: React.FC<SkinProps> = ({ }) => {
//     const { setPeepData } = usePeep()
//     const [skins, setSkins] = React.useState([
//         "#694D3D",
//         "#FFDBB4",
//         "#EDB98A",
//         "#AE5D29"
//     ]);

//     React.useEffect(() => {
//         const randomIndex = Math.floor(Math.random() * skins.length);
//         const randomSkin = skins[randomIndex];
//         setPeepData("color", randomSkin);
//     }, []);

//     return (
//         <Card className='w-full'>
//             <CardHeader className="space-y-1">
//                 <CardTitle className="text-2xl flex justify-between items-center">
//                     Body
//                 </CardTitle>
//                 <CardDescription>
//                     Enter your additional link details here.
//                 </CardDescription>
//             </CardHeader>
//             <CardContent className="grid gap-4">
//                 <RadioGroup defaultValue="card" className="grid grid-flow-col gap-2">
//                     {skins.map((skin, index) => (
//                         <div key={index}>
//                             <RadioGroupItem value={skin} id={skin} className="peer sr-only" />
//                             <Label
//                                 htmlFor={skin}
//                                 className="p-0.5 w-full h-14 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
//                                 onClick={() => {
//                                     setPeepData("color", skin);
//                                 }}
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     overflow="hidden"
//                                     viewBox="0 0 300 300"
//                                     style={{ width: "100%", height: "100%", backgroundColor: skin, borderRadius: "calc(var(--radius) - 5px)" }}
//                                     fill="none"
//                                 >
//                                 </svg>
//                             </Label>
//                         </div>
//                     ))}
//                 </RadioGroup>
//             </CardContent>
//         </Card>
//     )
// }

// export default Skins
