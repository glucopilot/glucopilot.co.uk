---
title: /api/v1/identity/login
position_number: 1.2
type: post
description: Authenticates a user
parameters:
  - name: email
    content: User's email address
  - name: password
    content: User's password
content_markdown: |-
  The user is logged in and a JWT token is returned
  {: .success}

  Authenticates a user, returning a JWT token if successful.
left_code_blocks:
  - code_block: |-
      {
        "email": "user@example.com",
        "password": "string",
      }
    title: JSON
    language: json
right_code_blocks:
  - code_block: |-
      {
        "token": "string"
      }
    title: 200 OK
    language: json
  - code_block: |-
      {
        "type": "string",
        "title": "string",
        "status": 0,
        "detail": "string",
        "instance": "string",
        "errors": {
          "additionalProp1": [
            "string"
          ],
          "additionalProp2": [
            "string"
          ],
          "additionalProp3": [
            "string"
          ]
        },
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    title: 400 BadRequest
    language: json
---
