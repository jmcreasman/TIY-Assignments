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

> How do I ask the API for the recent, public activity for a specific user?
