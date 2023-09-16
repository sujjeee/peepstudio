"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'

export default function StripedPocketTee() {
  const { data } = usePeep()
  return (
    <g transform="translate(-240,-20 )">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M646.156 37.696c53.656-3.842 127.22 6.794 142.739 67.973 4.813 22.263 14.296 32.034 30.228 46.594 101.128 129.436-251.709 151.192-269.847 24.975-38.212 13.917-79.808 16.864-118.043 30.931-20.737 7.66-39.541 19.748-57.56 32.386-73.479 52.188-145.918 105.867-219.135 158.43 28.333 13.047 82.201 62.861 60.251 96.335-5.113 6.52-12.703 11.015-19.417 15.781l-3.541 2.528c-7.616 5.458-20.438 14.761-27.528 19.817l-1.308.952c-.512.371-1.091.788-1.613 1.161 51.13 74.753 110.969 143.727 177.345 205.31 5.652 5.254 3.337 17.002-4.843 18.37l-9.745 1.43c-31.467 4.583-63.531 8.708-95.241 6.219-30.883-3.359-49.493-30.697-70.605-50.5-42.159-43.092-81.404-89.058-117.15-137.616l-.744-1.025c-11.126-15.203-25.892-30.74-26.973-50.371-1.971-5.902 3.216-14.36 8.2-18.384l1.701-2.455c26.732-38.445 56.985-75.521 94.889-103.362-.141-4.149 1.777-8.51 5.575-11.259L282.199 277.28c40.872-28.127 78.861-61.183 123.163-83.897 45.3-21.81 96.421-22.668 142.844-40.87.984-13.12 28.567-16.469 27.696-14.443 29.103-17.566 44.085-38.467 48.706-57.676 4.62-19.21-1.122-36.728 21.548-42.698Zm391.734 411.57c48.98-73.701 95.67 7.843 116.06 56.99 24.09 67.259-25.8 149.993-58.03 207.975-11.88 16.102-27.49 50.066-48.42 52.528-52.715-.215-105.508-3.927-158.26-5.033-34.062-8.45 13.728-59.637 46.74-40.941 10.002 3.742 14.999 15.098 24.752 18.741 3.553.758 3.798-.827 5.244-4.365l.205-.495c2.577-6.123 5.076-12.28 7.614-18.419 21.477-52.89 44.185-105.313 66.755-157.714 4.83-11.377-1.94-20.75-10.73-27.522-6.73-5.541-35.677-19.071-8.41-13.116-10.5-24.373 2.12-49.112 16.48-68.629Zm-121.612-100.89c4.716-.589 10.773 4.164 11.499 8.768 6.015 38.166-.687 75.899-8.722 113.232l-1.479 6.837c-2.964 13.616-6.276 27.501-13.667 39.436-7.543 12.18-18.954 21.36-32.054 26.94-42.025 16.747-94.289.186-125.204-31.124-19.778-27.09-2.391-61.122.928-90.813-3.138-8.001-4.294-17.255-6.108-25.504l-.221-.985-7.049-30.772c-1.554-6.787 3.392-16.075 11.52-15.143a716.588 716.588 0 0 0 170.557-.872Z" fill={data.color}>
      </path>
      <path fill="#FDEA6B" d="M730.997 350h199v200h-199z"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1114.2 439.624c-.17-.759.74-1.34 1.33-.769 9.97 9.609 17.01 21.889 24.74 33.269 7.36 10.84 15.37 21.26 20.86 33.221 5.1 11.119 8.39 22.399 9.37 34.619.98 12.131-.29 24.291-2.43 36.24-4.21 23.54-13.21 45.83-23.09 67.481-9.61 21.047-20.46 41.495-31.92 61.571l-4.11 7.168c-5.01 8.727-10.08 17.437-15.5 25.891-6.75 10.52-12.91 21.38-21.81 30.16-6.32 6.25-18.23 0-15.35-8.931 1.25-3.889 2.23-7.55 4.17-11.16 1.47-2.75 3.13-5.42 4.69-8.129 3.12-5.42 6.21-10.86 9.33-16.28 6.55-11.39 13.45-22.57 19.94-34 11.26-19.82 21.89-40.011 31.29-60.79l1.1-2.453c8.65-19.242 16.85-39.173 20.65-59.988 4-21.929.42-42.599-7.37-63.21-4.03-10.66-8.56-21.08-13.27-31.46l-.91-1.983c-4.55-9.907-9.37-19.761-11.71-30.467ZM630.047 60.304c.09-.39.75-.42.81 0 2.8 18.621-3.43 38.32-13.58 53.81-5.54 8.46-12.37 16.1-20.42 22.24l-.627.474c-8.223 6.147-19.335 12.084-29.543 8.097a6.526 6.526 0 0 1-.9-.42c1.15 1.779 2.21 3.649 3.29 5.519 3.21 5.57 6.09 11.34 9.22 16.96 5.6 10.05 12.27 19.04 20.7 26.91 33.71 31.464 81.042 38.942 125.494 38.584l3.14-.03c19.526-.138 45.062.859 60.136-13.273 8.1-7.59 12.56-18.381 16.59-28.511 3.96-9.93 6.67-20.18 9.96-30.28-6.87-4.709-13.17-10.459-18.12-17.18-5.16-7-9.06-14.88-11.31-23.29l-.332-1.256c-1.74-6.707-3.489-15.578-.688-21.914.32-.73 1.52-.68 1.86 0 1.51 3.03 1.8 6.45 2.73 9.69 1.08 3.77 2.3 7.52 3.91 11.09 3.11 6.92 7.22 13.5 12.15 19.26 4.07 4.769 8.48 9.15 13.52 12.83 2.97-5.13 9.86-5.82 15.63-4.13 7.734 2.26 15.363 5.161 22.821 8.225l1.489.615c7.37 3.06 15.7 5.87 22.6 10.04 4.19 2 8.21 4.01 11.99 5.79 18.835 8.848 37.391 18.236 55.863 27.807l3.957 2.053c7.74 4.03 15.41 8.1 22.14 13.72 6.85 5.72 12.17 13.54 17.17 20.87 11.433 16.76 22.203 34 33.503 50.85 22.82 34 45.64 68 68.59 101.92 5.55 8.211 11.81 16.22 16.79 24.78 4.77 8.181 4.64 16.58 3.71 25.71l-.18 1.677c-1.78 16.748-4.85 32.832-14.24 47.193-14.79 22.58-38.09 36.64-62.74 46.319 3.01 2.241 5.84 4.661 9.43 6.202 5.52 2.359 11.41 3.58 17.38 4.069 6.37.511 13.55-1.08 18.71 3.25 2.07 1.729 2.13 5.89 0 7.62-4.96 4.049-11.38 2.889-17.42 2.21l-.36-.04c-5.61-.62-11.14-1.66-16.41-3.72-1.3-.511-2.59-1.08-3.84-1.71.04.11.06.241.04.38-.9 6.89-2.85 13.404-4.92 19.988l-1.3 4.172c-2.66 8.52-5.34 17.02-8.1 25.52-5.26 16.182-10.98 32.21-16.72 48.219l-4.95 13.813c-5.09 14.171-10.247 28.323-15.943 42.258-3.52 8.599-7.06 17.2-10.59 25.79-3.45 8.39-6.32 17.45-10.6 25.44-3.52 6.58-13.12 1.869-11.58-4.89 2.02-8.869 5.83-17.67 8.74-26.3 2.96-8.76 5.86-17.53 8.87-26.271 5.235-15.183 11.033-30.164 16.86-45.131l5.773-14.837c5.67-14.537 11.4-29.061 17.53-43.41l.67-1.572c6.36-15.009 12.93-31.887 24.5-43.518.15-.16.36-.241.57-.261-2.84-1.54-5.5-3.41-7.84-5.62l-.12-.115c-.92-.979-4.74-5.805-5.97-8.695-1.6.57-3.2 1.12-4.8 1.659-2.79.941-5.1.261-6.73-1.229l-3.11 1.921c-3.32 2.027-6.89 3.951-10.55 4.049-4.623.12-8.253-2.43-10.723-6.19-2.22-3.36-3.54-6.99-6.35-10-2.763-2.958-5.961-5.455-9.229-7.839l-3.852-2.803c-7.064-5.156-13.912-10.367-19.599-17.178-2.86-3.44-6.69-7.52-8.43-11.651-.34-.798-.55-1.548-.59-2.279-.38 2.58-.77 5.17-1.16 7.75-5.46 36.31-9.87 72.87-11.28 109.59-.69 18.109-1 36.24-.19 54.359.4 9.051 1.06 18.091 1.97 27.111.45 4.52.92 9.03 1.47 13.53l.127 1.043c.159 1.379.263 2.713.143 3.977 4.4 2.169 6.93 7.65 8.69 11.93 1.34 3.26.3 6.43-1.86 8.72a37.83 37.83 0 0 1 6.81 8.269c.39.641-.45 1.141-.95.741a47.323 47.323 0 0 0-10.14-6.18c-1.87.71-3.91.9-5.79.38-2.04-.56-3.8-1.92-5.07-3.649-10.11-1.661-20.62.369-29.72 6.699-1.89 1.32-3.6 2.81-5.23 4.429-.28.282-.57.641-.86.991l1.985.763c.823.312 1.498.556 1.755.607 1.733.354 3.493.543 5.253.694l2.637.216c10.13.84 20.23 1.12 29.65 5.36 1.98.89 1.29 3.94-.58 4.449-6.879 1.867-13.705 1.722-20.707 1.223l-1.503-.112c-6.51-.5-13.5-.47-19.85-2.27 1.52 4.159-.55 9.59-6.9 10.44-19.07 2.54-38.26 1.341-57.35-.34-19.28-1.7-38.55-3.31-57.88-4.319-62.526-3.289-125.149-2.658-187.731-1.765l-35.366.513c-28.203.397-56.412.707-84.615.491l-13.201-.123c-5.579-.054-11.161-.122-16.734-.286l-3.343-.111c-6.64-.24-15.43.76-21.2-3.171-4.76-3.239-5.82-9.179-2.95-13.968.83-1.381 1.97-2.611 3.16-3.811 2.44-20.849 3.81-41.8 5.21-62.74 4.86-73.279 2.02-146.18-9.19-218.72-30.08 9.191-59.7 20.72-88.56 33.09-15.61 6.69-31.14 13.63-46.49 20.91-14.01 6.65-28.08 14.96-43.05 19.28-1.361 1.208-3.264 1.783-4.951 1.247l-.219-.077h-.01c-1.54.36-3.25.14-4.93-.87a93.24 93.24 0 0 1-1.02-.625l-.51-.325c-5.27-3.32-10.57-7.41-14.3-12.41-4.53 4.2-9.4 8.051-14.19 11.95-5.2 4.24-10.38 8.5-15.52 12.8-2.04 1.71-4.29 3.34-6.09 5.31l-.261.29a2.954 2.954 0 0 0-.119.14c7.79 5.04 14.61 12.69 20.72 19.34 6.561 7.137 12.895 14.502 19.178 21.895l6.081 7.171c43.007 50.784 86.453 103.409 142.131 140.734 8.8 5.9.41 20.27-8.33 14.24-16.54-11.39-32.19-24.04-47.22-37.351-26.34-23.309-50.04-49.459-72.23-76.709-11.23-13.791-22.13-27.919-32.81-42.14l-3.625-4.823c-4.83-6.434-9.635-12.887-14.235-19.487l-.962-1.383c-4.035-5.822-8.326-12.363-10.928-19.067-1 1.01-2.13 1.859-3.78 2.5-2.82 1.1-6.28-1.21-6.97-3.96-1.68-6.67 4.12-10.64 8.84-14.181 5.73-4.279 11.57-8.409 17.42-12.519l2.09-1.477c7.315-5.188 14.669-10.513 22.64-14.613.24-.32.53-.62.86-.88.38-.3.75-.59 1.13-.88-9.52-15.44-19.96-30.28-31.61-44.301a381.146 381.146 0 0 0-27.9-30.159l-4.42-4.28c-6.687-6.457-13.639-13.007-21.06-18.62l-2.323 2.634c-3.102 3.509-6.235 6.99-9.547 10.286-6.52 6.48-12.95 13.091-19.35 19.7-10.629 10.997-20.897 22.333-31.133 33.684l-5.117 5.675c-10.66 11.83-22.08 23.441-31.77 36.08l-.484.64c-4.23 5.674-7.242 11.953-5.276 19.161 1.897 6.949 6.406 13.11 10.293 19.111l.387.599c15.87 24.72 32.87 48.81 51.08 71.861 36.47 46.17 78.07 89.929 127.71 122.029 6.88 4.45.45 15.51-6.44 11.01-28.99-18.95-55.62-41.709-80.12-66.15-22.49-22.43-42.87-47.13-61.97-72.48-9.31-12.37-18.23-25-26.78-37.909-8.29-12.531-17.88-25.42-23.89-39.241-3.15-7.27-4.31-15.14-1.73-22.8 2.366-7.04 7.045-12.885 11.913-18.385l.457-.515c11.19-12.57 22.58-24.99 34.07-37.29 11.53-12.34 23.59-24.24 35.9-35.79 9.67-9.09 19.75-17.101 30.53-24.52a79.51 79.51 0 0 0-2.93-1.99c-3.01-1.96-3.77-6.15-1.13-8.81 7.21-7.281 15.52-13.611 23.34-20.239 7.35-6.231 14.7-12.471 22.05-18.711 14.96-12.68 29.92-25.37 44.88-38.06 26.87-22.79 53.59-45.74 80.37-68.63 11.167-9.541 22.438-18.965 33.679-28.415l19.974-16.809 9.768-8.201c5.006-4.192 10.117-8.338 15.809-11.535 13.392-7.522 29.493-10.777 44.248-14.763l.982-.267c16.55-4.529 33.19-8.79 49.92-12.59 16.75-3.8 33.57-7.26 50.46-10.391 15.18-2.819 30.72-5.239 46.2-5.599 3.84-1.46 8.66-1.97 12.44-.41 1.56.65 3.19 1.6 4.64 2.8 7.57-2.66 15.04-3.93 22.11-8.43 7.06-4.489 13.31-10.39 18.57-16.89 10.87-13.46 16.56-29.36 20.38-45.97Zm174.01 455.79c-6-.419-11.4 2.06-16.76 4.7 3.02 1.31 6.04 2.61 9.06 3.9l20.1 8.58c6.64 2.83 13.67 5.29 19.98 8.779.45.25.81.551 1.08.901 6.56-4.199 13.5-7.949 20.15-11.94 1.52-.91 3.05-1.82 4.58-2.73-7.92 2.65-16.04 3.98-24.64 1.49-11.47-3.31-21.43-12.83-33.55-13.68Zm16.44-20.12-1.078-.732c-5.82-3.992-12.764-9.124-19.832-5.538-3.33 1.69-6.06 4.42-9.34 6.24-3.3 1.84-6.93 3.25-10.61 4.1-6.11 1.41-13.11 1.62-19.68.259l.1 8.881c4.97 2.05 9.91 4.151 14.85 6.27 3.207-1.096 6.294-2.413 9.54-3.858l2.19-.982c6.25-2.811 12.56-4.689 19.47-3.8 13.01 1.67 22.84 11.34 35.28 14.56 15.25 3.961 29.01-7.42 43.42-10.23a41.523 41.523 0 0 1 7.259-.784l.811-.006.36-.21c3.1-1.82 7.74-3.559 9.9-6.62 2.35-3.32 2.55-8.88 3.32-12.78.08-.39.16-.79.23-1.18-1.36 0-2.74.069-4.14.33-4.4.81-8.54 2.37-12.64 4.111-7.75 3.289-15.33 7.039-23.49 9.229-7.99 2.149-16.34 3.17-24.57 1.98-8.03-1.161-14.7-4.78-21.35-9.24Zm1.252-31.221-1.205-.776c-3.178-2.028-6.823-4.128-10.717-3.383-3.48.67-6.47 3.44-9.5 5.15-6.65 3.75-14.11 5.8-21.72 6.32-6.33.43-12.9-.34-18.99-2.22l.21 19.661c2.23.709 4.54 1.219 6.97 1.399 7.38.55 14.58-1.22 20.77-5.29l3.131-2.079c5.359-3.52 10.387-6.315 17.479-5.03 7.02 1.279 12.91 5.779 18.65 9.699l.941.632c6.592 4.352 13.274 7.162 21.359 7.228 8.73.069 17.36-2.36 25.49-5.35 8.07-2.959 15.74-6.51 24.37-7.6 2.64-.33 5.86-.43 8.89.09.4-2.23.78-4.449 1.14-6.68.78-4.79 1.45-9.57 2.03-14.36-15.31-4.12-29.45 9.21-43.67 13.32-8.25 2.38-17.23 2.351-25.48.05-7.634-2.13-13.635-6.552-20.148-10.781Zm.038-33.109c-3.27-.63-6.5.88-9.28 2.43-7.09 3.931-13.21 9.4-21.24 11.47-10.33 2.66-21.63.37-31.89-3.98.04 6.069.09 12.14.14 18.21 1.93.731 3.91 1.32 5.93 1.79a43.65 43.65 0 0 0 21.86-.65c7.21-2.111 12.74-7.81 19.97-9.59 7.393-1.826 14.362 1.727 20.32 5.766l1.793 1.223c6.811 4.622 13.416 8.637 21.937 9.421 9.01.83 16.84-1.99 24.89-5.729l1.874-.867c10.192-4.681 23.422-10.011 33.596-4.684.8-7.56 1.38-15.119 1.77-22.69-1.4-.52-2.85-.9-4.52-.91-3.99-.019-8.18 1.24-11.9 2.55-8.13 2.87-15.7 7.149-23.75 10.22-7.63 2.92-16.08 4.44-24.22 3.131-7.54-1.211-13.2-5.151-18.41-10.551l-.757-.798c-2.285-2.431-4.729-5.105-8.113-5.762Zm5.97-28.07c-3.77-1.989-8.36-3.84-12.72-3.26-4.16.549-6.932 3.371-9.494 6.388l-1.387 1.651c-4.583 5.422-9.094 9.98-16.159 12.211-7.32 2.3-15.08 1.4-21.89-1.97-2.42-1.2-4.67-2.69-6.93-4.16l.12 15.949c4.52 2.25 9.12 4.281 14.17 5.511 9.32 2.27 17.24.59 25.21-4.55l.837-.544c6.003-3.942 12.158-8.636 19.573-9.076 7.236-.433 12.667 3.579 17.432 8.489l.558.581c6.01 6.339 12.08 9.43 21.02 8.7 8.667-.708 16.779-4.535 24.719-7.832l.721-.298c7.26-2.981 15.63-6.05 23.6-4.91 1.91.27 4.38.86 6.58 1.89.32-7.461.47-14.93.5-22.41-4.53-3.929-11.58-4.58-17.25-2.97-8.88 2.52-16.15 9.02-24.63 12.55-7.52 3.13-15.36 3.83-23.03.869-7.92-3.059-14.13-8.889-21.55-12.809Zm85.96-31.42c-13.27.46-26.25 9.09-38.92 12.38-14.153 3.673-25.705-1.334-38.313-6.892l-1.627-.717c-6.47-2.84-13.42-5.391-20.59-4.231-6.99 1.141-13.17 5.01-19.18 8.51l-1.152.664c-10.948 6.232-22.096 10.499-34.878 9.435.07 4.011.04 8.011.05 11.931 2.1 1.2 4.12 2.56 6.04 3.8l.689.437c6.094 3.81 12.375 6.315 19.641 3.963 7.02-2.28 10.32-8.39 15.14-13.42 4.43-4.62 10.21-7.429 16.69-7.16 6.97.279 13.56 3.35 19.32 7.1 5.76 3.75 11.33 8.599 18.07 10.48 15.12 4.199 28.07-11.79 42.37-14.28 6-1.05 12.62.28 17.15 3.899-.05-8.619-.24-17.259-.5-25.899Zm-114.22-3.62c-1.87.07-3.74.15-5.61.23-6.92.3-13.84.64-20.76 1.03-4.79.259-10.68 1.73-15.38.27-.12.48-.28.941-.49 1.39.71 3.54 1.15 7.2 1.42 10.9 4.34.47 8.75.31 13.03-.58 10.27-2.13 18.61-8.61 27.79-13.24Zm114.02-2.97c-25.269 1.741-50.733 1.142-76.043 1.689l-3.037.071c-.12 0-.24.011-.36.011 2.903 1.125 5.783 2.413 8.653 3.725l2.867 1.314c6.78 3.12 13.68 5.67 21.27 5.12 8.13-.59 15.79-3.909 23.39-6.59 7.25-2.56 15.6-4.28 23.33-3.16-.02-.73-.04-1.45-.07-2.18Z" fill="#000"></path></g>
  )
}

