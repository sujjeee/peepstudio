"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'
export default function Bun2() {
    const { data } = usePeep()
    return (
        <>
            <path d="M397.5017,243.7566 C395.1257,213.0126 398.8077,180.7886 386.9537,151.5666 C366.2857,103.0816 308.3297,86.9156 263.3987,68.4566 C245.398536,63.1379728 184.830055,62.3945685 163.754,55.3552 C116.053659,39.423363 104.656889,20.4408103 66.7547,50.7756 C60.3567,55.9576 56.3537,61.5896 53.4337,69.2846 L53.5537,69.3176 C52.7197,72.5256 53.6137,75.7266 55.4927,78.1716 C39.0587,94.9696 32.1817,120.1536 40.6137,142.5146 C68.1307,200.7036 66.8367,232.1666 57.9707,294.7226 C46.3927,353.1226 72.8497,374.4556 116.6657,406.2316 C114.8817,409.6906 114.5117,414.2876 116.8377,417.3396 C167.5047,488.5386 263.037604,522.532978 344.890604,486.394978 C378.115604,471.606978 392.9487,436.2236 401.4137,404.2966 C411.2747,368.5476 414.3047,330.8776 406.2767,294.4616 C403.0387,277.6196 398.8207,260.8996 397.5017,243.7566 Z" id="🎨-Background" fill={data.skinColor}>
            </path>
            <path fillRule="evenodd" clipRule="evenodd" d="m34.604 150.543 30.126 20.07 107.839-113.688-35.886-28.245s-65.107 48.119-77.908 60.818c-12.801 12.7-24.171 61.045-24.171 61.045Z" fill="#9FD8E5"></path>
            <path d="M105.244,-96.8628 C111.394175,-97.7863088 116.038608,-93.970587 118.247976,-88.5923941 L118.364,-88.3028 C119.074,-86.4728 119.864,-84.6928 120.714,-82.9428 C136.104,-90.4928 158.064,-88.5528 167.804,-73.2628 C174.754,-62.3428 170.514,-49.3828 167.894,-37.8028 L166.174,-30.1728 C169.49875,-28.05705 172.005962,-24.2682 171.888262,-20.3448366 L171.874,-20.0428 L171.174,-9.4028 C173.394,-11.6528 175.424,-14.1028 177.234,-16.7128 C178.484,-19.0028 179.834,-21.2528 181.284,-23.4328 C189.814,-36.2628 208.964,-25.1128 201.924,-11.3728 C200.574,-8.7228 199.054,-6.2128 197.424,-3.7928 C195.584,-0.2228 194.074,3.4472 192.914,7.2172 C196.244,8.6672 198.804,11.8872 199.074,16.7472 C199.704,28.0972 193.744,37.5672 184.264,43.5172 C181.474,45.2672 178.594,45.6072 175.984,44.9572 C175.524,45.5772 175.064,46.1972 174.624,46.8272 C178.404,49.8972 181.814,53.3972 184.744,57.2772 C193.564,55.9572 202.434,55.3372 211.304,55.3172 C222.144,50.0072 235.124,50.1172 246.774,52.1072 C254.274,53.3872 261.474,55.8772 268.854,57.6672 C276.634,59.5472 284.534,59.6172 292.404,60.8972 C302.324,62.5072 311.024,67.0872 316.494,74.3972 C322.504,74.5772 328.824,77.0372 334.064,80.3772 C346.264,88.1572 358.394,96.0472 370.564,103.8772 C375.234625,106.883242 376.98101,111.682178 376.122343,117.034803 L376.064,117.3772 L375.654,119.5972 L376.616833,120.963599 C380.341184,126.22304 384.3936,131.732 386.804,137.5372 C391.264,143.9672 395.294,150.7072 398.864,157.6572 C403.674,166.9972 407.644,176.8972 410.334,187.0572 C411.004,189.6272 411.674,192.2172 412.114,194.8372 C412.744,198.5372 411.774,201.4072 411.244,204.9572 C410.584,209.4572 410.344,214.0172 409.644,218.5272 C409.174,221.5172 406.634,222.9872 403.974,223.0672 C404.974,230.6772 405.694,238.3372 406.384,245.9372 C407.354,256.7972 408.014,267.6872 408.584,278.5772 C411.524,282.8472 417.534,286.2272 421.874,287.3972 C427.884,289.0072 434.184,287.2572 439.864,285.2072 C443.434,283.9172 446.364,288.4072 444.624,291.4072 C439.154,300.8272 427.454,300.7872 418.594,296.6172 C414.844,294.8572 411.554,292.3072 409.114,288.9872 C409.264,292.1472 409.424,295.3072 409.584,298.4772 L409.733019,301.348481 C411.534571,334.880433 415.424,369.565811 409.124,402.7672 C398.214,460.2772 350.621536,504.066686 292.484,507.4672 C261.975969,509.251641 236.570564,500.240629 223.937282,495.213915 C211.304,490.1872 216.214126,479.938033 224.9842,482.867831 C240.09212,487.9149 267.846269,495.434144 292.684,492.1872 C351.224,484.534485 400.864,455.275433 395.764,329.2572 C395.040771,311.386598 392.814,293.5072 392.334,275.6372 C391.874,258.1672 392.044,240.6872 391.274,223.2272 L391.017237,217.269998 C390.716593,210.309175 390.395111,203.316089 389.874,196.3472 C389.244,193.6472 388.724,190.9072 387.954,188.2572 C385.864,181.0472 383.134,174.0372 379.744,167.3472 C378.994,167.9172 378.154,168.3272 377.244,168.4872 C370.334,169.7272 363.854,169.3772 357.384,166.4972 C354.364,165.1672 351.704,163.3972 349.224,161.2072 C348.044,160.1772 347.254,159.1772 346.634,158.1372 C343.504,158.1872 340.374,157.2472 338.414,154.9972 C336.178516,152.432684 335.806716,149.783881 336.682306,147.331747 L336.774,147.0872 L336.554,147.0072 C333.914,153.8372 328.654,159.8472 322.884,163.9072 C313.764,170.3472 302.354,172.2072 291.414,172.3772 C279.334,172.5572 266.594,170.6972 254.674,168.7972 C251.524,168.2972 248.394,167.7272 245.324,166.9572 C245.204,167.0772 245.084,167.2172 244.954,167.3372 C234.724,177.1272 220.334,179.6472 207.354,174.0572 C199.854,170.8272 193.564,165.6272 188.004,159.6672 C187.924,162.7872 187.764,165.9072 187.494,168.9972 L187.38219,170.224228 C186.828578,175.979244 185.763333,182.083867 181.414,186.2372 C174.384,192.9672 164.184,190.2672 156.074,185.8872 C156.084,186.0972 156.084,186.3172 156.084,186.5372 C158.274,193.9772 160.474,201.4272 162.674,208.8772 L163.147862,210.46421 C164.747636,215.754142 166.502182,221.050836 166.984,226.5872 C167.904,237.1672 160.864,247.6172 149.104,244.0672 C142.935429,242.211771 137.993633,237.025176 133.251896,232.870958 L130.264,230.2872 C137.994,255.5572 143.354,281.7272 143.854,308.0972 C143.884,309.5272 142.654,310.6072 141.294,310.6572 C138.114,310.7872 134.694,310.1572 131.494,308.8872 C131.314,308.8772 131.134,308.8672 130.944,308.8372 C125.484,308.0472 120.414,306.0772 115.944,303.1672 C116.974,306.4372 117.434,309.9472 117.164,313.6172 C117.094,314.5072 115.704,314.8172 115.504,313.8372 C112.924,301.1472 98.074,291.5572 85.274,293.9872 C71.534,296.5972 61.414,308.4172 58.934,321.8672 C56.274,336.3172 61.364,353.0272 70.794,364.1772 C75.134,369.3172 80.844,373.6072 87.624,374.6872 C90.724,375.1772 93.944,375.0072 96.954,374.1272 C98.234,373.7472 99.434,373.2172 100.654,372.7172 C102.434,371.9972 104.514,371.8872 106.194,371.1272 C110.004,369.4172 113.834,372.9272 111.904,376.8372 C110.224,380.2472 108.714,382.5472 105.924,384.3072 C108.184,387.0672 110.234,390.9072 110.994,391.9372 C114.874,397.1772 118.814,402.1272 123.234,406.9172 C127.734,411.7772 132.644,416.2172 137.834,420.3272 L140.015504,422.05095 C145.014625,426.015794 149.36775,429.6897 152.894,435.3772 C155.674,439.8672 152.074,445.9572 146.864,445.8872 C130.564,445.6572 118.714,431.3372 110.274,418.8272 C109.074,417.0372 107.944,415.1472 106.894,413.2072 C106.514,413.8172 106.094,414.3872 105.624,414.9072 L106.554,417.4072 C109.314,424.7672 97.424,429.5772 93.974,422.7072 C91.464,417.7272 88.554,412.9872 85.314,408.5072 C83.404,408.2372 81.534,407.0772 80.494,405.5772 C77.864,401.7672 74.914,397.9172 72.424,393.8572 C71.044,392.5472 69.624,391.2872 68.174,390.0572 C67.754,390.4272 67.324,390.7972 66.914,391.1872 C65.094,395.3372 62.844,399.1272 60.054,402.6972 L59.4558229,403.45882 C54.110919,410.195002 47.1489091,417.089382 38.534,418.7372 C35.904,419.2372 33.374,415.9672 35.704,413.8772 C41.734,408.4572 48.864,404.7672 54.424,398.7172 C57.1632857,395.736486 59.6783878,392.453986 61.8412012,389.013818 L62.334,388.2172 C62.694,387.6272 63.064,387.0372 63.444,386.4372 C60.934,384.7272 58.424,383.0072 55.914,381.2872 C49.0043226,387.190426 40.0061956,389.890738 32.3636123,394.780705 L31.604,395.2772 C24.694,399.8972 17.414,389.6772 22.954,384.0672 C29.061,377.9062 34.159,370.5592 39.569,363.7112 C37.025,359.0252 35.821,353.4842 35.37,347.8842 C35.192,346.2992 35.053,344.7132 34.914,343.1272 C31.034,343.1872 27.134,341.8572 23.834,339.5672 L22.584,338.6772 C18.574,339.9572 14.364,340.5772 10.334,340.4672 C0.854,340.1872 -3.026,329.3572 2.904,322.5072 C8.954,315.5072 19.544,313.9772 27.934,317.3772 C28.204,317.2372 28.484,317.0872 28.754,316.9372 C28.354,315.0972 28.443,313.4282 28.898,311.9622 L28.766,311.0682 C26.921,308.2372 25.708,305.0052 25.248,301.5902 C24.884,298.8852 24.958,296.2042 25.584,293.5332 C25.792,292.6442 26.225,291.7232 26.556,290.7962 C25.874,289.0742 25.473,287.2942 25.349,285.5042 C25.158,285.2772 24.968,285.0442 24.788,284.7922 C20.625,278.9472 21.466,271.9042 25.428,267.1742 C25.446,266.8732 25.474,266.5722 25.515,266.2732 C25.283,265.7512 25.07,265.2242 24.876,264.6912 C21.005,260.7862 18.163,256.0872 18.693,250.2642 C19.004,246.8382 20.412,243.7542 22.543,241.4492 C22.165,240.3312 22.129,239.0362 22.587,237.9552 C19.186,228.9092 19.616,218.0142 22.064,207.8972 C21.524,206.3572 21.244,204.6872 21.304,202.9172 C21.584,195.4072 28.084,188.5072 35.784,188.5972 C36.711,188.6052 37.579,188.7262 38.413,188.9032 L38.424,188.7242 C38.719,186.4702 39.339,184.3872 40.244,182.5182 C39.799,182.3572 39.387,182.1262 39.026,181.8192 C34.092,184.4512 28.871,186.4632 23.397,187.8342 C19.372,188.8422 15.249,184.2672 17.751,180.4892 C18.912,178.7362 20.193,177.1622 21.573,175.7242 C19.611,175.7352 17.619,175.8682 15.604,176.1272 C11.984,176.5972 7.944,174.1272 5.594,170.7872 C2.674,173.6272 -0.256,176.4572 -3.186,179.2872 C-10.606,186.4772 -21.816,181.1872 -22.986,171.7072 C-25.196,171.1172 -27.256,170.1172 -29.066,168.6872 C-40.766,173.7672 -53.356,176.5572 -66.226,177.0872 C-75.466,177.4672 -80.866,166.7072 -76.546,159.1072 C-73.646,154.0072 -70.046,149.4272 -65.896,145.4472 C-72.336,147.4172 -78.986,148.8372 -85.776,149.7472 C-89.446,150.2372 -94.636,147.1972 -96.106,143.8272 C-101.726,130.8672 -101.246,117.3572 -94.776,104.7472 C-94.526,104.2472 -94.246,103.7672 -93.976,103.2872 C-93.306,101.6172 -92.576,99.9672 -91.786,98.3472 C-99.746,90.0472 -100.436,77.7072 -96.146,67.3772 C-97.866,64.5872 -98.526,61.2272 -97.356,58.1872 C-94.026,49.4372 -89.226,41.3572 -83.166,34.4172 C-83.746,33.2972 -84.256,32.1072 -84.686,30.8272 C-88.096,20.4772 -84.146,7.9872 -76.176,0.7772 C-71.166,-3.7628 -65.406,-6.4828 -59.256,-8.2228 C-56.666,-12.8028 -53.336,-16.9328 -49.456,-20.4128 C-49.306,-20.7428 -49.156,-21.0728 -48.986,-21.4028 C-42.946,-32.7828 -31.946,-38.8828 -20.156,-40.2928 C-19.696,-44.7428 -16.696,-48.9928 -12.336,-50.3728 C-11.136,-54.2228 -9.346,-57.9028 -6.886,-61.2428 C-3.016,-66.5028 3.414,-68.9828 9.474,-65.5328 C12.794,-63.6428 15.974,-61.4728 18.954,-59.0728 C20.2924615,-59.7004923 21.809858,-60.1066462 23.5219199,-60.2362046 L23.954,-60.2628 L33.814,-60.7628 C37.944,-62.5928 42.064,-64.5128 46.194,-66.3828 C48.674,-68.4328 51.444,-70.1428 54.464,-71.4128 C57.884,-72.8428 61.384,-73.6528 64.894,-73.9228 C67.744,-74.8528 70.614,-75.6728 73.534,-76.3128 C80.394,-77.8128 87.574,-78.6528 94.694,-78.5828 C94.8397143,-80.4256571 94.9119592,-82.2905551 94.8981399,-84.1774939 L94.884,-85.1228 C94.724,-91.1728 99.554,-96.0028 105.244,-96.8628 Z M98.334,387.1872 C97.354,387.3972 96.364,387.5672 95.374,387.6872 C95.674,388.4272 95.974,389.1672 96.264,389.9072 C97.064,390.3572 97.874,390.7872 98.684,391.1872 C98.444,389.8272 98.304,388.4572 98.334,387.1872 Z M46.957,371.9202 L46.2921852,373.144348 C46.1844444,373.344644 46.0783333,373.542533 45.974,373.7372 C47.384,373.6272 48.804,373.6572 50.204,373.8172 L50.2,373.6682 C50.02,373.6072 49.84,373.5512 49.668,373.4672 C48.702,373.0032 47.804,372.4832 46.957,371.9202 Z M74.724,316.0673 C83.5712222,316.582578 91.0667855,317.939098 99.1129371,321.809367 L99.804,322.1473 C106.914,325.6773 118.674,332.1973 117.684,341.5473 C117.404,344.2073 115.474,347.0073 112.434,346.7973 C104.104,346.2273 99.344,337.8273 93.704,332.5873 C88.014,327.3073 81.024,321.8773 74.134,318.2473 C73.1600714,317.736229 73.5437194,316.118639 74.6034989,316.066514 L74.724,316.0673 Z M34.604,192.8772 C32.484,192.9472 33.194,195.0072 34.284,193.2872 C34.374,193.1472 34.484,193.0072 34.604,192.8772 Z M149.04,55.3552 C128.962,55.8832 108.755,67.7382 93.714,79.7212 C80.629,90.1462 69.33,102.5462 59.325,115.9112 C56.751,122.5672 54.541,129.3622 52.674,136.2072 C51.444,140.7272 50.674,145.2972 49.644,149.8572 L49.324,151.2552 C48.515,152.7672 47.914,154.3942 47.476,156.0752 C49.299,157.9032 51.664,159.2122 54.268,159.8332 C55.107,160.0332 55.804,160.4662 56.355,161.0402 C58.451,157.5422 60.283,153.8502 61.349,149.9362 L61.388,149.7552 C65.417,143.1562 69.793,136.7622 74.484,130.5872 C87.424,113.5372 101.674,97.9972 118.804,85.0672 C131.794,75.2672 146.314,67.5872 161.754,62.5972 C157.975,59.5482 153.683,57.1362 149.04,55.3552 Z" id="🖍-Ink" fill={data.hairColor}></path>
        </>
    )
}