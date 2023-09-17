"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'

export default function ShirtandCoat() {
    const { data } = usePeep()
    return (
        <>

            <path fill-rule="evenodd" clip-rule="evenodd" d="M386.476 65.6497L374.242 95.8956L380.983 191.766L385.999 192.548C438.973 200.759 474.971 204.907 493.991 204.992L494.579 204.993C513.733 204.993 536.685 200.715 563.434 192.158L564.652 191.766L567.74 119.981H560.458L547.285 89.0979L547.297 89.0878C547.442 89.3351 547.593 89.5752 547.75 89.8076C553.242 97.9306 556.425 91.3704 569.328 94.2435C584.776 97.6834 591.634 113.296 605.234 124.964C611.549 130.382 624.802 132.936 631.145 136.66L637.807 140.575C658.682 152.888 682.676 167.845 695.274 187.329C710.042 210.171 720.222 231.848 729.622 257.258C749.884 312.027 763.948 367.916 773.997 425.392C784.183 483.645 790.304 542.621 794.979 601.551C797.144 628.86 798.981 656.191 800.505 683.543L800.88 690.381C801.681 705.263 800.985 719.825 787.454 728.989C777.759 735.553 764.893 736.553 753.519 737.227L752.9 737.264C668.806 742.196 584.71 747.091 500.616 751.997L374.475 759.372C353.486 760.602 332.497 761.822 311.508 763.036L260.276 765.995C236.129 767.369 211.953 768.558 187.775 768.418C157.354 768.24 127.063 765.994 96.9237 761.939L94.2647 761.577C75.3027 758.959 47.8087 752.335 44.4027 729.594C43.9137 726.329 46.7877 724.289 49.2007 724.758C48.4067 721.057 47.9137 717.349 47.4427 714.13C45.4217 700.37 44.1527 686.522 43.5257 672.63C42.2677 644.832 43.3277 616.905 46.1067 589.229C50.7041 543.44 57.1488 497.732 63.808 452.183L65.2907 442.064C72.3737 393.806 80.8067 345.629 94.0027 298.622C106.193 255.198 125.209 210.024 151.376 182.565C177.543 155.107 214.851 131.251 253.186 116.638C256.506 115.372 322.466 100.931 326.91 103.034L327.708 102.408C340.859 92.0264 359.619 73.7896 378.934 79.5328L378.978 79.4604C379.434 78.6227 381.218 73.0198 383.682 65.6504L386.476 65.6497Z" fill="#8FA7DF" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M400.426 25.3939C416.402 5.1399 433.242 -1.29889 458.126 0.210106C475.001 -0.392894 491.831 3.98711 506.12 13.6631C519.212 20.5041 530.822 29.9211 539.109 42.0431C546.196 52.4071 540.811 78.0169 547.285 89.098C547.221 90.3037 547.189 91.4033 547.189 92.3961C547.189 101.985 553.863 112.685 567.209 124.498L567.739 124.965V194.644C545.301 201.543 517.52 204.993 484.398 204.993C451.769 204.993 417.832 199.515 382.585 188.558L380.982 188.056L374.241 112.327L380.982 91.3704L380.981 73.8183L383.586 65.9674C388.198 52.1639 395.259 31.9452 400.426 25.3939Z" fill={data.color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M380.982 188.056C380.982 188.056 440.227 205.308 480.672 205.308C521.117 205.308 564.652 188.056 564.652 188.056L557.59 755.968L443.916 757.357L380.982 188.056Z" fill="#9FD8E5" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M185.956 436.025C185.518 435.205 186.534 434.468 187.208 435.059C202.521 448.497 210.538 470.078 212.219 490.026C214 511.179 211.475 533.08 210.51 554.224C209.436 577.776 208.471 601.337 207.16 624.878C205.829 648.762 204.395 672.638 203.166 696.527L200.401 750.265C200.107 755.992 200.744 763.035 198.546 768.38C195.14 776.666 185.022 775.383 182.896 768.458L182.83 768.23L182.636 768.38C180.76 762.139 182.164 754.727 182.482 748.274L185.379 689.561C187.425 648.061 189.251 606.56 191.449 565.068L192.197 551.238C193.224 532.62 194.012 514.048 194.645 495.436L194.851 489.23C195.452 470.542 194.975 452.899 185.956 436.025ZM557.165 91.5109C565.696 90.7009 572.138 93.5299 579.883 96.5099C583.257 97.8069 586.452 99.3059 589.689 100.858C593.742 102.801 596.348 106.236 598.843 109.869L600.177 111.826C610.568 127.05 617.558 144.614 625.445 161.189C634.671 180.578 643.989 199.925 653.018 219.406L657.474 229.004C659.702 233.803 661.923 238.605 664.11 243.422L667.891 251.806C671.688 260.309 675.093 269.304 669.68 278.076C664.647 286.234 655.724 292.546 648.659 298.852C642.765 304.114 636.87 309.375 630.973 314.635C643.162 326.841 651.345 342.21 656.155 358.692C662.989 355.845 671.33 355.299 678.396 354.067C688.287 352.343 689.499 367.317 680.164 367.134C673.27 366.999 665.182 367.703 658.11 366.251C659.339 371.667 660.231 377.165 660.798 382.678C663.77 411.573 657.276 440.636 650.504 468.594L649.946 470.889C642.591 501.149 635.617 531.488 629.378 561.999C623.125 592.575 617.5 623.28 612.507 654.087C607.425 685.444 603.829 716.974 599.964 748.497C599.379 753.268 596.377 757.357 591.105 757.357C586.713 757.357 581.693 753.258 582.245 748.497C586.233 714.169 591.889 680.021 597.508 645.928C607.187 587.215 619.368 529.013 633.381 471.193L635.829 461.124C642.134 435.009 647.854 408.101 644.691 381.164C642.115 359.229 632.944 335.842 614.818 322.219L614.266 321.809C610.032 318.704 608.403 312.766 612.573 308.677C615.227 306.075 617.884 303.475 620.542 300.878L636.498 285.3L639.715 282.154C642.398 279.535 645.093 276.932 647.868 274.409C649.548 272.883 654.103 269.973 654.436 267.463C654.653 265.824 652.713 262.947 651.927 261.438L648.325 254.169C646.28 250.024 644.298 245.849 642.301 241.68C638.163 233.044 633.965 224.434 629.917 215.755L605.596 163.643C598.735 148.941 592.623 133.42 583.653 119.828L581.885 117.179C580.409 114.948 579.105 112.8 578.171 110.072C577.274 107.447 576.148 104.565 574.49 102.325C570.605 97.0679 563.179 94.0859 556.966 92.9849C556.068 92.8249 556.394 91.5849 557.165 91.5109ZM370.112 77.8236C370.652 77.8236 370.734 78.5946 370.236 78.7446C362.74 80.9986 355.577 84.6356 349.733 89.8856C346.937 92.3976 344.122 95.2486 342.396 98.6306C341.735 99.9248 341.37 101.292 341.102 102.709L341.016 103.184C340.571 105.744 339.933 107.17 338.632 109.22L338.409 109.568C330.982 121.037 325.777 133.776 321.018 146.531L310.654 174.342L300.297 202.157C296.96 211.119 293.621 220.082 290.283 229.044C288.439 233.992 286.543 238.919 284.648 243.847C283.828 245.982 282.946 248.101 282.196 250.262C282.093 250.557 281.765 252.336 281.519 252.768L281.603 252.915C283.692 256.429 289.263 259.365 292.421 261.918L303.295 270.709C311.048 276.978 319 283.071 326.52 289.62C331.244 293.732 328.305 301.096 323.037 302.813C314.209 305.689 305.56 309.131 296.864 312.385C293.351 313.699 289.694 314.843 286.222 316.292L284.108 317.205C283.283 317.576 283.68 317.573 283.713 319.096C283.746 320.694 284.199 322.359 284.459 323.929C287.388 341.639 290.493 359.319 293.77 376.968C305.362 439.379 319.211 501.334 335.006 562.813C342.984 593.86 351.54 624.754 359.693 655.755C367.826 686.673 378.527 717.148 388.745 747.429C391.628 755.968 378.087 759.645 375.275 751.142C363.499 715.528 352.726 679.603 341.601 643.787C321.835 580.147 306.259 515.125 292.483 449.946C285.655 417.642 279.41 385.214 273.754 352.684C272.683 346.525 271.633 340.363 270.604 334.197L269.105 325.128C268.077 318.664 267.492 311.93 272.517 306.815C277.423 301.821 285.846 300.052 292.302 297.71L292.771 297.538C296.879 296.005 301.017 294.528 305.139 293.005C299.067 288.225 293.07 283.339 287.013 278.562C282.127 274.708 277.164 270.932 272.348 266.99C268.377 263.738 265.139 259.563 264.725 254.275C264.303 248.87 266.619 243.855 268.487 238.898L268.666 238.419C270.5 233.47 272.339 228.524 274.225 223.594L285.895 193.075C293.311 173.682 300.414 154.132 308.214 134.89C311.3 127.275 314.663 119.78 318.637 112.582C320.553 109.111 322.608 105.714 324.841 102.438C327.343 98.7636 329.614 96.9726 333.491 94.9456C339.69 91.7046 344.555 86.2706 350.78 82.9296C356.89 79.6496 363.176 77.8996 370.112 77.8236ZM390.236 43.2251C390.473 42.8181 391.101 42.9993 391.109 43.4621C391.271 53.1001 388.981 62.9491 387.572 72.4791C386.157 82.0431 385.703 92.1381 383.656 101.6C383.614 102.041 383.529 102.475 383.408 102.902L383.31 103.226C382.446 105.877 380.199 108.124 377.442 108.826C378.309 113.63 379.126 118.442 379.813 123.28C380.993 131.596 382.07 139.924 383.129 148.255L384.397 158.252C385.594 167.674 386.758 177.1 387.909 186.527C390.836 187.751 393.823 188.761 396.882 189.636C403.927 191.652 411.143 192.472 418.413 193.185C433.219 194.637 448.138 195.31 462.995 196.135L466.178 196.314C482.882 197.271 499.677 197.441 516.339 195.727C524.601 194.877 532.798 193.451 540.855 191.43C544.949 190.403 548.928 188.869 553.014 187.865C554.369 187.532 555.58 186.764 556.938 185.944C557.541 185.182 558.387 184.605 559.489 184.382L559.788 184.33L560.083 184.287L560.185 184.241L560.177 184.273C561.013 184.16 561.807 184.161 562.556 184.263C562.854 176.913 563.177 169.563 563.582 162.215C564.669 142.479 567.67 121.891 563.664 102.327C563.53 101.669 564.425 101.437 564.658 102.053C572.519 122.764 571.636 145.411 572.032 167.209C572.419 188.526 572.185 209.858 572.079 231.18C573.606 231.83 574.968 232.711 576.047 233.947C578.202 236.417 578.822 240.711 576.047 243.095C574.817 244.152 573.456 244.886 572.012 245.395C571.935 263.918 571.804 282.443 571.618 300.967C575.141 303.688 575.47 310.149 571.485 312.834C570.822 372.822 569.732 432.812 568.828 492.791L566.934 618.629C566.682 635.395 566.264 652.16 566.114 668.924L566.233 668.971L566.653 669.165C567.358 669.497 568.409 670.033 568.626 670.581C568.683 670.725 568.698 670.823 568.691 670.897C569.847 671.059 570.992 671.605 571.983 672.545C574.429 674.869 573.932 678.372 571.983 680.739L571.462 681.372C570.247 682.847 567.94 683.415 566.056 683.115C566.075 693.578 566.142 704.043 566.109 714.506C566.099 717.702 566.05 720.898 565.995 724.094L565.863 731.757C565.776 736.129 565.388 741.687 560.909 743.651C555.856 745.868 551.325 744.052 549.279 738.92C548.725 737.53 548.844 736.235 549.046 734.861C548.983 732.796 548.66 730.403 548.7 728.487L548.867 720.498C548.893 719.266 548.943 718.035 548.978 716.803L548.832 716.818C530.878 717.69 512.798 717.264 494.814 717.254L486.815 717.265C480.142 717.271 473.454 717.235 466.79 716.98L464.292 716.874C459.303 716.64 454.056 716.565 448.884 716.119C449.543 721.428 450.159 726.741 450.708 732.059C451.228 737.102 446.023 741.387 441.38 741.387C435.866 741.387 432.712 737.053 432.052 732.059C428.936 708.503 427.661 684.727 424.684 661.156C422.018 640.044 419.706 618.884 417.356 597.732L416.57 590.681C407.97 513.705 399.62 436.7 391.633 359.657L387.915 323.642C384.159 287.342 380.381 251.04 377.195 214.687C375.373 193.903 373.694 173.115 372.114 152.311C370.955 137.027 370.227 121.828 369.753 106.574C367.884 104.651 366.947 101.843 367.775 98.9431C368.259 97.2511 368.822 95.5681 369.416 93.8881C369.379 92.2371 369.34 90.5871 369.308 88.9341C369.278 87.3701 370.866 86.5651 372.137 86.8241C374.447 81.2311 376.991 75.6861 379.114 70.1471C382.55 61.1811 385.382 51.5201 390.236 43.2251ZM198.341 140.126C234.26 117.616 277.016 101.418 319.839 103.162C320.813 103.202 321.087 104.686 320.076 104.911C297.234 110.011 274.141 116.223 252.516 125.264C230.828 134.332 210.206 146.542 191.839 161.215C157.951 188.287 131.611 223.5 114.267 263.193C104.108 286.445 96.9872 310.993 90.7692 335.55C84.1892 361.539 78.7662 387.808 74.2572 414.235C65.3512 466.436 60.1662 519.212 57.4072 572.079C54.6002 625.857 55.7572 679.673 53.7552 733.459C53.4092 742.778 40.0892 742.596 39.4122 733.459C34.8762 672.308 37.3892 610.181 41.5842 549.073C45.3562 494.139 51.9432 439.32 62.5502 385.27L63.4742 380.586C73.39 330.579 85.3503 279.361 109.322 234.074C129.788 195.411 161.384 163.288 198.341 140.126ZM697.13 379.124C697.318 378.588 698.026 378.595 698.214 379.124C702.31 390.586 702.457 403.519 703.545 415.602L703.63 416.53C704.674 427.55 705.46 438.584 706.191 449.627L706.463 453.769C709.396 498.819 713.062 543.819 718.586 588.632C724.091 633.276 731.534 677.609 739.583 721.854C740.481 726.78 738.299 731.798 733.133 733.217C728.578 734.468 722.732 731.663 721.77 726.766C716.773 701.37 712.732 675.94 709.127 650.324C702.781 605.217 698.044 559.902 695 514.452C693.471 491.625 692.531 468.807 692.156 445.931C691.984 435.317 692.259 424.678 692.825 414.075L692.961 411.629C693.584 400.792 693.521 389.459 697.13 379.124ZM309.004 666.066C309.484 665.806 310.078 666.34 309.774 666.836C302.819 678.139 293.41 687.885 284.316 697.491C274.809 707.532 265.537 717.876 255.838 727.72C248.83 734.831 237.557 723.36 244.953 716.835C255.352 707.663 266.221 698.947 276.805 689.979L281.433 686.056C290.111 678.725 299.047 671.459 309.004 666.066ZM639.345 660.405C638.826 659.416 640.012 658.614 640.818 659.269C646.428 663.831 651.456 669.273 656.873 674.087C662.238 678.856 667.803 683.304 673.52 687.642C679.261 691.998 685.127 696.18 691.151 700.137C696.148 703.419 701.298 706.048 706.531 708.773C708.954 709.085 711.198 710.274 712.994 712.529C715.834 716.095 716.136 722.819 712.197 725.915L711.49 726.47C706.893 730.083 701.436 730.523 696.911 726.47C691.858 721.946 687.082 716.967 682.23 712.185L680.772 710.757C675.558 705.689 670.471 700.457 665.675 694.99L661.333 690.051C653.279 680.866 644.895 670.967 639.345 660.405ZM613.503 130.871C612.57 130.253 613.145 128.589 614.297 128.986L616.41 129.717C625.237 132.784 634.324 136.186 642.339 140.909C650.952 145.984 658.905 152.03 666.503 158.516C682.23 171.941 695.61 188.45 706.981 205.657C729.797 240.186 743.907 279.73 755.299 319.297C767.446 361.485 776.798 404.581 784.434 447.799C792.193 491.72 798.179 536.037 802.113 580.466C804.051 602.352 805.352 624.251 806.006 646.213C806.343 657.511 806.332 668.801 806.238 680.103C806.214 683.01 806.233 685.915 806.266 688.82L806.377 697.536C806.436 703.047 807.096 708.838 805.786 714.222C803.678 722.889 789.348 721.272 789.819 712.414C789.387 709.467 789.37 706.421 789.482 703.369C789.414 702.975 789.34 702.575 789.258 702.166C789.023 700.995 789.223 699.911 789.682 698.979C789.757 697.515 789.824 696.06 789.848 694.63C789.942 688.811 789.936 683.015 789.775 677.198C789.436 664.932 788.948 652.666 788.455 640.406C787.47 615.906 786.1 591.395 784.114 566.955C777.204 481.885 762.613 396.33 738.104 314.487C726.721 276.481 711.028 239.172 688.523 206.33C678.533 191.75 667.262 178.283 654.767 165.784C642.193 153.207 628.337 140.695 613.503 130.871ZM443.915 679.271L445.614 691.556C446.462 697.699 447.303 703.845 448.101 709.994C453.522 709.252 459.068 708.941 464.292 708.478C473.437 707.668 482.645 707.276 491.817 706.897C510.784 706.115 529.846 704.758 548.832 704.853C549.027 704.854 549.211 704.867 549.395 704.882L550.337 680.643L536.997 680.622C525.695 680.604 514.395 680.508 503.093 680.411C492.914 680.324 482.732 680.31 472.555 680.098L468.193 679.994C460.475 679.786 451.953 680.215 443.915 679.271ZM551.456 644.088C550.912 644.152 550.358 644.206 549.769 644.231C547.127 644.342 544.464 644.265 541.82 644.287C536.19 644.336 530.561 644.374 524.93 644.373C513.67 644.372 502.411 644.44 491.153 644.576C479.563 644.716 467.981 644.917 456.39 644.94C450.774 644.95 445.176 644.801 439.562 644.644C440.47 652.622 441.419 660.594 442.467 668.547C451.185 667.369 460.562 667.963 469.082 667.882L470.188 667.867C481.817 667.668 493.456 667.815 505.088 667.829C517.054 667.843 529.019 667.882 540.986 667.98L550.817 668.061L550.836 667.566C551.124 659.748 551.31 651.92 551.456 644.088ZM435.237 605.922C436.327 615.339 437.35 624.772 438.393 634.202C439.086 634.095 439.788 634.003 440.503 633.928C446.127 633.34 451.739 632.836 457.383 632.486C468.634 631.789 479.884 631.421 491.153 631.119C502.741 630.808 514.331 630.57 525.923 630.406C531.555 630.327 537.182 630.335 542.814 630.374C545.456 630.392 548.125 630.309 550.762 630.486C551.076 630.507 551.377 630.54 551.675 630.574L551.873 616.416C551.907 614.057 551.943 611.698 551.981 609.339C543.277 609.876 534.428 609.671 525.73 609.673L523.725 609.678C512.796 609.728 501.863 609.578 490.936 609.351C479.663 609.116 468.413 608.748 457.16 608.026C452.601 607.735 448.075 607.346 443.541 606.846L441.273 606.587C439.3 606.354 437.268 606.166 435.237 605.922ZM552.879 565.968C531.916 567.632 511.065 568.327 490.046 568.534L486.892 568.561C468.318 568.702 449.591 569.468 430.973 568.976C432.086 578.627 433.196 588.278 434.315 597.927C436.981 597.803 439.66 597.802 442.266 597.708C447.567 597.517 452.85 597.469 458.154 597.457C469.081 597.432 480.008 597.527 490.936 597.505C502.198 597.481 513.458 597.291 524.718 597.079C533.847 596.908 543.073 596.221 552.227 596.246L552.879 565.968ZM553.766 524.794C551.337 525.601 548.469 525.653 545.325 525.797L537.21 526.201C533.449 526.385 529.687 526.559 525.923 526.696C513.382 527.155 500.841 527.584 488.298 527.983C475.445 528.391 462.53 528.628 449.675 528.223C443.378 528.024 437.134 527.694 430.856 527.169C429.304 527.039 427.722 526.954 426.137 526.842C427.598 539.629 429.065 552.414 430.537 565.199C449.066 562.925 467.738 561.509 486.244 559.157L502.978 557.02C519.703 554.886 536.415 552.792 553.201 551.026L553.766 524.794ZM554.659 483.165C551.095 484.045 547.033 484.001 543.61 484.217L542.976 484.261C536.491 484.753 529.989 484.999 523.489 485.159C510.749 485.473 498.001 485.63 485.257 485.708L477.594 485.756C467.378 485.816 457.168 485.841 446.948 485.603C440.393 485.451 433.853 485.13 427.303 484.802C425.341 484.703 423.335 484.638 421.323 484.537C422.692 496.643 424.075 508.746 425.455 520.85C427.607 520.508 429.769 520.248 431.83 519.9C437.109 519.008 442.378 518.296 447.695 517.659C459.211 516.279 470.787 515.286 482.357 514.448C494.235 513.587 506.123 512.859 518.003 512.026L526.417 511.433C529.222 511.238 532.026 511.05 534.832 510.878C539.624 510.584 545.194 510.916 549.947 509.873C551.234 509.337 552.663 509.214 554.094 509.52L554.659 483.165ZM555.738 434.438C554.505 436.004 552.663 436.825 550.467 437.109C539.028 438.593 527.295 438.831 515.759 439.531L513.725 439.659C501.814 440.444 489.896 441.06 477.976 441.693C465.731 442.343 453.488 442.873 441.233 443.3C436.031 443.481 430.802 443.502 425.591 443.436L423.359 443.402C421.219 443.366 418.978 443.371 416.732 443.298C417.975 454.618 419.23 465.937 420.503 477.253C422.793 477.004 425.082 476.814 427.303 476.579C433.849 475.887 440.387 475.203 446.948 474.686C459.38 473.706 471.821 473.117 484.276 472.501C497.019 471.87 509.769 471.45 522.514 470.855C528.693 470.566 534.87 470.207 541.031 469.639C545.349 469.242 550.478 467.772 554.983 468.312C555.229 457.02 555.485 445.729 555.738 434.438ZM556.743 390.788C556.548 391.09 556.32 391.382 556.043 391.654C551.007 396.63 544.8 396.246 538.126 396.768L537.717 396.801C531.176 397.351 524.632 397.874 518.084 398.346C504.995 399.291 491.88 399.952 478.772 400.541C465.357 401.144 451.856 401.559 438.428 401.285C429.829 401.109 420.823 401.14 412.052 400.302C413.399 412.769 414.754 425.235 416.119 437.7C418.585 437.235 421.067 436.879 423.418 436.509C429.343 435.577 435.274 434.64 441.233 433.954C453.141 432.583 465.052 431.301 476.983 430.144C487.187 429.155 497.387 428.151 507.597 427.247L513.725 426.717C525.908 425.692 538.245 424.002 550.467 423.752C552.481 423.711 554.759 424.807 555.913 426.537C556.183 414.62 556.463 402.704 556.743 390.788ZM557.589 355.451C554.478 355.829 551.126 355.614 548.255 355.708C540.996 355.945 533.736 356.165 526.476 356.379L482.915 357.665C468.084 358.102 453.201 358.43 438.364 358.22C431.838 358.128 425.282 358.118 418.758 357.763L416.584 357.631C413.899 357.452 410.604 357.427 407.386 357.1L411.185 392.287C419.914 391.026 428.909 390.554 437.563 389.815L439.412 389.652C452.176 388.489 465.001 387.72 477.788 386.854C490.905 385.966 504.003 384.888 517.102 383.785C523.649 383.235 530.195 382.686 536.737 382.084L537.545 382.005C543.725 381.359 549.536 379.987 555.009 383.63C555.81 384.162 556.437 384.874 556.866 385.671C557.105 375.598 557.339 365.524 557.589 355.451ZM558.604 314.386C532.075 315.454 505.542 316.264 478.993 316.62C464.049 316.82 449.124 316.679 434.182 316.367C427.703 316.231 421.17 315.921 414.696 315.425L412.271 315.23C409.193 314.971 405.959 314.783 402.739 314.473C404.07 326.571 405.39 338.671 406.7 350.773C409.868 350.184 413.178 349.913 415.954 349.558L416.584 349.474C423.481 348.525 430.443 347.972 437.374 347.362C450.87 346.173 464.433 345.407 477.965 344.756C491.822 344.089 505.686 343.524 519.545 342.908L533.406 342.288C535.715 342.185 538.025 342.085 540.335 341.987C543.636 341.848 546.936 341.715 550.236 341.578C551.864 341.511 553.556 341.29 555.186 341.374L555.65 341.312C555.864 341.285 556.053 341.263 556.226 341.244C556.67 340.907 557.147 340.627 557.653 340.414L557.959 340.295L558.604 314.386ZM398.389 275.47C399.621 286.361 400.839 297.255 402.041 308.15C405.825 307.718 409.654 307.479 413.267 307.154C420.552 306.501 427.871 305.929 435.178 305.593L449.782 304.915C459.517 304.465 469.251 304.029 478.993 303.674C505.655 302.701 532.316 301.586 558.962 300.225C559.15 292.836 559.344 285.447 559.542 278.058C558.263 279.428 556.415 280.329 553.987 280.323C526.013 280.248 498.017 280.41 470.046 279.95C456.045 279.719 442.06 279.38 428.075 278.662C421.232 278.311 414.351 277.595 407.56 276.654C404.664 276.253 401.495 275.967 398.389 275.47ZM393.912 236.661C395.227 247.817 396.517 258.977 397.786 270.139C401.26 269.519 404.849 269.189 408.09 268.748C415.054 267.801 422.061 267.047 429.075 266.651C442.723 265.879 456.379 265.49 470.046 265.2C498.015 264.606 526.012 264.61 553.987 264.389C556.615 264.368 558.566 265.408 559.847 266.96C560.041 259.993 560.246 253.026 560.457 246.058C557.755 245.773 555.076 245.369 552.597 245.196C544.978 244.664 537.356 244.178 529.731 243.741C513.819 242.828 497.892 242.049 481.969 241.356C466.042 240.663 450.11 239.986 434.178 239.396L427.211 239.142C416.131 238.73 404.864 238.209 393.912 236.661ZM388.902 194.644C390.271 205.943 391.619 217.244 392.964 228.547L393.373 232.045C406.698 229.455 420.741 228.696 434.178 228.125C450.113 227.447 466.02 227.098 481.969 227.147C497.902 227.195 513.811 227.572 529.731 228.23C537.686 228.558 545.64 228.938 553.59 229.37C555.776 229.488 558.339 229.425 560.977 229.463C561.034 227.687 561.083 225.911 561.144 224.136C561.386 216.942 561.623 209.748 561.87 202.555C556.493 205.317 549.502 206.431 544.098 207.608L543.481 207.744C534.558 209.748 525.447 211.047 516.339 211.841C498.453 213.401 480.381 212.818 462.512 211.307L459.382 211.039C443.691 209.679 427.423 207.954 412.211 204.071C404.965 202.222 397.474 199.634 390.981 195.883C390.306 195.493 389.609 195.08 388.902 194.644ZM539.99 60.3683C540.145 59.7573 541.06 59.6183 541.361 60.1893C543.474 64.2033 544.26 69.0213 545.727 73.3223C547.306 77.9463 548.779 82.6043 550.521 87.1723C554.16 96.7163 558.453 105.887 563.571 114.728C568.64 123.482 554.447 129.731 550.717 120.147C546.866 110.257 543.701 100.031 541.786 89.5803C540.851 84.4813 540.018 79.3123 539.748 74.1313C539.515 69.6813 538.889 64.7093 539.99 60.3683Z" fill="black" />
        </>
    )
}