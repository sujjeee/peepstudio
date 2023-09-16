"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'

export default function Afro() {
    const { data } = usePeep()
    return (
        <>
            <path d="M195.395558,82.6720788 C346.965479,75.2183452 415.36224,181.93629 419.786376,229.602142 C422.857417,262.689688 403.308238,300.826871 403.308238,330.393336 C403.308238,345.485177 421.786376,377.885575 413.184129,399.881894 C394.037459,448.840758 353.497414,503.176 301.837107,503.176 C250.1768,503.176 182.944289,517.462673 125.861889,435.730873 C120.505934,428.062102 52.7621738,384.476442 46.1808144,343.060094 C29.7871913,239.895391 87.2439991,87.9906333 195.395558,82.6720788 Z" id="🎨-Background" fill={data.color}></path>
            <path d="M188.2499,16.2572 C193.6699,10.0572 202.8199,7.5772 210.9499,8.0572 C222.7599,8.7572 233.0309,16.0472 244.7809,16.5872 C257.0999,17.1572 268.9899,12.8872 281.3399,14.8672 C288.9099,16.0872 296.4099,19.5972 301.2599,25.5172 C318.0599,20.7072 336.2999,27.0772 346.9999,40.9872 C360.1999,38.9372 374.5599,47.6782 378.5999,60.3972 C395.3699,60.9372 411.1999,74.4072 413.0699,91.2872 C419.7709,93.0572 425.5899,97.6782 429.1599,103.7872 C433.3099,110.8672 433.9999,118.9872 433.2499,126.9672 C441.1399,130.9972 445.1499,139.6572 446.1999,148.8172 C453.4099,154.1972 456.5399,163.8672 455.0699,172.9972 C460.5899,176.1072 463.4409,183.3472 463.4099,189.8072 C463.3799,195.8372 461.7809,201.1782 464.0309,206.9972 C466.035244,212.180013 466.754813,216.499427 465.652301,221.928296 L465.5399,222.4572 C465.3449,223.3422 465.1809,224.1912 465.0339,225.0282 C466.5269,226.3382 467.7899,227.9802 468.7379,229.8902 C472.1959,236.8702 471.6809,244.8312 469.0439,251.9102 C470.1989,256.4182 470.0519,261.1802 468.3449,265.5132 C471.5419,270.1182 473.2229,275.7662 472.7289,281.6262 C472.1749,288.1872 469.1789,294.0622 464.6359,298.4062 C465.8459,307.3682 462.2019,317.0512 455.6129,323.3612 C456.5479,328.7262 455.7409,334.3492 452.8059,339.4352 C450.7139,343.0602 447.8979,345.7602 444.6489,347.6422 C444.7559,350.6352 444.3509,353.6962 443.3549,356.7632 C441.9719,361.0192 439.6299,364.9402 436.5479,368.0982 C438.3869,379.8562 431.3469,392.9032 418.9559,396.2022 C417.9149,396.4792 416.9219,396.6062 415.9709,396.6262 C414.7399,407.9352 412.0519,419.0872 407.8899,429.6782 C397.3099,456.6472 378.0699,480.2272 352.9799,494.9372 C340.5699,502.2072 326.6299,507.1872 312.3999,509.2672 C302.1599,510.7672 292.3099,510.3972 282.0309,509.3772 C269.1299,508.0872 256.1699,506.1572 243.6299,502.8372 L241.612928,502.30101 C236.414452,500.908369 230.933477,499.301431 226.4299,496.4972 C221.3899,493.3572 218.7709,488.5172 217.6109,482.8172 C216.963671,479.6447 218.973186,476.232508 222.44624,476.166814 L222.6699,476.1672 C223.4299,476.1832 224.1835,476.1544 224.946572,476.1064 L225.5209,476.0672 L225.5499,476.0672 C225.5899,476.0572 225.6109,476.0572 225.6499,476.0572 C225.9899,476.0072 226.3199,475.9072 226.6499,475.8572 C230.4707,475.214 233.812268,475.851824 237.400088,477.045188 L237.8499,477.1972 C243.8899,479.2772 249.8799,481.2072 256.1199,482.6372 C262.5699,484.1072 269.0999,485.2772 275.6499,486.1972 L276.2999,486.2772 L276.4999,486.3072 L276.5999,486.3172 L276.5999,486.3172 C276.6199,486.3172 276.6399,486.3172 276.6599,486.3272 L278.5899,486.5672 L278.5899,486.5672 C280.1109,486.7472 281.6299,486.9072 283.1499,487.0672 C285.9499,487.3472 288.7499,487.5672 291.5499,487.7272 C339.8799,490.4472 380.4699,452.3972 392.7199,406.7772 C397.1599,390.2672 397.4499,373.7972 396.1399,357.3172 C395.7199,356.1172 395.4699,354.7872 395.4799,353.3272 C395.4799,352.5672 395.5209,351.8172 395.5699,351.0572 C393.9409,335.1172 391.1109,319.1672 389.3399,303.1672 C387.2709,284.4772 386.1199,265.6782 386.5399,246.8672 C386.7499,237.5772 387.7399,228.3772 389.0399,219.1782 L389.5099,215.8732 L389.5099,215.8732 C383.6349,214.7262 378.1729,211.9402 373.8239,207.9072 C364.3859,213.3572 352.1709,213.8402 342.8549,208.0852 C332.4149,214.6322 317.8289,215.2262 307.3159,208.8252 C300.9619,213.3612 292.9559,215.3182 285.0969,213.5962 C281.5619,212.8222 278.0469,211.1472 275.0369,208.8282 C272.8879,209.2072 270.7109,209.3542 268.5459,209.2412 L268.0989,209.4912 L268.0989,209.4912 C263.1089,212.1212 257.5809,213.8522 251.8919,213.6592 C247.6799,213.5172 243.3409,212.6862 239.3239,211.1142 C235.0329,213.7042 230.3369,215.4722 225.3129,216.1062 C217.9759,217.0312 210.0579,215.4082 203.9559,211.2462 C192.8049,217.5982 179.0889,218.5762 167.0529,214.3082 C164.5879,218.4832 161.1769,222.0832 157.1829,224.8582 C157.8979,227.4202 158.1259,230.1522 157.8799,232.7792 C157.4759,237.1032 156.3919,240.9802 154.6189,244.4622 C156.4879,248.3502 157.0499,253.1242 156.0039,257.9162 C154.5129,264.7502 150.5369,270.6952 145.3889,275.3252 C144.9349,286.2312 138.9539,296.4572 129.2199,302.1382 C128.7269,302.4252 128.2369,302.6592 127.7479,302.8702 C127.3179,303.4582 126.8039,303.9752 126.2169,304.4112 C120.0269,310.1302 110.2309,309.6752 102.4719,306.4442 C102.3219,306.4512 102.1729,306.4642 102.0209,306.4672 C99.2499,306.5372 97.3609,305.4572 96.2399,303.8672 C95.1109,303.9282 93.9899,304.0472 92.8609,304.2572 C88.7399,305.0272 84.2199,306.5072 80.4899,308.4282 C70.8099,313.4072 66.3299,322.2072 64.9899,332.7872 C63.5309,344.3272 66.8499,356.0872 75.7809,363.8972 C80.1199,367.6972 85.6699,370.0772 91.3099,371.0772 C97.5399,372.1872 104.1999,369.4572 108.7999,374.8072 C109.7199,375.8672 110.3499,377.3472 109.8499,378.7772 C108.2899,383.2372 105.7199,384.9472 101.6999,385.5672 C107.5099,392.4572 113.4699,399.1172 120.0699,405.3072 C127.2099,412.0172 134.5899,418.5172 141.0309,425.9172 C147.8399,433.7472 153.9899,442.0472 158.2599,451.5472 C160.6999,457.0072 162.6599,462.6372 164.7709,468.2272 L165.147884,469.201099 C167.501532,475.140342 170.632314,480.865476 167.0099,487.0672 C165.5699,489.5072 162.3099,491.8672 159.3099,491.4772 C150.8609,490.3972 148.0309,484.6872 145.4299,477.2472 C143.4699,471.6272 141.9699,465.8472 139.8609,460.2772 C139.4659,459.2462 139.0359,458.2252 138.5849,457.2102 C133.7129,458.5682 128.3559,457.4902 124.0079,454.7122 C119.3619,456.7712 114.2149,457.7982 109.2439,457.7112 C102.5879,457.5942 96.5069,455.7452 91.2789,452.4102 C90.8629,452.3002 90.4449,452.1942 90.0299,452.0752 C82.0769,455.1212 72.7629,454.5772 65.5619,449.6402 C60.8989,446.4432 57.7109,442.1762 55.8989,437.4252 C49.8739,437.3102 43.9139,435.1742 39.5969,430.9002 C35.6329,426.9762 33.3159,421.9132 32.6279,416.6522 C27.4419,415.6252 22.5799,413.1182 18.7669,408.8952 C15.5829,405.3682 13.6479,400.8762 12.9939,396.2122 C6.6779,394.4102 0.9819,390.2862 -2.1291,384.5362 C-5.0241,379.1832 -5.4421,373.3762 -4.0261,368.0942 L-4.3931,367.5662 L-4.3931,367.5662 C-10.8991,364.1612 -15.8641,358.5872 -16.3741,350.6252 C-16.5181,348.3582 -16.2741,346.0902 -15.6591,343.9442 C-15.8811,341.5452 -15.7391,339.1472 -15.1101,336.8272 C-23.8601,328.3172 -27.0301,314.6472 -22.2801,303.3472 C-30.8301,294.1472 -33.0901,279.5972 -26.8201,268.6782 C-31.1201,263.4772 -33.3301,256.8472 -32.9601,249.7672 C-32.5001,240.9282 -28.4501,233.2072 -23.6001,226.0572 C-27.2001,222.0772 -29.1201,216.5272 -28.9791,211.1672 C-28.7801,203.3972 -24.6501,196.7072 -19.4791,191.1672 C-23.9901,177.4872 -18.9501,162.6472 -7.8801,153.9872 C-10.1201,150.2972 -10.9501,145.7272 -10.2191,141.0972 C-8.9401,133.0072 -2.8701,127.4972 3.6799,123.1372 C2.3099,118.6782 2.6699,113.8672 4.8499,109.2572 C7.7599,103.1072 13.2499,99.2072 18.9799,95.9072 C20.4599,82.2672 35.6999,70.6172 48.4799,77.6572 C45.3099,67.5072 54.4409,56.5472 64.9409,55.3872 C70.0799,39.8072 87.8099,29.9872 103.7499,33.8572 C111.8999,22.7172 127.0699,18.4282 139.9499,23.2072 C154.1109,12.3572 171.6799,10.7472 188.2499,16.2572 Z M87.3799,322.1677 C97.3299,321.6277 104.7899,329.7477 110.0309,337.1777 C114.9499,344.1477 102.3299,351.5077 98.6499,343.8277 C97.3299,341.0877 95.8299,338.1877 93.8199,335.7877 C93.4824,336.2602 93.184275,336.749575 92.8875562,337.251606 L92.5899,337.7577 C92.3699,338.1277 92.1399,338.5077 91.9499,338.8977 C91.9699,338.9677 91.6699,339.8877 91.6599,339.9277 C90.8399,342.4177 89.0499,344.0177 86.6109,344.8777 C83.4599,345.9777 80.4799,343.6077 79.4699,340.8277 C77.8609,336.3877 81.5999,332.5177 85.4899,330.7577 C81.6699,330.1377 77.9099,331.4377 75.1499,334.3777 C74.7709,334.7877 74.1299,334.4577 74.1109,333.9477 C73.7899,326.9777 81.0799,322.5077 87.3799,322.1677 Z" id="🖍-Ink" fill="#000000"></path>
        </>
    )
}