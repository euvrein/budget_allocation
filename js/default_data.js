const device_information = 
    {
        "id": "1",
        "version": "1.0.1",
        "app_name": "BudgetPlan"
    }
;

const recurrences = [
    {
        "id": "100",
        "name": "Daily",
        "number_of_days": 1
    }, 
    {
        "id": "700",
        "name": "Weekly",
        "number_of_days": 7
    },
    {
        "id": "140",
        "name": "Fornightly",
        "number_of_days": 14
    },
    {
        "id": "300",
        "name": "Monthly",
        "number_of_days": 30.4375
    },
    {
        "id": "900",
        "name": "Quarterly",
        "number_of_days": 91.3125
    },
    {
        "id": "365",
        "name": "Annually",
        "number_of_days": 365.25
    }
];

const summary_description = [
    {
        "id": "10001",
        "name": "Surplus",
        "smiley": "<i class='fa-regular fa-face-smile'></i>",
        "description": "This means that there are more money coming in than going out. This indicates that you have financial wealth which allows you to save, invest, or pay off debts."
    },
    {
        "id": "20001",
        "name": "Balance",
        "smiley": "<i class='fa-regular fa-face-grin-beam-sweat'></i>",
        "description": "This means that your income equals your expenses. This signifies financial responsibility and sustainability. However, this can be challenging for you, especially in times of increased spending needs."
    },
    {
        "id": "30001",
        "name": "Deficit",
        "smiley": "<i class='fa-regular fa-face-sad-cry'></i>",
        "description": "This means that there are not enough money to cover your planned expenditures. This indicates that you have financial instability and may lead you to debt accumulation."
    }
];

var default_data = [
    {
        "id": "1100",
        "name": "Income",
        "description": "Income",
        "icon": "<i class='fa-solid fa-hand-holding-dollar'></i>",
        "daily_total" : 0,
        "subcategory" : [
            {
                "id":"110001",
                "description": "Full-Time Salary",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"110002",
                "description": "Part-Time Salary",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"110003",
                "description": "Spouse's Salary",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"110004",
                "description": "Overtime Salary",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"110011",
                "description": "Allowance",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },    
            {
                "id":"110005",
                "description": "Bonus",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"110009",
                "description": "Child Support",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"110008",
                "description": "Family Benefit payments",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"110007",
                "description": "Government Benefits",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"110006",
                "description": "Investment Income",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"110010",
                "description": "Savings Income",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"110012",
                "description": "Other Income",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1200",
        "name": "HouseBills",
        "description": "House Bills",
        "icon": "<i class='fa-solid fa-house-crack'></i>",
        "daily_total" : 0,
        "subcategory" : [
            {
                "id":"120005",
                "description": "Appliances",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120011",
                "description": "Cable TV",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120003",
                "description": "Corporate Fees",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120004",
                "description": "Council Rate",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120007",
                "description": "Electricity",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120014",
                "description": "Furnitures",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120008",
                "description": "Gas",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120012",
                "description": "Home Phone",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120016",
                "description": "House Cleaning",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120015",
                "description": "House Gardening",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120017",
                "description": "House Maintenance",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120010",
                "description": "Internet",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120013",
                "description": "Mobile Phone",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120001",
                "description": "Mortgage",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120006",
                "description": "Renovations",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120002",
                "description": "Rent",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"120018",
                "description": "Others",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1300",
        "name": "Finance",
        "description": "Finance",
        "icon": "<i class='fa-solid fa-file-invoice-dollar'></i>",
        "daily_total" : 0,
        "subcategory" : [
            {
                "id":"130012",
                "description": "Charity Donations",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130008",
                "description": "Credit Card Interest",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130014",
                "description": "Debts",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130002",
                "description": "Health Insurance",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130001",
                "description": "Home Insurance",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130010",
                "description": "Investments",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130004",
                "description": "Life Insurance",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130003",
                "description": "Personal Insurance",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130007",
                "description": "Personal Loan",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130011",
                "description": "Savings",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130009",
                "description": "Superannuation Contributions",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"130015",
                "description": "Others",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1400",
        "name": "Transportation",
        "description": "Transportation",
        "icon": "<i class='fa-solid fa-taxi'></i>",
        "daily_total" : 0,
        "subcategory" : [    
            {
                "id":"140013",
                "description": "AirFare",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },        
            {
                "id":"140004",
                "description": "Car Insurance",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140005",
                "description": "Car Loan",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140007",
                "description": "Driver's License",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140012",
                "description": "Ferry",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140008",
                "description": "Parking Fee",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140002",
                "description": "Petrol",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140001",
                "description": "Public Transporation",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140011",
                "description": "Road Tolls",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140009",
                "description": "Vehicle Maintenance",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140006",
                "description": "Vehicle Registration",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140010",
                "description": "Vehicle Repairs",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"140014",
                "description": "Others",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1500",
        "name": "Groceries",
        "description": "Groceries",
        "icon": "<i class='fa-solid fa-cart-shopping'></i>",
        "daily_total" : 0,
        "subcategory" : [
            {
                "id":"150011",
                "description": "Bakery",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150002",
                "description": "Butcher",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150007",
                "description": "Canned Goods",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150013",
                "description": "Cleaning Materials",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150010",
                "description": "Dairy Products",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150003",
                "description": "Fish shop",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150004",
                "description": "Fruits",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150009",
                "description": "Juices",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150008",
                "description": "Snacks",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150001",
                "description": "Super Market",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150012",
                "description": "Toiletries",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150005",
                "description": "Vegetables",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"150014",
                "description": "Others",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1600",
        "name": "Children",
        "description": "Children",
        "icon": "<i class='fa-solid fa-person-breastfeeding'></i>",
        "daily_total" : 0,
        "subcategory" : [
            {
                "id":"160001",
                "description": "Baby Products",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160002",
                "description": "Baby Sitting",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160003",
                "description": "Child Care",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160005",
                "description": "Children's Clothes",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160011",
                "description": "Child Support Payment",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160008",
                "description": "Excursions",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160007",
                "description": "School Fees",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160010",
                "description": "School Needs",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160009",
                "description": "School Uniforms",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160006",
                "description": "Sports and Activities",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160004",
                "description": "Toys",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"160012",
                "description": "Others",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1700",
        "name": "Personal",
        "description": "Personal",
        "icon": "<i class='fa-solid fa-user'></i>",
        "daily_total" : 0,
        "subcategory" : [
            {
                "id":"170006",
                "description": "Computer",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"170008",
                "description": "Cosmetics",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"170003",
                "description": "Dental",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"170005",
                "description": "Education",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"170002",
                "description": "Eye Care",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"170007",
                "description": "Hair and Beauty",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"170004",
                "description": "Medical Fees",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"170001",
                "description": "Medicines",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"170009",
                "description": "Others",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1800",
        "name": "Entertainment",
        "description": "Entertainment",
        "icon": "<i class='fa-solid fa-masks-theater'></i>",
        "daily_total" : 0,
        "subcategory" : [
            {
                "id":"180011",
                "description": "Bars or Clubs",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"180003",
                "description": "Books",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"180006",
                "description": "Coffee and Tea",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"180005",
                "description": "Fast Food",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"180002",
                "description": "Magazines",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"180009",
                "description": "Movies",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"180004",
                "description": "Music",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"180001",
                "description": "Newspaper",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"180008",
                "description": "Restaurants",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"180007",
                "description": "Take-away foods",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"180012",
                "description": "Others",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            }
        ]
    },
    {
        "id": "1900",
        "name": "Miscellaneous",
        "description": "Miscellaneous",
        "icon": "<i class='fa-solid fa-tags'></i>",
        "daily_total" : 0,
        "subcategory" : [
            {
                "id":"190004",
                "description": "Accessories",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190002",
                "description": "Clothing",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190008",
                "description": "Club Membership",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190014",
                "description": "Fines",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190005",
                "description": "Gadgets",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190009",
                "description": "Gym Memberships",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190001",
                "description": "Hobbies",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190010",
                "description": "Holidays",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190003",
                "description": "Jewelry",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190011",
                "description": "Pet Care",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190012",
                "description": "Pet Food",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190007",
                "description": "Shoes",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190013",
                "description": "Veterinarian",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            },
            {
                "id":"190015",
                "description": "Others",
                "daily_amount" : 0.00,
                "recurrence_amount" : 0.00,
                "recurrence": "Daily"
            }
        ]
    }
];