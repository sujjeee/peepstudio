"use client"

import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'

export default function Cap() {
    const { data } = usePeep()
    return (
        <g transform="translate(-20,-5 )">
            <path fillRule="evenodd" clipRule="evenodd" d="M259.801 58.7061C304.573 58.7061 358.291 80.4106 362.858 80.8447L362.981 80.8513C365.384 80.8513 374.773 88.0045 391.149 102.311L373.412 136.905L374.848 138.276C381.716 144.861 387.58 150.863 392.208 155.595C430 194.229 436.792 345.919 427.886 398.818C418.98 451.717 402.484 503.48 325.685 503.48C248.887 503.48 163.447 457.303 150.285 442.922C141.511 433.336 131.655 428.743 120.718 429.144C120.268 428.576 119.822 428.011 119.38 427.447L117.771 427.219C102.634 425.027 91.7876 422.076 85.2329 418.368C72.4297 411.124 58.3575 373.045 58.3575 364.657C58.3575 356.352 37.3447 295.94 36.9245 289.547L36.9181 289.37C36.9181 284.025 9.46702 259.458 9.46702 251.656C9.46702 243.853 3.9338 244.327 9.46702 216.833L11.0746 208.756C16.9628 179.484 28.4876 131.012 72.4297 109.95C120.718 86.8049 214.578 58.7061 259.801 58.7061Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M132.67 298.313C132.67 298.313 112.502 307.864 92.3339 323.456C72.1659 339.047 82.1237 339.562 82.1237 339.562C82.1237 339.562 81.2562 372.975 87.4712 386.229C93.6862 399.483 130.495 401.829 130.495 401.829L136.73 422.706L135.868 432.381C131.07 430.224 126.017 429.243 120.71 429.438C120.26 428.87 119.815 428.305 119.372 427.741L117.763 427.513C102.626 425.321 91.7798 422.37 85.2251 418.662C72.4219 411.418 58.3497 373.339 58.3497 364.951C58.3497 360.286 51.7193 339.179 45.833 320.44C41.2404 305.82 37.1009 292.643 36.9167 289.841L36.9103 289.664C36.9103 287.243 31.2809 280.881 25.1207 273.919C17.6775 265.507 9.45921 256.219 9.45921 251.95C9.45921 249.673 8.98806 248.101 8.45821 246.333C7.17228 242.042 5.5406 236.598 9.45921 217.127L11.0668 209.05C16.955 179.778 28.4798 131.306 72.4219 110.244C120.71 87.0989 214.57 59 259.794 59C295.061 59 335.879 72.4676 353.852 78.3977C358.696 79.9958 361.88 81.0465 362.85 81.1387L362.973 81.1453C365.376 81.1453 374.765 88.2985 391.141 102.605L386.981 110.72C332.899 112.299 243.964 117.124 205.143 131.857C147.419 153.764 132.67 298.313 132.67 298.313Z" fill="#9DDADB" />
            <path fillRule="evenodd" clipRule="evenodd" d="M64.9759 108.863C89.0586 83.3012 225.78 43.7632 294.952 52.1443L297.027 52.413C302.547 53.113 307.987 54.173 313.356 55.613C330.71 59.666 348.636 65.803 362.975 76.054C374.946 84.44 412.709 98.135 401.579 120.073C405.706 127.892 407.246 137.552 404.457 145.253C404.106 147.913 403.286 150.363 402.237 152.903C411.054 165.914 418.035 180.628 423.686 194.623C433.561 229.844 439.706 266.498 440.606 302.433C443.6 370.705 436.114 452.256 376.652 496.404C340.731 524.379 284.463 525.319 244.096 490.633C241.805 487.922 231.032 480.606 234.627 479.323C235.697 480.453 236.797 481.553 237.917 482.633C237.866 482.513 237.856 482.393 237.877 482.263L236.823 481.309C234.84 479.474 232.27 476.812 235.197 477.333C235.326 477.483 235.467 477.613 235.606 477.763C236.226 478.135 236.694 478.457 237.059 478.741L237.246 478.892L237.188 478.831C235.502 477.033 234.491 475.2 237.012 476.371L237.346 476.533C238.467 477.713 239.606 478.843 240.766 479.943C240.747 479.813 240.766 479.683 240.837 479.543L239.755 478.498C238.7 477.464 238.861 477.459 239.377 476.623C237.133 473.478 241.322 475.346 241.616 476.573C244.237 475.953 246.538 480.873 248.226 481.473C322.225 538.363 429.612 487.884 427.873 329.359L427.846 326.257C427.338 275.568 423.072 223.469 402.106 177.583C400.067 173.163 397.786 168.863 395.277 164.703C393.547 161.583 391.697 158.543 389.707 155.583C384.136 155.133 378.636 154.113 373.217 152.533C371.356 152.063 369.516 151.543 367.677 150.933C340.797 152.399 314.516 153.994 287.561 155.506L279.141 156.03C256.307 157.498 232.692 159.85 214.266 173.973C196.186 186.831 196.104 212.186 180.627 226.303C158.557 241.282 158.396 254.789 154.146 276.863C154.461 293.503 165.999 317.68 144.826 324.683C148.398 329.776 143.419 327.329 143.027 325.543C142.987 325.553 142.947 325.563 142.917 325.563C146.1 331.48 141.421 327.754 141.007 325.853C140.757 325.783 140.507 325.603 140.257 325.353C143.464 330.537 138.28 326.907 138.587 325.963C132.39 316.438 119.636 314.959 110.646 317.483C110.536 317.823 110.137 317.853 109.887 317.673C71.6599 325.957 81.5229 405.093 120.697 397.443C122.374 397.101 122.334 397.906 122.667 397.983C121.762 395.607 124.313 396.574 124.286 397.073L124.441 397.065C124.564 397.055 124.514 397.041 124.606 397.073C123.731 392.214 128.655 399.254 128.266 399.543C128.417 399.453 128.587 399.403 128.737 399.383L128.567 398.922C127.75 396.745 127.82 397.65 127.826 396.403C127.212 394.862 127.167 395.536 127.311 394.532C129.469 392.86 130.106 397.932 130.826 398.303C129.592 396.583 130.573 395.178 131.737 396.112C140.56 414.67 151.957 432.107 166.686 445.843C168.297 447.113 169.927 448.363 171.616 449.543C177.881 455 187.491 458.509 193.356 463.343C193.356 463.423 193.317 463.523 193.257 463.623L193.391 463.744V463.744L193.527 463.873L195.567 464.853C196.167 465.363 196.707 465.933 197.186 466.563C197.697 467.153 198.146 467.803 198.527 468.493C198.717 469.333 198.297 469.683 197.497 469.323C197.146 469.203 196.797 469.063 196.447 468.933C196.467 468.963 196.476 468.983 196.497 469.003C196.612 469.177 197.388 470.977 196.493 470.684L196.387 470.643C195.896 470.463 195.407 470.263 194.927 470.073C195.497 470.783 196.016 471.553 196.476 472.203C196.967 472.713 197.266 473.313 197.387 473.993C197.366 474.373 197.157 474.533 196.777 474.483C196.197 474.293 195.627 474.093 195.056 473.883L195.218 474.193C195.622 474.986 196.195 476.317 195.177 475.873C194.306 475.603 193.467 475.293 192.627 474.953C192.556 475.093 192.417 475.143 192.137 475.013C189.467 474.063 186.887 472.903 184.417 471.533C182.247 469.953 180.056 468.403 177.877 466.833C175.826 465.603 173.846 464.233 171.957 462.693C159.311 454.525 148.24 444.149 139.457 432.593C124.768 445.314 95.3989 433.161 77.2319 423.203C61.1629 414.303 54.8469 397.847 53.2139 380.105C49.8189 356.219 30.2989 348.043 31.6569 295.633C31.6269 295.643 31.5959 295.643 31.5559 295.643C30.8459 295.433 30.1569 295.153 29.5069 294.793C28.8369 294.473 28.2069 294.093 27.6159 293.633L26.8859 292.623V292.623C26.5069 292.413 26.1669 292.193 25.9069 291.973L25.772 292.147C25.3452 292.662 25.6321 291.887 25.6569 291.733L24.3887 290.008C21.3818 285.903 18.083 281.297 15.3959 277.613L15.3112 277.763C15.2504 277.876 15.2183 277.957 15.2469 277.993C8.85186 268.805 2.83786 257.707 1.16686 246.963C-0.806141 238.687 -0.0351405 230.159 1.68586 222.493C9.06486 195.648 33.2369 134.9 64.9759 108.863ZM238.524 480.116L238.123 479.759L238.475 480.201C238.66 480.429 238.849 480.634 239.157 480.843C239.137 480.773 239.137 480.703 239.146 480.623C238.942 480.467 238.733 480.297 238.524 480.116ZM294.646 65.633C247.738 61.6 201.601 71.934 156.839 84.443L153.751 85.3305C128.299 92.593 101.386 99.1282 79.8769 114.673C49.8259 137.69 34.3079 174.306 20.7659 208.113C8.94086 233.231 14.9859 261.554 32.8059 279.093C34.6599 261.664 37.8209 244.745 42.7609 227.962C43.7919 225.34 43.0119 224.481 45.2339 224.139C48.5899 269.367 32.0609 302.783 64.7709 356.385C78.9639 381.677 62.5339 400.183 102.614 413.492L103.698 413.906C112.049 417.057 121.167 419.544 129.346 417.783L128.613 416.591C127.866 415.364 127.639 414.768 128.726 414.243C128.697 414.183 128.657 414.123 128.616 414.053C127.737 412.393 126.887 410.713 126.076 409.013C125.747 409.123 125.417 409.203 125.076 409.293C125.297 409.703 125.326 410.113 124.707 410.253C122.503 411.009 120.24 411.312 117.924 411.17L117.427 411.133C114.81 410.973 113.161 410.496 111.686 410.053C111.197 409.973 110.707 409.893 110.226 409.793C105.481 408.741 100.458 406.065 97.2069 403.413C60.1489 382.365 63.9789 310.716 109.657 303.943C110.594 258.831 132.051 182.723 167.661 139.736C199.849 100.195 287.723 83.057 348.859 89.1C349.75 89.395 350.641 89.693 351.532 89.994C360.964 90.832 369.953 95.034 379.392 96.986C372.615 91.907 364.927 88.524 357.008 85.649C341.23 75.998 323.142 70.776 305.667 67.093C302.047 66.203 298.377 65.713 294.646 65.633ZM107.566 340.183C110.022 338.849 109.741 340.137 110.306 339.763C127.972 338.322 147.021 353.789 156.896 366.683C156.116 367.493 154.006 365.093 153.636 364.713C153.586 364.763 153.526 364.803 153.466 364.823L153.741 365.211C157.744 370.955 149.809 364.196 149.066 362.803C148.936 362.873 148.806 362.913 148.656 362.883C149.285 363.5 151.206 365.109 151.536 366.253L152.045 366.677C156.848 370.789 156.449 373.883 150.997 368.043C151.126 368.313 151.176 368.563 151.086 368.763L151.274 368.888C153.955 370.762 156.16 375.984 150.556 370.623C151.139 374.539 145.003 366.97 144.806 367.023C134.188 358.688 118.555 350.582 105.236 349.493L104.778 349.44C102.334 349.126 101.178 348.401 102.036 346.803C99.0262 346.087 99.7312 344.605 101.156 344.653C99.0332 343.257 100.944 341.922 102.176 342.443C101.329 340.098 104.726 341.66 105.036 341.333C106.799 338.614 107.274 340.882 107.566 340.183ZM70.5363 194.833C79.0213 191.725 104.084 201.029 102.079 213.351C100.885 216.18 96.9513 217.801 94.1863 216.204L90.5774 213.78C84.2971 209.574 78.633 205.886 71.8903 202.218C68.2203 200.397 66.6403 196.531 70.5363 194.833ZM118.811 176.522L115.534 174.389C97.8503 162.816 72.8511 145.279 117.186 163.423C122.239 165.59 128.953 166.872 131.71 171.684C136.041 180.553 124.643 181.149 118.811 176.522ZM120.798 124.593C119.379 119.208 137.036 125.527 142.176 127.193L142.959 127.488C147.959 129.351 153.691 131.08 156.681 135.395C160.185 141.357 153.093 142.592 148.7 139.899C139.693 134.013 129.818 129.572 120.798 124.593ZM165.699 99.5078C155.76 88.6544 182.359 99.0516 186.343 101.938L186.457 102.023C189.43 104.116 188.827 108.624 186.034 109.948C178.087 110.099 172.239 103.475 165.699 99.5078ZM210.925 87.6166C195.125 76.2616 215.938 81.6626 223.167 86.1126C228.094 90.4576 223.019 97.7926 210.925 87.6166Z" fill={data.hairColor} />
        </g>
    )
}