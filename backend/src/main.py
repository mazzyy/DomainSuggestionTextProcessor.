# to run the file  uvicorn main:app --reload
# Note you should first cd into src folder
import pandas as pd
import numpy as np
from domainAvailability  import check_domain_extensions,check_domain_availability2

# from dataProcessor.DataProcessor import DataProcessor
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Request
import json
import openai
openai.api_key = "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"
app = FastAPI()
stored_data = None
# tld=[".com",".net",".org",".xyz",".mil",".biz"]
tld=[".com",".net"]

dummy={'sld': 'rapidapi', 'found': True, 'lookup_tlds': 333, 'found_tlds': 9, 'registered': [{'domain': 'rapidapi.site', 'tld': 'site', 'created_at': '2023-08-05 17:10:26', 'updated_at': '2023-08-31 17:14:03', 'expires_at': '2024-08-05 23:59:59'}, {'domain': 'rapidapi.de', 'tld': 'de', 'created_at': '', 'updated_at': '', 'expires_at': ''}, {'domain': 'rapidapi.co', 'tld': 'co', 'created_at': '2019-01-10 01:46:35', 'updated_at': '2023-08-04 01:26:15', 'expires_at': '2024-01-10 01:46:35'}, {'domain': 'rapidapi.dev', 'tld': 'dev', 'created_at': '2020-02-03 19:52:50', 'updated_at': '2023-03-20 19:52:50', 'expires_at': '2024-02-03 19:52:50'}, {'domain': 'rapidapi.online', 'tld': 'online', 'created_at': '2023-02-01 06:46:15', 'updated_at': '2023-08-31 17:04:58', 'expires_at': '2024-02-01 23:59:59'}, {'domain': 'rapidapi.xyz', 'tld': 'xyz', 'created_at': '2016-08-04 11:27:46', 'updated_at': '2023-08-31 16:50:32', 'expires_at': '2024-08-04 23:59:59'}, {'domain': 'rapidapi.cloud', 'tld': 'cloud', 'created_at': '2016-10-30 15:19:56', 'updated_at': '2023-10-10 17:33:29', 'expires_at': '2024-10-30 15:19:56'}, {'domain': 'rapidapi.co.nz', 'tld': 'co.nz', 'created_at': '2020-11-25 01:17:14', 'updated_at': '2023-09-30 08:32:08', 'expires_at': ''}, {'domain': 'rapidapi.us', 'tld': 'us', 'created_at': '2020-11-25 01:17:31', 'updated_at': '2023-06-08 21:08:56', 'expires_at': '2023-11-25 01:17:31'}]}
origins = ["*",]
suggestions_data = {}

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/test2")
async def read_data1(request: Request):
   try:
        data = await request.json()
        user_input = data["data"]
        
        
        # Create a prompt for GPT-3

        prompt = f"Suggest short few website names related to: {user_input} example that ends with .com\ or .net in small alphabatic order"
        
   
        # Use GPT-3 to generate suggestions
        response = openai.Completion.create(
            engine="text-davinci-001",
            prompt=prompt,
            max_tokens=10,  # Adjust the max_tokens as needed
            n=5 # Specify the number of movie name suggestions you want
        )
        # Extract and return the suggestion choice text
        suggestions = [choice['text'].strip() for choice in response.choices]
        suggestions_cleaned = [suggestion.split('.', 1)[0].replace(" ", "") for suggestion in suggestions]
        # Remove "www" and non-alphabetical characters
        suggestions_cleaned = [word for word in suggestions_cleaned if word != "www" and word.isalpha()]
        # Convert to lowercase and sort alphabetically
        suggestions_cleaned = sorted(suggestions_cleaned, key=lambda word: word.lower())
      

        
      
        #remove dubliactes from list
        suggestions_cleaned = list(dict.fromkeys(suggestions_cleaned))
        print(suggestions_cleaned)
       
        
        # # print(check_domain_extensions(suggestions_cleaned[0]))
        # print(suggestions_cleaned)
        # this is for function check_domain_extensions
        # for suggestion in suggestions_cleaned:
        #     domain_info = check_domain_extensions(suggestion)
        #     domains = [entry["tld"] for entry in domain_info["registered"]]

        #     suggestions_data[suggestion] = domains
        # print(suggestions_cleaned[0] + ".com")
       
        # domainAvb = check_domain_availability2(suggestions_cleaned[0] + ".com")

        registereddata = {}  # Initialize an empty dictionary to store data

        for suggestion in suggestions_cleaned:
            domain_info = {}  # Initialize a dictionary to store domain availability for the current suggestion

            for extension in tld:
                full_domain = suggestion + extension
                try:
                    availability = check_domain_availability2(full_domain)
                    # Assuming "availability" contains a boolean value indicating if the domain is registered
                    domain_info[extension] = availability["registered"]
                except Exception as e:
                    print(f"Error for domain {full_domain}: {e}")
                    continue  # Skip the current suggestion in case of an error

            registereddata[suggestion] = domain_info

       
        
        print(registereddata)   



     
        

        # Construct the JSON response
        json_response = {"suggestions": registereddata}
        

        return json_response
   except Exception as e:
        return {"error": str(e)}
 

    




@app.get("/chat")
async def read_data1(data: str = "Suggest some website names related to: bloggin"):
    response = openai.Completion.create(engine="text-davinci-001", prompt=data, max_tokens=15)
    print(response)

    return {"response": response}


 





@app.get("/")
async def read_root():
    return {"world is": "blind22 :)"}
