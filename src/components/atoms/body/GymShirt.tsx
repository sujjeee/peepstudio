"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
export default function GymShirt() {
    const { data } = usePeep()
    return (
        <>
            <path fillRule="evenodd" clipRule="evenodd" d="M56.573 689.859C55.212 689.903 55.641 689.506 56.141 689.41C56.285 689.559 56.429 689.71 56.573 689.859ZM96.758 719.732C134.785 724.24 172.859 720.116 210.699 715.981C287.359 710.298 363.48 726.854 440.291 721.805C536.283 717.76 632.536 710.164 728.209 722.965C754.672 723.573 796.88 730.714 787.283 689.75C774.677 584.431 757.823 479.643 739.769 375.135C724.468 316.546 723.362 215.206 681.464 174.463C675.338 168.87 653.367 150.778 647.558 148.349C618.679 137.597 566.617 129.207 545.138 106.415C527.74 76.9773 535.833 36.8063 508.78 13.1063C485.07 -6.25168 433.32 -2.15968 407.971 12.3763C387.971 25.3443 384.838 50.5323 372.376 69.1593C369.302 73.6223 362 84.3811 357.877 87.8521C347.84 97.5149 312.589 107.667 302.409 109.532C244.962 121.304 216.318 128.577 171.135 166.751C53.077 287.276 69.812 500.446 37.145 658.052C35.808 675.378 25.275 698.89 44.067 710.045C60.252 717.798 79.282 716.954 96.758 719.732Z" fill={data.skinColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M531.968 66.3479C532.109 65.9379 532.768 65.8679 532.868 66.3479C534.479 73.7169 537.498 81.7979 540.558 88.7079C543.668 95.7079 547.918 102.138 553.288 107.598C564.538 119.038 579.008 124.258 594.878 124.268L595.258 124.278C595.331 123.745 595.414 123.211 595.49 122.678L595.598 121.878C597.048 110.918 610.058 111.238 612.598 119.508C613.888 119.918 615.178 120.328 616.458 120.758L616.714 120.85C618.869 121.67 626.168 125.305 627.508 124.338C630.458 122.217 633.828 124.648 634.948 127.358C636.779 131.795 637.084 137.279 637.679 142.093L637.758 142.717L637.848 143.467C679.598 154.318 703.028 196.088 714.988 234.568C721.468 255.428 725.708 276.948 729.968 298.348C734.528 321.238 738.729 344.188 743.178 367.088C751.948 412.217 760.248 457.448 767.458 502.848L769.549 516.032C776.154 557.779 782.588 599.502 787.998 641.438C790.918 664.048 793.658 686.678 796.298 709.328C796.771 713.367 797.24 717.407 797.705 721.451L798.399 727.518C799.018 732.958 800.068 738.338 797.378 743.428C791.548 754.467 773.888 754.387 772.888 740.248C772.689 737.438 773.638 735.288 775.208 733.788L775.186 733.551C775.171 733.409 775.155 733.305 775.149 733.258C774.628 730.448 774.488 727.478 774.168 724.637C773.468 718.578 772.788 712.518 772.098 706.448C770.768 694.887 769.428 683.328 768.038 671.778C765.229 648.348 762.258 624.948 759.109 601.568L755.987 578.451C745.547 501.394 734.666 424.353 720.348 347.908C716.448 327.098 712.439 306.318 708.328 285.548C704.428 265.878 700.048 246.298 693.508 227.308C682.828 196.288 664.158 167.238 638.238 146.878C638.638 150.768 638.928 154.678 639.298 158.568C640.248 168.558 641.258 178.538 642.278 188.518C645.988 224.678 651.018 260.778 659.598 296.137C663.848 313.658 669.028 330.948 675.338 347.838C678.448 356.158 681.838 364.368 685.558 372.428C689.238 380.398 695.689 388.918 696.078 397.798C696.258 401.908 691.958 405.558 687.979 405.118C689.838 421.478 690.888 438.008 691.998 454.328C693.618 477.967 694.908 501.648 696.798 525.268C700.178 567.578 704.418 609.828 708.858 652.038C709.738 660.406 710.695 668.768 711.642 677.128L712.434 684.148C712.968 688.698 713.774 694.152 711.358 698.188C713.518 703.398 714.998 708.748 715.859 714.328C716.948 721.268 712.979 729.048 704.878 728.748C703.958 728.717 703.038 728.637 702.118 728.538C694.608 730.278 687.118 731.808 679.318 731.858C669.358 731.928 659.378 731.728 649.418 731.658C630.149 731.528 610.878 731.398 591.608 731.238C521.848 730.678 452.058 730.708 382.308 729.588L354.401 729.145C328.817 728.733 303.23 728.259 277.658 727.328C260.048 726.688 242.439 726.038 224.838 725.328L221.255 725.191C205.725 724.626 190.177 724.335 174.818 721.958C174.433 721.893 174.267 721.493 174.326 721.142L174.348 721.048L173.678 720.898C173.288 722.578 165.188 715.518 165.248 710.828C161.888 706.458 163.458 699.478 163.818 694.418C164.168 689.488 164.608 684.548 164.998 679.618C165.828 669.088 166.538 658.548 167.388 648.018C170.818 605.558 173.778 562.988 175.698 520.438C176.668 498.988 177.448 477.528 178.268 456.078C178.637 446.312 179.152 436.537 180.109 426.816L180.358 424.387C181.408 414.528 181.308 403.928 184.938 394.637C184.988 394.508 185.158 394.508 185.208 394.637C188.878 403.678 189.228 414.188 189.968 424.108C190.098 424.068 190.228 424.048 190.368 424.018C195.438 421.608 200.558 419.438 205.358 416.458C206.008 416.058 206.638 415.637 207.278 415.228C214.828 392.128 223.578 369.408 231.628 346.458C257.638 272.248 271.998 193.217 275.178 114.638C255.338 127.428 233.73 137.379 212.726 148.064L210.758 149.068C190.068 159.648 170.258 171.658 155.528 190.008C142.688 205.988 134.298 225.458 126.448 244.228C118.018 264.398 110.418 284.928 103.468 305.648C89.3682 347.688 78.4482 390.758 69.9282 434.268C61.5182 477.208 55.5082 520.467 51.4882 564.028C49.4382 586.248 47.5682 608.488 45.9982 630.758C45.1982 642.028 44.4882 653.308 43.8282 664.598C43.5082 670.078 43.2682 675.568 42.9082 681.048C42.6882 684.208 42.6482 687.467 41.6082 690.467C40.7382 692.967 39.1982 695.058 37.7582 697.268C35.1282 701.298 28.4882 702.028 26.0182 697.268L24.9487 695.206C23.533 692.461 22.2402 689.696 22.0482 686.528C21.8682 683.528 22.2382 680.398 22.4082 677.387C22.7382 671.298 23.1182 665.198 23.4982 659.108C24.2982 646.298 25.1882 633.488 26.1882 620.688C28.1782 595.048 30.7382 569.478 33.9582 543.958C45.2882 454.328 61.6482 365.168 92.8682 280.108C100.588 259.078 109.198 238.217 118.918 218.028C128.318 198.508 140.208 180.078 157.468 166.638C173.356 154.264 191.825 145.981 210.175 137.942L212.468 136.938C233.038 127.948 253.568 118.268 275.048 111.588C274.568 111.648 274.098 111.708 273.689 111.848C273.218 111.998 272.939 111.388 273.229 111.058C274.448 109.708 274.958 108.318 276.359 106.988C277.326 106.068 278.333 105.199 279.368 104.361L280.857 103.176C283.582 101.013 286.447 98.8023 289.878 98.0479C294.729 96.9879 297.109 101.398 295.748 104.848C296.448 103.938 298.328 104.208 298.818 105.458C314.778 146.618 325.258 190.188 346.738 229.078C362.598 257.808 383.878 284.338 412.118 301.688C427.288 311.008 444.649 318.168 462.578 319.298C478.678 320.308 494.168 316.217 507.859 307.768C534.399 291.398 551.729 262.658 564.088 234.808C577.678 204.148 587.378 171.478 593.078 138.358C575.018 138.608 555.958 130.368 543.948 116.938C537.628 109.868 532.918 101.258 530.528 92.0779C528.118 82.8179 528.888 75.2079 531.968 66.3479ZM380.458 42.2976C382.659 38.3676 387.539 37.0676 391.529 38.6676C395.958 40.4476 397.289 44.7476 396.659 49.1176C395.928 54.2376 392.638 59.7686 390.079 64.2376C387.399 68.9176 383.949 73.2286 380.378 77.2576C373.659 84.8576 366.468 91.7076 357.939 97.3086C349.449 102.878 339.848 107.048 329.979 109.378L327.633 109.925C319.955 111.681 309.033 113.692 302.638 109.519C302.329 109.318 302.338 108.908 302.638 108.708C306.098 106.298 310.729 105.868 314.708 104.729C319.048 103.479 323.399 102.059 327.548 100.278C335.739 96.7576 343.579 92.1176 350.558 86.5776C357.569 81.0186 364.348 74.3886 369.039 66.7376C371.399 62.8986 373.409 58.8676 375.338 54.8086C377.289 50.7376 378.268 46.2176 380.458 42.2976Z" fill="black" />
        </>
    )
}
