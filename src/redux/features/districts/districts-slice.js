import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    districts: [
        {
            "region": "Western",
            "name": "Jomoro",
            "code": "0101",
            "type": "District",
            "capital": "Half-Assini",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Ellembelle",
            "code": "0102",
            "type": "District",
            "capital": "Nkroful",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Nzema East",
            "code": "0103",
            "type": "Municipal",
            "capital": "Axim",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Ahanta West",
            "code": "0104",
            "type": "District",
            "capital": "Agona-Nkwanta",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Sekondi-Takoradi",
            "code": "0105",
            "type": "Metropolitan",
            "capital": "Sekondi",
            "sub_metros": [
                {"name": "Kwesimintsim", "code": "1"},
                {"name": "Takoradi", "code": "2"},
                {"name": "Sekondi", "code": "3"},
                {"name": "Essikadu-Ketan", "code": "4"}
            ]
        },
        {
            "region": "Western",
            "name": "Shama",
            "code": "0106",
            "type": "District",
            "capital": "Shama",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Mpohor-Wassa East",
            "code": "0107",
            "type": "District",
            "capital": "Daboase",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Tarkwa Nsuaem",
            "code": "0108",
            "type": "Municipal",
            "capital": "Tarkwa",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Prestea / Huni Valley",
            "code": "0109",
            "type": "District",
            "capital": "Bogoso",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Wassa Amenfi East",
            "code": "0110",
            "type": "District",
            "capital": "Wassa-Akropong",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Wassa Amenfi West",
            "code": "0111",
            "type": "District",
            "capital": "Asankragwa",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Aowin / Suaman",
            "code": "0112",
            "type": "District",
            "capital": "Enchi",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Sefwi-Akontombra",
            "code": "0113",
            "type": "District",
            "capital": "Sefwi-Akontombra",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Sefwi-Wiawso",
            "code": "0114",
            "type": "District",
            "capital": "Sefwi-Wiawso",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Sefwi-Bibiani-Ahwiaso-Bekwai",
            "code": "0115",
            "type": "District",
            "capital": "Bibiani",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Juabeso",
            "code": "0116",
            "type": "District",
            "capital": "Juabeso",
            "sub_metros": []
        },
        {
            "region": "Western",
            "name": "Bia",
            "code": "0117",
            "type": "District",
            "capital": "Essam-Debiso",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Komenda / Edina / Eguafo / Abirem",
            "code": "0201",
            "type": "Municipal",
            "capital": "Elmina",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Cape Coast",
            "code": "0202",
            "type": "Metropolitan",
            "capital": "Cape Coast",
            "sub_metros": [
                {"name": "Cape Coast South", "code": "1"},
                {"name": "Cape Coast North", "code": "2"}
            ]
        },
        {
            "region": "Central",
            "name": "Abura / Asebu / Kwamankese",
            "code": "0203",
            "type": "District",
            "capital": "Abura Dunkwa",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Mfantsiman",
            "code": "0204",
            "type": "Municipal",
            "capital": "Saltpond",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Ajumako / Enyan / Essiam",
            "code": "0205",
            "type": "District",
            "capital": "Ajumako",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Gomoa West",
            "code": "0206",
            "type": "District",
            "capital": "Apam",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Effutu",
            "code": "0207",
            "type": "Municipal",
            "capital": "Winneba",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Gomoa East",
            "code": "0208",
            "type": "District",
            "capital": "Afransi",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Ewutu Senya",
            "code": "0209",
            "type": "District",
            "capital": "Awutu Bereku",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Agona East",
            "code": "0210",
            "type": "District",
            "capital": "Nsaba",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Agona West",
            "code": "0211",
            "type": "Municipal",
            "capital": "Agona Swedru",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Asikuma / Odoben / Brakwa",
            "code": "0212",
            "type": "District",
            "capital": "Breman Asikuma",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Assin South",
            "code": "0213",
            "type": "District",
            "capital": "Nsuaem-Kyekyewere",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Assin North",
            "code": "0214",
            "type": "Municipal",
            "capital": "Assin Fosu",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Twifo / Heman / Lower Denkyira",
            "code": "0215",
            "type": "District",
            "capital": "Twifo Praso",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Upper Denkyira East",
            "code": "0216",
            "type": "Municipal",
            "capital": "Dunkwa-On-Offin",
            "sub_metros": []
        },
        {
            "region": "Central",
            "name": "Upper Denkyira West",
            "code": "0217",
            "type": "District",
            "capital": "Diaso",
            "sub_metros": []
        },
        {
            "region": "Greater Accra",
            "name": "Weija (Ga South)",
            "code": "0301",
            "type": "Municipal",
            "capital": "Gbawe",
            "sub_metros": []
        },
        {
            "region": "Greater Accra",
            "name": "Ga West",
            "code": "0302",
            "type": "Municipal",
            "capital": "Amasaman",
            "sub_metros": []
        },
        {
            "region": "Greater Accra",
            "name": "Ga East",
            "code": "0303",
            "type": "Municipal",
            "capital": "Abokobi",
            "sub_metros": []
        },
        {
            "region": "Greater Accra",
            "name": "A M A",
            "code": "0304",
            "type": "Metropolitan",
            "capital": "Accra",
            "sub_metros": [
                {"name": "Ablekuma South", "code": "1"},
                {"name": "Ablekuma Central", "code": "2"},
                {"name": "Ashiedu Keteke", "code": "3"},
                {"name": "Osu Klotey", "code": "4"},
                {"name": "La", "code": "5"},
                {"name": "Ayawaso East", "code": "6"},
                {"name": "Ayawaso Central", "code": "7"},
                {"name": "Okai Koi South", "code": "8"},
                {"name": "Ablekuma North", "code": "9"},
                {"name": "Okai Koi North", "code": "10"},
                {"name": "Ayawaso West Wogon", "code": "11"}
            ]
        },
        {
            "region": "Greater Accra",
            "name": "Adenta",
            "code": "0305",
            "type": "Municipal",
            "capital": "Adenta",
            "sub_metros": []
        },
        {
            "region": "Greater Accra",
            "name": "Ledzokuku / Krowor",
            "code": "0306",
            "type": "Municipal",
            "capital": "Teshie/Nungua",
            "sub_metros": []
        },
        {
            "region": "Greater Accra",
            "name": "Ashaiman",
            "code": "0307",
            "type": "Municipal",
            "capital": "Ashaiman",
            "sub_metros": []
        },
        {
            "region": "Greater Accra",
            "name": "Tema",
            "code": "0308",
            "type": "Metropolitan",
            "capital": "Tema",
            "sub_metros": [
                {"name": "Tema West", "code": "1"},
                {"name": "Tema East", "code": "2"},
                {"name": "Kpone Katamanso", "code": "3"}
            ]
        },
        {
            "region": "Greater Accra",
            "name": "Dangbe West",
            "code": "0309",
            "type": "District",
            "capital": "Dodowa",
            "sub_metros": []
        },
        {
            "region": "Greater Accra",
            "name": "Dangbe East",
            "code": "0310",
            "type": "District",
            "capital": "Ada Foah",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "South Tongu",
            "code": "0401",
            "type": "District",
            "capital": "Sogakope",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Keta Municipal",
            "code": "0402",
            "type": "Municipal",
            "capital": "Keta",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Ketu South",
            "code": "0403",
            "type": "District",
            "capital": "Denu",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Ketu North",
            "code": "0404",
            "type": "District",
            "capital": "Dzodze",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Akatsi",
            "code": "0405",
            "type": "District",
            "capital": "Akatsi",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "North Tongu",
            "code": "0406",
            "type": "District",
            "capital": "Adidome",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Adaklu Anyigbe",
            "code": "0407",
            "type": "District",
            "capital": "Kpetoe",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Ho",
            "code": "0408",
            "type": "Municipal",
            "capital": "Ho",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "South Dayi",
            "code": "0409",
            "type": "District",
            "capital": "Kpeve",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "North Dayi",
            "code": "0410",
            "type": "District",
            "capital": "Kpando",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Hohoe",
            "code": "0411",
            "type": "Municipal",
            "capital": "Hohoe",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Biakoye",
            "code": "0412",
            "type": "District",
            "capital": "Nkonya",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Jasikan",
            "code": "0413",
            "type": "District",
            "capital": "Jasikan",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Kadjebi",
            "code": "0414",
            "type": "District",
            "capital": "Kadjebi",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Krachi East",
            "code": "0415",
            "type": "District",
            "capital": "Dambai",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Krachi West",
            "code": "0416",
            "type": "District",
            "capital": "Kete-Krachi",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Nkwanta South",
            "code": "0417",
            "type": "District",
            "capital": "Nkwanta",
            "sub_metros": []
        },
        {
            "region": "Volta",
            "name": "Nkwanta North",
            "code": "0418",
            "type": "District",
            "capital": "Kpassa",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Birim South",
            "code": "0501",
            "type": "District",
            "capital": "Akim Swedru",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Birim Central Municipal",
            "code": "0502",
            "type": "Municipal",
            "capital": "Akim Oda",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "West Akim",
            "code": "0503",
            "type": "Municipal",
            "capital": "Asamankese",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Suhum / Kraboa Coaltar",
            "code": "0504",
            "type": "District",
            "capital": "Suhum",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Akwapim South",
            "code": "0505",
            "type": "Municipal",
            "capital": "Nsawam",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Akwapim North",
            "code": "0506",
            "type": "District",
            "capital": "Akwapim-Akropong",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "New Juaben Municipal",
            "code": "0507",
            "type": "Municipal",
            "capital": "Koforidua",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Yilo Krobo",
            "code": "0508",
            "type": "District",
            "capital": "Somanya",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Lower Manya Krobo",
            "code": "0509",
            "type": "District",
            "capital": "Odumase",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Asuogyaman",
            "code": "0510",
            "type": "District",
            "capital": "Atimpoku",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Upper Manya Krobo",
            "code": "0511",
            "type": "District",
            "capital": "Asesewa",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Fanteakwa",
            "code": "0512",
            "type": "District",
            "capital": "Begoro",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "East Akim",
            "code": "0513",
            "type": "Municipal",
            "capital": "Kibi",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Kwaebibirem",
            "code": "0514",
            "type": "District",
            "capital": "Kade",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Akyemansa",
            "code": "0515",
            "type": "District",
            "capital": "Akyem Ofoase",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Birim North",
            "code": "0516",
            "type": "District",
            "capital": "New Abirem",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Atiwa",
            "code": "0517",
            "type": "District",
            "capital": "Kwabeng",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Kwahu West",
            "code": "0518",
            "type": "Municipal",
            "capital": "Nkawkaw",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Kwahu South",
            "code": "0519",
            "type": "District",
            "capital": "Mpraeso",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Kwahu East",
            "code": "0520",
            "type": "District",
            "capital": "Abetifi",
            "sub_metros": []
        },
        {
            "region": "Eastern",
            "name": "Kwahu North (Afram Plains)",
            "code": "0521",
            "type": "District",
            "capital": "Donkorkrom",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Atwima Mponua",
            "code": "0601",
            "type": "District",
            "capital": "Nyinahin",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Amansie West",
            "code": "0602",
            "type": "District",
            "capital": "Manso Nkwanta",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Amansie Central",
            "code": "0603",
            "type": "District",
            "capital": "Jacobu",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Adansi South",
            "code": "0604",
            "type": "District",
            "capital": "New Edubiase",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Obuasi Municipal",
            "code": "0605",
            "type": "Municipal",
            "capital": "Obuasi",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Adansi North",
            "code": "0606",
            "type": "District",
            "capital": "Fomena",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Bekwai Municipal",
            "code": "0607",
            "type": "Municipal",
            "capital": "Bekwai",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Bosome Freho",
            "code": "0608",
            "type": "District",
            "capital": "Asiwa",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Asante Akim South",
            "code": "0609",
            "type": "District",
            "capital": "Juaso",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Asante Akim North",
            "code": "0610",
            "type": "Municipal",
            "capital": "Konongo",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Ejisu Juaben",
            "code": "0611",
            "type": "Municipal",
            "capital": "Ejisu",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Bosumtwi",
            "code": "0612",
            "type": "District",
            "capital": "Kuntenase",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Atwima Kwanwoma",
            "code": "0613",
            "type": "District",
            "capital": "Foase",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "K M A",
            "code": "0614",
            "type": "Metro",
            "capital": "Kumasi",
            "sub_metros": [
                {"name": "Kwadaso", "code": "1"},
                {"name": "Nhyiaeso", "code": "2"},
                {"name": "Subin", "code": "3"},
                {"name": "Asokwa", "code": "4"},
                {"name": "Oforikrom", "code": "5"},
                {"name": "Asawase", "code": "6"},
                {"name": "Manhyia", "code": "7"},
                {"name": "Old Tafo", "code": "8"},
                {"name": "Suame", "code": "9"},
                {"name": "Bantama", "code": "10"}
            ]
        },
        {
            "region": "Ashanti",
            "name": "Atwima Nwabiagya",
            "code": "0615",
            "type": "District",
            "capital": "Nkawie",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Ahafo Ano South",
            "code": "0616",
            "type": "District",
            "capital": "Mankraso",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Ahafo Ano North",
            "code": "0617",
            "type": "District",
            "capital": "Tepa",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Offinso Municipal",
            "code": "0618",
            "type": "Municipal",
            "capital": "Offinso",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Afigya Kwabre",
            "code": "0619",
            "type": "District",
            "capital": "Kodie",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Kwabre East",
            "code": "0620",
            "type": "District",
            "capital": "Mampongten",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Sekyere South",
            "code": "0621",
            "type": "District",
            "capital": "Agona",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Mampong Municipal",
            "code": "0622",
            "type": "Municipal",
            "capital": "Mampong",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Sekyere East",
            "code": "0623",
            "type": "District",
            "capital": "Effiduase",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Sekyere Afram Plains",
            "code": "0624",
            "type": "District",
            "capital": "Kumawu",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Sekyere Central",
            "code": "0625",
            "type": "District",
            "capital": "Nsuta",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Ejura Sekye Dumasi",
            "code": "0626",
            "type": "District",
            "capital": "Ejura",
            "sub_metros": []
        },
        {
            "region": "Ashanti",
            "name": "Offinso North",
            "code": "0627",
            "type": "District",
            "capital": "Akomadan",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Asunafo South",
            "code": "0701",
            "type": "District",
            "capital": "Kukuom",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Asunafo North",
            "code": "0702",
            "type": "Municipal",
            "capital": "Goaso",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Asutifi",
            "code": "0703",
            "type": "District",
            "capital": "Kenyasi No. 1",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Dormaa Municipal",
            "code": "0704",
            "type": "Municipal",
            "capital": "Dormaa Ahenkro",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Dormaa East",
            "code": "0705",
            "type": "District",
            "capital": "Wamfie",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Tano South",
            "code": "0706",
            "type": "District",
            "capital": "Bechem",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Tano North",
            "code": "0707",
            "type": "District",
            "capital": "Duayaw-Nkwanta",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Sunyani Municipal",
            "code": "0708",
            "type": "Municipal",
            "capital": "Sunyani",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Sunyani West",
            "code": "0709",
            "type": "District",
            "capital": "Odumase",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Berekum",
            "code": "0710",
            "type": "Municipal",
            "capital": "Berekum",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Jaman South",
            "code": "0711",
            "type": "District",
            "capital": "Drobo",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Jaman North",
            "code": "0712",
            "type": "District",
            "capital": "Sampa",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Tain",
            "code": "0713",
            "type": "District",
            "capital": "Nsawkaw",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Wenchi",
            "code": "0714",
            "type": "Municipal",
            "capital": "Wenchi",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Techiman",
            "code": "0715",
            "type": "Municipal",
            "capital": "Techiman",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Nkoranza South",
            "code": "0716",
            "type": "District",
            "capital": "Nkoransa",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Nkoranza North",
            "code": "0717",
            "type": "District",
            "capital": "Busaya",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Atebubu",
            "code": "0718",
            "type": "District",
            "capital": "Atebubu",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Sene",
            "code": "0719",
            "type": "District",
            "capital": "Kwame Danso",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Pru",
            "code": "0720",
            "type": "District",
            "capital": "Yeji",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Kintampo South",
            "code": "0721",
            "type": "District",
            "capital": "Jema",
            "sub_metros": []
        },
        {
            "region": "Brong Ahafo",
            "name": "Kintampo North",
            "code": "0722",
            "type": "Municipal",
            "capital": "Kintampo",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Bole",
            "code": "0801",
            "type": "District",
            "capital": "Bole",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Sawla / Tuna / Kalba",
            "code": "0802",
            "type": "District",
            "capital": "Sawla",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "West Gonja",
            "code": "0803",
            "type": "District",
            "capital": "Damango",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Gonja Central",
            "code": "0804",
            "type": "District",
            "capital": "Buipe",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "East Gonja",
            "code": "0805",
            "type": "District",
            "capital": "Salaga",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Kpandai",
            "code": "0806",
            "type": "District",
            "capital": "Kpandai",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Nanumba South",
            "code": "0807",
            "type": "District",
            "capital": "Wulensi",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Nanumba North",
            "code": "0808",
            "type": "District",
            "capital": "Bimbila",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Zabzugu Tatali",
            "code": "0809",
            "type": "District",
            "capital": "Zabzugu",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Yendi",
            "code": "0810",
            "type": "Municipal",
            "capital": "Yendi",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Tamale Metro",
            "code": "0811",
            "type": "Metropolitan",
            "capital": "Tamale",
            "sub_metros": [
                {"name": "Tamale South", "code": "1"},
                {"name": "Tamale Central", "code": "2"},
                {"name": "Tamale North", "code": "3"}
            ]
        },
        {
            "region": "Northern",
            "name": "Tolon Kumbugu",
            "code": "0812",
            "type": "District",
            "capital": "Tolon",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Savelugu Nanton",
            "code": "0813",
            "type": "District",
            "capital": "Savelugu",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Karaga",
            "code": "0814",
            "type": "District",
            "capital": "Karaga",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Gushiegu",
            "code": "0815",
            "type": "District",
            "capital": "Gushiegu",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Saboba",
            "code": "0816",
            "type": "District",
            "capital": "Saboba",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Chereponi",
            "code": "0817",
            "type": "District",
            "capital": "Chereponi",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Bunkpurugu Yonyo",
            "code": "0818",
            "type": "District",
            "capital": "Bunkpurugu",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Mamprusi East",
            "code": "0819",
            "type": "District",
            "capital": "Gambaga",
            "sub_metros": []
        },
        {
            "region": "Northern",
            "name": "Mamprusi West",
            "code": "0820",
            "type": "District",
            "capital": "Waleware",
            "sub_metros": []
        },
        {
            "region": "Upper East",
            "name": "Builsa",
            "code": "0901",
            "type": "District",
            "capital": "Sandema",
            "sub_metros": []
        },
        {
            "region": "Upper East",
            "name": "Kasena Nankana West",
            "code": "0902",
            "type": "District",
            "capital": "Paga",
            "sub_metros": []
        },
        {
            "region": "Upper East",
            "name": "Kasena Nankana East",
            "code": "0903",
            "type": "District",
            "capital": "Navrongo",
            "sub_metros": []
        },
        {
            "region": "Upper East",
            "name": "Bolgatanga Municipal",
            "code": "0904",
            "type": "Municipal",
            "capital": "Bolgatanga",
            "sub_metros": []
        },
        {
            "region": "Upper East",
            "name": "Talensi Nabdam",
            "code": "0905",
            "type": "District",
            "capital": "Tongo",
            "sub_metros": []
        },
        {
            "region": "Upper East",
            "name": "Bongo",
            "code": "0906",
            "type": "District",
            "capital": "Bongo",
            "sub_metros": []
        },
        {
            "region": "Upper East",
            "name": "Bawku West",
            "code": "0907",
            "type": "District",
            "capital": "Zebila",
            "sub_metros": []
        },
        {
            "region": "Upper East",
            "name": "Garu Tempane",
            "code": "0908",
            "type": "District",
            "capital": "Garu",
            "sub_metros": []
        },
        {
            "region": "Upper East",
            "name": "Bawku Municipal",
            "code": "0909",
            "type": "Municipal",
            "capital": "Bawku",
            "sub_metros": []
        },
        {
            "region": "Upper West",
            "name": "Wa West",
            "code": "1001",
            "type": "District",
            "capital": "Wechiau",
            "sub_metros": []
        },
        {
            "region": "Upper West",
            "name": "Wa Municipal",
            "code": "1002",
            "type": "Municipal",
            "capital": "Wa",
            "sub_metros": []
        },
        {
            "region": "Upper West",
            "name": "Wa East",
            "code": "1003",
            "type": "District",
            "capital": "Funsi",
            "sub_metros": []
        },
        {
            "region": "Upper West",
            "name": "Sissala East",
            "code": "1004",
            "type": "District",
            "capital": "Tumu",
            "sub_metros": []
        },
        {
            "region": "Upper West",
            "name": "Nadowli",
            "code": "1005",
            "type": "District",
            "capital": "Nadowli",
            "sub_metros": []
        },
        {
            "region": "Upper West",
            "name": "Jirapa",
            "code": "1006",
            "type": "District",
            "capital": "Jirapa",
            "sub_metros": []
        },
        {
            "region": "Upper West",
            "name": "Sissala West",
            "code": "1007",
            "type": "District",
            "capital": "Gwollu",
            "sub_metros": []
        },
        {
            "region": "Upper West",
            "name": "Lambussie",
            "code": "1008",
            "type": "District",
            "capital": "Lambussie",
            "sub_metros": []
        },
        {
            "region": "Upper West",
            "name": "Lawra",
            "code": "1009",
            "type": "District",
            "capital": "Lawra",
            "sub_metros": []
        }
    ]
}

const districtsSlice = createSlice({
    name: 'districts',
    initialState,
    reducers: {}
});


const {reducer} = districtsSlice;

export const selectDistricts = state => state.districts;

export default reducer;