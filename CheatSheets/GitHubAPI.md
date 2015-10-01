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
> How many results are returned by default?
I got 32
> What limitations exist on fetching more results?
Not quite sure, the screen just ended for me. Maybe it only shows you up to a certain date?
> What is the basic structure of the results?
Its a dictionary with keys like id, type, puplic and payload.
Example:
```
"public": true,
```
> What fields are included in each result?
These are some examples; id, login, gravatar_id, url, and avatar_url.
> What are the data types for each field?
Well since it was my profile some of the ones I got were; 13600903, jmcreasman, https://api.github.com/users/jmcreasman and https://avatars.githubusercontent.com/u/13600903?
> What are some of the different values for the `type` field?
PushEvent, IssueCommentEvent, PullRequestEvent and CreateEvent were the one's I got.
    "created_at": "2015-09-30T12:09:37Z"
###Entry 3
> How can I use the jQuery API to get the HTML contents of an element?
.html() Gets the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
> create a new HTML element?

> add an HTML element to the page?
append() - Inserts content at the end of the selected elements
prepend() - Inserts content at the beginning of the selected elements
after() - Inserts content after the selected elements
before() - Inserts content before the selected elements
