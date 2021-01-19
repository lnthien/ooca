# OOCA Stress Tracking API

The goal of this project is to assess development skills suitable for a backend engineer position. It tests knowledge and proficiency with software design, unit testing and web technologies like HTTP and REST.

    Project Name: OOCA Stress Tracking API
    Project Goal: Create a small web-app for tracking user's stress level.
    Technology: Nodejs + TypeScript with any framework and technologies you like.
    Deliverables: The solution can be deployed to anywhere like Heroku, Netify,GCP or even Firebase.

## Description

Users can use the mobile/web app to upload their stress level (0-5) and image (optional). The mobile/web app uses REST API to upload it. Every uploaded images should be resized for more suitable to display on mobile/web. 

The mobile/web app also has a feed that shows all stress level tracked by the user with associated image. 

**Task:** Build the API described above. Write unit/e2e tests for each components. 

**Requirements**
1. Design your API in a RESTful way and respond with JSON.
2. Make sure your code has tests. Write the code and design your system to be as realistic and production-ready as possible. Follow best-practices and focus on quality.
3. A stress tracking record should have the following attributes: stress level (0-5), associated image and timestamp. 
4. Users can upload their stress tracking record anonymously and can inquire their records.
5. Create at least 2 endpoints
-  **Upload a stress tracking record** 
    - You can split this into 2 endpoints. One for uploading an image. And another one for uploading a stress level record. 
- **Inquire all stress tracking records** 
    - This should returns all stress tracking records of the user. 
- **Authentication** is plus but not required. 
### Guidelines

Please commit often and with good commit messages. This will allow us to see how you've approached the problem. Don't worry about changing things around often.

Don’t hesitate to ask any questions if you’re uncertain about the task or anything else is unclear.

### What is this?

This repo contains the job assignment for potential Backend engineers at Ooca, you can apply for a job at: career@ooca.co

### Credits
This repo is inspired and partially contains some contents from *job-assignment-backend-engineer* by @fishbrain (https://github.com/fishbrain/job-assignment-backend-engineer).