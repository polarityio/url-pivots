# Polarity SIEM Pivot Integration

The Polarity SIEM Pivot integration allows an analyst to run an on-demand query against an IP, hash, domain or email to return a list of queries that they can then execute in their SIEM. 

| ![image](https://user-images.githubusercontent.com/22529325/80599997-c7319980-89f9-11ea-8c0f-9b96b0de8ce7.png) |
|---|
|*Siem Pivot Example* |

## Setting up pivot queries
By default the SIEM Pivot inegration does not pivot out to any useful sites, so your Polarity admin will need to configure the links. Very similar to how Polarity Quick Links operate. 

You can set up any number of Pivots to any source that is valuable to your team. To set up queries, navigate to the pivot-block.hbs file. 

Where you see |*"https://www.localhost:8000/{{details.entity}}"> View Hash in SIEM</*| replace the link with the pivot search that you want other users to run and replace the wording with the description of the pivot.


## Installation Instructions

Installation instructions for integrations are provided on the [PolarityIO GitHub Page](https://polarityio.github.io/).

## Polarity

Polarity is a memory-augmentation platform that improves and accelerates analyst decision making.  For more information about the Polarity platform please see:

https://polarity.io/