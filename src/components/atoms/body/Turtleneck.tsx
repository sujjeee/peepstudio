"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'

export default function Turtleneck() {
    const { data } = usePeep()
    return (
        <>
            <path fillRule="evenodd" clipRule="evenodd" d="M266.813 118.704C316.598 107.739 346.126 107.739 362.834 90.7514C379.541 73.7643 382.573 44.6057 389.505 22.0917C393.324 9.68675 430.74 -1.58116 467.035 0.182979C496.612 1.6206 526.421 14.1097 528.723 22.0917C533.851 39.8687 542.097 115.966 569.215 127.657C596.333 139.348 654.226 128.689 670.778 156.609C687.331 184.529 741.689 298.341 741.689 324.861C741.689 351.38 210.243 343.271 210.243 343.271C210.243 343.271 217.028 129.669 266.813 118.704Z" fill={data.skinColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M37.7854 736.44C37.9454 736.99 38.5454 736.98 37.7854 736.44V736.44ZM34.8354 734.24C34.8854 734.28 34.9454 734.32 35.0054 734.36C34.4054 734.31 34.0354 733.7 34.8354 734.24ZM821.335 663.93C817.995 649.66 814.665 635.38 811.325 621.11C804.355 591.27 797.375 561.42 790.405 531.57C776.755 473.19 763.115 414.81 749.465 356.43C742.535 326.76 734.615 297.32 727.465 267.7C721.205 241.74 716.035 215.16 705.285 190.59C694.315 165.51 675.045 144.55 649.525 133.92C628.035 124.98 603.865 120.03 580.465 118.9C583.405 115.3 584.095 109.97 579.805 105.62C574.485 100.23 573.405 92.2198 571.985 85.0898C570.215 76.1798 567.465 66.6298 562.165 59.1298C559.925 55.9598 556.665 54.4798 552.825 55.3298C550.465 55.8498 548.144 56.4598 545.855 57.1498C545.115 56.4098 544.385 55.6198 543.745 54.6598C542.295 52.4398 541.355 49.1898 539.275 47.4898C537.865 46.3298 536.264 46.0498 534.615 46.8898C530.184 49.1398 529.815 55.9498 530.764 60.1298C530.955 60.9398 531.184 61.7498 531.465 62.5398C531.165 62.6798 530.855 62.8198 530.545 62.9598H530.535C524.755 61.8598 517.375 64.1798 511.735 64.7398C505.184 65.3898 498.605 65.8198 492.025 66.0298C478.555 66.4598 465.065 66.0598 451.655 64.7098C438.585 63.4098 425.605 61.3198 412.695 58.9598C404.655 57.4898 394.855 56.2698 387.795 51.4398C387.684 49.0298 387.625 46.6098 387.575 44.1998C387.474 40.0098 387.695 36.7198 385.465 33.0398C385.434 32.9998 385.385 32.9898 385.335 33.0098C382.575 34.4498 380.595 36.9098 379.144 39.8298C376.495 39.1198 373.644 39.2198 371.175 40.2498C367.684 41.6998 365.085 43.3698 362.375 46.0498C358.345 50.0198 357.165 54.6598 355.985 59.9898C355.135 63.8098 354.605 66.5398 353.085 69.0998C352.755 69.6498 352.405 70.2298 352.025 70.7598C351.885 70.8998 351.625 71.1698 351.184 71.6298C350.745 72.0698 350.305 72.4998 349.855 72.9298C349.595 73.1898 348.315 74.2298 348.514 74.0898C342.974 78.2098 337.965 79.7598 331.125 81.7298C316.405 85.9698 301.325 88.7398 286.655 93.2398C270.625 98.1598 254.945 104.14 239.615 110.93C179.985 137.34 126.615 179.15 90.2254 233.6C47.8454 297.02 32.2454 374.05 24.5154 448.73C16.0554 530.58 16.6454 613.36 14.7954 695.55C14.5654 705.83 14.3354 716.11 14.1054 726.39C13.8754 736.44 13.2554 747.26 22.1754 754.03C30.1254 760.05 39.8054 758.16 48.6054 755.45C58.0254 752.56 67.6154 750.26 77.3254 748.61C95.6454 745.52 114.545 745.15 133.025 746.95C142.955 747.92 155.105 751.6 163.265 743.82C166.195 741.02 167.885 737.47 169.265 733.74C170.985 729.14 172.995 724.63 174.995 720.11C176.645 716.39 178.285 712.65 179.925 708.92C182.585 720.57 185.245 732.22 187.905 743.88C188.955 748.47 193.745 748.82 196.635 746.59C201.355 749.12 207.555 749.07 212.915 749.69C221.535 750.68 230.224 751.02 238.885 751.32C255.855 751.9 272.825 752.22 289.805 752.44C324.425 752.88 359.045 752.72 393.655 752.57C462.224 752.27 530.785 750.87 599.325 749.09C618.625 748.59 637.925 748.14 657.224 747.67C666.865 747.44 676.514 747.21 686.165 746.94C689.055 746.86 691.974 746.59 694.715 745.95H694.724C695.945 747.02 697.445 747.84 699.235 748.33C705.644 750.09 712.014 746.17 713.934 739.98C714.825 737.14 715.445 734.54 715.224 731.78C715.555 729.7 715.885 727.62 716.215 725.54C726.915 732.31 739.755 734.15 752.425 733.31C766.755 732.36 781.085 729.74 795.305 727.79C808.655 725.96 830.295 726.55 830.935 708.11C831.165 701.36 828.314 693.79 826.795 687.29C824.974 679.5 823.155 671.72 821.335 663.93Z" fill="black" />
        </>
    )
}
