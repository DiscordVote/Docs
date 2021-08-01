---
id: api-bot
title: Bot Information 
sidebar_label: Bots
---

A list of all the bots can be found at: ``https://api.discordvote.net/{version}/bots``

## Bot Info

- **This does not require authorization**

Request URL: ``https://api.discordvote.net/{version}/bot/:ID``
[Bot Data](#Example-Response) or 404

## Post Stats
- Coming soon


## Example Response:
Found:
```json
{
  "error": "Boolean",
  "message": "String",
  "data": {
    "id": "Bot ID",
    "username": "Bot#0001",
    "avatar": "Discord CDN URL",
    "description": "String",
    "nsfw": "Boolean",
    "tagline": "String",
    "owners": "Array",
    "tags": "Array",
    "discordStatus": "String",
    "website": "String",
    "prefix": "String",
    "supportServer": "String",
    "invite": "String",
    "upvotes": {
      "total": "Number",
      "users": "Array"
    },
    "status": {
      "approved": "Boolean",
      "denied": "Boolean",
      "awaiting": "Boolean",
      "verified": "Boolean"
    },
    "uptime": "Array",
    "reviews": "Array",
    "servers": "Number",
    "submitted": "Time Stamp",
    "lastChange": "Time Stamp"
  }
}
```

Not Found: 
```json
{"error":false,"message":"Not Found"}
```

Database Error:
It could include a error code
```json
{"error":true,"message":"Database Error"}
```