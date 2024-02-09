# Polarity URL Pivot Integration

The Polarity URL Pivot integration allows an analyst to run an on-demand query against an IP, hash, domain or email to return a list of queries that they can then execute in their SIEM or any other Url users want to search. 

| ![image](https://user-images.githubusercontent.com/22529325/83915919-31003a00-a742-11ea-8d70-bb75aa7e5dc9.png) |
|---|
|*URl Pivot Example* |

## Setting up URL Pivot Searches
By default the Url Pivot integration does not pivot out to any sites, so you or your Polarity admin will need to add them in. There are 10 pivot links that can be set up, if you need more added please contact your Polarity Admin. 

You can add up to 10 links via the "URL Pivot Search" options.  To add a link just type in the field the "Name" of the search followed by a ">" then the url you want to search.  The format will look like this:

```
Name>URL
```

`Name` is the name of the search that will be displayed in the Overlay Window, and URL is the URL to pivot out to when the user clicks on it.  When creating the link you must include an entity substitution string in the URL which takes the form `{{ENTITY}}`.  An entity substitution string will be replaced by the entity value that was searched.  This will be replaced by the actual value being searched.  

As an example, to configure a Google search you might do:

```
Google>https://www.google.com/search?q={{ENTITY}}
```

In addition to the `{{ENTITY}}` which is replaced by any entity, you can include type specific replacements.  For example, to have a pivot link that only appears for CVEs you could do the following:

```
CVE Search>https://www.cve.org/CVERecord?id={{cve}}
```

The following is a list of supported substitutions:

```
{{ENTITY}}
{{IP}}
{{IPv4}}
{{IPv6}}
{{IPv4CIDR}}
{{MD5}}
{{SHA1}}
{{SHA256}}
{{HASH}}
{{DOMAIN}}
{{URL}}
{{EMAIL}}
{{CVE}}
```

If you want to add a link that appears for more than one entity type you can "OR" multiple entity types together using the "|" character.  As an example, to generate a link that will appear for both domains and IPv4 addresses you could do the following:

```
Google IP and Domain Search>https://www.google.com/search?q={{IP|DOMAIN}}
```

## Installation Instructions

Installation instructions for integrations are provided on the [PolarityIO GitHub Page](https://polarityio.github.io/).

## Polarity

Polarity is a memory-augmentation platform that improves and accelerates analyst decision making.  For more information about the Polarity platform please see:

https://polarity.io/