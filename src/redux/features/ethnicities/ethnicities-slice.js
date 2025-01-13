import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    ethnicities: [
        {
            "code": "00",
            "name": "AKAN"
        },
        {
            "code": "01",
            "name": "Agona"
        },
        {
            "code": "02",
            "name": "Ahafo"
        },
        {
            "code": "03",
            "name": "Ahanta"
        },
        {
            "code": "04",
            "name": "Akuapem"
        },
        {
            "code": "05",
            "name": "Akwamu"
        },
        {
            "code": "06",
            "name": "Akyem"
        },
        {
            "code": "07",
            "name": "Aowin"
        },
        {
            "code": "08",
            "name": "Asante"
        },
        {
            "code": "09",
            "name": "Asen (Assin)"
        },
        {
            "code": "10",
            "name": "Boron (Brong) (including Banda)"
        },
        {
            "code": "11",
            "name": "Chokosi (Anufor)"
        },
        {
            "code": "12",
            "name": "Denkyira / Twifo"
        },
        {
            "code": "13",
            "name": "Evalue"
        },
        {
            "code": "14",
            "name": "Fante"
        },
        {
            "code": "15",
            "name": "Kwahu"
        },
        {
            "code": "16",
            "name": "Nzema"
        },
        {
            "code": "17",
            "name": "Sefwi"
        },
        {
            "code": "18",
            "name": "Wasa"
        },
        {
            "code": "19",
            "name": "Bawle"
        },
        {
            "code": "20",
            "name": "GA-DANGME"
        },
        {
            "code": "21",
            "name": "Dangme (Ada, Shai, Krobo, Osudoku,Ningo)"
        },
        {
            "code": "22",
            "name": "Ga"
        },
        {
            "code": "30",
            "name": "EWE"
        },
        {
            "code": "30",
            "name": "Ewe"
        },
        {
            "code": "40",
            "name": "GUAN"
        },
        {
            "code": "41",
            "name": "Akpafu, Lolobi, Likpe, Bowiri, Buem, Santrokofi, Akposo"
        },
        {
            "code": "42",
            "name": "Avatime, Nyongbo, Tafi, Logba"
        },
        {
            "code": "43",
            "name": "Awutu, Efutu, Senya, Breku"
        },
        {
            "code": "44",
            "name": "Cherepong, Larteh, Anum-Boso"
        },
        {
            "code": "45",
            "name": "Gonja"
        },
        {
            "code": "46",
            "name": "Nkonya"
        },
        {
            "code": "47",
            "name": "Yeji, Nchumuru, Krachi, Nawuri, Bassa Achode"
        },
        {
            "code": "48",
            "name": "Nkomi, Wiase, Dwan"
        },
        {
            "code": "50",
            "name": "GURMA"
        },
        {
            "code": "51",
            "name": "Bimoba"
        },
        {
            "code": "52",
            "name": "Kokomba"
        },
        {
            "code": "53",
            "name": "Basare"
        },
        {
            "code": "54",
            "name": "Pilapila"
        },
        {
            "code": "55",
            "name": "Salfalba (Sabulaba)"
        },
        {
            "code": "56",
            "name": "Kotokoli"
        },
        {
            "code": "57",
            "name": "Chamba (Kyamba)"
        },
        {
            "code": "60",
            "name": "MOLE-DAGBANI"
        },
        {
            "code": "61",
            "name": "Builsa (Kangyaga or Kanjaga)"
        },
        {
            "code": "62",
            "name": "Dagarte (Dagaba), Lobi"
        },
        {
            "code": "63",
            "name": "Dagomba"
        },
        {
            "code": "64",
            "name": "Kusasi"
        },
        {
            "code": "65",
            "name": "Mamprusi"
        },
        {
            "code": "66",
            "name": "Namnam (Nabdom)"
        },
        {
            "code": "67",
            "name": "Nankansi, Talensi & Gurense (Frafra)"
        },
        {
            "code": "68",
            "name": "Nanumba"
        },
        {
            "code": "69",
            "name": "Wali (Wala)"
        },
        {
            "code": "70",
            "name": "GRUSI"
        },
        {
            "code": "71",
            "name": "Kasena (Paga)"
        },
        {
            "code": "72",
            "name": "Mo"
        },
        {
            "code": "73",
            "name": "Sisala"
        },
        {
            "code": "74",
            "name": "Vagala"
        },
        {
            "code": "75",
            "name": "Other Grusi (e.g. Lela, Templensi, Birifor, Yangala, Miwo)"
        },
        {
            "code": "80",
            "name": "MANDE"
        },
        {
            "code": "81",
            "name": "Busanga"
        },
        {
            "code": "82",
            "name": "Wangara (Bambara, Madingo & Dyula)"
        },
        {
            "code": "90",
            "name": "ALL OTHER TRIBES"
        },
        {
            "code": "91",
            "name": "All other tribes originating from Ghana"
        },
        {
            "code": "92",
            "name": "Other tribes originating from outside Ghana (Mosi, Hausa, Fulani, Zabrama, etc."
        }
    ]

}

const ethnicitiesSlice = createSlice({
    name: 'ethnicities',
    initialState,
    reducers: {}
});


const {reducer} = ethnicitiesSlice;

export const selectEthnicities = state => state.ethnicities;

export default reducer;