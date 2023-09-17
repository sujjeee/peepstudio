"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'

export default function Sweater() {
    const { data } = usePeep()
    return (
        <>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M335.817 752.115C275.632 750.82 220.845 754.456 162.89 742.701L162.816 740.749C150.385 740.391 154.5 728.774 156.999 720.649C-76.8948 710.243 75.6643 140.153 237.749 101.822C245.689 100.468 254.315 99.7529 263.061 99.6669C274.345 96.2209 285.465 95.6099 297.261 92.4669C298.393 88.3369 298.578 85.9489 303.582 87.1719C321.543 70.0199 353.861 54.2209 364.766 87.6909C379.117 67.7439 387.347 44.4219 393.343 20.8029L394.313 20.9619C396.861 14.6819 401.033 6.73594 406.108 5.42494C414.018 2.80594 428.934 3.40993 437.534 2.34693C456.18 1.05393 477.839 -2.11506 495.712 2.16194C540.375 13.0959 526.788 70.835 563 105.159C579.618 98.28 599.896 95.1509 615.818 103.342C626.071 111.553 620.93 120.81 619.132 129.49C733.489 119.182 763.915 251.818 787.514 339.255C796.982 368.343 806.379 388.063 822.505 410.521C843.453 436.774 855.216 471.154 833.754 498.85C864.394 559.989 831.131 617.453 795.937 663.607C789.045 670.998 777.866 691.563 767.765 692.969C765.024 695.474 760.646 698.557 757.557 700.796L761.282 705.68C761.727 710.19 761.756 715.037 764.84 719.059C767.807 721.95 770.979 724.914 771.067 729.23C766.339 734.717 760.234 731.955 755.747 729.23C754.027 732.61 754.273 737.272 748.762 736.96C612.11 746.332 472.159 752.476 335.817 752.115Z" fill={data.color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M335.817 764.807C275.632 763.512 220.845 767.148 162.89 755.393L162.816 753.441C150.385 753.083 154.5 741.466 156.999 733.341C-76.8948 722.935 75.6643 152.845 237.749 114.514C245.689 113.16 254.315 112.445 263.061 112.359C274.345 108.913 285.465 108.302 297.261 105.159C298.393 101.029 298.578 98.641 303.582 99.864C321.543 82.712 353.861 66.913 364.766 100.383C379.117 80.436 377.866 128.778 383.862 105.159L375.688 99.6669C387.483 153.428 491 118.933 424 116.034C475.5 142.539 449.075 142.539 449.075 116.034C486.212 142.539 477.839 125.213 495.712 129.49C540.375 140.424 437.534 123.543 530.5 129.49C547.118 122.611 599.896 107.843 615.817 116.034C626.07 124.245 620.929 133.502 619.131 142.182C733.489 131.874 763.916 264.51 787.515 351.947C796.983 381.035 806.38 400.755 822.506 423.213C843.454 449.466 855.217 483.846 833.755 511.542C864.395 572.681 831.132 630.145 795.938 676.299C789.046 683.69 777.867 704.255 767.766 705.661C765.025 708.166 760.646 711.249 757.557 713.488L761.283 718.372C761.728 722.882 761.757 727.729 764.841 731.751C767.808 734.642 770.98 737.606 771.068 741.922C766.34 747.409 760.234 741.28 755.747 738.555C754.027 741.935 754.274 749.964 748.763 749.652C612.11 759.024 472.159 765.168 335.817 764.807Z" fill={data.color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M372.734 518.341C354.058 502.666 336.619 489.961 320.417 480.223C304.215 470.486 285.371 468.862 263.887 475.351L247.357 477.296C217.591 488.995 196.691 500.719 184.657 512.467C166.608 530.089 153.872 580.77 159.818 580.77C163.544 580.77 175.53 573.837 195.775 559.971L199.753 557.231L198.259 576.444C192.876 599.43 192.71 610.924 197.759 610.924C202.6 610.924 213.01 604.131 228.987 590.544L231.08 588.754C236.488 603.534 244.829 610.924 256.103 610.924C267.377 610.924 289.807 585.42 323.394 534.414L372.734 518.341ZM649.811 480.052L643.961 479.188L659.005 547.403L696.173 545.541L685.921 503.132L649.811 480.052ZM565.755 97.5262C581.842 94.0201 602.417 96.4477 615.817 103.342C624.285 110.123 622.253 117.617 620.276 124.911C619.859 126.449 619.444 127.978 619.131 129.49C728.768 119.607 761.261 241.113 784.552 328.211C785.555 331.96 786.54 335.646 787.514 339.255C796.982 368.343 806.379 388.063 822.505 410.521C843.453 436.774 855.216 471.154 833.754 498.85C864.394 559.989 831.131 617.453 795.937 663.607C793.93 665.759 791.559 669.029 788.958 672.618C782.625 681.351 774.925 691.972 767.765 692.969C765.366 695.162 761.712 697.797 758.767 699.922C758.347 700.225 757.942 700.517 757.557 700.796L761.282 705.68C761.338 706.242 761.387 706.809 761.436 707.38C761.782 711.385 762.141 715.538 764.84 719.059L765.092 719.304C767.984 722.119 770.982 725.036 771.067 729.23C767.171 733.751 762.34 730.386 758.25 727.536C757.376 726.928 756.536 726.343 755.746 725.863C755.256 726.826 754.926 728.166 754.577 729.583C753.7 733.141 752.703 737.183 748.762 736.96C612.11 746.332 472.159 752.476 335.817 752.115C321.23 751.801 306.96 751.777 292.886 751.753C248.889 751.678 206.799 751.607 162.89 742.701L162.816 740.749C150.873 740.405 154.203 729.668 156.699 721.62C156.801 721.292 156.901 720.968 156.999 720.649C-76.8947 710.243 75.6643 140.153 237.749 101.822C245.689 100.468 254.315 99.753 263.061 99.667C269.126 97.815 275.143 96.7819 281.242 95.7345C286.493 94.8329 291.805 93.9208 297.261 92.467C297.349 92.1468 297.431 91.8371 297.51 91.5388C298.451 87.9884 298.966 86.0438 303.582 87.172C321.543 70.02 353.861 54.221 364.766 87.691C368.556 82.4231 371.919 76.9198 374.927 71.2378L369.403 88.697L370.432 89.5025C404.415 115.939 439.274 127.844 475.007 125.217C510.025 122.644 539.54 119.589 563.554 116.053L565.755 115.725V97.5262Z" fill="#D44AC6" fill-opacity="0.72" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M390.673 20.9996C401.539 35.1476 383.834 78.4086 375.686 93.4146C431.394 116.675 493.561 126.816 553.067 113.607C537.612 98.8226 520.535 51.5796 533.258 34.9736L533.841 37.963C538.155 59.9274 543.431 82.7133 559.274 99.5136C581.708 93.5596 636.25 94.0936 627.318 129.477C765.806 129.802 766.956 297.376 813.129 390.877C835.282 426.588 869.583 463.221 840.863 506.131C846.507 519.665 850.44 534.015 851.903 548.59C856.414 596.15 827.311 636.858 801.072 673.766C791.828 683.906 784.095 700.904 770.658 705.241C769.278 706.427 767.841 707.552 766.368 708.62C769.036 712.506 766.872 718.686 769.997 722.091L771.217 723.273C773.267 725.283 776.083 728.265 776.645 730.933L776.911 733.239C777.025 734.142 777.05 734.093 776.984 733.091L776.946 732.774C776.904 732.34 776.967 732.374 777.133 732.878L777.205 733.105C778.612 737.139 775.646 741.757 771.596 742.83C759.54 749.291 746.723 730.382 750.758 717.729C683.906 746.563 545.048 694.415 477.874 668.565C465.037 663.41 452.869 656.717 439.887 651.984L438.92 651.513C423.938 644.136 409.001 633.437 391.429 637.717C317.5 669.378 248.755 722.093 166.801 732.489C179.621 756.973 141.892 760.253 149.451 732.904C-73.5709 703.971 65.4031 224.656 183.874 132.071C221.59 96.1486 246.964 104.385 292.79 94.0146C293.843 90.1546 297.707 86.9176 301.798 87.4666C318.084 71.9786 351.809 56.8896 365.725 82.0466C374.236 68.7476 380.154 53.9726 384.292 38.7756C385.941 32.7406 386.527 25.8456 390.673 20.9996ZM303.367 739.289C291.476 729.87 309.543 715.018 319.837 721.006C323.016 724.896 312.03 721.015 313.404 729.633C315.406 735.359 309.43 742.98 303.367 739.289ZM546.071 727.596C537.61 711.669 545.038 704.572 557.747 716.974C569.35 725.727 553.785 739.949 546.071 727.596ZM428.224 726.108C416.292 719.698 413.324 690.454 432.692 704.512C449.924 710.639 445.19 732.56 428.224 726.108ZM294.418 102.469C270.561 109.064 243.944 106.222 222.063 119.882C168.536 153.575 137.753 211.659 114.597 268.7L113.897 270.429C66.9091 386.114 29.3011 520.609 68.8401 643.531C88.8101 699.452 137.967 723.43 193.917 704.005C334.336 658.519 451.681 549.171 601.011 530.545C603.116 513.258 598.338 496.22 592.239 480.059C500.628 483.874 412.798 513.533 325.01 537.407C319.898 559.801 294.353 585.883 279.048 603.257C265.221 621.765 231.018 627.338 226.811 598.882L226.138 599.644C214.857 612.295 190.108 634.217 182.51 606.911C180.799 592.589 189.977 580.2 194.491 567.171L194.014 567.523C185.672 573.758 151.149 603.183 148.747 583.589C148.901 565.126 154.746 546.956 165.349 531.833C176.002 517.868 189.091 504.723 203.348 494.4C204.1 490.02 205.468 485.786 206.493 481.454C204.928 465.165 211.351 449.875 213.035 433.925C216.919 418.961 217.766 390.944 228.601 380.417C236.918 389.276 228.678 423.06 228.252 435.984C225.282 451.693 226.567 467.746 220.874 483.022C236.932 474.241 254.334 469.785 271.819 469.034C273.6 434.735 322.156 446.713 344.645 449.374C378.972 437.168 523.096 441.444 546.924 467.102C558.819 465.721 570.192 464.634 582.266 463.805C596.309 454.873 635.048 458.529 641.02 476.094C656.635 480.717 670.201 488.601 683.895 497.607C688.134 427.718 669.592 358.873 674.107 288.88C674.514 284.813 676.395 281.287 676.317 277.152C676.308 276.661 677.023 276.68 677.067 277.152C683.812 297.587 685.095 319.4 688.886 340.592C693.88 377.553 702.654 414.087 705.564 451.282C706.831 482.539 701.753 515.97 714.221 545.602C715.997 549.82 713.067 556.69 708.976 558.494C674.809 572.844 635.058 562.53 603.856 545.036C537.372 566.319 472.332 591.599 411.084 625.349C422.871 628.452 433.472 635.352 444.143 641.083C459.334 646.341 474.421 651.892 489.597 657.196C564.702 679.903 643.301 710.387 722.652 705.764C747.047 701.6 758.019 691.149 772.501 672.48L774.89 669.38C800.763 635.912 830.335 600.473 834.671 557.059C835.659 542.968 834.321 528.95 833.505 514.911C830.019 518.478 826.278 521.811 822.658 525.261C817.634 530.048 811.212 524.012 813.677 518.332C819.008 502.192 828.402 486.963 830.027 469.88C830.301 453.812 819.769 439.518 810.464 427.304C738.06 338.197 769.642 151.092 626.237 132.925C565.046 261.603 356.395 208.11 296.222 105.635L294.418 102.469V102.469ZM133.706 644.856C134.31 627.316 162.228 650.153 159.65 659.726C158.086 672.956 142.041 666.776 138.408 657.843C136.153 653.757 134.254 649.511 133.706 644.856ZM686.501 626.807C690.526 619.466 714.499 640.576 702.073 647.509C693.659 651.946 690.438 641.551 688.611 635.312C687.614 632.701 685.724 629.688 686.501 626.807ZM276.481 636.437C261.382 627.479 294.434 615.414 295.675 630.026C296.16 639.944 282.771 639.416 276.481 636.437ZM557.088 597.848C564.672 587.735 564.852 623.555 560.355 625.987C558.279 629.264 553.626 628.49 552.387 624.945C549.2 615.816 553.998 606.43 557.088 597.848ZM198.252 604.152L198.088 604.759C197.246 608.046 199.226 603.71 198.463 604.35C198.395 604.278 198.323 604.216 198.252 604.152ZM362.19 518.487C327.643 479.148 265.327 469.386 218.759 492.724C211.899 494.734 205.88 500.365 199.704 504.047C201.255 503.486 202.826 503.012 204.412 502.609C183.956 520.02 166.543 543.866 163.399 571.018C182.048 559.483 198.431 545.03 211.354 526.97C215.603 519.556 227.807 524.649 225.209 532.809C216.824 555.857 203.994 578.101 198.622 601.919C218.72 587.37 233.552 565.96 241.891 542.71C245.397 532.738 261.003 536.795 257.891 547.12C253.773 560.787 249.379 574.408 245.472 588.14L244.419 591.889C243.109 596.616 242.34 600.944 247.955 602.242C266.05 603.409 290.307 563.424 301.09 549.802C306.381 543.358 311.06 529.376 321.05 531.413C333.486 523.283 348.482 522.33 362.19 518.487ZM760.519 581.398C762.583 579.606 765.114 578.367 767.854 579.28L768.12 579.375C776.402 582.272 769.982 593.605 762.88 589.618C760.467 587.809 757.846 586.288 754.968 585.297C753.243 583.521 759.489 582.718 760.519 581.398ZM375.073 548.316C377.511 536.888 400.088 552.427 392.053 560.476C384.428 566.307 375.724 555.626 375.073 548.316ZM103.095 549.91C124.29 536.112 126.844 569.525 95.5037 559.764C92.9257 555.864 100.504 552.041 103.095 549.91ZM645.623 481.141C657.205 494.999 661.777 513.108 663.829 530.694C664.296 534.152 665.116 537.971 664.947 541.54C672.854 542.701 680.996 543.003 688.734 541.448C686.825 534.579 685.644 527.505 684.926 520.372C674.48 504.795 662.471 490.17 645.623 481.141ZM614.724 525.219C614.759 527.125 614.696 529.04 614.542 530.964C624.784 532.167 634.873 534.737 644.897 537.237L644.832 534.193C644.81 533.17 644.785 532.146 644.751 531.137C634.843 533.808 622.67 531.042 614.724 525.219ZM641.331 501.708C629.89 497.077 619.404 494.181 607.1 494.954C610.739 502.778 613.368 510.976 614.329 519.397C619.339 520.817 625.016 521.218 629.854 520.968C634.762 520.716 639.292 518.357 643.961 518.251C643.43 512.699 642.642 507.137 641.331 501.708ZM532.5 505.616C539.738 502.722 550.396 510.699 542.457 516.95C536.677 520.876 528.77 515.611 524.078 512.024C521.492 509.054 530.239 506.155 532.5 505.616ZM389.036 479.018C385.901 488.66 365.272 484.426 355.821 489.619L356.657 490.101C365.738 495.392 375.598 502.91 377.287 512.467C389.31 507.773 401.431 503.331 413.62 499.13C406.397 491.06 398.097 484.414 389.036 479.018ZM529.149 469.565C474.885 450.109 415.743 450.679 358.819 452.491L360.316 452.941C384.857 460.387 413.591 471.955 426.382 494.845C459.913 483.909 494.223 474.854 529.149 469.565ZM634.796 484.926C626.447 470.141 610.192 463.53 594.288 464.641L591.782 465.051V465.051C593.513 465.658 595.141 466.516 596.604 467.735C599.216 469.911 599.172 474.694 596.863 477.085C599.792 481.426 602.542 485.953 604.971 490.629C613.739 484.512 624.254 483.63 634.796 484.926ZM781.397 485.25C762.402 496.398 748.653 444.2 772.593 455.412L774.3 457.241C781.235 464.727 791.957 477.38 781.397 485.25ZM335.981 460.809C329.914 465.733 322.85 469.304 316.706 474.177C326.807 476.735 336.735 480.13 346.129 484.596C353.783 478.033 362.988 473.855 372.734 470.909C361.045 466.068 348.516 462.837 335.981 460.809ZM87.2436 461.909L87.3329 461.672C90.2739 453.413 108.023 441.163 116.84 444.371C117.252 444.351 117.66 444.754 117.636 445.168L117.78 446.191C118.276 449.822 118.532 453.377 116.136 456.615C111.845 463.531 107.748 472.148 99.4949 474.844C91.3621 477.423 84.3955 469.71 87.2436 461.909V461.909ZM315.753 458.465L313.042 458.321C300.592 457.627 282.665 456.494 276.585 468.913C287.085 468.841 297.765 469.992 308.357 472.245C309.942 467.472 312.543 462.674 315.753 458.465ZM383.757 405.706C381.862 402.09 388.89 406.054 390.523 405.498C393.556 405.684 396.295 406.307 398.011 409.035C400.76 413.41 395.419 418.1 391.212 415.834C387.152 413.591 388.128 407.74 383.757 405.706ZM622.284 385.47L622.543 385.444C626.739 384.977 644.717 380.885 644.67 385.331L644.326 385.814C638.672 393.871 631.301 409.731 619.798 404.077C612.408 399.868 613.891 387.292 622.284 385.47ZM497.071 384.813C500.39 378.696 507.501 392.899 509.616 395.426C512.626 402.166 503.942 407.422 499.659 401.246C497 396.429 495.817 390.221 497.071 384.813ZM185.663 370.778C190.431 368.363 202.489 368.146 199.188 376.297C192.756 384.826 180.958 380.698 173.753 375.235C170.069 370.996 183.373 372.72 185.663 370.778ZM301.575 339.135C301.143 333.027 307.956 330.843 312.549 332.838C320.745 336.399 327.097 349.498 324.503 357.97C322.415 366.374 309.695 368.234 305.653 360.434C303.329 353.232 303.016 346.356 301.575 339.135ZM723.747 350.537C733.161 348.544 743.032 342.235 752.701 344.012C755.715 345.145 756.81 348.573 754.561 351.062C753.29 356.803 718.45 355.525 723.747 350.537ZM451.579 328.624C455.585 321.355 464.792 313.643 473.627 314.274C479.046 314.094 481.163 321.887 476.389 324.474L476.23 324.541C473.233 325.737 450.503 331.57 451.579 328.624ZM576.693 316.907C563.135 314.963 563.215 282.354 571.289 288.722C574.041 296.719 581.029 301.484 585.025 308.575C587.045 313.438 581.21 318.283 576.693 316.907ZM165.052 309.69C170.813 310.572 200.729 292.378 195.247 306.94C191.68 311.022 187.164 311.12 182.102 311.497L181.964 311.483C179.368 311.316 160.498 313.556 165.052 309.69ZM371.96 280.076C365.974 279.382 344.201 233.892 354.85 236.757L356.475 237.822C368.274 245.611 381.284 255.567 386.549 268.861C388.623 276.786 379.367 285.149 371.96 280.076ZM505.885 261.363C506.747 260.972 507.508 262.198 506.642 262.659C502.944 264.622 498.928 268.778 496.604 272.285C488.646 282.238 479.232 264.65 491.463 263.328C495.925 263.649 501.791 263.218 505.885 261.363ZM251.929 206.297C262.971 203.453 268.31 218.013 259.406 224.033C254.953 227.851 213.118 239.803 210.613 235.006C215.861 226.473 242.083 209.291 251.929 206.297ZM666.701 208.336C697.27 205.834 698.091 200.24 676.5 225.168C663.753 236.356 650.836 213.436 666.701 208.336ZM523.62 133.825C513.018 134.725 502.372 134.995 491.743 134.651C493.381 138.158 491.961 143.261 487.309 142.553C485.121 156.75 484.126 171.175 481.364 185.276C480.639 188.573 479.612 191.775 478.63 194.991C498.87 196.485 519.412 195.647 539.139 190.639C531.811 172.279 528.631 152.848 523.62 133.825ZM438.112 127.771C438.016 129.255 437.595 130.723 436.9 131.963C427.744 147.824 419.706 164.374 410.028 179.899C430.914 187.636 452.862 192.681 475.007 194.675C471.661 174.477 474.63 153.878 473.937 133.51C461.892 132.354 449.92 130.43 438.112 127.771ZM572.232 125.43C561.637 128.281 550.857 130.42 539.995 131.95C540.038 133.658 539.055 135.252 537.536 135.889C539.916 153.62 544.606 171.065 544.674 189.139C567.314 183.592 585.212 168.185 600.061 150.809L596.686 148.349C587.662 141.743 578.556 134.694 572.232 125.43ZM363.549 85.3496C350.416 77.2906 332.235 80.7236 321.599 91.2186C316.886 95.4216 312.795 101.104 307.428 104.406C306.759 104.817 306.073 105.097 305.384 105.273C309.081 112.263 314.731 118.964 319.507 124.729C345.117 147.091 373.947 165.871 405.633 178.227C406.93 159.217 413.508 140.755 421.026 123.289C414.018 121.177 407.109 118.746 400.324 115.995C399.46 120.566 395.175 124.096 392.465 127.644C386.316 134.845 382.218 143.65 376.363 150.976C369.841 157.811 358.76 149.094 363.447 141.011C371 129.983 380.761 120 392.101 112.491C384.626 109.137 377.498 105.19 370.604 100.774C370.312 101.078 370.011 101.368 369.706 101.648C369.245 98.8016 365.328 99.5506 363.245 100.017C361.761 98.7596 359.747 100.343 358.094 100.755C357.852 100.315 357.649 99.8496 357.505 99.3616C349.016 107.747 342.631 121.026 331.678 126.033C327.166 127.278 321.934 122.798 323.654 118.01C326.551 110.658 350.055 95.0546 357.819 90.9316C356.12 88.4596 357.479 87.2386 360.233 87.6056C360.706 87.0136 361.431 86.8306 362.186 87.3326C362.665 86.6886 363.114 86.0226 363.549 85.3496ZM193.284 159.207C198.607 159.233 204.892 157.014 209.671 160.088C216.699 168.132 199.282 170.897 192.456 161.208C191.792 160.473 192.228 159.202 193.284 159.207ZM586.011 109.652C587.532 111.445 588.048 114.061 587.493 116.411C594.153 126.58 597.812 138.092 601.159 149.528L602.096 148.365C617.27 129.401 625.875 112.207 592.526 110.335C590.358 110.028 588.184 109.8 586.011 109.652ZM268.227 136.335C240.679 116.215 299.955 127.207 282.878 139.506C277.623 141.414 272.585 139.291 268.227 136.335Z" fill="black" />
        </>
    )
}
