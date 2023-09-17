"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
export default function Device() {
    const { data } = usePeep()
    return (
        <>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M743.718 327.928C740.576 319.302 745.164 310.698 747.709 302.353C756.75 273.412 732.021 200.415 714.726 199.348C708.401 182.984 691.521 176.196 678.234 166.772C663.157 157.362 648.491 146.554 632.811 138.304C631.939 130.509 622.487 128.577 616.707 134.153C600.832 124.278 581.795 126.112 564.778 119.642C551.848 98.7414 550.878 76.7643 547.454 56.6009C545.962 47.8117 547.547 39.3313 541.541 31.4949C521.366 3.11989 441.65 -9.18311 412.259 7.63189C396.438 -2.23511 396.057 15.6349 393.544 26.6639C390.751 32.1819 389.24 38.4309 389.707 45.0149C382.217 60.6593 375.867 80.2267 360.126 91.9108C340.153 106.736 309.425 112.372 289.952 119.642C285.584 115.439 284.248 109.362 284.248 109.362C254.068 115.923 224.777 127.456 199.491 145.464C170.763 153.866 150.531 177.231 135.901 202.284C134.289 204.925 133.909 207.618 134.38 210.091C89.3915 276.038 67.9195 354.987 64.9035 434.725C35.9725 452.088 78.6545 608.066 88.5905 640.448C88.6005 640.444 88.6105 640.44 88.6205 640.435C95.0665 651.847 102.385 684.411 118.517 681.892C129.583 694.404 147.218 691.944 162.235 692.905C159.789 702.287 160.991 713.022 163.902 722.293C167.345 733.329 184.241 733.703 186.637 721.671C336.181 750.725 489.62 727.543 640.845 731.904C684.569 732.214 728.289 733.567 771.908 736.682C778.05 737.12 784.278 730.844 783.859 724.729C774.482 624.957 765.674 493.706 755.188 394.911C752.701 372.38 750.733 349.602 743.718 327.928Z" fill={data.color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M284.405 110.025C284.349 109.806 284.297 109.585 284.248 109.362C254.068 115.923 224.777 127.456 199.491 145.464C170.763 153.866 150.531 177.231 135.901 202.284L135.706 202.614C134.259 205.149 133.929 207.721 134.38 210.091C89.3915 276.038 67.9195 354.987 64.9035 434.725C35.9725 452.088 78.6545 608.066 88.5905 640.448L88.6205 640.435C90.2267 643.279 91.8872 647.436 93.7247 652.036C99.2613 665.898 106.405 683.783 118.517 681.892C127.514 692.064 140.852 692.341 153.596 692.605C156.527 692.665 159.427 692.725 162.235 692.905C159.789 702.287 160.991 719.022 163.902 728.293C167.345 739.329 645.007 748.32 771.908 736.682C778.037 736.12 784.278 730.844 783.859 724.729C779.921 682.829 776.083 635.376 772.18 587.107C766.788 520.44 761.27 452.216 755.188 394.911C754.95 392.756 754.716 390.598 754.483 388.439C752.278 368.032 750.062 347.529 743.718 327.928C741.209 321.04 743.63 314.165 746.003 307.426C746.601 305.726 747.197 304.034 747.709 302.353C756.75 273.412 733.716 200.589 717.201 199.506L714.726 199.348C709.868 186.779 698.782 179.859 687.88 173.055C684.916 171.204 681.965 169.363 679.156 167.418L678.234 166.772C673.095 163.564 668.003 160.194 662.903 156.818C653.041 150.291 643.146 143.742 632.811 138.304C631.939 130.509 622.487 128.577 616.707 134.153C614.182 132.582 611.576 131.307 608.912 130.249L607.856 144.762C589.834 211.933 539.69 249.307 457.423 256.884C334.022 268.249 278.398 144.577 278.398 132.079C278.398 126.597 280.21 119.678 283.833 111.322L284.405 110.025ZM555.814 332.877C574.24 328.379 596.125 323.628 614.203 320.629C623.244 319.129 631.315 318.07 637.518 317.697C640.622 317.51 643.236 317.496 645.26 317.679C647.33 317.867 648.631 318.249 649.252 318.73C652.379 321.155 654.908 324.572 656.665 327.415C657.54 328.832 658.216 330.094 658.673 331.001C658.902 331.454 659.075 331.818 659.191 332.068C659.214 332.116 659.234 332.161 659.252 332.201C659.239 332.242 659.225 332.289 659.209 332.34C659.193 332.388 659.177 332.44 659.158 332.496C659.041 332.854 658.864 333.369 658.623 333.987C658.139 335.226 657.405 336.872 656.401 338.512C654.364 341.836 651.362 344.909 647.259 344.909C644.927 344.909 638.93 345.743 631.34 346.968C623.716 348.198 614.4 349.838 605.371 351.477C596.34 353.116 587.593 354.756 581.103 355.985C577.858 356.6 575.177 357.112 573.308 357.47C572.373 357.65 571.641 357.791 571.143 357.887L570.574 357.996L570.429 358.025L570.392 358.032L570.383 358.033L570.38 358.034C570.38 358.034 570.38 358.034 570.394 358.11L570.379 358.034L570.285 358.052L570.198 358.094L550.19 367.675L550.578 369.099L550.514 368.352C550.578 369.099 550.578 369.099 550.578 369.099L550.58 369.099L550.587 369.098L550.615 369.096L550.728 369.087L551.168 369.05C551.555 369.017 552.127 368.97 552.862 368.909C554.333 368.789 556.461 368.616 559.087 368.409C564.341 367.995 571.591 367.443 579.576 366.89C595.554 365.785 614.446 364.683 626.182 364.683C627.005 364.683 627.856 364.682 628.733 364.682C640.395 364.677 656.527 364.671 670.113 365.431C677.422 365.839 683.959 366.468 688.656 367.429C691.011 367.91 692.852 368.466 694.087 369.092C695.376 369.746 695.731 370.329 695.731 370.754C695.731 371.379 695.403 372.126 694.631 372.996C693.867 373.856 692.735 374.759 691.295 375.681C688.419 377.522 684.441 379.358 680.086 381.034C671.375 384.385 661.31 387.034 655.889 387.779C650.366 388.538 634.768 391.662 620.589 394.587C613.49 396.052 606.736 397.469 601.756 398.52C599.266 399.046 597.22 399.48 595.796 399.782C595.084 399.934 594.527 400.052 594.149 400.133L593.718 400.225L593.607 400.248L593.579 400.254L593.572 400.256L593.571 400.256C593.57 400.256 593.57 400.256 593.598 400.385L593.57 400.256L593.701 401.739L679.072 404.727L679.115 404.769C679.145 404.798 679.177 404.829 679.212 404.863C679.241 404.892 679.272 404.923 679.304 404.955C679.576 405.226 679.953 405.618 680.372 406.095C681.216 407.057 682.203 408.336 682.852 409.664C683.511 411.014 683.746 412.259 683.347 413.254C682.962 414.215 681.872 415.212 679.218 415.805C673.695 417.04 662.358 419.509 652.399 421.669C647.42 422.749 642.787 423.751 639.398 424.484C637.703 424.851 636.32 425.15 635.36 425.357L634.253 425.596L633.964 425.658L633.89 425.674L633.871 425.678L633.866 425.679L633.865 425.68C633.865 425.68 633.865 425.68 634.023 426.413L633.865 425.68L633.432 425.773L633.305 426.197L633.304 426.199L633.301 426.208L633.289 426.248C633.282 426.269 633.274 426.296 633.264 426.329C633.256 426.353 633.247 426.381 633.237 426.412C633.19 426.558 633.118 426.774 633.021 427.052C632.826 427.609 632.53 428.413 632.125 429.395C631.316 431.359 630.075 434.03 628.352 436.851C624.895 442.512 619.559 448.677 611.963 451.081C606.125 452.929 599.617 454.182 593.426 455.374C591.347 455.774 589.303 456.168 587.332 456.574C583.435 457.379 579.822 458.237 576.838 459.308C573.872 460.372 571.42 461.682 569.946 463.452C568.575 465.097 566.984 467.508 565.219 470.181L565.198 470.213C563.413 472.915 561.434 475.913 559.269 478.774C557.103 481.637 554.77 484.339 552.289 486.453C549.805 488.569 547.213 490.062 544.53 490.57C538.781 491.658 521.305 496.216 505.308 500.489C497.3 502.628 489.65 504.699 484.002 506.236C481.177 507.004 478.854 507.639 477.236 508.082C476.427 508.303 475.795 508.476 475.364 508.594L475.212 508.636C475.134 508.525 475.042 508.393 474.936 508.241C474.854 508.123 474.765 507.993 474.667 507.851C474.125 507.062 473.346 505.906 472.402 504.441C470.515 501.511 467.972 497.35 465.351 492.428C460.099 482.567 454.571 469.724 453.319 457.635C452.055 445.422 451.422 433.778 451.106 425.186C450.947 420.89 450.868 417.358 450.829 414.901C450.809 413.673 450.799 412.713 450.794 412.061C450.793 411.824 450.791 411.627 450.791 411.473L461.397 404.617L461.478 404.564L461.544 404.492L504.808 357.007L504.814 357.001L504.842 356.972C504.868 356.945 504.908 356.904 504.963 356.85C505.023 356.789 505.102 356.712 505.199 356.62C505.277 356.545 505.367 356.459 505.469 356.364C505.926 355.938 506.623 355.314 507.578 354.536C509.487 352.978 512.423 350.8 516.508 348.339C524.678 343.417 537.451 337.36 555.814 332.877ZM570.859 359.469L570.759 359.488L554.51 367.27C555.755 367.169 557.256 367.049 558.97 366.914C564.227 366.499 571.482 365.947 579.473 365.394C595.446 364.289 614.387 363.183 626.182 363.183C627.006 363.183 627.86 363.182 628.739 363.182C640.393 363.177 656.566 363.171 670.197 363.933C677.522 364.342 684.148 364.975 688.956 365.959C691.354 366.45 693.35 367.037 694.765 367.754C696.126 368.444 697.231 369.404 697.231 370.754C697.231 371.904 696.638 372.995 695.753 373.992C694.861 374.996 693.602 375.985 692.104 376.944C689.104 378.864 685.019 380.743 680.625 382.434C671.837 385.814 661.657 388.5 656.094 389.265C650.633 390.015 635.098 393.125 620.892 396.056C613.796 397.52 607.044 398.937 602.066 399.988C601.285 400.153 600.548 400.308 599.86 400.454L679.408 403.237L679.683 403.247L679.887 403.433L679.381 403.987C679.887 403.433 679.887 403.433 679.887 403.433L679.888 403.434L679.89 403.436L679.897 403.443L679.924 403.467C679.94 403.482 679.961 403.502 679.987 403.526L680.02 403.557C680.102 403.636 680.22 403.749 680.365 403.894C680.655 404.184 681.055 404.599 681.499 405.105C682.381 406.111 683.467 407.505 684.199 409.006C684.921 410.485 685.377 412.223 684.74 413.812C684.089 415.437 682.417 416.627 679.545 417.269C674.017 418.505 662.674 420.975 652.717 423.135C647.738 424.215 643.104 425.218 639.715 425.95C638.02 426.317 636.637 426.616 635.677 426.823L634.605 427.055C634.56 427.189 634.504 427.354 634.437 427.547C634.234 428.127 633.928 428.956 633.512 429.966C632.681 431.984 631.406 434.729 629.632 437.632C626.097 443.421 620.517 449.947 612.416 452.511C606.487 454.388 599.85 455.666 593.639 456.861L593.627 456.863C591.569 457.259 589.558 457.646 587.636 458.043C583.75 458.846 580.224 459.687 577.345 460.72C574.446 461.76 572.309 462.958 571.098 464.412C569.788 465.985 568.242 468.325 566.45 471.039L566.441 471.052C564.663 473.745 562.66 476.778 560.465 479.679C558.268 482.584 555.86 485.381 553.262 487.594C550.666 489.806 547.841 491.47 544.809 492.043C539.13 493.118 521.724 497.656 505.695 501.938C497.69 504.076 490.042 506.147 484.395 507.683C481.572 508.451 479.249 509.086 477.632 509.528C476.823 509.75 476.191 509.923 475.761 510.041L475.271 510.175L475.146 510.209L475.114 510.218L475.106 510.22L475.104 510.221C475.104 510.221 475.103 510.221 474.905 509.498L475.103 510.221L474.602 510.359L474.297 509.938L474.337 509.909C474.297 509.938 474.297 509.938 474.297 509.938L474.296 509.936L474.293 509.932L474.282 509.916L474.238 509.855C474.2 509.802 474.143 509.722 474.069 509.618C473.922 509.409 473.706 509.101 473.431 508.701C472.881 507.901 472.093 506.732 471.141 505.253C469.237 502.297 466.672 498.099 464.027 493.133C458.746 483.219 453.109 470.169 451.827 457.79C450.558 445.534 449.924 433.854 449.607 425.241C449.448 420.934 449.369 417.391 449.329 414.926C449.309 413.693 449.299 412.729 449.294 412.072C449.292 411.744 449.291 411.493 449.29 411.324L449.29 411.132L449.289 411.083V411.07V411.067V411.066C449.289 411.066 449.289 411.066 450.039 411.066H449.289V410.658L449.632 410.436L460.5 403.41L503.708 355.987L503.717 355.977L504.249 356.48C503.717 355.977 503.717 355.977 503.718 355.977L503.719 355.975L503.722 355.972L503.732 355.962L503.768 355.925C503.794 355.898 503.831 355.861 503.877 355.814L503.905 355.786C504.026 355.666 504.205 355.491 504.446 355.267C504.926 354.819 505.649 354.174 506.63 353.373C508.592 351.773 511.585 349.553 515.734 347.054C524.032 342.055 536.946 335.939 555.458 331.42C573.907 326.916 595.83 322.157 613.957 319.149C623.018 317.646 631.148 316.577 637.428 316.199C640.566 316.011 643.264 315.993 645.395 316.186C647.48 316.374 649.177 316.774 650.171 317.545C653.502 320.128 656.143 323.717 657.941 326.627C658.843 328.087 659.541 329.389 660.013 330.326C660.249 330.795 660.43 331.174 660.552 331.436C660.612 331.568 660.659 331.67 660.69 331.74L660.716 331.797L660.726 331.821L660.735 331.843L660.738 331.849L660.739 331.851L660.739 331.851C660.739 331.851 660.739 331.852 660.051 332.148C660.773 332.35 660.773 332.35 660.773 332.35L660.773 332.351L660.772 332.354L660.769 332.363L660.76 332.396C660.752 332.424 660.74 332.464 660.724 332.516C660.693 332.62 660.646 332.771 660.584 332.962C660.46 333.343 660.273 333.884 660.02 334.532C659.516 335.826 658.744 337.558 657.68 339.296C655.577 342.728 652.184 346.409 647.259 346.409C645.077 346.409 639.224 347.215 631.579 348.448C623.969 349.676 614.665 351.314 605.639 352.953C596.613 354.591 587.87 356.23 581.382 357.459C578.138 358.073 575.459 358.585 573.59 358.944C572.656 359.123 571.924 359.264 571.427 359.36L570.859 359.469ZM660.051 332.148L660.773 332.35L660.844 332.095L660.739 331.852L660.051 332.148Z" fill="#FFCF77" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M594.297 319.799L638.251 220.238C638.251 220.238 644.892 203.323 656.17 203.323C667.447 203.323 769.709 206.525 769.709 206.525C769.709 206.525 790.637 209.194 783.879 220.238C777.122 231.283 676.639 436.797 676.639 436.797H634.023V426.413L681.468 413.148C681.468 413.148 690.103 403.987 676.639 403.987C663.175 403.987 584.844 400.99 584.844 400.99L659.535 390.031L696.482 375.822L691.047 368.352L659.535 363.851L556.913 368.352L584.844 358.907L647.259 345.659C647.259 345.659 659.535 337.015 659.535 328.537C659.535 320.06 626.65 316.799 626.65 316.799L594.297 319.799Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M396.011 13.7898C396.44 12.6198 398.188 12.7748 398.221 14.0888C398.91 42.1418 391.926 76.4228 369.478 95.3718C357.955 105.099 342.72 109.55 328.729 114.666L327.151 115.248L302.433 124.456C295.877 126.898 288.805 130.655 283.014 127.205C287.7 138.825 291.634 150.765 297.341 161.964C304.445 175.905 313.034 188.66 323.546 200.261C365.192 246.22 431.102 260.239 490.249 246.773C520.706 239.838 550.343 226.696 571.122 202.726C586.914 184.506 595.987 160.052 598.125 135.931C597.5 136.031 596.845 136.027 596.172 135.879C588.688 134.246 581.133 130.235 574.548 126.301L573.914 125.921C567.578 122.107 560.974 117.736 556.427 111.81C551.911 105.925 547.172 86.7276 547.172 86.7276C545.881 79.513 544.669 65.1398 544.877 57.8468C544.896 57.1588 547.949 56.7528 548.275 57.4678C551.096 63.659 552.008 77.2625 554.185 83.7063L554.625 84.9928C556.95 91.7218 558.944 99.9148 563.765 105.355C572.816 115.57 586.472 119.894 598.661 125.017C599.536 113.472 617.976 113.741 617.742 125.782C617.729 126.435 617.7 127.085 617.677 127.736C619.131 128.535 620.53 129.45 621.837 130.332L623.113 131.198C627.941 134.482 632.806 137.603 637.947 140.389C647.9 145.784 658.437 150.061 668.635 154.958C678.952 159.913 688.601 165.816 697.61 172.881C701.841 176.198 705.899 179.732 709.747 183.486L710.791 184.516C714.454 188.164 719.22 192.243 721.307 197.037C721.767 198.094 724.071 200.552 725.322 200.634C744.698 201.905 764.032 203.698 783.287 206.388C788.272 207.084 790.242 209.653 788.4 213.808C782.068 228.086 757.279 285.107 750.687 300.41C751.457 311.652 750.417 324.887 751.111 336.132C752.126 352.542 753.455 368.946 755.048 385.31C760.748 443.847 769.389 502.099 777.197 560.38C781.105 589.548 784.668 618.759 788.185 647.976C789.961 662.741 791.468 677.521 792.628 692.349C793.111 698.527 793.549 704.71 793.936 710.895L794.269 716.382C794.73 723.286 795.785 729.88 791.513 735.806C789.576 738.494 785.152 740.008 782.605 736.954C779.403 733.115 778.213 730.247 777.907 725.204C777.673 721.344 777.617 717.466 777.441 713.602C777.061 705.226 776.583 696.854 776.023 688.487C774.906 671.761 773.631 655.038 772.154 638.34C766.977 579.787 757.138 521.675 750.591 463.266C747.291 433.82 744.947 404.319 743.706 374.71C743.085 359.924 742.86 345.139 743.006 330.34C743.061 324.812 743.323 319.31 743.702 313.82C733.894 336.101 723.583 358.167 712.803 379.94L710.248 385.096C703.416 398.858 696.401 412.671 688.19 425.645L686.779 427.857C683.453 433.127 678.909 441.436 672.843 443.099C668.618 444.258 663.455 443.442 659.123 443.359C654.824 443.277 650.52 443.259 646.224 443.085C641.405 442.891 636.807 442.258 632.15 441.002C631.376 440.794 630.644 440.568 629.977 440.28C625.285 447.958 617.313 453.806 609.162 457.213C602.633 459.942 595.79 461.812 588.936 463.544L586.517 464.151C579.169 465.982 570.763 466.852 566.619 473.948L565.656 475.592C562.575 480.827 559.619 485.424 554.52 489.177C549.031 493.218 542.528 495.759 536.05 497.737C529.417 499.761 522.629 501.311 515.894 502.971L514.059 503.427C509.613 504.54 505.127 505.561 500.707 506.772C498.822 507.288 496.903 507.82 495.053 508.456C492.887 509.2 491.313 510.362 489.604 511.626C488.068 516.992 481.503 519.906 476.105 519.532C473.27 519.336 470.727 518.374 468.413 516.964C464.374 520.402 459.927 523.482 455.81 526.667C450.045 531.127 444.257 535.556 438.437 539.944C426.437 548.989 414.346 557.914 402.129 566.663C380.444 582.193 358.29 597.012 335.757 611.282C326.362 617.232 316.904 623.172 307.353 628.97L308.372 629.348L310.394 630.112C315.173 631.896 320.498 634.779 321.424 640.354C322.158 644.776 319.688 647.824 315.322 648.364C310.133 649.005 306.095 645.339 302.864 641.839C301.438 640.296 299.842 638.862 298.476 637.273C297.919 636.624 297.491 635.876 297.114 635.092C287.688 640.646 278.162 646.013 268.485 651.032L266.063 652.28C242.066 664.551 218.709 677.995 194.508 689.917C188.195 693.027 180.498 696.391 172.475 698.687C174.604 706.939 174.571 715.999 174.625 724.374C174.676 732.536 161.705 732.497 161.979 724.374L162.111 720.451C162.347 713.855 162.733 707.007 164.298 700.589C140.659 704.509 117.045 695.989 112.648 693.431C107.795 690.609 103.39 686.093 99.7238 681.904C91.8788 672.937 86.4348 662.189 81.6048 651.376C71.2588 628.22 63.9288 603.468 58.5698 578.714C38.8128 487.448 47.3108 389.766 79.3958 302.28C87.4118 280.421 96.8758 259.044 107.721 238.441L109.067 235.894C119.889 215.519 131.917 195.222 147.196 177.884C163.11 159.825 182.741 145.78 204.115 134.878C214.546 129.558 225.279 124.947 236.249 120.861C238.011 120.204 239.785 119.615 241.563 119.054C252.995 111.766 266.869 104.794 280.748 105.068C281.691 105.085 282.455 105.443 283.025 105.982C283.694 106.099 284.363 106.241 285.033 106.436C286.512 106.865 288.074 108.486 287.862 110.151L287.79 110.705C287.751 110.975 287.701 111.237 287.617 111.492C288.113 111.566 288.6 111.684 289.077 111.847C302.356 108.097 315.421 102.362 328.379 97.7358L331.33 96.6937C342.183 92.8904 353.317 89.1625 362.22 81.6358C371.077 74.1478 377.737 64.4488 382.552 53.9638C388.484 41.0458 391.14 27.0518 396.011 13.7898ZM661.87 695.11C664.499 693.154 667.608 695.424 668.592 697.845C671.822 705.79 670.226 718.136 665.673 725.161C660.955 732.439 649.662 729.566 649.389 720.75C649.104 711.557 654.448 700.635 661.87 695.11ZM689.028 475.723C689.264 474.69 690.868 474.7 691.108 475.723C693.297 485.046 693.246 495.085 693.889 504.644L693.963 505.704C694.734 516.245 695.382 526.815 695.844 537.374C696.751 558.149 697.835 578.925 699.05 599.684C699.653 609.978 700.299 620.271 700.988 630.561C703.146 629.358 705.369 628.302 707.673 627.37C711.125 625.975 714.486 625.815 718.195 625.853C722.712 625.899 726.113 629.872 725.515 634.297C724.863 639.116 720.62 641.181 716.214 640.493C711.334 639.729 706.433 638.546 701.506 638.056C702.055 646.012 702.622 653.966 703.223 661.915C704.02 672.44 705.059 682.952 705.789 693.481C705.859 694.485 705.934 695.491 706.011 696.5C708.949 694.972 712.069 694.19 715.605 693.227L716.525 692.969C721.659 691.495 727.151 689.456 731.903 692.908C735.097 695.229 735.735 699.049 733.089 702.11C729.077 706.755 723.141 705.854 717.599 705.617L714.618 705.508C711.808 705.398 709.216 705.218 706.619 704.509C707.096 711.368 707.347 718.253 706.506 725.012C706.051 728.665 701.242 729.624 699.969 725.896C696.644 716.157 695.957 705.654 694.74 695.453C693.604 685.926 692.913 676.329 692.169 666.759L691.943 663.889C690.269 642.835 688.93 621.77 687.952 600.673C686.973 579.579 686.385 558.489 686.151 537.374C686.045 527.787 686.204 518.165 686.579 508.579L686.698 505.704C687.13 495.845 686.828 485.383 689.028 475.723ZM249.605 696.665C249.733 695.318 250.812 693.644 252.417 693.853C253.896 694.045 255.42 693.953 256.883 694.197C258.814 694.517 260.368 695.658 262.164 696.376C265.083 697.543 268.265 698.146 271.26 699.101C276.879 700.894 279.941 706.809 277.614 712.333C275.167 718.14 269.018 719.458 263.705 717.021C259.517 715.1 256.395 712.03 253.579 708.478L252.781 707.464C251.568 705.938 250.191 704.235 249.682 702.386C249.187 700.584 249.431 698.498 249.605 696.665ZM522.602 669.365C529.601 668.38 535.579 670.772 542.055 673.027L542.581 673.21C549.172 675.485 558.789 677.06 562.167 683.806C564.205 687.874 562.622 693.276 557.826 694.48C550.23 696.384 543.42 690.833 537.139 687.096L536.809 686.901C530.747 683.35 524.49 680.365 520.619 674.24C519.586 672.606 520.482 669.664 522.602 669.365ZM278.283 112.772C275.479 113.4 272.675 113.955 269.874 114.489C259.219 120.2 248.877 126.126 237.876 131.214C226.204 136.613 214.575 142.189 203.488 148.72C181.089 161.915 162.624 179.071 147.366 200.1C121.01 236.425 101.405 278.316 87.3738 320.821C83.7688 331.741 80.5428 342.784 77.6888 353.92C82.7348 349.253 88.7088 346.384 95.4078 343.927C98.2468 342.886 101.781 344.648 103.22 347.106C103.867 348.21 104.232 349.302 104.165 350.597C104.016 353.455 102.156 356.702 99.0858 357.268C91.9288 358.587 84.9698 361.155 78.0688 363.415C77.0228 363.758 76.1238 363.628 75.4058 363.224C68.5548 392.243 64.2688 421.859 62.7508 451.654C61.4668 476.878 62.2588 502.3 65.0528 527.489C67.1998 526.524 69.2998 525.619 71.6538 525.071C74.7068 524.361 77.7098 523.497 80.6878 522.521C89.2818 519.702 93.2018 533.89 84.4178 536.052C81.1488 536.857 77.8598 537.525 74.5288 538.014C71.6258 538.44 69.0578 538.252 66.3208 537.806C68.4118 553.521 71.2678 569.122 74.9058 584.501L75.7086 587.866C80.4342 607.509 85.942 627.334 93.9068 645.897C97.8138 655.003 102.987 663.651 109.374 671.243C112.512 674.976 115.995 678.176 119.793 681.208C122.955 683.733 133.703 689.208 146.433 689.208C159.162 689.208 162.608 688.003 169.031 685.793C181.732 681.422 193.791 674.442 205.702 668.226L206.934 667.586C212.201 664.861 217.448 662.097 222.681 659.307C222.02 653.972 223.177 649.491 225.957 644.563C228.962 639.232 236.408 641.887 236.961 647.339L236.979 647.548C237.063 648.777 237.269 650.03 237.525 651.279C272.516 632.112 306.766 611.602 340.471 590.23C362.182 576.462 383.662 562.284 404.828 547.691C415.409 540.396 425.898 532.97 436.283 525.398C441.723 521.431 447.138 517.433 452.528 513.4C454.773 511.72 456.975 509.956 459.225 508.267C458.678 507.583 458.145 506.9 457.629 506.224C449.227 495.224 443.776 482.112 441.06 468.585C439.42 460.423 438.628 451.95 438.387 443.628L438.281 440.01C438.115 433.913 438.071 427.532 439.195 421.626C437.666 422.466 436.104 423.29 434.547 424.172C428.96 427.337 423.368 430.495 417.767 433.638C406.551 439.929 395.302 446.148 383.91 452.116C363.562 462.777 343.014 472.917 321.911 482.005L311.643 486.431C293.821 494.096 275.855 501.623 257.326 507.321C246.875 510.534 231.204 514.512 220.603 516.964C220.603 516.964 233.379 529.002 224.133 533.143C214.887 537.284 207.227 521.4 206.922 519.961C202.039 520.982 188.094 523.452 188.094 523.452C174.841 526.01 161.992 531.074 150.147 537.556C146.029 539.809 144.882 535.432 149.245 532.381C162.002 523.463 176.883 518.416 192.238 514.181L192.992 513.974C198.625 512.431 204.248 510.823 209.859 509.157C209.242 506.925 208.886 504.609 208.957 502.055C209.115 496.366 209.618 490.657 209.92 484.972C210.554 473.04 211.363 461.146 212.311 449.236C212.675 444.648 213.083 440.047 213.55 435.45C210.541 433.836 207.946 431.695 204.591 430.642L204.025 430.477C200.437 429.51 201.648 424.887 204.835 424.491C207.722 424.134 210.595 424.298 213.441 424.909C213.882 425.005 214.299 425.112 214.697 425.233C215.22 420.975 215.8 416.728 216.459 412.505C218.202 401.347 219.435 389.591 223.063 378.87C223.332 378.076 224.511 377.792 224.948 378.624C230.226 388.664 230.409 400.981 231.004 412.162L231.078 413.498C231.779 425.696 231.819 438.013 231.593 450.228C231.361 462.816 230.93 475.372 230.365 487.949C230.138 493.013 230.147 498.267 229.284 503.11C260.692 492.9 291.545 480.679 321.118 466.208C341.979 456.001 362.66 445.385 383.105 434.37C393.349 428.852 403.641 423.423 413.874 417.884C417.459 415.942 421.042 413.995 424.623 412.044L429.994 409.116C435.02 406.373 439.215 403.644 445.069 403.452C446.814 403.394 448.379 404.212 449.49 405.449C452.636 403.218 456.272 401.848 460.088 401.88C465.832 393.946 471.664 386.077 477.728 378.379L482.208 372.679C489.962 362.846 498.175 352.864 508.063 345.38C512.476 342.041 517.33 339.536 522.392 337.466C521.201 337.175 520.035 336.59 518.996 335.626C514.161 331.143 513.495 322.816 512.513 316.56C511.494 310.073 511.888 304.267 512.894 297.801C513.285 295.288 517.447 294.765 518.463 297.073C520.604 301.939 522.871 306.603 524.819 311.524L525.394 313.009C527.485 318.549 531.939 324.377 531.645 330.387C531.565 332.034 531.013 333.469 530.161 334.623C534.41 333.212 538.72 331.954 542.964 330.642C556.321 326.515 569.729 322.504 583.343 319.302C586.967 318.45 590.609 317.659 594.266 316.933C596.182 307.837 598.974 298.909 602.266 290.142C599.149 288.545 597.131 285.868 594.447 283.487C591.935 281.257 590.209 278.542 588.066 275.982C586.115 273.653 587.211 269.445 590.717 269.581L591.71 269.622C595.342 269.791 598.86 270.167 602.154 271.862L603.327 272.467C604.937 273.302 606.698 274.26 608.267 275.391C610.318 270.672 612.45 265.998 614.606 261.371L617.403 255.388C624.655 239.816 631.888 223.652 640.993 209.152C645.041 202.706 650.428 198.681 658.16 198.058C666.122 197.417 674.4 198.245 682.373 198.53C691.616 198.861 700.856 199.253 710.09 199.738C707.723 197.259 705.563 194.499 703.186 192.12C699.24 188.175 695.071 184.435 690.689 180.978C682.016 174.137 672.48 168.5 662.575 163.646C652.668 158.791 642.47 154.558 633.17 148.56C627.285 144.765 622.025 139.989 617.226 134.821C614.205 167.411 598.468 197.689 574.826 220.437C550.27 244.062 516.336 257.042 483.14 262.563C449.28 268.195 413.941 266.128 381.55 254.359C364.849 248.29 348.831 239.62 334.546 228.745C334.389 229.691 334.2 230.626 333.829 231.505C333.331 232.686 332.722 233.692 332.024 234.73L330.778 236.55C329.993 237.695 329.192 238.83 328.301 239.892C326.142 242.463 323.083 243.589 319.788 243.577C313.479 243.556 308.701 237.37 310.399 231.252C311.466 227.407 313.749 225.093 317.313 223.588C318.439 223.112 319.587 222.713 320.742 222.321L321.609 222.027C322.776 221.628 323.934 221.247 325.135 221.026C318.371 215.056 312.095 208.564 306.475 201.558C288.848 179.587 271.462 148.816 277.355 119.637C277.457 119.136 277.908 118.821 278.394 118.741C278.736 116.693 279.826 114.712 281.319 113.38C280.314 113.116 279.301 112.912 278.283 112.772ZM461.322 617.267C464.813 615.326 468.419 619.939 465.582 622.788L461.346 627.025C457.415 630.976 453.589 634.968 450.224 639.471L449.409 640.571C444.867 646.75 440.023 653.91 432.581 656.22C423.579 659.013 414.928 648.048 420.141 640.038C424.695 633.038 433.464 630.397 441.024 627.503C448.176 624.765 454.636 620.984 461.322 617.267ZM170.921 584.964C172.972 582.279 178.32 583.693 176.919 587.493C172.368 599.831 170.513 616.655 159.019 624.852C155.311 627.495 149.486 626.28 146.433 623.228C142.964 619.759 142.825 614.874 144.809 610.642C147.228 605.479 153.18 601.736 157.352 597.804L157.726 597.446C162.214 593.087 167.068 590.008 170.921 584.964ZM651.308 599.164C654.969 597.586 664.51 594.518 667.338 598.149C667.47 598.282 667.583 598.427 667.674 598.587C668.367 599.793 668.47 601.492 667.674 602.688C664.379 607.64 660.947 611.336 656.262 614.86L655.737 615.251C650.637 619 645.846 623.404 639.632 625.095C631.019 627.439 625.003 616.655 631.052 610.358C635.925 605.286 643.365 602.652 649.822 599.823L651.308 599.164ZM305.424 528.665C303.983 526.062 306.927 522.867 309.593 524.496C317.198 529.144 326.057 532.631 334.599 535.136C338.056 536.15 341.175 539.654 340.918 543.435L340.878 544.007C340.776 545.343 340.592 546.669 339.743 547.78C336.768 551.671 332.512 553.17 327.967 550.867C317.838 545.735 310.905 538.57 305.424 528.665ZM527.701 520.779C527.516 519.684 528.317 518.839 529.43 519.05C535.857 520.268 541.793 523.372 547.312 526.94C550.272 528.854 553.127 530.956 556.08 532.889C559.728 535.275 561.094 537.246 561.633 541.626C561.989 544.516 559.29 547.156 556.815 547.954C550.07 550.129 542.341 542.991 537.771 538.354L537.565 538.145C532.781 533.269 528.835 527.503 527.701 520.779ZM720.732 513.204C719.267 509.248 724.316 505.968 727.618 507.911C730.727 509.74 734.1 511.257 737.033 513.353C739.729 515.28 742.186 517.563 744.771 519.652L746.048 520.663C750.788 524.473 758.612 533.897 751.834 539.364C745.384 544.567 736.832 537.922 732.502 533.064L732.2 532.72C729.709 529.843 726.638 526.717 724.831 523.356C723.13 520.193 721.976 516.562 720.732 513.204ZM657.122 206.957C649.043 208.525 645.75 218.497 642.348 224.997C634.319 240.337 626.935 255.958 619.519 271.599C617.236 276.41 615.013 281.258 612.77 286.097C612.633 286.476 612.457 286.849 612.25 287.218C607.655 297.111 602.923 306.939 597.392 316.33C602.454 315.382 607.542 314.574 612.649 313.938C612.391 309.129 615.684 302.694 617.312 298.646L617.448 298.305C619.479 293.117 621.608 284.945 626.836 282.253C628.578 281.357 630.441 282.48 630.575 284.398C630.971 290.108 625.386 296.643 622.656 301.489C621.005 304.421 619.396 307.366 617.828 310.343C617.24 311.457 616.749 312.552 616.146 313.534C618.78 313.249 621.417 312.995 624.061 312.81L625.784 312.692C635.586 312.046 645.997 311.861 654.853 316.695C663.07 321.178 667.27 330.749 662.756 339.464C657.132 350.321 644.748 351.76 633.858 352.64C620.256 353.737 606.623 355.718 593.117 357.65C579.147 359.648 565.992 364.798 552.23 367.445C550.95 367.691 550.153 366.017 551.327 365.302C562.182 358.694 575.38 355.058 587.516 351.354L588.498 351.054C595.081 349.032 601.515 346.722 608.325 345.575C614.936 344.462 621.588 343.56 628.256 342.874L628.903 342.814C636.245 342.198 654.974 342.409 654.183 331.539C653.659 324.345 641.965 323.103 636.627 323.017C612.153 322.625 587.503 329.121 564.244 336.081L559.051 337.638C549.527 340.503 539.99 343.452 530.645 346.811C520.055 350.617 511.712 356.552 503.999 364.675C495.447 373.682 487.164 382.892 478.292 391.595C472.699 397.082 467.034 402.471 461.323 407.816C460.033 409.486 459.001 411.303 458.286 413.66C457.078 417.642 457.356 421.343 457.812 425.433C458.962 435.762 459.216 446.198 460.657 456.495C461.993 466.034 463.861 475.923 467.822 484.772C469.39 488.276 471.432 491.718 473.756 494.796L475.632 497.235C476.45 498.295 477.365 499.454 478.326 500.545C479.736 498.825 481.776 497.706 484.147 497.986C489.186 498.579 493.147 498.437 498.09 497.279C501.916 496.384 505.712 495.335 509.521 494.364C517 492.456 524.549 490.72 531.952 488.529L533.224 488.145C538.741 486.453 544.26 484.334 548.852 480.772C554.187 476.633 555.828 470.662 559.78 465.499C568.218 454.474 586.452 454.705 598.798 451.685C609.29 449.119 619.387 445.07 626.648 437.458L627.072 437.004C626.75 435.646 627.272 434.113 628.534 433.409L628.809 433.256C629.301 432.981 629.831 432.867 630.351 432.878C631.025 431.888 631.675 430.866 632.266 429.778C632.752 428.881 633.967 429.541 633.808 430.427C633.713 430.956 633.581 431.472 633.456 431.989C640.489 430.18 648.214 430.525 655.355 430.53L664.622 430.497C666.226 430.478 668.616 430.397 668.829 430.301L669.047 430.204C669.625 429.953 668.804 430.367 669.208 429.832C669.653 429.241 670.089 428.643 670.519 428.04C672.055 425.891 673.508 423.677 674.932 421.443C659.413 425.396 643.337 427.856 627.491 429.907C610.491 432.11 593.267 433.638 576.115 433.654C571.387 433.659 571.43 426.521 576.115 426.342C594.277 425.649 612.344 424.687 630.384 422.36C639.713 421.155 649.003 419.644 658.241 417.876C661.807 417.195 665.365 416.471 668.915 415.707L671.575 415.126C673.244 414.757 677.96 414.226 680.26 412.683C680.712 411.906 681.164 411.131 681.612 410.355C681.392 407.63 674.464 407.995 672.84 407.991C668.235 407.982 663.629 408.019 659.023 408.031C649.812 408.058 640.602 407.978 631.39 407.904C612.986 407.754 594.512 407.112 576.123 407.898C571.659 408.088 569.314 400.929 573.726 399.046C593.204 390.73 614.826 388.923 635.624 386.366C646.561 385.023 657.504 383.471 668.196 380.751L670.839 380.078C677.556 378.356 684.973 376.257 690.629 372.154C682.128 368.715 671.561 369.109 662.749 368.622L662.075 368.583C649.736 367.825 637.375 367.437 625.013 367.419C599.719 367.384 574.417 368.28 549.151 369.479C548.517 369.509 548.386 368.508 549.002 368.374C574.971 362.708 601.364 359.978 627.94 359.558C640.317 359.362 652.7 359.537 665.066 360.084L669.604 360.294C680.148 360.748 691.847 360.871 700.669 367.238C702.014 368.208 702.723 369.447 702.834 370.758C714.665 347.175 725.592 323.099 736.563 299.183C745.092 280.587 753.303 261.835 762.143 243.384L765.005 237.415C768.837 229.45 772.763 221.484 777.122 213.808C760.821 211.629 744.429 210.116 728.027 208.958C713.081 207.901 664.317 205.562 657.122 206.957ZM649.904 462.552C651.763 461.519 654.61 462.361 655.068 464.653C655.409 466.36 655.992 468.255 655.992 470.001C655.992 472.093 655.243 474.366 654.844 476.412C653.927 481.118 652.799 484.942 650.406 489.134C648.909 491.757 645.885 493.538 642.847 493.468C640.441 493.413 638.31 492.767 636.659 490.905C634.68 488.674 633.323 485.393 634.407 482.389C637.25 474.519 642.474 466.678 649.904 462.552ZM255.607 454.7C259.957 447.081 270.268 440.272 279.266 440.946C292.777 441.958 295.534 460.15 282.453 464.491C274.634 467.085 263.877 464.421 257.037 460.151C255.193 459.001 254.517 456.609 255.607 454.7ZM116.747 428.671C115.759 427.235 117.392 425.594 118.864 425.917C122.129 426.634 125.649 426.947 128.847 427.921C132.122 428.917 135.292 430.569 138.536 431.706C145.332 434.086 152.591 435.281 159.168 438.155C161.797 439.304 163.865 443.111 163.622 445.918L163.56 446.574C163.415 447.968 163.174 449.183 162.394 450.456C160.301 453.874 156.154 455.64 152.24 454.588C144.979 452.638 137.884 447.627 131.693 443.464L130.549 442.704C127.845 440.921 124.936 439.058 122.756 436.765C120.481 434.37 118.611 431.383 116.747 428.671ZM366.345 400.962C365.509 397.952 369.254 395.963 371.437 397.997C375.799 402.061 380.36 405.829 384.632 409.996L384.919 410.28C387.978 413.354 392.429 419.278 388.45 423.256C383.352 428.354 376.253 420.79 373.518 416.848C370.049 411.848 367.968 406.809 366.345 400.962ZM700.15 376.075C693.679 382.929 683.709 386.08 674.931 388.691C664.523 391.784 653.799 393.632 643.064 395.152C632.691 396.62 622.398 397.933 612.19 399.618C619.912 399.714 627.633 399.771 635.337 399.909C644.222 400.07 653.102 400.262 661.984 400.52C668.453 400.708 676.043 399.821 682.19 402.225C683.298 402.657 684.333 403.257 685.237 403.987C690.405 394.798 695.358 385.482 700.15 376.075ZM301.009 311.981C307.763 309.836 314.114 306.989 321.274 307.728C323.177 307.923 324.54 309.776 323.501 311.606C320.108 317.577 314.59 320.948 309.159 324.942L308.68 325.296C302.735 329.718 296.352 333.747 289.887 337.376C278.756 343.622 268.781 325.745 280.022 320.499C286.786 317.342 293.891 314.243 301.009 311.981ZM422.609 296.46C432.942 297.14 443.269 297.602 453.615 298.02C465.599 298.505 461.57 316.946 451.559 313.214C441.669 309.526 431.778 305.885 421.799 302.445C418.761 301.399 419.006 296.409 422.416 296.453L422.609 296.46ZM157.582 263.653C160.26 263.465 162.961 264.05 165.643 264.31L168.497 264.587C174.38 265.172 179.896 265.894 185.506 268.288C195.858 272.706 190.298 289.347 179.906 288.965C172.225 288.683 165.657 285.384 159.171 281.544C153.501 278.187 150.025 273.987 146.196 268.716C144.928 266.97 146.695 265.013 148.422 264.837C151.464 264.527 154.539 263.866 157.582 263.653ZM676.5 229.669C674.787 240.358 670.535 250.376 664.128 259.098C660.908 263.481 655.255 263.647 652.064 259.098C647.549 252.663 650.333 245.29 653.734 239.109L654.74 237.299C656.263 234.586 658.601 230.628 661.274 227.894L661.319 227.614C662.751 216.423 678.265 218.657 676.5 229.669ZM258.565 161.071C261.141 158.751 265.885 159.448 266.721 163.224C267.891 168.512 268.603 174.47 267.837 179.838C267.422 182.747 267.266 186.014 266.122 188.725C264.892 191.64 262.526 193.882 260.297 196.074C255.847 200.45 246.466 199.003 245.274 192.108L245.123 191.262C244.523 188 243.756 184.513 244.644 181.279C245.314 178.839 246.812 176.351 248.051 174.088L248.312 173.606C250.794 168.984 254.663 164.583 258.565 161.071ZM620.656 172.322L621.588 172.331C628.779 172.473 641.924 174.224 641.994 183.109C642.01 185.203 640.459 187.373 638.38 187.855C634.082 188.851 631.305 186.312 628.242 183.746C625.737 181.648 622.816 179.973 619.784 178.767C616.508 177.464 616.721 172.316 620.656 172.322Z" fill="black" />
        </>
    )
}
