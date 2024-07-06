// import { useState, useEffect } from 'react';
import './Card.css'
import { IRoot } from "../../types.ts"

interface IProp {
    card: IRoot
    setOpenPopup: (isOpen: boolean) => void;
    setCompanyId: (companyId: string) => void;
    setPushedButton: (buttonId: string) => void;
  }

function Card(props: IProp) {

    const { card } = props
    console.log(card)

    function clickEyeButton() {
        props.setOpenPopup(true)
        props.setCompanyId(card.company.companyId);
        props.setPushedButton("Показать")
    }

    function clickTrashButton() {
        props.setOpenPopup(true)
        props.setCompanyId(card.company.companyId);
        props.setPushedButton("Удалить")
    }

    function clickMoreButton() {
        props.setOpenPopup(true)
        props.setCompanyId(card.company.companyId);
        props.setPushedButton("Подробнее")
    }

    return (
        <div className="card" style={{ backgroundColor: card.mobileAppDashboard.cardBackgroundColor }}>
            <div className="card__header">
                <h2 className="card__title" style={{ color: card.mobileAppDashboard.highlightTextColor }}>{card.mobileAppDashboard.companyName}</h2>
                <img className="card__logo" src={card.mobileAppDashboard.logo} alt="logo" />
            </div>
            <div className="card__body">
                <p className="card__body-balls" style={{ color: card.mobileAppDashboard.highlightTextColor }}>{card.customerMarkParameters.loyaltyLevel.requiredSum}<span className="card__body-span" style={{ color: card.mobileAppDashboard.textColor }}>  баллов</span></p>
                <div className='card__body-main'>
                    <div className="card__body-item">
                        <p className="card__body-title" style={{ color: card.mobileAppDashboard.textColor }}>Кешбэк</p>
                        <p className="card__body-value">{card.customerMarkParameters.loyaltyLevel.cashToMark} %</p>
                    </div>
                    <div className="card__body-item">
                        <p className="card__body-title" style={{ color: card.mobileAppDashboard.textColor }}>Уровень</p>
                        <p className="card__body-value" >{card.customerMarkParameters.loyaltyLevel.name}</p>
                    </div>
                </div>
                <div className="card__buttons">
                    <button className="card__button" type='button' onClick={clickEyeButton}>
                        <svg className='card__icon' xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" version="1.1"><path d="M 232 57.078 C 155.625 63.960, 88.877 102.205, 37.101 168.752 C 19.017 191.995, 7.571 212.141, 2.870 229 C 0.768 236.537, 0.500 239.595, 0.500 256 C 0.500 272.341, 0.774 275.492, 2.850 283 C 11.847 315.539, 49.216 364.420, 91 398.304 C 127.229 427.684, 172.503 446.961, 221 453.655 C 238.180 456.027, 273.820 456.027, 291 453.655 C 364.144 443.558, 425.501 406.738, 474.824 343.345 C 493.904 318.822, 505.107 298.734, 509.035 282 C 510.261 276.775, 511.655 271.719, 512.132 270.764 C 513.382 268.263, 513.257 239.723, 512 240.500 C 511.447 240.842, 511 240.116, 511 238.877 C 511 234.358, 506.648 220.259, 502.524 211.421 C 497.698 201.074, 486.048 183.081, 474.899 168.752 C 425.546 105.319, 363.562 68.051, 291.500 58.481 C 276.772 56.525, 246.153 55.803, 232 57.078 M 236 100.570 C 234.625 100.804, 229.450 101.499, 224.500 102.116 C 186.792 106.816, 145.294 125.674, 113 152.784 C 87.424 174.255, 56.616 212.172, 47.910 232.893 C 41.795 247.445, 41.795 264.555, 47.910 279.107 C 53.960 293.507, 74.293 321.168, 92.942 340.370 C 140.770 389.614, 198.028 413.692, 262.500 411.671 C 282.587 411.042, 294.161 409.471, 311.339 405.042 C 366.755 390.753, 416.498 353.159, 453.494 297.606 C 466.513 278.056, 470.522 264.560, 468.196 248.111 C 466.664 237.277, 463.159 229.123, 454.089 215.289 C 413.248 152.996, 356.303 113.593, 291 102.443 C 281.979 100.902, 242.052 99.543, 236 100.570 M 237.450 150.397 C 214.185 154.836, 196.772 163.984, 180.378 180.378 C 166.215 194.541, 157.371 209.781, 152.229 228.881 C 149.908 237.502, 149.640 240.315, 149.640 256 C 149.640 271.685, 149.908 274.498, 152.229 283.119 C 162.306 320.555, 191.356 349.692, 228.571 359.693 C 237.543 362.103, 240.187 362.360, 256 362.360 C 271.813 362.360, 274.457 362.103, 283.429 359.693 C 320.607 349.702, 349.737 320.481, 359.763 283.119 C 362.043 274.623, 362.351 271.516, 362.401 256.500 C 362.465 236.965, 360.924 228.815, 354.230 213.287 C 348.797 200.685, 342.087 190.961, 331.563 180.437 C 317.173 166.047, 300.769 156.665, 281.635 151.881 C 271.097 149.246, 247.611 148.457, 237.450 150.397 M 248.378 193.130 C 225.413 195.681, 205.410 211.586, 196.314 234.526 C 193.744 241.007, 193.548 242.525, 193.537 256 C 193.526 270.026, 193.631 270.762, 196.750 278.500 C 202.635 293.107, 214.996 306.516, 228.573 313.023 C 237.675 317.385, 245.342 319.077, 256 319.077 C 266.658 319.077, 274.325 317.385, 283.427 313.023 C 297.004 306.516, 309.365 293.107, 315.250 278.500 C 318.369 270.762, 318.474 270.026, 318.463 256 C 318.452 242.533, 318.254 241.001, 315.687 234.500 C 306.947 212.365, 286.722 195.826, 265.500 193.460 C 262.750 193.153, 259.375 192.775, 258 192.620 C 256.625 192.465, 252.295 192.695, 248.378 193.130 M 0.402 256 C 0.402 264.525, 0.556 268.012, 0.743 263.750 C 0.931 259.488, 0.931 252.512, 0.743 248.250 C 0.556 243.988, 0.402 247.475, 0.402 256" stroke="none" fill={card.mobileAppDashboard.mainColor} fill-rule="evenodd" /><path d="" stroke="none" fill="#fcfcfc" fill-rule="evenodd" /></svg>
                    </button>
                    <button className="card__button" type='button' onClick={clickTrashButton}>
                        <svg className='card__icon' xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" version="1.1"><path d="M 213.633 1.521 C 174.056 9.569, 141.295 40.165, 131.252 78.456 L 129.553 84.931 92.861 85.215 L 56.169 85.500 51.843 88.542 C 38.174 98.152, 39.410 118.557, 54.115 126.059 C 57.326 127.697, 60.031 128, 71.438 128 L 84.955 128 85.228 275.250 L 85.502 422.500 88.182 432.206 C 97.714 466.720, 122.441 493.909, 155.261 505.960 C 171.059 511.761, 166.311 511.500, 256 511.500 L 338.500 511.500 347 509.203 C 357.788 506.289, 375.582 497.649, 384 491.238 C 403.607 476.308, 417.207 456.144, 423.818 432.206 L 426.498 422.500 426.772 275.250 L 427.045 128 440.562 128 C 455.937 128, 459.467 126.897, 464.803 120.423 C 472.902 110.598, 470.775 96.007, 460.157 88.542 L 455.831 85.500 419.139 85.215 L 382.447 84.931 380.748 78.456 C 371.279 42.352, 341.830 13.233, 304.175 2.741 C 297.037 0.753, 293.840 0.586, 258.500 0.363 C 229.143 0.178, 218.938 0.442, 213.633 1.521 M 224.322 44.055 C 203.751 47.663, 184.379 62.797, 176.648 81.301 L 175.102 85 256 85 L 336.898 85 335.352 81.301 C 328.767 65.539, 314.368 52.594, 296.490 46.362 C 288.518 43.583, 288.435 43.576, 259 43.362 C 242.775 43.243, 227.170 43.555, 224.322 44.055 M 128.239 271.250 C 128.585 431.151, 127.993 418.184, 135.671 434 C 140.469 443.882, 152.425 456.007, 162.500 461.207 C 177.326 468.861, 172.703 468.500, 256 468.500 C 339.285 468.500, 334.652 468.861, 349.500 461.217 C 359.454 456.092, 371.493 443.858, 376.333 433.947 C 384.004 418.239, 383.415 431.147, 383.761 271.250 L 384.071 128 256 128 L 127.929 128 128.239 271.250 M 203.309 215.533 C 200.134 217.116, 197.152 219.616, 195.363 222.197 L 192.500 226.328 192.231 297.470 L 191.961 368.612 194.307 373.056 C 195.598 375.500, 198.570 378.850, 200.913 380.500 C 204.813 383.247, 205.869 383.500, 213.422 383.500 C 220.871 383.500, 222.072 383.222, 225.802 380.637 C 228.384 378.848, 230.884 375.867, 232.467 372.691 L 235 367.607 234.978 298.554 C 234.957 233.473, 234.850 229.270, 233.104 225.500 C 227.871 214.198, 214.779 209.818, 203.309 215.533 M 289.500 214.896 C 287.300 215.914, 284.286 218.042, 282.803 219.624 C 276.822 226.002, 277 223.581, 277 298.772 L 277 367.607 279.533 372.691 C 283.277 380.204, 288.387 383.385, 297.397 383.814 C 306.499 384.247, 311.988 381.622, 316.769 374.551 L 320.038 369.716 319.769 298.022 L 319.500 226.328 316.637 222.197 C 310.966 214.015, 298.593 210.686, 289.500 214.896" stroke="none" fill={card.mobileAppDashboard.accentColor} fill-rule="evenodd" /></svg>
                    </button>
                    <button className="card__more-button" type='button' onClick={clickMoreButton} style={{ backgroundColor: card.mobileAppDashboard.backgroundColor, color: card.mobileAppDashboard.mainColor }}>Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default Card