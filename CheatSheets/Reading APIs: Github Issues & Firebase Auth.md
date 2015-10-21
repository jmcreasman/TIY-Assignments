What credentials do I need to authenticate with the Github API?
To use Basic Authentication with the GitHub API, simply send the username and password associated with the account.
Alternatively, you can use personal access tokens or OAuth tokens instead of your password.

How can I provide authentication credentials to Github?
Through registering your app

How can I use Firebase to authenticate with GitHub?
Set the Authorization callback URL to https://auth.firebase.com/v2/<YOUR-FIREBASE-APP>/auth/github/callback so that GitHub's OAuth service can properly communicate with Firebase's authentication server.

What type of information will Firebase require from me to integrate with GitHub?
Your GitHub application credentials (Client ID and Client Secret)
