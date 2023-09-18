"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
export default function Full3() {
    const { data } = usePeep()
    return (
        <>
            <path d="M227.9943,104.3107 C218.6813,96.0137 208.2423,79.3337 194.8633,92.5317 C191.5543,96.2607 190.2143,104.6207 185.1543,106.2607 C178.4343,108.4407 171.7743,101.3307 169.4843,95.8707 C160.1143,65.5337 198.8483,57.2127 220.9143,62.1137 C231.6943,66.5407 239.6343,84.3607 240.1143,93.6607 C240.4243,99.9107 235.1343,109.1007 227.9943,104.3107 M298.2543,57.5507 C298.1633,57.1477 298.0363,56.7837 297.8833,56.4527 C293.7643,54.8957 290.5053,56.4837 288.4913,59.4497 C288.5573,60.1867 288.7773,60.9337 288.9163,61.6647 C287.3623,64.9387 285.9603,68.9897 283.8543,71.8187 C283.4383,71.8507 283.0073,71.8067 282.5933,71.6867 C247.6803,75.3327 264.7253,38.8037 229.3143,29.7307 C201.9413,25.2147 152.4673,30.3877 139.5543,58.8787 C129.3703,104.3867 77.5873,72.6767 60.5853,49.0097 C42.4443,27.4707 30.7143,1.1507 19.4043,-24.3893 C17.0143,-29.7943 9.5553,-25.9293 10.3663,-20.7433 C-0.0877,0.2277 0.2603,25.4177 -2.3287,48.3917 C-6.7327,94.2267 -11.0237,158.5047 31.5633,186.4917 C87.0503,249.2087 225.6083,271.3407 289.6063,213.7147 C311.7603,166.0847 309.0293,107.9777 298.2543,57.5507" id="🖍-Ink" fill={data.beardColor}></path>
        </>
    )
}