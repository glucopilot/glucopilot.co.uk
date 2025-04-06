---
title: Authentication
position_number: 2
parameters:
  - name:
    content:
content_markdown: |-
  You need to be authenticated for all API requests. You can generate an auth token by calling the `/identity/v1/login` endpoint with your email and password.

  JWT tokens should be provided via <a href="https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/" target="_blank">HTTP Bearer authentication</a>.

  ```
  Authorization: Bearer YOUR_ACCESS_TOKEN
  ```

  Nothing will work unless you include this API key
  {: .error}
left_code_blocks:
  - code_block:
    title:
    language:
right_code_blocks:
  - code_block: |2-
       curl http://api.myapp.com/api/v1/readings/ \
       -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
    title: Curl
    language: bash
---
