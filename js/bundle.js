
// ==========================================
// 1. DATA (colors.js)
// ==========================================
const colorSystemMapping = {
  "#FAF4C8": { "MARD": "A01", "COCO": "E02", "漫漫": "E2", "盼盼": "65", "咪小窝": "77" },
  "#FFFFD5": { "MARD": "A02", "COCO": "E01", "漫漫": "B1", "盼盼": "2", "咪小窝": "2" },
  "#FEFF8B": { "MARD": "A03", "COCO": "E05", "漫漫": "B2", "盼盼": "28", "咪小窝": "28" },
  "#FBED56": { "MARD": "A04", "COCO": "E07", "漫漫": "B3", "盼盼": "3", "咪小窝": "3" },
  "#F4D738": { "MARD": "A05", "COCO": "D03", "漫漫": "B4", "盼盼": "74", "咪小窝": "79" },
  "#FEAC4C": { "MARD": "A06", "COCO": "D05", "漫漫": "B5", "盼盼": "29", "咪小窝": "29" },
  "#FE8B4C": { "MARD": "A07", "COCO": "D08", "漫漫": "B6", "盼盼": "4", "咪小窝": "4" },
  "#FFDA45": { "MARD": "A08", "COCO": "E08", "漫漫": "B10", "盼盼": "88", "咪小窝": "98" },
  "#FF995B": { "MARD": "A09", "COCO": "D06", "漫漫": "B11", "盼盼": "90", "咪小窝": "97" },
  "#F77C31": { "MARD": "A10", "COCO": "D07", "漫漫": "B12", "盼盼": "89", "咪小窝": "96" },
  "#FFDD99": { "MARD": "A11", "COCO": "D01", "漫漫": "E11", "盼盼": "100", "咪小窝": "109" },
  "#FE9F72": { "MARD": "A12", "COCO": "K09", "漫漫": "A18", "盼盼": "99", "咪小窝": "110" },
  "#FFC365": { "MARD": "A13", "COCO": "D04", "漫漫": "B13", "盼盼": "131", "咪小窝": "116" },
  "#FD543D": { "MARD": "A14", "COCO": "C05", "漫漫": "B14", "盼盼": "138", "咪小窝": "135" },
  "#FFF365": { "MARD": "A15", "COCO": "E04", "漫漫": "B15", "盼盼": "150", "咪小窝": "150" },
  "#FFFF9F": { "MARD": "A16", "COCO": "E03", "漫漫": "IC04", "盼盼": "216", "咪小窝": "216" },
  "#FFE36E": { "MARD": "A17", "COCO": "E06", "漫漫": "IC9", "盼盼": "213", "咪小窝": "213" },
  "#FEBE7D": { "MARD": "A18", "COCO": "D02", "漫漫": "IC14", "盼盼": "223", "咪小窝": "208" },
  "#FD7C72": { "MARD": "A19", "COCO": "K10", "漫漫": "IC15", "盼盼": "218", "咪小窝": "218" },
  "#FFD568": { "MARD": "A20", "COCO": "E09", "漫漫": "Q6", "盼盼": "242", "咪小窝": "242" },
  "#FFE395": { "MARD": "A21", "COCO": "E10", "漫漫": "R07", "盼盼": "276", "咪小窝": "261" },
  "#F4F57D": { "MARD": "A22", "COCO": "E11", "漫漫": "R06", "盼盼": "270", "咪小窝": "255" },
  "#E6C9B7": { "MARD": "A23", "COCO": "E12", "漫漫": "R08", "盼盼": "274", "咪小窝": "259" },
  "#F7F8A2": { "MARD": "A24", "COCO": "E13", "漫漫": "G3", "盼盼": "288", "咪小窝": "273" },
  "#FFD67D": { "MARD": "A25", "COCO": "E14", "漫漫": "G4", "盼盼": "289", "咪小窝": "274" },
  "#FFC830": { "MARD": "A26", "COCO": "E15", "漫漫": "G5", "盼盼": "290", "咪小窝": "275" },
  "#E6EE31": { "MARD": "B01", "COCO": "F05", "漫漫": "C1", "盼盼": "48", "咪小窝": "48" },
  "#63F347": { "MARD": "B02", "COCO": "F08", "漫漫": "C2", "盼盼": "33", "咪小窝": "33" },
  "#9EF780": { "MARD": "B03", "COCO": "F04", "漫漫": "C7", "盼盼": "26", "咪小窝": "26" },
  "#5DE035": { "MARD": "B04", "COCO": "F09", "漫漫": "C3", "盼盼": "66", "咪小窝": "78" },
  "#35E352": { "MARD": "B05", "COCO": "F10", "漫漫": "C4", "盼盼": "39", "咪小窝": "39" },
  "#65E2A6": { "MARD": "B06", "COCO": "G04", "漫漫": "C9", "盼盼": "11", "咪小窝": "11" },
  "#3DAF80": { "MARD": "B07", "COCO": "G05", "漫漫": "C10", "盼盼": "44", "咪小窝": "44" },
  "#1C9C4F": { "MARD": "B08", "COCO": "F11", "漫漫": "C5", "盼盼": "10", "咪小窝": "10" },
  "#27523A": { "MARD": "B09", "COCO": "F16", "漫漫": "C6", "盼盼": "79", "咪小窝": "84" },
  "#95D3C2": { "MARD": "B10", "COCO": "G03", "漫漫": "C11", "盼盼": "96", "咪小窝": "100" },
  "#5D722A": { "MARD": "B11", "COCO": "F14", "漫漫": "C12", "盼盼": "97", "咪小窝": "99" },
  "#166F41": { "MARD": "B12", "COCO": "F12", "漫漫": "C13", "盼盼": "106", "咪小窝": "111" },
  "#CAEB7B": { "MARD": "B13", "COCO": "F02", "漫漫": "C14", "盼盼": "128", "咪小窝": "119" },
  "#ADE946": { "MARD": "B14", "COCO": "F06", "漫漫": "C15", "盼盼": "129", "咪小窝": "117" },
  "#2E5132": { "MARD": "B15", "COCO": "F15", "漫漫": "C16", "盼盼": "130", "咪小窝": "122" },
  "#C5ED9C": { "MARD": "B16", "COCO": "F03", "漫漫": "C17", "盼盼": "141", "咪小窝": "133" },
  "#9BB13A": { "MARD": "B17", "COCO": "F13", "漫漫": "C18", "盼盼": "142", "咪小窝": "141" },
  "#E6EE49": { "MARD": "B18", "COCO": "F07", "漫漫": "C19", "盼盼": "147", "咪小窝": "147" },
  "#24B88C": { "MARD": "B19", "COCO": "G06", "漫漫": "DH15", "盼盼": "191", "咪小窝": "174" },
  "#C2F0CC": { "MARD": "B20", "COCO": "G02", "漫漫": "DH10", "盼盼": "192", "咪小窝": "175" },
  "#156A6B": { "MARD": "B21", "COCO": "G07", "漫漫": "DH2", "盼盼": "207", "咪小窝": "194" },
  "#0B3C43": { "MARD": "B22", "COCO": "G08", "漫漫": "DH7", "盼盼": "206", "咪小窝": "193" },
  "#303A21": { "MARD": "B23", "COCO": "F17", "漫漫": "DH12", "盼盼": "205", "咪小窝": "192" },
  "#EEFCA5": { "MARD": "B24", "COCO": "F01", "漫漫": "IC5", "盼盼": "222", "咪小窝": "207" },
  "#4E846D": { "MARD": "B25", "COCO": "F18", "漫漫": "Q13", "盼盼": "240", "咪小窝": "240" },
  "#8D7A35": { "MARD": "B26", "COCO": "F19", "漫漫": "Q7", "盼盼": "248", "咪小窝": "248" },
  "#CCE1AF": { "MARD": "B27", "COCO": "F20", "漫漫": "R10", "盼盼": "262", "咪小窝": "262" },
  "#9EE5B9": { "MARD": "B28", "COCO": "F21", "漫漫": "R11", "盼盼": "269", "咪小窝": "254" },
  "#C5E254": { "MARD": "B29", "COCO": "F22", "漫漫": "R09", "盼盼": "268", "咪小窝": "253" },
  "#E2FCB1": { "MARD": "B30", "COCO": "F23", "漫漫": "G6", "盼盼": "285", "咪小窝": "270" },
  "#B0E792": { "MARD": "B31", "COCO": "F24", "漫漫": "G7", "盼盼": "286", "咪小窝": "271" },
  "#9CAB5A": { "MARD": "B32", "COCO": "F25", "漫漫": "G12", "盼盼": "287", "咪小窝": "272" },
  "#E8FFE7": { "MARD": "C01", "COCO": "G01", "漫漫": "C8", "盼盼": "64", "咪小窝": "76" },
  "#A9F9FC": { "MARD": "C02", "COCO": "H03", "漫漫": "D1", "盼盼": "30", "咪小窝": "30" },
  "#A0E2FB": { "MARD": "C03", "COCO": "H04", "漫漫": "D2", "盼盼": "63", "咪小窝": "75" },
  "#41CCFF": { "MARD": "C04", "COCO": "H05", "漫漫": "D3", "盼盼": "77", "咪小窝": "82" },
  "#01ACEB": { "MARD": "C05", "COCO": "H07", "漫漫": "D7", "盼盼": "34", "咪小窝": "34" },
  "#50AAF0": { "MARD": "C06", "COCO": "H08", "漫漫": "D4", "盼盼": "25", "咪小窝": "25" },
  "#3677D2": { "MARD": "C07", "COCO": "H13", "漫漫": "D8", "盼盼": "9", "咪小窝": "9" },
  "#0F54C0": { "MARD": "C08", "COCO": "H14", "漫漫": "D9", "盼盼": "52", "咪小窝": "71" },
  "#324BCA": { "MARD": "C09", "COCO": "H16", "漫漫": "N5", "盼盼": "42", "咪小窝": "42" },
  "#3EBCE2": { "MARD": "C10", "COCO": "H09", "漫漫": "D25", "盼盼": "121", "咪小窝": "130" },
  "#28DDDE": { "MARD": "C11", "COCO": "H10", "漫漫": "D28", "盼盼": "122", "咪小窝": "113" },
  "#1C334D": { "MARD": "C12", "COCO": "H23", "漫漫": "D26", "盼盼": "120", "咪小窝": "120" },
  "#CDE8FF": { "MARD": "C13", "COCO": "H01", "漫漫": "D30", "盼盼": "140", "咪小窝": "142" },
  "#D5FDFF": { "MARD": "C14", "COCO": "H02", "漫漫": "D29", "盼盼": "139", "咪小窝": "136" },
  "#22C4C6": { "MARD": "C15", "COCO": "H11", "漫漫": "D31", "盼盼": "143", "咪小窝": "132" },
  "#1557A8": { "MARD": "C16", "COCO": "H18", "漫漫": "D32", "盼盼": "149", "咪小窝": "149" },
  "#04D1F6": { "MARD": "C17", "COCO": "H19", "漫漫": "D36", "盼盼": "163", "咪小窝": "156" },
  "#1D3344": { "MARD": "C18", "COCO": "H24", "漫漫": "DH6", "盼盼": "196", "咪小窝": "196" },
  "#1887A2": { "MARD": "C19", "COCO": "H12", "漫漫": "DH9", "盼盼": "202", "咪小窝": "202" },
  "#176DAF": { "MARD": "C20", "COCO": "H17", "漫漫": "DH14", "盼盼": "197", "咪小窝": "197" },
  "#BEDDFF": { "MARD": "C21", "COCO": "H06", "漫漫": "IC3", "盼盼": "212", "咪小窝": "212" },
  "#67B4BE": { "MARD": "C22", "COCO": "H25", "漫漫": "Q11", "盼盼": "239", "咪小窝": "239" },
  "#C8E2FF": { "MARD": "C23", "COCO": "H26", "漫漫": "R13", "盼盼": "263", "咪小窝": "263" },
  "#7CC4FF": { "MARD": "C24", "COCO": "H27", "漫漫": "R14", "盼盼": "267", "咪小窝": "252" },
  "#A9E5E5": { "MARD": "C25", "COCO": "H28", "漫漫": "R12", "盼盼": "271", "咪小窝": "256" },
  "#3CAED8": { "MARD": "C26", "COCO": "H29", "漫漫": "R15", "盼盼": "265", "咪小窝": "250" },
  "#D3DFFA": { "MARD": "C27", "COCO": "H30", "漫漫": "G13", "盼盼": "279", "咪小窝": "264" },
  "#BBCFED": { "MARD": "C28", "COCO": "H31", "漫漫": "G14", "盼盼": "280", "咪小窝": "265" },
  "#34488E": { "MARD": "C29", "COCO": "H32", "漫漫": "G15", "盼盼": "281", "咪小窝": "266" },
  "#AEB4F2": { "MARD": "D01", "COCO": "J07", "漫漫": "D5", "盼盼": "46", "咪小窝": "46" },
  "#858EDD": { "MARD": "D02", "COCO": "J08", "漫漫": "D6", "盼盼": "36", "咪小窝": "36" },
  "#2F54AF": { "MARD": "D03", "COCO": "H15", "漫漫": "D10", "盼盼": "8", "咪小窝": "8" },
  "#182A84": { "MARD": "D04", "COCO": "H20", "漫漫": "D11", "盼盼": "75", "咪小窝": "80" },
  "#B843C5": { "MARD": "D05", "COCO": "J12", "漫漫": "D13", "盼盼": "32", "咪小窝": "32" },
  "#AC7BDE": { "MARD": "D06", "COCO": "J11", "漫漫": "D14", "盼盼": "27", "咪小窝": "27" },
  "#8854B3": { "MARD": "D07", "COCO": "J15", "漫漫": "D12", "盼盼": "7", "咪小窝": "7" },
  "#E2D3FF": { "MARD": "D08", "COCO": "J03", "漫漫": "D16", "盼盼": "94", "咪小窝": "89" },
  "#D5B9F8": { "MARD": "D09", "COCO": "J04", "漫漫": "D17", "盼盼": "93", "咪小窝": "90" },
  "#361851": { "MARD": "D10", "COCO": "J19", "漫漫": "D15", "盼盼": "92", "咪小窝": "91" },
  "#B9BAE1": { "MARD": "D11", "COCO": "J06", "漫漫": "D19", "盼盼": "105", "咪小窝": "104" },
  "#DE9AD4": { "MARD": "D12", "COCO": "J10", "漫漫": "D20", "盼盼": "104", "咪小窝": "105" },
  "#B90095": { "MARD": "D13", "COCO": "J14", "漫漫": "D21", "盼盼": "103", "咪小窝": "106" },
  "#8B279B": { "MARD": "D14", "COCO": "J16", "漫漫": "D22", "盼盼": "102", "咪小窝": "107" },
  "#2F1F90": { "MARD": "D15", "COCO": "H22", "漫漫": "D18", "盼盼": "101", "咪小窝": "108" },
  "#E3E1EE": { "MARD": "D16", "COCO": "J01", "漫漫": "D23", "盼盼": "118", "咪小窝": "126" },
  "#C4D4F6": { "MARD": "D17", "COCO": "J05", "漫漫": "D24", "盼盼": "119", "咪小窝": "128" },
  "#A45EC7": { "MARD": "D18", "COCO": "J13", "漫漫": "D27", "盼盼": "124", "咪小窝": "125" },
  "#D8C3D7": { "MARD": "D19", "COCO": "J09", "漫漫": "D33", "盼盼": "153", "咪小窝": "153" },
  "#9C32B2": { "MARD": "D20", "COCO": "J17", "漫漫": "D34", "盼盼": "161", "咪小窝": "155" },
  "#9A009B": { "MARD": "D21", "COCO": "J18", "漫漫": "D35", "盼盼": "162", "咪小窝": "158" },
  "#333A95": { "MARD": "D22", "COCO": "H21", "漫漫": "DH1", "盼盼": "198", "咪小窝": "198" },
  "#EBDAFC": { "MARD": "D23", "COCO": "J02", "漫漫": "IC8", "盼盼": "217", "咪小窝": "217" },
  "#7786E5": { "MARD": "D24", "COCO": "J20", "漫漫": "Q14", "盼盼": "244", "咪小窝": "244" },
  "#494FC7": { "MARD": "D25", "COCO": "J21", "漫漫": "Q15", "盼盼": "249", "咪小窝": "234" },
  "#DFC2F8": { "MARD": "D26", "COCO": "J22", "漫漫": "R01", "盼盼": "273", "咪小窝": "258" },
  "#FDD3CC": { "MARD": "E01", "COCO": "K03", "漫漫": "E1", "盼盼": "18", "咪小窝": "18" },
  "#FEC0DF": { "MARD": "E02", "COCO": "K15", "漫漫": "A7", "盼盼": "38", "咪小窝": "38" },
  "#FFB7E7": { "MARD": "E03", "COCO": "K17", "漫漫": "A8", "盼盼": "62", "咪小窝": "74" },
  "#E8649E": { "MARD": "E04", "COCO": "K21", "漫漫": "A9", "盼盼": "6", "咪小窝": "6" },
  "#F551A2": { "MARD": "E05", "COCO": "K19", "漫漫": "A10", "盼盼": "40", "咪小窝": "40" },
  "#F13D74": { "MARD": "E06", "COCO": "K22", "漫漫": "A11", "盼盼": "20", "咪小窝": "20" },
  "#C63478": { "MARD": "E07", "COCO": "K25", "漫漫": "A12", "盼盼": "41", "咪小窝": "41" },
  "#FFDBE9": { "MARD": "E08", "COCO": "K12", "漫漫": "A13", "盼盼": "84", "咪小窝": "103" },
  "#E970CC": { "MARD": "E09", "COCO": "K18", "漫漫": "A14", "盼盼": "98", "咪小窝": "95" },
  "#D33793": { "MARD": "E10", "COCO": "K23", "漫漫": "A16", "盼盼": "83", "咪小窝": "94" },
  "#FCDDD2": { "MARD": "E11", "COCO": "K02", "漫漫": "A19", "盼盼": "125", "咪小窝": "131" },
  "#F78FC3": { "MARD": "E12", "COCO": "K16", "漫漫": "A20", "盼盼": "126", "咪小窝": "112" },
  "#B5006D": { "MARD": "E13", "COCO": "K24", "漫漫": "A21", "盼盼": "127", "咪小窝": "124" },
  "#FFD1BA": { "MARD": "E14", "COCO": "K05", "漫漫": "E21", "盼盼": "137", "咪小窝": "140" },
  "#F8C7C9": { "MARD": "E15", "COCO": "K04", "漫漫": "A23", "盼盼": "135", "咪小窝": "139" },
  "#FFF3EB": { "MARD": "E16", "COCO": "K01", "漫漫": "IC2", "盼盼": "221", "咪小窝": "206" },
  "#FFE2EA": { "MARD": "E17", "COCO": "K11", "漫漫": "IC7", "盼盼": "220", "咪小窝": "205" },
  "#FFC7DB": { "MARD": "E18", "COCO": "K13", "漫漫": "IC13", "盼盼": "210", "咪小窝": "210" },
  "#FEBAD5": { "MARD": "E19", "COCO": "K14", "漫漫": "IC12", "盼盼": "215", "咪小窝": "215" },
  "#D8C7D1": { "MARD": "E20", "COCO": "K26", "漫漫": "Q1", "盼盼": "241", "咪小窝": "241" },
  "#BD9DA1": { "MARD": "E21", "COCO": "K27", "漫漫": "Q2", "盼盼": "253", "咪小窝": "238" },
  "#B785A1": { "MARD": "E22", "COCO": "K28", "漫漫": "Q4", "盼盼": "252", "咪小窝": "237" },
  "#937A8D": { "MARD": "E23", "COCO": "K29", "漫漫": "Q3", "盼盼": "250", "咪小窝": "235" },
  "#E1BCE8": { "MARD": "E24", "COCO": "K30", "漫漫": "G8", "盼盼": "282", "咪小窝": "267" },
  "#FD957B": { "MARD": "F01", "COCO": "K08", "漫漫": "A1", "盼盼": "35", "咪小窝": "35" },
  "#FC3D46": { "MARD": "F02", "COCO": "C02", "漫漫": "A2", "盼盼": "31", "咪小窝": "31" },
  "#F74941": { "MARD": "F03", "COCO": "C03", "漫漫": "A3", "盼盼": "53", "咪小窝": "72" },
  "#FC283C": { "MARD": "F04", "COCO": "C06", "漫漫": "A4", "盼盼": "54", "咪小窝": "73" },
  "#E7002F": { "MARD": "F05", "COCO": "C07", "漫漫": "A5", "盼盼": "5", "咪小窝": "5" },
  "#943630": { "MARD": "F06", "COCO": "Z21", "漫漫": "E9", "盼盼": "16", "咪小窝": "16" },
  "#971937": { "MARD": "F07", "COCO": "C10", "漫漫": "A6", "盼盼": "47", "咪小窝": "47" },
  "#BC0028": { "MARD": "F08", "COCO": "C09", "漫漫": "A17", "盼盼": "81", "咪小窝": "92" },
  "#E2677A": { "MARD": "F09", "COCO": "K20", "漫漫": "A15", "盼盼": "82", "咪小窝": "93" },
  "#8A4526": { "MARD": "F10", "COCO": "Z20", "漫漫": "E15", "盼盼": "116", "咪小窝": "115" },
  "#5A2121": { "MARD": "F11", "COCO": "Z23", "漫漫": "E16", "盼盼": "117", "咪小窝": "129" },
  "#FD4E6A": { "MARD": "F12", "COCO": "C01", "漫漫": "A22", "盼盼": "136", "咪小窝": "134" },
  "#F35744": { "MARD": "F13", "COCO": "C04", "漫漫": "A24", "盼盼": "148", "咪小窝": "148" },
  "#FFA9AD": { "MARD": "F14", "COCO": "K07", "漫漫": "A25", "盼盼": "154", "咪小窝": "154" },
  "#D30022": { "MARD": "F15", "COCO": "C08", "漫漫": "DH8", "盼盼": "204", "咪小窝": "191" },
  "#FEC2A6": { "MARD": "F16", "COCO": "K06", "漫漫": "IC10", "盼盼": "211", "咪小窝": "211" },
  "#E69C79": { "MARD": "F17", "COCO": "K31", "漫漫": "Q9", "盼盼": "245", "咪小窝": "245" },
  "#D37C46": { "MARD": "F18", "COCO": "K32", "漫漫": "Q10", "盼盼": "246", "咪小窝": "246" },
  "#C1444A": { "MARD": "F19", "COCO": "K33", "漫漫": "Q05", "盼盼": "243", "咪小窝": "243" },
  "#CD9391": { "MARD": "F20", "COCO": "K34", "漫漫": "R04", "盼盼": "275", "咪小窝": "260" },
  "#F7B4C6": { "MARD": "F21", "COCO": "K35", "漫漫": "R03", "盼盼": "266", "咪小窝": "251" },
  "#FDC0D0": { "MARD": "F22", "COCO": "K36", "漫漫": "R02", "盼盼": "272", "咪小窝": "257" },
  "#F67E66": { "MARD": "F23", "COCO": "K37", "漫漫": "R05", "盼盼": "264", "咪小窝": "249" },
  "#E698AA": { "MARD": "F24", "COCO": "K38", "漫漫": "G9", "盼盼": "283", "咪小窝": "268" },
  "#E54B4F": { "MARD": "F25", "COCO": "K39", "漫漫": "G10", "盼盼": "284", "咪小窝": "269" },
  "#FFE2CE": { "MARD": "G01", "COCO": "Z02", "漫漫": "E3", "盼盼": "76", "咪小窝": "81" },
  "#FFC4AA": { "MARD": "G02", "COCO": "Z05", "漫漫": "E4", "盼盼": "49", "咪小窝": "49" },
  "#F4C3A5": { "MARD": "G03", "COCO": "Z06", "漫漫": "E5", "盼盼": "80", "咪小窝": "85" },
  "#E1B383": { "MARD": "G04", "COCO": "Z08", "漫漫": "E6", "盼盼": "19", "咪小窝": "19" },
  "#EDB045": { "MARD": "G05", "COCO": "Z10", "漫漫": "B7", "盼盼": "43", "咪小窝": "43" },
  "#E99C17": { "MARD": "G06", "COCO": "Z11", "漫漫": "B8", "盼盼": "50", "咪小窝": "50" },
  "#9D5B3E": { "MARD": "G07", "COCO": "Z18", "漫漫": "E7", "盼盼": "17", "咪小窝": "17" },
  "#753832": { "MARD": "G08", "COCO": "Z22", "漫漫": "E8", "盼盼": "12", "咪小窝": "12" },
  "#E6B483": { "MARD": "G09", "COCO": "Z09", "漫漫": "E10", "盼盼": "91", "咪小窝": "102" },
  "#D98C39": { "MARD": "G10", "COCO": "Z15", "漫漫": "B9", "盼盼": "87", "咪小窝": "101" },
  "#E0C593": { "MARD": "G11", "COCO": "Z07", "漫漫": "E12", "盼盼": "112", "咪小窝": "118" },
  "#FFC890": { "MARD": "G12", "COCO": "Z13", "漫漫": "E13", "盼盼": "113", "咪小窝": "127" },
  "#B7714A": { "MARD": "G13", "COCO": "Z14", "漫漫": "E17", "盼盼": "115", "咪小窝": "114" },
  "#8D614C": { "MARD": "G14", "COCO": "Z17", "漫漫": "E14", "盼盼": "114", "咪小窝": "123" },
  "#FCF9E0": { "MARD": "G15", "COCO": "Z03", "漫漫": "E19", "盼盼": "133", "咪小窝": "143" },
  "#F2D9BA": { "MARD": "G16", "COCO": "Z04", "漫漫": "E20", "盼盼": "134", "咪小窝": "138" },
  "#78524B": { "MARD": "G17", "COCO": "Z16", "漫漫": "E22", "盼盼": "144", "咪小窝": "137" },
  "#FFE4CC": { "MARD": "G18", "COCO": "Z01", "漫漫": "DH5", "盼盼": "203", "咪小窝": "203" },
  "#E07935": { "MARD": "G19", "COCO": "Z12", "漫漫": "DH3", "盼盼": "208", "咪小窝": "195" },
  "#A94023": { "MARD": "G20", "COCO": "Z19", "漫漫": "DH13", "盼盼": "199", "咪小窝": "199" },
  "#B88558": { "MARD": "G21", "COCO": "Z24", "漫漫": "Q8", "盼盼": "247", "咪小窝": "247" },
  "#FDFBFF": { "MARD": "H01", "COCO": "A02", "漫漫": "F1", "盼盼": "15", "咪小窝": "15" },
  "#FEFFFF": { "MARD": "H02", "COCO": "A01", "漫漫": "F2", "盼盼": "1", "咪小窝": "1" },
  "#B6B1BA": { "MARD": "H03", "COCO": "B03", "漫漫": "F3", "盼盼": "13", "咪小窝": "13" },
  "#89858C": { "MARD": "H04", "COCO": "B05", "漫漫": "F4", "盼盼": "78", "咪小窝": "83" },
  "#48464E": { "MARD": "H05", "COCO": "B06", "漫漫": "F5", "盼盼": "45", "咪小窝": "45" },
  "#2F2B2F": { "MARD": "H06", "COCO": "B07", "漫漫": "F6", "盼盼": "51", "咪小窝": "70" },
  "#000000": { "MARD": "H07", "COCO": "B09", "漫漫": "F7", "盼盼": "14", "咪小窝": "14" },
  "#E7D6DB": { "MARD": "H08", "COCO": "A09", "漫漫": "F8", "盼盼": "85", "咪小窝": "86" },
  "#EDEDED": { "MARD": "H09", "COCO": "A08", "漫漫": "F10", "盼盼": "95", "咪小窝": "87" },
  "#EEE9EA": { "MARD": "H10", "COCO": "A10", "漫漫": "F9", "盼盼": "86", "咪小窝": "88" },
  "#CECDD5": { "MARD": "H11", "COCO": "B01", "漫漫": "F11", "盼盼": "123", "咪小窝": "121" },
  "#FFF5ED": { "MARD": "H12", "COCO": "A04", "漫漫": "E18", "盼盼": "132", "咪小窝": "144" },
  "#F5ECD2": { "MARD": "H13", "COCO": "A06", "漫漫": "E23", "盼盼": "145", "咪小窝": "146" },
  "#CFD7D3": { "MARD": "H14", "COCO": "B02", "漫漫": "F12", "盼盼": "146", "咪小窝": "145" },
  "#98A6A8": { "MARD": "H15", "COCO": "B04", "漫漫": "DH4", "盼盼": "201", "咪小窝": "201" },
  "#1D1414": { "MARD": "H16", "COCO": "B08", "漫漫": "DH11", "盼盼": "200", "咪小窝": "200" },
  "#F1EDED": { "MARD": "H17", "COCO": "A07", "漫漫": "IC6", "盼盼": "214", "咪小窝": "214" },
  "#FFFDF0": { "MARD": "H18", "COCO": "A03", "漫漫": "IC1", "盼盼": "219", "咪小窝": "204" },
  "#F6EFE2": { "MARD": "H19", "COCO": "A05", "漫漫": "IC11", "盼盼": "209", "咪小窝": "209" },
  "#949FA3": { "MARD": "H20", "COCO": "B10", "漫漫": "Q12", "盼盼": "251", "咪小窝": "236" },
  "#FFFBE1": { "MARD": "H21", "COCO": "A11", "漫漫": "G1", "盼盼": "291", "咪小窝": "276" },
  "#CACAD4": { "MARD": "H22", "COCO": "A12", "漫漫": "G2", "盼盼": "277", "咪小窝": "277" },
  "#9A9D94": { "MARD": "H23", "COCO": "B11", "漫漫": "G11", "盼盼": "278", "咪小窝": "278" },
  "#BCC6B8": { "MARD": "M01", "COCO": "Y01", "漫漫": "YX11", "盼盼": "168", "咪小窝": "168" },
  "#8AA386": { "MARD": "M02", "COCO": "Y02", "漫漫": "YX12", "盼盼": "172", "咪小窝": "172" },
  "#697D80": { "MARD": "M03", "COCO": "Y03", "漫漫": "YX2", "盼盼": "166", "咪小窝": "166" },
  "#E3D2BC": { "MARD": "M04", "COCO": "Y04", "漫漫": "YX15", "盼盼": "167", "咪小窝": "167" },
  "#D0CCAA": { "MARD": "M05", "COCO": "Y05", "漫漫": "YX6", "盼盼": "174", "咪小窝": "159" },
  "#B0A782": { "MARD": "M06", "COCO": "Y06", "漫漫": "YX1", "盼盼": "169", "咪小窝": "169" },
  "#B4A497": { "MARD": "M07", "COCO": "Y07", "漫漫": "YX13", "盼盼": "171", "咪小窝": "171" },
  "#B38281": { "MARD": "M08", "COCO": "Y08", "漫漫": "YX14", "盼盼": "177", "咪小窝": "162" },
  "#A58767": { "MARD": "M09", "COCO": "Y09", "漫漫": "YX10", "盼盼": "170", "咪小窝": "170" },
  "#C5B2BC": { "MARD": "M10", "COCO": "Y10", "漫漫": "YX9", "盼盼": "164", "咪小窝": "164" },
  "#9F7594": { "MARD": "M11", "COCO": "Y11", "漫漫": "YX4", "盼盼": "176", "咪小窝": "161" },
  "#644749": { "MARD": "M12", "COCO": "Y12", "漫漫": "YX5", "盼盼": "173", "咪小窝": "173" },
  "#D19066": { "MARD": "M13", "COCO": "Y13", "漫漫": "YX8", "盼盼": "175", "咪小窝": "160" },
  "#C77362": { "MARD": "M14", "COCO": "Y14", "漫漫": "YX3", "盼盼": "165", "咪小窝": "165" },
  "#757D78": { "MARD": "M15", "COCO": "Y15", "漫漫": "YX7", "盼盼": "178", "咪小窝": "163" },
  "#FCF7F8": { "MARD": "P01", "COCO": "M01", "漫漫": "P1", "盼盼": "71", "咪小窝": "62" },
  "#B0A9AC": { "MARD": "P02", "COCO": "M02", "漫漫": "P2", "盼盼": "55", "咪小窝": "69" },
  "#AFDCAB": { "MARD": "P03", "COCO": "M03", "漫漫": "P4", "盼盼": "73", "咪小窝": "66" },
  "#FEA49F": { "MARD": "P04", "COCO": "M04", "漫漫": "P5", "盼盼": "72", "咪小窝": "64" },
  "#EE8C3E": { "MARD": "P05", "COCO": "M05", "漫漫": "P3", "盼盼": "56", "咪小窝": "63" },
  "#5FD0A7": { "MARD": "P06", "COCO": "M06", "漫漫": "P8", "盼盼": "157", "咪小窝": "65" },
  "#EB9270": { "MARD": "P07", "COCO": "M07", "漫漫": "P6", "盼盼": "159", "咪小窝": "68" },
  "#F0D958": { "MARD": "P08", "COCO": "M08", "漫漫": "P7", "盼盼": "158", "咪小窝": "67" },
  "#D9D9D9": { "MARD": "P09", "COCO": "M09", "漫漫": "P13", "盼盼": "195", "咪小窝": "178" },
  "#D9C7EA": { "MARD": "P10", "COCO": "M10", "漫漫": "P18", "盼盼": "187", "咪小窝": "187" },
  "#F3ECC9": { "MARD": "P11", "COCO": "M11", "漫漫": "P9", "盼盼": "185", "咪小窝": "185" },
  "#E6EEF2": { "MARD": "P12", "COCO": "M12", "漫漫": "P12", "盼盼": "190", "咪小窝": "190" },
  "#AACBEF": { "MARD": "P13", "COCO": "M13", "漫漫": "P17", "盼盼": "193", "咪小窝": "176" },
  "#337680": { "MARD": "P14", "COCO": "M14", "漫漫": "P22", "盼盼": "183", "咪小窝": "183" },
  "#668575": { "MARD": "P15", "COCO": "M15", "漫漫": "P23", "盼盼": "184", "咪小窝": "184" },
  "#FEBF45": { "MARD": "P16", "COCO": "M16", "漫漫": "P14", "盼盼": "182", "咪小窝": "182" },
  "#FEA324": { "MARD": "P17", "COCO": "M17", "漫漫": "P19", "盼盼": "179", "咪小窝": "179" },
  "#FEB89F": { "MARD": "P18", "COCO": "M18", "漫漫": "P11", "盼盼": "194", "咪小窝": "177" },
  "#FFFEEC": { "MARD": "P19", "COCO": "M19", "漫漫": "P10", "盼盼": "186", "咪小窝": "186" },
  "#FEBECF": { "MARD": "P20", "COCO": "M21", "漫漫": "P15", "盼盼": "188", "咪小窝": "180" },
  "#ECBEBF": { "MARD": "P21", "COCO": "M20", "漫漫": "P20", "盼盼": "180", "咪小窝": "188" },
  "#E4A89F": { "MARD": "P22", "COCO": "M22", "漫漫": "P16", "盼盼": "189", "咪小窝": "189" },
  "#A56268": { "MARD": "P23", "COCO": "M23", "漫漫": "P21", "盼盼": "181", "咪小窝": "181" },
  "#F2A5E8": { "MARD": "Q01", "COCO": "W3", "漫漫": "W3", "盼盼": "109", "咪小窝": "W3" },
  "#E9EC91": { "MARD": "Q02", "COCO": "W4", "漫漫": "W4", "盼盼": "111", "咪小窝": "W4" },
  "#FFFF00": { "MARD": "Q03", "COCO": "W1", "漫漫": "W1", "盼盼": "107", "咪小窝": "W1" },
  "#FFEBFA": { "MARD": "Q04", "COCO": "W2", "漫漫": "W2", "盼盼": "110", "咪小窝": "W2" },
  "#76CEDE": { "MARD": "Q05", "COCO": "W5", "漫漫": "W5", "盼盼": "108", "咪小窝": "W5" },
  "#D50D21": { "MARD": "R01", "COCO": "L01", "漫漫": "T1", "盼盼": "67", "咪小窝": "52" },
  "#F92F83": { "MARD": "R02", "COCO": "L02", "漫漫": "N1", "盼盼": "24", "咪小窝": "24" },
  "#FD8324": { "MARD": "R03", "COCO": "L03", "漫漫": "N2", "盼盼": "22", "咪小窝": "22" },
  "#F8EC31": { "MARD": "R04", "COCO": "L04", "漫漫": "N3", "盼盼": "21", "咪小窝": "21" },
  "#35C75B": { "MARD": "R05", "COCO": "L05", "漫漫": "N4", "盼盼": "23", "咪小窝": "23" },
  "#238891": { "MARD": "R06", "COCO": "L06", "漫漫": "T4", "盼盼": "69", "咪小窝": "55" },
  "#19779D": { "MARD": "R07", "COCO": "L07", "漫漫": "T5", "盼盼": "37", "咪小窝": "37" },
  "#1A60C3": { "MARD": "R08", "COCO": "L08", "漫漫": "T3", "盼盼": "68", "咪小窝": "54" },
  "#9A56B4": { "MARD": "R09", "COCO": "L09", "漫漫": "T2", "盼盼": "70", "咪小窝": "56" },
  "#FFDB4C": { "MARD": "R10", "COCO": "L10", "漫漫": "L2", "盼盼": "156", "咪小窝": "53" },
  "#FFEBFB": { "MARD": "R11", "COCO": "L11", "漫漫": "T6", "盼盼": "151", "咪小窝": "151" },
  "#D8D5CE": { "MARD": "R12", "COCO": "L12", "漫漫": "T7", "盼盼": "160", "咪小窝": "157" },
  "#55514C": { "MARD": "R13", "COCO": "L13", "漫漫": "-", "盼盼": "152", "咪小窝": "152" },
  "#9FE4DF": { "MARD": "R14", "COCO": "S1", "漫漫": "S1", "盼盼": "231", "咪小窝": "231" },
  "#77CEE9": { "MARD": "R15", "COCO": "S2", "漫漫": "S2", "盼盼": "237", "咪小窝": "224" },
  "#3ECFCA": { "MARD": "R16", "COCO": "S3", "漫漫": "S3", "盼盼": "238", "咪小窝": "225" },
  "#4A867A": { "MARD": "R17", "COCO": "S4", "漫漫": "S5", "盼盼": "233", "咪小窝": "233" },
  "#7FCD9D": { "MARD": "R18", "COCO": "S5", "漫漫": "S4", "盼盼": "235", "咪小窝": "222" },
  "#CDE55D": { "MARD": "R19", "COCO": "S6", "漫漫": "S11", "盼盼": "227", "咪小窝": "227" },
  "#E8C7B4": { "MARD": "R20", "COCO": "S7", "漫漫": "S6", "盼盼": "230", "咪小窝": "230" },
  "#AD6F3C": { "MARD": "R21", "COCO": "S8", "漫漫": "S13", "盼盼": "234", "咪小窝": "221" },
  "#6C372F": { "MARD": "R22", "COCO": "S9", "漫漫": "S15", "盼盼": "226", "咪小窝": "226" },
  "#FEB872": { "MARD": "R23", "COCO": "S10", "漫漫": "S12", "盼盼": "224", "咪小窝": "219" },
  "#F3C1C0": { "MARD": "R24", "COCO": "S11", "漫漫": "S4", "盼盼": "228", "咪小窝": "228" },
  "#C9675E": { "MARD": "R25", "COCO": "S12", "漫漫": "S14", "盼盼": "225", "咪小窝": "220" },
  "#D293BE": { "MARD": "R26", "COCO": "S13", "漫漫": "S9", "盼盼": "229", "咪小窝": "229" },
  "#EA8CB1": { "MARD": "R27", "COCO": "S14", "漫漫": "S8", "盼盼": "232", "咪小窝": "232" },
  "#9C87D6": { "MARD": "R28", "COCO": "S15", "漫漫": "S10", "盼盼": "236", "咪小窝": "223" },
  "#FFFFFF": { "MARD": "T01", "COCO": "L14", "漫漫": "L6", "盼盼": "155", "咪小窝": "51" },
  "#FD6FB4": { "MARD": "Y01", "COCO": "N01", "漫漫": "Y1", "盼盼": "59", "咪小窝": "59" },
  "#FEB481": { "MARD": "Y02", "COCO": "N02", "漫漫": "Y2", "盼盼": "60", "咪小窝": "60" },
  "#D7FAA0": { "MARD": "Y03", "COCO": "N03", "漫漫": "Y3", "盼盼": "57", "咪小窝": "57" },
  "#8BDBFA": { "MARD": "Y04", "COCO": "N04", "漫漫": "Y4", "盼盼": "58", "咪小窝": "58" },
  "#E987EA": { "MARD": "Y05", "COCO": "N05", "漫漫": "Y5", "盼盼": "61", "咪小窝": "61" },
  "#DAABB3": { "MARD": "ZG1", "COCO": "GB1", "漫漫": "ZG1", "盼盼": "254", "咪小窝": "ZG1" },
  "#D6AA87": { "MARD": "ZG2", "COCO": "GB2", "漫漫": "ZG2", "盼盼": "255", "咪小窝": "ZG2" },
  "#C1BD8D": { "MARD": "ZG3", "COCO": "GB3", "漫漫": "ZG3", "盼盼": "256", "咪小窝": "ZG3" },
  "#96869F": { "MARD": "ZG4", "COCO": "GB4", "漫漫": "ZG4", "盼盼": "257", "咪小窝": "ZG4" },
  "#8490A6": { "MARD": "ZG5", "COCO": "GB5", "漫漫": "ZG5", "盼盼": "258", "咪小窝": "ZG5" },
  "#94BFE2": { "MARD": "ZG6", "COCO": "GB6", "漫漫": "ZG6", "盼盼": "259", "咪小窝": "ZG6" },
  "#E2A9D2": { "MARD": "ZG7", "COCO": "GB7", "漫漫": "ZG7", "盼盼": "260", "咪小窝": "ZG7" },
  "#AB91C0": { "MARD": "ZG8", "COCO": "GB8", "漫漫": "ZG8", "盼盼": "261", "咪小窝": "ZG8" }
};

const colorSystems = ['MARD', 'COCO', '漫漫', '盼盼', '咪小窝'];

// ==========================================
// 2. UTILS (utils.js)
// ==========================================

// Convert Hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calculate Euclidean distance between two RGB colors
function colorDistance(rgb1, rgb2) {
  const dr = rgb1.r - rgb2.r;
  const dg = rgb1.g - rgb2.g;
  const db = rgb1.b - rgb2.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

// Find closest color in palette
function findClosestPaletteColor(targetRgb, palette) {
  if (!palette || palette.length === 0) {
      // Robust fallback
      return { key: 'ERR', hex: '#000000', rgb: { r: 0, g: 0, b: 0 } };
  }

  let minDistance = Infinity;
  let closestColor = palette[0];

  for (const paletteColor of palette) {
    const distance = colorDistance(targetRgb, paletteColor.rgb);
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = paletteColor;
    }
    if (distance === 0) break; // Exact match
  }
  return closestColor;
}

// Helper to get contrast color (black or white) for text overlay
function getContrastColor(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return '#000000';
    // Luma formula
    const luma = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
    return luma > 0.5 ? '#000000' : '#FFFFFF';
}

// Convert Hex to HSL
function hexToHsl(hex) {
    const cleanHex = hex.replace('#', '');
    const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
    const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
    const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
  
    if (diff !== 0) {
      s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
      switch (max) {
        case r: h = ((g - b) / diff + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / diff + 2) / 6; break;
        case b: h = ((r - g) / diff + 4) / 6; break;
      }
    }
  
    return { h: h * 360, s: s * 100, l: l * 100 };
}

// Sort colors by Hue
function sortColorsByHue(colors) {
    return colors.slice().sort((a, b) => {
      const hslA = hexToHsl(a.color || a.hex); // Support both structures
      const hslB = hexToHsl(b.color || b.hex);
      
      if (Math.abs(hslA.h - hslB.h) > 5) {
        return hslA.h - hslB.h;
      }
      if (Math.abs(hslA.l - hslB.l) > 3) {
        return hslB.l - hslA.l;
      }
      return hslB.s - hslA.s;
    });
}

// ==========================================
// 3. PALETTE (palette.js)
// ==========================================

function getAllColorSystems() {
    return colorSystems;
}

function generatePalette(activeSystems, excludedColors = []) {
    const palette = [];
    
    // Iterate over colorSystemMapping
    Object.entries(colorSystemMapping).forEach(([hex, systems]) => {
        // Check if this color belongs to any active system
        let included = false;
        const availableCodes = {};
        let primaryKey = '';

        for (const sys of activeSystems) {
            const code = systems[sys];
            if (code && code !== '-' && code.trim() !== '') {
                // Check if this specific code is excluded
                if (excludedColors.includes(code)) {
                    continue; 
                }
                
                availableCodes[sys] = code;
                if (!primaryKey) primaryKey = code; // Use first found as primary
                included = true;
            }
        }

        if (included) {
             palette.push({
                hex: hex,
                rgb: hexToRgb(hex),
                codes: availableCodes,
                key: primaryKey, 
                // We store the mapping to help find the code for a specific system later
                systems: systems 
            });
        }
    });
    return palette;
}

// ==========================================
// 4. PIXELATION (pixelation.js)
// ==========================================

const PixelationMode = {
  Dominant: 'dominant',
  Average: 'average'
};

const TRANSPARENT_COLOR_DATA = { key: 'TRANSPARENT', color: 'transparent', isExternal: false };

/**
 * Calculate representative color for a cell
 */
function calculateCellRepresentativeColor(imageData, startX, startY, width, height, mode) {
    const data = imageData.data;
    const imgWidth = imageData.width;
    let rSum = 0, gSum = 0, bSum = 0;
    let pixelCount = 0;
    const colorCountsInCell = {};
    let dominantColorRgb = null;
    let maxCount = 0;

    const endX = startX + width;
    const endY = startY + height;

    for (let y = startY; y < endY; y++) {
        for (let x = startX; x < endX; x++) {
            const index = (y * imgWidth + x) * 4;
            // Ignore transparent pixels
            if (data[index + 3] < 128) continue;

            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];

            pixelCount++;

            if (mode === PixelationMode.Average) {
                rSum += r;
                gSum += g;
                bSum += b;
            } else { // Dominant mode
                const colorKey = `${r},${g},${b}`;
                colorCountsInCell[colorKey] = (colorCountsInCell[colorKey] || 0) + 1;
                if (colorCountsInCell[colorKey] > maxCount) {
                    maxCount = colorCountsInCell[colorKey];
                    dominantColorRgb = { r, g, b };
                }
            }
        }
    }

    if (pixelCount === 0) {
        return null;
    }

    if (mode === PixelationMode.Average) {
        return {
            r: Math.round(rSum / pixelCount),
            g: Math.round(gSum / pixelCount),
            b: Math.round(bSum / pixelCount),
        };
    } else {
        return dominantColorRgb;
    }
}

/**
 * Main pixelation function
 */
function calculatePixelGrid(
    originalCtx,
    imgWidth,
    imgHeight,
    N,
    M,
    palette,
    mode,
    threshold = 0
) {
    console.log(`Calculating pixel grid with mode: ${mode}, threshold: ${threshold}`);
    // Initialize empty grid
    const mappedData = Array.from({ length: M }, () => Array(N).fill(null));
    
    const cellWidthOriginal = imgWidth / N;
    const cellHeightOriginal = imgHeight / M;

    let fullImageData = null;
    try {
        fullImageData = originalCtx.getImageData(0, 0, imgWidth, imgHeight);
    } catch (e) {
        console.error("Failed to get full image data:", e);
        return mappedData;
    }

    // 1. Calculate base colors for all cells
    for (let j = 0; j < M; j++) {
        for (let i = 0; i < N; i++) {
            const startXOriginal = Math.floor(i * cellWidthOriginal);
            const startYOriginal = Math.floor(j * cellHeightOriginal);
            const endXOriginal = Math.min(imgWidth, Math.ceil((i + 1) * cellWidthOriginal));
            const endYOriginal = Math.min(imgHeight, Math.ceil((j + 1) * cellHeightOriginal));
            
            const currentCellWidth = Math.max(1, endXOriginal - startXOriginal);
            const currentCellHeight = Math.max(1, endYOriginal - startYOriginal);

            const representativeRgb = calculateCellRepresentativeColor(
                fullImageData,
                startXOriginal,
                startYOriginal,
                currentCellWidth,
                currentCellHeight,
                mode
            );

            let finalCellColorData;
            if (representativeRgb) {
                // Temporary store RGB for merging pass
                finalCellColorData = { rgb: representativeRgb, isExternal: false };
            } else {
                finalCellColorData = { ...TRANSPARENT_COLOR_DATA, isExternal: true };
            }
            mappedData[j][i] = finalCellColorData;
        }
    }

    // 2. Apply Color Merging (Smoothing)
    // Basic approach: Iterate and compare with neighbors. If close, unify.
    // To keep it simple and efficient: we'll do a pass that checks left and top neighbors
    // and propagates if within threshold. Or simpler: map to palette FIRST, but use a "soft" mapping?
    // Actually, "Color Merging" usually means: if pixel A is very close to pixel B (neighbor), make them same.
    // Implementation:
    // We will do a simple flood-like smoothing or just compare with previous pixel.
    
    if (threshold > 0) {
        // Iterate grid
        for (let j = 0; j < M; j++) {
            for (let i = 0; i < N; i++) {
                const current = mappedData[j][i];
                if (!current || current.isExternal) continue;

                // Check Left
                if (i > 0) {
                    const left = mappedData[j][i - 1];
                    if (left && !left.isExternal) {
                        const dist = colorDistance(current.rgb, left.rgb);
                        if (dist < threshold) {
                            // Merge current into left (propagate color)
                            current.rgb = left.rgb; 
                            continue; // Done for this pixel
                        }
                    }
                }
                
                // Check Top
                if (j > 0) {
                    const top = mappedData[j - 1][i];
                    if (top && !top.isExternal) {
                        const dist = colorDistance(current.rgb, top.rgb);
                        if (dist < threshold) {
                            current.rgb = top.rgb;
                        }
                    }
                }
            }
        }
    }

    // 3. Map to Palette
    for (let j = 0; j < M; j++) {
        for (let i = 0; i < N; i++) {
            const cell = mappedData[j][i];
            if (cell && !cell.isExternal && cell.rgb) {
                const closestBead = findClosestPaletteColor(cell.rgb, palette);
                // Update cell with final palette data
                mappedData[j][i] = { 
                    key: closestBead.key, 
                    color: closestBead.hex, 
                    isExternal: false 
                };
            }
        }
    }

    return mappedData;
}

// ==========================================
// 5. RENDERER (renderer.js)
// ==========================================

function renderGrid(ctx, gridData, pixelSize, showGridLines, width, height, excludedColors = []) {
    ctx.clearRect(0, 0, width, height);
    
    const rows = gridData.length;
    if (rows === 0) return;
    const cols = gridData[0].length;

    // Draw pixels
    for(let y=0; y<rows; y++) {
        for(let x=0; x<cols; x++) {
            const cell = gridData[y][x];
            
            // Check if cell is valid AND NOT excluded
            const isExcluded = cell && cell.key && excludedColors.includes(cell.key);
            
            if(cell && cell.color !== 'transparent' && !isExcluded) {
                ctx.fillStyle = cell.color;
                ctx.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
            } else {
                // Draw checkerboard for transparent or excluded
                ctx.fillStyle = ((x + y) % 2 === 0) ? '#f0f0f0' : '#ffffff';
                ctx.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
            }
        }
    }

    // Draw grid lines
    if(showGridLines && pixelSize >= 4) {
        ctx.strokeStyle = 'rgba(128, 128, 128, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        // Verticals
        for(let x=0; x<=cols; x++) {
            ctx.moveTo(x*pixelSize, 0);
            ctx.lineTo(x*pixelSize, height);
        }
        
        // Horizontals
        for(let y=0; y<=rows; y++) {
            ctx.moveTo(0, y*pixelSize);
            ctx.lineTo(width, y*pixelSize);
        }
        ctx.stroke();
    }
}

function highlightCell(ctx, x, y, pixelSize, color = 'rgba(255, 0, 0, 0.5)') {
    ctx.fillStyle = color;
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
}

// ==========================================
// 6. EXPORTER (exporter.js)
// ==========================================

function downloadProject(gridData, pixelSize, activeSystem, options = {}, excludedColors = []) {
    if (!gridData || gridData.length === 0) return;

    const { showGrid = true, showCoords = true, hideLabels = false } = options;

    const rows = gridData.length;
    const cols = gridData[0].length;
    // For export, we need enough space to potentially draw text inside cells
    // If showing labels inside cells, pixelSize must be large enough.
    // If hideLabels is true, we can use a smaller size, but standard is good.
    const outputPixelSize = Math.max(30, pixelSize); 
    
    // 1. Calculate Stats
    const stats = {};
    let totalBeads = 0;
    gridData.forEach(row => {
        row.forEach(cell => {
            // Check exclusion
            const isExcluded = cell && cell.key && excludedColors.includes(cell.key);

            if (cell && cell.color !== 'transparent' && !cell.isExternal && !isExcluded) {
                const key = cell.key; // e.g., "A01"
                if (!stats[key]) {
                    stats[key] = { 
                        count: 0, 
                        color: cell.color, 
                        key: key
                    };
                }
                stats[key].count++;
                totalBeads++;
            }
        });
    });
    
    const sortedStats = Object.values(stats).sort((a, b) => a.key.localeCompare(b.key));

    // 2. Setup Dimensions
    const padding = 40;
    const headerHeight = 60;
    const coordSize = showCoords ? 25 : 0; // Space for coordinates
    const legendItemHeight = 30;
    const legendCols = 4;
    const legendRows = Math.ceil(sortedStats.length / legendCols);
    const legendHeight = legendRows * legendItemHeight + 50; 
    
    const gridWidth = cols * outputPixelSize;
    const gridHeight = rows * outputPixelSize;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Width: grid + padding + left coords
    const totalWidth = Math.max(gridWidth + padding * 2 + coordSize, 800);
    // Height: header + top coords + grid + padding + legend
    const totalHeight = headerHeight + coordSize + gridHeight + padding + legendHeight + padding;
    
    canvas.width = totalWidth;
    canvas.height = totalHeight;
    
    // 3. Draw Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 4. Draw Header
    ctx.fillStyle = '#333';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`拼豆图纸 - ${cols}x${rows} (${totalBeads}颗)`, canvas.width / 2, 40);
    
    // 5. Grid Origin
    const startX = (canvas.width - gridWidth + coordSize) / 2; // Center horizontally, offset by coords
    const startY = headerHeight + coordSize;
    
    ctx.save();
    ctx.translate(startX, startY);
    
    // Draw Pixels
    gridData.forEach((row, y) => {
        row.forEach((cell, x) => {
             const px = x * outputPixelSize;
             const py = y * outputPixelSize;
             
             // Check exclusion
             const isExcluded = cell && cell.key && excludedColors.includes(cell.key);

             if(cell && cell.color !== 'transparent' && !cell.isExternal && !isExcluded) {
                ctx.fillStyle = cell.color;
                ctx.fillRect(px, py, outputPixelSize, outputPixelSize);
                
                // Draw Label inside cell?
                if (!hideLabels) {
                    // Contrast text color
                    ctx.fillStyle = getContrastColor(cell.color);
                    // Simplify label? Maybe just number part if standard prefix?
                    // For now, full key but small font
                    const fontSize = Math.floor(outputPixelSize / 3);
                    ctx.font = `${fontSize}px Arial`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(cell.key, px + outputPixelSize/2, py + outputPixelSize/2);
                }

            } else {
                 ctx.fillStyle = '#f9f9f9'; // Empty cell
                 ctx.fillRect(px, py, outputPixelSize, outputPixelSize);
            }
        });
    });

    // Draw Grid Lines
    if (showGrid) {
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for(let x=0; x<=cols; x++) {
            ctx.moveTo(x*outputPixelSize, 0);
            ctx.lineTo(x*outputPixelSize, gridHeight);
        }
        for(let y=0; y<=rows; y++) {
            ctx.moveTo(0, y*outputPixelSize);
            ctx.lineTo(gridWidth, y*outputPixelSize);
        }
        ctx.stroke();

        // Draw 10-grid thicker lines
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for(let x=0; x<=cols; x+=10) {
            ctx.moveTo(x*outputPixelSize, 0);
            ctx.lineTo(x*outputPixelSize, gridHeight);
        }
        for(let y=0; y<=rows; y+=10) {
            ctx.moveTo(0, y*outputPixelSize);
            ctx.lineTo(gridWidth, y*outputPixelSize);
        }
        ctx.stroke();
        
        // Center Lines (Red)
        ctx.strokeStyle = 'rgba(255, 0, 0, 0.7)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const cx = Math.floor(cols / 2) * outputPixelSize;
        const cy = Math.floor(rows / 2) * outputPixelSize;
        ctx.moveTo(cx, 0); ctx.lineTo(cx, gridHeight);
        ctx.moveTo(0, cy); ctx.lineTo(gridWidth, cy);
        ctx.stroke();
    }

    ctx.restore();
    
    // 6. Draw Coordinates
    if (showCoords) {
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Top X coords
        for (let i = 0; i < cols; i++) {
            if ((i+1) % 5 === 0 || i === 0) { // Show every 5th + 1st
                const x = startX + i * outputPixelSize + outputPixelSize/2;
                ctx.fillText(`${i+1}`, x, startY - 10);
            }
        }
        
        // Left Y coords
        ctx.textAlign = 'right';
        for (let j = 0; j < rows; j++) {
            if ((j+1) % 5 === 0 || j === 0) {
                const y = startY + j * outputPixelSize + outputPixelSize/2;
                ctx.fillText(`${j+1}`, startX - 8, y);
            }
        }
    }

    // 7. Draw Legend
    const legendStartY = startY + gridHeight + padding;
    ctx.save();
    ctx.translate(padding, legendStartY);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('色号清单', 0, 0);
    
    const contentWidth = canvas.width - padding * 2;
    const colWidth = contentWidth / legendCols;
    
    sortedStats.forEach((item, index) => {
        const col = index % legendCols;
        const row = Math.floor(index / legendCols);
        
        const x = col * colWidth;
        const y = row * legendItemHeight + 25;
        
        // Color Box
        ctx.fillStyle = item.color;
        ctx.fillRect(x, y, 16, 16);
        ctx.strokeStyle = '#ddd';
        ctx.strokeRect(x, y, 16, 16);
        
        // Text
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'left';
        // Check text color for contrast if we were to draw background
        ctx.fillText(`${item.key}`, x + 24, y + 13);
        
        ctx.fillStyle = '#666';
        ctx.textAlign = 'right';
        ctx.fillText(`${item.count}`, x + colWidth - 20, y + 13);
    });
    
    ctx.restore();
    
    // 8. Download
    const link = document.createElement('a');
    link.download = `pattern-${new Date().getTime()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// ==========================================
// 7. APP LOGIC (app.js)
// ==========================================

// --- State Management ---
const DEFAULT_STATE = {
    granularity: 50,
    threshold: 10,
    mode: 'dominant',
    activeSystems: ['MARD'],
    showGrid: true,
    selectedColor: null, // { key, hex, ... }
    excludedColors: [], // Array of excluded color keys (e.g. "H07")
    gridData: [], // 2D array
    originalImageSrc: null,
    
    // Editor State
    isEditing: false,
    isDrawing: false, // For drag-to-paint
    lastDrawnCell: null, // {r, c} to prevent multiple updates on same cell
    selectedBrush: null, // { key: 'A01', color: '#FFF' }
    editHistory: [] // Stack of gridData snapshots
};

let state = { ...DEFAULT_STATE };
let originalImage = null; // Image object
let activePalette = []; // Array of color objects

// --- DOM Elements ---
const els = {
    dropZone: document.getElementById('drop-zone'),
    fileInput: document.getElementById('file-input'),
    granularity: document.getElementById('granularity'),
    granularityVal: document.getElementById('granularity-val'),
    threshold: document.getElementById('threshold'),
    thresholdVal: document.getElementById('threshold-val'),
    modeSelect: document.getElementById('mode-select'),
    showGrid: document.getElementById('show-grid'),
    paletteList: document.getElementById('palette-list'),
    
    // Editor
    editorToolbar: document.getElementById('editor-toolbar'),
    editModeToggle: document.getElementById('edit-mode-toggle'),
    editControls: document.getElementById('edit-controls'),
    editStatus: document.getElementById('edit-status'),
    brushSelector: document.getElementById('brush-selector'),
    currentBrushColor: document.getElementById('current-brush-color'),
    currentBrushName: document.getElementById('current-brush-name'),
    undoBtn: document.getElementById('undo-btn'),
    brushModal: document.getElementById('brush-modal'),
    closeBrushModal: document.getElementById('close-brush-modal'),
    brushList: document.getElementById('brush-list'),
    
    // Noise Removal Panel
    noisePanel: document.getElementById('noise-removal-panel'),
    totalBeadsCount: document.getElementById('total-beads-count'),
    activeColorsList: document.getElementById('active-colors-list'),
    excludedSection: document.getElementById('excluded-section'),
    toggleExcluded: document.getElementById('toggle-excluded'),
    excludedChevron: document.getElementById('excluded-chevron'),
    excludedCount: document.getElementById('excluded-count'),
    excludedColorsList: document.getElementById('excluded-colors-list'),
    restoreAllBtn: document.getElementById('restore-all-btn'),

    // Image Editor Elements
    uploadPlaceholder: document.getElementById('upload-placeholder'),
    previewImage: document.getElementById('preview-image'),
    editOriginalBtn: document.getElementById('edit-original-btn'),
    
    imgEditorModal: document.getElementById('image-editor-modal'),
    imgEditorCanvas: document.getElementById('img-editor-canvas'),
    imgEditorClose: document.getElementById('img-editor-close'),
    imgEditorSave: document.getElementById('img-editor-save'),
    imgBrushSize: document.getElementById('img-brush-size'),
    imgBrushSizeVal: document.getElementById('img-brush-size-val'),
    imgUndoBtn: document.getElementById('img-undo-btn'),
    imgToolRadios: document.getElementsByName('img-tool'),
    imgZoomIn: document.getElementById('img-zoom-in'),
    imgZoomOut: document.getElementById('img-zoom-out'),
    imgZoomVal: document.getElementById('img-zoom-val'),

    downloadBtn: document.getElementById('download-btn'),
    canvas: document.getElementById('main-canvas'),
    canvasContainer: document.getElementById('canvas-container'),
    emptyState: document.getElementById('empty-state'),
    tooltip: document.getElementById('pixel-info-panel'),
    infoColorPreview: document.getElementById('info-color-preview'),
    infoColorName: document.getElementById('info-color-name'),
    infoColorHex: document.getElementById('info-color-hex'),
    infoCoords: document.getElementById('info-coords'),
    
    // Auth & Mobile
    passwordModal: document.getElementById('password-modal'),
    passwordInput: document.getElementById('password-input'),
    passwordSubmit: document.getElementById('password-submit'),
    passwordError: document.getElementById('password-error'),
    
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    closeSidebarBtn: document.getElementById('close-sidebar-btn'),
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebar-overlay'),
};

const ctx = els.canvas.getContext('2d');

// --- Initialization ---
function init() {
    checkAuth();
    loadState();
    renderPaletteControls();
    setupEventListeners();
    
    // Restore image if exists
    // if (state.originalImageSrc) {
    //     loadImage(state.originalImageSrc);
    // }
}

function checkAuth() {
    const isAuth = sessionStorage.getItem('perler-auth');
    if (isAuth === 'true') {
        els.passwordModal.classList.add('hidden');
    } else {
        els.passwordModal.classList.remove('hidden');
    }
}

function authenticate() {
    const pwd = els.passwordInput.value;
    if (pwd === '8888') {
        sessionStorage.setItem('perler-auth', 'true');
        els.passwordModal.classList.add('hidden');
    } else {
        els.passwordError.classList.remove('hidden');
        els.passwordInput.value = '';
    }
}

function toggleSidebar(show) {
    if (show) {
        els.sidebar.classList.remove('-translate-x-full');
        els.sidebarOverlay.classList.remove('hidden');
    } else {
        els.sidebar.classList.add('-translate-x-full');
        els.sidebarOverlay.classList.add('hidden');
    }
}

function loadState() {
    const saved = localStorage.getItem('perler-app-state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Only restore settings, NOT the image
            state = { 
                ...state, 
                granularity: parsed.granularity || 50,
                threshold: parsed.threshold !== undefined ? parsed.threshold : 10,
                mode: parsed.mode || 'dominant',
                activeSystems: parsed.activeSystems || ['MARD'],
                showGrid: parsed.showGrid ?? true,
                excludedColors: parsed.excludedColors || [], // Restore excluded
                // originalImageSrc: parsed.originalImageSrc // Do NOT restore image
            };
        } catch (e) {
            console.error('Failed to load state', e);
        }
    }
    
    // Sync UI
    els.granularity.value = state.granularity;
    els.granularityVal.textContent = state.granularity;
    els.threshold.value = state.threshold;
    els.thresholdVal.textContent = state.threshold;
    els.modeSelect.value = state.mode;
    els.showGrid.checked = state.showGrid;
    
    // Update Palette with restored excluded colors
    updatePalette();
}

function saveState() {
    // Save only settings, NOT the image to avoid stuck state / quota issues
    const toSave = {
        granularity: state.granularity,
        threshold: state.threshold,
        mode: state.mode,
        activeSystems: state.activeSystems,
        showGrid: state.showGrid,
        excludedColors: state.excludedColors,
        // originalImageSrc: state.originalImageSrc // Removed
    };
    localStorage.setItem('perler-app-state', JSON.stringify(toSave));
}

function renderPaletteControls() {
    const systems = getAllColorSystems();
    els.paletteList.innerHTML = systems.map(sys => `
        <label class="flex items-center space-x-2 cursor-pointer bg-gray-50 p-2 rounded hover:bg-gray-100">
            <input type="radio" name="bead-system" value="${sys}" 
                ${state.activeSystems.includes(sys) ? 'checked' : ''} 
                class="rounded-full text-blue-500 focus:ring-blue-500 system-radio">
            <span class="text-sm text-gray-700">${sys}</span>
        </label>
    `).join('');

    // Bind events
    document.querySelectorAll('.system-radio').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                const sys = e.target.value;
                state.activeSystems = [sys]; // Enforce single selection
                
                updatePalette();
                saveState();
                if (originalImage) processImage();
                
                // On mobile, close sidebar after selection for better UX
                if (window.innerWidth < 768) {
                    toggleSidebar(false);
                }
            }
        });
    });
    
    updatePalette();
}

function updatePalette() {
    // No longer passing excludedColors to generatePalette
    // The palette should always contain ALL colors of the system
    // Exclusion is now handled at Render time, not Generation time
    activePalette = generatePalette(state.activeSystems, []);
}

// --- Stats & Noise Removal Logic ---

function calculateColorStats() {
    const stats = {};
    let total = 0;
    
    if (state.gridData) {
        state.gridData.forEach(row => {
            row.forEach(cell => {
                if (cell && cell.color !== 'transparent' && !cell.isExternal) {
                    const key = cell.key;
                    if (!stats[key]) {
                        stats[key] = {
                            key: key,
                            color: cell.color,
                            count: 0
                        };
                    }
                    stats[key].count++;
                    total++;
                }
            });
        });
    }
    return { stats, total };
}

function renderNoiseRemovalPanel() {
    if (!originalImage || !state.gridData.length) {
        els.noisePanel.classList.add('hidden');
        return;
    }
    
    els.noisePanel.classList.remove('hidden');
    
    // stats contains ALL colors now (including excluded ones)
    const { stats, total } = calculateColorStats();
    
    // Filter into Active and Excluded
    const activeStats = [];
    const excludedStats = [];
    
    Object.values(stats).forEach(item => {
        if (state.excludedColors.includes(item.key)) {
            excludedStats.push(item);
        } else {
            activeStats.push(item);
        }
    });

    // Update Total Count (Active only)
    const activeTotal = activeStats.reduce((sum, item) => sum + item.count, 0);
    els.totalBeadsCount.textContent = activeTotal;
    
    // 1. Render Active Colors
    activeStats.sort((a, b) => a.count - b.count); // Ascending
    
    els.activeColorsList.innerHTML = activeStats.map(item => `
        <div class="flex items-center justify-between group cursor-pointer hover:bg-red-50 p-1 rounded transition" 
             onclick="toggleColorExclusion('${item.key}')" title="点击排除此颜色">
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded border shadow-sm" style="background-color: ${item.color}"></div>
                <span class="font-medium text-gray-700">${item.key}</span>
            </div>
            <span class="text-gray-500">${item.count} 颗</span>
        </div>
    `).join('');
    
    // 2. Render Excluded Colors
    const excludedCount = state.excludedColors.length;
    els.excludedCount.textContent = excludedCount;
    
    if (excludedCount > 0) {
        els.excludedSection.classList.remove('hidden');
        els.restoreAllBtn.classList.remove('hidden');
        
        // Render from excludedStats (which has real count and color)
        // If an excluded color is not in gridData anymore (count 0?), we still might want to show it?
        // But calculateColorStats iterates gridData. If gridData has the key, it will be here.
        // What if a color is in excludedColors but NOT in gridData? 
        // Then it won't be in stats. We should iterate state.excludedColors to be sure.
        
        // Better: Iterate state.excludedColors and try to find info in stats OR activePalette.
        
        const excludedItemsHtml = state.excludedColors.map(key => {
            let color = '#ccc';
            let count = 0;
            
            // Try find in stats
            if (stats[key]) {
                color = stats[key].color;
                count = stats[key].count;
            } else {
                // Try find in activePalette
                const found = activePalette.find(c => c.key === key);
                if (found) color = found.hex;
            }
            
            return `
                <div class="flex items-center justify-between bg-gray-50 p-2 rounded border">
                    <div class="flex items-center gap-2">
                        <div class="w-4 h-4 rounded border shadow-sm" style="background-color: ${color}"></div>
                        <span class="font-medium text-gray-600 text-xs">${key}</span>
                    </div>
                    <div class="flex items-center gap-2">
                         <span class="text-xs text-gray-400">(${count})</span>
                         <button class="text-blue-500 hover:text-blue-700 text-xs bg-white px-2 py-0.5 rounded border shadow-sm"
                        onclick="toggleColorExclusion('${key}')">恢复</button>
                    </div>
                </div>
            `;
        }).join('');
        
        els.excludedColorsList.innerHTML = excludedItemsHtml;
        
    } else {
        els.excludedSection.classList.add('hidden');
        els.restoreAllBtn.classList.add('hidden');
    }
}

// Expose to global scope for HTML onclick
window.toggleColorExclusion = function(key) {
    const idx = state.excludedColors.indexOf(key);
    if (idx > -1) {
        // Remove (Restore)
        state.excludedColors.splice(idx, 1);
    } else {
        // Add (Exclude)
        state.excludedColors.push(key);
    }
    
    // Only Draw and Update UI, NO Re-calculation of algorithm!
    draw();
    renderNoiseRemovalPanel();
    saveState();
};

// --- Editor Functions ---

function toggleEditMode(enabled) {
    state.isEditing = enabled;
    
    if (enabled) {
        els.editControls.classList.remove('opacity-50', 'pointer-events-none');
        els.editStatus.classList.remove('hidden');
        els.canvas.style.cursor = 'crosshair'; // or cell?
        
        // Init default brush if none
        if (!state.selectedBrush && activePalette.length > 0) {
            selectBrushColor(activePalette[0]);
        }
    } else {
        els.editControls.classList.add('opacity-50', 'pointer-events-none');
        els.editStatus.classList.add('hidden');
        els.canvas.style.cursor = 'default';
        els.tooltip.classList.add('hidden'); // hide tooltip
    }
}

function selectBrushColor(colorOrKey) {
    if (colorOrKey === 'transparent') {
        state.selectedBrush = { key: '透明', color: 'transparent', isExternal: true };
    } else if (typeof colorOrKey === 'string') {
        // Find by key
        const found = activePalette.find(c => c.key === colorOrKey);
        if (found) state.selectedBrush = { key: found.key, color: found.hex, isExternal: false };
    } else {
        // Object
        state.selectedBrush = { key: colorOrKey.key, color: colorOrKey.hex, isExternal: false };
    }
    
    // Update UI
    if (state.selectedBrush) {
        if (state.selectedBrush.color === 'transparent') {
            els.currentBrushColor.style.backgroundColor = 'transparent';
            els.currentBrushColor.style.backgroundImage = 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)';
            els.currentBrushColor.style.backgroundSize = '8px 8px';
        } else {
            els.currentBrushColor.style.backgroundImage = 'none';
            els.currentBrushColor.style.backgroundColor = state.selectedBrush.color;
        }
        els.currentBrushName.textContent = state.selectedBrush.key;
    }
    
    els.brushModal.classList.add('hidden');
}

function openBrushModal() {
    els.brushModal.classList.remove('hidden');
    
    // Render sorted palette
    const sorted = sortColorsByHue(activePalette);
    
    els.brushList.innerHTML = sorted.map(c => `
        <div class="flex flex-col items-center p-2 rounded hover:bg-gray-100 cursor-pointer border"
             onclick='selectBrushColor(${JSON.stringify({key: c.key, hex: c.hex})})'>
            <div class="w-8 h-8 rounded border shadow-sm mb-1" style="background-color: ${c.hex}"></div>
            <span class="text-xs font-mono text-gray-600">${c.key}</span>
        </div>
    `).join('');
}

function pushHistory() {
    // Deep clone gridData
    // Warning: Large grids might consume memory. Limit stack size?
    if (state.editHistory.length > 10) state.editHistory.shift();
    
    const snapshot = state.gridData.map(row => row.map(cell => ({...cell})));
    state.editHistory.push(snapshot);
    els.undoBtn.disabled = false;
}

function undo() {
    if (state.editHistory.length === 0) return;
    
    const prevGrid = state.editHistory.pop();
    state.gridData = prevGrid;
    
    if (state.editHistory.length === 0) els.undoBtn.disabled = true;
    
    draw();
    renderNoiseRemovalPanel(); // Update stats
}

// Expose to window for modal
window.selectBrushColor = selectBrushColor;

function setupEventListeners() {
    // Auth
    els.passwordSubmit.addEventListener('click', authenticate);
    els.passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') authenticate();
    });

    // Mobile Sidebar
    els.mobileMenuBtn.addEventListener('click', () => toggleSidebar(true));
    els.closeSidebarBtn.addEventListener('click', () => toggleSidebar(false));
    els.sidebarOverlay.addEventListener('click', () => toggleSidebar(false));

    // Editor Events
    els.editModeToggle.addEventListener('change', (e) => toggleEditMode(e.target.checked));
    
    els.brushSelector.addEventListener('click', openBrushModal);
    els.closeBrushModal.addEventListener('click', () => els.brushModal.classList.add('hidden'));
    
    els.undoBtn.addEventListener('click', undo);

    // File Upload
    els.fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            readFile(e.target.files[0]);
            // Clear input so same file can be selected again
            els.fileInput.value = '';
        }
    });

    els.dropZone.addEventListener('click', () => els.fileInput.click());
    els.dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        els.dropZone.classList.add('border-blue-500', 'bg-blue-50');
    });
    els.dropZone.addEventListener('dragleave', () => {
        els.dropZone.classList.remove('border-blue-500', 'bg-blue-50');
    });
    els.dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Stop propagation
        els.dropZone.classList.remove('border-blue-500', 'bg-blue-50');
        
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            readFile(files[0]);
            // Clear input value to allow re-selecting same file if needed
            els.fileInput.value = ''; 
        }
    });

    // Settings
    els.granularity.addEventListener('input', (e) => {
        state.granularity = parseInt(e.target.value);
        els.granularityVal.textContent = state.granularity;
        if (originalImage) processImage(); // Debounce?
    });
    
    // Debounced save for slider
    els.granularity.addEventListener('change', saveState);

    // Threshold Settings
    els.threshold.addEventListener('input', (e) => {
        state.threshold = parseInt(e.target.value);
        els.thresholdVal.textContent = state.threshold;
        if (originalImage) processImage(); // Debounce recommended for heavier ops
    });
    els.threshold.addEventListener('change', saveState);

    els.modeSelect.addEventListener('change', (e) => {
        state.mode = e.target.value;
        saveState();
        if (originalImage) processImage();
    });

    els.showGrid.addEventListener('change', (e) => {
        state.showGrid = e.target.checked;
        saveState();
        draw();
    });

    // Export Options UI
    const exportOpts = {
        showGrid: document.getElementById('export-show-grid'),
        showCoords: document.getElementById('export-show-coords'),
        hideLabels: document.getElementById('export-hide-labels'),
    };

    els.downloadBtn.addEventListener('click', () => {
        const pixelSize = calculatePixelSize();
        const opts = {
            showGrid: exportOpts.showGrid.checked,
            showCoords: exportOpts.showCoords.checked,
            hideLabels: exportOpts.hideLabels.checked
        };
        downloadProject(state.gridData, pixelSize, state.activeSystems[0], opts, state.excludedColors);
    });

    // Toggle Excluded Section
    els.toggleExcluded.addEventListener('click', () => {
        els.excludedColorsList.classList.toggle('hidden');
        els.excludedChevron.classList.toggle('rotate-180');
    });

    // Restore All
    els.restoreAllBtn.addEventListener('click', () => {
        state.excludedColors = [];
        updatePalette();
        saveState();
        processImage();
    });

    // Canvas Interactions
    els.canvas.addEventListener('mousemove', handleCanvasHover);
    els.canvas.addEventListener('mousedown', handleCanvasMouseDown);
    els.canvas.addEventListener('mouseup', handleCanvasMouseUp);
    els.canvas.addEventListener('mouseleave', () => {
        state.isDrawing = false; // Stop drawing if leave canvas
        els.tooltip.classList.add('hidden');
        draw(); // Clear highlights
    });

    // Touch Events for Mobile (Canvas)
    els.canvas.addEventListener('touchstart', (e) => {
        if(e.touches.length === 1 && state.isEditing) {
            e.preventDefault(); // Prevent scroll only when editing
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            els.canvas.dispatchEvent(mouseEvent);
        }
    }, { passive: false });

    els.canvas.addEventListener('touchmove', (e) => {
        if(e.touches.length === 1 && state.isEditing) {
            e.preventDefault(); 
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            els.canvas.dispatchEvent(mouseEvent);
        }
    }, { passive: false });

    els.canvas.addEventListener('touchend', (e) => {
        const mouseEvent = new MouseEvent('mouseup', {});
        els.canvas.dispatchEvent(mouseEvent);
    });

    // Image Editor Events
    els.editOriginalBtn.addEventListener('click', openImageEditor);
    els.imgEditorClose.addEventListener('click', closeImageEditor);
    els.imgEditorSave.addEventListener('click', saveImgEdit);
    els.imgUndoBtn.addEventListener('click', undoImgEdit);
    
    els.imgEditorCanvas.addEventListener('mousedown', startImgDraw);
    els.imgEditorCanvas.addEventListener('mousemove', moveImgDraw);
    els.imgEditorCanvas.addEventListener('mouseup', endImgDraw);
    els.imgEditorCanvas.addEventListener('mouseout', endImgDraw);

    // Touch Events for Mobile (Image Editor)
    els.imgEditorCanvas.addEventListener('touchstart', (e) => {
        if(e.touches.length === 1) {
            e.preventDefault();
            const touch = e.touches[0];
            // Manually call startImgDraw with emulated event object
            // because startImgDraw checks e.button === 0 which MouseEvent has, but we need to map positions carefully
            // Actually better to dispatch events or adapt handler.
            // Let's adapt handler to accept touch-like object or dispatch.
            // Dispatching is easier for existing logic.
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY,
                button: 0
            });
            els.imgEditorCanvas.dispatchEvent(mouseEvent);
        }
    }, { passive: false });

    els.imgEditorCanvas.addEventListener('touchmove', (e) => {
        if(e.touches.length === 1) {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY,
                button: 0
            });
            els.imgEditorCanvas.dispatchEvent(mouseEvent);
        }
    }, { passive: false });

    els.imgEditorCanvas.addEventListener('touchend', (e) => {
         const mouseEvent = new MouseEvent('mouseup', { button: 0 });
         els.imgEditorCanvas.dispatchEvent(mouseEvent);
    });

    els.imgBrushSize.addEventListener('input', (e) => {
        els.imgBrushSizeVal.textContent = e.target.value;
    });

    els.imgZoomIn.addEventListener('click', () => zoomImg(0.1));
    els.imgZoomOut.addEventListener('click', () => zoomImg(-0.1));
}

function readFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        // Clear previous state properly
        state.gridData = []; 
        state.originalImageSrc = e.target.result;
        // Don't save image to LS: saveState(); 
        loadImage(state.originalImageSrc);
    };
    reader.readAsDataURL(file);
}

function loadImage(src) {
    originalImage = new Image();
    originalImage.crossOrigin = "Anonymous";
    originalImage.onload = () => {
        // Update Preview UI
        els.uploadPlaceholder.classList.add('hidden');
        els.previewImage.src = src;
        els.previewImage.classList.remove('hidden');
        els.editOriginalBtn.classList.remove('hidden');
        
        els.emptyState.classList.add('hidden');
        els.downloadBtn.disabled = false;
        processImage();
    };
    originalImage.src = src;
}

function processImage() {
    if (!originalImage) return;

    // Create offscreen canvas to get data
    const offCanvas = document.createElement('canvas');
    offCanvas.width = originalImage.width;
    offCanvas.height = originalImage.height;
    const offCtx = offCanvas.getContext('2d');
    offCtx.drawImage(originalImage, 0, 0);

    // Calculate Grid Dimensions based on Granularity (N is width in beads)
    // Granularity slider value is N (width)
    const N = state.granularity;
    const aspectRatio = originalImage.height / originalImage.width;
    const M = Math.round(N * aspectRatio);

    // Run Algorithm
    state.gridData = calculatePixelGrid(
        offCtx,
        originalImage.width,
        originalImage.height,
        N,
        M,
        activePalette,
        state.mode,
        state.threshold
    );

    draw();
    renderNoiseRemovalPanel(); // Update UI
}

function calculatePixelSize() {
    if (!state.gridData.length) return 10;
    // Fit canvas to container? Or fixed size?
    // Let's make pixel size dynamic to fit within a max width, but not too small.
    // Or just fixed display size and scale canvas.
    
    // Current approach: Make canvas large enough for crisp pixels.
    // Container width available
    const containerWidth = els.canvasContainer.clientWidth - 64; // padding
    const containerHeight = els.canvasContainer.clientHeight - 64;
    
    const cols = state.gridData[0].length;
    const rows = state.gridData.length;
    
    const maxPixelW = Math.floor(containerWidth / cols);
    const maxPixelH = Math.floor(containerHeight / rows);
    
    // Min pixel size 5, Max 40
    let size = Math.min(maxPixelW, maxPixelH);
    size = Math.max(5, Math.min(size, 40)); 
    
    return size;
}

function draw() {
    if (!state.gridData.length) return;
    
    const pixelSize = calculatePixelSize();
    const cols = state.gridData[0].length;
    const rows = state.gridData.length;
    
    els.canvas.width = cols * pixelSize;
    els.canvas.height = rows * pixelSize;
    
    renderGrid(ctx, state.gridData, pixelSize, state.showGrid, els.canvas.width, els.canvas.height, state.excludedColors);
}

function handleCanvasMouseDown(e) {
    if (!state.gridData.length || !state.isEditing) return;
    
    state.isDrawing = true;
    state.lastDrawnCell = null; // Reset
    
    // Also perform a click action immediately
    paintCellAt(e);
}

function handleCanvasMouseUp(e) {
    if (state.isDrawing) {
        state.isDrawing = false;
        state.lastDrawnCell = null;
        // Update stats once after stroke is finished to save performance?
        // Or keep real-time. Let's keep real-time for now, or move it here if slow.
        renderNoiseRemovalPanel();
    }
}

function handleCanvasHover(e) {
    if (!state.gridData.length) return;
    
    // If drawing, paint!
    if (state.isEditing && state.isDrawing) {
        paintCellAt(e);
    }

    const rect = els.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const pixelSize = els.canvas.width / state.gridData[0].length;
    const col = Math.floor(x / pixelSize);
    const row = Math.floor(y / pixelSize);
    
    if (row >= 0 && row < state.gridData.length && col >= 0 && col < state.gridData[0].length) {
        const cell = state.gridData[row][col];
        
        // Show Tooltip
        els.tooltip.classList.remove('hidden');
        
        if (cell && cell.color !== 'transparent') {
             els.infoColorPreview.style.backgroundColor = cell.color;
             els.infoColorName.textContent = `${cell.key}`;
             els.infoColorHex.textContent = cell.color;
        } else {
             els.infoColorPreview.style.backgroundColor = 'transparent';
             els.infoColorName.textContent = '透明';
             els.infoColorHex.textContent = '-';
        }
        els.infoCoords.textContent = `${col + 1}, ${row + 1}`;
        
        // Redraw to remove old highlight and add new one
        // Note: For performance, maybe use an overlay canvas?
        // For now, redraw full grid is okay for small N.
        // OPTIMIZATION: Don't full redraw if dragging to paint, it flickers/lags
        if (!state.isDrawing) {
             draw(); 
             highlightCell(ctx, col, row, pixelSize);
        }
    }
}

function paintCellAt(e) {
    if (!state.gridData.length || !state.selectedBrush) return;

    const rect = els.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const pixelSize = els.canvas.width / state.gridData[0].length;
    const col = Math.floor(x / pixelSize);
    const row = Math.floor(y / pixelSize);
    
    if (row >= 0 && row < state.gridData.length && col >= 0 && col < state.gridData[0].length) {
        
        // Check if same cell to avoid redundant updates
        if (state.lastDrawnCell && state.lastDrawnCell.r === row && state.lastDrawnCell.c === col) {
            return;
        }

        // Push history ONLY on mouse down (start of stroke)? 
        // Or every pixel? Every pixel is too much history.
        // Better: Push history on MouseDown once.
        if (state.lastDrawnCell === null) {
             pushHistory();
        }

        state.lastDrawnCell = { r: row, c: col };

        // Modify Cell
        state.gridData[row][col] = {
            key: state.selectedBrush.key,
            color: state.selectedBrush.color,
            isExternal: state.selectedBrush.isExternal
        };
        
        // Draw just this cell to be fast
    // But we need to handle grid lines... 
    // Full draw is safest but maybe slow on large grids.
    // Let's try full draw first.
    draw();
    renderNoiseRemovalPanel(); // Update stats in real-time when painting
    
    // If we want highlight during drag:
    highlightCell(ctx, col, row, pixelSize);
}
}

// Removed handleCanvasClick as it's replaced by mousedown/up
// function handleCanvasClick(e) { ... }

// ==========================================
// 8. IMAGE EDITOR (Original Image)
// ==========================================

let imgEditorCtx = null;
let imgEditorOriginalData = null; // Canvas
let restorePattern = null;
let imgEditorHistory = []; 
let isImgDrawing = false;
let lastImgPos = null;
let imgEditorZoom = 1.0;

function updateImgZoom() {
    els.imgZoomVal.textContent = Math.round(imgEditorZoom * 100) + '%';
    // Scale the Canvas Visual Size
    const w = originalImage.width * imgEditorZoom;
    const h = originalImage.height * imgEditorZoom;
    els.imgEditorCanvas.style.width = w + 'px';
    els.imgEditorCanvas.style.height = h + 'px';
}

function zoomImg(delta) {
    let newZoom = imgEditorZoom + delta;
    // Limit zoom 10% to 500%
    if (newZoom < 0.1) newZoom = 0.1;
    if (newZoom > 5.0) newZoom = 5.0;
    
    // Round to 1 decimal place to avoid float issues
    newZoom = Math.round(newZoom * 10) / 10;
    
    imgEditorZoom = newZoom;
    updateImgZoom();
}

function openImageEditor(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (!originalImage) return;

    els.imgEditorModal.classList.remove('hidden');
    
    const canvas = els.imgEditorCanvas;
    canvas.width = originalImage.width;
    canvas.height = originalImage.height;
    
    imgEditorCtx = canvas.getContext('2d');
    imgEditorCtx.drawImage(originalImage, 0, 0);
    
    // Prepare Original Data for Restore
    const offCanvas = document.createElement('canvas');
    offCanvas.width = originalImage.width;
    offCanvas.height = originalImage.height;
    const offCtx = offCanvas.getContext('2d');
    offCtx.drawImage(originalImage, 0, 0);
    imgEditorOriginalData = offCanvas;
    
    restorePattern = imgEditorCtx.createPattern(offCanvas, 'no-repeat');

    // Reset History
    imgEditorHistory = [];
    // Save initial state
    imgEditorHistory.push(canvas.toDataURL());
    els.imgUndoBtn.disabled = true;
    
    // Reset Tools
    if (els.imgToolRadios[0]) els.imgToolRadios[0].checked = true;
    els.imgBrushSize.value = 20;
    els.imgBrushSizeVal.textContent = '20';
    
    // Reset Zoom
    imgEditorZoom = 1.0;
    updateImgZoom();
}

function closeImageEditor() {
    els.imgEditorModal.classList.add('hidden');
}

function saveImgEdit() {
    const newDataUrl = els.imgEditorCanvas.toDataURL();
    state.originalImageSrc = newDataUrl; 
    loadImage(newDataUrl); 
    closeImageEditor();
}

function saveImgHistory() {
    if (imgEditorHistory.length > 10) imgEditorHistory.shift();
    imgEditorHistory.push(els.imgEditorCanvas.toDataURL());
    els.imgUndoBtn.disabled = false;
}

function undoImgEdit() {
    if (imgEditorHistory.length <= 1) return;
    
    imgEditorHistory.pop(); 
    const prevSrc = imgEditorHistory[imgEditorHistory.length - 1];
    
    const img = new Image();
    img.onload = () => {
        // Fix: Reset composite operation to ensure image draws correctly (especially if using eraser)
        const savedOp = imgEditorCtx.globalCompositeOperation;
        imgEditorCtx.globalCompositeOperation = 'source-over';
        
        imgEditorCtx.clearRect(0, 0, els.imgEditorCanvas.width, els.imgEditorCanvas.height);
        imgEditorCtx.drawImage(img, 0, 0);
        
        // Restore logic handled by next draw action, but we can restore if needed
        // imgEditorCtx.globalCompositeOperation = savedOp; 
    };
    img.src = prevSrc;
    
    if (imgEditorHistory.length === 1) els.imgUndoBtn.disabled = true;
}

function startImgDraw(e) {
    if (e.button !== 0) return; // Only left click
    isImgDrawing = true;
    lastImgPos = null;
    performImgDraw(e);
}

function moveImgDraw(e) {
    if (!isImgDrawing) return;
    e.preventDefault(); 
    performImgDraw(e);
}

function endImgDraw() {
    if (isImgDrawing) {
        isImgDrawing = false;
        lastImgPos = null;
        saveImgHistory();
    }
}

function performImgDraw(e) {
    if (!imgEditorCtx) return;

    const rect = els.imgEditorCanvas.getBoundingClientRect();
    const scaleX = els.imgEditorCanvas.width / rect.width;
    const scaleY = els.imgEditorCanvas.height / rect.height;
    
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    
    const size = parseInt(els.imgBrushSize.value);
    const toolRadio = document.querySelector('input[name="img-tool"]:checked');
    const tool = toolRadio ? toolRadio.value : 'eraser';

    imgEditorCtx.lineCap = 'round';
    imgEditorCtx.lineJoin = 'round';
    imgEditorCtx.lineWidth = size;

    if (tool === 'eraser') {
        imgEditorCtx.globalCompositeOperation = 'destination-out';
        imgEditorCtx.strokeStyle = 'rgba(0,0,0,1)';
        imgEditorCtx.fillStyle = 'rgba(0,0,0,1)';
    } else {
        imgEditorCtx.globalCompositeOperation = 'source-over';
        imgEditorCtx.strokeStyle = restorePattern;
        imgEditorCtx.fillStyle = restorePattern;
    }

    imgEditorCtx.beginPath();
    if (lastImgPos) {
        imgEditorCtx.moveTo(lastImgPos.x, lastImgPos.y);
        imgEditorCtx.lineTo(x, y);
        imgEditorCtx.stroke();
    } else {
        imgEditorCtx.arc(x, y, size/2, 0, Math.PI * 2);
        imgEditorCtx.fill();
    }

    lastImgPos = { x, y };
}

// Start
init();
