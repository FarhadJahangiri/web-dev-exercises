users = [
    {
        "first_name": "Brain",
        "last_name": "Mohr",
        "age": 54
    },
    {
        "first_name": "Bella",
        "last_name": "VonRueden",
        "age": 17
    },
    {
        "first_name": "Franz",
        "last_name": "Raynor",
        "age": 28
    },
    {
        "first_name": "Celestino",
        "last_name": "Bailey",
        "age": 61
    }
]

for user in users:
    if user["age"] <= 18:
        print(user["first_name"],"you are child")
    else:
        print(user["first_name"],"you are adult")