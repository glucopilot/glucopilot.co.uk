---
title: /api/v1/readings/
position_number: 1.0
type: get
description: List readings
parameters:
  - name: from
    content: Date and time to retrieve readings from
  - name: to
    content: Date and time to retrieve readings to
content_markdown: |-
  The from and to parameters are inclusive.
  {: .info }

  Lists all the readings between the specified dates, ordered by date descending.
left_code_blocks:
  - code_block: |-
      curl http://api.myapp.com/api/v1/readings/ \
      -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      [
        {
          "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "created": "2025-04-06T13:20:05.685Z",
          "glucoseLevel": 0,
          "direction": 1
        }
      ]
    title: 200 OK
    language: json
  - code_block: |2-
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
