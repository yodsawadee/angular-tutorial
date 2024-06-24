# Wiremock
## Getting Started
* Clone this repo
* Run the following command: $ java -jar wiremock-standalone-2.27.2.jar --enable-stub-cors
* APIs should be available now

## Adding New Endpoints
You can add new endpoints by creating a new JSON file and placing it under the "mappings" folder. Specify the request and response mapping inside the JSON file using the following format:
```
{
    "request": {
        "method": "http method here",
        "url": "write/address/here"
    },
    "response": {
        "status": 200,
        "jsonBody": {paste the json body response here}
        "headers": {
            "Content-Type": "application/json"
        }
    }
}
```
You can simply restart (if it is running currently) your Wiremock instance as it will pickup the new mappings automatically

### More info
Wiremock official docs: http://wiremock.org/docs/running-standalone/

