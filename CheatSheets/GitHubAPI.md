##Entry 1
### [GitHub API](https://developer.github.com/v3/)

#### [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?
Requests that require authentication will return `404 Not Found`
> What can I do with an unauthenticated request?
Not sure, but I'm guessing view some information but not all?
> What _can't_ I do with an unauthenticated request?
Again, not sure but guessing you can't view private information?
> How can I authenticate my request?

1. Basic Authentication
```
$ curl -u "username" https://api.github.com
```
2. OAuth2 Token (sent in a header)
```
$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```
3. OAuth2 Token (sent as a parameter)
```
$ curl https://api.github.com/?access_token=OAUTH-TOKEN
```

#### [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?
`GET /users/:username`
> How do I ask the API for the repository listing for a specific user?
Maybe `GET /repos/:owner/:repo/contents/:path` ?
> How do I ask the API for the recent, public activity for a specific user?

#### Requests
> Is there a limit to the number of requests I can make?
Yes!
> Is there a way of extending that limit?
I did not see one
> What happens when I hit the limit?
After detecting several requests with invalid credentials within a short period, the API will temporarily reject all authentication attempts for that user (including ones with valid credentials) with `403 Forbidden:`

#### Data
> How can I ask for more (or less) data from a request?
`GET /repos/:owner/:repo/pulls/:number/commits` ??
> How do I know that there is more data available?
`GET /repos/:owner/:repo/pulls/:number/files` ??
##Entry 2
####Endpoints
> What are the endpoints for fetching the profile data for a user?
https://api.github.com/users/:USERNAME
> the organizations a user belongs to?
https://api.github.com/users/jmcreasman/orgs
> the repositories a user has created?
https://api.github.com/users/jmcreasman/repos
> public events for a user?
https://api.github.com/users/jmcreasman/received_events
####Public Events
