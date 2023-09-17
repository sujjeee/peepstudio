"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'

export default function Coffee() {
    const { data } = usePeep()
    return (
        <>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M394.207 19.1734C418.892 0.376387 480.865 -8.07661 507.211 10.0224C533.233 28.1974 536.07 57.5889 548.196 84.6269C559.637 79.2319 578.53 86.9584 581.847 97.5744C585.961 102.581 586.146 116.649 588.983 123.38C712.425 143.029 731.166 239.267 746.024 348.525C765.68 459.394 810.301 570.021 790.93 684.107C793.454 687.759 795.444 691.309 797.284 695.525C801.693 703.027 796.014 713.646 787.121 713.235C775.61 712.224 764.213 710.844 752.648 710.413C720.588 709.3 688.499 709.433 656.427 709.84L652.054 709.897C490.421 711.909 328.797 715.874 167.157 716.926C161.293 716.934 158.422 711.675 159.205 706.487C160.782 696.042 162.245 685.592 163.772 675.142C125.54 685.24 84.8961 687.781 46.7721 676.204C44.1051 673.487 52.9861 674.96 54.3951 674.547C19.3091 650.572 29.7871 600.065 32.8951 563.687C52.2211 439.036 59.0341 301.118 133.703 194.751C166.006 151.343 213.365 116.975 267.784 109.242L269.294 109.036C285.206 106.914 302.94 106.231 316.852 97.5744C332.499 85.0831 339.167 62.0024 355.629 61.7864C361.064 61.715 368.459 68.5916 376.416 73.2604C377.01 62.9898 382.545 54.3223 383.767 46.3589L383.866 45.6779C385.141 36.3937 383.395 28.0409 394.207 19.1734ZM659.495 351.819C624.805 327.719 535.192 339.828 533.14 341.178C528.623 344.149 526.678 344.411 524.235 348.269C521.823 348.589 519.413 348.921 517.005 349.263C512.174 350.841 515.754 356.783 521.334 354.663C517.978 369.138 527.855 379.431 531.787 393.741C533.064 398.387 531.833 406.743 531.787 411.49C532.168 417.543 538.861 424.693 537.745 430.766C533.78 452.355 512.262 473.415 521.334 494.352C527.344 506.177 545.42 512.206 557.438 516.226C582.337 525.782 625.721 515.867 640.188 494.352C647.905 482.876 656.845 453.928 661.446 444.949L662.465 430.706C664.98 395.299 667.217 357.183 659.495 351.819Z" fill={data.color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M354.345 61.8506L364.273 67.9428L421.931 96.4449C433.109 99.5746 438.698 103.326 438.698 107.698V152.217C438.698 158.174 449.188 171.677 470.167 192.723L489.548 173.402L489.115 170.872C487.271 159.972 486.348 152.68 486.348 148.997C486.348 145.037 505.31 130.001 543.234 103.891L559.825 88.2711L558.056 82.8913C568.285 83.3747 579.379 89.6745 581.847 97.5743C585.961 102.581 586.146 116.649 588.983 123.38C712.425 143.029 731.166 239.267 746.024 348.525C765.68 459.394 810.301 570.021 790.93 684.107C793.454 687.759 795.444 691.309 797.284 695.525C801.693 703.027 796.014 713.646 787.121 713.235C775.61 712.224 764.213 710.844 752.648 710.413C720.588 709.3 688.499 709.433 656.427 709.84L652.054 709.897C490.421 711.909 328.797 715.874 167.157 716.926C161.293 716.934 158.422 711.675 159.205 706.487C160.782 696.042 162.245 685.592 163.772 675.142C125.54 685.24 84.8961 687.781 46.7721 676.204C44.1051 673.487 52.9861 674.96 54.3951 674.547C19.3091 650.572 29.7871 600.065 32.8951 563.687C52.2211 439.036 59.0341 301.118 133.703 194.751C166.006 151.343 213.365 116.975 267.784 109.242L269.294 109.036L270.815 108.838C286.328 106.863 303.381 105.956 316.852 97.5743C332.086 85.4127 338.809 63.2135 354.345 61.8506ZM492.502 323.156C486.847 323.156 475.265 331.938 457.757 349.502L456.214 350.215C435.05 360.046 421.028 368.574 414.151 375.799L413.905 376.06C406.958 383.513 393.199 403.333 372.63 435.519L342.844 453.134H331.573L323.549 511.338L342.844 552.897L386.547 538.176L457.757 519.407L498.619 477.951L521.669 470.213C518.872 478.292 517.859 486.331 521.334 494.352C527.344 506.177 545.42 512.206 557.438 516.226C582.337 525.782 625.721 515.867 640.188 494.352C647.905 482.876 656.845 453.928 661.446 444.949L662.765 426.446C665.143 392.302 666.909 356.968 659.495 351.819C624.805 327.719 535.192 339.828 533.14 341.178C528.623 344.149 526.678 344.411 524.235 348.269L522.97 348.439L530.082 338.794L527.564 337.449C509.596 327.92 497.909 323.156 492.502 323.156ZM521.334 354.663C518.121 368.52 527.037 378.546 531.253 391.932L520.48 371.308L520.479 354.931C520.758 354.862 521.043 354.774 521.334 354.663Z" fill="#9DDADB" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M349.585 59.6984C351.979 57.5774 355.524 60.2424 354.002 63.1074C350.582 69.5464 347.074 75.6474 342.484 81.3394C339.701 84.7904 336.72 88.0545 333.699 91.2824C341.452 97.9894 348.101 106.316 354.38 114.12C362.409 124.101 370 134.505 379.013 143.638C387.901 152.646 397.73 158.942 409.614 163.141L412.014 163.974C423.952 168.165 436.711 173.825 443.441 185.128C444.768 187.357 442.096 190.111 439.85 188.72C428.157 181.48 414.418 180.024 401.69 175.24C389.395 170.619 378.677 163.507 369.207 154.43C359.753 145.368 351.815 135.058 343.535 124.966C335.347 114.987 326.531 106.464 316.846 98.0214C301.9 108.076 284.84 112.451 267.493 116.748L265.6 117.216C248.232 121.516 230.957 126.51 214.663 133.998C200.297 140.599 186.167 148.482 174.465 159.224C162.043 170.624 152.375 185.184 143.526 199.423C123.732 231.279 109.816 266.179 97.5645 301.503C84.8225 338.245 74.1645 375.723 65.5605 413.646C61.1845 432.936 57.6305 452.363 54.7095 471.926C53.3035 481.348 52.0545 490.79 50.9575 500.253C49.7865 510.358 49.5175 520.754 46.4175 530.47C45.0885 534.634 41.9505 536.362 38.8095 536.215L38.1715 544.194C37.3256 554.832 36.5369 565.473 36.2705 576.177C35.8286 593.975 36.029 611.722 37.3092 629.482L37.4905 631.904C38.4965 644.866 40.7445 659.43 50.4915 668.921C60.5855 678.751 76.1085 681.842 89.7135 682.019C121.401 682.432 151.903 667.46 179.943 654.325C208.821 640.798 236.91 625.783 264.326 609.499C278.288 601.206 292.099 592.637 305.734 583.818C312.425 579.489 319.069 575.087 325.663 570.614C329.44 568.052 333.019 565.243 336.864 562.97C334.98 561.216 334.139 558.458 335.717 556.05C324.602 546.402 319.975 529.185 319.435 515.254C318.997 504.009 320.653 492.796 321.959 481.657C322.618 476.04 323.432 470.433 324.277 464.841C324.611 462.632 324.866 460.269 325.256 457.937C295.243 474.43 264.389 489.118 232.718 502.167C216.484 508.856 200.042 514.87 183.373 520.381L179.994 521.493C164.2 526.663 148.028 531.547 131.701 534.502C130.828 534.66 130.119 533.371 131.051 532.96C146.963 525.939 163.426 520.017 179.577 513.551L182.231 512.47C181.926 512.453 181.61 512.411 181.28 512.332C171.808 510.046 162.41 506.523 153.12 503.557C144.498 500.804 134.811 499.075 126.752 494.919C126.132 494.599 126.479 493.737 127.083 493.696C136.141 493.068 145.974 495.708 154.855 497.261L158.191 497.846C163.78 498.831 169.493 499.891 175.055 501.272C175.256 499.409 176.297 497.538 177.778 496.441C194.075 484.372 192.42 459.996 194.163 442.021L195.455 428.676C197.728 405.321 200.134 381.969 203.788 358.788C203.983 357.55 205.898 357.905 205.906 359.074C206.094 387.809 203.925 416.411 202.838 445.101L202.669 449.808C202.068 467.51 201.597 485.893 190.448 499.514C192.007 498.603 194.115 498.603 195.378 500.105C196.93 501.952 197.826 504.026 197.798 506.061C207.873 501.837 217.904 497.503 227.886 493.081C259.979 478.863 291.399 462.952 321.988 445.736C325.28 443.883 328.409 445.339 330.037 447.782L330.271 447.749C330.311 447.743 330.351 447.739 330.392 447.738L330.625 447.728C330.634 447.728 330.643 447.729 330.651 447.729C334.957 445.363 340.823 447.048 344.518 450.499C344.627 450.603 344.72 450.715 344.817 450.825C349.495 448.725 353.863 445.89 357.827 442.297C365.939 434.945 372.81 425.854 378.8 416.738C389.831 399.948 399.201 381.277 414.102 367.456C426.209 356.227 441.219 349.236 456.966 344.847C456.9 344.387 457.076 343.897 457.394 343.571C458.203 342.742 458.78 342.455 459.825 342.958C459.908 342.999 459.958 343.055 459.992 343.115L461.528 340.49C462.367 339.065 463.228 337.63 463.527 337.253C465.315 335.002 467.155 332.768 469.023 330.581C472.19 326.878 475.799 323.224 479.978 320.656C489.128 315.035 498.746 318.216 508.154 321.288C513.837 323.145 519.503 325.062 525.177 326.947L525.762 327.139C529.993 328.498 534.944 329.687 536.836 334.169C537.585 335.943 537.701 337.784 537.352 339.57C577.536 329.351 622.167 334.046 661.38 346.042C662.885 346.502 664.388 347.74 664.706 349.366C669.198 372.407 671.2 396.036 669.167 419.47C667.412 439.698 662.93 459.521 654.484 478.04L654.004 479.086C646.067 496.249 633.486 517.405 614.273 522.784C602.672 526.032 589.841 524.117 578.01 523.522C566.51 522.943 554.757 522.859 543.367 521.051C533.223 519.441 524.335 514.894 518.066 506.646C512.658 499.53 509.81 490.93 507.477 482.375C506.409 482.715 505.348 483.076 504.304 483.485C499.897 485.206 496.163 487.984 492.787 491.253C485.658 498.157 480.128 506.542 472.669 513.13C465.917 519.094 458.223 523.732 449.97 527.298C432.868 534.688 414.522 537.641 396.433 541.557L395.172 541.831C381.553 544.819 367.654 548.488 355.634 555.578C355.399 557.665 354.448 559.629 352.924 560.915C355.044 562.906 355.942 566.059 354.079 569.017C348.875 577.276 339.911 581.975 331.864 587.256L331.341 587.601C323.425 592.849 315.44 597.993 307.39 603.032C291.025 613.278 274.318 622.96 257.375 632.216C230.124 647.103 202.288 661.146 173.948 673.884C175.649 682.253 175.027 690.882 176.305 699.306L176.502 700.508C177.048 703.635 176.31 706.251 174.156 708.293L173.929 708.502L173.933 708.474L173.731 708.659L173.663 708.716L173.686 708.698C173.437 708.926 173.181 709.137 172.92 709.319L172.588 709.532C170.513 710.793 167.843 710.779 165.719 709.666L165.477 709.532L165.069 709.298C162.263 707.684 160.328 703.685 161.492 700.508C164.353 692.7 165.434 684.367 168.076 676.507L165.98 677.444L163.217 678.648C133.339 691.568 100.151 702.448 67.5965 693.64C53.2125 689.747 39.7685 681.513 32.5715 668.092C25.4895 654.886 24.4885 639.552 24.1125 624.862C23.6485 606.731 24.6205 588.323 27.0115 570.348C28.6165 558.282 30.5575 545.988 33.5515 534.047C32.0115 532.688 30.8795 530.739 30.5805 528.325C29.1675 516.92 31.6405 505.063 33.1545 493.717C34.6335 482.639 36.2675 471.583 38.1155 460.561C41.8465 438.302 46.1815 416.09 51.2285 394.092C60.2105 354.941 72.0715 316.486 86.3515 278.95L87.6021 275.681C100.798 241.372 116.076 207.795 137.351 177.654C147.528 163.234 158.286 150.16 172.666 139.769C186.138 130.033 201.334 123.023 217.016 117.665C232.715 112.303 248.851 108.71 265.272 106.475C281.949 104.205 299.552 102.813 315.109 95.9734C313.141 92.4454 314.829 87.6824 318.142 85.4944C329.288 78.1304 339.595 68.5504 349.585 59.6984ZM706.39 379.92C706.857 379.211 707.966 379.659 707.761 380.498C702.34 402.707 697.251 424.961 693.928 447.594C687.93 488.443 689.033 529.827 689.523 570.978L689.548 573.107C689.8 595.273 690.15 617.441 690.883 639.598C691.253 650.796 691.985 662.104 691.587 673.308C691.37 679.386 689.75 685.135 689.176 691.14C688.673 696.391 689.121 701.723 689.372 706.981C689.54 710.477 684.38 710.328 684.029 706.981L683.58 702.652C682.997 697.173 682.277 691.728 680.481 686.484C678.322 680.177 677.286 673.983 676.537 667.361C675.39 657.213 674.88 646.964 674.437 636.746L674.134 629.678C672.285 586.974 672.35 544.069 675.343 501.409L675.562 498.363C678.526 458.039 683.669 414.47 706.39 379.92ZM590.835 125.773C589.419 125.191 589.915 123.05 591.483 123.423L594.335 124.103C615.229 129.108 635.745 134.53 655.247 143.843C674.762 153.161 691.284 167.072 704.412 184.178C729.932 217.429 740.537 257.839 748.909 298.211C758.213 343.072 766.684 388.097 776.069 432.944L777.812 441.298C786.496 483.067 794.695 524.861 800.736 567.125L801.17 570.19C807.263 613.652 810.927 658.618 804.279 702.193C802.964 710.814 788.618 708.667 789.179 700.15C790.799 675.527 791.959 651.033 790.838 626.355C789.716 601.672 787.401 577.097 783.95 552.63C781.046 532.04 776.717 511.706 772.886 491.279L772.285 488.053C769.077 470.679 765.77 453.323 762.47 435.966L757.539 409.978C750.148 371.065 742.612 332.118 734.097 293.449L733.592 291.174C725.259 253.972 712.974 215.002 687.979 185.46C662.614 155.479 626.303 140.38 590.835 125.773ZM498.668 520.371C499.278 519.012 501.412 519.161 502.068 520.371C504.639 525.113 504.924 531.167 505.41 536.521L505.461 537.072C506.079 543.605 506.626 550.16 506.961 556.714C507.596 569.153 507.9 581.576 507.861 594.031C507.821 606.795 507.564 619.544 506.876 632.289L506.69 635.704C506.062 646.779 505.008 659.133 499.745 668.816C497.832 672.337 492.629 671.302 491.521 667.742C487.891 656.086 489.755 642.266 490.686 630.328L491.409 621.013C492.125 611.696 492.808 602.377 493.349 593.05C494.091 580.289 494.703 567.517 495.292 554.75C495.484 550.603 495.691 546.455 495.909 542.308L496.245 536.09C496.532 530.888 496.508 525.18 498.668 520.371ZM90.5205 536.89L92.1275 535.338C97.0605 530.51 103.294 523.076 110.587 523.537C113.495 523.721 115.348 526.135 114.745 528.996C113.457 535.112 107.218 538.286 102.727 542.02C97.8068 546.109 93.1698 550.48 88.5418 554.893C84.436 558.806 80.4875 562.83 76.6337 566.98L75.1928 568.542C73.8114 570.049 63.9743 578.947 65.0379 581.255L65.0958 581.359C65.3918 581.801 64.8988 582.409 64.4078 582.254C60.1598 580.912 60.4248 577.271 62.0308 573.582C65.1168 566.494 70.5208 559.937 75.2398 553.884C79.9461 547.845 85.0399 542.222 90.5205 536.89ZM514.062 359.137C510.777 351.373 498.676 351.536 491.806 352C474.506 353.169 455.788 357.546 440.395 365.632C424.436 374.015 413.686 387.447 404.068 402.3L403.618 402.997C394.243 417.57 385.214 434.821 370.534 444.841C363.057 449.946 354.326 454.607 345.254 456.626C344.631 457.721 343.622 458.588 342.299 458.903L341.684 459.044C339.1 459.615 335.086 460.246 331.619 459.868C331.642 461.564 331.624 463.247 331.667 464.854C331.789 469.459 331.841 474.084 331.841 478.692C331.843 488.347 331.324 498.021 331.727 507.675C332.084 516.214 333.29 525.136 337.39 532.769C340.397 538.369 344.366 542.075 349.157 545.613C360.943 538.43 374.27 534.052 387.796 530.76C404.154 526.779 420.903 524.122 436.889 518.724C444.583 516.125 451.98 512.724 458.682 508.105C465.795 503.2 471.228 496.564 476.818 490.073L477.691 489.065C483.396 482.522 489.621 476.262 497.684 472.714C504.627 469.658 513.778 469.114 519.849 464.386C523.023 461.912 523.289 458.322 523.623 454.646C519.735 455.202 515.619 454.311 511.744 453.857L509.736 453.622C506.072 453.186 502.492 452.708 498.885 451.775C498.215 451.602 498.215 450.592 498.885 450.419C503.148 449.318 507.373 448.849 511.744 448.337L512.77 448.209C516.724 447.691 520.881 446.908 524.76 447.778C525.456 445.13 526.461 442.602 527.871 440.07C529.85 436.513 533.595 432.48 534.101 428.325C534.252 427.084 533.963 425.621 533.378 424.524L533.176 424.151C532.93 423.709 532.639 423.265 532.213 422.989C532.166 423.044 532.066 423.107 531.849 423.175C528.864 424.115 526.26 422.654 524.878 420.402C519.011 421.13 512.608 420.885 507.106 421.128L501.543 421.398C495.598 421.67 489.384 421.789 483.799 420.588C483.019 420.421 482.783 419.123 483.564 418.789C490.431 415.852 498.761 414.915 506.113 413.787C510.219 413.156 514.355 412.676 518.473 412.121C521.215 411.751 524.125 411.14 526.966 410.993C534.089 402.126 530.251 388.138 520.338 384.32C516.727 385.907 513.48 384.984 509.535 384.645C505.597 384.307 501.649 384.078 497.695 384.095C489.772 384.13 481.376 386.214 473.53 385.317C472.254 385.17 471.068 383.472 472.337 382.436C478.342 377.535 486.95 375.937 494.573 374.893L496.154 374.681C498.71 374.346 501.818 373.857 505.042 373.566C505.771 372.144 507.079 371.069 509.044 370.802C509.628 370.722 510.215 370.675 510.801 370.625L510.792 370.567C515.584 370.337 515.376 362.243 514.062 359.137ZM185.993 510.562C185.908 510.693 185.815 510.818 185.717 510.937L185.565 511.113L186.353 510.793L185.993 510.562ZM597.684 341.788C577.514 339.621 557.315 340.078 537.085 340.66C535.467 345.952 529.835 350.462 524.378 350.632C528.652 357.137 529.093 365.941 526.096 372.84C532.459 375.373 537.941 379.923 541.268 386.403C545.884 395.386 545.28 405.382 540.719 413.684C544.612 417.208 546.909 422.931 546.679 428.325C546.422 434.34 542.837 439.478 539.858 444.458C536.639 449.844 536.531 454.586 535.542 460.618C534.095 469.446 528.141 474.8 520.48 478.144L520.887 479.746C522.862 487.435 525.319 495.547 530.965 501.168C538.226 508.401 549.492 508.334 559.087 508.792L559.549 508.814C568.335 509.254 577.117 509.768 585.899 510.266L592.487 510.634C602.599 511.19 612.31 511.257 620.565 504.572C634.042 493.66 643.281 475.601 649.129 459.614C661.403 426.058 661.549 389.233 655.916 354.285C637.021 348.195 617.416 343.908 597.684 341.788ZM429.945 397.46L430.093 397.471C434.246 397.945 437.099 401.308 438.115 405.297C439.591 411.095 438.867 416.337 442.418 421.571C446.071 426.953 448.317 431.262 448.848 437.911C449.066 440.647 448.966 443.376 449.575 446.054L450.017 447.93C450.486 449.931 450.869 451.858 450.636 454.006C450.423 455.965 449.469 457.491 447.504 458.119C441.101 460.167 436.157 455.449 434.503 449.482C433.074 444.328 434.982 438.186 432.966 433.346C431.849 430.663 429.789 428.419 428.625 425.718C427.472 423.041 426.893 420.244 426.708 417.334C426.357 411.83 431.225 405.217 428.509 400.23C427.931 399.166 428.586 397.428 429.945 397.46ZM344.892 340.662C349.228 339.781 354.147 337.762 358.423 339.44C360.621 340.304 361.707 342.984 359.85 344.847C356.626 348.079 351.94 348.259 347.597 349.021L347.215 349.09C342.08 350.04 336.936 350.941 331.785 351.795C322.094 353.4 312.38 354.819 302.632 356.025C292.62 357.264 282.58 358.367 272.526 359.197L268.634 359.516C260.141 360.195 251.304 360.708 242.971 359.407C241.76 359.218 241.955 357.455 242.971 357.146C252.1 354.383 262.114 353.642 271.552 352.473C281.586 351.228 291.603 349.913 301.594 348.353C311.569 346.795 321.531 345.123 331.456 343.275C335.942 342.441 340.421 341.57 344.892 340.662ZM501.346 331.79C497.542 330.443 493.355 328.447 489.233 329.115C482.122 330.267 475.794 337.194 470.167 341.756L472.992 341.207C487.452 338.428 506.6 335.434 518.737 344.627C518.768 344.574 518.793 344.521 518.828 344.468C519.807 342.98 520.943 341.819 522.182 340.546C522.3 340.435 522.414 340.319 522.527 340.202L523.195 339.49L521.667 338.961C518.392 337.803 514.512 336.309 513.899 336.09L513.857 336.075C509.681 334.661 505.501 333.263 501.346 331.79ZM382.545 28.7161C381.95 21.0631 393.861 21.1261 394.451 28.7161C395.738 45.2861 392.009 61.6992 383.983 76.2262C383.924 76.3321 383.859 76.4262 383.797 76.5261C388.817 79.1381 393.894 81.6441 399.084 83.8841C405.723 86.7501 412.487 89.3602 419.372 91.5742C425.6 93.5781 433.273 94.3691 438.509 98.5391C449.55 107.331 445.402 125.577 443.278 137.404L442.946 139.271C441.889 145.357 441.124 151.601 443.69 157.442C446.43 163.681 451.971 168.309 456.914 172.773L457.912 173.678C462.291 177.668 467.295 182.515 470.507 187.923C473.439 181.861 477.436 176.907 481.662 171.33C484.677 167.35 482.531 166.038 480.365 162.15C478.28 158.408 477.262 154.419 477.914 150.15C479.117 142.266 485.418 136.571 491.69 132.292C499.097 127.241 507.364 123.499 515.021 118.8C530.755 109.146 546.078 98.1081 559.883 85.8491C560.264 85.5101 560.924 85.9541 560.619 86.4171C549.714 103.004 536.927 117.337 521.212 129.503C514.84 134.436 508.146 138.528 501.407 142.83L499.47 144.073C496.764 145.826 493.389 148.168 492.166 151.152C490.935 154.153 493.56 156.419 494.973 158.905C499.46 166.8 497.295 174.166 491.976 180.861L491.728 181.169C486.442 187.683 482.436 193.741 480.52 202.063C476.403 219.94 482.137 238.561 488.14 255.344L488.377 256.005C491.624 265.051 495.075 274.031 497.896 283.222L498.672 285.763C501.228 294.22 503.321 302.561 500.454 311.254C499.479 314.211 495.446 314.91 493.771 312.127C487.862 302.313 486.389 290.503 482.685 279.713C479.075 269.197 474.93 258.871 471.443 248.312C466.953 234.717 463.948 220.083 465.579 205.823C465.531 205.74 465.478 205.662 465.438 205.574L464.295 203.074C461.178 196.304 458.168 190.392 452.5 184.996C446.588 179.367 440.171 174.384 435.519 167.57C425.414 152.769 431.663 136.304 432.884 120.12L433.024 118.136C433.245 114.775 433.367 110.209 431.172 107.883C428.703 105.265 422.913 104.597 419.637 103.438C411.171 100.442 402.828 96.9511 394.882 92.7591C387.318 88.7691 379.991 84.3612 373.169 79.1972L369.711 76.5959C364.255 72.4796 358.598 67.9844 354.942 62.3811C354.52 61.7361 355.237 60.6952 356.001 61.0042C362.105 63.4812 367.682 67.4211 373.393 70.8491C373.482 70.6401 373.585 70.4291 373.702 70.2171C380.768 57.4291 383.674 43.2612 382.545 28.7161ZM577.528 116.331C579.96 109.662 591.044 110.177 590.602 118.101C590.263 124.189 587.679 129.684 585.315 135.211L585.063 135.803C582.623 141.562 579.805 146.969 576.433 152.247C569.99 162.337 562.443 171.701 554.382 180.538C547.074 188.55 537.482 193.449 526.429 192.635C521.772 192.292 517.071 191.107 512.99 188.781C508.143 186.017 502.879 177.718 496.695 179.728C496.097 179.922 495.539 179.046 496.056 178.631C503.195 172.882 511.298 181.796 518.133 183.944C528.432 187.179 539.001 183.602 545.63 175.276C552.551 166.583 558.921 156.85 564.738 147.385C567.692 142.579 570.387 137.591 572.715 132.45C575.064 127.261 575.598 121.622 577.528 116.331ZM560.927 75.289C560.627 74.368 561.771 73.492 562.58 74.018C567.271 77.0719 571.336 81.1069 575.663 84.644C580.464 88.5679 585.3 92.4119 590.211 96.197C597.37 101.716 589.067 111.876 582.765 105.847C574.141 97.6 564.696 86.816 560.927 75.289ZM535.172 43.0094C537.078 35.6607 548.349 38.6912 546.707 45.9541L546.653 46.1754C543.542 58.1721 547.973 70.3855 557.432 78.1629L557.78 78.4454C563.764 83.2345 555.286 91.6065 549.361 86.8634C536.426 76.5115 531.045 58.9264 535.172 43.0094Z" fill="black" />
        </>
    )
}
