---
id: api-home
title: Getting started with our API
sidebar_label: Getting Started
---

 Our API is HTTPS/REST which accepts `POST` and `GET` requests.

### Base Url

[https://api.discordvote.net](https://api.discordvote.net)

**Note:**
Our API Has different versions which must be included in your request URL.

## Authorization
All request to our API requires a authorization token which can be found on your bots API Settings tab.
Authentication is performed with the `Authorization` HTTP header as such

```json
{
  "Authorization": "TOKEN-GOES-HERE"
}
```
