"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
export default function Shaved2() {
    const { data } = usePeep()
    return (
        <>

            <path d="M388.416675,151.808832 C381.338675,126.312832 382.3511,123.5552 371.8021,99.2022 C336.8221,28.4522 103.0631,52.1412 79.2061,122.7652 C66.2635108,161.079214 69.3041,215.0382 65.9351,248.2612 C64.904144,265.875904 63.8914203,283.491714 62.8423101,301.104932 C62.4799964,307.187714 62.113343,313.270188 61.7401,319.3522 C61.0131,331.1922 60.3061,343.0322 59.6461,354.8762 C55.2511,391.3622 73.5871,395.0732 105.0381,393.9932 C113.3531,414.0542 126.8201,430.8002 143.4551,444.4252 C139.4401,455.3472 154.0001,461.0012 161.8541,465.3682 C204.5871,489.2282 257.0781,503.7832 304.4111,490.3662 C318.318671,486.423963 375.752622,472.770576 393.4121,430.504717 C402.084181,409.749124 419.713053,302.26361 396.465053,205.57561 L388.416675,151.808832 Z" id="🎨-Background" fill={data.skinColor}></path>
            <path d="M239.0013,-14.494 C245.6103,-15.663 253.0013,-15.213 256.7903,-8.723 C257.6103,-7.324 258.1303,-5.913 258.3803,-4.523 C276.4403,-8.583 295.1903,-9.023 313.6403,-6.363 C319.1403,-5.574 321.0703,1.756 318.6503,5.947 C318.4003,6.377 318.1503,6.796 317.8803,7.207 C323.6603,7.676 329.4303,8.676 335.1503,10.217 C339.2203,11.317 343.0203,16.587 341.2113,20.907 C341.0503,21.287 340.8803,21.667 340.7113,22.046 C349.7003,23.557 358.2903,27.087 365.8003,32.787 C366.7003,33.457 367.5303,34.327 368.2203,35.317 C385.0103,33.426 402.3003,36.897 417.2903,44.997 C421.4903,47.266 423.5203,53.807 420.6703,57.887 C419.7803,59.157 418.8503,60.367 417.8503,61.537 C424.3703,63.947 430.1403,67.846 434.0303,74.197 C438.2603,81.087 439.5603,89.957 437.2903,97.537 C442.0303,102.367 444.5103,109.766 442.8203,117.186 C441.2803,123.957 437.1303,128.256 431.8103,130.837 C432.8903,134.137 432.0203,137.887 429.5703,140.436 C425.8103,144.346 421.3103,147.346 416.4103,149.317 C416.4003,150.587 416.0803,151.897 415.4403,153.117 C411.0203,161.596 401.4903,167.227 391.8003,168.077 C395.0603,181.766 397.7403,195.627 400.3403,209.407 C404.9613,233.917 408.5403,258.667 410.7203,283.516 L410.984914,286.589063 C414.53615,328.637328 415.361729,372.68769 406.8103,414.167 C401.3603,440.577 384.8403,462.837 362.8003,477.917 C340.3903,493.256 313.0103,500.887 286.0703,502.096 C272.3303,502.707 258.4613,501.546 245.0013,498.727 C238.6103,497.387 232.4403,495.487 226.3703,493.067 C219.8403,490.457 214.4613,486.607 208.9403,482.277 C206.0703,480.027 207.7113,474.717 211.1103,474.046 C213.5403,473.557 215.9403,473.027 218.3603,472.587 C220.5803,472.176 223.0013,474.397 222.5403,476.447 L227.22254,477.652568 C228.78318,478.055096 230.34286,478.461112 231.89902,478.879064 L234.2303,479.516 C240.8603,481.367 247.6403,482.926 254.4403,484.037 C268.2803,486.287 282.6803,486.337 296.5903,484.587 C319.9803,481.657 343.8703,473.317 362.0603,457.947 C370.9803,450.407 378.4103,441.477 383.8003,431.107 C390.6503,417.936 392.7203,403.266 394.4403,388.697 C399.4103,346.567 397.8803,304.377 394.0203,262.237 C392.1003,241.277 389.4803,220.357 386.7003,199.487 C385.2703,188.787 383.7303,178.067 382.4613,167.327 C379.6303,166.567 376.9303,165.307 374.5103,163.477 C372.8703,162.237 371.9103,160.796 371.4903,159.327 C369.04655,158.866042 366.704743,157.525253 365.016723,155.257988 L364.8003,154.957 C360.3703,148.546 352.7113,144.877 345.6203,142.207 C341.3203,140.587 336.9403,139.176 332.5803,137.737 C328.0403,136.227 323.2403,133.997 318.4703,133.417 C313.0603,132.777 307.6103,134.407 302.1503,133.827 C297.1903,133.287 292.8203,131.506 289.2513,127.947 C288.0013,126.707 286.9203,125.277 286.0603,123.737 C269.4103,127.296 251.9203,122.807 234.6203,123.887 C223.2403,124.607 213.2003,131.647 201.7003,131.457 C198.5603,131.407 195.5203,130.307 193.3103,128.377 C182.4613,130.447 171.4303,134.426 161.2303,137.846 C151.1503,141.227 141.4503,145.777 131.4903,149.467 C131.4803,149.477 131.4803,149.477 131.4803,149.487 C130.1803,153.697 126.3003,155.516 122.1703,154.777 C108.6603,152.367 97.2803,143.846 84.1303,140.727 C80.5103,153.917 76.6203,166.936 73.9613,180.387 C71.2703,193.957 69.3803,207.707 68.1303,221.487 C66.8703,235.317 66.2703,249.287 66.2403,263.167 C66.2303,270.247 66.4103,277.346 66.6503,284.426 C66.8447444,290.357528 67.9749528,297.857169 65.832088,303.56153 L65.6403,304.046 L65.6303,304.046 C65.3703,304.877 64.2003,305.377 63.5403,304.607 C59.5103,299.926 58.5503,292.477 57.4303,286.596 C56.0703,279.457 55.2003,272.247 54.5013,265.016 C53.1003,250.506 52.7903,236.057 53.5303,221.487 C54.9803,192.807 59.5803,162.516 69.4003,135.407 C66.3803,135.686 65.0303,131.237 64.8303,128.727 C64.4476913,123.682652 65.2378614,118.329798 66.0942106,113.270722 L66.989513,108.033435 C67.8383556,103.089917 68.7369667,98.2753333 70.4203,93.467 C74.4613,81.926 80.2703,71.087 87.5103,61.237 C102.2803,41.147 122.7513,25.936 146.0603,17.167 C147.5203,16.617 148.9003,16.627 150.1203,17.046 C171.3303,5.617 194.1303,-3.183 217.2903,-9.443 C224.4503,-11.373 231.7003,-13.193 239.0013,-14.494 Z M62.8606,307.9365 C72.4906,301.8975 92.3606,300.3175 97.7306,313.1865 C97.9506,313.7065 97.3306,314.1665 96.8706,314.0465 L95.5565528,313.714567 C90.5088271,312.463795 86.1469158,311.745132 80.9706,313.8175 C76.4206,315.6375 72.0006,318.4865 68.9906,322.4065 C61.8753619,331.676976 61.1038376,344.269428 61.7673931,355.514457 L61.8006,356.0575 C62.4206,365.9265 64.9506,377.9465 74.6006,382.8265 C79.4906,385.2965 84.7806,385.1165 90.0906,385.0765 C96.1406,385.0365 102.3206,385.6965 108.1006,387.5575 C111.3306,388.5965 112.8506,392.8765 110.1706,395.3875 C109.2806,396.2175 108.3506,396.9965 107.3706,397.6965 C110.3006,400.8175 113.1806,403.9775 115.9706,407.3075 C120.7006,412.9565 125.7306,418.4165 130.9806,423.5865 C136.0606,428.5765 141.4406,433.4065 147.2406,437.5465 C153.3406,441.8875 160.6406,444.9365 165.9206,450.2565 C169.3606,453.7175 168.7706,458.5465 165.9206,462.0465 C158.8454,470.74506 146.802776,461.600522 140.037971,456.457019 L139.2206,455.8365 C132.1906,450.5165 125.5106,444.7765 119.8206,438.0165 C114.0206,431.1165 109.0006,423.7765 105.2906,415.5465 C103.1106,410.7065 101.7206,406.1375 100.9706,401.3575 C88.8106,406.6375 73.4806,404.9565 62.5806,397.5265 C48.1106,387.6665 44.0506,369.5675 43.9999519,353.0465 L44.0014227,352.06706 C44.108496,336.0086 48.3272,317.0505 62.8606,307.9365 Z M90.2943881,331.211644 L90.7403,331.2169 C96.0956333,331.3329 100.871611,333.261722 105.420519,335.919411 L105.8903,336.1969 C110.3103,338.8269 116.6503,340.9359 118.9903,345.8569 C120.3903,348.8269 120.2903,352.2269 117.8503,354.6859 C113.4303,359.1469 106.7603,358.4069 101.9803,354.9259 C98.4103,352.3169 96.0603,348.4069 92.5603,345.7659 C85.9803,340.7869 75.6003,341.0669 68.7513,345.3769 C68.3303,345.6469 67.9213,345.1369 68.1103,344.7369 C72.3165879,336.129324 80.652823,331.178372 90.2943881,331.211644 L90.2943881,331.211644 Z" id="🖍-Ink" fill={data.hairColor}></path>
        </>
    )
}
