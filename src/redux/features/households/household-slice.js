import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {HOUSEHOLD_API} from "../../../api/household.api.js";

const initialState = {
    households: [
        {
            "front_page": {
                "hometown": "Gonzalezport",
                "region": {
                    "name": "Northern",
                    "code": "02"
                },
                "house_address": "15507 Lauren Ramp Suite 668\nNicholasshire, NH 52994",
                "district": {
                    "name": "Montgomeryside",
                    "code": "1914"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "45"
                },
                "locality": {
                    "name": "Blanchardburgh",
                    "code": "8421"
                },
                "sub_district": "Kathy Corner",
                "NHIS_ECG_VRA_OtherNumber": "743-028-1891",
                "household_contacts": [
                    "903.185.4726x428",
                    "(789)482-8465x890"
                ],
                "ea": {
                    "number": "328",
                    "type": "Urban"
                },
                "house_structure_number": "713",
                "household_number_within_house": "12",
                "residence_type": "Rural",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-06",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Leah Rogers",
                    "age": 36,
                    "sex": "female",
                    "relationship_code": "03"
                }
            ],
            "absentees": [
                {
                    "name": "Denise Stout",
                    "age": 36,
                    "sex": "female",
                    "destination": {
                        "town": "Port Nathan",
                        "region": "Greater Accra",
                        "code": "05"
                    },
                    "months_absent": 10
                },
                {
                    "name": "Toni Osborne DVM",
                    "age": 39,
                    "sex": "male",
                    "destination": {
                        "town": "Ianville",
                        "region": "Volta",
                        "code": "08"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [
                {
                    "name": "Walter Harmon",
                    "age": 15,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Germany",
                    "country_code": "19",
                    "year_of_departure": 2005,
                    "activity_abroad": "Employed"
                },
                {
                    "name": "Megan Page",
                    "age": 20,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "14",
                    "year_of_departure": 2011,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 2,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "14",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 16,
                        "livestock_code": "04"
                    },
                    {
                        "type": "Chickens",
                        "number": 26,
                        "livestock_code": "08"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Cement",
                "roof": "Thatch",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Garyberg",
                "region": {
                    "name": "Volta",
                    "code": "08"
                },
                "house_address": "03077 Tabitha Squares Apt. 398\nCarlsonmouth, IA 72595",
                "district": {
                    "name": "Lake Timothymouth",
                    "code": "9686"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "45"
                },
                "locality": {
                    "name": "New Kellyside",
                    "code": "2310"
                },
                "sub_district": "Donna Cape",
                "NHIS_ECG_VRA_OtherNumber": "091-723-5312",
                "household_contacts": [
                    "(901)231-1912",
                    "362-103-9496"
                ],
                "ea": {
                    "number": "488",
                    "type": "Rural"
                },
                "house_structure_number": "188",
                "household_number_within_house": "18",
                "residence_type": "Rural",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-03",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Elizabeth Williams",
                    "age": 99,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Jacob Cox",
                    "age": 37,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Philip Bailey",
                    "age": 20,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Michael Keller",
                    "age": 74,
                    "sex": "female",
                    "relationship_code": "03"
                }
            ],
            "absentees": [
                {
                    "name": "Danny Thompson",
                    "age": 45,
                    "sex": "female",
                    "destination": {
                        "town": "North Hollychester",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Julie Nelson",
                    "age": 59,
                    "sex": "male",
                    "destination": {
                        "town": "East Jamie",
                        "region": "Ashanti",
                        "code": "05"
                    },
                    "months_absent": 11
                }
            ],
            "emigration": [
                {
                    "name": "Mark Miles",
                    "age": 16,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "United Kingdom",
                    "country_code": "21",
                    "year_of_departure": 2001,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [
                {
                    "name": "Michelle Wilson",
                    "sex": "female",
                    "age": 96,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 1,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "31",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 28,
                        "livestock_code": "03"
                    },
                    {
                        "type": "Sheep",
                        "number": 37,
                        "livestock_code": "03"
                    },
                    {
                        "type": "Chickens",
                        "number": 11,
                        "livestock_code": "03"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Toddshire",
                "region": {
                    "name": "Northern",
                    "code": "08"
                },
                "house_address": "18066 Rice Bridge Apt. 049\nNicolestad, AL 09927",
                "district": {
                    "name": "Scottborough",
                    "code": "3746"
                },
                "district_type": {
                    "name": "District",
                    "code": "07"
                },
                "locality": {
                    "name": "Kathleenborough",
                    "code": "0974"
                },
                "sub_district": "Andrea Dam",
                "NHIS_ECG_VRA_OtherNumber": "420-892-4516",
                "household_contacts": [
                    "001-506-924-4705x116",
                    "(885)542-6949x62431",
                    "001-798-884-8368"
                ],
                "ea": {
                    "number": "266",
                    "type": "Rural"
                },
                "house_structure_number": "887",
                "household_number_within_house": "3",
                "residence_type": "Rural",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-09",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Kimberly Thornton",
                    "age": 93,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Seth Parker",
                    "age": 61,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Kelly Casey",
                    "age": 52,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Mrs. Stephanie Santiago",
                    "age": 2,
                    "sex": "female",
                    "relationship_code": "06"
                }
            ],
            "absentees": [
                {
                    "name": "Anna Frazier",
                    "age": 57,
                    "sex": "male",
                    "destination": {
                        "town": "Fitzgeraldview",
                        "region": "Ashanti",
                        "code": "06"
                    },
                    "months_absent": 7
                },
                {
                    "name": "Jessica Arnold",
                    "age": 44,
                    "sex": "male",
                    "destination": {
                        "town": "Johnborough",
                        "region": "Volta",
                        "code": "03"
                    },
                    "months_absent": 2
                }
            ],
            "emigration": [
                {
                    "name": "John Smith",
                    "age": 35,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "Nigeria",
                    "country_code": "15",
                    "year_of_departure": 2002,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Christina Garcia",
                    "age": 33,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "United States",
                    "country_code": "17",
                    "year_of_departure": 2013,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 1,
                    "female": 2
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "48",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 17,
                        "livestock_code": "05"
                    },
                    {
                        "type": "Goats",
                        "number": 40,
                        "livestock_code": "07"
                    },
                    {
                        "type": "Pigs",
                        "number": 22,
                        "livestock_code": "08"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Private",
                "rooms": {
                    "total": 10,
                    "bedroom_count": 1,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Shared Space",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Christinaville",
                "region": {
                    "name": "Northern",
                    "code": "04"
                },
                "house_address": "762 Goodwin Turnpike\nNorth Jasmine, MO 78206",
                "district": {
                    "name": "Chaseville",
                    "code": "4415"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "04"
                },
                "locality": {
                    "name": "South James",
                    "code": "9560"
                },
                "sub_district": "Contreras Ports",
                "NHIS_ECG_VRA_OtherNumber": "474-050-5940",
                "household_contacts": [
                    "320.878.8056x1075",
                    "(163)869-4643x2529"
                ],
                "ea": {
                    "number": "362",
                    "type": "Rural"
                },
                "house_structure_number": "331",
                "household_number_within_house": "18",
                "residence_type": "Rural",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-12",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Mrs. Jennifer Smith",
                    "age": 35,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Savannah White",
                    "age": 36,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Carol Lewis",
                    "age": 73,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Dawn Yang",
                    "age": 100,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Olivia Sandoval",
                    "age": 34,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Grace Hogan",
                    "age": 83,
                    "sex": "female",
                    "relationship_code": "10"
                }
            ],
            "absentees": [
                {
                    "name": "Michelle Ruiz",
                    "age": 58,
                    "sex": "male",
                    "destination": {
                        "town": "Port Kathrynville",
                        "region": "Volta",
                        "code": "10"
                    },
                    "months_absent": 6
                },
                {
                    "name": "Andrea Blair",
                    "age": 40,
                    "sex": "female",
                    "destination": {
                        "town": "Robertfort",
                        "region": "Greater Accra",
                        "code": "02"
                    },
                    "months_absent": 3
                }
            ],
            "emigration": [
                {
                    "name": "Brian George",
                    "age": 18,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Canada",
                    "country_code": "21",
                    "year_of_departure": 2003,
                    "activity_abroad": "Student"
                },
                {
                    "name": "Michael Lee",
                    "age": 22,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "11",
                    "year_of_departure": 2024,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 4,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "14",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 20,
                        "livestock_code": "10"
                    },
                    {
                        "type": "Goats",
                        "number": 46,
                        "livestock_code": "07"
                    },
                    {
                        "type": "Sheep",
                        "number": 45,
                        "livestock_code": "02"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 5
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Ashleyhaven",
                "region": {
                    "name": "Volta",
                    "code": "08"
                },
                "house_address": "Unit 3032 Box 3513\nDPO AE 09073",
                "district": {
                    "name": "Perezchester",
                    "code": "3880"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "22"
                },
                "locality": {
                    "name": "North Frankstad",
                    "code": "5766"
                },
                "sub_district": "Barbara Station",
                "NHIS_ECG_VRA_OtherNumber": "098-943-8354",
                "household_contacts": [
                    "136.213.7401x1083"
                ],
                "ea": {
                    "number": "356",
                    "type": "Rural"
                },
                "house_structure_number": "564",
                "household_number_within_house": "16",
                "residence_type": "Rural",
                "date_started": "2025-01-10",
                "date_completed": "2025-01-12",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Stephanie Goodman",
                    "age": 6,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Daniel Johnson",
                    "age": 12,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Kenneth Smith",
                    "age": 50,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Gregory Stone",
                    "age": 69,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Shawn Adams",
                    "age": 71,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Dorothy Fisher",
                    "age": 33,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "James Ross",
                    "age": 56,
                    "sex": "male",
                    "relationship_code": "11"
                }
            ],
            "absentees": [],
            "emigration": [
                {
                    "name": "Courtney Davis",
                    "age": 40,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Canada",
                    "country_code": "17",
                    "year_of_departure": 2010,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Benjamin Leon",
                    "age": 53,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "United Kingdom",
                    "country_code": "11",
                    "year_of_departure": 2008,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 1,
                    "female": 5
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 10,
                        "livestock_code": "08"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Burtonfurt",
                "region": {
                    "name": "Northern",
                    "code": "07"
                },
                "house_address": "5305 Nicholas Turnpike Apt. 284\nPort Tyler, IL 12383",
                "district": {
                    "name": "Lake Yolanda",
                    "code": "7441"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "19"
                },
                "locality": {
                    "name": "New Lisaburgh",
                    "code": "6048"
                },
                "sub_district": "Morales Inlet",
                "NHIS_ECG_VRA_OtherNumber": "317-360-9616",
                "household_contacts": [
                    "+1-429-200-4929x435",
                    "037.610.0344x39251",
                    "141.130.9936"
                ],
                "ea": {
                    "number": "195",
                    "type": "Urban"
                },
                "house_structure_number": "759",
                "household_number_within_house": "18",
                "residence_type": "Rural",
                "date_started": "2025-01-01",
                "date_completed": "2025-01-02",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Michael Murray",
                    "age": 40,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Barbara Lambert",
                    "age": 81,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Brandon Mahoney",
                    "age": 89,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Stanley Thomas",
                    "age": 47,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Ashley Bray",
                    "age": 42,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Laura Simmons",
                    "age": 76,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Jesse Odom",
                    "age": 23,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Sandra Wheeler",
                    "age": 76,
                    "sex": "male",
                    "relationship_code": "05"
                }
            ],
            "absentees": [
                {
                    "name": "Joanna Hammond",
                    "age": 18,
                    "sex": "female",
                    "destination": {
                        "town": "Petersonville",
                        "region": "Volta",
                        "code": "04"
                    },
                    "months_absent": 11
                }
            ],
            "emigration": [
                {
                    "name": "Joyce Wood",
                    "age": 38,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "12",
                    "year_of_departure": 2025,
                    "activity_abroad": "Employed"
                },
                {
                    "name": "Jill Chen",
                    "age": 18,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "21",
                    "year_of_departure": 2008,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 3,
                    "female": 1
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 41,
                        "livestock_code": "09"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Earth",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 1,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Shared Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Julieton",
                "region": {
                    "name": "Upper West",
                    "code": "07"
                },
                "house_address": "0925 David Manors\nMooreburgh, NJ 42322",
                "district": {
                    "name": "Taylorton",
                    "code": "9073"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "06"
                },
                "locality": {
                    "name": "Figueroaville",
                    "code": "9439"
                },
                "sub_district": "Aguilar Forks",
                "NHIS_ECG_VRA_OtherNumber": "548-391-1780",
                "household_contacts": [
                    "001-968-879-7158x891",
                    "331-896-4747x0022"
                ],
                "ea": {
                    "number": "12",
                    "type": "Urban"
                },
                "house_structure_number": "35",
                "household_number_within_house": "14",
                "residence_type": "Rural",
                "date_started": "2025-01-11",
                "date_completed": "2025-01-12",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Jack Dixon",
                    "age": 43,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Jonathan Ayala",
                    "age": 25,
                    "sex": "male",
                    "relationship_code": "09"
                }
            ],
            "absentees": [
                {
                    "name": "Aaron Hughes",
                    "age": 60,
                    "sex": "male",
                    "destination": {
                        "town": "North Michaelbury",
                        "region": "Volta",
                        "code": "06"
                    },
                    "months_absent": 7
                },
                {
                    "name": "William Francis",
                    "age": 26,
                    "sex": "male",
                    "destination": {
                        "town": "West Kaitlyntown",
                        "region": "Greater Accra",
                        "code": "06"
                    },
                    "months_absent": 7
                }
            ],
            "emigration": [
                {
                    "name": "Luis Thompson",
                    "age": 28,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "United States",
                    "country_code": "15",
                    "year_of_departure": 2011,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Matthew Edwards",
                    "sex": "male",
                    "age": 5,
                    "unnatural_death": false,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 4,
                    "female": 0
                },
                "crops": [],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Cement Blocks",
                "floor": "Cement",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 1,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Shared Space",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Brownstad",
                "region": {
                    "name": "Upper West",
                    "code": "08"
                },
                "house_address": "6316 Henry Plains Apt. 369\nSouth Lacey, PA 94331",
                "district": {
                    "name": "North William",
                    "code": "5545"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "42"
                },
                "locality": {
                    "name": "North Johnmouth",
                    "code": "1648"
                },
                "sub_district": "Castro Lodge",
                "NHIS_ECG_VRA_OtherNumber": "046-695-1806",
                "household_contacts": [
                    "(247)624-6886x7672"
                ],
                "ea": {
                    "number": "130",
                    "type": "Urban"
                },
                "house_structure_number": "600",
                "household_number_within_house": "19",
                "residence_type": "Urban",
                "date_started": "2025-01-06",
                "date_completed": "2025-01-04",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Jessica Johnson",
                    "age": 63,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Daniel Johnson",
                    "age": 8,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Brittany Miller",
                    "age": 28,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "William Phillips",
                    "age": 53,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Laura Hill DVM",
                    "age": 94,
                    "sex": "male",
                    "relationship_code": "05"
                }
            ],
            "absentees": [],
            "emigration": [
                {
                    "name": "Gary Rogers",
                    "age": 35,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "Germany",
                    "country_code": "17",
                    "year_of_departure": 2025,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [
                {
                    "name": "Samantha Monroe",
                    "sex": "female",
                    "age": 32,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 2,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "27",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "14",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 47,
                        "livestock_code": "08"
                    },
                    {
                        "type": "Pigs",
                        "number": 32,
                        "livestock_code": "09"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Thatch",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Other",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 5,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Toddfurt",
                "region": {
                    "name": "Ashanti",
                    "code": "07"
                },
                "house_address": "920 Jonathan Parkway Suite 339\nEast Michelemouth, ME 32826",
                "district": {
                    "name": "Duffyfort",
                    "code": "0385"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "45"
                },
                "locality": {
                    "name": "Cardenasport",
                    "code": "6360"
                },
                "sub_district": "Andrews Mall",
                "NHIS_ECG_VRA_OtherNumber": "907-073-2143",
                "household_contacts": [
                    "6032145113",
                    "+1-249-120-9452x02381"
                ],
                "ea": {
                    "number": "366",
                    "type": "Rural"
                },
                "house_structure_number": "503",
                "household_number_within_house": "15",
                "residence_type": "Rural",
                "date_started": "2025-01-11",
                "date_completed": "2025-01-03",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Sandra Parker",
                    "age": 22,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Ashley Long",
                    "age": 85,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Lori Morgan",
                    "age": 7,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Heidi Vincent",
                    "age": 88,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Brian Reid",
                    "age": 2,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Andrew Peters",
                    "age": 61,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "William Clark",
                    "age": 99,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Brandon Carey",
                    "age": 45,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Zachary Smith",
                    "age": 99,
                    "sex": "male",
                    "relationship_code": "08"
                }
            ],
            "absentees": [
                {
                    "name": "Angela Adams",
                    "age": 20,
                    "sex": "female",
                    "destination": {
                        "town": "Hughesmouth",
                        "region": "Ashanti",
                        "code": "04"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Richard Cruz",
                    "age": 59,
                    "sex": "female",
                    "destination": {
                        "town": "Bellton",
                        "region": "Greater Accra",
                        "code": "04"
                    },
                    "months_absent": 12
                },
                {
                    "name": "Jared Cortez",
                    "age": 27,
                    "sex": "male",
                    "destination": {
                        "town": "Matthewport",
                        "region": "Volta",
                        "code": "02"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [
                {
                    "name": "Heather Macias",
                    "age": 44,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "Germany",
                    "country_code": "19",
                    "year_of_departure": 2002,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Melissa Myers",
                    "age": 55,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "United States",
                    "country_code": "18",
                    "year_of_departure": 2008,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 5,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "18",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "48",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "01",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 3,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "East Alec",
                "region": {
                    "name": "Upper East",
                    "code": "02"
                },
                "house_address": "0391 Jimenez Courts Suite 591\nMcgrathmouth, OK 88175",
                "district": {
                    "name": "East Brianstad",
                    "code": "6923"
                },
                "district_type": {
                    "name": "District",
                    "code": "43"
                },
                "locality": {
                    "name": "Carrburgh",
                    "code": "4340"
                },
                "sub_district": "Oneill Lodge",
                "NHIS_ECG_VRA_OtherNumber": "156-533-7387",
                "household_contacts": [
                    "001-784-251-1475x5965",
                    "2397245348"
                ],
                "ea": {
                    "number": "172",
                    "type": "Urban"
                },
                "house_structure_number": "23",
                "household_number_within_house": "16",
                "residence_type": "Urban",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-01",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Patricia Mcneil",
                    "age": 82,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Shane Elliott",
                    "age": 7,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Katie Herrera",
                    "age": 99,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Lance Evans",
                    "age": 86,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Teresa Wilson",
                    "age": 84,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Jessica Garza",
                    "age": 9,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Judith King",
                    "age": 14,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Mr. Corey Harrison",
                    "age": 20,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Brittney Montgomery",
                    "age": 26,
                    "sex": "male",
                    "relationship_code": "04"
                }
            ],
            "absentees": [
                {
                    "name": "Angela Price",
                    "age": 21,
                    "sex": "male",
                    "destination": {
                        "town": "Taylorchester",
                        "region": "Volta",
                        "code": "02"
                    },
                    "months_absent": 12
                },
                {
                    "name": "Martha Kim",
                    "age": 49,
                    "sex": "female",
                    "destination": {
                        "town": "North James",
                        "region": "Volta",
                        "code": "06"
                    },
                    "months_absent": 7
                },
                {
                    "name": "Caleb Collins",
                    "age": 33,
                    "sex": "female",
                    "destination": {
                        "town": "Whitneymouth",
                        "region": "Ashanti",
                        "code": "08"
                    },
                    "months_absent": 7
                }
            ],
            "emigration": [
                {
                    "name": "Morgan Conner",
                    "age": 42,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "Canada",
                    "country_code": "12",
                    "year_of_departure": 2018,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Vincent Daniels",
                    "sex": "male",
                    "age": 66,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 0,
                    "female": 2
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "48",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "04",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 38,
                        "livestock_code": "02"
                    },
                    {
                        "type": "Sheep",
                        "number": 14,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Chickens",
                        "number": 12,
                        "livestock_code": "03"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 1,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "South Jeff",
                "region": {
                    "name": "Eastern",
                    "code": "10"
                },
                "house_address": "16528 Heather Avenue Apt. 262\nPort Lori, NC 90444",
                "district": {
                    "name": "Port Jonathon",
                    "code": "6302"
                },
                "district_type": {
                    "name": "District",
                    "code": "21"
                },
                "locality": {
                    "name": "Port Jesse",
                    "code": "5480"
                },
                "sub_district": "Anna Mews",
                "NHIS_ECG_VRA_OtherNumber": "475-790-3306",
                "household_contacts": [
                    "7442933214",
                    "148-077-5748x33735"
                ],
                "ea": {
                    "number": "334",
                    "type": "Rural"
                },
                "house_structure_number": "113",
                "household_number_within_house": "7",
                "residence_type": "Urban",
                "date_started": "2025-01-10",
                "date_completed": "2025-01-01",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Douglas Porter",
                    "age": 33,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Jason Leach",
                    "age": 80,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Margaret Dunlap",
                    "age": 16,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Trevor Cox",
                    "age": 72,
                    "sex": "female",
                    "relationship_code": "03"
                }
            ],
            "absentees": [
                {
                    "name": "Ashley Morgan",
                    "age": 45,
                    "sex": "male",
                    "destination": {
                        "town": "Burnsburgh",
                        "region": "Greater Accra",
                        "code": "08"
                    },
                    "months_absent": 11
                },
                {
                    "name": "Jason Fowler",
                    "age": 27,
                    "sex": "female",
                    "destination": {
                        "town": "South Carl",
                        "region": "Volta",
                        "code": "06"
                    },
                    "months_absent": 6
                },
                {
                    "name": "Lisa Cooper",
                    "age": 29,
                    "sex": "male",
                    "destination": {
                        "town": "Williamsbury",
                        "region": "Ashanti",
                        "code": "01"
                    },
                    "months_absent": 11
                }
            ],
            "emigration": [
                {
                    "name": "Blake Gutierrez",
                    "age": 26,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "Germany",
                    "country_code": "22",
                    "year_of_departure": 2024,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [
                {
                    "name": "Jason Pacheco",
                    "sex": "female",
                    "age": 28,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 2
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 46,
                        "livestock_code": "08"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 10,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "South Angel",
                "region": {
                    "name": "Northern",
                    "code": "10"
                },
                "house_address": "6930 Vargas Fork Suite 647\nNorth Kristen, HI 71796",
                "district": {
                    "name": "Freemanville",
                    "code": "1266"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "40"
                },
                "locality": {
                    "name": "Tylermouth",
                    "code": "1163"
                },
                "sub_district": "Perry Landing",
                "NHIS_ECG_VRA_OtherNumber": "227-946-3046",
                "household_contacts": [
                    "(872)090-2134",
                    "(013)408-2524",
                    "(490)689-3487x567"
                ],
                "ea": {
                    "number": "57",
                    "type": "Rural"
                },
                "house_structure_number": "807",
                "household_number_within_house": "18",
                "residence_type": "Urban",
                "date_started": "2025-01-03",
                "date_completed": "2025-01-08",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Joan Cohen",
                    "age": 2,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Mark Jimenez",
                    "age": 35,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Joshua Harris",
                    "age": 34,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Donald Williams",
                    "age": 50,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Brandy Lawson",
                    "age": 52,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Lawrence Winters",
                    "age": 62,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Stephanie Cross",
                    "age": 33,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Mike Bryan",
                    "age": 53,
                    "sex": "female",
                    "relationship_code": "06"
                }
            ],
            "absentees": [],
            "emigration": [
                {
                    "name": "Kevin Andersen",
                    "age": 55,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "18",
                    "year_of_departure": 2002,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 0,
                    "female": 2
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "05",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 26,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 10,
                    "bedroom_count": 3,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Erinmouth",
                "region": {
                    "name": "Upper East",
                    "code": "08"
                },
                "house_address": "36304 Lance Plains\nNorth Sarah, WV 98856",
                "district": {
                    "name": "Crawfordbury",
                    "code": "5450"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "07"
                },
                "locality": {
                    "name": "Jonesborough",
                    "code": "0141"
                },
                "sub_district": "Williamson Passage",
                "NHIS_ECG_VRA_OtherNumber": "562-152-8549",
                "household_contacts": [
                    "397-660-4476x388"
                ],
                "ea": {
                    "number": "480",
                    "type": "Rural"
                },
                "house_structure_number": "758",
                "household_number_within_house": "18",
                "residence_type": "Rural",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-05",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Micheal Strong",
                    "age": 73,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Jessica Kim",
                    "age": 9,
                    "sex": "female",
                    "relationship_code": "10"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [
                {
                    "name": "Shelby Jennings",
                    "sex": "female",
                    "age": 10,
                    "unnatural_death": false,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 2,
                    "female": 5
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 50,
                        "livestock_code": "01"
                    },
                    {
                        "type": "Pigs",
                        "number": 25,
                        "livestock_code": "05"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Government",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 3,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Shared Space",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 1,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Belindaside",
                "region": {
                    "name": "Greater Accra",
                    "code": "06"
                },
                "house_address": "41471 Lopez Vista Suite 763\nNew Austin, MT 34416",
                "district": {
                    "name": "Adamshire",
                    "code": "7454"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "28"
                },
                "locality": {
                    "name": "New Sydneyport",
                    "code": "1952"
                },
                "sub_district": "Robert Glens",
                "NHIS_ECG_VRA_OtherNumber": "258-810-1392",
                "household_contacts": [
                    "(802)400-4721",
                    "8737825029",
                    "542.801.2255"
                ],
                "ea": {
                    "number": "74",
                    "type": "Rural"
                },
                "house_structure_number": "989",
                "household_number_within_house": "20",
                "residence_type": "Rural",
                "date_started": "2025-01-06",
                "date_completed": "2025-01-04",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Thomas Shepard",
                    "age": 14,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Cynthia Decker",
                    "age": 57,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Randall Dodson",
                    "age": 45,
                    "sex": "male",
                    "relationship_code": "02"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [
                {
                    "name": "Brittany Burke",
                    "sex": "male",
                    "age": 46,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 5,
                    "female": 2
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 9,
                        "livestock_code": "03"
                    },
                    {
                        "type": "Pigs",
                        "number": 6,
                        "livestock_code": "01"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "New Carlosstad",
                "region": {
                    "name": "Western",
                    "code": "09"
                },
                "house_address": "910 Carrillo Union Apt. 984\nWest Keithhaven, CO 16396",
                "district": {
                    "name": "Chandlerport",
                    "code": "8692"
                },
                "district_type": {
                    "name": "District",
                    "code": "28"
                },
                "locality": {
                    "name": "Reynoldsborough",
                    "code": "2259"
                },
                "sub_district": "Harris Viaduct",
                "NHIS_ECG_VRA_OtherNumber": "427-240-1537",
                "household_contacts": [
                    "628-332-6244",
                    "(684)946-0786x143",
                    "956-967-8612"
                ],
                "ea": {
                    "number": "144",
                    "type": "Rural"
                },
                "house_structure_number": "118",
                "household_number_within_house": "18",
                "residence_type": "Urban",
                "date_started": "2025-01-03",
                "date_completed": "2025-01-10",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Alisha Ayala",
                    "age": 1,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Antonio George",
                    "age": 48,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Kathryn Moore",
                    "age": 83,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Brandon Sanchez",
                    "age": 44,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Dr. Aaron Taylor",
                    "age": 16,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Timothy Sanchez",
                    "age": 46,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Wesley Foster",
                    "age": 82,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Michael Barker",
                    "age": 61,
                    "sex": "female",
                    "relationship_code": "03"
                }
            ],
            "absentees": [
                {
                    "name": "Richard Harris",
                    "age": 41,
                    "sex": "male",
                    "destination": {
                        "town": "Larsonland",
                        "region": "Ashanti",
                        "code": "09"
                    },
                    "months_absent": 3
                },
                {
                    "name": "Devon Buckley",
                    "age": 33,
                    "sex": "female",
                    "destination": {
                        "town": "Lake Rebecca",
                        "region": "Volta",
                        "code": "03"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [
                {
                    "name": "Jennifer Douglas",
                    "age": 28,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "United Kingdom",
                    "country_code": "13",
                    "year_of_departure": 2000,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Michael Turner",
                    "age": 17,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "17",
                    "year_of_departure": 2002,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Hannah Ballard",
                    "sex": "female",
                    "age": 20,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "19",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "02",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "35",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 49,
                        "livestock_code": "09"
                    },
                    {
                        "type": "Pigs",
                        "number": 14,
                        "livestock_code": "05"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 3,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Gonzalesport",
                "region": {
                    "name": "Central",
                    "code": "10"
                },
                "house_address": "6546 Amy Coves Apt. 794\nTylerhaven, WI 31806",
                "district": {
                    "name": "Smithmouth",
                    "code": "7310"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "36"
                },
                "locality": {
                    "name": "Brookehaven",
                    "code": "1894"
                },
                "sub_district": "Ramirez Ridges",
                "NHIS_ECG_VRA_OtherNumber": "161-181-2902",
                "household_contacts": [
                    "6855663700"
                ],
                "ea": {
                    "number": "125",
                    "type": "Urban"
                },
                "house_structure_number": "266",
                "household_number_within_house": "13",
                "residence_type": "Rural",
                "date_started": "2025-01-11",
                "date_completed": "2025-01-10",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Christopher Casey",
                    "age": 67,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Paul Chen",
                    "age": 88,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Patricia Foley",
                    "age": 75,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Holly Sullivan",
                    "age": 22,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Cynthia Wallace",
                    "age": 32,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Jeremy Garcia",
                    "age": 30,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Anthony Flynn",
                    "age": 92,
                    "sex": "male",
                    "relationship_code": "09"
                }
            ],
            "absentees": [
                {
                    "name": "Devin Brown",
                    "age": 40,
                    "sex": "male",
                    "destination": {
                        "town": "West Melanieville",
                        "region": "Greater Accra",
                        "code": "04"
                    },
                    "months_absent": 3
                }
            ],
            "emigration": [
                {
                    "name": "Matthew Sherman",
                    "age": 16,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "Canada",
                    "country_code": "21",
                    "year_of_departure": 2005,
                    "activity_abroad": "Student"
                },
                {
                    "name": "Denise Gray",
                    "age": 46,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "Nigeria",
                    "country_code": "19",
                    "year_of_departure": 2007,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 5,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "16",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 3,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "East Amandafort",
                "region": {
                    "name": "Upper West",
                    "code": "03"
                },
                "house_address": "848 Courtney Lodge\nSmithberg, NC 85610",
                "district": {
                    "name": "Whitakermouth",
                    "code": "0328"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "09"
                },
                "locality": {
                    "name": "North Johnberg",
                    "code": "3224"
                },
                "sub_district": "King Canyon",
                "NHIS_ECG_VRA_OtherNumber": "272-546-7171",
                "household_contacts": [
                    "657.704.2879",
                    "973.774.3020"
                ],
                "ea": {
                    "number": "65",
                    "type": "Rural"
                },
                "house_structure_number": "530",
                "household_number_within_house": "13",
                "residence_type": "Urban",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-10",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Stephanie Gibbs",
                    "age": 86,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Cassandra Ramirez",
                    "age": 95,
                    "sex": "female",
                    "relationship_code": "11"
                }
            ],
            "absentees": [
                {
                    "name": "Courtney King",
                    "age": 21,
                    "sex": "male",
                    "destination": {
                        "town": "West Richard",
                        "region": "Volta",
                        "code": "05"
                    },
                    "months_absent": 2
                },
                {
                    "name": "Jimmy Bell",
                    "age": 28,
                    "sex": "male",
                    "destination": {
                        "town": "North Cynthia",
                        "region": "Volta",
                        "code": "09"
                    },
                    "months_absent": 11
                },
                {
                    "name": "Jennifer Peterson",
                    "age": 27,
                    "sex": "female",
                    "destination": {
                        "town": "Hooverchester",
                        "region": "Volta",
                        "code": "07"
                    },
                    "months_absent": 8
                }
            ],
            "emigration": [
                {
                    "name": "Emily Baxter",
                    "age": 38,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "Germany",
                    "country_code": "18",
                    "year_of_departure": 2017,
                    "activity_abroad": "Employed"
                },
                {
                    "name": "Heather Carney",
                    "age": 27,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "Canada",
                    "country_code": "21",
                    "year_of_departure": 2007,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Andrew Potter",
                    "sex": "female",
                    "age": 65,
                    "unnatural_death": true,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 0,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "24",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 4,
                        "livestock_code": "02"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 5,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 5
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Lindseyland",
                "region": {
                    "name": "Ashanti",
                    "code": "04"
                },
                "house_address": "41147 Cassie Points Apt. 261\nFranklinberg, IL 19196",
                "district": {
                    "name": "East Mark",
                    "code": "9355"
                },
                "district_type": {
                    "name": "District",
                    "code": "02"
                },
                "locality": {
                    "name": "Leefurt",
                    "code": "5360"
                },
                "sub_district": "Wilson Corner",
                "NHIS_ECG_VRA_OtherNumber": "094-270-1337",
                "household_contacts": [
                    "001-757-791-3777x553",
                    "+1-868-799-3116x0419",
                    "+1-137-242-7763x3502"
                ],
                "ea": {
                    "number": "168",
                    "type": "Urban"
                },
                "house_structure_number": "165",
                "household_number_within_house": "11",
                "residence_type": "Urban",
                "date_started": "2025-01-02",
                "date_completed": "2025-01-07",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Maria Hernandez",
                    "age": 3,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Aaron Hamilton",
                    "age": 5,
                    "sex": "male",
                    "relationship_code": "11"
                }
            ],
            "absentees": [
                {
                    "name": "Diane Whitney",
                    "age": 48,
                    "sex": "male",
                    "destination": {
                        "town": "West Linda",
                        "region": "Volta",
                        "code": "09"
                    },
                    "months_absent": 7
                },
                {
                    "name": "Derek Brown",
                    "age": 54,
                    "sex": "female",
                    "destination": {
                        "town": "Lake Linda",
                        "region": "Greater Accra",
                        "code": "05"
                    },
                    "months_absent": 7
                },
                {
                    "name": "Chelsey Coleman",
                    "age": 33,
                    "sex": "female",
                    "destination": {
                        "town": "Benjaminberg",
                        "region": "Greater Accra",
                        "code": "08"
                    },
                    "months_absent": 5
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Kelly Davis",
                    "sex": "male",
                    "age": 81,
                    "unnatural_death": false,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 2,
                    "female": 4
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 42,
                        "livestock_code": "07"
                    },
                    {
                        "type": "Pigs",
                        "number": 26,
                        "livestock_code": "01"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Cement Blocks",
                "floor": "Cement",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 10,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "North Meganborough",
                "region": {
                    "name": "Ashanti",
                    "code": "02"
                },
                "house_address": "59310 Larsen Land Apt. 208\nRodrigueztown, NV 32240",
                "district": {
                    "name": "East Jeffchester",
                    "code": "9020"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "18"
                },
                "locality": {
                    "name": "Courtneyview",
                    "code": "9467"
                },
                "sub_district": "Karen Springs",
                "NHIS_ECG_VRA_OtherNumber": "038-341-2324",
                "household_contacts": [
                    "4066139993",
                    "001-204-985-4140",
                    "286-435-7465x1100"
                ],
                "ea": {
                    "number": "167",
                    "type": "Rural"
                },
                "house_structure_number": "499",
                "household_number_within_house": "9",
                "residence_type": "Rural",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-01",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Cindy Mann",
                    "age": 74,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Blake Robbins",
                    "age": 7,
                    "sex": "female",
                    "relationship_code": "06"
                }
            ],
            "absentees": [
                {
                    "name": "Terry Pitts",
                    "age": 15,
                    "sex": "female",
                    "destination": {
                        "town": "West Christian",
                        "region": "Volta",
                        "code": "04"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Robert Ortiz",
                    "age": 41,
                    "sex": "female",
                    "destination": {
                        "town": "West Donna",
                        "region": "Greater Accra",
                        "code": "08"
                    },
                    "months_absent": 4
                },
                {
                    "name": "Michael Sanchez",
                    "age": 58,
                    "sex": "female",
                    "destination": {
                        "town": "Julieview",
                        "region": "Greater Accra",
                        "code": "05"
                    },
                    "months_absent": 9
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Jonathan Reed",
                    "sex": "female",
                    "age": 0,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "23",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "33",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 10,
                        "livestock_code": "05"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 5
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 1,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Lake Kirstentown",
                "region": {
                    "name": "Eastern",
                    "code": "05"
                },
                "house_address": "4548 Elizabeth Vista\nLake Christopherton, KS 18524",
                "district": {
                    "name": "Brownfort",
                    "code": "4622"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "39"
                },
                "locality": {
                    "name": "East Jamesport",
                    "code": "3148"
                },
                "sub_district": "Stephanie Views",
                "NHIS_ECG_VRA_OtherNumber": "274-657-1273",
                "household_contacts": [
                    "(195)567-3374x9489"
                ],
                "ea": {
                    "number": "42",
                    "type": "Rural"
                },
                "house_structure_number": "130",
                "household_number_within_house": "4",
                "residence_type": "Urban",
                "date_started": "2025-01-08",
                "date_completed": "2025-01-07",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Janet Long",
                    "age": 20,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Martin West",
                    "age": 2,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Jennifer Duncan",
                    "age": 100,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Laurie Mahoney",
                    "age": 33,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Anthony Ramos",
                    "age": 42,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Jasmine Rosales",
                    "age": 10,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "John Spencer",
                    "age": 98,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Tonya Jackson",
                    "age": 57,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Carol Perez",
                    "age": 91,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Erika Trujillo",
                    "age": 70,
                    "sex": "male",
                    "relationship_code": "06"
                }
            ],
            "absentees": [
                {
                    "name": "Allen Curtis",
                    "age": 54,
                    "sex": "male",
                    "destination": {
                        "town": "Rodneyland",
                        "region": "Ashanti",
                        "code": "01"
                    },
                    "months_absent": 5
                },
                {
                    "name": "Jennifer Le",
                    "age": 27,
                    "sex": "male",
                    "destination": {
                        "town": "North Virginia",
                        "region": "Greater Accra",
                        "code": "10"
                    },
                    "months_absent": 10
                },
                {
                    "name": "Michael Rivera",
                    "age": 19,
                    "sex": "male",
                    "destination": {
                        "town": "Port Victoria",
                        "region": "Volta",
                        "code": "05"
                    },
                    "months_absent": 11
                }
            ],
            "emigration": [
                {
                    "name": "Heidi Beasley",
                    "age": 29,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "United Kingdom",
                    "country_code": "22",
                    "year_of_departure": 2017,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [
                {
                    "name": "Rebecca Cochran",
                    "sex": "female",
                    "age": 34,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 1,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "18",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "12",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "39",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 1,
                        "livestock_code": "02"
                    },
                    {
                        "type": "Goats",
                        "number": 39,
                        "livestock_code": "01"
                    },
                    {
                        "type": "Goats",
                        "number": 23,
                        "livestock_code": "10"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 5,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Ericksonfort",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "09"
                },
                "house_address": "60184 Donald Mountains\nChristopherview, KY 42800",
                "district": {
                    "name": "Davismouth",
                    "code": "0261"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "30"
                },
                "locality": {
                    "name": "East Amymouth",
                    "code": "3926"
                },
                "sub_district": "King Path",
                "NHIS_ECG_VRA_OtherNumber": "436-534-8675",
                "household_contacts": [
                    "(327)952-8571x67900",
                    "001-844-006-1160x286"
                ],
                "ea": {
                    "number": "69",
                    "type": "Rural"
                },
                "house_structure_number": "926",
                "household_number_within_house": "10",
                "residence_type": "Rural",
                "date_started": "2025-01-08",
                "date_completed": "2025-01-11",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Gloria Webb",
                    "age": 34,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Scott Nguyen",
                    "age": 10,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Joshua Mata",
                    "age": 1,
                    "sex": "male",
                    "relationship_code": "07"
                }
            ],
            "absentees": [
                {
                    "name": "Mallory Campbell",
                    "age": 49,
                    "sex": "female",
                    "destination": {
                        "town": "Jacobsbury",
                        "region": "Volta",
                        "code": "04"
                    },
                    "months_absent": 1
                },
                {
                    "name": "Gloria Casey",
                    "age": 47,
                    "sex": "male",
                    "destination": {
                        "town": "North Dean",
                        "region": "Ashanti",
                        "code": "01"
                    },
                    "months_absent": 5
                },
                {
                    "name": "Justin Moore",
                    "age": 57,
                    "sex": "female",
                    "destination": {
                        "town": "West Rachel",
                        "region": "Greater Accra",
                        "code": "04"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [
                {
                    "name": "Sarah Wiggins",
                    "age": 56,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "United States",
                    "country_code": "15",
                    "year_of_departure": 2000,
                    "activity_abroad": "Student"
                },
                {
                    "name": "Anthony Smith",
                    "age": 38,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "United States",
                    "country_code": "18",
                    "year_of_departure": 2013,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 0,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "33",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "46",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 43,
                        "livestock_code": "05"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Kington",
                "region": {
                    "name": "Western",
                    "code": "07"
                },
                "house_address": "72081 Clark Pines Suite 972\nEast Patrick, CA 32891",
                "district": {
                    "name": "Alyssabury",
                    "code": "6764"
                },
                "district_type": {
                    "name": "District",
                    "code": "08"
                },
                "locality": {
                    "name": "Teresaville",
                    "code": "1231"
                },
                "sub_district": "Tracey Camp",
                "NHIS_ECG_VRA_OtherNumber": "597-872-4800",
                "household_contacts": [
                    "001-973-435-9274x7355",
                    "+1-757-076-0852x6761",
                    "001-004-458-6123"
                ],
                "ea": {
                    "number": "316",
                    "type": "Rural"
                },
                "house_structure_number": "884",
                "household_number_within_house": "3",
                "residence_type": "Rural",
                "date_started": "2025-01-02",
                "date_completed": "2025-01-05",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Ricky Zhang",
                    "age": 9,
                    "sex": "female",
                    "relationship_code": "04"
                }
            ],
            "absentees": [
                {
                    "name": "Isaac Harris",
                    "age": 51,
                    "sex": "male",
                    "destination": {
                        "town": "Larrystad",
                        "region": "Volta",
                        "code": "06"
                    },
                    "months_absent": 5
                },
                {
                    "name": "Christian Miller",
                    "age": 15,
                    "sex": "female",
                    "destination": {
                        "town": "Charleschester",
                        "region": "Greater Accra",
                        "code": "07"
                    },
                    "months_absent": 8
                }
            ],
            "emigration": [
                {
                    "name": "Anita Guerrero",
                    "age": 15,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "United Kingdom",
                    "country_code": "15",
                    "year_of_departure": 2014,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [
                {
                    "name": "Mark Nicholson",
                    "sex": "male",
                    "age": 51,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 0,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "17",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "23",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Other",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Shared Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Barbaramouth",
                "region": {
                    "name": "Upper East",
                    "code": "05"
                },
                "house_address": "543 Jerry Keys Apt. 859\nNorth Ericabury, MA 73422",
                "district": {
                    "name": "New Dale",
                    "code": "7650"
                },
                "district_type": {
                    "name": "District",
                    "code": "16"
                },
                "locality": {
                    "name": "Johnsonburgh",
                    "code": "5767"
                },
                "sub_district": "Peter Harbors",
                "NHIS_ECG_VRA_OtherNumber": "214-028-1070",
                "household_contacts": [
                    "353.375.1498x7941"
                ],
                "ea": {
                    "number": "271",
                    "type": "Urban"
                },
                "house_structure_number": "941",
                "household_number_within_house": "12",
                "residence_type": "Rural",
                "date_started": "2025-01-10",
                "date_completed": "2025-01-02",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Donna Villarreal",
                    "age": 7,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Gina Trevino",
                    "age": 5,
                    "sex": "male",
                    "relationship_code": "07"
                }
            ],
            "absentees": [
                {
                    "name": "Ryan Faulkner",
                    "age": 45,
                    "sex": "male",
                    "destination": {
                        "town": "West Eric",
                        "region": "Greater Accra",
                        "code": "01"
                    },
                    "months_absent": 8
                },
                {
                    "name": "Heather Reynolds",
                    "age": 45,
                    "sex": "male",
                    "destination": {
                        "town": "Frankview",
                        "region": "Ashanti",
                        "code": "07"
                    },
                    "months_absent": 2
                }
            ],
            "emigration": [
                {
                    "name": "Mr. Cory Bryant",
                    "age": 31,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Canada",
                    "country_code": "21",
                    "year_of_departure": 2008,
                    "activity_abroad": "Employed"
                },
                {
                    "name": "Jennifer Black MD",
                    "age": 33,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "19",
                    "year_of_departure": 2007,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [
                {
                    "name": "Michele Douglas",
                    "sex": "female",
                    "age": 11,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 0,
                    "female": 2
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "31",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "04",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "49",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 38,
                        "livestock_code": "07"
                    },
                    {
                        "type": "Goats",
                        "number": 14,
                        "livestock_code": "09"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Cement",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Lake Jamesport",
                "region": {
                    "name": "Volta",
                    "code": "05"
                },
                "house_address": "0767 Davis Land Apt. 497\nSouth Jamie, AZ 78602",
                "district": {
                    "name": "New David",
                    "code": "8838"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "28"
                },
                "locality": {
                    "name": "Lake Sandra",
                    "code": "4971"
                },
                "sub_district": "Robert Viaduct",
                "NHIS_ECG_VRA_OtherNumber": "601-881-7044",
                "household_contacts": [
                    "8148378834",
                    "207-537-2215x570"
                ],
                "ea": {
                    "number": "108",
                    "type": "Rural"
                },
                "house_structure_number": "103",
                "household_number_within_house": "6",
                "residence_type": "Urban",
                "date_started": "2025-01-01",
                "date_completed": "2025-01-03",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Patrick Mcconnell",
                    "age": 30,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Joy Porter",
                    "age": 58,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Patrick Roberts",
                    "age": 51,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Jeffrey Hubbard",
                    "age": 20,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Jennifer Harrison",
                    "age": 93,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Philip Esparza",
                    "age": 7,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Victoria Thornton",
                    "age": 5,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Nathan Daniels",
                    "age": 33,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Jacob Conley",
                    "age": 65,
                    "sex": "female",
                    "relationship_code": "02"
                }
            ],
            "absentees": [
                {
                    "name": "James Strong",
                    "age": 28,
                    "sex": "female",
                    "destination": {
                        "town": "West Tanya",
                        "region": "Ashanti",
                        "code": "06"
                    },
                    "months_absent": 4
                },
                {
                    "name": "Brittney Hensley",
                    "age": 21,
                    "sex": "male",
                    "destination": {
                        "town": "Natalieland",
                        "region": "Greater Accra",
                        "code": "05"
                    },
                    "months_absent": 12
                },
                {
                    "name": "Miss Lori Moreno DDS",
                    "age": 27,
                    "sex": "male",
                    "destination": {
                        "town": "South Lisa",
                        "region": "Ashanti",
                        "code": "10"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Joseph Hammond",
                    "sex": "female",
                    "age": 14,
                    "unnatural_death": true,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 4,
                    "female": 2
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 12,
                        "livestock_code": "09"
                    },
                    {
                        "type": "Pigs",
                        "number": 31,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Chickens",
                        "number": 16,
                        "livestock_code": "06"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Thatch",
                "tenure_arrangement": "Rented",
                "ownership_type": "Other",
                "rooms": {
                    "total": 1,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Shared Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Goodmouth",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "02"
                },
                "house_address": "PSC 8983, Box 0764\nAPO AE 17370",
                "district": {
                    "name": "Mcphersonton",
                    "code": "7758"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "28"
                },
                "locality": {
                    "name": "Williamsmouth",
                    "code": "9641"
                },
                "sub_district": "Mcdaniel Mountains",
                "NHIS_ECG_VRA_OtherNumber": "782-040-5495",
                "household_contacts": [
                    "+1-051-668-5231",
                    "576.396.9864"
                ],
                "ea": {
                    "number": "203",
                    "type": "Rural"
                },
                "house_structure_number": "707",
                "household_number_within_house": "8",
                "residence_type": "Urban",
                "date_started": "2025-01-09",
                "date_completed": "2025-01-12",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Erik Potts",
                    "age": 65,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Shannon Johnson",
                    "age": 55,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Stephanie Clark",
                    "age": 93,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Natalie Jackson",
                    "age": 52,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Mrs. Jenny Snyder",
                    "age": 64,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Jennifer Reynolds",
                    "age": 36,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Donna Montgomery",
                    "age": 64,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Samuel Edwards",
                    "age": 22,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Devin Gibbs",
                    "age": 31,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Amber Watkins",
                    "age": 35,
                    "sex": "male",
                    "relationship_code": "06"
                }
            ],
            "absentees": [
                {
                    "name": "Marie Ramirez",
                    "age": 21,
                    "sex": "male",
                    "destination": {
                        "town": "South Megan",
                        "region": "Ashanti",
                        "code": "08"
                    },
                    "months_absent": 3
                },
                {
                    "name": "Emily Lopez",
                    "age": 43,
                    "sex": "female",
                    "destination": {
                        "town": "Hernandezton",
                        "region": "Greater Accra",
                        "code": "01"
                    },
                    "months_absent": 2
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 0
                },
                "crops": [],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 10,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "New Katherine",
                "region": {
                    "name": "Eastern",
                    "code": "06"
                },
                "house_address": "USNS Crawford\nFPO AA 96404",
                "district": {
                    "name": "Sandratown",
                    "code": "2870"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "11"
                },
                "locality": {
                    "name": "Willischester",
                    "code": "9610"
                },
                "sub_district": "Nichols Ports",
                "NHIS_ECG_VRA_OtherNumber": "381-364-1373",
                "household_contacts": [
                    "641-025-4728x18788"
                ],
                "ea": {
                    "number": "64",
                    "type": "Urban"
                },
                "house_structure_number": "682",
                "household_number_within_house": "15",
                "residence_type": "Rural",
                "date_started": "2025-01-11",
                "date_completed": "2025-01-11",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Anne Norman",
                    "age": 17,
                    "sex": "male",
                    "relationship_code": "01"
                }
            ],
            "absentees": [
                {
                    "name": "Johnny Parker",
                    "age": 46,
                    "sex": "female",
                    "destination": {
                        "town": "North Stevenstad",
                        "region": "Ashanti",
                        "code": "06"
                    },
                    "months_absent": 12
                },
                {
                    "name": "Jennifer Jackson",
                    "age": 24,
                    "sex": "female",
                    "destination": {
                        "town": "Edwardsbury",
                        "region": "Greater Accra",
                        "code": "04"
                    },
                    "months_absent": 8
                }
            ],
            "emigration": [
                {
                    "name": "Sara Sloan",
                    "age": 45,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "Canada",
                    "country_code": "14",
                    "year_of_departure": 2015,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Kenneth Williams",
                    "age": 48,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "United States",
                    "country_code": "14",
                    "year_of_departure": 2025,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Mrs. Jamie Garcia",
                    "sex": "male",
                    "age": 62,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 1,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "33",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "38",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 26,
                        "livestock_code": "02"
                    },
                    {
                        "type": "Chickens",
                        "number": 12,
                        "livestock_code": "04"
                    },
                    {
                        "type": "Pigs",
                        "number": 17,
                        "livestock_code": "09"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Shared Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "East Michael",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "01"
                },
                "house_address": "72275 Hannah Highway\nMatthewfort, AL 67812",
                "district": {
                    "name": "East Christopher",
                    "code": "7241"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "41"
                },
                "locality": {
                    "name": "New Stephanieberg",
                    "code": "5862"
                },
                "sub_district": "Bailey Walk",
                "NHIS_ECG_VRA_OtherNumber": "352-680-1962",
                "household_contacts": [
                    "1556332807",
                    "(346)462-6098"
                ],
                "ea": {
                    "number": "421",
                    "type": "Urban"
                },
                "house_structure_number": "482",
                "household_number_within_house": "4",
                "residence_type": "Urban",
                "date_started": "2025-01-11",
                "date_completed": "2025-01-08",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Juan Gray",
                    "age": 10,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Kathleen White",
                    "age": 87,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Carrie Velez",
                    "age": 58,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "John Campbell",
                    "age": 94,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Jeffrey Le",
                    "age": 17,
                    "sex": "female",
                    "relationship_code": "01"
                }
            ],
            "absentees": [
                {
                    "name": "Belinda Walker",
                    "age": 55,
                    "sex": "male",
                    "destination": {
                        "town": "Danielside",
                        "region": "Ashanti",
                        "code": "03"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Walter Miles",
                    "age": 59,
                    "sex": "male",
                    "destination": {
                        "town": "Debbieberg",
                        "region": "Volta",
                        "code": "06"
                    },
                    "months_absent": 4
                }
            ],
            "emigration": [
                {
                    "name": "Nathan Gregory",
                    "age": 47,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "Germany",
                    "country_code": "13",
                    "year_of_departure": 2003,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [
                {
                    "name": "Arthur Chavez",
                    "sex": "male",
                    "age": 64,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "39",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "03",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "46",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 39,
                        "livestock_code": "02"
                    },
                    {
                        "type": "Chickens",
                        "number": 15,
                        "livestock_code": "05"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Port Amber",
                "region": {
                    "name": "Western",
                    "code": "04"
                },
                "house_address": "Unit 6611 Box 7173\nDPO AE 68396",
                "district": {
                    "name": "North Krystalville",
                    "code": "9324"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "37"
                },
                "locality": {
                    "name": "Johnside",
                    "code": "2143"
                },
                "sub_district": "Angela Inlet",
                "NHIS_ECG_VRA_OtherNumber": "591-814-4217",
                "household_contacts": [
                    "3590841041",
                    "819.836.2129x0603"
                ],
                "ea": {
                    "number": "59",
                    "type": "Rural"
                },
                "house_structure_number": "422",
                "household_number_within_house": "2",
                "residence_type": "Rural",
                "date_started": "2025-01-05",
                "date_completed": "2025-01-12",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Ricky Robinson",
                    "age": 4,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Arthur Little",
                    "age": 6,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "David Huerta",
                    "age": 1,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Melissa Wong",
                    "age": 27,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Anthony Chavez",
                    "age": 100,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Fred Smith",
                    "age": 18,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Linda Davis",
                    "age": 58,
                    "sex": "female",
                    "relationship_code": "05"
                }
            ],
            "absentees": [
                {
                    "name": "Jason Byrd DDS",
                    "age": 35,
                    "sex": "female",
                    "destination": {
                        "town": "Grahamport",
                        "region": "Volta",
                        "code": "10"
                    },
                    "months_absent": 6
                }
            ],
            "emigration": [
                {
                    "name": "Jason Jackson",
                    "age": 54,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "Canada",
                    "country_code": "16",
                    "year_of_departure": 2025,
                    "activity_abroad": "Employed"
                },
                {
                    "name": "Angela Tucker",
                    "age": 23,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "Germany",
                    "country_code": "14",
                    "year_of_departure": 2021,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [
                {
                    "name": "Barbara Brooks",
                    "sex": "female",
                    "age": 71,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 4,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "15",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 29,
                        "livestock_code": "08"
                    },
                    {
                        "type": "Sheep",
                        "number": 2,
                        "livestock_code": "04"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 3,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Patriciashire",
                "region": {
                    "name": "Upper West",
                    "code": "01"
                },
                "house_address": "5630 Christina Trafficway\nTarashire, OK 65864",
                "district": {
                    "name": "Brandonhaven",
                    "code": "3159"
                },
                "district_type": {
                    "name": "District",
                    "code": "16"
                },
                "locality": {
                    "name": "South Jessicastad",
                    "code": "8432"
                },
                "sub_district": "Robert Island",
                "NHIS_ECG_VRA_OtherNumber": "813-961-8904",
                "household_contacts": [
                    "+1-250-551-3044x24459",
                    "240-224-6797",
                    "1787675481"
                ],
                "ea": {
                    "number": "53",
                    "type": "Rural"
                },
                "house_structure_number": "187",
                "household_number_within_house": "9",
                "residence_type": "Rural",
                "date_started": "2025-01-06",
                "date_completed": "2025-01-07",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Kenneth Wallace",
                    "age": 32,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Darren Briggs",
                    "age": 36,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Jonathan Hodge",
                    "age": 94,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Paige Horne",
                    "age": 65,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Jill Reid",
                    "age": 1,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Michael Rogers",
                    "age": 32,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Julia Morgan",
                    "age": 95,
                    "sex": "female",
                    "relationship_code": "05"
                }
            ],
            "absentees": [
                {
                    "name": "Holly Martinez",
                    "age": 28,
                    "sex": "female",
                    "destination": {
                        "town": "Davisfurt",
                        "region": "Greater Accra",
                        "code": "02"
                    },
                    "months_absent": 9
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 3,
                    "female": 4
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 18,
                        "livestock_code": "08"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 2,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Paulshire",
                "region": {
                    "name": "Upper West",
                    "code": "07"
                },
                "house_address": "098 Douglas Spurs Apt. 744\nNicolemouth, WY 23658",
                "district": {
                    "name": "Lopezmouth",
                    "code": "6611"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "14"
                },
                "locality": {
                    "name": "Alisonfort",
                    "code": "2083"
                },
                "sub_district": "Doyle Highway",
                "NHIS_ECG_VRA_OtherNumber": "746-812-2480",
                "household_contacts": [
                    "(173)681-0160x8583"
                ],
                "ea": {
                    "number": "426",
                    "type": "Rural"
                },
                "house_structure_number": "938",
                "household_number_within_house": "4",
                "residence_type": "Urban",
                "date_started": "2025-01-08",
                "date_completed": "2025-01-05",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Larry Lee",
                    "age": 25,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Kelly Boyd",
                    "age": 85,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Allison Cook",
                    "age": 8,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Michael Murphy",
                    "age": 87,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Kristin Kirk",
                    "age": 74,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Thomas Gibson",
                    "age": 0,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Robert Shepard",
                    "age": 41,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Joshua Smith",
                    "age": 79,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Dr. Brittany Nolan",
                    "age": 54,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Denise Sosa",
                    "age": 3,
                    "sex": "male",
                    "relationship_code": "08"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [
                {
                    "name": "Jacob Cook",
                    "sex": "female",
                    "age": 53,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 4,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "05",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 16,
                        "livestock_code": "05"
                    },
                    {
                        "type": "Sheep",
                        "number": 17,
                        "livestock_code": "09"
                    },
                    {
                        "type": "Chickens",
                        "number": 3,
                        "livestock_code": "05"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 3,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "East Rebecca",
                "region": {
                    "name": "Upper East",
                    "code": "04"
                },
                "house_address": "478 Justin Pike\nNew Lindsey, TN 33476",
                "district": {
                    "name": "Jessicaside",
                    "code": "6318"
                },
                "district_type": {
                    "name": "District",
                    "code": "22"
                },
                "locality": {
                    "name": "West Angelaberg",
                    "code": "9574"
                },
                "sub_district": "Katie Pike",
                "NHIS_ECG_VRA_OtherNumber": "231-304-6406",
                "household_contacts": [
                    "(730)619-5884"
                ],
                "ea": {
                    "number": "187",
                    "type": "Urban"
                },
                "house_structure_number": "764",
                "household_number_within_house": "10",
                "residence_type": "Rural",
                "date_started": "2025-01-12",
                "date_completed": "2025-01-04",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Matthew Morris",
                    "age": 54,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Mr. Randy Escobar Jr.",
                    "age": 80,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "George Anderson",
                    "age": 17,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Christian Gentry",
                    "age": 85,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Robert Benson",
                    "age": 40,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Beth Walker",
                    "age": 98,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Brett Bell",
                    "age": 12,
                    "sex": "male",
                    "relationship_code": "02"
                }
            ],
            "absentees": [
                {
                    "name": "Susan Perez",
                    "age": 55,
                    "sex": "male",
                    "destination": {
                        "town": "East Valerieville",
                        "region": "Ashanti",
                        "code": "01"
                    },
                    "months_absent": 1
                },
                {
                    "name": "Adam Warren",
                    "age": 19,
                    "sex": "female",
                    "destination": {
                        "town": "South Miguel",
                        "region": "Volta",
                        "code": "01"
                    },
                    "months_absent": 3
                },
                {
                    "name": "Shannon Turner",
                    "age": 22,
                    "sex": "female",
                    "destination": {
                        "town": "Lake Kelly",
                        "region": "Volta",
                        "code": "06"
                    },
                    "months_absent": 9
                }
            ],
            "emigration": [
                {
                    "name": "Mr. Benjamin Patterson",
                    "age": 56,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "United Kingdom",
                    "country_code": "20",
                    "year_of_departure": 2005,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 0,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "29",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Earth",
                "roof": "Thatch",
                "tenure_arrangement": "Rented",
                "ownership_type": "Government",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Timothyhaven",
                "region": {
                    "name": "Upper West",
                    "code": "01"
                },
                "house_address": "6971 Patrick Falls Apt. 069\nPort Christina, FL 37198",
                "district": {
                    "name": "Spencershire",
                    "code": "9604"
                },
                "district_type": {
                    "name": "District",
                    "code": "50"
                },
                "locality": {
                    "name": "Port Sarah",
                    "code": "8600"
                },
                "sub_district": "Bush Summit",
                "NHIS_ECG_VRA_OtherNumber": "879-622-7796",
                "household_contacts": [
                    "497.716.2540x47021",
                    "387.076.7417x4698"
                ],
                "ea": {
                    "number": "288",
                    "type": "Rural"
                },
                "house_structure_number": "660",
                "household_number_within_house": "11",
                "residence_type": "Rural",
                "date_started": "2025-01-02",
                "date_completed": "2025-01-11",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Amy Faulkner",
                    "age": 23,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Jordan Glover",
                    "age": 93,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Jade Garcia",
                    "age": 12,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Jennifer Oconnor",
                    "age": 5,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Amy Thomas",
                    "age": 4,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Willie Lee",
                    "age": 85,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Andrea Wright",
                    "age": 45,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Jacob Roberts",
                    "age": 73,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "William Howard",
                    "age": 87,
                    "sex": "male",
                    "relationship_code": "02"
                }
            ],
            "absentees": [
                {
                    "name": "Kimberly Escobar",
                    "age": 18,
                    "sex": "male",
                    "destination": {
                        "town": "Warrenview",
                        "region": "Volta",
                        "code": "05"
                    },
                    "months_absent": 7
                }
            ],
            "emigration": [
                {
                    "name": "Karina Martin",
                    "age": 26,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "United States",
                    "country_code": "12",
                    "year_of_departure": 2002,
                    "activity_abroad": "Employed"
                },
                {
                    "name": "Shannon Nguyen",
                    "age": 37,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "United Kingdom",
                    "country_code": "16",
                    "year_of_departure": 2005,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 5,
                    "female": 5
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 20,
                        "livestock_code": "08"
                    },
                    {
                        "type": "Sheep",
                        "number": 41,
                        "livestock_code": "06"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 1,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 1,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "South Markshire",
                "region": {
                    "name": "Central",
                    "code": "06"
                },
                "house_address": "99580 Heather Expressway\nPort Codyberg, OK 76623",
                "district": {
                    "name": "Lake Christine",
                    "code": "5412"
                },
                "district_type": {
                    "name": "District",
                    "code": "17"
                },
                "locality": {
                    "name": "Andreaberg",
                    "code": "6833"
                },
                "sub_district": "John Walk",
                "NHIS_ECG_VRA_OtherNumber": "931-739-5143",
                "household_contacts": [
                    "(944)005-4849x98436",
                    "(888)807-2171"
                ],
                "ea": {
                    "number": "70",
                    "type": "Urban"
                },
                "house_structure_number": "585",
                "household_number_within_house": "9",
                "residence_type": "Urban",
                "date_started": "2025-01-05",
                "date_completed": "2025-01-01",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Sherri Hall",
                    "age": 15,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Trevor Brown",
                    "age": 72,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Shawn Mitchell",
                    "age": 92,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Riley Lambert",
                    "age": 81,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Rachel James",
                    "age": 21,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Daniel Curtis",
                    "age": 72,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Karen Larsen",
                    "age": 14,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Emily Mccormick",
                    "age": 53,
                    "sex": "female",
                    "relationship_code": "06"
                }
            ],
            "absentees": [
                {
                    "name": "Renee Torres",
                    "age": 31,
                    "sex": "male",
                    "destination": {
                        "town": "South Kristishire",
                        "region": "Volta",
                        "code": "07"
                    },
                    "months_absent": 4
                },
                {
                    "name": "Mark Bailey",
                    "age": 58,
                    "sex": "female",
                    "destination": {
                        "town": "West Kathy",
                        "region": "Greater Accra",
                        "code": "08"
                    },
                    "months_absent": 4
                },
                {
                    "name": "Phillip Johnson",
                    "age": 33,
                    "sex": "male",
                    "destination": {
                        "town": "South Dominique",
                        "region": "Greater Accra",
                        "code": "05"
                    },
                    "months_absent": 3
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 2,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "32",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "10",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "04",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 5
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "North Robert",
                "region": {
                    "name": "Ashanti",
                    "code": "02"
                },
                "house_address": "76162 Judy Inlet Apt. 106\nGrossside, OR 98874",
                "district": {
                    "name": "East James",
                    "code": "2545"
                },
                "district_type": {
                    "name": "District",
                    "code": "35"
                },
                "locality": {
                    "name": "Gouldmouth",
                    "code": "9433"
                },
                "sub_district": "Jose Lane",
                "NHIS_ECG_VRA_OtherNumber": "703-245-7045",
                "household_contacts": [
                    "(946)317-7838",
                    "044.535.0763x94004",
                    "508.926.3926x32768"
                ],
                "ea": {
                    "number": "470",
                    "type": "Rural"
                },
                "house_structure_number": "534",
                "household_number_within_house": "16",
                "residence_type": "Rural",
                "date_started": "2025-01-11",
                "date_completed": "2025-01-05",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Robert Brown",
                    "age": 44,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Mr. Danny Evans",
                    "age": 92,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Elizabeth Nguyen",
                    "age": 84,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Amanda Morrison",
                    "age": 57,
                    "sex": "male",
                    "relationship_code": "03"
                }
            ],
            "absentees": [
                {
                    "name": "Mckenzie Tapia",
                    "age": 38,
                    "sex": "female",
                    "destination": {
                        "town": "Port Judyville",
                        "region": "Volta",
                        "code": "01"
                    },
                    "months_absent": 12
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Daniel Navarro",
                    "sex": "female",
                    "age": 91,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 3,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "49",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "27",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "44",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Other",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 3,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Lake Kevinburgh",
                "region": {
                    "name": "Ashanti",
                    "code": "04"
                },
                "house_address": "032 Brian Oval Apt. 868\nDavidmouth, TN 40819",
                "district": {
                    "name": "Bellport",
                    "code": "4197"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "23"
                },
                "locality": {
                    "name": "North Jennifer",
                    "code": "3785"
                },
                "sub_district": "Watkins Loaf",
                "NHIS_ECG_VRA_OtherNumber": "115-250-3176",
                "household_contacts": [
                    "097-377-0144",
                    "679.831.3934x01010"
                ],
                "ea": {
                    "number": "169",
                    "type": "Rural"
                },
                "house_structure_number": "517",
                "household_number_within_house": "16",
                "residence_type": "Urban",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-06",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Andrew Goodman",
                    "age": 11,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Elizabeth Scott",
                    "age": 100,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Kimberly Johnson",
                    "age": 90,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Jasmine Mcdowell",
                    "age": 62,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Johnny Blackburn",
                    "age": 59,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "John Bell",
                    "age": 7,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Scott Oliver",
                    "age": 64,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Jason Harrison",
                    "age": 36,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Michael Phillips",
                    "age": 44,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "John Huerta",
                    "age": 15,
                    "sex": "male",
                    "relationship_code": "06"
                }
            ],
            "absentees": [
                {
                    "name": "Rebecca Ward",
                    "age": 36,
                    "sex": "male",
                    "destination": {
                        "town": "Michelleton",
                        "region": "Ashanti",
                        "code": "10"
                    },
                    "months_absent": 7
                },
                {
                    "name": "Jaime Johnson",
                    "age": 28,
                    "sex": "male",
                    "destination": {
                        "town": "Lake Tammy",
                        "region": "Volta",
                        "code": "04"
                    },
                    "months_absent": 12
                },
                {
                    "name": "Daniel Browning",
                    "age": 16,
                    "sex": "female",
                    "destination": {
                        "town": "Joshuahaven",
                        "region": "Volta",
                        "code": "08"
                    },
                    "months_absent": 11
                }
            ],
            "emigration": [
                {
                    "name": "Kevin Gray",
                    "age": 60,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "Canada",
                    "country_code": "12",
                    "year_of_departure": 2014,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 0,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "39",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "30",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "03",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 8,
                        "livestock_code": "03"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 5
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Halestad",
                "region": {
                    "name": "Central",
                    "code": "10"
                },
                "house_address": "USS Conley\nFPO AE 27300",
                "district": {
                    "name": "West Charles",
                    "code": "2133"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "47"
                },
                "locality": {
                    "name": "Moorehaven",
                    "code": "0249"
                },
                "sub_district": "Kelly Mission",
                "NHIS_ECG_VRA_OtherNumber": "485-688-3117",
                "household_contacts": [
                    "647-943-9384x437",
                    "001-883-607-2657"
                ],
                "ea": {
                    "number": "297",
                    "type": "Urban"
                },
                "house_structure_number": "220",
                "household_number_within_house": "4",
                "residence_type": "Rural",
                "date_started": "2025-01-03",
                "date_completed": "2025-01-03",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Michael Hammond",
                    "age": 23,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Stephanie Graham",
                    "age": 65,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Michael Gutierrez",
                    "age": 11,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Steve Vance",
                    "age": 28,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Tonya Smith",
                    "age": 74,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Veronica Collins",
                    "age": 77,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Carolyn Mitchell",
                    "age": 88,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Jamie Hall",
                    "age": 19,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Taylor Hughes",
                    "age": 3,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Nicole Carroll",
                    "age": 19,
                    "sex": "male",
                    "relationship_code": "10"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [
                {
                    "name": "Kenneth Thompson",
                    "sex": "male",
                    "age": 27,
                    "unnatural_death": true,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 5,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "22",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 9,
                        "livestock_code": "09"
                    },
                    {
                        "type": "Sheep",
                        "number": 25,
                        "livestock_code": "10"
                    },
                    {
                        "type": "Sheep",
                        "number": 11,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Government",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Lake Randall",
                "region": {
                    "name": "Northern",
                    "code": "07"
                },
                "house_address": "USNV Schmidt\nFPO AP 85297",
                "district": {
                    "name": "Melindaburgh",
                    "code": "1193"
                },
                "district_type": {
                    "name": "District",
                    "code": "07"
                },
                "locality": {
                    "name": "Katherineburgh",
                    "code": "0263"
                },
                "sub_district": "Christopher Prairie",
                "NHIS_ECG_VRA_OtherNumber": "588-656-7450",
                "household_contacts": [
                    "(914)177-0925x0049",
                    "245-877-4934",
                    "001-557-504-0086x87860"
                ],
                "ea": {
                    "number": "470",
                    "type": "Urban"
                },
                "house_structure_number": "849",
                "household_number_within_house": "10",
                "residence_type": "Rural",
                "date_started": "2025-01-03",
                "date_completed": "2025-01-07",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Rodney Wong",
                    "age": 57,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Willie Hudson",
                    "age": 71,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Aaron Smith",
                    "age": 40,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Samantha Wang",
                    "age": 76,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Jeffrey Shields",
                    "age": 84,
                    "sex": "female",
                    "relationship_code": "08"
                }
            ],
            "absentees": [
                {
                    "name": "Dr. Jennifer Whitehead",
                    "age": 25,
                    "sex": "female",
                    "destination": {
                        "town": "New Beckyville",
                        "region": "Volta",
                        "code": "03"
                    },
                    "months_absent": 7
                }
            ],
            "emigration": [
                {
                    "name": "Larry Johnson",
                    "age": 19,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "United Kingdom",
                    "country_code": "20",
                    "year_of_departure": 2025,
                    "activity_abroad": "Employed"
                },
                {
                    "name": "Jon Welch",
                    "age": 25,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "Nigeria",
                    "country_code": "21",
                    "year_of_departure": 2011,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Edwin Zimmerman",
                    "sex": "male",
                    "age": 66,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 5,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "44",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 3,
                        "livestock_code": "08"
                    },
                    {
                        "type": "Goats",
                        "number": 12,
                        "livestock_code": "07"
                    },
                    {
                        "type": "Pigs",
                        "number": 20,
                        "livestock_code": "04"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 3,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Lesliestad",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "08"
                },
                "house_address": "843 David Branch\nPort Danielmouth, WA 39314",
                "district": {
                    "name": "South Jenna",
                    "code": "1498"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "48"
                },
                "locality": {
                    "name": "North Tasha",
                    "code": "5883"
                },
                "sub_district": "Paul Shoal",
                "NHIS_ECG_VRA_OtherNumber": "827-823-4230",
                "household_contacts": [
                    "325-397-0765x361",
                    "(519)598-8096x90503",
                    "(563)316-4627x0211"
                ],
                "ea": {
                    "number": "499",
                    "type": "Rural"
                },
                "house_structure_number": "247",
                "household_number_within_house": "15",
                "residence_type": "Urban",
                "date_started": "2025-01-02",
                "date_completed": "2025-01-11",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Angela Jarvis",
                    "age": 83,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Brett Williams",
                    "age": 46,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Devin Orr",
                    "age": 74,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Linda Hamilton",
                    "age": 11,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Michael Acosta",
                    "age": 64,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Arthur Gonzalez",
                    "age": 77,
                    "sex": "female",
                    "relationship_code": "08"
                }
            ],
            "absentees": [
                {
                    "name": "Corey Yoder",
                    "age": 53,
                    "sex": "male",
                    "destination": {
                        "town": "Port Kelly",
                        "region": "Volta",
                        "code": "08"
                    },
                    "months_absent": 12
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 4,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "39",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "40",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 11,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Pigs",
                        "number": 23,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Chickens",
                        "number": 17,
                        "livestock_code": "03"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Port Jermaine",
                "region": {
                    "name": "Upper East",
                    "code": "05"
                },
                "house_address": "03198 Malone Port Apt. 093\nOwensberg, SC 37653",
                "district": {
                    "name": "East Caitlinton",
                    "code": "0445"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "43"
                },
                "locality": {
                    "name": "South Patricia",
                    "code": "5049"
                },
                "sub_district": "Stacey Junction",
                "NHIS_ECG_VRA_OtherNumber": "337-185-3734",
                "household_contacts": [
                    "8474835509"
                ],
                "ea": {
                    "number": "338",
                    "type": "Urban"
                },
                "house_structure_number": "379",
                "household_number_within_house": "4",
                "residence_type": "Rural",
                "date_started": "2025-01-06",
                "date_completed": "2025-01-07",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Rebecca Ballard",
                    "age": 8,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Tara Taylor",
                    "age": 86,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Michael Austin",
                    "age": 71,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Vanessa James",
                    "age": 70,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Matthew Wall",
                    "age": 14,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "David Fields",
                    "age": 90,
                    "sex": "female",
                    "relationship_code": "06"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 2,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "18",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "05",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 31,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Pigs",
                        "number": 13,
                        "livestock_code": "05"
                    },
                    {
                        "type": "Chickens",
                        "number": 27,
                        "livestock_code": "06"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 1,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Angelaville",
                "region": {
                    "name": "Upper East",
                    "code": "02"
                },
                "house_address": "023 Isaac Light\nManntown, MN 66327",
                "district": {
                    "name": "Collinsside",
                    "code": "0333"
                },
                "district_type": {
                    "name": "District",
                    "code": "27"
                },
                "locality": {
                    "name": "West Johnnybury",
                    "code": "6593"
                },
                "sub_district": "Edward Green",
                "NHIS_ECG_VRA_OtherNumber": "936-998-7085",
                "household_contacts": [
                    "(425)119-1331",
                    "448-258-6340x0502",
                    "+1-568-415-6176x648"
                ],
                "ea": {
                    "number": "491",
                    "type": "Rural"
                },
                "house_structure_number": "736",
                "household_number_within_house": "7",
                "residence_type": "Rural",
                "date_started": "2025-01-12",
                "date_completed": "2025-01-05",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Wesley Tyler",
                    "age": 85,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Matthew Lindsey",
                    "age": 72,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Frank Tyler",
                    "age": 26,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Tina Hernandez",
                    "age": 29,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Kathryn Campbell",
                    "age": 28,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Lisa Thornton",
                    "age": 74,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Cynthia Flores",
                    "age": 39,
                    "sex": "male",
                    "relationship_code": "11"
                }
            ],
            "absentees": [
                {
                    "name": "Sydney Fernandez",
                    "age": 36,
                    "sex": "male",
                    "destination": {
                        "town": "Lake Blake",
                        "region": "Volta",
                        "code": "10"
                    },
                    "months_absent": 3
                }
            ],
            "emigration": [
                {
                    "name": "Abigail Davis",
                    "age": 45,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "Germany",
                    "country_code": "17",
                    "year_of_departure": 2014,
                    "activity_abroad": "Student"
                },
                {
                    "name": "David Carr",
                    "age": 25,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "United States",
                    "country_code": "17",
                    "year_of_departure": 2000,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 1,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "30",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 9,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 1,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "New Michaelland",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "01"
                },
                "house_address": "2065 Richard Point Apt. 703\nWest Douglas, CO 48649",
                "district": {
                    "name": "Moorefort",
                    "code": "5402"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "50"
                },
                "locality": {
                    "name": "New Christianview",
                    "code": "3694"
                },
                "sub_district": "Green Locks",
                "NHIS_ECG_VRA_OtherNumber": "554-384-2758",
                "household_contacts": [
                    "330.900.7019x627"
                ],
                "ea": {
                    "number": "500",
                    "type": "Rural"
                },
                "house_structure_number": "649",
                "household_number_within_house": "19",
                "residence_type": "Urban",
                "date_started": "2025-01-02",
                "date_completed": "2025-01-03",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Dr. Crystal Silva",
                    "age": 95,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Devin Roach",
                    "age": 72,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Jennifer Williams",
                    "age": 81,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Mark Cole",
                    "age": 73,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Jennifer Thompson",
                    "age": 30,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Joel Padilla",
                    "age": 88,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Andrea Hobbs",
                    "age": 29,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Derek Stewart",
                    "age": 64,
                    "sex": "male",
                    "relationship_code": "01"
                }
            ],
            "absentees": [
                {
                    "name": "Ryan Todd",
                    "age": 31,
                    "sex": "female",
                    "destination": {
                        "town": "Kingview",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 4
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "James Gallagher",
                    "sex": "male",
                    "age": 54,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 2,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "24",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 19,
                        "livestock_code": "08"
                    },
                    {
                        "type": "Goats",
                        "number": 45,
                        "livestock_code": "01"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Rented",
                "ownership_type": "Other",
                "rooms": {
                    "total": 4,
                    "bedroom_count": 1,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 5
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Port Lisaton",
                "region": {
                    "name": "Upper East",
                    "code": "06"
                },
                "house_address": "55346 Douglas Orchard\nFrostside, VT 99331",
                "district": {
                    "name": "Nicoleside",
                    "code": "5014"
                },
                "district_type": {
                    "name": "District",
                    "code": "26"
                },
                "locality": {
                    "name": "West Nicholasfort",
                    "code": "1929"
                },
                "sub_district": "Melissa Valleys",
                "NHIS_ECG_VRA_OtherNumber": "390-890-9589",
                "household_contacts": [
                    "+1-241-838-3871x64031"
                ],
                "ea": {
                    "number": "288",
                    "type": "Rural"
                },
                "house_structure_number": "116",
                "household_number_within_house": "6",
                "residence_type": "Urban",
                "date_started": "2025-01-03",
                "date_completed": "2025-01-07",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Natalie Fitzgerald",
                    "age": 28,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Denise Walters",
                    "age": 67,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Sandra Myers",
                    "age": 30,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Ralph Armstrong",
                    "age": 100,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Christopher Ballard",
                    "age": 2,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Rachel Patel",
                    "age": 22,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Christie Reid",
                    "age": 63,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Oscar Smith",
                    "age": 22,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Frank Trevino",
                    "age": 7,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Christine Hernandez",
                    "age": 15,
                    "sex": "male",
                    "relationship_code": "07"
                }
            ],
            "absentees": [
                {
                    "name": "Michelle Edwards",
                    "age": 60,
                    "sex": "female",
                    "destination": {
                        "town": "New Tina",
                        "region": "Ashanti",
                        "code": "01"
                    },
                    "months_absent": 5
                },
                {
                    "name": "Mark Cummings",
                    "age": 56,
                    "sex": "female",
                    "destination": {
                        "town": "Lukeport",
                        "region": "Greater Accra",
                        "code": "08"
                    },
                    "months_absent": 11
                },
                {
                    "name": "Dorothy Fleming",
                    "age": 27,
                    "sex": "male",
                    "destination": {
                        "town": "Port Dianaside",
                        "region": "Greater Accra",
                        "code": "06"
                    },
                    "months_absent": 7
                }
            ],
            "emigration": [
                {
                    "name": "Stacy Chan",
                    "age": 38,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "United Kingdom",
                    "country_code": "18",
                    "year_of_departure": 2013,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Lisa Hoffman",
                    "age": 30,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "United States",
                    "country_code": "13",
                    "year_of_departure": 2005,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 3,
                    "female": 2
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "01",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "36",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "09",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 16,
                        "livestock_code": "08"
                    },
                    {
                        "type": "Goats",
                        "number": 29,
                        "livestock_code": "03"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Other",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 3,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "North Gary",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "02"
                },
                "house_address": "USNV Dunn\nFPO AP 01775",
                "district": {
                    "name": "West Shane",
                    "code": "2977"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "11"
                },
                "locality": {
                    "name": "North Douglasport",
                    "code": "3978"
                },
                "sub_district": "Dunn Ville",
                "NHIS_ECG_VRA_OtherNumber": "044-403-7715",
                "household_contacts": [
                    "537.543.4772",
                    "(230)571-8565"
                ],
                "ea": {
                    "number": "389",
                    "type": "Urban"
                },
                "house_structure_number": "275",
                "household_number_within_house": "5",
                "residence_type": "Urban",
                "date_started": "2025-01-10",
                "date_completed": "2025-01-02",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Sean Vaughn",
                    "age": 28,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Maria Foster",
                    "age": 60,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Patrick Villegas",
                    "age": 70,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Kristine Yu",
                    "age": 75,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Richard Wood",
                    "age": 2,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Mr. Thomas Brown",
                    "age": 70,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Michael Cooper",
                    "age": 47,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Frank Archer",
                    "age": 90,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Sean Simmons",
                    "age": 17,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Alison Church",
                    "age": 68,
                    "sex": "female",
                    "relationship_code": "02"
                }
            ],
            "absentees": [
                {
                    "name": "Amy Jones",
                    "age": 43,
                    "sex": "female",
                    "destination": {
                        "town": "South Juliemouth",
                        "region": "Ashanti",
                        "code": "07"
                    },
                    "months_absent": 5
                },
                {
                    "name": "Nicholas Pratt",
                    "age": 50,
                    "sex": "male",
                    "destination": {
                        "town": "Port Margaret",
                        "region": "Greater Accra",
                        "code": "06"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Joseph Adams",
                    "age": 48,
                    "sex": "female",
                    "destination": {
                        "town": "East Angelamouth",
                        "region": "Greater Accra",
                        "code": "10"
                    },
                    "months_absent": 2
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Mary Salazar",
                    "sex": "female",
                    "age": 33,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 2,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "38",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "41",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "30",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Thatch",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Private",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Kevinville",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "09"
                },
                "house_address": "748 Nicole Field\nNorth Brendaland, NH 82588",
                "district": {
                    "name": "Lopezchester",
                    "code": "9141"
                },
                "district_type": {
                    "name": "District",
                    "code": "14"
                },
                "locality": {
                    "name": "Williamsside",
                    "code": "2149"
                },
                "sub_district": "Sarah Alley",
                "NHIS_ECG_VRA_OtherNumber": "850-504-3470",
                "household_contacts": [
                    "162.725.1237",
                    "010-443-7530"
                ],
                "ea": {
                    "number": "181",
                    "type": "Urban"
                },
                "house_structure_number": "296",
                "household_number_within_house": "15",
                "residence_type": "Urban",
                "date_started": "2025-01-12",
                "date_completed": "2025-01-04",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Xavier Larson",
                    "age": 26,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Bethany Merritt",
                    "age": 1,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Sean Cook",
                    "age": 47,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Robert Wallace",
                    "age": 29,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Michael Murphy",
                    "age": 3,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Michael Bryan III",
                    "age": 93,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Adam Moody",
                    "age": 94,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Nathan Petty",
                    "age": 59,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Shaun Roth",
                    "age": 66,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Julie Henry",
                    "age": 79,
                    "sex": "female",
                    "relationship_code": "09"
                }
            ],
            "absentees": [
                {
                    "name": "Steven Johnson",
                    "age": 17,
                    "sex": "male",
                    "destination": {
                        "town": "Rebeccaton",
                        "region": "Greater Accra",
                        "code": "08"
                    },
                    "months_absent": 11
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 1,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "48",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "06",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 23,
                        "livestock_code": "05"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Cement",
                "roof": "Thatch",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 1,
                    "bedroom_count": 2,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Conniemouth",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "08"
                },
                "house_address": "4802 Cassidy Club\nLake Kelly, HI 69165",
                "district": {
                    "name": "Ryanfurt",
                    "code": "3653"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "43"
                },
                "locality": {
                    "name": "Lake Michelleborough",
                    "code": "3423"
                },
                "sub_district": "Emily Lane",
                "NHIS_ECG_VRA_OtherNumber": "570-806-2837",
                "household_contacts": [
                    "712-856-5468"
                ],
                "ea": {
                    "number": "168",
                    "type": "Urban"
                },
                "house_structure_number": "848",
                "household_number_within_house": "13",
                "residence_type": "Urban",
                "date_started": "2025-01-01",
                "date_completed": "2025-01-03",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Laura Long",
                    "age": 60,
                    "sex": "female",
                    "relationship_code": "02"
                }
            ],
            "absentees": [
                {
                    "name": "Kelly Kirby",
                    "age": 24,
                    "sex": "male",
                    "destination": {
                        "town": "North Brentfort",
                        "region": "Greater Accra",
                        "code": "07"
                    },
                    "months_absent": 5
                },
                {
                    "name": "Tracey Thompson",
                    "age": 60,
                    "sex": "female",
                    "destination": {
                        "town": "Robertberg",
                        "region": "Ashanti",
                        "code": "05"
                    },
                    "months_absent": 6
                }
            ],
            "emigration": [
                {
                    "name": "Duane Brown",
                    "age": 38,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "Canada",
                    "country_code": "11",
                    "year_of_departure": 2022,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Sheila Dalton",
                    "age": 22,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "United States",
                    "country_code": "12",
                    "year_of_departure": 2003,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 2,
                    "female": 4
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 35,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 1,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Dominguezland",
                "region": {
                    "name": "Eastern",
                    "code": "02"
                },
                "house_address": "806 Raymond Squares Suite 744\nFloresland, AL 38570",
                "district": {
                    "name": "East Christopher",
                    "code": "1395"
                },
                "district_type": {
                    "name": "District",
                    "code": "45"
                },
                "locality": {
                    "name": "Jacobsonberg",
                    "code": "3032"
                },
                "sub_district": "Camacho Canyon",
                "NHIS_ECG_VRA_OtherNumber": "996-877-7080",
                "household_contacts": [
                    "335-397-7422",
                    "001-201-036-9459",
                    "437.177.6850x955"
                ],
                "ea": {
                    "number": "499",
                    "type": "Rural"
                },
                "house_structure_number": "842",
                "household_number_within_house": "12",
                "residence_type": "Rural",
                "date_started": "2025-01-10",
                "date_completed": "2025-01-03",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Carol Downs",
                    "age": 13,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Mrs. Michelle Harris MD",
                    "age": 36,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Rachael Wall",
                    "age": 41,
                    "sex": "male",
                    "relationship_code": "09"
                }
            ],
            "absentees": [
                {
                    "name": "Tyler Moreno",
                    "age": 45,
                    "sex": "male",
                    "destination": {
                        "town": "Gabriellamouth",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 8
                },
                {
                    "name": "Kyle Gomez",
                    "age": 58,
                    "sex": "female",
                    "destination": {
                        "town": "Mooreburgh",
                        "region": "Ashanti",
                        "code": "07"
                    },
                    "months_absent": 7
                },
                {
                    "name": "Ryan Hughes",
                    "age": 56,
                    "sex": "male",
                    "destination": {
                        "town": "Lake Cynthiaburgh",
                        "region": "Greater Accra",
                        "code": "07"
                    },
                    "months_absent": 5
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Roy Patrick",
                    "sex": "female",
                    "age": 82,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 3,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "36",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "43",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "09",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 34,
                        "livestock_code": "09"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 1,
                    "bedroom_count": 1,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Amberfort",
                "region": {
                    "name": "Northern",
                    "code": "06"
                },
                "house_address": "Unit 2459 Box 3986\nDPO AE 16119",
                "district": {
                    "name": "East Patricia",
                    "code": "7693"
                },
                "district_type": {
                    "name": "District",
                    "code": "09"
                },
                "locality": {
                    "name": "Shannonstad",
                    "code": "8536"
                },
                "sub_district": "Rebecca Well",
                "NHIS_ECG_VRA_OtherNumber": "122-684-7283",
                "household_contacts": [
                    "435.235.7446",
                    "028.977.2355"
                ],
                "ea": {
                    "number": "56",
                    "type": "Urban"
                },
                "house_structure_number": "436",
                "household_number_within_house": "3",
                "residence_type": "Urban",
                "date_started": "2025-01-01",
                "date_completed": "2025-01-08",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Tammy Dodson",
                    "age": 76,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Brittany Jones",
                    "age": 80,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Crystal Richardson",
                    "age": 86,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Kristin Wilson",
                    "age": 80,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Kimberly Reeves",
                    "age": 27,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Michelle Patel",
                    "age": 81,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Robert Rogers",
                    "age": 56,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Anna Diaz",
                    "age": 89,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Timothy Hall",
                    "age": 75,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Amanda Harding",
                    "age": 3,
                    "sex": "male",
                    "relationship_code": "11"
                }
            ],
            "absentees": [
                {
                    "name": "Ashley Cannon",
                    "age": 37,
                    "sex": "male",
                    "destination": {
                        "town": "Port Troyfort",
                        "region": "Volta",
                        "code": "07"
                    },
                    "months_absent": 8
                },
                {
                    "name": "Elizabeth Lamb",
                    "age": 38,
                    "sex": "male",
                    "destination": {
                        "town": "Patrickland",
                        "region": "Volta",
                        "code": "04"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [
                {
                    "name": "Cynthia Chen",
                    "age": 35,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "19",
                    "year_of_departure": 2020,
                    "activity_abroad": "Employed"
                },
                {
                    "name": "Jennifer Charles",
                    "age": 28,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "United States",
                    "country_code": "11",
                    "year_of_departure": 2024,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 0,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "22",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 29,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Chickens",
                        "number": 44,
                        "livestock_code": "07"
                    },
                    {
                        "type": "Chickens",
                        "number": 8,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 7,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Bryanbury",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "07"
                },
                "house_address": "0180 Megan Forges\nNorth Matthew, IL 26299",
                "district": {
                    "name": "Kirkberg",
                    "code": "6295"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "16"
                },
                "locality": {
                    "name": "Frankbury",
                    "code": "5057"
                },
                "sub_district": "Deborah Mountains",
                "NHIS_ECG_VRA_OtherNumber": "036-384-0506",
                "household_contacts": [
                    "001-575-163-2218x338"
                ],
                "ea": {
                    "number": "322",
                    "type": "Urban"
                },
                "house_structure_number": "692",
                "household_number_within_house": "1",
                "residence_type": "Urban",
                "date_started": "2025-01-05",
                "date_completed": "2025-01-04",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Maria Webb",
                    "age": 24,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Rodney Sanders",
                    "age": 99,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Stephen Hall",
                    "age": 26,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Jon Shaw",
                    "age": 42,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Morgan Gutierrez",
                    "age": 15,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Mrs. Shelley Graham",
                    "age": 58,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Theresa Campbell",
                    "age": 0,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Cheryl Flores",
                    "age": 69,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Randy Lewis",
                    "age": 84,
                    "sex": "female",
                    "relationship_code": "06"
                }
            ],
            "absentees": [
                {
                    "name": "Steven Brooks",
                    "age": 43,
                    "sex": "male",
                    "destination": {
                        "town": "Danielburgh",
                        "region": "Ashanti",
                        "code": "10"
                    },
                    "months_absent": 10
                },
                {
                    "name": "Wesley Wong",
                    "age": 57,
                    "sex": "male",
                    "destination": {
                        "town": "Juanfurt",
                        "region": "Volta",
                        "code": "02"
                    },
                    "months_absent": 2
                },
                {
                    "name": "Catherine Gibson",
                    "age": 51,
                    "sex": "female",
                    "destination": {
                        "town": "South Scott",
                        "region": "Ashanti",
                        "code": "08"
                    },
                    "months_absent": 10
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 1,
                    "female": 4
                },
                "crops": [],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Cement Blocks",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 4,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 1,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Patriciaville",
                "region": {
                    "name": "Upper West",
                    "code": "07"
                },
                "house_address": "403 Smith Squares\nPort Timothyborough, AR 56200",
                "district": {
                    "name": "West Steven",
                    "code": "7462"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "33"
                },
                "locality": {
                    "name": "Cobbburgh",
                    "code": "5533"
                },
                "sub_district": "Carlos Track",
                "NHIS_ECG_VRA_OtherNumber": "747-171-3810",
                "household_contacts": [
                    "+1-412-103-9596x322",
                    "(458)863-1513",
                    "(286)280-9954"
                ],
                "ea": {
                    "number": "11",
                    "type": "Rural"
                },
                "house_structure_number": "647",
                "household_number_within_house": "12",
                "residence_type": "Rural",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-08",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Frank Torres",
                    "age": 7,
                    "sex": "female",
                    "relationship_code": "09"
                }
            ],
            "absentees": [
                {
                    "name": "Gina Mason",
                    "age": 48,
                    "sex": "male",
                    "destination": {
                        "town": "Graveschester",
                        "region": "Ashanti",
                        "code": "04"
                    },
                    "months_absent": 9
                }
            ],
            "emigration": [
                {
                    "name": "Rickey Barrett",
                    "age": 26,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "Germany",
                    "country_code": "14",
                    "year_of_departure": 2015,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [
                {
                    "name": "Christopher Oneill",
                    "sex": "female",
                    "age": 81,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 1,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "25",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "44",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "12",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 27,
                        "livestock_code": "07"
                    },
                    {
                        "type": "Goats",
                        "number": 35,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Wood",
                "floor": "Earth",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 10,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "West Jeanneview",
                "region": {
                    "name": "Upper East",
                    "code": "03"
                },
                "house_address": "85684 Castillo Pass\nNew Christopher, OK 47693",
                "district": {
                    "name": "West Jeremy",
                    "code": "8656"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "23"
                },
                "locality": {
                    "name": "Melaniemouth",
                    "code": "0249"
                },
                "sub_district": "Madeline Road",
                "NHIS_ECG_VRA_OtherNumber": "690-378-8373",
                "household_contacts": [
                    "(442)076-8841",
                    "488-801-9666"
                ],
                "ea": {
                    "number": "270",
                    "type": "Rural"
                },
                "house_structure_number": "396",
                "household_number_within_house": "14",
                "residence_type": "Urban",
                "date_started": "2025-01-08",
                "date_completed": "2025-01-05",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Joel French",
                    "age": 63,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Jeremiah Mcgee",
                    "age": 13,
                    "sex": "male",
                    "relationship_code": "06"
                }
            ],
            "absentees": [
                {
                    "name": "Luis Zimmerman",
                    "age": 38,
                    "sex": "male",
                    "destination": {
                        "town": "Kennethmouth",
                        "region": "Ashanti",
                        "code": "06"
                    },
                    "months_absent": 3
                },
                {
                    "name": "Michelle Floyd",
                    "age": 45,
                    "sex": "female",
                    "destination": {
                        "town": "South Joshuastad",
                        "region": "Greater Accra",
                        "code": "02"
                    },
                    "months_absent": 9
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Samantha Simmons",
                    "sex": "female",
                    "age": 19,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "45",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "07",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "30",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 8,
                        "livestock_code": "04"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 3,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Bradfordville",
                "region": {
                    "name": "Upper East",
                    "code": "01"
                },
                "house_address": "32467 Martin Springs\nGreenemouth, CA 51566",
                "district": {
                    "name": "Harrishaven",
                    "code": "9199"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "46"
                },
                "locality": {
                    "name": "Christinehaven",
                    "code": "5470"
                },
                "sub_district": "Hines Vista",
                "NHIS_ECG_VRA_OtherNumber": "780-255-1410",
                "household_contacts": [
                    "+1-935-236-5325x763"
                ],
                "ea": {
                    "number": "391",
                    "type": "Rural"
                },
                "house_structure_number": "439",
                "household_number_within_house": "17",
                "residence_type": "Rural",
                "date_started": "2025-01-03",
                "date_completed": "2025-01-09",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Timothy Ortiz",
                    "age": 69,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Gabrielle Garcia",
                    "age": 21,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Michael Mccormick",
                    "age": 52,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Carlos Lowe",
                    "age": 91,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Christopher Brown",
                    "age": 13,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Stephen Pierce",
                    "age": 10,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Sheri Farley",
                    "age": 79,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Latasha Oneal",
                    "age": 30,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Lance Powers",
                    "age": 77,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Lisa Williams",
                    "age": 77,
                    "sex": "male",
                    "relationship_code": "09"
                }
            ],
            "absentees": [
                {
                    "name": "Danny Riley",
                    "age": 22,
                    "sex": "female",
                    "destination": {
                        "town": "New Johnnychester",
                        "region": "Ashanti",
                        "code": "08"
                    },
                    "months_absent": 10
                },
                {
                    "name": "Scott Rodriguez",
                    "age": 38,
                    "sex": "female",
                    "destination": {
                        "town": "Sharonshire",
                        "region": "Ashanti",
                        "code": "02"
                    },
                    "months_absent": 4
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 5,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "16",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 42,
                        "livestock_code": "07"
                    },
                    {
                        "type": "Pigs",
                        "number": 15,
                        "livestock_code": "04"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 1,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Open Space",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Jensenberg",
                "region": {
                    "name": "Northern",
                    "code": "01"
                },
                "house_address": "9830 Mills Crescent Apt. 792\nKochfurt, MT 71453",
                "district": {
                    "name": "East Kathrynmouth",
                    "code": "8214"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "38"
                },
                "locality": {
                    "name": "New Pamelaview",
                    "code": "1842"
                },
                "sub_district": "Donaldson Islands",
                "NHIS_ECG_VRA_OtherNumber": "989-125-0118",
                "household_contacts": [
                    "001-987-389-6049x4078",
                    "056-100-7577x716",
                    "(045)007-0948x603"
                ],
                "ea": {
                    "number": "162",
                    "type": "Rural"
                },
                "house_structure_number": "517",
                "household_number_within_house": "8",
                "residence_type": "Rural",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-07",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Maurice Bird",
                    "age": 38,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Krista Taylor",
                    "age": 58,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Caitlyn Diaz MD",
                    "age": 25,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Dr. Katherine Navarro",
                    "age": 19,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Jeremy Beasley",
                    "age": 7,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Jennifer Williams",
                    "age": 90,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Ronald Boyer",
                    "age": 19,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Denise Osborne",
                    "age": 63,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Aaron Sparks",
                    "age": 86,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Patricia Prince",
                    "age": 34,
                    "sex": "female",
                    "relationship_code": "08"
                }
            ],
            "absentees": [
                {
                    "name": "Benjamin Lara",
                    "age": 58,
                    "sex": "female",
                    "destination": {
                        "town": "Sanchezview",
                        "region": "Ashanti",
                        "code": "07"
                    },
                    "months_absent": 4
                }
            ],
            "emigration": [
                {
                    "name": "Timothy Young",
                    "age": 18,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "United States",
                    "country_code": "22",
                    "year_of_departure": 2014,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Joshua Gray",
                    "age": 24,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "Nigeria",
                    "country_code": "12",
                    "year_of_departure": 2006,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 2,
                    "female": 2
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "17",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "23",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "10",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 32,
                        "livestock_code": "08"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "New Davidfurt",
                "region": {
                    "name": "Volta",
                    "code": "02"
                },
                "house_address": "843 Cameron Underpass Suite 004\nLake Troy, TX 54405",
                "district": {
                    "name": "Lozanostad",
                    "code": "4946"
                },
                "district_type": {
                    "name": "District",
                    "code": "28"
                },
                "locality": {
                    "name": "Kevinville",
                    "code": "3505"
                },
                "sub_district": "Stewart Knolls",
                "NHIS_ECG_VRA_OtherNumber": "821-545-6791",
                "household_contacts": [
                    "(966)273-1441x94124"
                ],
                "ea": {
                    "number": "454",
                    "type": "Rural"
                },
                "house_structure_number": "784",
                "household_number_within_house": "10",
                "residence_type": "Urban",
                "date_started": "2025-01-08",
                "date_completed": "2025-01-02",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Jenny Douglas",
                    "age": 62,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Christina Mason",
                    "age": 73,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Steven Brady",
                    "age": 10,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Nathan Nunez",
                    "age": 46,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Paul Martin",
                    "age": 88,
                    "sex": "male",
                    "relationship_code": "07"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "48",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 35,
                        "livestock_code": "07"
                    },
                    {
                        "type": "Goats",
                        "number": 34,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Chickens",
                        "number": 35,
                        "livestock_code": "08"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Cement",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Other",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 1,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "North Alexanderfurt",
                "region": {
                    "name": "Central",
                    "code": "04"
                },
                "house_address": "PSC 8503, Box 4366\nAPO AA 11356",
                "district": {
                    "name": "Barbarashire",
                    "code": "1412"
                },
                "district_type": {
                    "name": "District",
                    "code": "07"
                },
                "locality": {
                    "name": "Cindyside",
                    "code": "1267"
                },
                "sub_district": "Kyle Extensions",
                "NHIS_ECG_VRA_OtherNumber": "806-883-9531",
                "household_contacts": [
                    "+1-865-656-6555x98800",
                    "566-157-8026x662",
                    "7565983816"
                ],
                "ea": {
                    "number": "188",
                    "type": "Rural"
                },
                "house_structure_number": "941",
                "household_number_within_house": "7",
                "residence_type": "Urban",
                "date_started": "2025-01-01",
                "date_completed": "2025-01-07",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Sharon Graves DVM",
                    "age": 74,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Ashley Lawson",
                    "age": 53,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Stephen Maldonado",
                    "age": 56,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Sean Herrera",
                    "age": 40,
                    "sex": "female",
                    "relationship_code": "05"
                }
            ],
            "absentees": [],
            "emigration": [
                {
                    "name": "Virginia Ramirez",
                    "age": 16,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "Germany",
                    "country_code": "12",
                    "year_of_departure": 2020,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 2,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "03",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "34",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "40",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 21,
                        "livestock_code": "10"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 1,
                    "bedroom_count": 3,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Gregoryborough",
                "region": {
                    "name": "Greater Accra",
                    "code": "02"
                },
                "house_address": "58106 Steven Fort Apt. 023\nNew George, TN 84914",
                "district": {
                    "name": "Blackchester",
                    "code": "5743"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "02"
                },
                "locality": {
                    "name": "Romeroton",
                    "code": "5262"
                },
                "sub_district": "Rose Road",
                "NHIS_ECG_VRA_OtherNumber": "794-735-9111",
                "household_contacts": [
                    "(935)634-1719"
                ],
                "ea": {
                    "number": "269",
                    "type": "Urban"
                },
                "house_structure_number": "263",
                "household_number_within_house": "10",
                "residence_type": "Rural",
                "date_started": "2025-01-09",
                "date_completed": "2025-01-10",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Theresa Rivera",
                    "age": 45,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Carrie Wilson",
                    "age": 9,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Tammy Stewart",
                    "age": 15,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Jeffrey Green",
                    "age": 25,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Angela Murphy",
                    "age": 71,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Jonathan Bradley",
                    "age": 10,
                    "sex": "male",
                    "relationship_code": "03"
                }
            ],
            "absentees": [
                {
                    "name": "Marissa Griffith",
                    "age": 42,
                    "sex": "female",
                    "destination": {
                        "town": "North Lauren",
                        "region": "Greater Accra",
                        "code": "07"
                    },
                    "months_absent": 3
                },
                {
                    "name": "Tami Holloway",
                    "age": 31,
                    "sex": "male",
                    "destination": {
                        "town": "Rachelbury",
                        "region": "Ashanti",
                        "code": "04"
                    },
                    "months_absent": 5
                }
            ],
            "emigration": [
                {
                    "name": "Mark Henderson DDS",
                    "age": 43,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "United States",
                    "country_code": "19",
                    "year_of_departure": 2001,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 4,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "01",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "43",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "09",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Other",
                "rooms": {
                    "total": 1,
                    "bedroom_count": 3,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 5
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Louiston",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "05"
                },
                "house_address": "Unit 7648 Box 1100\nDPO AA 67769",
                "district": {
                    "name": "Michaelchester",
                    "code": "7251"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "28"
                },
                "locality": {
                    "name": "Leahport",
                    "code": "4344"
                },
                "sub_district": "Payne Point",
                "NHIS_ECG_VRA_OtherNumber": "518-260-6789",
                "household_contacts": [
                    "+1-770-372-4770",
                    "(876)665-5983",
                    "(729)264-5648x382"
                ],
                "ea": {
                    "number": "172",
                    "type": "Urban"
                },
                "house_structure_number": "199",
                "household_number_within_house": "5",
                "residence_type": "Urban",
                "date_started": "2025-01-05",
                "date_completed": "2025-01-01",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Emily Brown",
                    "age": 83,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Mary Lewis",
                    "age": 9,
                    "sex": "female",
                    "relationship_code": "08"
                }
            ],
            "absentees": [
                {
                    "name": "Ariel Lawrence",
                    "age": 19,
                    "sex": "female",
                    "destination": {
                        "town": "Dustinview",
                        "region": "Ashanti",
                        "code": "04"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [
                {
                    "name": "Bobby Sawyer",
                    "age": 40,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Canada",
                    "country_code": "15",
                    "year_of_departure": 2012,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 5,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "22",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "45",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 30,
                        "livestock_code": "08"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Other",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 1,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "West Rachel",
                "region": {
                    "name": "Eastern",
                    "code": "05"
                },
                "house_address": "17896 Natalie Trail\nSouth Kaitlynhaven, KS 85128",
                "district": {
                    "name": "Brentville",
                    "code": "8408"
                },
                "district_type": {
                    "name": "District",
                    "code": "36"
                },
                "locality": {
                    "name": "North Carol",
                    "code": "5286"
                },
                "sub_district": "Bailey Causeway",
                "NHIS_ECG_VRA_OtherNumber": "767-973-1003",
                "household_contacts": [
                    "+1-167-950-1715x7155"
                ],
                "ea": {
                    "number": "1",
                    "type": "Rural"
                },
                "house_structure_number": "560",
                "household_number_within_house": "6",
                "residence_type": "Rural",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-10",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Richard Delgado",
                    "age": 63,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Terry Miller",
                    "age": 73,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "David Gonzalez",
                    "age": 39,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Matthew Paul",
                    "age": 37,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Michelle Brooks",
                    "age": 6,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Zachary White",
                    "age": 57,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Kimberly Wise",
                    "age": 15,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Jason Montoya",
                    "age": 71,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Joseph Potts",
                    "age": 84,
                    "sex": "male",
                    "relationship_code": "04"
                }
            ],
            "absentees": [
                {
                    "name": "Susan Hunt",
                    "age": 52,
                    "sex": "female",
                    "destination": {
                        "town": "West Melissashire",
                        "region": "Greater Accra",
                        "code": "10"
                    },
                    "months_absent": 1
                },
                {
                    "name": "Megan Watts",
                    "age": 21,
                    "sex": "female",
                    "destination": {
                        "town": "Sherriton",
                        "region": "Volta",
                        "code": "01"
                    },
                    "months_absent": 12
                },
                {
                    "name": "Brad Waters",
                    "age": 55,
                    "sex": "female",
                    "destination": {
                        "town": "Jennifermouth",
                        "region": "Ashanti",
                        "code": "10"
                    },
                    "months_absent": 10
                }
            ],
            "emigration": [
                {
                    "name": "Jessica Lozano",
                    "age": 45,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "Canada",
                    "country_code": "16",
                    "year_of_departure": 2015,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [
                {
                    "name": "Erin Cabrera",
                    "sex": "male",
                    "age": 31,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 0,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "50",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 17,
                        "livestock_code": "10"
                    },
                    {
                        "type": "Pigs",
                        "number": 30,
                        "livestock_code": "03"
                    },
                    {
                        "type": "Goats",
                        "number": 42,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Other",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Lake Emilyview",
                "region": {
                    "name": "Upper East",
                    "code": "04"
                },
                "house_address": "1692 Payne Pine\nNorth Scott, TX 68181",
                "district": {
                    "name": "Bullockmouth",
                    "code": "0568"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "50"
                },
                "locality": {
                    "name": "Johnsonfurt",
                    "code": "1893"
                },
                "sub_district": "Timothy Ville",
                "NHIS_ECG_VRA_OtherNumber": "408-254-8569",
                "household_contacts": [
                    "331.124.2867"
                ],
                "ea": {
                    "number": "371",
                    "type": "Urban"
                },
                "house_structure_number": "55",
                "household_number_within_house": "15",
                "residence_type": "Urban",
                "date_started": "2025-01-08",
                "date_completed": "2025-01-01",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Brian Floyd",
                    "age": 7,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Melissa Dominguez",
                    "age": 81,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Joseph Burnett",
                    "age": 100,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Amanda Banks",
                    "age": 94,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Daniel Harris",
                    "age": 54,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Tammy Lee",
                    "age": 68,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Thomas Wheeler",
                    "age": 3,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Jason Williams",
                    "age": 34,
                    "sex": "male",
                    "relationship_code": "02"
                }
            ],
            "absentees": [
                {
                    "name": "Jordan Hughes",
                    "age": 40,
                    "sex": "female",
                    "destination": {
                        "town": "Arroyobury",
                        "region": "Greater Accra",
                        "code": "10"
                    },
                    "months_absent": 12
                },
                {
                    "name": "Andrew Johnson",
                    "age": 57,
                    "sex": "male",
                    "destination": {
                        "town": "South Melissafurt",
                        "region": "Greater Accra",
                        "code": "08"
                    },
                    "months_absent": 12
                }
            ],
            "emigration": [
                {
                    "name": "Julia Osborne",
                    "age": 40,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "Germany",
                    "country_code": "21",
                    "year_of_departure": 2021,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Connie Farmer",
                    "sex": "female",
                    "age": 97,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 2,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "01",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "20",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Other",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Thomasport",
                "region": {
                    "name": "Ashanti",
                    "code": "10"
                },
                "house_address": "910 Mills Forge Suite 454\nSouth Nataliemouth, KS 90004",
                "district": {
                    "name": "Port Daniel",
                    "code": "0086"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "24"
                },
                "locality": {
                    "name": "South Donnafurt",
                    "code": "3268"
                },
                "sub_district": "Villarreal Gardens",
                "NHIS_ECG_VRA_OtherNumber": "188-487-8247",
                "household_contacts": [
                    "+1-316-353-3982x58344"
                ],
                "ea": {
                    "number": "121",
                    "type": "Rural"
                },
                "house_structure_number": "812",
                "household_number_within_house": "14",
                "residence_type": "Rural",
                "date_started": "2025-01-09",
                "date_completed": "2025-01-09",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Joshua Sanchez",
                    "age": 58,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "John Clark",
                    "age": 0,
                    "sex": "female",
                    "relationship_code": "10"
                }
            ],
            "absentees": [
                {
                    "name": "William Rose",
                    "age": 53,
                    "sex": "male",
                    "destination": {
                        "town": "Graytown",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 4
                },
                {
                    "name": "Kimberly Garcia",
                    "age": 41,
                    "sex": "male",
                    "destination": {
                        "town": "Lake Peter",
                        "region": "Greater Accra",
                        "code": "01"
                    },
                    "months_absent": 7
                },
                {
                    "name": "Jonathan Miller",
                    "age": 40,
                    "sex": "male",
                    "destination": {
                        "town": "Caseystad",
                        "region": "Greater Accra",
                        "code": "06"
                    },
                    "months_absent": 6
                }
            ],
            "emigration": [
                {
                    "name": "Christine Jackson",
                    "age": 26,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "14",
                    "year_of_departure": 2017,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 5,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "32",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 19,
                        "livestock_code": "09"
                    },
                    {
                        "type": "Goats",
                        "number": 30,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Wood",
                "floor": "Earth",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 10,
                    "bedroom_count": 1,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 5
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Sarahborough",
                "region": {
                    "name": "Western",
                    "code": "03"
                },
                "house_address": "56576 Gabrielle Parks Apt. 818\nSouth Lori, CT 30735",
                "district": {
                    "name": "North Matthew",
                    "code": "2242"
                },
                "district_type": {
                    "name": "District",
                    "code": "31"
                },
                "locality": {
                    "name": "Lambertville",
                    "code": "7920"
                },
                "sub_district": "Wright Valley",
                "NHIS_ECG_VRA_OtherNumber": "576-497-4243",
                "household_contacts": [
                    "5227897031"
                ],
                "ea": {
                    "number": "85",
                    "type": "Rural"
                },
                "house_structure_number": "533",
                "household_number_within_house": "9",
                "residence_type": "Urban",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-01",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Wayne Franco",
                    "age": 25,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Jacob Cunningham",
                    "age": 56,
                    "sex": "male",
                    "relationship_code": "07"
                }
            ],
            "absentees": [
                {
                    "name": "Elizabeth Griffin",
                    "age": 54,
                    "sex": "female",
                    "destination": {
                        "town": "Port Elijahberg",
                        "region": "Greater Accra",
                        "code": "04"
                    },
                    "months_absent": 10
                },
                {
                    "name": "Elaine Hogan",
                    "age": 56,
                    "sex": "female",
                    "destination": {
                        "town": "Armstrongburgh",
                        "region": "Ashanti",
                        "code": "05"
                    },
                    "months_absent": 11
                },
                {
                    "name": "David Kent",
                    "age": 25,
                    "sex": "female",
                    "destination": {
                        "town": "Delacruzmouth",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 6
                }
            ],
            "emigration": [
                {
                    "name": "David Martin",
                    "age": 60,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "Germany",
                    "country_code": "16",
                    "year_of_departure": 2010,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 3,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "49",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "20",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "36",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 50,
                        "livestock_code": "05"
                    },
                    {
                        "type": "Chickens",
                        "number": 3,
                        "livestock_code": "09"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 4,
                    "bedroom_count": 3,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Lake George",
                "region": {
                    "name": "Eastern",
                    "code": "02"
                },
                "house_address": "600 Jessica Rue\nPattersonborough, TN 17270",
                "district": {
                    "name": "Grosschester",
                    "code": "6958"
                },
                "district_type": {
                    "name": "District",
                    "code": "30"
                },
                "locality": {
                    "name": "Johnmouth",
                    "code": "2616"
                },
                "sub_district": "Lewis Spurs",
                "NHIS_ECG_VRA_OtherNumber": "402-198-8839",
                "household_contacts": [
                    "001-138-477-9535x6323",
                    "+1-465-973-0891x0033",
                    "+1-658-797-3128"
                ],
                "ea": {
                    "number": "339",
                    "type": "Urban"
                },
                "house_structure_number": "365",
                "household_number_within_house": "20",
                "residence_type": "Rural",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-07",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Timothy Lewis",
                    "age": 77,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Jason Sellers",
                    "age": 35,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Donald Moran",
                    "age": 47,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Jason Shepherd",
                    "age": 54,
                    "sex": "male",
                    "relationship_code": "08"
                }
            ],
            "absentees": [],
            "emigration": [
                {
                    "name": "Victoria Cowan",
                    "age": 15,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "Nigeria",
                    "country_code": "22",
                    "year_of_departure": 2016,
                    "activity_abroad": "Employed"
                },
                {
                    "name": "Emily Anderson",
                    "age": 45,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "United States",
                    "country_code": "18",
                    "year_of_departure": 2024,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 4,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "06",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "12",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "42",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 37,
                        "livestock_code": "02"
                    },
                    {
                        "type": "Sheep",
                        "number": 4,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Lake Cynthiafort",
                "region": {
                    "name": "Volta",
                    "code": "10"
                },
                "house_address": "91453 Robert Locks\nPort Christinemouth, KY 61053",
                "district": {
                    "name": "Gordonfurt",
                    "code": "7239"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "02"
                },
                "locality": {
                    "name": "North Marissaport",
                    "code": "4441"
                },
                "sub_district": "Joseph Heights",
                "NHIS_ECG_VRA_OtherNumber": "461-295-7494",
                "household_contacts": [
                    "(944)078-8104x644",
                    "1955462842"
                ],
                "ea": {
                    "number": "1",
                    "type": "Rural"
                },
                "house_structure_number": "750",
                "household_number_within_house": "6",
                "residence_type": "Rural",
                "date_started": "2025-01-12",
                "date_completed": "2025-01-05",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Jeffrey Collins",
                    "age": 4,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Carl Reed",
                    "age": 92,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Melissa Thomas",
                    "age": 11,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Kristina Nguyen",
                    "age": 97,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Michael Baker",
                    "age": 40,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "James Sexton",
                    "age": 48,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Laura Smith",
                    "age": 49,
                    "sex": "male",
                    "relationship_code": "10"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [
                {
                    "name": "Patricia Lane",
                    "sex": "male",
                    "age": 66,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 0,
                    "female": 2
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "26",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "38",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 12,
                        "livestock_code": "09"
                    },
                    {
                        "type": "Sheep",
                        "number": 37,
                        "livestock_code": "10"
                    },
                    {
                        "type": "Pigs",
                        "number": 6,
                        "livestock_code": "03"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 2,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Shared Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "New Aaronview",
                "region": {
                    "name": "Northern",
                    "code": "09"
                },
                "house_address": "00581 Munoz Inlet\nSouth Dawn, TX 65148",
                "district": {
                    "name": "East Melissastad",
                    "code": "4878"
                },
                "district_type": {
                    "name": "District",
                    "code": "32"
                },
                "locality": {
                    "name": "New Kyleview",
                    "code": "2614"
                },
                "sub_district": "Mary Parkways",
                "NHIS_ECG_VRA_OtherNumber": "076-145-6593",
                "household_contacts": [
                    "001-565-320-6885x468",
                    "+1-549-848-1932",
                    "+1-556-142-4394x78934"
                ],
                "ea": {
                    "number": "91",
                    "type": "Urban"
                },
                "house_structure_number": "806",
                "household_number_within_house": "12",
                "residence_type": "Urban",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-02",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Jeffrey Hunt",
                    "age": 44,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "David Li",
                    "age": 47,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Kimberly Robles",
                    "age": 84,
                    "sex": "male",
                    "relationship_code": "10"
                }
            ],
            "absentees": [
                {
                    "name": "Christopher Campbell",
                    "age": 52,
                    "sex": "male",
                    "destination": {
                        "town": "North Cynthiaport",
                        "region": "Volta",
                        "code": "06"
                    },
                    "months_absent": 9
                }
            ],
            "emigration": [
                {
                    "name": "Jennifer Gutierrez",
                    "age": 34,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "Germany",
                    "country_code": "11",
                    "year_of_departure": 2009,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 1,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "16",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "41",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "01",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 27,
                        "livestock_code": "09"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Other",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "South Raymond",
                "region": {
                    "name": "Central",
                    "code": "10"
                },
                "house_address": "8532 Pope Track Apt. 170\nWest Kimberly, AR 42731",
                "district": {
                    "name": "South Lynnmouth",
                    "code": "4434"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "03"
                },
                "locality": {
                    "name": "Whiteton",
                    "code": "9471"
                },
                "sub_district": "Herrera Forest",
                "NHIS_ECG_VRA_OtherNumber": "172-642-7720",
                "household_contacts": [
                    "(059)368-6789x7646",
                    "001-228-448-9376",
                    "454.479.6945"
                ],
                "ea": {
                    "number": "9",
                    "type": "Urban"
                },
                "house_structure_number": "731",
                "household_number_within_house": "12",
                "residence_type": "Rural",
                "date_started": "2025-01-01",
                "date_completed": "2025-01-05",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Micheal Smith",
                    "age": 32,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Veronica Wheeler",
                    "age": 43,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "David Valenzuela",
                    "age": 32,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Anthony Owens",
                    "age": 26,
                    "sex": "male",
                    "relationship_code": "11"
                }
            ],
            "absentees": [
                {
                    "name": "Daniel Robertson",
                    "age": 22,
                    "sex": "male",
                    "destination": {
                        "town": "Port Stephanie",
                        "region": "Volta",
                        "code": "02"
                    },
                    "months_absent": 7
                },
                {
                    "name": "Sarah Ford",
                    "age": 53,
                    "sex": "male",
                    "destination": {
                        "town": "Burnetttown",
                        "region": "Ashanti",
                        "code": "05"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 4,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "25",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "01",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "03",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 3,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "North Jacob",
                "region": {
                    "name": "Upper East",
                    "code": "01"
                },
                "house_address": "80256 Garcia Drive\nEast Heidifurt, IL 04538",
                "district": {
                    "name": "Stephanieborough",
                    "code": "5805"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "32"
                },
                "locality": {
                    "name": "Port Jaredshire",
                    "code": "6702"
                },
                "sub_district": "Williams Drives",
                "NHIS_ECG_VRA_OtherNumber": "697-070-3242",
                "household_contacts": [
                    "(141)355-8551x343",
                    "(976)685-4853x76179"
                ],
                "ea": {
                    "number": "352",
                    "type": "Rural"
                },
                "house_structure_number": "120",
                "household_number_within_house": "16",
                "residence_type": "Urban",
                "date_started": "2025-01-09",
                "date_completed": "2025-01-10",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Regina Vega",
                    "age": 74,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Ryan Johnson",
                    "age": 12,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Amanda Molina",
                    "age": 31,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Michele Chavez",
                    "age": 61,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Robert Hebert",
                    "age": 0,
                    "sex": "female",
                    "relationship_code": "09"
                }
            ],
            "absentees": [
                {
                    "name": "Katrina Flores",
                    "age": 46,
                    "sex": "female",
                    "destination": {
                        "town": "Juanshire",
                        "region": "Ashanti",
                        "code": "01"
                    },
                    "months_absent": 12
                }
            ],
            "emigration": [
                {
                    "name": "Jason Freeman",
                    "age": 58,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "Nigeria",
                    "country_code": "11",
                    "year_of_departure": 2022,
                    "activity_abroad": "Student"
                },
                {
                    "name": "Randall Torres",
                    "age": 40,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "22",
                    "year_of_departure": 2017,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 2,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "34",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "45",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "40",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 21,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Pigs",
                        "number": 32,
                        "livestock_code": "08"
                    },
                    {
                        "type": "Sheep",
                        "number": 21,
                        "livestock_code": "09"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 1,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Shared Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "South Ryan",
                "region": {
                    "name": "Upper East",
                    "code": "07"
                },
                "house_address": "65426 Roberts Station Suite 203\nDaniellestad, CO 87837",
                "district": {
                    "name": "North Richard",
                    "code": "9534"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "46"
                },
                "locality": {
                    "name": "East Anthonyport",
                    "code": "7883"
                },
                "sub_district": "Tonya Street",
                "NHIS_ECG_VRA_OtherNumber": "542-449-1135",
                "household_contacts": [
                    "+1-635-001-1219x0242"
                ],
                "ea": {
                    "number": "400",
                    "type": "Urban"
                },
                "house_structure_number": "886",
                "household_number_within_house": "13",
                "residence_type": "Urban",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-04",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Vicki Mclaughlin",
                    "age": 30,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Mrs. Sue Adams",
                    "age": 90,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Robert Price",
                    "age": 62,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Rebecca Castaneda",
                    "age": 60,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Karen Alvarez",
                    "age": 73,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Larry Richmond",
                    "age": 66,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Jamie Miller",
                    "age": 33,
                    "sex": "female",
                    "relationship_code": "02"
                }
            ],
            "absentees": [
                {
                    "name": "Crystal Brown",
                    "age": 31,
                    "sex": "male",
                    "destination": {
                        "town": "New Sarahton",
                        "region": "Volta",
                        "code": "07"
                    },
                    "months_absent": 12
                }
            ],
            "emigration": [
                {
                    "name": "Stephanie Gray",
                    "age": 21,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "13",
                    "year_of_departure": 2009,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Makayla Wright",
                    "age": 49,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "Nigeria",
                    "country_code": "20",
                    "year_of_departure": 2025,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Jessica Butler",
                    "sex": "male",
                    "age": 56,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 2,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "25",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "48",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "49",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 47,
                        "livestock_code": "08"
                    },
                    {
                        "type": "Goats",
                        "number": 13,
                        "livestock_code": "03"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Government",
                "rooms": {
                    "total": 7,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Port Ricardoside",
                "region": {
                    "name": "Northern",
                    "code": "08"
                },
                "house_address": "16363 Kayla Circles Apt. 634\nJessicaville, VA 88804",
                "district": {
                    "name": "Lake Cameronshire",
                    "code": "0938"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "04"
                },
                "locality": {
                    "name": "Bradleyside",
                    "code": "2612"
                },
                "sub_district": "Graves Circles",
                "NHIS_ECG_VRA_OtherNumber": "490-741-9240",
                "household_contacts": [
                    "+1-626-853-5536",
                    "972.132.6802x46467",
                    "584-464-6268"
                ],
                "ea": {
                    "number": "442",
                    "type": "Rural"
                },
                "house_structure_number": "194",
                "household_number_within_house": "17",
                "residence_type": "Rural",
                "date_started": "2025-01-05",
                "date_completed": "2025-01-06",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Lori Gray",
                    "age": 0,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "David Jackson",
                    "age": 40,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Ralph White",
                    "age": 4,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Austin Walter",
                    "age": 88,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Jesse Luna",
                    "age": 55,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Lee Brown",
                    "age": 22,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Linda Nguyen",
                    "age": 59,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Sydney Barrett",
                    "age": 90,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Katrina Taylor",
                    "age": 57,
                    "sex": "male",
                    "relationship_code": "11"
                }
            ],
            "absentees": [],
            "emigration": [
                {
                    "name": "Matthew Santana",
                    "age": 55,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Canada",
                    "country_code": "22",
                    "year_of_departure": 2019,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 5
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 44,
                        "livestock_code": "01"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Other",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 1,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Samanthaville",
                "region": {
                    "name": "Northern",
                    "code": "04"
                },
                "house_address": "865 Norman Haven\nWest Zacharychester, SD 55515",
                "district": {
                    "name": "Valerieborough",
                    "code": "6291"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "31"
                },
                "locality": {
                    "name": "East Kelly",
                    "code": "6254"
                },
                "sub_district": "Danielle Forge",
                "NHIS_ECG_VRA_OtherNumber": "184-386-2170",
                "household_contacts": [
                    "(464)167-7461x7986"
                ],
                "ea": {
                    "number": "62",
                    "type": "Urban"
                },
                "house_structure_number": "351",
                "household_number_within_house": "15",
                "residence_type": "Urban",
                "date_started": "2025-01-10",
                "date_completed": "2025-01-11",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Jose Waters",
                    "age": 31,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Jeremy Perez",
                    "age": 53,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "James Carter",
                    "age": 94,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Gary Potter",
                    "age": 10,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Phillip Kirk",
                    "age": 41,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Steven Moore",
                    "age": 49,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Charles Proctor",
                    "age": 40,
                    "sex": "male",
                    "relationship_code": "04"
                }
            ],
            "absentees": [
                {
                    "name": "Robert Hoffman",
                    "age": 28,
                    "sex": "male",
                    "destination": {
                        "town": "Simmonsville",
                        "region": "Greater Accra",
                        "code": "09"
                    },
                    "months_absent": 6
                }
            ],
            "emigration": [
                {
                    "name": "Karen Clark",
                    "age": 19,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "United Kingdom",
                    "country_code": "13",
                    "year_of_departure": 2001,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 0,
                    "female": 0
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 8,
                        "livestock_code": "02"
                    },
                    {
                        "type": "Goats",
                        "number": 38,
                        "livestock_code": "06"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 7,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 1,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Villanuevafort",
                "region": {
                    "name": "Upper West",
                    "code": "05"
                },
                "house_address": "72888 Sarah Cove Suite 241\nManningport, AR 73624",
                "district": {
                    "name": "East Joshuaport",
                    "code": "8796"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "22"
                },
                "locality": {
                    "name": "Lake Daniel",
                    "code": "5144"
                },
                "sub_district": "Jonathan Hills",
                "NHIS_ECG_VRA_OtherNumber": "841-124-1435",
                "household_contacts": [
                    "979-544-0363x274"
                ],
                "ea": {
                    "number": "497",
                    "type": "Rural"
                },
                "house_structure_number": "556",
                "household_number_within_house": "13",
                "residence_type": "Urban",
                "date_started": "2025-01-01",
                "date_completed": "2025-01-11",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Janet Sanford",
                    "age": 11,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Carol Bell",
                    "age": 56,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Kevin Zimmerman",
                    "age": 72,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Jason Osborne",
                    "age": 75,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Daniel Jones",
                    "age": 4,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Donald Thompson",
                    "age": 86,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Jacob Hill",
                    "age": 17,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Michael Odom",
                    "age": 38,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Gerald Bell",
                    "age": 78,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Eric Guzman",
                    "age": 44,
                    "sex": "female",
                    "relationship_code": "10"
                }
            ],
            "absentees": [
                {
                    "name": "David Wilkins",
                    "age": 15,
                    "sex": "female",
                    "destination": {
                        "town": "New Jack",
                        "region": "Ashanti",
                        "code": "02"
                    },
                    "months_absent": 3
                },
                {
                    "name": "Robert Ross",
                    "age": 53,
                    "sex": "female",
                    "destination": {
                        "town": "Alexhaven",
                        "region": "Volta",
                        "code": "06"
                    },
                    "months_absent": 5
                }
            ],
            "emigration": [
                {
                    "name": "Chase Williams",
                    "age": 51,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Germany",
                    "country_code": "14",
                    "year_of_departure": 2020,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Jennifer Oliver",
                    "age": 41,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "Nigeria",
                    "country_code": "22",
                    "year_of_departure": 2021,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 5
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 27,
                        "livestock_code": "04"
                    },
                    {
                        "type": "Sheep",
                        "number": 50,
                        "livestock_code": "08"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Rented",
                "ownership_type": "Other",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "East Larryton",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "03"
                },
                "house_address": "23747 Travis Plaza Apt. 601\nSouth Audreyview, WI 91052",
                "district": {
                    "name": "East Kimberlytown",
                    "code": "2147"
                },
                "district_type": {
                    "name": "District",
                    "code": "43"
                },
                "locality": {
                    "name": "Kaylamouth",
                    "code": "8206"
                },
                "sub_district": "Scott Lake",
                "NHIS_ECG_VRA_OtherNumber": "682-644-1191",
                "household_contacts": [
                    "(255)757-3923",
                    "+1-880-676-0340x6784",
                    "+1-976-694-6360x032"
                ],
                "ea": {
                    "number": "46",
                    "type": "Urban"
                },
                "house_structure_number": "683",
                "household_number_within_house": "5",
                "residence_type": "Urban",
                "date_started": "2025-01-03",
                "date_completed": "2025-01-06",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "James Castaneda",
                    "age": 27,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Andrew Larson",
                    "age": 82,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Christopher Carroll",
                    "age": 79,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Latasha Bowman",
                    "age": 44,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Veronica Nguyen",
                    "age": 62,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Patricia Patel",
                    "age": 18,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Kimberly Frank",
                    "age": 88,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Robert Jacobson",
                    "age": 92,
                    "sex": "male",
                    "relationship_code": "02"
                }
            ],
            "absentees": [
                {
                    "name": "Charles Hernandez",
                    "age": 20,
                    "sex": "female",
                    "destination": {
                        "town": "West Johnhaven",
                        "region": "Ashanti",
                        "code": "06"
                    },
                    "months_absent": 2
                }
            ],
            "emigration": [
                {
                    "name": "Shane Hensley",
                    "age": 36,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "Nigeria",
                    "country_code": "16",
                    "year_of_departure": 2008,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 3,
                    "female": 3
                },
                "crops": [],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Earth",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 5,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Shared Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Port Melissaberg",
                "region": {
                    "name": "Northern",
                    "code": "05"
                },
                "house_address": "56596 Sawyer Isle\nSouth Nicoleborough, RI 05987",
                "district": {
                    "name": "New Charlestown",
                    "code": "1831"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "43"
                },
                "locality": {
                    "name": "Donaldville",
                    "code": "4021"
                },
                "sub_district": "Justin Creek",
                "NHIS_ECG_VRA_OtherNumber": "675-424-6631",
                "household_contacts": [
                    "001-599-507-8487x5572",
                    "001-248-674-3490",
                    "(133)010-2188"
                ],
                "ea": {
                    "number": "493",
                    "type": "Rural"
                },
                "house_structure_number": "284",
                "household_number_within_house": "10",
                "residence_type": "Urban",
                "date_started": "2025-01-09",
                "date_completed": "2025-01-09",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Jessica Smith",
                    "age": 43,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Randy Wood",
                    "age": 61,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Richard Young",
                    "age": 56,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Cassandra Kennedy",
                    "age": 67,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Thomas Galloway",
                    "age": 9,
                    "sex": "female",
                    "relationship_code": "01"
                },
                {
                    "name": "Mrs. Robin Vargas",
                    "age": 43,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Diane Roberts",
                    "age": 79,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Barbara Logan",
                    "age": 11,
                    "sex": "male",
                    "relationship_code": "10"
                }
            ],
            "absentees": [
                {
                    "name": "Kathryn Wilcox",
                    "age": 52,
                    "sex": "male",
                    "destination": {
                        "town": "Rachelberg",
                        "region": "Volta",
                        "code": "01"
                    },
                    "months_absent": 5
                }
            ],
            "emigration": [
                {
                    "name": "Calvin Wagner",
                    "age": 47,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "United Kingdom",
                    "country_code": "21",
                    "year_of_departure": 2002,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 4,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "37",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "07",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 18,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 3,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "New Jeffreytown",
                "region": {
                    "name": "Upper East",
                    "code": "03"
                },
                "house_address": "60087 Gillespie Islands\nEast Gregoryfurt, AL 94146",
                "district": {
                    "name": "New Chad",
                    "code": "7595"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "10"
                },
                "locality": {
                    "name": "West Zachary",
                    "code": "0788"
                },
                "sub_district": "Page Manor",
                "NHIS_ECG_VRA_OtherNumber": "681-217-4431",
                "household_contacts": [
                    "965-055-9879x9067",
                    "(637)780-6834"
                ],
                "ea": {
                    "number": "453",
                    "type": "Rural"
                },
                "house_structure_number": "942",
                "household_number_within_house": "9",
                "residence_type": "Urban",
                "date_started": "2025-01-08",
                "date_completed": "2025-01-03",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Sharon Horne",
                    "age": 38,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Jason Cantrell",
                    "age": 9,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Curtis May",
                    "age": 10,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Gordon Ruiz",
                    "age": 77,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Morgan Powers",
                    "age": 23,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Patrick Ward",
                    "age": 11,
                    "sex": "female",
                    "relationship_code": "01"
                }
            ],
            "absentees": [
                {
                    "name": "Robert Phillips MD",
                    "age": 51,
                    "sex": "female",
                    "destination": {
                        "town": "Greerhaven",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Kyle Roberson",
                    "age": 32,
                    "sex": "female",
                    "destination": {
                        "town": "South Linda",
                        "region": "Ashanti",
                        "code": "09"
                    },
                    "months_absent": 3
                },
                {
                    "name": "David Ochoa",
                    "age": 34,
                    "sex": "male",
                    "destination": {
                        "town": "Sweeneymouth",
                        "region": "Ashanti",
                        "code": "09"
                    },
                    "months_absent": 3
                }
            ],
            "emigration": [
                {
                    "name": "Brandon Mason",
                    "age": 47,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "United States",
                    "country_code": "22",
                    "year_of_departure": 2015,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Linda Garza",
                    "sex": "female",
                    "age": 48,
                    "unnatural_death": true,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 1,
                    "female": 2
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "34",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "46",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Other",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 1,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 1,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "East Terristad",
                "region": {
                    "name": "Northern",
                    "code": "01"
                },
                "house_address": "845 James Lodge Apt. 621\nBowersberg, LA 92221",
                "district": {
                    "name": "North Connor",
                    "code": "9669"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "31"
                },
                "locality": {
                    "name": "Holmesstad",
                    "code": "4119"
                },
                "sub_district": "Hughes Well",
                "NHIS_ECG_VRA_OtherNumber": "450-336-4748",
                "household_contacts": [
                    "550-875-5346x4151",
                    "087.164.4181x279",
                    "001-858-151-7438"
                ],
                "ea": {
                    "number": "349",
                    "type": "Urban"
                },
                "house_structure_number": "679",
                "household_number_within_house": "14",
                "residence_type": "Urban",
                "date_started": "2025-01-05",
                "date_completed": "2025-01-03",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Tonya Crane",
                    "age": 48,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Alex Williamson",
                    "age": 35,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Jackson Williams",
                    "age": 49,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Regina Clark",
                    "age": 37,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "John Hill",
                    "age": 41,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Timothy Phillips",
                    "age": 64,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Leslie Oneill",
                    "age": 44,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "John Davidson",
                    "age": 81,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Justin Beltran",
                    "age": 69,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Emily Collier",
                    "age": 1,
                    "sex": "male",
                    "relationship_code": "07"
                }
            ],
            "absentees": [
                {
                    "name": "Alexander Hampton",
                    "age": 30,
                    "sex": "male",
                    "destination": {
                        "town": "Rivasmouth",
                        "region": "Greater Accra",
                        "code": "06"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Ricardo Wilson",
                    "age": 17,
                    "sex": "male",
                    "destination": {
                        "town": "Port Brandonville",
                        "region": "Ashanti",
                        "code": "08"
                    },
                    "months_absent": 7
                }
            ],
            "emigration": [
                {
                    "name": "Stephen Smith",
                    "age": 22,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "Canada",
                    "country_code": "16",
                    "year_of_departure": 2020,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Rebecca Murphy",
                    "age": 18,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "United States",
                    "country_code": "14",
                    "year_of_departure": 2002,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [
                {
                    "name": "Thomas Reed",
                    "sex": "female",
                    "age": 90,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "49",
                        "farm_size": 2,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "01",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "08",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 16,
                        "livestock_code": "06"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Other",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 5,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Joshuashire",
                "region": {
                    "name": "Eastern",
                    "code": "02"
                },
                "house_address": "USNS Goodwin\nFPO AA 67324",
                "district": {
                    "name": "East Bradleyfort",
                    "code": "1710"
                },
                "district_type": {
                    "name": "District",
                    "code": "13"
                },
                "locality": {
                    "name": "East Stephenshire",
                    "code": "9022"
                },
                "sub_district": "Mora Isle",
                "NHIS_ECG_VRA_OtherNumber": "327-680-9705",
                "household_contacts": [
                    "001-315-243-2199x8930"
                ],
                "ea": {
                    "number": "284",
                    "type": "Rural"
                },
                "house_structure_number": "744",
                "household_number_within_house": "14",
                "residence_type": "Urban",
                "date_started": "2025-01-09",
                "date_completed": "2025-01-03",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Scott Ferguson",
                    "age": 96,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Micheal Ramirez",
                    "age": 67,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "William Fleming",
                    "age": 84,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Michaela Knight",
                    "age": 75,
                    "sex": "male",
                    "relationship_code": "02"
                }
            ],
            "absentees": [
                {
                    "name": "Michelle Curry",
                    "age": 46,
                    "sex": "female",
                    "destination": {
                        "town": "Lake Dustin",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 12
                },
                {
                    "name": "Karen Martin",
                    "age": 31,
                    "sex": "female",
                    "destination": {
                        "town": "West Cheryl",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 11
                }
            ],
            "emigration": [
                {
                    "name": "Dale Alexander",
                    "age": 44,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "Nigeria",
                    "country_code": "21",
                    "year_of_departure": 2021,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Elizabeth Silva",
                    "sex": "female",
                    "age": 32,
                    "unnatural_death": true,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 1,
                    "female": 3
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 21,
                        "livestock_code": "09"
                    },
                    {
                        "type": "Sheep",
                        "number": 20,
                        "livestock_code": "07"
                    },
                    {
                        "type": "Pigs",
                        "number": 37,
                        "livestock_code": "03"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Government",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 5,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Ramirezfort",
                "region": {
                    "name": "Greater Accra",
                    "code": "07"
                },
                "house_address": "7814 Rickey Port\nPort Heather, DE 66888",
                "district": {
                    "name": "Fergusonview",
                    "code": "4166"
                },
                "district_type": {
                    "name": "District",
                    "code": "33"
                },
                "locality": {
                    "name": "Lake Steven",
                    "code": "3231"
                },
                "sub_district": "Shannon Green",
                "NHIS_ECG_VRA_OtherNumber": "474-214-0027",
                "household_contacts": [
                    "+1-208-897-4232x5147",
                    "677.445.4034x000",
                    "(618)389-9965x569"
                ],
                "ea": {
                    "number": "91",
                    "type": "Urban"
                },
                "house_structure_number": "52",
                "household_number_within_house": "2",
                "residence_type": "Urban",
                "date_started": "2025-01-05",
                "date_completed": "2025-01-09",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Renee Mcintosh",
                    "age": 67,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Laurie Williamson",
                    "age": 35,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Walter Cohen",
                    "age": 16,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Jill Ortiz",
                    "age": 45,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "John Franklin",
                    "age": 63,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Natalie Castillo",
                    "age": 23,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Stacy Roach",
                    "age": 61,
                    "sex": "male",
                    "relationship_code": "03"
                }
            ],
            "absentees": [
                {
                    "name": "Carol Johnson",
                    "age": 35,
                    "sex": "female",
                    "destination": {
                        "town": "South Priscillachester",
                        "region": "Greater Accra",
                        "code": "04"
                    },
                    "months_absent": 8
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 0,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "25",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "16",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "16",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Earth",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 7,
                    "bedroom_count": 3,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Nancyfort",
                "region": {
                    "name": "Ashanti",
                    "code": "05"
                },
                "house_address": "501 Phillip Court\nSouth Toddburgh, CA 53719",
                "district": {
                    "name": "West Ruben",
                    "code": "3248"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "03"
                },
                "locality": {
                    "name": "Lake Meghan",
                    "code": "7684"
                },
                "sub_district": "Rebecca Lane",
                "NHIS_ECG_VRA_OtherNumber": "915-625-2557",
                "household_contacts": [
                    "001-715-312-9469x2359",
                    "001-787-180-8875x79759"
                ],
                "ea": {
                    "number": "272",
                    "type": "Rural"
                },
                "house_structure_number": "759",
                "household_number_within_house": "13",
                "residence_type": "Urban",
                "date_started": "2025-01-10",
                "date_completed": "2025-01-11",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Jessica Clark",
                    "age": 31,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Erica Stewart",
                    "age": 57,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Dennis Conner",
                    "age": 18,
                    "sex": "male",
                    "relationship_code": "07"
                }
            ],
            "absentees": [
                {
                    "name": "Douglas Dennis",
                    "age": 30,
                    "sex": "female",
                    "destination": {
                        "town": "East Denise",
                        "region": "Greater Accra",
                        "code": "06"
                    },
                    "months_absent": 7
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 1,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "04",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 36,
                        "livestock_code": "02"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 1,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Port Chase",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "01"
                },
                "house_address": "17465 Horne Mount\nChristophermouth, NC 89015",
                "district": {
                    "name": "North Bryanland",
                    "code": "4059"
                },
                "district_type": {
                    "name": "District",
                    "code": "39"
                },
                "locality": {
                    "name": "New Joshuastad",
                    "code": "9672"
                },
                "sub_district": "April Row",
                "NHIS_ECG_VRA_OtherNumber": "355-971-6663",
                "household_contacts": [
                    "(690)503-8305",
                    "(621)733-1378x30448",
                    "(793)476-8635x07433"
                ],
                "ea": {
                    "number": "56",
                    "type": "Rural"
                },
                "house_structure_number": "495",
                "household_number_within_house": "3",
                "residence_type": "Urban",
                "date_started": "2025-01-06",
                "date_completed": "2025-01-04",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Gina Bond",
                    "age": 37,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Brian Pratt",
                    "age": 46,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Michael Valdez",
                    "age": 0,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Gary Bush",
                    "age": 34,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Lisa Turner",
                    "age": 34,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Tara Morales",
                    "age": 71,
                    "sex": "male",
                    "relationship_code": "10"
                }
            ],
            "absentees": [
                {
                    "name": "Kyle Tucker",
                    "age": 25,
                    "sex": "female",
                    "destination": {
                        "town": "New Russellland",
                        "region": "Ashanti",
                        "code": "02"
                    },
                    "months_absent": 12
                },
                {
                    "name": "Paige Grant",
                    "age": 42,
                    "sex": "female",
                    "destination": {
                        "town": "East Marktown",
                        "region": "Greater Accra",
                        "code": "01"
                    },
                    "months_absent": 10
                }
            ],
            "emigration": [
                {
                    "name": "Megan Hoover",
                    "age": 22,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "United Kingdom",
                    "country_code": "15",
                    "year_of_departure": 2009,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [
                {
                    "name": "Katelyn Mata",
                    "sex": "male",
                    "age": 15,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 4,
                    "female": 5
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 12,
                        "livestock_code": "05"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Earth",
                "roof": "Thatch",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 1,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Rayberg",
                "region": {
                    "name": "Upper East",
                    "code": "08"
                },
                "house_address": "32200 Kathryn Divide Apt. 456\nCarlsonmouth, NM 07607",
                "district": {
                    "name": "North Brianville",
                    "code": "7841"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "21"
                },
                "locality": {
                    "name": "West Bobby",
                    "code": "4509"
                },
                "sub_district": "Li Road",
                "NHIS_ECG_VRA_OtherNumber": "449-212-4892",
                "household_contacts": [
                    "060-365-8546x2924",
                    "001-667-872-6808x9612",
                    "059-088-2025x79146"
                ],
                "ea": {
                    "number": "243",
                    "type": "Rural"
                },
                "house_structure_number": "979",
                "household_number_within_house": "1",
                "residence_type": "Rural",
                "date_started": "2025-01-05",
                "date_completed": "2025-01-04",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Diane Myers",
                    "age": 80,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Travis Holmes",
                    "age": 100,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "James Taylor",
                    "age": 72,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Jesse Meadows",
                    "age": 69,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Kristen Taylor",
                    "age": 25,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Colton Hughes",
                    "age": 36,
                    "sex": "female",
                    "relationship_code": "10"
                }
            ],
            "absentees": [
                {
                    "name": "Austin Rhodes",
                    "age": 55,
                    "sex": "male",
                    "destination": {
                        "town": "Lake Jenniferberg",
                        "region": "Volta",
                        "code": "02"
                    },
                    "months_absent": 8
                },
                {
                    "name": "Jane Duke",
                    "age": 43,
                    "sex": "male",
                    "destination": {
                        "town": "Port Deanna",
                        "region": "Volta",
                        "code": "02"
                    },
                    "months_absent": 4
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Tina Hill",
                    "sex": "female",
                    "age": 3,
                    "unnatural_death": true,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 5,
                    "female": 0
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 40,
                        "livestock_code": "04"
                    },
                    {
                        "type": "Sheep",
                        "number": 39,
                        "livestock_code": "01"
                    },
                    {
                        "type": "Goats",
                        "number": 6,
                        "livestock_code": "02"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Cement",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Other",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 1,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 0
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Shared Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Johnathanshire",
                "region": {
                    "name": "Upper West",
                    "code": "08"
                },
                "house_address": "USCGC Brown\nFPO AP 24913",
                "district": {
                    "name": "West Ginatown",
                    "code": "6157"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "21"
                },
                "locality": {
                    "name": "Lake David",
                    "code": "9737"
                },
                "sub_district": "Morgan Falls",
                "NHIS_ECG_VRA_OtherNumber": "365-285-8590",
                "household_contacts": [
                    "187.307.5902x5916"
                ],
                "ea": {
                    "number": "397",
                    "type": "Rural"
                },
                "house_structure_number": "946",
                "household_number_within_house": "7",
                "residence_type": "Rural",
                "date_started": "2025-01-06",
                "date_completed": "2025-01-06",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Veronica Peterson",
                    "age": 75,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Crystal Villegas",
                    "age": 25,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Andrew Salas",
                    "age": 63,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Sandra Torres",
                    "age": 45,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Taylor Farrell",
                    "age": 28,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Leonard Daniels",
                    "age": 52,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Joseph Griffin",
                    "age": 12,
                    "sex": "male",
                    "relationship_code": "11"
                }
            ],
            "absentees": [
                {
                    "name": "Lauren Morgan",
                    "age": 26,
                    "sex": "female",
                    "destination": {
                        "town": "Christianhaven",
                        "region": "Greater Accra",
                        "code": "02"
                    },
                    "months_absent": 11
                },
                {
                    "name": "William Martinez",
                    "age": 57,
                    "sex": "female",
                    "destination": {
                        "town": "East Chadborough",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 7
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Peter Hughes",
                    "sex": "female",
                    "age": 68,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 4,
                    "female": 1
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 45,
                        "livestock_code": "04"
                    },
                    {
                        "type": "Goats",
                        "number": 6,
                        "livestock_code": "09"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 3,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Veronicaton",
                "region": {
                    "name": "Northern",
                    "code": "01"
                },
                "house_address": "USCGC Wright\nFPO AP 58030",
                "district": {
                    "name": "Port Stuartshire",
                    "code": "2649"
                },
                "district_type": {
                    "name": "District",
                    "code": "39"
                },
                "locality": {
                    "name": "Elizabethview",
                    "code": "4776"
                },
                "sub_district": "John Hill",
                "NHIS_ECG_VRA_OtherNumber": "975-985-9984",
                "household_contacts": [
                    "(581)585-0922x91038"
                ],
                "ea": {
                    "number": "95",
                    "type": "Urban"
                },
                "house_structure_number": "771",
                "household_number_within_house": "12",
                "residence_type": "Rural",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-04",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Brian Mitchell",
                    "age": 53,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Jason Gregory",
                    "age": 65,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Megan Lamb",
                    "age": 83,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Thomas Jordan",
                    "age": 9,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Lee Moore",
                    "age": 88,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Daniel Hendrix",
                    "age": 70,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Nicole Henderson",
                    "age": 0,
                    "sex": "female",
                    "relationship_code": "08"
                }
            ],
            "absentees": [
                {
                    "name": "Brittany May",
                    "age": 59,
                    "sex": "male",
                    "destination": {
                        "town": "North Heidistad",
                        "region": "Ashanti",
                        "code": "06"
                    },
                    "months_absent": 3
                },
                {
                    "name": "Henry Nguyen",
                    "age": 53,
                    "sex": "female",
                    "destination": {
                        "town": "North Debra",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 5
                }
            ],
            "emigration": [
                {
                    "name": "Patricia Riggs",
                    "age": 22,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "Germany",
                    "country_code": "15",
                    "year_of_departure": 2021,
                    "activity_abroad": "Student"
                },
                {
                    "name": "Laura Alexander",
                    "age": 25,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Germany",
                    "country_code": "14",
                    "year_of_departure": 2003,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [
                {
                    "name": "Kelly Crane",
                    "sex": "female",
                    "age": 31,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 2,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "38",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "03",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Other",
                "rooms": {
                    "total": 1,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 5
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Foxmouth",
                "region": {
                    "name": "Central",
                    "code": "08"
                },
                "house_address": "67718 Michele Park\nSouth Kelseyview, WA 06424",
                "district": {
                    "name": "Lewisport",
                    "code": "5337"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "19"
                },
                "locality": {
                    "name": "South Rebecca",
                    "code": "4528"
                },
                "sub_district": "Mason Drive",
                "NHIS_ECG_VRA_OtherNumber": "375-480-4551",
                "household_contacts": [
                    "095-116-9628"
                ],
                "ea": {
                    "number": "451",
                    "type": "Rural"
                },
                "house_structure_number": "966",
                "household_number_within_house": "18",
                "residence_type": "Urban",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-06",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Scott Bauer",
                    "age": 47,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Nathan Nguyen",
                    "age": 7,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Juan Brown",
                    "age": 2,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Tammie Ortega",
                    "age": 95,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Ashley Buchanan",
                    "age": 41,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Brianna Stevens",
                    "age": 87,
                    "sex": "male",
                    "relationship_code": "04"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 5,
                    "female": 3
                },
                "crops": [],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 3,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Wilsonfurt",
                "region": {
                    "name": "Central",
                    "code": "04"
                },
                "house_address": "321 Garrison Fort Apt. 262\nSandraport, OK 06718",
                "district": {
                    "name": "Lake Paulview",
                    "code": "1273"
                },
                "district_type": {
                    "name": "District",
                    "code": "46"
                },
                "locality": {
                    "name": "Douglasville",
                    "code": "0172"
                },
                "sub_district": "Clark Prairie",
                "NHIS_ECG_VRA_OtherNumber": "017-421-9504",
                "household_contacts": [
                    "4522256391",
                    "(246)345-1670x3764"
                ],
                "ea": {
                    "number": "263",
                    "type": "Rural"
                },
                "house_structure_number": "819",
                "household_number_within_house": "11",
                "residence_type": "Urban",
                "date_started": "2025-01-01",
                "date_completed": "2025-01-12",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Ellen Humphrey",
                    "age": 49,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Wesley Hartman",
                    "age": 52,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Zachary Frazier III",
                    "age": 75,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Gabrielle Malone",
                    "age": 73,
                    "sex": "male",
                    "relationship_code": "02"
                }
            ],
            "absentees": [
                {
                    "name": "Rebecca Oliver",
                    "age": 17,
                    "sex": "male",
                    "destination": {
                        "town": "Lake Mariachester",
                        "region": "Greater Accra",
                        "code": "08"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Robert Edwards",
                    "age": 32,
                    "sex": "male",
                    "destination": {
                        "town": "New Frederickmouth",
                        "region": "Greater Accra",
                        "code": "05"
                    },
                    "months_absent": 1
                },
                {
                    "name": "Heather Harrell",
                    "age": 53,
                    "sex": "male",
                    "destination": {
                        "town": "North Justin",
                        "region": "Ashanti",
                        "code": "04"
                    },
                    "months_absent": 8
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Justin Cain",
                    "sex": "female",
                    "age": 80,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 2,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "08",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "37",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "50",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Other",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 5,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 5
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Jennifermouth",
                "region": {
                    "name": "Ashanti",
                    "code": "07"
                },
                "house_address": "44530 Blackwell Inlet\nDavisville, NE 32489",
                "district": {
                    "name": "New Daniel",
                    "code": "0395"
                },
                "district_type": {
                    "name": "District",
                    "code": "07"
                },
                "locality": {
                    "name": "Powellberg",
                    "code": "3213"
                },
                "sub_district": "Deborah Greens",
                "NHIS_ECG_VRA_OtherNumber": "004-136-1103",
                "household_contacts": [
                    "+1-898-820-3774x9535",
                    "001-505-228-3227",
                    "(475)508-9851"
                ],
                "ea": {
                    "number": "390",
                    "type": "Urban"
                },
                "house_structure_number": "347",
                "household_number_within_house": "10",
                "residence_type": "Urban",
                "date_started": "2025-01-11",
                "date_completed": "2025-01-03",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Anthony Hinton",
                    "age": 16,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Denise Clark",
                    "age": 59,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Holly Zimmerman",
                    "age": 8,
                    "sex": "male",
                    "relationship_code": "10"
                }
            ],
            "absentees": [
                {
                    "name": "Robert Rowland",
                    "age": 41,
                    "sex": "male",
                    "destination": {
                        "town": "Dawnport",
                        "region": "Greater Accra",
                        "code": "02"
                    },
                    "months_absent": 4
                },
                {
                    "name": "Lauren Hall",
                    "age": 47,
                    "sex": "female",
                    "destination": {
                        "town": "Port Jose",
                        "region": "Greater Accra",
                        "code": "05"
                    },
                    "months_absent": 8
                }
            ],
            "emigration": [
                {
                    "name": "Scott Dalton",
                    "age": 34,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "Nigeria",
                    "country_code": "14",
                    "year_of_departure": 2023,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Laura King",
                    "age": 26,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "Canada",
                    "country_code": "16",
                    "year_of_departure": 2012,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Derek Terry",
                    "sex": "male",
                    "age": 80,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 1,
                    "female": 2
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 14,
                        "livestock_code": "03"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 5,
                    "bedroom_count": 5,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 1,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Mclaughlinchester",
                "region": {
                    "name": "Western",
                    "code": "03"
                },
                "house_address": "926 Frank Land Apt. 938\nWest Bryan, MA 01568",
                "district": {
                    "name": "Michaelstad",
                    "code": "5695"
                },
                "district_type": {
                    "name": "District",
                    "code": "21"
                },
                "locality": {
                    "name": "Catherinefurt",
                    "code": "9545"
                },
                "sub_district": "Kayla Crossroad",
                "NHIS_ECG_VRA_OtherNumber": "282-479-2127",
                "household_contacts": [
                    "2433249920"
                ],
                "ea": {
                    "number": "136",
                    "type": "Rural"
                },
                "house_structure_number": "42",
                "household_number_within_house": "18",
                "residence_type": "Rural",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-12",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Julie Watson",
                    "age": 48,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Jennifer Daniels",
                    "age": 29,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Paul Hill",
                    "age": 66,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Jessica Baker",
                    "age": 21,
                    "sex": "female",
                    "relationship_code": "03"
                }
            ],
            "absentees": [
                {
                    "name": "Alexander Mccarthy",
                    "age": 26,
                    "sex": "female",
                    "destination": {
                        "town": "Juanland",
                        "region": "Greater Accra",
                        "code": "02"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [
                {
                    "name": "James Taylor",
                    "age": 28,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Germany",
                    "country_code": "18",
                    "year_of_departure": 2017,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Martin Delgado",
                    "age": 19,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "Germany",
                    "country_code": "16",
                    "year_of_departure": 2005,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [
                {
                    "name": "Brian Werner",
                    "sex": "female",
                    "age": 66,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 1,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "09",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 32,
                        "livestock_code": "07"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 2,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "West David",
                "region": {
                    "name": "Upper West",
                    "code": "02"
                },
                "house_address": "2488 Samuel Hills Suite 693\nBowmanstad, UT 40871",
                "district": {
                    "name": "Peckchester",
                    "code": "7813"
                },
                "district_type": {
                    "name": "District",
                    "code": "34"
                },
                "locality": {
                    "name": "Lake Stephaniemouth",
                    "code": "0806"
                },
                "sub_district": "Wanda Trace",
                "NHIS_ECG_VRA_OtherNumber": "556-702-0681",
                "household_contacts": [
                    "001-661-031-4195x8922"
                ],
                "ea": {
                    "number": "71",
                    "type": "Urban"
                },
                "house_structure_number": "596",
                "household_number_within_house": "3",
                "residence_type": "Urban",
                "date_started": "2025-01-01",
                "date_completed": "2025-01-04",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Jill Smith",
                    "age": 20,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Ernest Reyes",
                    "age": 13,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Ashley Long",
                    "age": 3,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "John Burgess",
                    "age": 7,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Samantha Arellano",
                    "age": 82,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Maxwell Sellers",
                    "age": 18,
                    "sex": "female",
                    "relationship_code": "01"
                }
            ],
            "absentees": [
                {
                    "name": "David Bell",
                    "age": 24,
                    "sex": "female",
                    "destination": {
                        "town": "Ellisshire",
                        "region": "Volta",
                        "code": "09"
                    },
                    "months_absent": 4
                },
                {
                    "name": "Angela Tran",
                    "age": 27,
                    "sex": "male",
                    "destination": {
                        "town": "Port Paulburgh",
                        "region": "Greater Accra",
                        "code": "04"
                    },
                    "months_absent": 11
                }
            ],
            "emigration": [
                {
                    "name": "Eric Massey",
                    "age": 45,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "Canada",
                    "country_code": "14",
                    "year_of_departure": 2024,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 2
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "30",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 5,
                        "livestock_code": "01"
                    },
                    {
                        "type": "Pigs",
                        "number": 4,
                        "livestock_code": "08"
                    },
                    {
                        "type": "Goats",
                        "number": 47,
                        "livestock_code": "05"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 7,
                    "bedroom_count": 2,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "West Deborahland",
                "region": {
                    "name": "Volta",
                    "code": "10"
                },
                "house_address": "74457 Hart Well Apt. 584\nRichardshire, GA 68937",
                "district": {
                    "name": "Lewisview",
                    "code": "8727"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "24"
                },
                "locality": {
                    "name": "North Aliciamouth",
                    "code": "6941"
                },
                "sub_district": "Garcia Trafficway",
                "NHIS_ECG_VRA_OtherNumber": "713-561-1611",
                "household_contacts": [
                    "174-103-1022",
                    "143.292.5672x62198"
                ],
                "ea": {
                    "number": "65",
                    "type": "Urban"
                },
                "house_structure_number": "548",
                "household_number_within_house": "3",
                "residence_type": "Urban",
                "date_started": "2025-01-09",
                "date_completed": "2025-01-01",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Sandra Jones",
                    "age": 52,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Christopher Arnold",
                    "age": 32,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Sandra Chung",
                    "age": 96,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Ronald Jones",
                    "age": 61,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Michael Wolf",
                    "age": 21,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Chad Baker",
                    "age": 90,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Martha Lee",
                    "age": 97,
                    "sex": "female",
                    "relationship_code": "02"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [
                {
                    "name": "Krista Olson",
                    "sex": "female",
                    "age": 38,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 3,
                    "female": 2
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 48,
                        "livestock_code": "01"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 3,
                    "bedroom_count": 2,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Lake Timothy",
                "region": {
                    "name": "Volta",
                    "code": "06"
                },
                "house_address": "7840 Vasquez Cliffs\nWest Hayleymouth, NV 80219",
                "district": {
                    "name": "Lake Bobbyland",
                    "code": "1349"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "11"
                },
                "locality": {
                    "name": "Danielbury",
                    "code": "4858"
                },
                "sub_district": "Madeline Stream",
                "NHIS_ECG_VRA_OtherNumber": "939-154-8717",
                "household_contacts": [
                    "615-221-5851",
                    "102-906-1850x904"
                ],
                "ea": {
                    "number": "212",
                    "type": "Rural"
                },
                "house_structure_number": "191",
                "household_number_within_house": "20",
                "residence_type": "Rural",
                "date_started": "2025-01-02",
                "date_completed": "2025-01-03",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Robert Kennedy",
                    "age": 93,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Aaron Johnson",
                    "age": 84,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Louis Martinez",
                    "age": 46,
                    "sex": "female",
                    "relationship_code": "08"
                },
                {
                    "name": "Alexander Snyder",
                    "age": 39,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Harold Carter",
                    "age": 66,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Amanda Salazar",
                    "age": 85,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Michael Johnson",
                    "age": 59,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Carlos Mcbride",
                    "age": 95,
                    "sex": "male",
                    "relationship_code": "03"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [
                {
                    "name": "Erica Lee",
                    "sex": "female",
                    "age": 38,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 3,
                    "female": 0
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 38,
                        "livestock_code": "03"
                    },
                    {
                        "type": "Goats",
                        "number": 16,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Pigs",
                        "number": 38,
                        "livestock_code": "09"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Wood",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 3,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Amyview",
                "region": {
                    "name": "Central",
                    "code": "08"
                },
                "house_address": "PSC 3131, Box 7708\nAPO AE 09592",
                "district": {
                    "name": "Richardschester",
                    "code": "6408"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "16"
                },
                "locality": {
                    "name": "South Ryanfort",
                    "code": "3485"
                },
                "sub_district": "Gross Meadow",
                "NHIS_ECG_VRA_OtherNumber": "136-505-7491",
                "household_contacts": [
                    "8397992663",
                    "885.357.5300"
                ],
                "ea": {
                    "number": "218",
                    "type": "Urban"
                },
                "house_structure_number": "173",
                "household_number_within_house": "15",
                "residence_type": "Rural",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-07",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Shawna Lynch",
                    "age": 28,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Patricia Brady",
                    "age": 2,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Jill Wright",
                    "age": 73,
                    "sex": "male",
                    "relationship_code": "08"
                }
            ],
            "absentees": [],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "15",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "43",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "37",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Earth",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Government",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 3,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Shared Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "North Williamport",
                "region": {
                    "name": "Eastern",
                    "code": "07"
                },
                "house_address": "771 Jacob Pass\nSouth Biancatown, NE 69052",
                "district": {
                    "name": "Garybury",
                    "code": "9169"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "39"
                },
                "locality": {
                    "name": "Millerbury",
                    "code": "2786"
                },
                "sub_district": "Peters Forge",
                "NHIS_ECG_VRA_OtherNumber": "504-639-5675",
                "household_contacts": [
                    "699-366-2826x670",
                    "001-091-408-2470x8472"
                ],
                "ea": {
                    "number": "384",
                    "type": "Urban"
                },
                "house_structure_number": "740",
                "household_number_within_house": "10",
                "residence_type": "Rural",
                "date_started": "2025-01-09",
                "date_completed": "2025-01-06",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Cheryl Thompson",
                    "age": 19,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Thomas Martin",
                    "age": 46,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Bethany Matthews",
                    "age": 84,
                    "sex": "male",
                    "relationship_code": "04"
                },
                {
                    "name": "Jordan Anderson",
                    "age": 73,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Ricardo Johnson",
                    "age": 92,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Ashley Marks",
                    "age": 77,
                    "sex": "female",
                    "relationship_code": "11"
                }
            ],
            "absentees": [
                {
                    "name": "Douglas Becker",
                    "age": 24,
                    "sex": "male",
                    "destination": {
                        "town": "East Cody",
                        "region": "Greater Accra",
                        "code": "04"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Mark Contreras",
                    "age": 26,
                    "sex": "male",
                    "destination": {
                        "town": "North Jennifer",
                        "region": "Volta",
                        "code": "06"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Cheryl Chan",
                    "age": 30,
                    "sex": "female",
                    "destination": {
                        "town": "Cruzfurt",
                        "region": "Ashanti",
                        "code": "05"
                    },
                    "months_absent": 12
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Beth Mitchell",
                    "sex": "female",
                    "age": 79,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 3,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "02",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 30,
                        "livestock_code": "01"
                    },
                    {
                        "type": "Chickens",
                        "number": 43,
                        "livestock_code": "10"
                    },
                    {
                        "type": "Goats",
                        "number": 7,
                        "livestock_code": "04"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Private",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Port Christophershire",
                "region": {
                    "name": "Western",
                    "code": "02"
                },
                "house_address": "965 Lewis Estate\nNew Julieburgh, AK 48942",
                "district": {
                    "name": "East Margarettown",
                    "code": "3087"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "04"
                },
                "locality": {
                    "name": "Mcdonaldchester",
                    "code": "4038"
                },
                "sub_district": "Susan Harbors",
                "NHIS_ECG_VRA_OtherNumber": "533-565-7040",
                "household_contacts": [
                    "897.028.7233x719",
                    "573.227.4414x3813"
                ],
                "ea": {
                    "number": "486",
                    "type": "Rural"
                },
                "house_structure_number": "150",
                "household_number_within_house": "6",
                "residence_type": "Rural",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-08",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Victor Nguyen",
                    "age": 79,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Brian Mann",
                    "age": 46,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Jamie Goodwin",
                    "age": 79,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Cheryl Armstrong",
                    "age": 62,
                    "sex": "female",
                    "relationship_code": "07"
                }
            ],
            "absentees": [
                {
                    "name": "Sean Clark",
                    "age": 54,
                    "sex": "male",
                    "destination": {
                        "town": "Kirbyfurt",
                        "region": "Ashanti",
                        "code": "06"
                    },
                    "months_absent": 4
                }
            ],
            "emigration": [
                {
                    "name": "Kelly Decker",
                    "age": 29,
                    "sex": "female",
                    "relationship_code": "02",
                    "country_name": "Germany",
                    "country_code": "15",
                    "year_of_departure": 2008,
                    "activity_abroad": "Employed"
                },
                {
                    "name": "Jordan Clark",
                    "age": 41,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "Nigeria",
                    "country_code": "19",
                    "year_of_departure": 2015,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [
                {
                    "name": "Stephanie Williams",
                    "sex": "male",
                    "age": 69,
                    "unnatural_death": false,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 5,
                    "female": 4
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "11",
                        "farm_size": 6,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 25,
                        "livestock_code": "09"
                    },
                    {
                        "type": "Sheep",
                        "number": 3,
                        "livestock_code": "03"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Rented",
                "ownership_type": "Government",
                "rooms": {
                    "total": 1,
                    "bedroom_count": 2,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Smithbury",
                "region": {
                    "name": "Volta",
                    "code": "07"
                },
                "house_address": "46033 Wilson Rapids Suite 411\nDanielport, LA 88605",
                "district": {
                    "name": "Cassandrabury",
                    "code": "7894"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "15"
                },
                "locality": {
                    "name": "Mortonfurt",
                    "code": "2114"
                },
                "sub_district": "Timothy Unions",
                "NHIS_ECG_VRA_OtherNumber": "920-591-3923",
                "household_contacts": [
                    "9120877672",
                    "+1-869-934-6377x2511",
                    "(940)831-7403x501"
                ],
                "ea": {
                    "number": "117",
                    "type": "Urban"
                },
                "house_structure_number": "72",
                "household_number_within_house": "11",
                "residence_type": "Rural",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-02",
                "total_visits": 3
            },
            "roster": [
                {
                    "name": "Jacob Le",
                    "age": 45,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Megan Butler",
                    "age": 53,
                    "sex": "female",
                    "relationship_code": "09"
                },
                {
                    "name": "Kenneth Reed",
                    "age": 73,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Jessica Flowers",
                    "age": 100,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Christine Brown",
                    "age": 97,
                    "sex": "male",
                    "relationship_code": "06"
                },
                {
                    "name": "Joshua Carroll",
                    "age": 62,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Daniel Small",
                    "age": 79,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Robin Davis",
                    "age": 64,
                    "sex": "male",
                    "relationship_code": "02"
                }
            ],
            "absentees": [],
            "emigration": [
                {
                    "name": "Noah Flores",
                    "age": 47,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "United States",
                    "country_code": "14",
                    "year_of_departure": 2012,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 4,
                    "female": 3
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "31",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 50,
                        "livestock_code": "04"
                    },
                    {
                        "type": "Goats",
                        "number": 36,
                        "livestock_code": "01"
                    },
                    {
                        "type": "Goats",
                        "number": 44,
                        "livestock_code": "02"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Other",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 3,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 1
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 1
                },
                "solid_waste_disposal": "Public Bin",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "South Mary",
                "region": {
                    "name": "Eastern",
                    "code": "09"
                },
                "house_address": "499 Frazier View Suite 073\nAnnfurt, NC 11819",
                "district": {
                    "name": "Shawnshire",
                    "code": "7726"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "28"
                },
                "locality": {
                    "name": "Josephfurt",
                    "code": "4077"
                },
                "sub_district": "Murray Tunnel",
                "NHIS_ECG_VRA_OtherNumber": "355-851-9199",
                "household_contacts": [
                    "410-747-6535x90608",
                    "970.806.0278",
                    "(653)301-9421x108"
                ],
                "ea": {
                    "number": "48",
                    "type": "Rural"
                },
                "house_structure_number": "532",
                "household_number_within_house": "18",
                "residence_type": "Rural",
                "date_started": "2025-01-06",
                "date_completed": "2025-01-10",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Vernon Foster",
                    "age": 96,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Christina Page",
                    "age": 85,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Leslie Baker",
                    "age": 33,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Crystal Norton",
                    "age": 34,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Ariel Smith",
                    "age": 13,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Dawn Atkins",
                    "age": 75,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Anna Oneal",
                    "age": 93,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Leslie Benjamin",
                    "age": 36,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Joseph Hernandez",
                    "age": 96,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Alex Glover",
                    "age": 57,
                    "sex": "male",
                    "relationship_code": "01"
                }
            ],
            "absentees": [
                {
                    "name": "Jennifer Valdez",
                    "age": 19,
                    "sex": "female",
                    "destination": {
                        "town": "Christineside",
                        "region": "Ashanti",
                        "code": "04"
                    },
                    "months_absent": 3
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Emily Meadows",
                    "sex": "male",
                    "age": 77,
                    "unnatural_death": false,
                    "death_while_pregnant": true
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 1,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "37",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Cement Blocks",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Other",
                "rooms": {
                    "total": 3,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Open Space",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Pit Latrine",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "West Jonathanbury",
                "region": {
                    "name": "Northern",
                    "code": "07"
                },
                "house_address": "125 Samuel Junctions Suite 623\nPort Christopherburgh, AK 14202",
                "district": {
                    "name": "East Randy",
                    "code": "3689"
                },
                "district_type": {
                    "name": "District",
                    "code": "36"
                },
                "locality": {
                    "name": "East Luis",
                    "code": "3965"
                },
                "sub_district": "Brooke Forge",
                "NHIS_ECG_VRA_OtherNumber": "958-612-6551",
                "household_contacts": [
                    "1056261435"
                ],
                "ea": {
                    "number": "471",
                    "type": "Urban"
                },
                "house_structure_number": "769",
                "household_number_within_house": "13",
                "residence_type": "Urban",
                "date_started": "2025-01-03",
                "date_completed": "2025-01-09",
                "total_visits": 1
            },
            "roster": [
                {
                    "name": "Jimmy Miller",
                    "age": 31,
                    "sex": "female",
                    "relationship_code": "01"
                }
            ],
            "absentees": [
                {
                    "name": "Laura Lindsey",
                    "age": 25,
                    "sex": "female",
                    "destination": {
                        "town": "East Edward",
                        "region": "Greater Accra",
                        "code": "10"
                    },
                    "months_absent": 10
                },
                {
                    "name": "Christopher Mendoza",
                    "age": 18,
                    "sex": "female",
                    "destination": {
                        "town": "Glendaside",
                        "region": "Volta",
                        "code": "07"
                    },
                    "months_absent": 10
                },
                {
                    "name": "Lisa Lyons",
                    "age": 24,
                    "sex": "male",
                    "destination": {
                        "town": "Lake Lindaton",
                        "region": "Ashanti",
                        "code": "10"
                    },
                    "months_absent": 6
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Alicia Delacruz",
                    "sex": "female",
                    "age": 93,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 5,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Cassava",
                        "crop_code": "48",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "39",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "23",
                        "farm_size": 7,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 4,
                        "livestock_code": "08"
                    },
                    {
                        "type": "Chickens",
                        "number": 21,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Goats",
                        "number": 1,
                        "livestock_code": "10"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Separate House",
                "outer_wall": "Cement Blocks",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Private",
                "rooms": {
                    "total": 7,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Shared Space",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Burning",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Ericborough",
                "region": {
                    "name": "Western",
                    "code": "04"
                },
                "house_address": "319 Preston Locks\nNorth Thomas, RI 53790",
                "district": {
                    "name": "Wrightmouth",
                    "code": "2692"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "43"
                },
                "locality": {
                    "name": "West Codytown",
                    "code": "5695"
                },
                "sub_district": "Brown Avenue",
                "NHIS_ECG_VRA_OtherNumber": "496-803-2056",
                "household_contacts": [
                    "(345)427-6179x70519",
                    "+1-885-295-5708x66533"
                ],
                "ea": {
                    "number": "250",
                    "type": "Rural"
                },
                "house_structure_number": "855",
                "household_number_within_house": "12",
                "residence_type": "Urban",
                "date_started": "2025-01-03",
                "date_completed": "2025-01-01",
                "total_visits": 5
            },
            "roster": [
                {
                    "name": "Tonya Kim",
                    "age": 55,
                    "sex": "male",
                    "relationship_code": "10"
                }
            ],
            "absentees": [
                {
                    "name": "Melissa Parker",
                    "age": 56,
                    "sex": "male",
                    "destination": {
                        "town": "New Sean",
                        "region": "Ashanti",
                        "code": "05"
                    },
                    "months_absent": 2
                },
                {
                    "name": "Ann Harper",
                    "age": 19,
                    "sex": "male",
                    "destination": {
                        "town": "Jeffreyburgh",
                        "region": "Ashanti",
                        "code": "09"
                    },
                    "months_absent": 5
                },
                {
                    "name": "Reginald Fisher",
                    "age": 32,
                    "sex": "male",
                    "destination": {
                        "town": "Huntberg",
                        "region": "Volta",
                        "code": "04"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [],
            "mortality": [
                {
                    "name": "Michael Harvey",
                    "sex": "female",
                    "age": 75,
                    "unnatural_death": false,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 5,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "49",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Maize",
                        "crop_code": "14",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "46",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 19,
                        "livestock_code": "04"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Government",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Gas",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": false,
                    "total": 3,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "South Annetown",
                "region": {
                    "name": "Upper East",
                    "code": "06"
                },
                "house_address": "13707 Mills Extension Apt. 609\nMayside, ID 30060",
                "district": {
                    "name": "South Kimberly",
                    "code": "8642"
                },
                "district_type": {
                    "name": "Metropolitan",
                    "code": "19"
                },
                "locality": {
                    "name": "Johnsonview",
                    "code": "1797"
                },
                "sub_district": "Timothy Branch",
                "NHIS_ECG_VRA_OtherNumber": "979-032-7257",
                "household_contacts": [
                    "057-764-8802x597"
                ],
                "ea": {
                    "number": "164",
                    "type": "Urban"
                },
                "house_structure_number": "959",
                "household_number_within_house": "15",
                "residence_type": "Rural",
                "date_started": "2025-01-02",
                "date_completed": "2025-01-04",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Jennifer Carter",
                    "age": 52,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Bryan Galloway",
                    "age": 77,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Shannon Noble",
                    "age": 46,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Phillip Huffman",
                    "age": 14,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Erica Smith",
                    "age": 24,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Rebecca Melendez",
                    "age": 61,
                    "sex": "female",
                    "relationship_code": "04"
                },
                {
                    "name": "Mark Mosley",
                    "age": 62,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Gary Grant MD",
                    "age": 36,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Mr. Garrett Armstrong",
                    "age": 15,
                    "sex": "male",
                    "relationship_code": "01"
                }
            ],
            "absentees": [
                {
                    "name": "Brian Davis",
                    "age": 44,
                    "sex": "female",
                    "destination": {
                        "town": "Taylorborough",
                        "region": "Greater Accra",
                        "code": "03"
                    },
                    "months_absent": 11
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 1,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "04",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    }
                ],
                "livestock_or_fisheries": []
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Cement Blocks",
                "floor": "Cement",
                "roof": "Thatch",
                "tenure_arrangement": "Owner Occupied",
                "ownership_type": "Government",
                "rooms": {
                    "total": 2,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 3
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": false,
                    "total": 2,
                    "total_household_use": 5
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Open Drain"
            }
        },
        {
            "front_page": {
                "hometown": "Thomasland",
                "region": {
                    "name": "Central",
                    "code": "01"
                },
                "house_address": "125 Charles Meadow\nGarciabury, NM 67977",
                "district": {
                    "name": "East Anthony",
                    "code": "4168"
                },
                "district_type": {
                    "name": "District",
                    "code": "06"
                },
                "locality": {
                    "name": "Wallaceberg",
                    "code": "1028"
                },
                "sub_district": "Jasmine Spurs",
                "NHIS_ECG_VRA_OtherNumber": "256-600-2772",
                "household_contacts": [
                    "215.952.7366x262",
                    "+1-232-980-4974x3502",
                    "(306)841-5350x80456"
                ],
                "ea": {
                    "number": "7",
                    "type": "Rural"
                },
                "house_structure_number": "756",
                "household_number_within_house": "5",
                "residence_type": "Urban",
                "date_started": "2025-01-12",
                "date_completed": "2025-01-03",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Paige Edwards DVM",
                    "age": 23,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Sergio Johnson",
                    "age": 73,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Amanda Harris",
                    "age": 66,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "William Kelley",
                    "age": 37,
                    "sex": "female",
                    "relationship_code": "10"
                },
                {
                    "name": "Ashley Moyer",
                    "age": 55,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Rebecca Wheeler",
                    "age": 43,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Jessica Washington",
                    "age": 74,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Alyssa Davis",
                    "age": 65,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Yvonne King",
                    "age": 34,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Teresa Hunter",
                    "age": 59,
                    "sex": "female",
                    "relationship_code": "05"
                }
            ],
            "absentees": [
                {
                    "name": "Amanda Lopez",
                    "age": 16,
                    "sex": "female",
                    "destination": {
                        "town": "Lopezmouth",
                        "region": "Volta",
                        "code": "01"
                    },
                    "months_absent": 4
                }
            ],
            "emigration": [
                {
                    "name": "Victoria Cruz",
                    "age": 15,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "United Kingdom",
                    "country_code": "11",
                    "year_of_departure": 2020,
                    "activity_abroad": "Other"
                },
                {
                    "name": "William Allen",
                    "age": 24,
                    "sex": "male",
                    "relationship_code": "03",
                    "country_name": "Canada",
                    "country_code": "18",
                    "year_of_departure": 2008,
                    "activity_abroad": "Employed"
                }
            ],
            "mortality": [
                {
                    "name": "Deborah Smith",
                    "sex": "male",
                    "age": 86,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": false,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 0,
                    "female": 0
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "05",
                        "farm_size": 3,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "07",
                        "farm_size": 8,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Sheep",
                        "number": 37,
                        "livestock_code": "05"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Asbestos",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 8,
                    "bedroom_count": 5,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Private Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "North Cristinachester",
                "region": {
                    "name": "Volta",
                    "code": "03"
                },
                "house_address": "4263 Daniel Skyway Apt. 165\nNew Mark, VT 49134",
                "district": {
                    "name": "Jamesfurt",
                    "code": "8167"
                },
                "district_type": {
                    "name": "District",
                    "code": "02"
                },
                "locality": {
                    "name": "Hallburgh",
                    "code": "8585"
                },
                "sub_district": "Elizabeth Estates",
                "NHIS_ECG_VRA_OtherNumber": "563-741-8460",
                "household_contacts": [
                    "+1-035-117-6243",
                    "160.657.8487"
                ],
                "ea": {
                    "number": "435",
                    "type": "Rural"
                },
                "house_structure_number": "871",
                "household_number_within_house": "2",
                "residence_type": "Rural",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-04",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Shannon Brown",
                    "age": 44,
                    "sex": "female",
                    "relationship_code": "07"
                },
                {
                    "name": "Jeffrey Mitchell",
                    "age": 15,
                    "sex": "male",
                    "relationship_code": "01"
                }
            ],
            "absentees": [
                {
                    "name": "Kathy Robles",
                    "age": 45,
                    "sex": "female",
                    "destination": {
                        "town": "Muellerchester",
                        "region": "Volta",
                        "code": "10"
                    },
                    "months_absent": 2
                },
                {
                    "name": "Brandon Barrett",
                    "age": 40,
                    "sex": "male",
                    "destination": {
                        "town": "Blairside",
                        "region": "Greater Accra",
                        "code": "06"
                    },
                    "months_absent": 1
                }
            ],
            "emigration": [
                {
                    "name": "Tiffany Thompson",
                    "age": 58,
                    "sex": "male",
                    "relationship_code": "02",
                    "country_name": "United Kingdom",
                    "country_code": "15",
                    "year_of_departure": 2003,
                    "activity_abroad": "Other"
                },
                {
                    "name": "Erica Larson",
                    "age": 40,
                    "sex": "male",
                    "relationship_code": "01",
                    "country_name": "United States",
                    "country_code": "20",
                    "year_of_departure": 2001,
                    "activity_abroad": "Other"
                }
            ],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": true,
                "family_farming_count": {
                    "male": 0,
                    "female": 5
                },
                "crops": [
                    {
                        "crop_type": "Rice",
                        "crop_code": "17",
                        "farm_size": 4,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "49",
                        "farm_size": 10,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Goats",
                        "number": 38,
                        "livestock_code": "01"
                    },
                    {
                        "type": "Sheep",
                        "number": 33,
                        "livestock_code": "09"
                    },
                    {
                        "type": "Pigs",
                        "number": 32,
                        "livestock_code": "01"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Thatch",
                "tenure_arrangement": "Rented",
                "ownership_type": "Private",
                "rooms": {
                    "total": 7,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Borehole",
                    "source_domestic_activities": "Well"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "Garzabury",
                "region": {
                    "name": "Volta",
                    "code": "08"
                },
                "house_address": "7938 Fuller Garden\nEddiebury, CT 48630",
                "district": {
                    "name": "New Matthewburgh",
                    "code": "5380"
                },
                "district_type": {
                    "name": "District",
                    "code": "14"
                },
                "locality": {
                    "name": "Lake Erik",
                    "code": "4718"
                },
                "sub_district": "Charles Springs",
                "NHIS_ECG_VRA_OtherNumber": "281-601-4802",
                "household_contacts": [
                    "(245)224-6689",
                    "(188)619-4794x584",
                    "363.977.4273"
                ],
                "ea": {
                    "number": "125",
                    "type": "Urban"
                },
                "house_structure_number": "977",
                "household_number_within_house": "15",
                "residence_type": "Rural",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-12",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "Mia Taylor",
                    "age": 57,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Taylor Salazar",
                    "age": 65,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Vanessa Fields",
                    "age": 35,
                    "sex": "male",
                    "relationship_code": "07"
                },
                {
                    "name": "Dr. David Daniels DDS",
                    "age": 40,
                    "sex": "male",
                    "relationship_code": "09"
                },
                {
                    "name": "Bailey Baker",
                    "age": 39,
                    "sex": "female",
                    "relationship_code": "05"
                },
                {
                    "name": "Michele Lyons",
                    "age": 41,
                    "sex": "male",
                    "relationship_code": "08"
                },
                {
                    "name": "Bryce Martin",
                    "age": 51,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Kayla Weaver",
                    "age": 22,
                    "sex": "female",
                    "relationship_code": "08"
                }
            ],
            "absentees": [
                {
                    "name": "Heather Rodriguez",
                    "age": 57,
                    "sex": "female",
                    "destination": {
                        "town": "West Jessica",
                        "region": "Ashanti",
                        "code": "08"
                    },
                    "months_absent": 9
                },
                {
                    "name": "Regina Ford",
                    "age": 21,
                    "sex": "female",
                    "destination": {
                        "town": "New Kyle",
                        "region": "Greater Accra",
                        "code": "09"
                    },
                    "months_absent": 8
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": true,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 4,
                    "female": 1
                },
                "crops": [],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 37,
                        "livestock_code": "06"
                    },
                    {
                        "type": "Sheep",
                        "number": 47,
                        "livestock_code": "01"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Brick",
                "floor": "Earth",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Private",
                "rooms": {
                    "total": 9,
                    "bedroom_count": 4,
                    "share_room_with_other_household": true,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Kerosene Lamp",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 3
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "Sewer"
            }
        },
        {
            "front_page": {
                "hometown": "West Sandratown",
                "region": {
                    "name": "Volta",
                    "code": "09"
                },
                "house_address": "87372 Cynthia Divide Suite 984\nCarlsonmouth, MS 14636",
                "district": {
                    "name": "Turnerview",
                    "code": "9057"
                },
                "district_type": {
                    "name": "District",
                    "code": "14"
                },
                "locality": {
                    "name": "North Bruceside",
                    "code": "0814"
                },
                "sub_district": "Cunningham Creek",
                "NHIS_ECG_VRA_OtherNumber": "430-261-8979",
                "household_contacts": [
                    "212-904-5213",
                    "890-025-4619x713",
                    "537.114.7694"
                ],
                "ea": {
                    "number": "254",
                    "type": "Urban"
                },
                "house_structure_number": "551",
                "household_number_within_house": "15",
                "residence_type": "Urban",
                "date_started": "2025-01-04",
                "date_completed": "2025-01-03",
                "total_visits": 4
            },
            "roster": [
                {
                    "name": "Rachel Smith",
                    "age": 88,
                    "sex": "female",
                    "relationship_code": "02"
                },
                {
                    "name": "Wendy Porter",
                    "age": 6,
                    "sex": "male",
                    "relationship_code": "01"
                },
                {
                    "name": "Michele Santiago",
                    "age": 64,
                    "sex": "male",
                    "relationship_code": "11"
                },
                {
                    "name": "Michelle Burgess",
                    "age": 2,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Keith Yang",
                    "age": 93,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Traci Brooks",
                    "age": 22,
                    "sex": "female",
                    "relationship_code": "03"
                },
                {
                    "name": "Jennifer Knapp",
                    "age": 44,
                    "sex": "female",
                    "relationship_code": "11"
                },
                {
                    "name": "Francisco Morris",
                    "age": 57,
                    "sex": "female",
                    "relationship_code": "09"
                }
            ],
            "absentees": [
                {
                    "name": "Michael Hoffman",
                    "age": 39,
                    "sex": "female",
                    "destination": {
                        "town": "Garciaville",
                        "region": "Ashanti",
                        "code": "02"
                    },
                    "months_absent": 12
                },
                {
                    "name": "Mitchell Mason",
                    "age": 17,
                    "sex": "male",
                    "destination": {
                        "town": "Jimenezfurt",
                        "region": "Greater Accra",
                        "code": "09"
                    },
                    "months_absent": 7
                },
                {
                    "name": "Melanie West",
                    "age": 44,
                    "sex": "male",
                    "destination": {
                        "town": "East Jamesshire",
                        "region": "Ashanti",
                        "code": "07"
                    },
                    "months_absent": 5
                }
            ],
            "emigration": [
                {
                    "name": "Robert Wilson",
                    "age": 36,
                    "sex": "female",
                    "relationship_code": "01",
                    "country_name": "United Kingdom",
                    "country_code": "21",
                    "year_of_departure": 2021,
                    "activity_abroad": "Student"
                },
                {
                    "name": "Russell King",
                    "age": 25,
                    "sex": "female",
                    "relationship_code": "03",
                    "country_name": "United States",
                    "country_code": "16",
                    "year_of_departure": 2012,
                    "activity_abroad": "Student"
                }
            ],
            "mortality": [
                {
                    "name": "Ashley Taylor",
                    "sex": "male",
                    "age": 45,
                    "unnatural_death": true,
                    "death_while_pregnant": false
                }
            ],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": false
            },
            "agriculture": {
                "farms_crops": true,
                "grows_trees": false,
                "rear_livestock": false,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 5,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Maize",
                        "crop_code": "16",
                        "farm_size": 9,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Rice",
                        "crop_code": "15",
                        "farm_size": 1,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Chickens",
                        "number": 25,
                        "livestock_code": "10"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Compound House",
                "outer_wall": "Wood",
                "floor": "Cement",
                "roof": "Asbestos",
                "tenure_arrangement": "Rented",
                "ownership_type": "Government",
                "rooms": {
                    "total": 3,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 2
                },
                "lighting": "Electricity",
                "water_supply": {
                    "source_drinking_water": "Pipe-borne",
                    "source_domestic_activities": "Pipe-borne"
                },
                "cooking_fuel": "Charcoal",
                "cooking_space": "Open Space",
                "bathing_facility": "Shared Bathroom",
                "toilet_facility": {
                    "type": "Flush",
                    "shared": true,
                    "total": 2,
                    "total_household_use": 2
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        },
        {
            "front_page": {
                "hometown": "Ashleyton",
                "region": {
                    "name": "Brong Ahafo",
                    "code": "02"
                },
                "house_address": "440 Peter Causeway\nNew Christine, CO 34144",
                "district": {
                    "name": "North Richardfurt",
                    "code": "1880"
                },
                "district_type": {
                    "name": "Municipal",
                    "code": "26"
                },
                "locality": {
                    "name": "East Cynthiaville",
                    "code": "6630"
                },
                "sub_district": "Ashley Bypass",
                "NHIS_ECG_VRA_OtherNumber": "730-017-3416",
                "household_contacts": [
                    "(525)759-8572x171",
                    "(141)736-7600"
                ],
                "ea": {
                    "number": "345",
                    "type": "Urban"
                },
                "house_structure_number": "914",
                "household_number_within_house": "13",
                "residence_type": "Rural",
                "date_started": "2025-01-07",
                "date_completed": "2025-01-06",
                "total_visits": 2
            },
            "roster": [
                {
                    "name": "David Jensen",
                    "age": 65,
                    "sex": "male",
                    "relationship_code": "02"
                },
                {
                    "name": "Christopher Perry",
                    "age": 43,
                    "sex": "female",
                    "relationship_code": "06"
                },
                {
                    "name": "Joe Orozco",
                    "age": 20,
                    "sex": "male",
                    "relationship_code": "05"
                },
                {
                    "name": "Stephen Cummings",
                    "age": 43,
                    "sex": "male",
                    "relationship_code": "03"
                },
                {
                    "name": "Charles Sanders",
                    "age": 72,
                    "sex": "male",
                    "relationship_code": "10"
                },
                {
                    "name": "Jerry Long",
                    "age": 75,
                    "sex": "male",
                    "relationship_code": "01"
                }
            ],
            "absentees": [
                {
                    "name": "Michelle Turner",
                    "age": 58,
                    "sex": "female",
                    "destination": {
                        "town": "South Nancymouth",
                        "region": "Ashanti",
                        "code": "02"
                    },
                    "months_absent": 2
                }
            ],
            "emigration": [],
            "mortality": [],
            "household_ict": {
                "has_fixed_telephone": false,
                "has_computer": true
            },
            "agriculture": {
                "farms_crops": false,
                "grows_trees": true,
                "rear_livestock": true,
                "farms_fish": false,
                "family_farming_count": {
                    "male": 1,
                    "female": 1
                },
                "crops": [
                    {
                        "crop_type": "Yam",
                        "crop_code": "47",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Cassava",
                        "crop_code": "04",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mono Cropping"
                    },
                    {
                        "crop_type": "Yam",
                        "crop_code": "36",
                        "farm_size": 5,
                        "measurement_unit": "Acre",
                        "cropping_type": "Mixed Cropping"
                    }
                ],
                "livestock_or_fisheries": [
                    {
                        "type": "Pigs",
                        "number": 49,
                        "livestock_code": "04"
                    }
                ]
            },
            "housing_conditions": {
                "type": "Flat/Apartment",
                "outer_wall": "Brick",
                "floor": "Tile",
                "roof": "Metal Sheet",
                "tenure_arrangement": "Rent-free",
                "ownership_type": "Government",
                "rooms": {
                    "total": 6,
                    "bedroom_count": 4,
                    "share_room_with_other_household": false,
                    "total_household_share_with_other_household": 4
                },
                "lighting": "Solar",
                "water_supply": {
                    "source_drinking_water": "Rain Water",
                    "source_domestic_activities": "River"
                },
                "cooking_fuel": "Firewood",
                "cooking_space": "Separate Room",
                "bathing_facility": "Public Bathhouse",
                "toilet_facility": {
                    "type": "KVIP",
                    "shared": true,
                    "total": 3,
                    "total_household_use": 4
                },
                "solid_waste_disposal": "Dumping",
                "liquid_waste_disposal": "None"
            }
        }
    ],
    loading: false,
    error: null,
    step: 0,
    totalSteps: 14,
    front_page: {
        hometown: '',
        region: {name: '', code: ''},
        house_address: '',
        district: {name: '', code: ''},
        district_type: {name: '', code: ''},
        locality: {name: '', code: ''},
        sub_district: '',
        NHIS_ECG_VRA_OtherNumber: '',
        household_contacts: [],
        ea: {number: '', type: ''},
        house_structure_number: '',
        household_number_within_house: '',
        residence_type: '',
        date_started: '',
        date_completed: '',
        total_visits: 1,
    },
    roster: [
        {
            name: 'Emmanuella Sangmuah',
            age: 26,
            sex: 'female',
        },
        {
            name: 'Yvonne Dewortor',
            age: 27,
            sex: 'female',
        },
        {
            name: 'Pontifex Maximus',
            age: 30,
            sex: 'male',
        }
    ], // full name, relationship code, sex, status, dob, destination, country_code, absent_months,
    absentees: [],
    household: null,
    // literacy: language, school, highest level school, highest grade attained,
    // economic: name of establishment, location of establishment, main product or service, service code, employment status, sector
    // disability: sight, hearing, physical, intellect, emotion, speech, other
    // ict: phone, internet
    // fertility: male, female, surviving: male, female, past 12 months: male female
    emigration: [],// full name, relationship code, sex, status, dob, destination: country, code, country_code, departure_year, activity_abroad, religion, ethnicity, nationality, birthplace, place_of_residence, marital_status, is_living_in_town_since_birth, years_lived_in_village
    mortality: [], // name, sex, age, unnatural death, birth death
    household_ict: {
        has_fixed_telephone: false,
        has_computer: false,
    },
    agriculture: {
        farms_crops: true,
        grows_trees: false,
        rear_livestock: false,
        farms_fish: false,
        family_farming_count: {
            male: 0,
            female: 0
        },
        crops: [],// crop type, crop code, farm size, measurement unit, cropping type
        livestock_or_fisheries: [], // type of livestock or fishery, number, livestock or fishery code
    },
    housing_conditions: {
        type: '',
        outer_wall: '',
        floor: '',
        roof: '',
        tenure_arrangement: '',
        ownership_type: '',
        rooms: {
            total: 0,
            bedroom_count: 0,
            share_room_with_other_household: true,
            total_household_share_with_other_household: 0
        },
        lighting: '',
        water_supply: {
            source_drinking_water: '',
            source_domestic_activities: ''
        },
        cooking_fuel: '',
        cooking_space: '',
        bathing_facility: '',
        toilet_facility: {
            type: '',
            shared: false,
            total: 0,
            total_household_use: 0
        },
        solid_waste_disposal: '',
        liquid_waste_disposal: '',
    }
};

const createHousehold = createAsyncThunk('households/createHousehold', async ({token}, thunkAPI) => {
    try {
        const response = await HOUSEHOLD_API.createHousehold({token})

        return response.data.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});


const loadHousehold = createAsyncThunk('households/loadHousehold', async ({token}, thunkAPI) => {
    try {
        const response = await HOUSEHOLD_API.createHousehold({token})

        return response.data.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});


const householdSlice = createSlice({
    name: "households",
    initialState,
    reducers: {
        next: (state) => {
            state.step = state.step === state.totalSteps ? state.step : state.step + 1;
        },
        goto: (state, action) => {
            state.step = action.payload;
        },
        previous: state => {
            state.step = state.step === 0 ? 0 : state.step - 1;
        },
        save: (state, action) => {
            state = {...state, ...action.payload}
        },
        load: (state, action) => {
        },
        saveHouseholdICT: (state, action) => {
            state.household_ict = action.payload;
        },
        saveHousingConditions: (state, action) => {
            state.household_conditions = action.payload;
        },
        saveRoster: (state, action) => {
            state.roster = action.payload;
        },
        saveAbsentees: (state, action) => {
            state.absentees = action.payload;
        },
        saveEmigration: (state, action) => {
            state.emigration = action.payload;
        },
        setHousehold: (state, action) => {
            state.household = action.payload;
        }
    },

    extraReducers: builder => {
        builder.addCase(createHousehold.pending, (state, action) => {

        }).addCase(createHousehold.fulfilled, (state, action) => {

        }).addCase(createHousehold.rejected, (state, action) => {

        }).addCase(loadHousehold.pending, (state, action) => {

        }).addCase(loadHousehold.fulfilled, (state, action) => {

        }).addCase(loadHousehold.rejected, (state, action) => {

        })
    }
});

export const selectHousehold = state => state.households;
const {reducer, actions} = householdSlice;
export const HOUSEHOLD_ACTIONS = {
    next: actions.next,
    goto: actions.goto,
    previous: actions.previous,
    createHousehold,
    saveHouseholdICT: actions.saveHouseholdICT,
    saveHousingConditions: actions.saveHousingConditions,
    saveRoster: actions.saveRoster,
    saveAbsentees: actions.saveAbsentees,
    saveEmigration: actions.saveEmigration,
    setHousehold: actions.setHousehold
};
export default reducer;