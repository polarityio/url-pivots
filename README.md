# Polarity URL Pivot Integration

The Polarity URL Pivot integration allows an analyst to run an on-demand query against an IP, hash, domain or email to return a list of queries that they can then execute in their SIEM or any other Url users want to search. 

| ![image](https://user-images.githubusercontent.com/22529325/83452017-f044b000-a425-11ea-9eb3-2c673067fcb4.png) |
|---|
|*URl Pivot Example* |

## Setting up pivot queries
By default the Url Pivot inegration does not pivot out to any useful sites, so you or your Polarity admin will need to add them in. There are 10 defaulted pivot links that can be set up, if you need more added please contact your Polarity Admin. 

To add a link just type in the field the "Name" of the search followed by a ">" then the url you want to search. Ensure contained within the URL that there is a {{ENTITY}} value as this will be replaced by the actual value being searched. 

An example search option is: "GoogleExample>https://google.com/{{ENTITY}}"



## Installation Instructions

Installation instructions for integrations are provided on the [PolarityIO GitHub Page](https://polarityio.github.io/).

## Polarity

Polarity is a memory-augmentation platform that improves and accelerates analyst decision making.  For more information about the Polarity platform please see:

https://polarity.io/