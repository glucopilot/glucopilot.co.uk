---
title: Errors
position_number: 3
parameters:
  - name:
    content:
content_markdown: |-
  | Code | Name | Returns | Description |
  | --- | --- | --- | --- |
  | 200 | OK | ~ | Success |
  | 201 | Created | ~ | Creation Successful |
  | 400 | Bad Request | ValidationProblem | We could not process that action due to an invalid request |
  | 403 | Forbidden | ErrorResult | We couldn't authenticate you |
  | 404 | Not Found | ErrorResult | The requested resource was not found |
  | 409 | Conflict | ErrorResult | The requested resource is in conflict with the current state of the server |
  | 500 | Internal Server Error | ErrorResult | An unexpected error occurred on the server |

  Errors will return JSON in the following format:
left_code_blocks:
  - code_block: |-
      {
        "source": "string",
        "message": "string",
        "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "supportMessage": "string",
        "statusCode": 500,
        "messages": [
          "string",
          "string"
        ]
      }
    title: ErrorResult
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
    title: ValidationProblem
    language: json
right_code_blocks:
  - code_block:
    title:
    language:
---
