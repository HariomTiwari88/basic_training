Social Media App 
● Base URL: https://www.social.media.com
● Overview: This api is developed for the social media application.User first need to created account and then need to login.After login user can create post, like post and can see all the posts. User have to login to create the post , like and to see the posts.
● Authentication: All APIs (except login and signup) requires authentication, the authentication is session-based. 
● Available APIs: 
○ /login 
○ /signup 
○ /sendRequest/?id 
○ /acceptRejectRequest 
○ /createPost 
1. /signup 
Endpoint: https://www.socialmedia.com/signup 
Method: post 
Request Header: 
{ 
Content-Type: application/json 
} 
Request Body: 
{ 
username: “”, 
password: “”, 
email: “” 
} 
Response Body: 
{ 
status: “Account created successfully” 
} 
Status code: 
● 200: If user created successfully
● 401: If email or username already exists. 
● 500: for server side issue 
Validation: 
● Username must be unique , alpha-numeric and its length should be greater than 5 
● Password must be alpha-numeric and contains at least 8 
characters 
● Email must be unique and it must be a valid email address. Description: This API will create users for the system. Email shouldn’t be registered on the server before. 

2. /login 
Endpoint: https://www.socialmedia.com/login 
Method: post 
Request Header: 
{ 
Content-Type: application/json 
} 
Request Body: 
{ 
username: “”, 
password: “” 
} 
Response Body: 
{ 
status: “User logged in successfully” 
} 
Status code: 
● 200: If the user successfully logged in 
● 401: If credentials not matched. 
● 500: for server side issue 
Validation: 
● Username must be alpha-numeric and its length should be greater than 5 
● Password must be alpha-numeric and contains at least 8 
characters 
Description: This API will log users to the system.

3. /sendRequest/?id 
Endpoint: https://www.socialmedia.com/sendRequest/?id 
Method: get 
Request Header: 
{ 
Content-Type: application/json 
} 
Response Body: 
{ 
status: “Request sent successfully” 
} 
Validation: 
● id parameter in the url should be valid user id. 
Status code: 
● 200: If the request sent successfully 
● 500: for server side issue 
Description: This API sends the friend request. We need to pass the ID of the user as params to which we are sending the request. 

4. /acceptRejectRequest 
Endpoint: https://www.socialmedia.com/acceptRejectRequest 
Method: post 
Request Header: 
{ 
Content-Type: application/json 
} 
Request Body: 
{ 
requestId: “”, 
isAccepted: true / false 
} 
Response Body: 
{ 
status: “Request Accepted” || “Request Rejected” 
} 
Validation: 
● Id must be valid request id. 
Status code: 
● 200: If the request will accept or reject 
● 401: If the id not match to any of the request id. 
● 500: for server side issue
Description: This API could be used for two purposes, to accept the friend request and to reject the friend request. For both cases, we need to pass the requestId and isAccepted,isAccepted will be true in the case of accepting else false. 

5. /createPost 
Endpoint: https://www.socialmedia.com/createPost 
Method: post 
Request Header: 
{ 
Content-Type: application/json 
} 
Request Body: 
{ 
text: “” 
} 
Response Body: 
{ 
status: “post created successfully” 
} 
Validation: 
● The length of text should not be exceed 256 characters. 
Status code: 
● 200: If the post created successfully 
● 401:Due to validation of the post. 
● 500: for server side issue 
Description: This API will create the post. The text length shouldn’t be greater than 256. 





