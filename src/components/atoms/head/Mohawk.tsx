"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
export default function Mohawk() {
    const { data } = usePeep()
    return (
        <g transform="translate(0, -20)">
            <path fillRule="evenodd" clipRule="evenodd" d="M393.143 255.549C393.657 230.456 391.329 204.74 379.135 182.312C368.547 161.262 352.838 143.015 336.712 126.03C329.984 118.943 320.999 111.802 321.84 101.059C322.723 89.7863 329.504 65.3663 330.55 53.9913C332.608 31.6253 316.6 25.4703 297.886 14.8423C275.316 2.02328 248.345 3.50628 223.881 9.26128C178.26 20.1473 124.049 38.2143 106.809 86.5583C102.665 98.4813 103.699 111.03 102.874 123.398C102.101 134.975 97.466 146.001 93.024 156.579C69.54 208.863 69.752 266.591 74.016 322.71C61.476 325.61 49.351 335.407 46.587 348.407C41.955 371.169 65.827 381.691 79.927 393.994C97.123 408.997 109.641 428.416 125.273 444.9C226.707 556.742 450.531 505.267 404 331.062C397.687 306.307 392.202 281.265 393.143 255.549Z" fill={data.skinColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M223.881 9.26128C248.101 3.56383 274.777 2.05336 297.208 14.462L299.563 15.7873C317.545 25.8542 332.547 32.2963 330.55 53.9913C329.504 65.3663 322.723 89.7863 321.84 101.059C321.812 101.415 321.795 101.768 321.789 102.116L311.377 148.765H254.788C227.541 119.581 203.184 104.989 181.718 104.989C160.533 104.989 138.093 111.511 114.395 124.556L113.447 125.081L102.67 125.702C102.754 124.936 102.823 124.169 102.874 123.398C103.699 111.03 102.665 98.4813 106.809 86.5583C124.049 38.2143 178.26 20.1473 223.881 9.26128Z" fill={data.hairColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M192.498 11.6736C217.69 1.88159 244.919 -2.25842 271.853 1.21158C286.345 3.07858 300.395 6.97658 313.648 13.1626C320.04 16.1466 326.172 19.6846 331.923 23.7716L332.448 24.147C337 27.4299 341.643 31.4902 341.111 36.9396C341.463 38.0806 341.525 39.3346 341.246 40.5856C336.756 60.7356 332.045 80.8216 327.396 100.933C326.418 105.161 325.472 109.396 324.534 113.634C356.173 137.458 385.915 170.028 397.178 208.731C408.203 246.619 403.376 286.523 407.273 325.299C408.197 334.486 409.757 343.599 412.207 352.509C414.839 362.075 419.236 371.117 421.459 380.79C425.933 400.251 419.444 419.356 409.175 435.857C390.138 466.447 361.377 492.26 327.935 505.966C310.823 512.978 291.987 516.79 273.476 516.493C255.322 516.202 234.655 512.473 219.457 501.997C209.184 494.917 217.963 480.972 229.015 485.645L232.018 486.91C239.682 490.118 247.29 493.092 255.507 494.799C264.692 496.705 274.13 497.112 283.481 496.526C301.615 495.39 318.809 489.354 334.461 480.29C348.586 472.109 361.17 461.545 372.407 449.742L373.658 448.421C384.298 437.135 395.008 424.272 400.991 409.913C404.071 402.524 405.739 394.4 404.405 386.43C402.867 377.242 398.776 368.588 396.389 359.609C391.855 342.552 390.326 324.767 389.806 307.17L389.768 305.817C388.805 269.703 391.542 233.13 378.751 198.611C367.168 167.349 343.29 143.434 323.761 117.126C322.802 121.479 321.847 125.834 320.877 130.184C319.719 135.382 318.663 140.613 317.401 145.785L317.306 146.162V146.162C317.686 147.277 317.554 148.545 316.538 149.343C316.426 149.431 316.313 149.507 316.2 149.589C315.165 151.981 313.558 153.816 310.487 154.578C307.546 155.307 305.218 154.064 303.912 151.916L288.561 151.994V151.994C278.814 152.044 268.118 153.164 258.532 151.18C257.058 150.874 257.244 148.78 258.532 148.377C267.59 145.547 278.169 145.615 287.573 144.738L302.394 143.355V143.355C303.049 143.294 303.708 143.215 304.37 143.133L305.363 143.009L310.515 120.084V120.084C312.559 110.988 314.699 101.907 316.567 92.7736C319.934 76.3066 323.626 59.9146 327.316 43.5186C315.73 40.6776 303.903 39.4056 291.915 39.9116L290.533 39.9727C285.889 40.1943 280.909 40.6591 277.026 43.3546C272.209 46.6966 271.861 53.5906 270.794 58.9066C267.866 73.4856 265.77 88.2036 263.933 102.959C263.045 110.094 262.374 117.248 261.587 124.392C261.229 127.634 261.01 130.93 260.527 134.152C260.067 137.219 258.967 140.204 258.346 143.235C259.416 147.861 253.006 152.256 249.428 148.146C245.005 143.065 241.13 137.761 236.188 133.115C231.23 128.453 225.813 124.372 219.974 120.875C208.108 113.767 195.779 109.395 182.527 105.7C182.087 105.578 181.838 105.305 181.717 104.989C168.494 108.741 155.56 113.825 143.559 120.36C115.737 135.511 93.8352 161.67 85.5362 192.392C80.3842 211.469 79.2472 231.62 79.1772 251.303C79.1452 260.44 79.3392 269.682 80.7842 278.723C82.3972 288.81 86.0572 297.828 89.0062 307.506C89.7762 310.033 89.5872 312.289 88.7672 314.173L89.5187 314.286C95.5414 315.227 107.34 317.884 108.415 324.451C108.716 326.292 107.686 327.732 105.793 327.892C102.428 328.177 100.312 325.733 97.6252 324.064C97.1422 323.765 96.6452 323.49 96.1502 323.212C96.0222 323.3 95.8502 323.322 95.6732 323.221C79.7842 314.172 60.3652 328.012 56.8292 344.069C53.5272 359.062 59.1462 376.424 73.6352 382.978C80.9202 386.274 88.6672 388.343 95.3722 392.851C101.015 396.645 106.001 401.283 110.35 406.497C119.305 417.229 126.06 429.466 133.993 440.92C137.475 445.947 141.341 450.697 145.936 454.759C150.969 459.207 157.972 460.962 160.104 467.925C160.935 470.64 159.553 473.901 157.109 475.283C148.165 480.343 138.033 471.542 131.776 465.575C125.353 459.45 120.113 452.033 115.304 444.611C107.25 432.181 100.372 418 88.5572 408.578C81.4652 402.923 72.6302 400.784 64.6482 396.784C55.4892 392.196 48.9842 384.677 45.0972 375.276C37.9422 357.969 39.8262 335.904 53.3822 322.133C57.7842 317.659 63.3552 314.798 69.1882 313.647C63.1652 303.11 60.9282 289.827 59.4172 278.036C57.8982 266.19 57.7392 254.267 58.3642 242.353L58.4901 240.037C59.6866 218.793 62.0978 196.975 69.7872 177.029C76.2602 160.24 86.0832 144.838 99.1352 132.393C100.482 131.109 101.865 129.851 103.27 128.614C102.893 128.325 102.531 128.015 102.208 127.664C98.5512 123.684 99.3342 118.311 99.8212 113.364C100.362 107.865 101.238 102.382 102.554 97.0136C111.734 59.5596 139.966 29.0016 176.295 16.3616C181.541 14.5356 186.97 12.9646 192.498 11.6736ZM70.1011 343.109C75.9811 339.394 84.9551 340.818 91.0851 343.253C98.2961 346.116 105.976 351.458 108.816 358.922C111.446 365.832 101.632 368.281 97.9721 363.493C95.7101 360.534 94.0361 357.684 91.8901 355.105C91.6165 355.371 91.3563 355.65 91.1255 355.954L90.9581 356.187C90.0481 357.525 88.3891 358.916 86.6151 358.677L86.1361 358.614V358.614C84.3454 358.374 82.3744 357.506 81.8799 355.558L81.8311 355.337L81.7651 354.985C81.3561 352.821 82.0021 350.437 84.0771 349.305C84.2161 349.229 84.3581 349.164 84.4981 349.092C79.9281 346.698 75.2151 345.949 70.2461 344.223C69.7521 344.051 69.6411 343.4 70.1011 343.109ZM233.577 20.8496C202.936 20.0806 169.32 29.5026 146.67 50.7286C135.947 60.7796 128.683 72.4716 122.169 85.5036C119.093 91.6566 117.113 98.4736 115.647 105.177C114.845 108.844 114.244 112.543 113.924 116.285C113.862 117.006 113.874 117.767 113.762 118.481C113.667 119.089 113.552 119.247 113.446 119.207C113.498 119.377 113.751 119.724 113.995 120.055C136.937 103.554 165.333 93.9496 193.415 100.207C194.309 100.406 194.309 101.816 193.415 102.015C191.979 102.335 190.547 102.693 189.114 103.044C201.402 103.315 214.029 107.165 224.642 112.89C235.247 118.611 246.401 126.699 254.089 136.537C253.869 135.101 253.695 133.659 253.662 132.2C253.577 128.303 253.667 124.386 253.812 120.492C254.126 112.047 254.701 103.603 255.395 95.1816L255.701 91.5113C256.945 76.7928 258.475 61.6567 261.45 47.2586C263.185 38.8616 267.829 33.7466 274.071 30.7476C262.483 23.2656 246.757 21.1816 233.577 20.8496ZM290.398 15.9506C276.59 11.8126 262.216 9.98958 247.831 10.2386C253.06 11.5596 258.122 13.4796 262.886 16.1306C269.016 19.5426 273.332 24.0626 277.197 29.4486C280.834 28.1826 284.879 27.4836 289.135 27.1816C298.963 26.4846 308.899 27.0086 318.662 28.5566C316.84 27.4346 314.991 26.3576 313.112 25.3346C305.888 21.4056 298.271 18.3096 290.398 15.9506Z" fill="black" />
        </g>

    )
}
