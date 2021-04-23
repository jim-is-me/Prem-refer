# Serverless
This project is built based on this article
https://www.serverless.com/blog/flask-python-rest-api-serverless-lambda-dynamodb
But there were several steps that were missing in this article

### Local Development

In order to run the server locally, you need to run two things
1. The DynamoDB local emulation server
2. The local webserver for WSGI (Web Server Gateway Interface)

#### Steps

1. First create a virtual environment. From inside **/backend** folder run

`python3 -m venv env`

This will create a folder called **env**

2. Activate the environment from withing /backend folder

`source ./env/bin/activate`


3. Goto 'serverless_lear1' folder and Install the dependencies

`cd serverless_lear1`
`yarn install`

4. Install DynamoDB

`sls dynamodb install`

5. Start the local DynamoDB

`sls dynamodb start`

7. Open a new tab in the terminal, and activate the virtual environment

`source ../env/bin/activate`

6. Run the following command to install python dependencies

`pip install -r requirements.txt`

8. Start the local server

`sls wsgi serve`

