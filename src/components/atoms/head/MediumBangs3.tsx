"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
export default function MediumBangs3() {
    const { data } = usePeep()
    return (
        <>

            <path d="M256.576291,38.9775732 C313.356936,38.9775732 384.472557,103.748468 405.286153,131.31104 C422.785231,154.484334 420.309672,273.865208 420.309672,344.682199 C420.309672,359.493187 413.614596,387.524654 411.184129,401.691934 C402.277902,453.60665 363.475367,497.14576 286.676873,497.14576 C224.144484,497.14576 176.022138,477.339081 129.486711,426.680302 C118.870145,415.123036 67.0216738,456.497557 56.4180351,441.59758 C28.7213893,441.59758 5.56239516,182.819749 59.9410538,105.20146 C114.319712,27.5831708 199.795646,38.9775732 256.576291,38.9775732 Z" id="🎨-Background" fill={data.skinColor}></path>
            <path d="M85.9167,57.2049 C118.7267,27.3549 162.4367,12.9949 206.5367,14.0549 C229.3767,14.6049 252.1367,18.9549 273.7067,26.4049 C284.4967,30.1449 294.9467,35.0249 304.9367,40.5449 C308.5367,42.5295154 311.855517,44.8549592 315.050455,47.3245996 L315.8467,47.9449 L315.8567,47.9449 C324.4267,51.0249 332.0767,56.5549 339.0167,63.0249 C352.9267,61.9149 366.9467,63.1649 380.3967,67.4549 C399.1167,73.4349 416.4467,84.3849 428.6167,99.9349 C442.792614,118.038126 447.505367,139.997076 445.823796,162.665466 L445.513305,166.516377 C443.850425,186.541 440.8717,212.2974 424.4367,225.4549 C423.1867,226.4549 421.8067,227.2149 420.3767,227.6749 C430.9667,245.8149 439.6567,265.9549 444.8567,286.2949 C464.7067,363.9849 449.4467,445.0049 425.5767,519.8849 C423.6167,526.0549 414.2867,530.1549 409.5367,524.1249 C401.0567,513.3449 388.7367,505.1249 374.8767,503.5849 C366.3267,502.6349 357.8167,504.3549 349.7367,500.4749 C346.5667,498.9449 343.5067,496.4449 341.3067,493.4049 C327.6667,498.5749 312.9767,501.0149 298.4067,500.4149 C274.4967,499.4349 248.9367,491.1549 232.4867,472.9949 C229.8467,470.0799 229.1777,466.8069 229.7857,463.8569 C231.8487,463.1209 233.9667,462.5729 236.1487,462.2299 C257.0087,474.5239 280.0027,482.7389 304.7147,483.2549 C318.9937,483.5529 332.9217,481.5559 344.4997,472.6399 C347.0047,470.7099 349.3087,468.5729 351.4387,466.2769 C375.6457,450.7049 392.7127,424.2559 400.8267,395.9249 C408.3867,369.5049 407.4567,341.9949 404.8567,314.8949 L403.485019,300.594317 C401.485553,279.605232 399.630552,258.553344 399.1107,237.4749 L399.2677,237.4669 L399.2677,237.4669 C404.3797,237.1369 404.4167,229.1339 399.2677,229.4669 C385.9487,230.3289 372.7307,228.1439 359.4527,229.0959 C359.3417,222.8189 358.8897,216.5699 357.0447,210.5159 C355.9917,207.0569 349.9687,206.3749 349.3307,210.5159 C348.4767,216.0559 348.1647,221.5649 348.0717,227.1299 C328.2007,226.8659 308.3487,225.1939 288.4747,225.8809 C284.8087,221.9709 283.6417,215.0379 281.9267,210.2149 C281.6767,209.5049 281.4267,208.8049 281.1667,208.0949 C279.6597,214.9869 277.5237,221.7279 274.7137,228.3269 L269.839636,228.343416 C242.184786,228.473135 213.9672,229.299733 186.9627,235.0429 C185.0857,233.6019 183.9687,231.0879 183.6667,228.8049 C181.707912,213.949142 178.912246,199.488316 173.957567,185.331239 L173.24874,183.33386 C173.19082,183.16818 173.1297,182.9921 173.0657,182.8069 C169.4147,188.6999 165.0587,194.1929 160.3077,199.3079 C157.5077,202.3229 154.5717,205.2059 151.5587,208.0069 C148.6317,211.2569 145.6067,214.4579 142.6747,217.7179 C142.7897,218.3109 142.8897,218.9129 142.9707,219.5259 C143.8677,226.2909 143.9607,233.1519 143.3037,239.9429 C142.1157,252.2199 138.6497,264.0499 133.0817,274.9939 L132.905538,276.0897 C132.060038,281.218429 130.857033,286.518767 128.0477,290.3809 C131.5537,294.3089 134.2547,299.0009 135.8207,304.2139 C137.2147,308.8549 130.7937,312.8769 127.4637,309.0789 C124.8187,306.0619 121.8797,303.5649 118.6517,301.5729 C118.4477,301.8499 118.0797,301.9859 117.6667,301.7549 C108.6767,296.7649 93.4067,298.2749 84.4267,302.9749 C73.2567,308.8149 68.8967,320.8049 70.1367,332.9549 C71.3267,344.5649 76.4067,358.1349 86.2567,364.0849 C90.7767,366.8149 94.2967,367.0449 99.0967,365.7349 C100.631437,365.318058 102.534152,364.039609 103.350883,363.404531 L104.154664,362.760278 C107.301367,360.273256 110.232033,358.570233 113.9467,358.5049 C117.745867,357.320108 121.564209,358.96368 123.017192,362.947444 L123.1067,363.2049 C123.7867,365.2349 125.0267,367.7849 124.7567,370.8849 C124.4767,374.2049 122.9567,377.2249 120.6867,379.6549 C120.2967,380.0749 119.8767,380.4949 119.4467,380.8849 C158.5467,423.2149 163.5667,489.1749 143.5167,542.0549 C142.6467,544.3749 141.7167,546.6649 140.7467,548.9349 C137.3967,556.7149 124.4967,554.3049 122.8567,546.5949 C122.3667,544.2849 121.8267,541.9849 121.2367,539.7049 C120.152256,535.491567 118.909786,531.31774 117.509293,527.204488 L116.9767,525.6649 C115.7867,522.2649 114.6767,518.8349 113.4767,515.4349 L113.3567,515.04615 C113.3117,514.8924 113.2617,514.7149 113.2067,514.5149 L111.1767,518.9449 L111.1767,518.9449 L105.0067,532.3149 C102.119509,538.554001 92.9460006,535.163207 92.6048851,529.150871 L92.5967,528.9449 C92.5667,527.8349 92.5267,526.7349 92.4567,525.6449 C92.0167,517.4749 90.6067,509.5349 88.3667,501.7649 L87.5585516,502.769199 C75.5245976,517.646954 61.4013154,531.592043 42.0267,535.0249 C37.1667,535.8849 31.6667,530.8049 35.0067,525.8949 C36.3867,523.8649 37.7167,521.7849 38.9767,519.6749 C37.8867,519.1649 36.8567,518.6349 35.9067,518.0949 C28.5567,513.9649 22.4367,508.0849 17.3767,501.4149 C6.6467,487.2749 2.8067,469.4749 1.8667,452.0549 C0.8667,433.6449 2.4867,414.2349 7.5167,396.4749 C9.6967,388.7949 12.6467,381.4249 16.0567,374.2749 C15.8167,373.6349 15.5867,372.9949 15.3567,372.3549 C11.6767,362.0949 8.6567,351.6049 6.1467,340.9949 C1.0867,319.5749 -1.6333,297.4749 -1.9633,275.4649 C-2.5633,236.0349 4.2367,195.9749 18.5667,159.2049 C33.3667,121.2849 55.6267,84.7549 85.9167,57.2049 Z M67.4867,401.9449 C64.7690529,397.665841 57.9691803,401.521935 60.4925916,405.830831 L60.5867,405.9849 C64.8967,412.7749 66.9167,420.4949 69.3967,428.0649 C70.9867,432.9349 78.7167,430.8549 77.1067,425.9349 L76.5737163,424.292219 C74.1059,416.615656 71.8547,408.814233 67.4867,401.9449 Z M91.1567,320.2648 L92.9621857,319.391076 C98.6574547,316.673276 103.647643,314.82197 110.3767,317.1948 C119.3867,320.3648 129.0367,330.4548 122.9467,340.2448 C120.7067,343.8548 116.7267,345.2948 112.6267,344.4448 C105.7147,343.011345 103.931004,336.786975 100.423385,331.677477 L99.8197901,330.812303 C97.6813189,327.720576 94.977003,323.446618 91.4167,322.2348 C90.6067,321.9548 90.2667,320.6948 91.1567,320.2648 Z M96.2352437,112.406042 L96.8167,111.8849 C100.6867,108.4649 95.0067,102.8249 91.1567,106.2249 C73.5367,121.7949 67.4167,146.1649 58.2767,166.9349 C56.2267,171.6049 63.1167,175.6849 65.1867,170.9749 C73.9053207,151.15536 79.6925105,127.446788 96.2352437,112.406042 L96.2352437,112.406042 Z M307.9767,105.5949 C303.372845,103.520201 299.344858,110.220181 303.770982,112.42622 L303.9367,112.5049 C319.4967,119.5349 326.1167,135.4549 332.4567,150.2349 C334.4767,154.9549 341.3667,150.8849 339.3667,146.2049 L338.222617,143.552929 C331.607228,128.321498 323.891425,112.796219 307.9767,105.5949 Z M332.3667,95.9749 C327.4867,94.2849 325.3967,102.0049 330.2367,103.6949 C343.4267,108.2849 352.4767,118.1849 360.1067,129.5049 C362.9667,133.7449 369.8967,129.7449 367.0067,125.4649 C358.1467,112.3249 347.6267,101.2949 332.3667,95.9749 Z" id="🖍-Ink" fill={data.hairColor}></path>
        </>
    )
}
