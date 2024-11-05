const cities =[
    {
        "city": "Mumbai",
        "growth_from_2000_to_2013": "24.8%",
        "latitude": 19.075984,
        "longitude": 72.877656,
        "population": "12442373",
        "rank": "1",
        "state": "Maharashtra"
    },
    {
        "city": "Delhi",
        "growth_from_2000_to_2013": "32.0%",
        "latitude": 28.613939,
        "longitude": 77.209023,
        "population": "11007835",
        "rank": "2",
        "state": "Delhi"
    },
    {
        "city": "Bangalore",
        "growth_from_2000_to_2013": "38.0%",
        "latitude": 12.971599,
        "longitude": 77.594566,
        "population": "8443675",
        "rank": "3",
        "state": "Karnataka"
    },
    {
        "city": "Hyderabad",
        "growth_from_2000_to_2013": "32.0%",
        "latitude": 17.385044,
        "longitude": 78.486671,
        "population": "6809970",
        "rank": "4",
        "state": "Telangana"
    },
    {
        "city": "Ahmedabad",
        "growth_from_2000_to_2013": "26.0%",
        "latitude": 23.022505,
        "longitude": 72.571362,
        "population": "5570585",
        "rank": "5",
        "state": "Gujarat"
    },
    {
        "city": "Chennai",
        "growth_from_2000_to_2013": "27.0%",
        "latitude": 13.082680,
        "longitude": 80.270718,
        "population": "4646732",
        "rank": "6",
        "state": "Tamil Nadu"
    },
    {
        "city": "Kolkata",
        "growth_from_2000_to_2013": "10.0%",
        "latitude": 22.572646,
        "longitude": 88.363895,
        "population": "4486679",
        "rank": "7",
        "state": "West Bengal"
    },
    {
        "city": "Surat",
        "growth_from_2000_to_2013": "53.0%",
        "latitude": 21.170240,
        "longitude": 72.831062,
        "population": "4465601",
        "rank": "8",
        "state": "Gujarat"
    },
    {
        "city": "Pune",
        "growth_from_2000_to_2013": "30.0%",
        "latitude": 18.520430,
        "longitude": 73.856743,
        "population": "3115431",
        "rank": "9",
        "state": "Maharashtra"
    },
    {
        "city": "Jaipur",
        "growth_from_2000_to_2013": "32.0%",
        "latitude": 26.912434,
        "longitude": 75.787270,
        "population": "3073350",
        "rank": "10",
        "state": "Rajasthan"
    },
    {
        "city": "Lucknow",
        "growth_from_2000_to_2013": "27.0%",
        "latitude": 26.846694,
        "longitude": 80.946166,
        "population": "2815600",
        "rank": "11",
        "state": "Uttar Pradesh"
    },
    {
        "city": "Kanpur",
        "growth_from_2000_to_2013": "22.0%",
        "latitude": 26.449925,
        "longitude": 80.331870,
        "population": "2762798",
        "rank": "12",
        "state": "Uttar Pradesh"
    },
    {
        "city": "Nagpur",
        "growth_from_2000_to_2013": "20.0%",
        "latitude": 21.145800,
        "longitude": 79.088158,
        "population": "2405665",
        "rank": "13",
        "state": "Maharashtra"
    },
    {
        "city": "Indore",
        "growth_from_2000_to_2013": "23.0%",
        "latitude": 22.719568,
        "longitude": 75.857727,
        "population": "1966524",
        "rank": "14",
        "state": "Madhya Pradesh"
    },
    {
        "city": "Thane",
        "growth_from_2000_to_2013": "22.0%",
        "latitude": 19.218330,
        "longitude": 72.978088,
        "population": "1841485",
        "rank": "15",
        "state": "Maharashtra"
    },
    {
        "city": "Bhopal",
        "growth_from_2000_to_2013": "21.0%",
        "latitude": 23.259933,
        "longitude": 77.412613,
        "population": "1776454",
        "rank": "16",
        "state": "Madhya Pradesh"
    },
    {
        "city": "Visakhapatnam",
        "growth_from_2000_to_2013": "19.0%",
        "latitude": 17.686815,
        "longitude": 83.218481,
        "population": "1630898",
        "rank": "17",
        "state": "Andhra Pradesh"
    },
    {
        "city": "Vadodara",
        "growth_from_2000_to_2013": "18.0%",
        "latitude": 22.307159,
        "longitude": 73.181221,
        "population": "1546026",
        "rank": "18",
        "state": "Gujarat"
    },
    {
        "city": "Rajkot",
        "growth_from_2000_to_2013": "16.0%",
        "latitude": 22.303894,
        "longitude": 70.802159,
        "population": "1392018",
        "rank": "19",
        "state": "Gujarat"
    },
    {
        "city": "Chandigarh",
        "growth_from_2000_to_2013": "15.0%",
        "latitude": 30.733315,
        "longitude": 76.779419,
        "population": "1290000",
        "rank": "20",
        "state": "Chandigarh"
    },
    {
        "city": "Mysore",
        "growth_from_2000_to_2013": "14.0%",
        "latitude": 12.295810,
        "longitude": 76.639381,
        "population": "920550",
        "rank": "21",
        "state": "Karnataka"
    },
    {
        "city": "Jodhpur",
        "growth_from_2000_to_2013": "12.0%",
        "latitude": 26.238945,
        "longitude": 73.024309,
        "population": "842648",
        "rank": "22",
        "state": "Rajasthan"
    },
    {
        "city": "Gwalior",
        "growth_from_2000_to_2013": "11.0%",
        "latitude": 26.218255,
        "longitude": 78.182831,
        "population": "767723",
        "rank": "23",
        "state": "Madhya Pradesh"
    },
    {
        "city": "Aurangabad",
        "growth_from_2000_to_2013": "10.0%",
        "latitude": 19.876165,
        "longitude": 75.343306,
        "population": "689695",
        "rank": "24",
        "state": "Maharashtra"
    },
    {
        "city": "Srinagar",
        "growth_from_2000_to_2013": "9.0%",
        "latitude": 34.083656,
        "longitude": 74.797371,
        "population": "586141",
        "rank": "25",
        "state": "Jammu and Kashmir"
    },
    {
        "city": "Shimla",
        "growth_from_2000_to_2013": "8.0%",
        "latitude": 31.104814,
        "longitude": 77.173403,
        "population": "531924",
        "rank": "26",
        "state": "Himachal Pradesh"
    },
    {
        "city": "Dehradun",
        "growth_from_2000_to_2013": "7.0%",
        "latitude": 30.316494,
        "longitude": 78.032188,
        "population": "579823",
        "rank": "27",
        "state": "Uttarakhand"
    },
    {
        "city": "Ranchi",
        "growth_from_2000_to_2013": "6.0%",
        "latitude": 23.344101,
        "longitude": 85.309563,
        "population": "547573",
        "rank": "28",
        "state": "Jharkhand"
    },
    {
        "city": "Bhubaneswar",
        "growth_from_2000_to_2013": "5.0%",
        "latitude": 20.296059,
        "longitude": 85.824540,
        "population": "834153",
        "rank": "29",
        "state": "Odisha"
    },
    {
        "city": "Agartala",
        "growth_from_2000_to_2013": "4.0%",
        "latitude": 23.831456,
        "longitude": 91.286223,
        "population": "400004",
        "rank": "30",
        "state": "Tripura"
    }
]


module.exports = cities;