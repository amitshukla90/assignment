# assignment
To run the project follow below steps
# Run command : nmp install
# Go into project Folder
# Run Command: node ./src/app.js

# Run below curl
curl --location --request POST 'localhost:8080/bmi/calculate-bmi' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "Gender": "Male",
        "HeightCm": 180,
        "WeightKg": 77
    },
    {
        "Gender": "Female",
        "HeightCm": 166,
        "WeightKg": 62
    },
    {
        "Gender": "Female",
        "HeightCm": 150,
        "WeightKg": 70
    },
    {
        "Gender": "Female",
        "HeightCm": 167,
        "WeightKg": 82
    },
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    },
    {
        "Gender": "Male",
        "HeightCm": 161,
        "WeightKg": 85
    }
]'

# Sample Response:
 
{
    "overWeightCount": 4,
    "data": [
        {
            "Gender": "Male",
            "HeightCm": 180,
            "WeightKg": 77,
            "Bmi": "23.77",
            "BmiCategory": "Normal weight",
            "HealthRisk": "Low risk"
        },
        {
            "Gender": "Female",
            "HeightCm": 166,
            "WeightKg": 62,
            "Bmi": "22.50",
            "BmiCategory": "Normal weight",
            "HealthRisk": "Low risk"
        },
        {
            "Gender": "Female",
            "HeightCm": 150,
            "WeightKg": 70,
            "Bmi": "31.11",
            "BmiCategory": "Moderately obese",
            "HealthRisk": "Medium risk"
        },
        {
            "Gender": "Female",
            "HeightCm": 167,
            "WeightKg": 82,
            "Bmi": "29.40",
            "BmiCategory": "Overweight",
            "HealthRisk": "Enhanced risk"
        },
        {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 96,
            "Bmi": "32.83",
            "BmiCategory": "Moderately obese",
            "HealthRisk": "Medium risk"
        },
        {
            "Gender": "Male",
            "HeightCm": 161,
            "WeightKg": 85,
            "Bmi": "32.79",
            "BmiCategory": "Moderately obese",
            "HealthRisk": "Medium risk"
        }
    ]
}
