"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
export default function Full2() {
    const { data } = usePeep()
    return (
        <>
            <path d="M248.1317,111.7235 C244.6417,110.5815 241.2137,109.2525 237.7697,107.9715 C220.1607,99.1265 198.8897,97.5225 180.4227,104.9715 C171.3587,108.6275 162.9067,115.1965 153.8117,119.5015 C151.6517,120.3075 149.4737,121.0395 147.2717,121.6535 C145.9217,121.1835 144.5717,120.6835 143.2317,120.1835 C133.5847,116.5475 124.5107,112.0625 115.7007,107.1285 C114.7607,105.8055 113.7857,104.5195 112.7377,103.2845 C119.1127,102.3795 125.3547,100.8755 131.0017,99.3235 C148.3417,94.5735 164.6817,86.8335 181.9617,81.8735 C198.0517,77.2435 215.5117,74.7135 231.6717,80.4635 C239.3417,83.1935 246.0917,87.9735 253.5517,91.1935 C257.4117,92.8535 262.0417,94.4835 266.5517,94.7235 C263.6417,101.6935 259.9617,108.2035 254.9317,113.6235 C252.6317,113.1335 250.3517,112.4435 248.1317,111.7235 Z M285.6527,57.1315 C284.1087,58.4145 277.7367,62.5545 275.6697,65.0225 C275.1357,64.8195 274.6047,64.6115 274.0767,64.3975 C273.1677,63.2815 271.8287,62.7915 270.4637,62.8215 C260.9347,58.3895 252.4517,52.1265 244.8817,44.2735 C239.5017,38.7035 233.9917,32.8735 226.8017,29.6435 C218.3317,25.8235 210.0017,27.5835 201.1017,28.1635 C191.6317,28.7935 182.2817,26.1035 172.8217,27.3935 C165.9017,28.3435 159.4217,31.2735 153.8217,35.4035 C142.3917,43.8335 134.5117,55.6735 124.8517,65.8835 C113.8917,77.4635 100.4117,84.8635 85.4217,88.6435 C85.2417,88.5235 85.0517,88.4035 84.8617,88.2935 C73.8117,78.2935 63.8317,67.0035 55.0017,54.9735 C46.3817,43.2235 23.6517,-9.6665 18.1617,-14.3065 C15.8817,-16.2365 13.3817,-17.0665 10.9917,-16.9965 C6.6617,-16.8965 2.6617,-13.8865 0.8717,-9.1465 C-2.1683,-1.0865 -0.6483,9.3335 -0.4083,17.7635 C-0.1083,28.0835 0.5717,38.3935 1.6517,48.6635 C2.7217,58.8135 4.1417,68.9335 5.9117,78.9835 C6.8017,84.0635 7.7917,89.1335 8.8817,94.1835 C9.2217,95.7735 9.6517,97.1935 10.1717,98.5135 C10.7017,101.0035 11.2717,103.4835 11.8817,105.9435 C15.8617,122.0535 22.1417,138.1835 34.1317,150.0735 C46.6117,162.4635 63.5717,170.6935 79.3217,178.0535 C94.3217,185.0635 110.0417,191.2935 126.1717,196.1735 C140.1817,202.5235 155.1817,207.5435 170.2417,210.1835 C186.8217,213.0935 204.2517,213.2735 220.2617,207.5135 C228.1317,204.6835 235.5717,200.7335 242.3217,195.8135 C251.8917,190.8435 260.5017,184.0135 267.5517,174.9735 C280.178808,158.772201 286.205845,139.111428 288.843079,118.838022 C289.518075,113.64907 292.055805,93.7618006 292.255358,90.6655083 C292.899805,80.6661617 293.544253,70.6671223 294.1887,60.6675 C294.4927,55.9485 288.7007,54.6015 285.6527,57.1315 Z" id="🖍-Ink" fill={data.beardColor}></path>
        </>
    )
}