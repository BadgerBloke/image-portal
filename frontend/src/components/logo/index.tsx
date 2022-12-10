import Link from "next/link";

const MainLogo = (props: any) => {
    const { height, width } = props;
    return (
        <div className="flex items-center justify-center w-full h-full overflow-hidden">
            <Link href="/">
                <a
                    className={`flex items-center justify-center ${
                        height || "h-80"
                    } ${width || "w-60"}`}
                >
                    <svg
                        width="1498"
                        height="1718"
                        viewBox="0 0 1498 1718"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M453.07 520.545L601.73 779.59L297.33 1310H0L453.07 520.545ZM598.92 260.273H602.43H899.76L898 263.335L898.62 264.412L749.96 523.454L598.92 260.273ZM750.63 0L900 260.273H602.67L601.97 259.042L750.63 0Z"
                            className="fill-brand-red"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1046.63 524L1349.91 1052.11H1350.11L1498 1309.8H1497.89L1498 1310H1200.69L1200.54 1309.73H1200.33L902.98 1309.65L755 1051.96L1052.35 1052.04H1052.56L897.98 782.86L1046.63 524Z"
                            className="fill-brand-primary"
                        />
                        <path
                            d="M376 1628H1129.08"
                            className="stroke-brand-muted"
                            strokeWidth="2.29167"
                            strokeMiterlimit="8"
                        />
                        <path
                            d="M375.367 1440.96C370.56 1440.96 366.577 1439.52 363.419 1436.64C360.397 1433.75 358.887 1430.11 358.887 1425.72C358.887 1421.32 360.397 1417.75 363.419 1415.01C366.577 1412.12 370.56 1410.68 375.367 1410.68C380.173 1410.68 384.087 1412.12 387.109 1415.01C390.267 1417.75 391.847 1421.32 391.847 1425.72C391.847 1430.11 390.267 1433.75 387.109 1436.64C384.087 1439.52 380.173 1440.96 375.367 1440.96ZM362.183 1559V1456.82H388.551V1559H362.183ZM416.073 1559V1456.82H439.351L441.617 1470.63C444.913 1465.68 449.239 1461.77 454.595 1458.88C460.088 1455.86 466.405 1454.35 473.547 1454.35C489.34 1454.35 500.533 1460.46 507.125 1472.69C510.833 1467.06 515.777 1462.59 521.957 1459.3C528.274 1456 535.141 1454.35 542.557 1454.35C555.878 1454.35 566.109 1458.33 573.251 1466.3C580.392 1474.27 583.963 1485.94 583.963 1501.32V1559H557.595V1503.79C557.595 1495 555.878 1488.27 552.445 1483.6C549.149 1478.93 543.999 1476.6 536.995 1476.6C529.853 1476.6 524.085 1479.21 519.691 1484.43C515.433 1489.65 513.305 1496.93 513.305 1506.26V1559H486.937V1503.79C486.937 1495 485.22 1488.27 481.787 1483.6C478.353 1478.93 473.066 1476.6 465.925 1476.6C458.921 1476.6 453.221 1479.21 448.827 1484.43C444.569 1489.65 442.441 1496.93 442.441 1506.26V1559H416.073ZM644.222 1561.47C635.433 1561.47 628.223 1560.1 622.592 1557.35C616.962 1554.47 612.773 1550.69 610.026 1546.02C607.28 1541.35 605.906 1536.2 605.906 1530.57C605.906 1521.1 609.614 1513.41 617.03 1507.5C624.446 1501.59 635.57 1498.64 650.402 1498.64H676.358V1496.17C676.358 1489.17 674.367 1484.02 670.384 1480.72C666.402 1477.42 661.458 1475.78 655.552 1475.78C650.196 1475.78 645.527 1477.08 641.544 1479.69C637.562 1482.16 635.09 1485.87 634.128 1490.81H608.378C609.065 1483.4 611.537 1476.94 615.794 1471.45C620.189 1465.96 625.82 1461.77 632.686 1458.88C639.553 1455.86 647.244 1454.35 655.758 1454.35C670.316 1454.35 681.783 1457.99 690.16 1465.27C698.538 1472.55 702.726 1482.85 702.726 1496.17V1559H680.272L677.8 1542.52C674.779 1548.01 670.522 1552.55 665.028 1556.12C659.672 1559.69 652.737 1561.47 644.222 1561.47ZM650.196 1540.87C657.75 1540.87 663.586 1538.4 667.706 1533.46C671.964 1528.51 674.642 1522.4 675.74 1515.12H653.286C646.282 1515.12 641.27 1516.43 638.248 1519.04C635.227 1521.51 633.716 1524.6 633.716 1528.31C633.716 1532.29 635.227 1535.38 638.248 1537.58C641.27 1539.77 645.252 1540.87 650.196 1540.87ZM771.149 1528.51C766.205 1528.51 761.604 1527.96 757.347 1526.86L749.725 1534.49C752.06 1535.72 755.218 1536.75 759.201 1537.58C763.184 1538.4 769.638 1539.22 778.565 1540.05C792.161 1541.28 802.049 1544.51 808.229 1549.73C814.409 1554.95 817.499 1562.16 817.499 1571.36C817.499 1577.4 815.851 1583.1 812.555 1588.46C809.259 1593.95 804.178 1598.35 797.311 1601.64C790.444 1605.08 781.655 1606.79 770.943 1606.79C756.386 1606.79 744.644 1604.05 735.717 1598.55C726.79 1593.2 722.327 1585.09 722.327 1574.24C722.327 1565.04 726.79 1557.08 735.717 1550.35C732.97 1549.11 730.567 1547.81 728.507 1546.43C726.584 1545.06 724.868 1543.62 723.357 1542.11V1537.37L741.279 1518.42C733.314 1511.41 729.331 1502.42 729.331 1491.43C729.331 1484.57 730.979 1478.32 734.275 1472.69C737.708 1467.06 742.515 1462.59 748.695 1459.3C754.875 1456 762.36 1454.35 771.149 1454.35C776.917 1454.35 782.273 1455.18 787.217 1456.82H825.945V1472.89L808.435 1474.13C811.182 1479.35 812.555 1485.11 812.555 1491.43C812.555 1498.3 810.907 1504.55 807.611 1510.18C804.315 1515.81 799.508 1520.27 793.191 1523.57C787.011 1526.86 779.664 1528.51 771.149 1528.51ZM771.149 1508.32C776.505 1508.32 780.9 1506.88 784.333 1504C787.904 1501.11 789.689 1496.99 789.689 1491.64C789.689 1486.28 787.904 1482.16 784.333 1479.28C780.9 1476.39 776.505 1474.95 771.149 1474.95C765.518 1474.95 760.986 1476.39 757.553 1479.28C754.12 1482.16 752.403 1486.28 752.403 1491.64C752.403 1496.99 754.12 1501.11 757.553 1504C760.986 1506.88 765.518 1508.32 771.149 1508.32ZM746.429 1571.57C746.429 1576.65 748.764 1580.42 753.433 1582.9C758.24 1585.51 764.076 1586.81 770.943 1586.81C777.535 1586.81 782.891 1585.44 787.011 1582.69C791.131 1580.08 793.191 1576.51 793.191 1571.98C793.191 1568.27 791.818 1565.18 789.071 1562.71C786.462 1560.24 781.174 1558.73 773.209 1558.18C767.578 1557.76 762.36 1557.15 757.553 1556.32C753.57 1558.52 750.686 1560.92 748.901 1563.53C747.253 1566.14 746.429 1568.82 746.429 1571.57ZM890.795 1561.47C880.495 1561.47 871.362 1559.27 863.397 1554.88C855.431 1550.49 849.183 1544.31 844.651 1536.34C840.119 1528.37 837.853 1519.17 837.853 1508.74C837.853 1498.16 840.05 1488.75 844.445 1480.51C848.977 1472.27 855.157 1465.89 862.985 1461.36C870.95 1456.69 880.289 1454.35 891.001 1454.35C901.026 1454.35 909.884 1456.55 917.575 1460.94C925.265 1465.34 931.239 1471.38 935.497 1479.07C939.891 1486.63 942.089 1495.07 942.089 1504.41C942.089 1505.92 942.02 1507.5 941.883 1509.15C941.883 1510.8 941.814 1512.51 941.677 1514.3H864.015C864.564 1522.26 867.311 1528.51 872.255 1533.04C877.336 1537.58 883.447 1539.84 890.589 1539.84C895.945 1539.84 900.408 1538.67 903.979 1536.34C907.687 1533.87 910.433 1530.71 912.219 1526.86H938.999C937.076 1533.32 933.849 1539.22 929.317 1544.58C924.922 1549.8 919.429 1553.92 912.837 1556.94C906.382 1559.96 899.035 1561.47 890.795 1561.47ZM891.001 1475.78C884.546 1475.78 878.847 1477.63 873.903 1481.34C868.959 1484.91 865.8 1490.4 864.427 1497.82H915.309C914.897 1491.09 912.425 1485.73 907.893 1481.75C903.361 1477.77 897.73 1475.78 891.001 1475.78Z"
                            className="fill-brand-primary"
                        />
                        <path
                            d="M955.614 1559L1008.35 1414.8H1038.01L1090.75 1559H1062.73L1051.2 1525.63H994.96L983.218 1559H955.614ZM1002.17 1505.03H1043.99L1022.98 1445.08L1002.17 1505.03ZM1122.92 1440.96C1118.11 1440.96 1114.13 1439.52 1110.97 1436.64C1107.95 1433.75 1106.44 1430.11 1106.44 1425.72C1106.44 1421.32 1107.95 1417.75 1110.97 1415.01C1114.13 1412.12 1118.11 1410.68 1122.92 1410.68C1127.73 1410.68 1131.64 1412.12 1134.66 1415.01C1137.82 1417.75 1139.4 1421.32 1139.4 1425.72C1139.4 1430.11 1137.82 1433.75 1134.66 1436.64C1131.64 1439.52 1127.73 1440.96 1122.92 1440.96ZM1109.74 1559V1456.82H1136.11V1559H1109.74Z"
                            className="fill-brand-red"
                        />
                        <path
                            d="M374.976 1441.44C370.169 1441.44 366.187 1439.93 363.028 1436.91C360.007 1433.89 358.496 1430.25 358.496 1425.99C358.496 1421.6 360.007 1417.89 363.028 1414.87C366.187 1411.85 370.169 1410.34 374.976 1410.34C379.783 1410.34 383.697 1411.85 386.718 1414.87C389.877 1417.89 391.456 1421.6 391.456 1425.99C391.456 1430.25 389.877 1433.89 386.718 1436.91C383.697 1439.93 379.783 1441.44 374.976 1441.44Z"
                            className="fill-brand-red"
                        />
                        <path
                            d="M374.28 1655.19C373.13 1655.19 372.164 1654.82 371.382 1654.08C370.646 1653.3 370.278 1652.33 370.278 1651.18C370.278 1650.08 370.646 1649.16 371.382 1648.42C372.164 1647.69 373.13 1647.32 374.28 1647.32C375.384 1647.32 376.327 1647.69 377.109 1648.42C377.891 1649.16 378.282 1650.08 378.282 1651.18C378.282 1652.33 377.891 1653.3 377.109 1654.08C376.327 1654.82 375.384 1655.19 374.28 1655.19ZM371.382 1697V1662.78H377.178V1697H371.382ZM387.27 1697V1662.78H392.514L392.928 1667.74C394.032 1665.9 395.504 1664.48 397.344 1663.47C399.184 1662.45 401.254 1661.95 403.554 1661.95C406.268 1661.95 408.591 1662.5 410.523 1663.6C412.501 1664.71 414.019 1666.39 415.077 1668.64C416.273 1666.57 417.906 1664.94 419.976 1663.74C422.092 1662.55 424.369 1661.95 426.807 1661.95C430.901 1661.95 434.167 1663.19 436.605 1665.67C439.043 1668.11 440.262 1671.88 440.262 1676.99V1697H434.535V1677.61C434.535 1674.07 433.822 1671.4 432.396 1669.61C430.97 1667.81 428.923 1666.92 426.255 1666.92C423.495 1666.92 421.195 1668 419.355 1670.16C417.561 1672.27 416.664 1675.31 416.664 1679.27V1697H410.868V1677.61C410.868 1674.07 410.155 1671.4 408.729 1669.61C407.303 1667.81 405.256 1666.92 402.588 1666.92C399.874 1666.92 397.597 1668 395.757 1670.16C393.963 1672.27 393.066 1675.31 393.066 1679.27V1697H387.27ZM460.377 1697.83C457.525 1697.83 455.156 1697.34 453.27 1696.38C451.384 1695.41 449.981 1694.12 449.061 1692.51C448.141 1690.9 447.681 1689.16 447.681 1687.27C447.681 1683.77 449.015 1681.08 451.683 1679.2C454.351 1677.31 457.985 1676.37 462.585 1676.37H471.831V1675.95C471.831 1672.96 471.049 1670.71 469.485 1669.19C467.921 1667.63 465.828 1666.85 463.206 1666.85C460.952 1666.85 458.997 1667.42 457.341 1668.57C455.731 1669.68 454.719 1671.31 454.305 1673.47H448.371C448.601 1670.99 449.429 1668.89 450.855 1667.19C452.327 1665.49 454.144 1664.2 456.306 1663.33C458.468 1662.41 460.768 1661.95 463.206 1661.95C467.99 1661.95 471.578 1663.24 473.97 1665.81C476.408 1668.34 477.627 1671.72 477.627 1675.95V1697H472.452L472.107 1690.86C471.141 1692.79 469.715 1694.45 467.829 1695.83C465.989 1697.16 463.505 1697.83 460.377 1697.83ZM461.274 1692.93C463.482 1692.93 465.368 1692.35 466.932 1691.2C468.542 1690.05 469.761 1688.56 470.589 1686.72C471.417 1684.88 471.831 1682.95 471.831 1680.92V1680.85H463.068C459.664 1680.85 457.249 1681.45 455.823 1682.65C454.443 1683.8 453.753 1685.25 453.753 1686.99C453.753 1688.79 454.397 1690.24 455.685 1691.34C457.019 1692.4 458.882 1692.93 461.274 1692.93ZM499.847 1686.24C497.915 1686.24 496.144 1685.98 494.534 1685.48L491.084 1688.72C491.59 1689.09 492.211 1689.41 492.947 1689.69C493.729 1689.92 494.833 1690.15 496.259 1690.38C497.685 1690.56 499.686 1690.77 502.262 1691C506.862 1691.32 510.151 1692.38 512.129 1694.17C514.107 1695.96 515.096 1698.31 515.096 1701.21C515.096 1703.19 514.544 1705.07 513.44 1706.87C512.382 1708.66 510.726 1710.13 508.472 1711.28C506.264 1712.43 503.412 1713.01 499.916 1713.01C496.834 1713.01 494.097 1712.59 491.705 1711.77C489.313 1710.98 487.45 1709.77 486.116 1708.11C484.782 1706.5 484.115 1704.45 484.115 1701.97C484.115 1700.68 484.46 1699.28 485.15 1697.76C485.84 1696.29 487.128 1694.88 489.014 1693.55C488.002 1693.14 487.128 1692.7 486.392 1692.24C485.702 1691.73 485.058 1691.18 484.46 1690.58V1689L490.325 1683.2C487.611 1680.9 486.254 1677.86 486.254 1674.09C486.254 1671.84 486.783 1669.79 487.841 1667.95C488.899 1666.11 490.44 1664.66 492.464 1663.6C494.488 1662.5 496.949 1661.95 499.847 1661.95C501.825 1661.95 503.619 1662.22 505.229 1662.78H517.856V1667.12L511.439 1667.4C512.773 1669.33 513.44 1671.56 513.44 1674.09C513.44 1676.35 512.888 1678.39 511.784 1680.23C510.726 1682.07 509.185 1683.54 507.161 1684.65C505.183 1685.71 502.745 1686.24 499.847 1686.24ZM499.847 1681.47C502.285 1681.47 504.217 1680.85 505.643 1679.61C507.115 1678.32 507.851 1676.48 507.851 1674.09C507.851 1671.75 507.115 1669.95 505.643 1668.71C504.217 1667.42 502.285 1666.78 499.847 1666.78C497.363 1666.78 495.385 1667.42 493.913 1668.71C492.487 1669.95 491.774 1671.75 491.774 1674.09C491.774 1676.48 492.487 1678.32 493.913 1679.61C495.385 1680.85 497.363 1681.47 499.847 1681.47ZM489.773 1701.42C489.773 1703.72 490.739 1705.42 492.671 1706.52C494.603 1707.67 497.018 1708.25 499.916 1708.25C502.768 1708.25 505.045 1707.63 506.747 1706.38C508.495 1705.14 509.369 1703.49 509.369 1701.42C509.369 1699.94 508.771 1698.66 507.575 1697.55C506.379 1696.49 504.171 1695.87 500.951 1695.69C498.421 1695.5 496.236 1695.27 494.396 1695C492.51 1696.01 491.268 1697.09 490.67 1698.24C490.072 1699.44 489.773 1700.5 489.773 1701.42ZM538.433 1697.83C535.167 1697.83 532.269 1697.09 529.739 1695.62C527.209 1694.1 525.208 1692.01 523.736 1689.34C522.31 1686.67 521.597 1683.52 521.597 1679.89C521.597 1676.3 522.31 1673.17 523.736 1670.5C525.162 1667.79 527.14 1665.7 529.67 1664.22C532.246 1662.71 535.213 1661.95 538.571 1661.95C541.883 1661.95 544.735 1662.71 547.127 1664.22C549.565 1665.7 551.428 1667.65 552.716 1670.09C554.004 1672.53 554.648 1675.15 554.648 1677.96C554.648 1678.46 554.625 1678.97 554.579 1679.47C554.579 1679.98 554.579 1680.55 554.579 1681.2H527.324C527.462 1683.82 528.06 1686.01 529.118 1687.75C530.222 1689.46 531.579 1690.74 533.189 1691.62C534.845 1692.49 536.593 1692.93 538.433 1692.93C540.825 1692.93 542.826 1692.38 544.436 1691.27C546.046 1690.17 547.219 1688.67 547.955 1686.79H553.682C552.762 1689.96 550.991 1692.61 548.369 1694.72C545.793 1696.79 542.481 1697.83 538.433 1697.83ZM538.433 1666.85C535.673 1666.85 533.212 1667.7 531.05 1669.4C528.934 1671.06 527.715 1673.49 527.393 1676.71H548.921C548.783 1673.63 547.725 1671.22 545.747 1669.47C543.769 1667.72 541.331 1666.85 538.433 1666.85ZM575.44 1697.83C571.346 1697.83 567.942 1696.79 565.228 1694.72C562.514 1692.65 560.927 1689.85 560.467 1686.3H566.401C566.769 1688.1 567.712 1689.66 569.23 1691C570.794 1692.28 572.887 1692.93 575.509 1692.93C577.947 1692.93 579.741 1692.42 580.891 1691.41C582.041 1690.35 582.616 1689.11 582.616 1687.68C582.616 1685.61 581.857 1684.23 580.339 1683.54C578.867 1682.85 576.774 1682.23 574.06 1681.68C572.22 1681.31 570.38 1680.78 568.54 1680.09C566.7 1679.4 565.159 1678.44 563.917 1677.2C562.675 1675.91 562.054 1674.23 562.054 1672.16C562.054 1669.17 563.158 1666.73 565.366 1664.85C567.62 1662.91 570.656 1661.95 574.474 1661.95C578.108 1661.95 581.075 1662.87 583.375 1664.71C585.721 1666.5 587.078 1669.08 587.446 1672.44H581.719C581.489 1670.69 580.73 1669.33 579.442 1668.36C578.2 1667.35 576.521 1666.85 574.405 1666.85C572.335 1666.85 570.725 1667.28 569.575 1668.16C568.471 1669.03 567.919 1670.18 567.919 1671.61C567.919 1672.99 568.632 1674.07 570.058 1674.85C571.53 1675.63 573.508 1676.3 575.992 1676.85C578.108 1677.31 580.109 1677.89 581.995 1678.58C583.927 1679.22 585.491 1680.21 586.687 1681.54C587.929 1682.83 588.55 1684.72 588.55 1687.2C588.596 1690.28 587.423 1692.84 585.031 1694.86C582.685 1696.84 579.488 1697.83 575.44 1697.83ZM618.817 1712.18L627.304 1693.69H625.303L611.71 1662.78H617.989L629.305 1689.41L641.311 1662.78H647.314L624.889 1712.18H618.817ZM665.792 1697.83C662.572 1697.83 659.674 1697.09 657.098 1695.62C654.522 1694.15 652.475 1692.08 650.957 1689.41C649.485 1686.7 648.749 1683.52 648.749 1679.89C648.749 1676.25 649.508 1673.1 651.026 1670.43C652.544 1667.72 654.591 1665.63 657.167 1664.16C659.789 1662.68 662.71 1661.95 665.93 1661.95C669.15 1661.95 672.048 1662.68 674.624 1664.16C677.2 1665.63 679.224 1667.72 680.696 1670.43C682.214 1673.1 682.973 1676.25 682.973 1679.89C682.973 1683.52 682.214 1686.7 680.696 1689.41C679.178 1692.08 677.108 1694.15 674.486 1695.62C671.91 1697.09 669.012 1697.83 665.792 1697.83ZM665.792 1692.86C667.77 1692.86 669.61 1692.38 671.312 1691.41C673.014 1690.44 674.394 1689 675.452 1687.06C676.51 1685.13 677.039 1682.74 677.039 1679.89C677.039 1677.04 676.51 1674.64 675.452 1672.71C674.44 1670.78 673.083 1669.33 671.381 1668.36C669.679 1667.4 667.862 1666.92 665.93 1666.92C663.952 1666.92 662.112 1667.4 660.41 1668.36C658.708 1669.33 657.328 1670.78 656.27 1672.71C655.212 1674.64 654.683 1677.04 654.683 1679.89C654.683 1682.74 655.212 1685.13 656.27 1687.06C657.328 1689 658.685 1690.44 660.341 1691.41C662.043 1692.38 663.86 1692.86 665.792 1692.86ZM703.521 1697.83C699.473 1697.83 696.253 1696.61 693.861 1694.17C691.469 1691.69 690.273 1687.89 690.273 1682.79V1662.78H696.069V1682.16C696.069 1689.29 698.99 1692.86 704.832 1692.86C707.822 1692.86 710.283 1691.8 712.215 1689.69C714.193 1687.52 715.182 1684.46 715.182 1680.51V1662.78H720.978V1697H715.734L715.32 1690.86C714.262 1693.02 712.675 1694.72 710.559 1695.96C708.489 1697.21 706.143 1697.83 703.521 1697.83ZM730.518 1697V1662.78H735.762L736.245 1669.33C737.303 1667.08 738.913 1665.28 741.075 1663.95C743.237 1662.61 745.905 1661.95 749.079 1661.95V1668.02H747.492C745.468 1668.02 743.605 1668.39 741.903 1669.12C740.201 1669.81 738.844 1671.01 737.832 1672.71C736.82 1674.41 736.314 1676.76 736.314 1679.75V1697H730.518ZM777.364 1655.19C776.214 1655.19 775.248 1654.82 774.466 1654.08C773.73 1653.3 773.362 1652.33 773.362 1651.18C773.362 1650.08 773.73 1649.16 774.466 1648.42C775.248 1647.69 776.214 1647.32 777.364 1647.32C778.468 1647.32 779.411 1647.69 780.193 1648.42C780.975 1649.16 781.366 1650.08 781.366 1651.18C781.366 1652.33 780.975 1653.3 780.193 1654.08C779.411 1654.82 778.468 1655.19 777.364 1655.19ZM774.466 1697V1662.78H780.262V1697H774.466ZM790.354 1697V1662.78H795.598L796.012 1667.74C797.116 1665.9 798.588 1664.48 800.428 1663.47C802.268 1662.45 804.338 1661.95 806.638 1661.95C809.352 1661.95 811.675 1662.5 813.607 1663.6C815.585 1664.71 817.103 1666.39 818.161 1668.64C819.357 1666.57 820.99 1664.94 823.06 1663.74C825.176 1662.55 827.453 1661.95 829.891 1661.95C833.985 1661.95 837.251 1663.19 839.689 1665.67C842.127 1668.11 843.346 1671.88 843.346 1676.99V1697H837.619V1677.61C837.619 1674.07 836.906 1671.4 835.48 1669.61C834.054 1667.81 832.007 1666.92 829.339 1666.92C826.579 1666.92 824.279 1668 822.439 1670.16C820.645 1672.27 819.748 1675.31 819.748 1679.27V1697H813.952V1677.61C813.952 1674.07 813.239 1671.4 811.813 1669.61C810.387 1667.81 808.34 1666.92 805.672 1666.92C802.958 1666.92 800.681 1668 798.841 1670.16C797.047 1672.27 796.15 1675.31 796.15 1679.27V1697H790.354ZM863.461 1697.83C860.609 1697.83 858.24 1697.34 856.354 1696.38C854.468 1695.41 853.065 1694.12 852.145 1692.51C851.225 1690.9 850.765 1689.16 850.765 1687.27C850.765 1683.77 852.099 1681.08 854.767 1679.2C857.435 1677.31 861.069 1676.37 865.669 1676.37H874.915V1675.95C874.915 1672.96 874.133 1670.71 872.569 1669.19C871.005 1667.63 868.912 1666.85 866.29 1666.85C864.036 1666.85 862.081 1667.42 860.425 1668.57C858.815 1669.68 857.803 1671.31 857.389 1673.47H851.455C851.685 1670.99 852.513 1668.89 853.939 1667.19C855.411 1665.49 857.228 1664.2 859.39 1663.33C861.552 1662.41 863.852 1661.95 866.29 1661.95C871.074 1661.95 874.662 1663.24 877.054 1665.81C879.492 1668.34 880.711 1671.72 880.711 1675.95V1697H875.536L875.191 1690.86C874.225 1692.79 872.799 1694.45 870.913 1695.83C869.073 1697.16 866.589 1697.83 863.461 1697.83ZM864.358 1692.93C866.566 1692.93 868.452 1692.35 870.016 1691.2C871.626 1690.05 872.845 1688.56 873.673 1686.72C874.501 1684.88 874.915 1682.95 874.915 1680.92V1680.85H866.152C862.748 1680.85 860.333 1681.45 858.907 1682.65C857.527 1683.8 856.837 1685.25 856.837 1686.99C856.837 1688.79 857.481 1690.24 858.769 1691.34C860.103 1692.4 861.966 1692.93 864.358 1692.93ZM902.931 1686.24C900.999 1686.24 899.228 1685.98 897.618 1685.48L894.168 1688.72C894.674 1689.09 895.295 1689.41 896.031 1689.69C896.813 1689.92 897.917 1690.15 899.343 1690.38C900.769 1690.56 902.77 1690.77 905.346 1691C909.946 1691.32 913.235 1692.38 915.213 1694.17C917.191 1695.96 918.18 1698.31 918.18 1701.21C918.18 1703.19 917.628 1705.07 916.524 1706.87C915.466 1708.66 913.81 1710.13 911.556 1711.28C909.348 1712.43 906.496 1713.01 903 1713.01C899.918 1713.01 897.181 1712.59 894.789 1711.77C892.397 1710.98 890.534 1709.77 889.2 1708.11C887.866 1706.5 887.199 1704.45 887.199 1701.97C887.199 1700.68 887.544 1699.28 888.234 1697.76C888.924 1696.29 890.212 1694.88 892.098 1693.55C891.086 1693.14 890.212 1692.7 889.476 1692.24C888.786 1691.73 888.142 1691.18 887.544 1690.58V1689L893.409 1683.2C890.695 1680.9 889.338 1677.86 889.338 1674.09C889.338 1671.84 889.867 1669.79 890.925 1667.95C891.983 1666.11 893.524 1664.66 895.548 1663.6C897.572 1662.5 900.033 1661.95 902.931 1661.95C904.909 1661.95 906.703 1662.22 908.313 1662.78H920.94V1667.12L914.523 1667.4C915.857 1669.33 916.524 1671.56 916.524 1674.09C916.524 1676.35 915.972 1678.39 914.868 1680.23C913.81 1682.07 912.269 1683.54 910.245 1684.65C908.267 1685.71 905.829 1686.24 902.931 1686.24ZM902.931 1681.47C905.369 1681.47 907.301 1680.85 908.727 1679.61C910.199 1678.32 910.935 1676.48 910.935 1674.09C910.935 1671.75 910.199 1669.95 908.727 1668.71C907.301 1667.42 905.369 1666.78 902.931 1666.78C900.447 1666.78 898.469 1667.42 896.997 1668.71C895.571 1669.95 894.858 1671.75 894.858 1674.09C894.858 1676.48 895.571 1678.32 896.997 1679.61C898.469 1680.85 900.447 1681.47 902.931 1681.47ZM892.857 1701.42C892.857 1703.72 893.823 1705.42 895.755 1706.52C897.687 1707.67 900.102 1708.25 903 1708.25C905.852 1708.25 908.129 1707.63 909.831 1706.38C911.579 1705.14 912.453 1703.49 912.453 1701.42C912.453 1699.94 911.855 1698.66 910.659 1697.55C909.463 1696.49 907.255 1695.87 904.035 1695.69C901.505 1695.5 899.32 1695.27 897.48 1695C895.594 1696.01 894.352 1697.09 893.754 1698.24C893.156 1699.44 892.857 1700.5 892.857 1701.42ZM930.997 1655.19C929.847 1655.19 928.881 1654.82 928.099 1654.08C927.363 1653.3 926.995 1652.33 926.995 1651.18C926.995 1650.08 927.363 1649.16 928.099 1648.42C928.881 1647.69 929.847 1647.32 930.997 1647.32C932.101 1647.32 933.044 1647.69 933.826 1648.42C934.608 1649.16 934.999 1650.08 934.999 1651.18C934.999 1652.33 934.608 1653.3 933.826 1654.08C933.044 1654.82 932.101 1655.19 930.997 1655.19ZM928.099 1697V1662.78H933.895V1697H928.099ZM943.987 1697V1662.78H949.231L949.576 1668.92C950.68 1666.75 952.267 1665.05 954.337 1663.81C956.407 1662.57 958.753 1661.95 961.375 1661.95C965.423 1661.95 968.643 1663.19 971.035 1665.67C973.473 1668.11 974.692 1671.88 974.692 1676.99V1697H968.896V1677.61C968.896 1670.48 965.952 1666.92 960.064 1666.92C957.12 1666.92 954.659 1668 952.681 1670.16C950.749 1672.27 949.783 1675.31 949.783 1679.27V1697H943.987ZM994.858 1697.83C992.006 1697.83 989.637 1697.34 987.751 1696.38C985.865 1695.41 984.462 1694.12 983.542 1692.51C982.622 1690.9 982.162 1689.16 982.162 1687.27C982.162 1683.77 983.496 1681.08 986.164 1679.2C988.832 1677.31 992.466 1676.37 997.066 1676.37H1006.31V1675.95C1006.31 1672.96 1005.53 1670.71 1003.97 1669.19C1002.4 1667.63 1000.31 1666.85 997.687 1666.85C995.433 1666.85 993.478 1667.42 991.822 1668.57C990.212 1669.68 989.2 1671.31 988.786 1673.47H982.852C983.082 1670.99 983.91 1668.89 985.336 1667.19C986.808 1665.49 988.625 1664.2 990.787 1663.33C992.949 1662.41 995.249 1661.95 997.687 1661.95C1002.47 1661.95 1006.06 1663.24 1008.45 1665.81C1010.89 1668.34 1012.11 1671.72 1012.11 1675.95V1697H1006.93L1006.59 1690.86C1005.62 1692.79 1004.2 1694.45 1002.31 1695.83C1000.47 1697.16 997.986 1697.83 994.858 1697.83ZM995.755 1692.93C997.963 1692.93 999.849 1692.35 1001.41 1691.2C1003.02 1690.05 1004.24 1688.56 1005.07 1686.72C1005.9 1684.88 1006.31 1682.95 1006.31 1680.92V1680.85H997.549C994.145 1680.85 991.73 1681.45 990.304 1682.65C988.924 1683.8 988.234 1685.25 988.234 1686.99C988.234 1688.79 988.878 1690.24 990.166 1691.34C991.5 1692.4 993.363 1692.93 995.755 1692.93ZM1033.38 1697C1030.26 1697 1027.79 1696.24 1026 1694.72C1024.21 1693.21 1023.31 1690.47 1023.31 1686.51V1667.67H1017.38V1662.78H1023.31L1024.07 1654.56H1029.11V1662.78H1039.18V1667.67H1029.11V1686.51C1029.11 1688.67 1029.54 1690.15 1030.42 1690.93C1031.29 1691.66 1032.83 1692.03 1035.04 1692.03H1038.63V1697H1033.38ZM1050.06 1655.19C1048.91 1655.19 1047.95 1654.82 1047.16 1654.08C1046.43 1653.3 1046.06 1652.33 1046.06 1651.18C1046.06 1650.08 1046.43 1649.16 1047.16 1648.42C1047.95 1647.69 1048.91 1647.32 1050.06 1647.32C1051.17 1647.32 1052.11 1647.69 1052.89 1648.42C1053.67 1649.16 1054.06 1650.08 1054.06 1651.18C1054.06 1652.33 1053.67 1653.3 1052.89 1654.08C1052.11 1654.82 1051.17 1655.19 1050.06 1655.19ZM1047.16 1697V1662.78H1052.96V1697H1047.16ZM1078.65 1697.83C1075.43 1697.83 1072.53 1697.09 1069.95 1695.62C1067.38 1694.15 1065.33 1692.08 1063.81 1689.41C1062.34 1686.7 1061.6 1683.52 1061.6 1679.89C1061.6 1676.25 1062.36 1673.1 1063.88 1670.43C1065.4 1667.72 1067.45 1665.63 1070.02 1664.16C1072.64 1662.68 1075.56 1661.95 1078.78 1661.95C1082 1661.95 1084.9 1662.68 1087.48 1664.16C1090.05 1665.63 1092.08 1667.72 1093.55 1670.43C1095.07 1673.1 1095.83 1676.25 1095.83 1679.89C1095.83 1683.52 1095.07 1686.7 1093.55 1689.41C1092.03 1692.08 1089.96 1694.15 1087.34 1695.62C1084.76 1697.09 1081.87 1697.83 1078.65 1697.83ZM1078.65 1692.86C1080.62 1692.86 1082.46 1692.38 1084.17 1691.41C1085.87 1690.44 1087.25 1689 1088.31 1687.06C1089.36 1685.13 1089.89 1682.74 1089.89 1679.89C1089.89 1677.04 1089.36 1674.64 1088.31 1672.71C1087.29 1670.78 1085.94 1669.33 1084.24 1668.36C1082.53 1667.4 1080.72 1666.92 1078.78 1666.92C1076.81 1666.92 1074.97 1667.4 1073.26 1668.36C1071.56 1669.33 1070.18 1670.78 1069.12 1672.71C1068.07 1674.64 1067.54 1677.04 1067.54 1679.89C1067.54 1682.74 1068.07 1685.13 1069.12 1687.06C1070.18 1689 1071.54 1690.44 1073.2 1691.41C1074.9 1692.38 1076.71 1692.86 1078.65 1692.86ZM1103.89 1697V1662.78H1109.13L1109.48 1668.92C1110.58 1666.75 1112.17 1665.05 1114.24 1663.81C1116.31 1662.57 1118.65 1661.95 1121.27 1661.95C1125.32 1661.95 1128.54 1663.19 1130.93 1665.67C1133.37 1668.11 1134.59 1671.88 1134.59 1676.99V1697H1128.8V1677.61C1128.8 1670.48 1125.85 1666.92 1119.96 1666.92C1117.02 1666.92 1114.56 1668 1112.58 1670.16C1110.65 1672.27 1109.68 1675.31 1109.68 1679.27V1697H1103.89Z"
                            className="fill-brand-muted"
                        />
                    </svg>
                </a>
            </Link>
        </div>
    );
};

export default MainLogo;