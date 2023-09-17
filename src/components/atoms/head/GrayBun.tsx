"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
export default function GrayBun() {
    const { data } = usePeep()
    return (
        <>


            <path d="M428.8717,194.624 C409.1667,75.447 258.7067,53.96 160.6627,79.044 C158.8557,56.12 144.4137,35.864 126.3917,22.54 C49.8357,-32.549 -40.7983,60.981 -22.6533,141.589 C-19.3983,166.008 0.1217,193.873 27.4327,189.694 C-6.8963,254.661 -20.3113,385.664 55.3257,426.16 C62.6227,431.353 63.8337,441.9 69.4497,448.663 C78.5667,459.57 117.5177,473.463 138.5897,462.329 C145.2107,468.413 152.8497,474.333 161.7807,476.438 C207.9187,513.37 275.3457,521.703 331.5277,506.464 C366.1417,500.59 402.0237,484.976 419.8317,453.075 C434.9207,428.796 427.9677,400.349 421.0487,374.652 C418.0597,360.516 416.1137,346.267 414.9157,331.898 C417.3697,329.033 417.5067,325.055 418.1187,321.432 C420.7757,308.591 426.5817,296.674 429.4857,283.87 C435.9827,254.804 434.8547,223.75 428.8717,194.624" id="🎨-Background" fill={data.color}></path>
            <path transform="translate(-20,0)" fill-rule="evenodd" clip-rule="evenodd" d="M26.05 65.4737C43.0711 33.0593 76.4389 14.7708 109.81 17.279C143.952 19.8452 170.081 43.3837 176.131 81.3909L176.308 82.5471L176.672 85.0143L176.34 85.127L176.5 85.4072L176.786 85.886C177.125 86.4376 177.541 87.0659 178.109 87.8859L178.869 88.9693L181.424 92.5548L181.605 92.8119L182.149 93.596L183.246 93.2084C236.742 74.528 296.329 74.7203 349.592 94.5832L351.204 95.1911L352.689 95.764L353.527 95.9821C386.183 104.618 412.278 125.386 430.141 155.121L430.68 156.025L431.224 156.953C447.53 184.956 455.891 219.57 455.303 254.322L455.282 255.386L455.274 255.556L455.184 256.604C454.408 264.944 452.309 272.398 447.966 283.765L447.412 285.206L446.552 287.406L443.875 294.187L443.22 295.875L435.54 316.038L436.962 295.801C437.121 293.55 437.209 291.574 437.284 288.557L437.298 288.013L437.47 279.449L437.521 277.536C437.548 276.646 437.577 275.843 437.611 275.059L437.666 273.891L437.769 272.075L437.793 271.697L437.744 271.289C436.109 258.427 430.205 247.444 420.043 237.04L419.513 236.502L418.977 235.966L418.335 235.334C410.847 228.012 403.277 222.413 387.596 212.14L386.919 211.697L377.807 205.768L374.396 203.532C366.877 198.579 362.295 195.371 357.449 191.631L356.406 190.82L355.589 190.178C347.2 183.538 340.647 177.013 335.616 169.974L335.148 169.313L334.157 167.892L334.865 166.376L334.854 166.396L334.853 166.39L334.887 166.228L334.935 165.957L334.984 165.629C335.073 164.978 335.149 164.128 335.203 163.168C335.222 162.821 335.239 162.466 335.252 162.107L335.269 161.564L335.277 161.096L335.09 161.648C325.376 189.686 302.356 213.08 269.908 230.344L268.922 230.865L267.807 231.446C235.826 247.997 196.704 257.499 162.786 257.768L161.693 257.773L160.613 257.776L159.779 257.089C156.667 254.524 150.939 257.717 151.981 262.285C161.621 304.545 163.643 348.285 157.756 390.434L157.547 391.903L157.524 392.042L157.3 393.235C157.105 394.298 156.919 395.386 156.717 396.642L156.399 398.667L155.172 406.872L154.615 410.387L154.374 411.813C152.301 423.776 149.675 431.914 144.902 438.933L144.445 439.594L143.976 440.043L143.517 440.503C142.577 441.471 141.986 442.255 141.697 442.803L141.636 442.925L141.601 443L141.684 443.033C143.201 443.577 146.306 443.467 148.892 442.757L149.213 442.665L149.515 442.571L151.609 441.891L153.07 443.944L153.505 444.549C154.307 445.657 155.143 446.774 156.189 448.138L157.422 449.736L160.27 453.395L157.656 455.201C148.834 461.295 136.502 460.084 123.399 454.37L122.888 454.145L122.703 454.055C116.455 450.748 112.363 446.752 105.623 438.235L104.834 437.232L101.833 433.385L100.691 431.944C99.8931 430.948 99.2111 430.121 98.5275 429.324L98.2994 429.059L97.5008 428.147L97.3254 427.794C94.0271 421.156 89.3115 416.741 81.0575 411.992L79.8929 411.332L79.1474 410.821C58.203 396.299 45.8409 373.392 40.6429 343.683C36.5797 320.461 37.0001 294.332 40.7227 264.988L40.9024 263.588L41.0943 262.13C44.316 237.434 51.6849 214.376 62.855 193.384L63.4361 192.3L63.9604 191.335L61.3393 189.256L60.2637 188.419C59.3734 187.736 58.7243 187.265 58.1354 186.878L57.8191 186.675L57.5254 186.493L57.4454 186.64L55.4463 186.426C47.0033 185.524 38.6788 181.877 31.9024 176.255L31.3436 175.784L30.8015 175.24C17.7031 161.921 11.2711 143.456 11.2656 122.37C11.2608 103.732 16.3739 83.8972 25.12 67.2099L25.553 66.3917L26.05 65.4737Z" fill="#E8E1E1" />
            <path d="M427.2936,255.3193 C426.1556,269.6893 420.0646,282.6193 414.9656,296.0113 C415.5226,288.0873 415.2606,279.8413 415.8156,271.6133 C409.8856,220.0903 339.8186,206.5543 312.6186,167.5953 C313.6486,165.3953 314.0196,145.7243 309.9636,151.2563 C294.2306,220.1013 200.7196,254.6403 136.6976,254.7733 C131.8556,250.7833 122.2526,254.9983 124.0666,262.9523 C133.6406,304.9233 135.7366,348.8283 129.5886,391.4753 C126.6916,406.5343 126.2026,424.6543 117.1676,437.6303 C107.5776,446.7513 119.1066,447.4833 125.4516,445.4243 C127.2206,447.9113 129.0876,450.3263 130.9616,452.7323 C121.8476,459.0283 108.5496,455.5943 99.1166,451.4033 C88.6236,445.8493 82.6256,435.0863 75.0226,426.4593 C70.8716,418.1043 64.5756,413.3023 56.4816,408.7773 C11.4526,378.1733 12.6156,311.0393 19.0796,262.5183 C37.9156,118.1323 198.1716,48.4653 326.7826,98.6253 C396.2396,116.3863 428.7816,188.1983 427.2936,255.3193 M8.3886,173.5763 C-19.0784,146.2223 -13.5494,98.4023 3.7166,66.8683 C38.3146,0.9813 136.5836,3.1223 148.3506,82.9843 C98.2376,100.1513 55.9516,136.9623 30.7756,183.4433 C22.5786,182.5673 14.6546,178.9163 8.3886,173.5763 M428.8716,194.6463 C409.1666,75.4693 258.7076,53.9823 160.6626,79.0673 C158.8566,56.1423 144.4146,35.8863 126.3916,22.5613 C49.8356,-32.5267 -40.7984,61.0033 -22.6534,141.6113 C-19.3984,166.0303 0.1216,193.8953 27.4326,189.7163 C-6.8964,254.6833 -20.3104,385.6863 55.3256,426.1823 C62.6226,431.3763 63.8336,441.9233 69.4496,448.6843 C78.5666,459.5923 117.5176,473.4863 138.5896,462.3513 C143.5996,468.4983 172.0366,487.1923 169.9636,468.8673 C167.8716,463.9303 161.4076,462.6423 157.1036,460.2023 C148.0576,455.2083 140.1986,448.1703 134.0236,439.9033 C153.4186,385.2153 151.9406,324.3223 141.0756,268.0123 C206.0056,264.7463 282.4076,236.2863 311.0466,173.7913 C330.4066,219.2713 390.4446,225.1243 405.6106,275.9733 C406.5256,302.6803 400.7986,328.9913 404.9516,355.7113 C406.1706,381.8833 420.0056,407.8813 412.0066,433.8813 C389.6606,490.5793 309.2176,498.8993 256.0706,496.5293 C243.4466,495.4873 232.9696,488.6653 222.5916,482.1883 C216.3716,479.2363 208.9676,485.4113 212.7786,492.0023 C227.3296,512.3073 257.2586,514.0823 280.2406,513.3503 C339.8836,509.8143 426.0796,492.1933 429.1756,418.5453 C427.2086,389.3503 415.7526,361.4103 414.9166,331.9203 C417.3696,329.0553 417.5066,325.0773 418.1186,321.4543 C420.7756,308.6123 426.5826,296.6963 429.4856,283.8923 C435.9826,254.8263 434.8556,223.7733 428.8716,194.6463" id="🖍-Ink" fill="#000000"></path>
        </>
    )
}