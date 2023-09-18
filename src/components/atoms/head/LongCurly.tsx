"use client"
import { usePeep } from '@/lib/context/PeepContext'
import React from 'react'

export default function LongCurly() {
    const { data } = usePeep()
    return (
        <>

            <path d="M343.4072,146.7179 C277.6372,93.2619 172.2402,75.9049 101.8372,129.8359 C47.1332,180.4489 24.4952,324.2749 34.1762,396.5469 C36.8682,442.9019 72.2832,495.4429 124.2702,480.7819 C133.0982,479.9129 141.6702,476.5289 150.5792,475.8199 C161.2362,474.5929 171.9742,474.5719 182.6102,476.0749 C205.7862,479.3529 226.3312,491.6579 248.8252,497.4109 C290.5642,508.0849 337.1352,500.9049 373.0632,476.8609 C491.7902,398.8029 438.0102,222.2679 343.4072,146.7179 L343.4072,146.7179 Z" id="🎨-Background" fill={data.skinColor}></path>
            <path d="M334.6483,498.6955 C335.8693,498.2745 337.0883,497.8355 338.2983,497.3855 C338.3783,497.6655 338.5083,497.9345 338.6593,498.1955 C338.8293,498.6155 338.9993,499.0245 339.1883,499.4345 C337.6693,499.4455 336.1483,499.1745 334.6483,498.6955 M332.2093,-19.3255 C331.6693,-20.5345 331.0483,-21.6945 330.3483,-22.8155 C332.0483,-22.2645 333.7493,-21.5045 335.2893,-20.5245 C334.2493,-20.1745 333.2283,-19.7745 332.2093,-19.3255 M72.4193,138.8355 C72.3493,138.8235 72.2803,138.8135 72.2113,138.8015 C73.1033,136.4265 74.6923,134.1845 76.4473,132.5655 C76.7623,132.2745 77.1033,132.0055 77.4333,131.7275 C75.5703,133.9465 73.8803,136.3135 72.4193,138.8355 M547.7683,387.1845 C546.8883,378.8445 545.7683,370.5355 544.3183,362.2745 C542.9283,354.3655 541.7583,345.9055 537.7283,338.8855 C533.7283,331.8955 529.7183,325.1045 524.9593,318.9555 C525.6383,315.8155 526.5393,312.8655 527.3183,310.4855 C531.8183,296.7855 536.2493,279.3855 526.8983,266.6555 C524.7283,263.7055 522.0793,261.4455 519.0483,259.4055 C517.7583,258.5355 515.6193,257.7455 514.6283,256.5455 C513.9283,255.6955 514.1693,256.1555 514.1383,255.7355 C513.9683,253.4755 519.2683,248.7055 520.5083,246.9155 C522.8293,243.6045 524.5583,239.8755 525.8783,236.0655 C531.0983,220.9855 527.5483,204.3755 524.4093,189.2645 C522.7493,181.2555 520.9193,173.2255 520.3183,165.0455 C519.7583,157.3655 520.8083,149.8655 521.4283,142.2255 C522.0293,134.6845 521.8693,126.9055 518.6383,119.9245 C517.0583,116.5245 514.6693,113.5245 511.7583,111.1845 C508.9193,108.8955 505.3783,107.5655 502.6093,105.2855 C499.8483,103.0145 500.6383,99.9455 501.3593,96.8055 C502.3483,92.5455 503.5983,88.3155 503.7183,83.9155 C503.9383,76.2455 500.8083,68.7745 495.9193,62.9755 C490.8783,56.9855 483.6783,52.9345 475.8983,52.0245 C472.3383,51.6045 468.8383,52.3155 465.2983,52.0655 C461.7983,51.8255 461.0393,50.0755 460.3783,46.8755 C458.8593,39.5455 459.4783,32.3055 455.8693,25.4655 C452.6693,19.3855 446.9783,15.2645 440.6883,12.8355 C429.1593,8.3755 415.7493,9.2955 403.5883,11.9245 C396.4093,-9.1945 373.9993,-23.0445 351.9493,-23.2145 C348.5083,-29.0545 342.6783,-33.4145 336.0293,-35.9755 C325.0293,-40.2255 313.3783,-37.7445 301.9193,-37.7445 L301.8693,-37.7445 C300.7183,-37.8155 299.5683,-37.8445 298.4193,-37.8345 C297.3383,-37.8955 296.2583,-37.9855 295.1783,-38.1045 C282.1383,-39.6455 269.2383,-44.9855 256.3183,-39.7545 C250.5583,-37.4245 245.9783,-33.8345 243.0793,-29.2545 C238.7093,-28.0655 234.3983,-26.7045 230.1693,-25.1245 C211.8383,-24.6455 193.6783,-14.8155 184.4093,1.1155 C171.3593,-0.3645 157.1993,2.1455 148.5683,12.8055 C146.3203,15.5795 144.5793,18.8385 143.4253,22.2985 C134.6253,25.1445 126.4823,30.2155 121.1533,37.8535 C116.2903,44.8235 115.3563,53.8355 118.6453,61.3175 C110.7893,67.0085 104.6503,75.1555 101.6933,84.7755 C99.8963,90.6205 99.6293,96.6595 100.7853,102.4125 C92.7423,104.1965 85.0493,107.5035 78.2333,112.4665 C71.0903,117.6655 62.1693,125.9405 61.6993,135.4645 C61.6643,136.1635 61.6913,136.8625 61.7473,137.5595 C46.0223,136.4545 29.9883,139.1185 19.3593,151.7255 C11.3783,161.1845 7.9093,173.3655 10.0393,184.4555 C-8.6707,188.2555 -26.3617,198.0355 -38.7017,212.4955 C-47.6707,223.0055 -55.6407,236.3655 -55.1617,250.6745 C-55.0117,254.9855 -54.0007,259.3255 -52.2507,263.3355 L-52.2507,263.3445 C-53.0007,264.7555 -53.7717,266.3255 -54.5117,267.9955 C-66.1017,276.1045 -74.5217,288.8155 -79.2617,302.8255 C-83.0907,314.1745 -85.5007,328.9155 -81.4117,340.4655 C-80.7907,342.2255 -80.0007,343.8855 -79.0807,345.4245 C-79.8517,346.2455 -80.5807,347.0655 -81.2907,347.8955 C-89.1017,357.0245 -97.0117,368.5245 -96.4707,381.0945 C-96.2507,386.1555 -94.3717,391.2455 -91.3007,395.4245 C-102.1017,406.3755 -110.8007,420.1955 -109.9417,435.6255 C-109.2017,449.0555 -101.8307,462.6955 -90.2817,469.1455 C-92.2107,479.4955 -89.6307,490.4155 -81.5717,498.4955 C-77.5507,502.5355 -72.8117,505.1955 -67.7907,506.6155 C-66.6707,518.8055 -55.8517,528.6155 -44.3617,531.4345 C-42.2207,531.9655 -40.0807,532.2855 -37.9517,532.4345 C-27.6117,537.5055 -15.2817,536.9245 -4.7317,532.2745 C-1.6217,536.2255 2.4283,539.4455 7.1483,541.7555 C9.0583,542.6955 11.0793,543.4755 13.1883,544.1045 C28.0883,548.5145 43.3693,542.5355 56.3983,535.5555 C56.8183,535.3355 57.5883,535.0555 58.2683,534.7455 C60.0683,536.7555 63.3483,538.7455 65.0583,539.7255 C70.8593,543.0555 77.9493,544.6045 84.6093,544.1655 C92.4193,543.6455 99.3083,541.0655 105.6883,537.3955 C106.6193,537.5555 107.5583,537.6455 108.4993,537.6955 C114.4993,538.0145 119.8483,536.1155 124.6593,533.1155 C127.8383,533.5355 131.0983,533.4955 134.3983,532.9155 C141.6693,534.7645 148.7493,531.8255 154.4383,527.1555 C156.9593,525.0855 159.0883,522.6555 161.3693,520.3355 C163.7383,517.9245 165.5393,517.3655 168.3083,515.7455 C174.8593,511.9155 175.6483,502.2055 172.8083,495.1845 C173.3483,493.9555 173.6593,492.5855 173.6593,491.0655 C173.6383,477.8055 167.5293,465.6455 160.0293,455.0355 C156.6783,450.3055 153.0393,445.6745 149.0483,441.4755 C145.8383,438.1045 141.3293,432.6355 136.5793,431.2645 C136.2893,431.0555 135.9883,430.8445 135.6883,430.6455 C136.6093,427.4245 137.1483,424.1455 136.9193,420.7955 C136.6783,417.3545 135.5683,414.0945 133.7893,411.3155 C139.7583,399.7455 142.2793,387.0555 141.0793,373.8155 C145.9383,366.9245 149.6193,359.3155 151.5183,350.9755 C152.6883,345.8155 153.3593,340.3855 153.2683,335.0945 C153.2283,332.5555 152.2983,329.3445 152.2793,326.7155 C152.4193,327.5455 153.4993,324.4455 153.9193,323.6745 C158.7383,314.7255 164.9283,307.7455 165.9593,297.1955 C166.5583,291.0245 165.0983,284.2055 161.3983,279.1455 C163.7683,269.8055 163.7383,259.7745 160.0083,250.8655 C159.0083,248.4855 157.8593,246.1555 156.5393,243.9455 C157.1483,242.0855 157.7093,240.2055 158.4283,238.5145 C158.7093,237.8445 158.9883,237.1655 159.2683,236.4855 C161.9783,234.0945 164.4993,231.4855 166.6193,228.9245 C171.3183,223.2555 174.9093,216.7555 175.3593,209.2645 C175.5793,205.5145 174.6993,201.9245 173.6093,198.3655 C173.1283,196.7555 172.8383,194.9655 172.2683,193.3955 C171.9493,192.5245 171.1783,191.6355 170.9093,190.8155 C170.8483,190.6355 170.7983,190.4855 170.7583,190.3655 C170.7983,190.2455 170.8293,189.9955 170.8293,189.5245 C170.8383,185.9345 171.3083,182.4245 171.3293,178.9655 C174.6193,182.2855 178.5793,184.7645 183.0793,186.2155 C192.1483,189.1255 201.6093,187.8055 209.6383,183.3155 C218.2793,189.2355 227.9883,194.5945 238.1693,196.7455 C244.2183,198.0245 250.2793,197.4955 256.3483,198.2855 C262.3783,199.0755 268.2093,201.7055 273.8883,203.7555 C286.5293,208.3255 299.1383,213.0145 311.8183,217.4655 C322.0583,221.0555 333.1383,223.9055 343.8593,221.8855 C346.8693,226.5245 350.7793,230.4455 355.7893,233.3255 C359.3783,235.3755 363.3183,236.7645 367.3883,237.4555 C370.9883,238.0655 375.2093,237.8255 378.1283,240.2955 C380.9783,242.6955 382.7583,246.2745 385.3183,248.9755 C388.1693,251.9955 391.6883,254.6155 395.3783,256.4955 C398.3383,258.0055 401.3593,259.0945 404.4283,259.8055 C404.1593,266.6355 403.8983,273.4555 403.8183,280.2955 C403.6693,295.1555 403.7283,310.0145 403.5293,324.8755 C403.3293,339.6845 402.8593,354.4955 402.0793,369.2855 C401.3383,383.1655 400.2983,397.0945 396.9883,410.6355 C386.0083,455.5655 344.8783,487.7355 298.8383,489.3755 C285.1693,489.8655 271.6383,487.9455 258.5683,483.9245 C245.0293,479.7555 232.9383,471.1745 219.0583,468.5355 C215.4283,467.8545 212.0083,471.5055 214.0883,475.0145 C217.6693,481.0455 222.0183,484.7255 227.9683,488.3545 C234.1993,492.1455 241.1383,494.9555 247.9883,497.4155 C260.5883,501.9345 273.9193,504.5555 287.2893,505.2855 C297.4883,505.8445 307.7283,505.1455 317.7183,503.2255 C318.4193,505.3755 319.6593,507.4655 320.5983,509.4555 C320.7383,509.7455 321.2093,509.5455 321.1193,509.2455 C320.9683,508.7455 320.8693,508.3055 320.8293,507.9455 C324.1883,512.3255 329.3783,515.3545 334.7093,516.8255 C338.4683,517.8655 342.4593,518.1845 346.3293,517.7455 C347.5793,517.6045 348.7683,517.3955 349.9493,517.1355 C353.8883,520.5855 358.9283,522.8855 363.9883,524.0355 C363.1193,529.3155 365.7283,535.0755 371.7793,536.5755 C374.3183,537.2055 376.7583,537.2155 379.1993,536.9855 C381.1693,537.9055 383.2893,538.6255 385.5393,539.1155 C388.4683,539.7555 391.9683,538.9345 394.1783,536.8155 C395.3883,537.6655 396.5183,538.2555 397.6383,539.6045 C402.2493,545.1655 412.1883,540.7355 412.6283,534.3055 C414.0883,534.3055 415.5583,534.3255 417.0293,534.3755 C417.3783,534.5355 417.7283,534.6955 418.0883,534.8655 C424.5183,537.8545 431.1783,540.4655 438.2893,538.1155 C439.5983,537.6845 440.7983,537.1355 441.8883,536.4955 C446.8983,536.9455 451.8383,536.9555 456.9193,535.3155 C459.9193,534.3445 462.7383,532.8055 465.0883,530.7855 C472.9283,533.0855 481.1993,534.1255 488.9993,531.2745 C494.8383,529.1455 499.5393,525.7855 502.8483,521.3545 C507.9093,521.5355 513.0483,520.3155 517.6783,517.9055 C525.5983,513.8055 531.1483,506.0145 535.0183,498.2055 C543.5393,480.9755 548.5793,462.4655 550.5583,443.3755 C552.5083,424.5755 549.7283,405.8755 547.7683,387.1845" id="🖍-Ink" fill={data.hairColor}></path>
        </>
    )
}
