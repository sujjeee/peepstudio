"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
export default function Shaved1() {
    const { data } = usePeep()
    return (
        <>

            <path d="M346.4621,91.6774 C272.5601,53.8014 162.4431,57.8744 110.4451,129.5084 C102.1691,143.1044 93.7681,157.9944 89.6921,173.1444 C84.580016,192.704181 75.536005,221.723412 73.4392737,249.856629 C72.2212776,266.199281 77.76048,282.044829 76.2575,296.0806 C75.0692665,307.17707 63.7071486,303.803823 64.1686265,314.448639 C65.0701727,335.244418 65.7282139,365.508322 76.2575,381.876182 C86.1535,396.020182 104.6351,395.1524 115.4991,408.4934 C125.7381,421.0564 134.5881,434.9944 147.5301,445.0504 C174.6191,495.5984 251.9261,507.0744 304.0421,502.3574 C428.2141,482.6294 426.7501,297.0434 424.9671,199.4224 C425.5271,149.4534 388.8691,112.4644 346.4621,91.6774 Z" id="🎨-Background" fill={data.skinColor}></path>
            <path d="M159.4765,36.5216 C204.5875,11.4116 258.4475,0.8716 309.7175,6.4616 C335.3875,9.2716 360.9875,15.6416 383.5075,28.6416 C404.0475,40.4816 420.8565,57.9016 431.9175,78.8706 C442.4475,98.8516 447.7675,121.7616 448.3565,144.2816 C448.6575,155.6616 447.5375,167.0516 445.3475,178.2216 C444.2575,183.8016 442.6065,189.9816 443.9275,195.6616 C445.2075,201.1616 450.3775,204.2316 454.2475,207.8916 C471.5875,224.3016 480.1175,249.2016 476.8075,272.7716 C473.9575,293.1016 461.6375,314.3306 443.5975,325.1516 C446.3275,328.2716 448.4365,332.0316 449.8775,335.7116 C453.4075,344.7716 453.1575,354.4716 449.3075,363.3616 C445.3775,372.4216 437.5375,383.4216 428.6275,388.1516 C424.2175,390.4816 419.0375,391.2906 414.2975,389.7816 C411.3775,421.7016 402.5675,452.1716 379.7175,476.7016 C361.3375,496.4416 336.2875,510.1516 309.4975,513.9116 C294.9365,515.9416 280.0075,515.3516 265.5775,512.5806 C258.7875,511.2816 252.1065,509.3706 245.6575,506.8816 C238.4875,504.1116 231.2575,501.3616 226.0475,495.5406 C220.6065,489.4716 225.9175,480.3306 233.8965,482.0716 C241.4275,483.7116 248.0275,487.9716 255.3275,490.4716 C262.1065,492.7816 269.1775,494.5716 276.2875,495.5016 C290.5175,497.3816 305.1275,495.8616 318.8675,491.8306 C341.0975,485.3016 361.7265,470.9416 375.2175,452.0516 C390.7375,430.3306 397.0875,404.2516 399.3965,377.9916 C402.0475,347.7616 401.0075,317.2716 401.2675,286.9616 C401.4075,270.9916 401.2675,255.0216 401.3775,239.0616 C401.4875,223.8516 401.0775,208.6716 402.0375,193.5016 C401.3565,193.3706 400.6575,193.0806 399.9675,192.5716 C392.7775,187.3516 387.1375,179.9316 380.2675,174.2116 C373.3275,168.4316 365.7975,163.3616 357.9575,158.9016 C328.6275,142.2016 294.7075,135.0316 261.1275,135.5806 C242.6575,135.8816 224.5375,138.3016 206.4875,142.1516 L206.4875,142.1516 L150.5275,157.1016 C139.0375,149.1116 126.0375,143.4916 113.3675,137.6016 C112.0475,142.8116 108.2775,147.8116 105.9475,152.4316 C102.8565,158.5516 100.0075,164.8016 97.4875,171.1816 C92.4075,184.0216 88.3375,197.3306 85.2675,210.8016 C82.4129545,223.347055 80.7402273,236.066063 79.1373723,248.808362 L78.6575,252.6316 C77.7975,259.5016 76.8475,266.4616 76.4675,273.3716 C76.2575,277.1016 76.3375,280.8516 76.2775,284.5806 C76.2265,287.1316 75.3875,292.5116 77.5975,294.9116 C77.7775,295.1016 77.9675,295.2716 78.1865,295.4216 C90.2775,291.7616 104.1775,295.7716 109.7075,308.1616 C110.0575,308.9416 109.1975,309.6316 108.5275,309.0716 C97.2575,299.6316 77.7175,305.0016 71.5475,317.8216 C68.6675,323.7906 68.2375,331.0216 69.7175,337.4216 C71.4675,344.9516 76.1465,351.2216 79.0675,358.2906 C80.7075,362.2616 81.4975,366.2016 82.1275,370.4216 C82.5175,373.0316 82.6975,376.7216 84.5975,378.7416 C86.6175,380.8916 90.5475,381.1716 93.2575,381.7816 C97.0275,382.6316 100.6675,383.6616 104.1065,385.4616 C117.5375,392.4816 124.4075,408.8816 133.9475,419.9816 C139.4365,426.3706 145.4075,432.3706 151.7775,437.8916 C157.8775,443.1816 167.6465,447.5216 168.4765,456.2616 C168.7575,459.1516 166.1775,462.0016 163.5575,462.7216 C157.0375,464.5216 152.3675,460.0516 147.6065,456.2906 C143.1975,452.8116 138.9475,449.1316 134.8965,445.2416 C126.8775,437.5516 119.6575,429.0616 113.1675,420.0616 C108.4765,413.5516 104.5575,405.1416 97.8275,400.4316 C90.9575,395.6316 81.6865,396.8706 74.9575,391.3016 C66.8275,384.5716 68.4675,375.4216 66.0975,366.2906 C63.8075,357.5116 57.7875,350.2416 55.9575,341.2216 C52.6975,325.0806 57.5875,305.3116 73.3375,297.3616 C74.2875,296.8816 75.2675,296.4516 76.2575,296.0806 C75.9575,295.8616 75.6775,295.6116 75.4275,295.3306 C73.6465,293.4016 72.9275,290.1516 72.3565,287.6916 C70.5575,280.0116 69.5575,272.0316 68.4975,264.2216 C66.3175,248.3416 67.4675,232.2016 70.0175,216.4316 C72.4075,201.5916 76.1575,187.0616 81.2775,172.9416 C79.4975,171.7116 78.0875,169.8916 77.3075,167.5806 C75.6175,162.6716 77.1375,157.6616 78.1065,152.7216 C78.3965,151.2116 78.7175,149.7016 79.0475,148.1916 C78.2875,99.3706 119.2575,58.9016 159.4765,36.5216 Z M81.3972,330.981 C88.2272,330.871 94.0282,332.172 99.9672,335.831 C105.6572,339.352 110.9472,344.432 113.5172,350.672 C115.6472,355.831 107.1072,359.222 104.6072,354.422 C102.0372,349.491 100.1272,344.901 96.0072,340.962 C92.0972,337.212 86.4472,333.791 81.2382,332.182 C80.5772,331.972 80.7072,330.991 81.3972,330.981 Z" id="🖍-Ink" fill={data.hairColor}></path>
        </>
    )
}
