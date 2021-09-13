# steps to run the application

# clone the code

# go to the user-management directory

# run the command npm install to the dependency

# next run the command npm start to start the server

# please find the below list apis developed as part of the application

# create user api
    endpoint : 
        localhost:8000/users/v1.0
    headers:
        Content-Type:application/json
    request:
        {
	        "email":"test112@g12.co",
	        "password":"1234"
        }
    successResponse:
        {
            "status": true,
            "message": "User created"
        }
    failureResponses:
        1.{
             "status": false,
            "msg": "Email already exists. Please use another one."
         }

       2.{
            "status": false,
            "msg": "\"email\" is required"
        }

      3.{
            "status": false,
            "msg": "\"password\" is required"
        }

      4.{
            "status": false,
            "msg": "\"email\" must be a valid email"
        }

# login api
    endpoint:/login/v1.0
    request:
        {
	        "email":"test112@g12.co",
	        "password":"1234"
       }
    successResponse:
        {
            "status": true,
            "message": "Logged in successfully",
            "token": "eyJhbGciOiJIUzI1NiJ9.dGVzdDExMkBnMTIuY28.NALyJoZ4L_uXNxzN7Y1cUkGCv_4B73RzBrMjebbjwvM"
        }
    failureResponses:
        1.{
            "status": false,
            "msg": "User not found"
          }

        2.{
             "status": false,
                "msg": "email or password is incorrect"
        }
# fetch user api
    endpoint:/users/v1.0/613f5eb3a08db9a4ad895a4b
    successResponse:
        {
            "success": true,
            "message": "User record found",
            "data": {
                    "_id": "613f5eb3a08db9a4ad895a4b",
                    "email": "test1@g.co",
                    "__v": 0
                    }
        }
    failureResponses:
      1.  {
            "status": false,
            "msg": "Invalid token"
        }
     
     2.{
            "status": false,
            "msg": "User not found"
     }
# fetch all users implemented the pagination
    endpoint:/users/v1.0?pageNo=1&limit=1
    successResponses:
        {
                "success": true,
                "message": "User records found",
                "data": [
                    {
                         "_id": "613f5eb3a08db9a4ad895a4b",
                         "email": "test1@g.co",
                        "__v": 0
                    }
                    ]
        }
    failureResponses:
        1.{
                "status": false,
                "msg": "\"limit\" is not allowed to be empty"
        }

        2.{
                "status": false,
                "msg": "\"pageNo\" is not allowed to be empty"
        }

        3.{
             "status": false,
             "msg": "Invalid page number"
        }

        4.{
            "status": false,
            "msg": "Invalid token"
        }

# delete the user
    endpoint:/users/v1.0/613f54d61feff03785944976
    successResponse:
        {
            "success": true,
            "message": "User has been deleted"
        }
    failureResponse:
       1. {
             "status": false,
            "msg": "User not found"
        }
      2.{
            "status": false,
            "msg": "Invalid token"
        }

# run the command npm test to run the test cases