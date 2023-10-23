import requests

# this is good api but very few free trials
def check_domain_availability(domain_name):
    url = "https://domain-checker7.p.rapidapi.com/whois"
    querystring = {"domain": domain_name}
    headers = {
    'X-RapidAPI-Key': '62940be77fmshf486762487e4f48p1094ecjsn3f5ef4e2ead0',
    'X-RapidAPI-Host': 'domain-checker7.p.rapidapi.com'
    }
    response = requests.get(url, headers=headers, params=querystring)
    return response.json()


# this is good api but very few free trials
def check_domain_extensions(domain_name):
  url = "https://domain-checker7.p.rapidapi.com/whois/lookup"
  querystring = {"sld":domain_name}
  headers = {
    "X-RapidAPI-Key": "f47e52d27fmsh62ccbea0e9ba669p13741djsn0666ec5553f5",
      "X-RapidAPI-Host": "domain-checker7.p.rapidapi.com"
    }
    
  
  response = requests.get(url, headers=headers, params=querystring)
  return response.json()

def check_domain_availability2(domain_name):
 
    url = "https://zozor54-whois-lookup-v1.p.rapidapi.com/"
    querystring = {
        "domain": domain_name,
        "format": "json",
        "_forceRefresh": "0"
    }

    headers = {
      "X-RapidAPI-Key": "f47e52d27fmsh62ccbea0e9ba669p13741djsn0666ec5553f5",
    	"X-RapidAPI-Host": "zozor54-whois-lookup-v1.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        return response.json()
    else:
        return {"error": "Failed to retrieve domain information"}