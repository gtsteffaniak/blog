<script>
  export let currentPost = "";
  export let postOutput = "";
  export let isLoading = true
</script>

<div class:hidden={isLoading} class="myDiv" class:style-theme={currentPost.theme == "space"}>
  {#if currentPost.theme == "space"}
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      rel="stylesheet"
      type="text/css"
    />
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <div id="title">
      {@html postOutput}
    </div>
  {:else}
      {@html postOutput}
  {/if}
</div>

<style>
  .myDiv {
    margin: -1em;
    transition: opacity 1s;
    backdrop-filter: contrast(1.5);
    font-size: medium;
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    object-fit: cover;
    padding: 20px;
    height: 100%;
    width: 100%;
    width: -moz-available;          /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    width: fill-available;
  }
  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 1922px 1819px #fff, 220px 358px #fff, 1497px 1781px #fff,
      688px 1993px #fff, 999px 185px #fff, 606px 1361px #fff, 1562px 1844px #fff,
      1377px 460px #fff, 1120px 1497px #fff, 1651px 1119px #fff,
      1849px 1493px #fff, 1813px 1636px #fff, 1810px 361px #fff,
      1025px 1092px #fff, 195px 1476px #fff, 538px 180px #fff, 29px 162px #fff,
      676px 429px #fff, 1794px 326px #fff, 1021px 488px #fff, 1263px 1244px #fff,
      1851px 387px #fff, 843px 346px #fff, 1714px 898px #fff, 1311px 904px #fff,
      625px 384px #fff, 1533px 478px #fff, 757px 646px #fff, 941px 1028px #fff,
      804px 101px #fff, 334px 1595px #fff, 916px 552px #fff, 1412px 171px #fff,
      741px 487px #fff, 677px 677px #fff, 333px 173px #fff, 1836px 1886px #fff,
      49px 1435px #fff, 50px 1038px #fff, 881px 1399px #fff, 1356px 759px #fff,
      40px 1109px #fff, 1342px 1896px #fff, 1909px 137px #fff,
      1902px 1302px #fff, 912px 617px #fff, 805px 1247px #fff,
      1879px 1587px #fff, 1134px 775px #fff, 1315px 1922px #fff,
      696px 150px #fff, 1617px 158px #fff, 1404px 248px #fff, 1029px 1010px #fff,
      1604px 1184px #fff, 637px 1266px #fff, 1964px 99px #fff,
      1802px 1207px #fff, 640px 1044px #fff, 1332px 497px #fff,
      888px 1517px #fff, 861px 1152px #fff, 1886px 1171px #fff, 870px 400px #fff,
      394px 1759px #fff, 1378px 79px #fff, 526px 1805px #fff, 495px 222px #fff,
      701px 1579px #fff, 1103px 659px #fff, 1381px 1835px #fff, 967px 242px #fff,
      192px 1736px #fff, 1760px 1944px #fff, 688px 862px #fff, 1499px 3px #fff,
      752px 1295px #fff, 1880px 625px #fff, 1246px 752px #fff, 67px 1186px #fff,
      228px 1322px #fff, 1050px 1192px #fff, 156px 945px #fff, 920px 819px #fff,
      66px 1179px #fff, 1302px 1392px #fff, 170px 1405px #fff,
      1016px 1562px #fff, 21px 212px #fff, 547px 140px #fff, 845px 478px #fff,
      725px 796px #fff, 970px 934px #fff, 2000px 1043px #fff, 1835px 1407px #fff,
      463px 1783px #fff, 826px 861px #fff, 1458px 1902px #fff, 80px 211px #fff,
      1871px 1447px #fff, 866px 1720px #fff, 628px 1275px #fff, 629px 504px #fff,
      999px 1451px #fff, 39px 1003px #fff, 1958px 1355px #fff, 151px 1814px #fff,
      545px 987px #fff, 819px 1004px #fff, 83px 1141px #fff, 1435px 1668px #fff,
      999px 282px #fff, 670px 670px #fff, 1469px 1932px #fff, 432px 202px #fff,
      1459px 338px #fff, 1377px 1364px #fff, 573px 618px #fff, 1804px 269px #fff,
      916px 222px #fff, 943px 763px #fff, 1448px 29px #fff, 1262px 1375px #fff,
      433px 1721px #fff, 1761px 891px #fff, 881px 1124px #fff, 73px 455px #fff,
      1249px 58px #fff, 1523px 135px #fff, 350px 1890px #fff, 205px 1201px #fff,
      714px 471px #fff, 1992px 402px #fff, 1464px 1599px #fff, 72px 456px #fff,
      1657px 1248px #fff, 1707px 1372px #fff, 254px 1220px #fff,
      1055px 1314px #fff, 779px 43px #fff, 1854px 1223px #fff, 624px 366px #fff,
      1532px 1836px #fff, 797px 122px #fff, 1359px 1177px #fff,
      1489px 972px #fff, 289px 600px #fff, 485px 177px #fff, 1547px 301px #fff,
      503px 1853px #fff, 1450px 812px #fff, 432px 891px #fff, 45px 542px #fff,
      967px 688px #fff, 87px 1132px #fff, 1537px 54px #fff, 1761px 1138px #fff,
      1031px 5px #fff, 1631px 99px #fff, 1309px 1169px #fff, 662px 209px #fff,
      24px 1375px #fff, 1481px 216px #fff, 568px 1162px #fff, 894px 116px #fff,
      126px 346px #fff, 820px 371px #fff, 683px 954px #fff, 1644px 419px #fff,
      317px 39px #fff, 722px 64px #fff, 1503px 1305px #fff, 828px 206px #fff,
      117px 416px #fff, 318px 1497px #fff, 1715px 1311px #fff, 1533px 955px #fff,
      84px 1799px #fff, 1457px 1871px #fff, 376px 119px #fff, 1634px 1439px #fff,
      1090px 275px #fff, 953px 755px #fff, 1443px 1894px #fff, 562px 504px #fff,
      141px 382px #fff, 1841px 673px #fff, 1118px 1992px #fff, 277px 1356px #fff,
      1824px 872px #fff, 1114px 108px #fff, 967px 589px #fff, 1918px 1149px #fff,
      569px 383px #fff, 177px 2000px #fff, 1812px 186px #fff, 747px 1824px #fff,
      594px 1615px #fff, 514px 939px #fff, 294px 1118px #fff, 1086px 378px #fff,
      991px 1313px #fff, 14px 898px #fff, 650px 1784px #fff, 1485px 175px #fff,
      382px 1086px #fff, 312px 1126px #fff, 441px 1461px #fff, 851px 1831px #fff,
      555px 53px #fff, 903px 12px #fff, 1096px 1376px #fff, 1493px 236px #fff,
      1109px 127px #fff, 108px 399px #fff, 373px 1554px #fff, 814px 1868px #fff,
      1287px 298px #fff, 1398px 1541px #fff, 708px 171px #fff, 1866px 221px #fff,
      1975px 1514px #fff, 1497px 562px #fff, 1297px 1330px #fff, 793px 70px #fff,
      1361px 1736px #fff, 971px 42px #fff, 819px 161px #fff, 44px 416px #fff,
      1718px 525px #fff, 1943px 1678px #fff, 68px 1948px #fff, 218px 1982px #fff,
      1941px 1642px #fff, 990px 1873px #fff, 1595px 1917px #fff,
      874px 664px #fff, 1256px 320px #fff, 1972px 1610px #fff, 584px 1143px #fff,
      55px 1813px #fff, 1701px 1369px #fff, 1578px 756px #fff, 802px 893px #fff,
      1871px 276px #fff, 1661px 962px #fff, 1044px 73px #fff, 48px 1091px #fff,
      1095px 1060px #fff, 516px 1294px #fff, 343px 1158px #fff,
      589px 1171px #fff, 893px 1115px #fff, 1822px 1726px #fff, 1692px 74px #fff,
      1561px 264px #fff, 1834px 361px #fff, 1116px 22px #fff, 1005px 1429px #fff,
      157px 285px #fff, 110px 949px #fff, 1768px 419px #fff, 1661px 318px #fff,
      30px 1503px #fff, 1850px 255px #fff, 1282px 1710px #fff,
      1970px 1810px #fff, 1991px 1344px #fff, 541px 475px #fff,
      1834px 1852px #fff, 1678px 9px #fff, 1202px 1560px #fff,
      1097px 1707px #fff, 1408px 1242px #fff, 1284px 504px #fff,
      1883px 1918px #fff, 471px 1397px #fff, 963px 1042px #fff,
      1894px 1066px #fff, 622px 359px #fff, 1065px 702px #fff, 208px 302px #fff,
      1339px 1690px #fff, 375px 512px #fff, 1279px 1136px #fff, 855px 282px #fff,
      341px 1910px #fff, 885px 1870px #fff, 1617px 1995px #fff,
      387px 1580px #fff, 656px 43px #fff, 1323px 341px #fff, 374px 1139px #fff,
      1129px 1463px #fff, 1857px 1109px #fff, 120px 114px #fff,
      1256px 1384px #fff, 1464px 1045px #fff, 1478px 630px #fff,
      325px 1164px #fff, 484px 1936px #fff, 213px 324px #fff, 664px 1758px #fff,
      930px 52px #fff, 956px 1561px #fff, 864px 1104px #fff, 318px 202px #fff,
      693px 818px #fff, 10px 116px #fff, 94px 1999px #fff, 1758px 1803px #fff,
      1959px 1100px #fff, 96px 778px #fff, 255px 718px #fff, 1427px 1754px #fff,
      1580px 1737px #fff, 951px 1129px #fff, 1391px 564px #fff, 651px 793px #fff,
      1071px 808px #fff, 197px 919px #fff, 178px 840px #fff, 173px 1527px #fff,
      1816px 665px #fff, 1803px 1040px #fff, 1258px 1535px #fff,
      472px 1494px #fff, 762px 1422px #fff, 496px 1321px #fff, 1987px 911px #fff,
      615px 180px #fff, 384px 1135px #fff, 137px 1090px #fff, 1344px 1681px #fff,
      583px 1312px #fff, 967px 50px #fff, 311px 268px #fff, 164px 994px #fff,
      851px 999px #fff, 1524px 1289px #fff, 907px 590px #fff, 57px 548px #fff,
      794px 287px #fff, 194px 1324px #fff, 1382px 1247px #fff, 1698px 801px #fff,
      143px 1343px #fff, 1320px 1222px #fff, 655px 1469px #fff,
      1959px 1945px #fff, 934px 533px #fff, 64px 1985px #fff, 1829px 1463px #fff,
      1417px 1647px #fff, 392px 892px #fff, 1602px 688px #fff, 1135px 931px #fff,
      636px 1541px #fff, 1078px 1031px #fff, 513px 1399px #fff,
      1899px 1531px #fff, 1988px 7px #fff, 376px 463px #fff, 1228px 129px #fff,
      1669px 1100px #fff, 210px 173px #fff, 1417px 92px #fff, 1077px 370px #fff,
      1311px 1941px #fff, 345px 1412px #fff, 1184px 869px #fff,
      1486px 551px #fff, 1117px 1085px #fff, 280px 911px #fff,
      1870px 1261px #fff, 333px 1371px #fff, 1274px 32px #fff, 261px 1225px #fff,
      1417px 318px #fff, 1873px 203px #fff, 522px 1333px #fff, 568px 1755px #fff,
      1007px 1093px #fff, 200px 1459px #fff, 755px 1165px #fff, 738px 989px #fff,
      1219px 1133px #fff, 1150px 1000px #fff, 53px 216px #fff, 771px 738px #fff,
      745px 1190px #fff, 1764px 1302px #fff, 1593px 1322px #fff,
      1909px 1125px #fff, 1283px 1644px #fff, 169px 1131px #fff, 91px 620px #fff,
      441px 1131px #fff, 386px 748px #fff, 1449px 1561px #fff, 853px 1599px #fff,
      1723px 286px #fff, 679px 1611px #fff, 1962px 310px #fff, 617px 1377px #fff,
      1511px 840px #fff, 1894px 1601px #fff, 1590px 418px #fff,
      1201px 1862px #fff, 1385px 875px #fff, 1782px 1682px #fff,
      1863px 390px #fff, 1451px 1667px #fff, 1441px 139px #fff, 36px 1813px #fff,
      895px 246px #fff, 922px 1599px #fff, 1846px 641px #fff, 1110px 1665px #fff,
      71px 1519px #fff, 1078px 1661px #fff, 760px 1219px #fff,
      1241px 1100px #fff, 323px 1071px #fff, 1907px 1324px #fff,
      1504px 278px #fff, 41px 1945px #fff, 874px 1710px #fff, 1156px 435px #fff,
      95px 374px #fff, 1543px 1270px #fff, 778px 562px #fff, 999px 793px #fff,
      468px 914px #fff, 1225px 898px #fff, 351px 1501px #fff, 1641px 539px #fff,
      11px 1880px #fff, 1000px 111px #fff, 1354px 1525px #fff, 237px 692px #fff,
      622px 1898px #fff, 7px 924px #fff, 287px 1249px #fff, 555px 352px #fff,
      926px 167px #fff, 87px 60px #fff, 729px 1384px #fff, 1130px 1463px #fff,
      329px 677px #fff, 1038px 1270px #fff, 1919px 143px #fff, 758px 909px #fff,
      181px 1296px #fff, 1593px 727px #fff, 458px 1802px #fff, 870px 711px #fff,
      863px 28px #fff, 849px 946px #fff, 209px 1747px #fff, 1224px 1382px #fff,
      1142px 415px #fff, 253px 1838px #fff, 799px 92px #fff, 1696px 1285px #fff,
      1060px 640px #fff, 959px 1978px #fff, 25px 829px #fff, 1411px 1036px #fff,
      730px 972px #fff, 595px 1089px #fff, 970px 544px #fff, 581px 443px #fff,
      921px 126px #fff, 1688px 434px #fff, 1896px 1972px #fff, 817px 302px #fff,
      1339px 355px #fff, 932px 1376px #fff, 1152px 997px #fff, 597px 923px #fff,
      99px 555px #fff, 852px 359px #fff, 92px 197px #fff, 1633px 147px #fff,
      1229px 1456px #fff, 1316px 1206px #fff, 1082px 1802px #fff,
      281px 1843px #fff, 1874px 367px #fff, 1375px 801px #fff, 579px 964px #fff,
      877px 911px #fff, 1210px 620px #fff, 1243px 1259px #fff, 529px 1379px #fff,
      1643px 1444px #fff, 342px 1695px #fff, 1231px 1740px #fff,
      526px 100px #fff, 956px 101px #fff, 309px 991px #fff, 164px 1382px #fff,
      823px 393px #fff, 1574px 2000px #fff, 771px 1967px #fff,
      1925px 1933px #fff, 322px 214px #fff, 1085px 528px #fff,
      1786px 1129px #fff, 1470px 881px #fff, 1595px 28px #fff, 1798px 125px #fff,
      591px 1541px #fff, 1205px 461px #fff, 1821px 718px #fff, 325px 617px #fff,
      1206px 999px #fff, 1937px 1468px #fff, 988px 1869px #fff,
      1452px 711px #fff, 242px 396px #fff, 1647px 682px #fff, 829px 1761px #fff,
      636px 1049px #fff, 1139px 757px #fff, 1267px 517px #fff, 1269px 174px #fff,
      1481px 1969px #fff, 366px 1531px #fff, 1205px 1487px #fff,
      1537px 411px #fff, 1250px 299px #fff, 630px 1711px #fff, 1860px 358px #fff,
      125px 232px #fff, 417px 395px #fff, 1987px 798px #fff, 1659px 681px #fff,
      733px 694px #fff, 1604px 305px #fff, 1709px 1031px #fff, 1058px 825px #fff,
      1599px 673px #fff, 1184px 892px #fff, 601px 343px #fff, 736px 139px #fff,
      1025px 845px #fff, 752px 1752px #fff, 596px 153px #fff, 1513px 155px #fff,
      24px 1434px #fff, 1659px 402px #fff, 475px 256px #fff, 237px 1510px #fff,
      42px 1854px #fff, 742px 1248px #fff, 386px 1916px #fff, 1834px 1871px #fff,
      212px 508px #fff, 691px 1751px #fff, 1249px 857px #fff, 1962px 1776px #fff,
      740px 462px #fff, 1399px 545px #fff, 1940px 1979px #fff, 1957px 647px #fff,
      1661px 1005px #fff, 1080px 10px #fff, 454px 818px #fff, 1184px 235px #fff,
      1723px 659px #fff, 1006px 1419px #fff, 175px 628px #fff, 770px 1865px #fff,
      994px 1215px #fff, 1224px 151px #fff, 688px 811px #fff, 1263px 1266px #fff,
      518px 562px #fff, 1540px 1717px #fff, 1088px 1677px #fff, 434px 98px #fff,
      1219px 547px #fff, 1820px 1440px #fff, 1650px 96px #fff,
      1332px 1388px #fff, 163px 1573px #fff, 1874px 294px #fff,
      1474px 803px #fff, 80px 1527px #fff, 1458px 1944px #fff,
      1560px 1485px #fff, 307px 214px #fff, 1702px 261px #fff, 294px 1375px #fff,
      1283px 671px #fff, 658px 1750px #fff, 1569px 20px #fff, 884px 264px #fff,
      717px 543px #fff, 636px 97px #fff, 238px 105px #fff, 385px 680px #fff,
      1449px 367px #fff, 985px 273px #fff, 1735px 1454px #fff, 235px 283px #fff,
      481px 664px #fff, 1593px 1510px #fff, 1749px 903px #fff,
      1835px 1067px #fff, 263px 1273px #fff, 1461px 1520px #fff,
      1068px 1844px #fff, 1480px 743px #fff, 945px 98px #fff, 1741px 1689px #fff,
      69px 578px #fff, 857px 588px #fff, 1435px 1543px #fff, 196px 397px #fff,
      1516px 410px #fff, 826px 532px #fff, 180px 1702px #fff, 1893px 743px #fff,
      776px 1869px #fff, 1745px 445px #fff, 1376px 1507px #fff,
      1136px 1973px #fff, 422px 612px #fff, 1765px 910px #fff, 1071px 448px #fff,
      1426px 1849px #fff, 1017px 928px #fff, 827px 511px #fff,
      1936px 1851px #fff, 1355px 69px #fff, 1363px 308px #fff, 512px 963px #fff,
      1565px 695px #fff, 1609px 1853px #fff, 1396px 94px #fff, 1920px 878px #fff,
      855px 915px #fff, 1272px 119px #fff, 654px 906px #fff, 591px 1253px #fff,
      1324px 1213px #fff, 1922px 351px #fff, 476px 915px #fff, 1709px 443px #fff,
      690px 947px #fff, 756px 1199px #fff, 584px 1809px #fff, 950px 592px #fff,
      126px 88px #fff, 858px 1256px #fff, 1834px 725px #fff, 248px 934px #fff,
      1946px 178px #fff, 792px 1512px #fff, 233px 1990px #fff, 285px 304px #fff,
      253px 1518px #fff, 796px 1623px #fff, 608px 535px #fff, 273px 147px #fff,
      1636px 839px #fff, 1934px 1021px #fff, 1121px 1415px #fff,
      258px 601px #fff, 1808px 1805px #fff, 1239px 342px #fff, 21px 1623px #fff,
      1723px 1371px #fff, 372px 1913px #fff, 562px 889px #fff, 1064px 883px #fff,
      1912px 1164px #fff, 993px 1586px #fff, 670px 711px #fff,
      1776px 1012px #fff, 445px 61px #fff, 588px 1652px #fff, 820px 339px #fff,
      1834px 865px #fff, 37px 753px #fff, 1527px 1840px #fff, 1756px 1002px #fff,
      1970px 77px #fff, 1650px 327px #fff, 329px 1523px #fff, 1688px 1226px #fff,
      463px 1388px #fff, 730px 1448px #fff, 1410px 870px #fff, 818px 613px #fff,
      734px 1077px #fff, 77px 1645px #fff;
    animation: animStar 50s linear infinite;
  }
  #stars:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 1922px 1819px #fff, 220px 358px #fff, 1497px 1781px #fff,
      688px 1993px #fff, 999px 185px #fff, 606px 1361px #fff, 1562px 1844px #fff,
      1377px 460px #fff, 1120px 1497px #fff, 1651px 1119px #fff,
      1849px 1493px #fff, 1813px 1636px #fff, 1810px 361px #fff,
      1025px 1092px #fff, 195px 1476px #fff, 538px 180px #fff, 29px 162px #fff,
      676px 429px #fff, 1794px 326px #fff, 1021px 488px #fff, 1263px 1244px #fff,
      1851px 387px #fff, 843px 346px #fff, 1714px 898px #fff, 1311px 904px #fff,
      625px 384px #fff, 1533px 478px #fff, 757px 646px #fff, 941px 1028px #fff,
      804px 101px #fff, 334px 1595px #fff, 916px 552px #fff, 1412px 171px #fff,
      741px 487px #fff, 677px 677px #fff, 333px 173px #fff, 1836px 1886px #fff,
      49px 1435px #fff, 50px 1038px #fff, 881px 1399px #fff, 1356px 759px #fff,
      40px 1109px #fff, 1342px 1896px #fff, 1909px 137px #fff,
      1902px 1302px #fff, 912px 617px #fff, 805px 1247px #fff,
      1879px 1587px #fff, 1134px 775px #fff, 1315px 1922px #fff,
      696px 150px #fff, 1617px 158px #fff, 1404px 248px #fff, 1029px 1010px #fff,
      1604px 1184px #fff, 637px 1266px #fff, 1964px 99px #fff,
      1802px 1207px #fff, 640px 1044px #fff, 1332px 497px #fff,
      888px 1517px #fff, 861px 1152px #fff, 1886px 1171px #fff, 870px 400px #fff,
      394px 1759px #fff, 1378px 79px #fff, 526px 1805px #fff, 495px 222px #fff,
      701px 1579px #fff, 1103px 659px #fff, 1381px 1835px #fff, 967px 242px #fff,
      192px 1736px #fff, 1760px 1944px #fff, 688px 862px #fff, 1499px 3px #fff,
      752px 1295px #fff, 1880px 625px #fff, 1246px 752px #fff, 67px 1186px #fff,
      228px 1322px #fff, 1050px 1192px #fff, 156px 945px #fff, 920px 819px #fff,
      66px 1179px #fff, 1302px 1392px #fff, 170px 1405px #fff,
      1016px 1562px #fff, 21px 212px #fff, 547px 140px #fff, 845px 478px #fff,
      725px 796px #fff, 970px 934px #fff, 2000px 1043px #fff, 1835px 1407px #fff,
      463px 1783px #fff, 826px 861px #fff, 1458px 1902px #fff, 80px 211px #fff,
      1871px 1447px #fff, 866px 1720px #fff, 628px 1275px #fff, 629px 504px #fff,
      999px 1451px #fff, 39px 1003px #fff, 1958px 1355px #fff, 151px 1814px #fff,
      545px 987px #fff, 819px 1004px #fff, 83px 1141px #fff, 1435px 1668px #fff,
      999px 282px #fff, 670px 670px #fff, 1469px 1932px #fff, 432px 202px #fff,
      1459px 338px #fff, 1377px 1364px #fff, 573px 618px #fff, 1804px 269px #fff,
      916px 222px #fff, 943px 763px #fff, 1448px 29px #fff, 1262px 1375px #fff,
      433px 1721px #fff, 1761px 891px #fff, 881px 1124px #fff, 73px 455px #fff,
      1249px 58px #fff, 1523px 135px #fff, 350px 1890px #fff, 205px 1201px #fff,
      714px 471px #fff, 1992px 402px #fff, 1464px 1599px #fff, 72px 456px #fff,
      1657px 1248px #fff, 1707px 1372px #fff, 254px 1220px #fff,
      1055px 1314px #fff, 779px 43px #fff, 1854px 1223px #fff, 624px 366px #fff,
      1532px 1836px #fff, 797px 122px #fff, 1359px 1177px #fff,
      1489px 972px #fff, 289px 600px #fff, 485px 177px #fff, 1547px 301px #fff,
      503px 1853px #fff, 1450px 812px #fff, 432px 891px #fff, 45px 542px #fff,
      967px 688px #fff, 87px 1132px #fff, 1537px 54px #fff, 1761px 1138px #fff,
      1031px 5px #fff, 1631px 99px #fff, 1309px 1169px #fff, 662px 209px #fff,
      24px 1375px #fff, 1481px 216px #fff, 568px 1162px #fff, 894px 116px #fff,
      126px 346px #fff, 820px 371px #fff, 683px 954px #fff, 1644px 419px #fff,
      317px 39px #fff, 722px 64px #fff, 1503px 1305px #fff, 828px 206px #fff,
      117px 416px #fff, 318px 1497px #fff, 1715px 1311px #fff, 1533px 955px #fff,
      84px 1799px #fff, 1457px 1871px #fff, 376px 119px #fff, 1634px 1439px #fff,
      1090px 275px #fff, 953px 755px #fff, 1443px 1894px #fff, 562px 504px #fff,
      141px 382px #fff, 1841px 673px #fff, 1118px 1992px #fff, 277px 1356px #fff,
      1824px 872px #fff, 1114px 108px #fff, 967px 589px #fff, 1918px 1149px #fff,
      569px 383px #fff, 177px 2000px #fff, 1812px 186px #fff, 747px 1824px #fff,
      594px 1615px #fff, 514px 939px #fff, 294px 1118px #fff, 1086px 378px #fff,
      991px 1313px #fff, 14px 898px #fff, 650px 1784px #fff, 1485px 175px #fff,
      382px 1086px #fff, 312px 1126px #fff, 441px 1461px #fff, 851px 1831px #fff,
      555px 53px #fff, 903px 12px #fff, 1096px 1376px #fff, 1493px 236px #fff,
      1109px 127px #fff, 108px 399px #fff, 373px 1554px #fff, 814px 1868px #fff,
      1287px 298px #fff, 1398px 1541px #fff, 708px 171px #fff, 1866px 221px #fff,
      1975px 1514px #fff, 1497px 562px #fff, 1297px 1330px #fff, 793px 70px #fff,
      1361px 1736px #fff, 971px 42px #fff, 819px 161px #fff, 44px 416px #fff,
      1718px 525px #fff, 1943px 1678px #fff, 68px 1948px #fff, 218px 1982px #fff,
      1941px 1642px #fff, 990px 1873px #fff, 1595px 1917px #fff,
      874px 664px #fff, 1256px 320px #fff, 1972px 1610px #fff, 584px 1143px #fff,
      55px 1813px #fff, 1701px 1369px #fff, 1578px 756px #fff, 802px 893px #fff,
      1871px 276px #fff, 1661px 962px #fff, 1044px 73px #fff, 48px 1091px #fff,
      1095px 1060px #fff, 516px 1294px #fff, 343px 1158px #fff,
      589px 1171px #fff, 893px 1115px #fff, 1822px 1726px #fff, 1692px 74px #fff,
      1561px 264px #fff, 1834px 361px #fff, 1116px 22px #fff, 1005px 1429px #fff,
      157px 285px #fff, 110px 949px #fff, 1768px 419px #fff, 1661px 318px #fff,
      30px 1503px #fff, 1850px 255px #fff, 1282px 1710px #fff,
      1970px 1810px #fff, 1991px 1344px #fff, 541px 475px #fff,
      1834px 1852px #fff, 1678px 9px #fff, 1202px 1560px #fff,
      1097px 1707px #fff, 1408px 1242px #fff, 1284px 504px #fff,
      1883px 1918px #fff, 471px 1397px #fff, 963px 1042px #fff,
      1894px 1066px #fff, 622px 359px #fff, 1065px 702px #fff, 208px 302px #fff,
      1339px 1690px #fff, 375px 512px #fff, 1279px 1136px #fff, 855px 282px #fff,
      341px 1910px #fff, 885px 1870px #fff, 1617px 1995px #fff,
      387px 1580px #fff, 656px 43px #fff, 1323px 341px #fff, 374px 1139px #fff,
      1129px 1463px #fff, 1857px 1109px #fff, 120px 114px #fff,
      1256px 1384px #fff, 1464px 1045px #fff, 1478px 630px #fff,
      325px 1164px #fff, 484px 1936px #fff, 213px 324px #fff, 664px 1758px #fff,
      930px 52px #fff, 956px 1561px #fff, 864px 1104px #fff, 318px 202px #fff,
      693px 818px #fff, 10px 116px #fff, 94px 1999px #fff, 1758px 1803px #fff,
      1959px 1100px #fff, 96px 778px #fff, 255px 718px #fff, 1427px 1754px #fff,
      1580px 1737px #fff, 951px 1129px #fff, 1391px 564px #fff, 651px 793px #fff,
      1071px 808px #fff, 197px 919px #fff, 178px 840px #fff, 173px 1527px #fff,
      1816px 665px #fff, 1803px 1040px #fff, 1258px 1535px #fff,
      472px 1494px #fff, 762px 1422px #fff, 496px 1321px #fff, 1987px 911px #fff,
      615px 180px #fff, 384px 1135px #fff, 137px 1090px #fff, 1344px 1681px #fff,
      583px 1312px #fff, 967px 50px #fff, 311px 268px #fff, 164px 994px #fff,
      851px 999px #fff, 1524px 1289px #fff, 907px 590px #fff, 57px 548px #fff,
      794px 287px #fff, 194px 1324px #fff, 1382px 1247px #fff, 1698px 801px #fff,
      143px 1343px #fff, 1320px 1222px #fff, 655px 1469px #fff,
      1959px 1945px #fff, 934px 533px #fff, 64px 1985px #fff, 1829px 1463px #fff,
      1417px 1647px #fff, 392px 892px #fff, 1602px 688px #fff, 1135px 931px #fff,
      636px 1541px #fff, 1078px 1031px #fff, 513px 1399px #fff,
      1899px 1531px #fff, 1988px 7px #fff, 376px 463px #fff, 1228px 129px #fff,
      1669px 1100px #fff, 210px 173px #fff, 1417px 92px #fff, 1077px 370px #fff,
      1311px 1941px #fff, 345px 1412px #fff, 1184px 869px #fff,
      1486px 551px #fff, 1117px 1085px #fff, 280px 911px #fff,
      1870px 1261px #fff, 333px 1371px #fff, 1274px 32px #fff, 261px 1225px #fff,
      1417px 318px #fff, 1873px 203px #fff, 522px 1333px #fff, 568px 1755px #fff,
      1007px 1093px #fff, 200px 1459px #fff, 755px 1165px #fff, 738px 989px #fff,
      1219px 1133px #fff, 1150px 1000px #fff, 53px 216px #fff, 771px 738px #fff,
      745px 1190px #fff, 1764px 1302px #fff, 1593px 1322px #fff,
      1909px 1125px #fff, 1283px 1644px #fff, 169px 1131px #fff, 91px 620px #fff,
      441px 1131px #fff, 386px 748px #fff, 1449px 1561px #fff, 853px 1599px #fff,
      1723px 286px #fff, 679px 1611px #fff, 1962px 310px #fff, 617px 1377px #fff,
      1511px 840px #fff, 1894px 1601px #fff, 1590px 418px #fff,
      1201px 1862px #fff, 1385px 875px #fff, 1782px 1682px #fff,
      1863px 390px #fff, 1451px 1667px #fff, 1441px 139px #fff, 36px 1813px #fff,
      895px 246px #fff, 922px 1599px #fff, 1846px 641px #fff, 1110px 1665px #fff,
      71px 1519px #fff, 1078px 1661px #fff, 760px 1219px #fff,
      1241px 1100px #fff, 323px 1071px #fff, 1907px 1324px #fff,
      1504px 278px #fff, 41px 1945px #fff, 874px 1710px #fff, 1156px 435px #fff,
      95px 374px #fff, 1543px 1270px #fff, 778px 562px #fff, 999px 793px #fff,
      468px 914px #fff, 1225px 898px #fff, 351px 1501px #fff, 1641px 539px #fff,
      11px 1880px #fff, 1000px 111px #fff, 1354px 1525px #fff, 237px 692px #fff,
      622px 1898px #fff, 7px 924px #fff, 287px 1249px #fff, 555px 352px #fff,
      926px 167px #fff, 87px 60px #fff, 729px 1384px #fff, 1130px 1463px #fff,
      329px 677px #fff, 1038px 1270px #fff, 1919px 143px #fff, 758px 909px #fff,
      181px 1296px #fff, 1593px 727px #fff, 458px 1802px #fff, 870px 711px #fff,
      863px 28px #fff, 849px 946px #fff, 209px 1747px #fff, 1224px 1382px #fff,
      1142px 415px #fff, 253px 1838px #fff, 799px 92px #fff, 1696px 1285px #fff,
      1060px 640px #fff, 959px 1978px #fff, 25px 829px #fff, 1411px 1036px #fff,
      730px 972px #fff, 595px 1089px #fff, 970px 544px #fff, 581px 443px #fff,
      921px 126px #fff, 1688px 434px #fff, 1896px 1972px #fff, 817px 302px #fff,
      1339px 355px #fff, 932px 1376px #fff, 1152px 997px #fff, 597px 923px #fff,
      99px 555px #fff, 852px 359px #fff, 92px 197px #fff, 1633px 147px #fff,
      1229px 1456px #fff, 1316px 1206px #fff, 1082px 1802px #fff,
      281px 1843px #fff, 1874px 367px #fff, 1375px 801px #fff, 579px 964px #fff,
      877px 911px #fff, 1210px 620px #fff, 1243px 1259px #fff, 529px 1379px #fff,
      1643px 1444px #fff, 342px 1695px #fff, 1231px 1740px #fff,
      526px 100px #fff, 956px 101px #fff, 309px 991px #fff, 164px 1382px #fff,
      823px 393px #fff, 1574px 2000px #fff, 771px 1967px #fff,
      1925px 1933px #fff, 322px 214px #fff, 1085px 528px #fff,
      1786px 1129px #fff, 1470px 881px #fff, 1595px 28px #fff, 1798px 125px #fff,
      591px 1541px #fff, 1205px 461px #fff, 1821px 718px #fff, 325px 617px #fff,
      1206px 999px #fff, 1937px 1468px #fff, 988px 1869px #fff,
      1452px 711px #fff, 242px 396px #fff, 1647px 682px #fff, 829px 1761px #fff,
      636px 1049px #fff, 1139px 757px #fff, 1267px 517px #fff, 1269px 174px #fff,
      1481px 1969px #fff, 366px 1531px #fff, 1205px 1487px #fff,
      1537px 411px #fff, 1250px 299px #fff, 630px 1711px #fff, 1860px 358px #fff,
      125px 232px #fff, 417px 395px #fff, 1987px 798px #fff, 1659px 681px #fff,
      733px 694px #fff, 1604px 305px #fff, 1709px 1031px #fff, 1058px 825px #fff,
      1599px 673px #fff, 1184px 892px #fff, 601px 343px #fff, 736px 139px #fff,
      1025px 845px #fff, 752px 1752px #fff, 596px 153px #fff, 1513px 155px #fff,
      24px 1434px #fff, 1659px 402px #fff, 475px 256px #fff, 237px 1510px #fff,
      42px 1854px #fff, 742px 1248px #fff, 386px 1916px #fff, 1834px 1871px #fff,
      212px 508px #fff, 691px 1751px #fff, 1249px 857px #fff, 1962px 1776px #fff,
      740px 462px #fff, 1399px 545px #fff, 1940px 1979px #fff, 1957px 647px #fff,
      1661px 1005px #fff, 1080px 10px #fff, 454px 818px #fff, 1184px 235px #fff,
      1723px 659px #fff, 1006px 1419px #fff, 175px 628px #fff, 770px 1865px #fff,
      994px 1215px #fff, 1224px 151px #fff, 688px 811px #fff, 1263px 1266px #fff,
      518px 562px #fff, 1540px 1717px #fff, 1088px 1677px #fff, 434px 98px #fff,
      1219px 547px #fff, 1820px 1440px #fff, 1650px 96px #fff,
      1332px 1388px #fff, 163px 1573px #fff, 1874px 294px #fff,
      1474px 803px #fff, 80px 1527px #fff, 1458px 1944px #fff,
      1560px 1485px #fff, 307px 214px #fff, 1702px 261px #fff, 294px 1375px #fff,
      1283px 671px #fff, 658px 1750px #fff, 1569px 20px #fff, 884px 264px #fff,
      717px 543px #fff, 636px 97px #fff, 238px 105px #fff, 385px 680px #fff,
      1449px 367px #fff, 985px 273px #fff, 1735px 1454px #fff, 235px 283px #fff,
      481px 664px #fff, 1593px 1510px #fff, 1749px 903px #fff,
      1835px 1067px #fff, 263px 1273px #fff, 1461px 1520px #fff,
      1068px 1844px #fff, 1480px 743px #fff, 945px 98px #fff, 1741px 1689px #fff,
      69px 578px #fff, 857px 588px #fff, 1435px 1543px #fff, 196px 397px #fff,
      1516px 410px #fff, 826px 532px #fff, 180px 1702px #fff, 1893px 743px #fff,
      776px 1869px #fff, 1745px 445px #fff, 1376px 1507px #fff,
      1136px 1973px #fff, 422px 612px #fff, 1765px 910px #fff, 1071px 448px #fff,
      1426px 1849px #fff, 1017px 928px #fff, 827px 511px #fff,
      1936px 1851px #fff, 1355px 69px #fff, 1363px 308px #fff, 512px 963px #fff,
      1565px 695px #fff, 1609px 1853px #fff, 1396px 94px #fff, 1920px 878px #fff,
      855px 915px #fff, 1272px 119px #fff, 654px 906px #fff, 591px 1253px #fff,
      1324px 1213px #fff, 1922px 351px #fff, 476px 915px #fff, 1709px 443px #fff,
      690px 947px #fff, 756px 1199px #fff, 584px 1809px #fff, 950px 592px #fff,
      126px 88px #fff, 858px 1256px #fff, 1834px 725px #fff, 248px 934px #fff,
      1946px 178px #fff, 792px 1512px #fff, 233px 1990px #fff, 285px 304px #fff,
      253px 1518px #fff, 796px 1623px #fff, 608px 535px #fff, 273px 147px #fff,
      1636px 839px #fff, 1934px 1021px #fff, 1121px 1415px #fff,
      258px 601px #fff, 1808px 1805px #fff, 1239px 342px #fff, 21px 1623px #fff,
      1723px 1371px #fff, 372px 1913px #fff, 562px 889px #fff, 1064px 883px #fff,
      1912px 1164px #fff, 993px 1586px #fff, 670px 711px #fff,
      1776px 1012px #fff, 445px 61px #fff, 588px 1652px #fff, 820px 339px #fff,
      1834px 865px #fff, 37px 753px #fff, 1527px 1840px #fff, 1756px 1002px #fff,
      1970px 77px #fff, 1650px 327px #fff, 329px 1523px #fff, 1688px 1226px #fff,
      463px 1388px #fff, 730px 1448px #fff, 1410px 870px #fff, 818px 613px #fff,
      734px 1077px #fff, 77px 1645px #fff;
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 277px 741px #fff, 1172px 1541px #fff, 465px 1340px #fff,
      925px 1830px #fff, 909px 898px #fff, 5px 1359px #fff, 1135px 185px #fff,
      1682px 3px #fff, 89px 158px #fff, 1138px 1491px #fff, 1436px 1188px #fff,
      563px 151px #fff, 1926px 616px #fff, 1006px 884px #fff, 1616px 1161px #fff,
      568px 1814px #fff, 1593px 305px #fff, 1106px 848px #fff,
      1968px 1204px #fff, 1603px 47px #fff, 535px 1506px #fff, 367px 1904px #fff,
      114px 1600px #fff, 1454px 864px #fff, 1052px 651px #fff, 416px 858px #fff,
      81px 311px #fff, 1065px 1111px #fff, 177px 22px #fff, 58px 1664px #fff,
      564px 1386px #fff, 119px 678px #fff, 11px 174px #fff, 1105px 1543px #fff,
      1342px 1540px #fff, 716px 1737px #fff, 1220px 1662px #fff,
      716px 1293px #fff, 1382px 423px #fff, 1529px 810px #fff, 603px 1264px #fff,
      865px 1339px #fff, 1438px 1701px #fff, 623px 300px #fff, 54px 1633px #fff,
      1952px 839px #fff, 1986px 694px #fff, 1116px 1205px #fff,
      1471px 706px #fff, 1264px 1358px #fff, 1818px 91px #fff, 1861px 592px #fff,
      1868px 1316px #fff, 991px 195px #fff, 1845px 1587px #fff, 551px 838px #fff,
      1172px 1446px #fff, 836px 1640px #fff, 1464px 643px #fff, 97px 1155px #fff,
      963px 1320px #fff, 1553px 627px #fff, 1259px 554px #fff,
      1184px 1979px #fff, 12px 1315px #fff, 385px 1698px #fff, 870px 1542px #fff,
      1309px 1374px #fff, 732px 1933px #fff, 373px 1378px #fff,
      1078px 846px #fff, 664px 1804px #fff, 327px 225px #fff, 1469px 422px #fff,
      983px 64px #fff, 694px 403px #fff, 307px 459px #fff, 906px 145px #fff,
      71px 189px #fff, 1579px 870px #fff, 1372px 1114px #fff, 192px 723px #fff,
      1610px 1715px #fff, 1681px 918px #fff, 1503px 1981px #fff,
      789px 725px #fff, 259px 1682px #fff, 882px 1211px #fff, 1738px 483px #fff,
      633px 1410px #fff, 742px 882px #fff, 1686px 118px #fff, 482px 1095px #fff,
      466px 250px #fff, 1438px 27px #fff, 1060px 439px #fff, 123px 1621px #fff,
      370px 61px #fff, 353px 1319px #fff, 1035px 1398px #fff, 389px 1711px #fff,
      761px 1081px #fff, 1686px 125px #fff, 1100px 1216px #fff, 533px 196px #fff,
      849px 1520px #fff, 609px 1846px #fff, 1671px 1945px #fff,
      1570px 1270px #fff, 271px 1761px #fff, 420px 603px #fff, 646px 887px #fff,
      925px 227px #fff, 1411px 597px #fff, 740px 1364px #fff, 874px 618px #fff,
      1220px 1526px #fff, 142px 407px #fff, 1129px 23px #fff, 1336px 1851px #fff,
      555px 1933px #fff, 1383px 61px #fff, 1436px 1595px #fff,
      1131px 1680px #fff, 1126px 1699px #fff, 1142px 1549px #fff,
      404px 725px #fff, 1205px 1877px #fff, 56px 1084px #fff, 1084px 564px #fff,
      822px 339px #fff, 1492px 1173px #fff, 1912px 1952px #fff,
      770px 1420px #fff, 650px 1639px #fff, 1596px 1875px #fff,
      1210px 274px #fff, 241px 1734px #fff, 41px 465px #fff, 279px 435px #fff,
      877px 1607px #fff, 502px 39px #fff, 1171px 595px #fff, 1279px 1959px #fff,
      23px 1163px #fff, 75px 1385px #fff, 1592px 992px #fff, 195px 1794px #fff,
      372px 776px #fff, 51px 1969px #fff, 1024px 716px #fff, 1739px 707px #fff,
      1207px 1563px #fff, 1319px 1966px #fff, 1638px 523px #fff,
      1567px 854px #fff, 1717px 1554px #fff, 495px 39px #fff, 144px 1691px #fff,
      1170px 850px #fff, 1622px 1301px #fff, 244px 1029px #fff,
      796px 1573px #fff, 645px 70px #fff, 1639px 199px #fff, 1768px 1347px #fff,
      588px 246px #fff, 775px 1357px #fff, 271px 1681px #fff, 1558px 1072px #fff,
      947px 228px #fff, 451px 1663px #fff, 1535px 793px #fff, 1475px 741px #fff,
      1662px 1330px #fff, 726px 518px #fff, 930px 602px #fff, 809px 1937px #fff,
      214px 1553px #fff, 1831px 216px #fff, 1488px 1100px #fff,
      1886px 1808px #fff, 1421px 841px #fff, 374px 1026px #fff,
      793px 1524px #fff, 932px 954px #fff, 1375px 544px #fff, 634px 78px #fff,
      1857px 210px #fff, 957px 169px #fff, 769px 25px #fff, 817px 631px #fff,
      345px 667px #fff, 970px 1984px #fff, 988px 1861px #fff, 1129px 1181px #fff,
      904px 1255px #fff, 740px 161px #fff, 194px 580px #fff, 15px 1319px #fff;
    animation: animStar 100s linear infinite;
  }
  #stars2:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 277px 741px #fff, 1172px 1541px #fff, 465px 1340px #fff,
      925px 1830px #fff, 909px 898px #fff, 5px 1359px #fff, 1135px 185px #fff,
      1682px 3px #fff, 89px 158px #fff, 1138px 1491px #fff, 1436px 1188px #fff,
      563px 151px #fff, 1926px 616px #fff, 1006px 884px #fff, 1616px 1161px #fff,
      568px 1814px #fff, 1593px 305px #fff, 1106px 848px #fff,
      1968px 1204px #fff, 1603px 47px #fff, 535px 1506px #fff, 367px 1904px #fff,
      114px 1600px #fff, 1454px 864px #fff, 1052px 651px #fff, 416px 858px #fff,
      81px 311px #fff, 1065px 1111px #fff, 177px 22px #fff, 58px 1664px #fff,
      564px 1386px #fff, 119px 678px #fff, 11px 174px #fff, 1105px 1543px #fff,
      1342px 1540px #fff, 716px 1737px #fff, 1220px 1662px #fff,
      716px 1293px #fff, 1382px 423px #fff, 1529px 810px #fff, 603px 1264px #fff,
      865px 1339px #fff, 1438px 1701px #fff, 623px 300px #fff, 54px 1633px #fff,
      1952px 839px #fff, 1986px 694px #fff, 1116px 1205px #fff,
      1471px 706px #fff, 1264px 1358px #fff, 1818px 91px #fff, 1861px 592px #fff,
      1868px 1316px #fff, 991px 195px #fff, 1845px 1587px #fff, 551px 838px #fff,
      1172px 1446px #fff, 836px 1640px #fff, 1464px 643px #fff, 97px 1155px #fff,
      963px 1320px #fff, 1553px 627px #fff, 1259px 554px #fff,
      1184px 1979px #fff, 12px 1315px #fff, 385px 1698px #fff, 870px 1542px #fff,
      1309px 1374px #fff, 732px 1933px #fff, 373px 1378px #fff,
      1078px 846px #fff, 664px 1804px #fff, 327px 225px #fff, 1469px 422px #fff,
      983px 64px #fff, 694px 403px #fff, 307px 459px #fff, 906px 145px #fff,
      71px 189px #fff, 1579px 870px #fff, 1372px 1114px #fff, 192px 723px #fff,
      1610px 1715px #fff, 1681px 918px #fff, 1503px 1981px #fff,
      789px 725px #fff, 259px 1682px #fff, 882px 1211px #fff, 1738px 483px #fff,
      633px 1410px #fff, 742px 882px #fff, 1686px 118px #fff, 482px 1095px #fff,
      466px 250px #fff, 1438px 27px #fff, 1060px 439px #fff, 123px 1621px #fff,
      370px 61px #fff, 353px 1319px #fff, 1035px 1398px #fff, 389px 1711px #fff,
      761px 1081px #fff, 1686px 125px #fff, 1100px 1216px #fff, 533px 196px #fff,
      849px 1520px #fff, 609px 1846px #fff, 1671px 1945px #fff,
      1570px 1270px #fff, 271px 1761px #fff, 420px 603px #fff, 646px 887px #fff,
      925px 227px #fff, 1411px 597px #fff, 740px 1364px #fff, 874px 618px #fff,
      1220px 1526px #fff, 142px 407px #fff, 1129px 23px #fff, 1336px 1851px #fff,
      555px 1933px #fff, 1383px 61px #fff, 1436px 1595px #fff,
      1131px 1680px #fff, 1126px 1699px #fff, 1142px 1549px #fff,
      404px 725px #fff, 1205px 1877px #fff, 56px 1084px #fff, 1084px 564px #fff,
      822px 339px #fff, 1492px 1173px #fff, 1912px 1952px #fff,
      770px 1420px #fff, 650px 1639px #fff, 1596px 1875px #fff,
      1210px 274px #fff, 241px 1734px #fff, 41px 465px #fff, 279px 435px #fff,
      877px 1607px #fff, 502px 39px #fff, 1171px 595px #fff, 1279px 1959px #fff,
      23px 1163px #fff, 75px 1385px #fff, 1592px 992px #fff, 195px 1794px #fff,
      372px 776px #fff, 51px 1969px #fff, 1024px 716px #fff, 1739px 707px #fff,
      1207px 1563px #fff, 1319px 1966px #fff, 1638px 523px #fff,
      1567px 854px #fff, 1717px 1554px #fff, 495px 39px #fff, 144px 1691px #fff,
      1170px 850px #fff, 1622px 1301px #fff, 244px 1029px #fff,
      796px 1573px #fff, 645px 70px #fff, 1639px 199px #fff, 1768px 1347px #fff,
      588px 246px #fff, 775px 1357px #fff, 271px 1681px #fff, 1558px 1072px #fff,
      947px 228px #fff, 451px 1663px #fff, 1535px 793px #fff, 1475px 741px #fff,
      1662px 1330px #fff, 726px 518px #fff, 930px 602px #fff, 809px 1937px #fff,
      214px 1553px #fff, 1831px 216px #fff, 1488px 1100px #fff,
      1886px 1808px #fff, 1421px 841px #fff, 374px 1026px #fff,
      793px 1524px #fff, 932px 954px #fff, 1375px 544px #fff, 634px 78px #fff,
      1857px 210px #fff, 957px 169px #fff, 769px 25px #fff, 817px 631px #fff,
      345px 667px #fff, 970px 1984px #fff, 988px 1861px #fff, 1129px 1181px #fff,
      904px 1255px #fff, 740px 161px #fff, 194px 580px #fff, 15px 1319px #fff;
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 495px 1326px #fff, 1171px 1592px #fff, 1571px 573px #fff,
      1348px 90px #fff, 987px 1348px #fff, 1036px 463px #fff, 415px 961px #fff,
      1719px 1091px #fff, 1564px 1460px #fff, 1835px 1686px #fff,
      1002px 1391px #fff, 875px 1886px #fff, 377px 288px #fff, 47px 662px #fff,
      562px 1501px #fff, 445px 1075px #fff, 265px 1658px #fff, 1312px 538px #fff,
      10px 1089px #fff, 786px 256px #fff, 834px 563px #fff, 345px 1187px #fff,
      259px 615px #fff, 1680px 771px #fff, 1788px 1696px #fff, 1706px 425px #fff,
      1046px 1770px #fff, 205px 404px #fff, 189px 918px #fff, 421px 1442px #fff,
      1230px 666px #fff, 217px 893px #fff, 133px 1532px #fff, 626px 648px #fff,
      993px 835px #fff, 1180px 662px #fff, 1807px 348px #fff, 446px 778px #fff,
      1903px 1635px #fff, 437px 1564px #fff, 1641px 1895px #fff,
      404px 1198px #fff, 1852px 882px #fff, 1914px 1534px #fff, 468px 607px #fff,
      776px 88px #fff, 1392px 608px #fff, 866px 1412px #fff, 623px 259px #fff,
      1786px 43px #fff, 1894px 1571px #fff, 1683px 290px #fff, 81px 62px #fff,
      1577px 171px #fff, 1762px 1362px #fff, 1537px 1576px #fff,
      859px 1057px #fff, 1536px 1960px #fff, 1962px 18px #fff, 145px 190px #fff,
      1835px 1428px #fff, 1757px 62px #fff, 176px 1519px #fff, 416px 192px #fff,
      524px 1880px #fff, 781px 1906px #fff, 812px 1281px #fff, 294px 217px #fff,
      1658px 64px #fff, 1927px 230px #fff, 1267px 490px #fff, 1287px 938px #fff,
      634px 104px #fff, 693px 1910px #fff, 776px 342px #fff, 31px 534px #fff,
      770px 238px #fff, 1948px 1674px #fff, 1555px 1986px #fff,
      972px 1489px #fff, 1190px 657px #fff, 1222px 1114px #fff,
      1466px 492px #fff, 1084px 357px #fff, 1304px 574px #fff, 267px 1388px #fff,
      1007px 1905px #fff, 85px 951px #fff, 1478px 1318px #fff, 929px 609px #fff,
      78px 1747px #fff, 1474px 1380px #fff, 1912px 1742px #fff,
      1999px 1786px #fff, 1195px 598px #fff, 701px 803px #fff,
      1779px 1993px #fff, 198px 84px #fff, 1865px 1102px #fff,
      1414px 1675px #fff;
    animation: animStar 150s linear infinite;
  }
  #stars3:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 495px 1326px #fff, 1171px 1592px #fff, 1571px 573px #fff,
      1348px 90px #fff, 987px 1348px #fff, 1036px 463px #fff, 415px 961px #fff,
      1719px 1091px #fff, 1564px 1460px #fff, 1835px 1686px #fff,
      1002px 1391px #fff, 875px 1886px #fff, 377px 288px #fff, 47px 662px #fff,
      562px 1501px #fff, 445px 1075px #fff, 265px 1658px #fff, 1312px 538px #fff,
      10px 1089px #fff, 786px 256px #fff, 834px 563px #fff, 345px 1187px #fff,
      259px 615px #fff, 1680px 771px #fff, 1788px 1696px #fff, 1706px 425px #fff,
      1046px 1770px #fff, 205px 404px #fff, 189px 918px #fff, 421px 1442px #fff,
      1230px 666px #fff, 217px 893px #fff, 133px 1532px #fff, 626px 648px #fff,
      993px 835px #fff, 1180px 662px #fff, 1807px 348px #fff, 446px 778px #fff,
      1903px 1635px #fff, 437px 1564px #fff, 1641px 1895px #fff,
      404px 1198px #fff, 1852px 882px #fff, 1914px 1534px #fff, 468px 607px #fff,
      776px 88px #fff, 1392px 608px #fff, 866px 1412px #fff, 623px 259px #fff,
      1786px 43px #fff, 1894px 1571px #fff, 1683px 290px #fff, 81px 62px #fff,
      1577px 171px #fff, 1762px 1362px #fff, 1537px 1576px #fff,
      859px 1057px #fff, 1536px 1960px #fff, 1962px 18px #fff, 145px 190px #fff,
      1835px 1428px #fff, 1757px 62px #fff, 176px 1519px #fff, 416px 192px #fff,
      524px 1880px #fff, 781px 1906px #fff, 812px 1281px #fff, 294px 217px #fff,
      1658px 64px #fff, 1927px 230px #fff, 1267px 490px #fff, 1287px 938px #fff,
      634px 104px #fff, 693px 1910px #fff, 776px 342px #fff, 31px 534px #fff,
      770px 238px #fff, 1948px 1674px #fff, 1555px 1986px #fff,
      972px 1489px #fff, 1190px 657px #fff, 1222px 1114px #fff,
      1466px 492px #fff, 1084px 357px #fff, 1304px 574px #fff, 267px 1388px #fff,
      1007px 1905px #fff, 85px 951px #fff, 1478px 1318px #fff, 929px 609px #fff,
      78px 1747px #fff, 1474px 1380px #fff, 1912px 1742px #fff,
      1999px 1786px #fff, 1195px 598px #fff, 701px 803px #fff,
      1779px 1993px #fff, 198px 84px #fff, 1865px 1102px #fff,
      1414px 1675px #fff;
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s ease-in-out;
  }

  #title {
    color: #fff;
    text-align: center;
    font-family: "lato", sans-serif;
    font-weight: 300;
    letter-spacing: 5px;
    margin: auto;
    animation: animText 45s linear infinite;
    margin: 2em;
  }
  .style-theme {
    font-size: medium;
    max-width: unset;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
  @keyframes animText {
    from {
      transform: translateY(-60vh);
    }
    to {
      transform: translateY(60vh);
    }
  }
</style>
