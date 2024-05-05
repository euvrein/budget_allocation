const recurrences = [
    {
        "id": "1",
        "name": "Daily",
        "number_of_days": 1
    }, 
    {
        "id": "2",
        "name": "Weekly",
        "number_of_days": 7
    },
    {
        "id": "3",
        "name": "Fornightly",
        "number_of_days": 14
    },
    {
        "id": "4",
        "name": "Monthly",
        "number_of_days": 30.4375
    },
    {
        "id": "5",
        "name": "Quarterly",
        "number_of_days": 91.3125
    },
    {
        "id": "6",
        "name": "Annually",
        "number_of_days": 365.25
    }
];

const default_data = [
    {
        "id": "1100",
        "name": "Income",
        "description": "Income",
        "icon": "<i class='fa-solid fa-hand-holding-dollar'></i>",
        "total" : 10000,
        "subcategory" : [
            {
                "id":"110001",
                "description": "Full-Time Salary",
                "amount" : 1000,
                "recurrence": "Daily"
            },
            {
                "id":"110002",
                "description": "Part-Time Salary",
                "amount" : 1000,
                "recurrence": "Daily"
            },
            {
                "id":"110003",
                "description": "Partner's Salary",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"110004",
                "description": "Overtime Salary",
                "amount" : 0,
                "recurrence": "Daily"
            },    
            {
                "id":"110005",
                "description": "Bonus",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"110006",
                "description": "Investment Income",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"110007",
                "description": "Government Benefits",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"110008",
                "description": "Family Benefit payments",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"110009",
                "description": "Child Support",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"110010",
                "description": "Savings Income",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"110011",
                "description": "Allowance",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"110012",
                "description": "Other Income",
                "amount" : 0,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1200",
        "name": "HouseBills",
        "description": "House Bills",
        "icon": "<i class='fa-solid fa-house-crack'></i>",
        "total" : 0,
        "subcategory" : [
            {
                "id":"120001",
                "description": "Mortgage",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120002",
                "description": "Rent",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120003",
                "description": "Corporate Fees",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120004",
                "description": "Council Rate",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120005",
                "description": "Appliances",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120006",
                "description": "Renovations",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120007",
                "description": "Electricity",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120008",
                "description": "Gas",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120009",
                "description": "Water",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120010",
                "description": "Internet",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120011",
                "description": "Cable TV",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120012",
                "description": "Home Phone",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120013",
                "description": "Mobile Phone",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120014",
                "description": "Furnitures",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120015",
                "description": "House Gardening",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120016",
                "description": "House Cleaning",
                "amount" : 0,
                "recurrence": "Daily"
            },

            {
                "id":"120017",
                "description": "House Maintenance",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"120018",
                "description": "Others",
                "amount" : 0,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1300",
        "name": "Finance",
        "description": "Finance",
        "icon": "<i class='fa-solid fa-file-invoice-dollar'></i>",
        "total" : 0,
        "subcategory" : [
            {
                "id":"130001",
                "description": "Home Insurance",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130002",
                "description": "Health Insurance",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130003",
                "description": "Personal Insurance",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130004",
                "description": "Life Insurance",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130007",
                "description": "Personal Loan",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130008",
                "description": "Credit Card Interest",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130009",
                "description": "Superannuation Contributions",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130010",
                "description": "Investments",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130011",
                "description": "Savings",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130012",
                "description": "Charity Donations",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130013",
                "description": "Church Donations",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130014",
                "description": "Debts",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"130015",
                "description": "Others",
                "amount" : 0,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1400",
        "name": "Transportation",
        "description": "Transportation",
        "icon": "<i class='fa-solid fa-taxi'></i>'",
        "total" : 0,
        "subcategory" : [
            {
                "id":"140001",
                "description": "Public Transporation",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140002",
                "description": "Petrol",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140004",
                "description": "Car Insurance",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140005",
                "description": "Car Loan",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140006",
                "description": "Vehicle Registration",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140007",
                "description": "Driver's License",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140008",
                "description": "Parking Fee",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140009",
                "description": "Vehicle Maintenance",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140010",
                "description": "Vehicle Repairs",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140011",
                "description": "Road Tolls",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140012",
                "description": "Ferry",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"140013",
                "description": "AirFare",
                "amount" : 0
            },
            {
                "id":"140014",
                "description": "Others",
                "amount" : 0,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1500",
        "name": "Groceries",
        "description": "Groceries",
        "icon": "<i class='fa-solid fa-cart-shopping'></i>",
        "total" : 0,
        "subcategory" : [
            {
                "id":"150001",
                "description": "Super Market",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150002",
                "description": "Butcher",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150003",
                "description": "Fish shop",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150004",
                "description": "Fruits",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150005",
                "description": "Vegetables",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150006",
                "description": "Butcher",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150007",
                "description": "Canned Goods",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150008",
                "description": "Snack",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150009",
                "description": "Juices",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150010",
                "description": "Dairy Products",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150011",
                "description": "Bakery",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150012",
                "description": "Toiletries",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150013",
                "description": "Cleaning Materials",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"150014",
                "description": "Others",
                "amount" : 0,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1600",
        "name": "Children",
        "description": "Children",
        "icon": "<i class='fa-solid fa-person-breastfeeding'></i>",
        "total" : 0,
        "subcategory" : [
            {
                "id":"160001",
                "description": "Baby Products",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160002",
                "description": "Baby Sitting",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160003",
                "description": "Child Care",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160004",
                "description": "Toys",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160005",
                "description": "Children's Clothes",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160006",
                "description": "Sports and Activities",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160007",
                "description": "School Fees",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160008",
                "description": "Excursions",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160009",
                "description": "School Uniforms",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160010",
                "description": "School Needs",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160011",
                "description": "Child Support Payment",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"160012",
                "description": "Others",
                "amount" : 0,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1700",
        "name": "Personal",
        "description": "Personal",
        "icon": "<i class='fa-solid fa-user'></i>",
        "total" : 0,
        "subcategory" : [
            {
                "id":"170001",
                "description": "Medicines",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"170002",
                "description": "Eye Care",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"170003",
                "description": "Dental",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"170004",
                "description": "Medical Fees",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"170005",
                "description": "Education",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"170006",
                "description": "Computer",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"170007",
                "description": "Hair and Beauty",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"170008",
                "description": "Cosmetics",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"170009",
                "description": "Others",
                "amount" : 0,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1800",
        "name": "Entertainment",
        "description": "Entertainment",
        "icon": "<i class='fa-solid fa-masks-theater'></i>",
        "total" : 0,
        "subcategory" : [
            {
                "id":"180001",
                "description": "Newspaper",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180002",
                "description": "Magazines",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180003",
                "description": "Books",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180004",
                "description": "Music",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180005",
                "description": "Fast Food",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180006",
                "description": "Coffee and Tea",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180007",
                "description": "Take-away foods",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180008",
                "description": "Restaurants",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180009",
                "description": "Movies",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180010",
                "description": "Concerts",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180011",
                "description": "Bars or Clubs",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"180012",
                "description": "Others",
                "amount" : 0,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1900",
        "name": "Miscellaneous",
        "description": "Miscellaneous",
        "icon": "<i class='fa-solid fa-tags'></i>",
        "total" : 10,
        "subcategory" : [
            {
                "id":"190001",
                "description": "Hobbies",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190002",
                "description": "Clothing",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190003",
                "description": "Jewelry",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190004",
                "description": "Accessories",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190005",
                "description": "Gadgets",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190006",
                "description": "Clothing",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190007",
                "description": "Shoes",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190008",
                "description": "Club Membership",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190009",
                "description": "Gym Memberships",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190010",
                "description": "Holidays",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190011",
                "description": "Pet Care",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190012",
                "description": "Pet Food",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190013",
                "description": "Veterinarian",
                "amount" : 0,
                "recurrence": "Daily"
            },
            {
                "id":"190014",
                "description": "Fines",
                "amount" : 2100,
                "recurrence": "Daily"
            },
            {
                "id":"190015",
                "description": "Others",
                "amount" : 1300,
                "recurrence": "Daily"
            }
        ]
    }
];