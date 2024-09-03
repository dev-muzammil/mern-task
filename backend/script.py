import sys 
import json

data = [
  {
    "name": "InnovateX",
    "industry": "Technology",
    "founded": "2022-03-15",
    "headquarters": {
      "city": "Silicon Valley",
      "state": "CA",
      "country": "USA"
    },
    "employees": 50,
    "revenue": 1000000,
    "averageMonthlySale": 500000 
  },
  {
    "name": "MegaMart",
    "industry": "Retail",
    "founded": "1985-07-20",
    "headquarters": {
      "city": "New York",
      "state": "NY",
      "country": "USA"
    },
    "employees": 25000,
    "revenue": 5000000000,
    "averageMonthlySale": 2000000

  },
  {
    "name": "AutoDrive",
    "industry": "Automotive",
    "founded": "1905-01-01",
    "headquarters": {
      "city": "Detroit",
      "state": "MI",
      "country": "USA"
    },
    "employees": 100000,
    "revenue": 20000000000,
    "averageMonthlySale": 700000 

  },
  {
    "name": "Meditech",
    "industry": "Pharmaceutical",
    "founded": "1970-04-15",
    "headquarters": {
      "city": "Basel",
      "country": "Switzerland"
    },
    "employees": 15000,
    "revenue": 8000000000,
    "averageMonthlySale": 900000 

  },
  {
    "name": "PowerSource",
    "industry": "Energy",
    "founded": "1880-09-25",
    "headquarters": {
      "city": "Houston",
      "state": "TX",
      "country": "USA"
    },
    "employees": 50000,
    "revenue": 30000000000,
    "averageMonthlySale": 600000 

  },
  {
    "name": "WealthInvest",
    "industry": "Financial Services",
    "founded": "1920-02-10",
    "headquarters": {
      "city": "London",
      "country": "United Kingdom"
    },
    "employees": 30000,
    "revenue": 15000000000,
    "averageMonthlySale": 400000 

  },
  {
    "name": "GlobalMedia",
    "industry": "Media and Entertainment",
    "founded": "1955-05-15",
    "headquarters": {
      "city": "Los Angeles",
      "state": "CA",
      "country": "USA"
    },
    "employees": 20000,
    "revenue": 10000000000,
    "averageMonthlySale": 900000 

  },
  {
    "name": "IndustrialTech",
    "industry": "Manufacturing",
    "founded": "1930-11-20",
    "headquarters": {
      "city": "Chicago",
      "state": "IL",
      "country": "USA"
    },
    "employees": 75000,
    "revenue": 25000000000,
    "averageMonthlySale": 1200000 

  },
  {
    "name": "HotelChain",
    "industry": "Hospitality",
    "founded": "1965-08-01",
    "headquarters": {
      "city": "Orlando",
      "state": "FL",
      "country": "USA"
    },
    "employees": 50000,
    "revenue": 15000000000,
    "averageMonthlySale": 2100000 

  },
  {
    "name": "TechConsult",
    "industry": "Technology Consulting",
    "founded": "1995-03-15",
    "headquarters": {
      "city": "Boston",
      "state": "MA",
      "country": "USA"
    },
    "employees": 10000,
    "revenue": 5000000000,
    "averageMonthlySale": 590000

  }
] 

print(json.dumps(data))
sys.stdout.flush()