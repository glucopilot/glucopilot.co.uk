---
title: /api/v1/identity/register
position_number: 1.1
type: post
description: Register a new user
parameters:
  - name: email
    content: User's email address
  - name: password
    content: User's password
  - name: confirmPassword
    content: User password confirmation
  - name: acceptedTerms
    content: Whether the user has accepted the terms and conditions
  - name: patientId
    content: User's patient ID
content_markdown: |-
  The user is regsitered
  {: .success}

  Registers a new user. If the patient ID is not provided, the user will be registered as a patient, oterwise as a care giver.
left_code_blocks:
  - code_block: |-
      {
        "email": "user@example.com",
        "password": "string",
        "confirmPassword": "string",
        "acceptedTerms": true,
        "patientId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    title: JSON
    language: json
right_code_blocks:
  - code_block: |-
      {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "email": "string",
        "created": "2025-04-06T12:40:45.388Z",
        "updated": "2025-04-06T12:40:45.388Z",
        "acceptedTerms": true
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
