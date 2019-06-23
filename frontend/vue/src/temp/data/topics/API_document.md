## V1

### /user

#### POST /user/login
User login
##### input
> ```json
> {
>   "userName": "user's name",
>   "userPwd": "user's password",
> }
> ```

##### output
> ```json
> {
>   "success": true or false,
>   "flag": flag,
>   "userData" (if success): {
>     "uuid": "user's id",
>     "userName": "user's name",
>     "userBio": "user's bio",
>     "userLevel": "User" / "admin" / "SuperAdmin",
>   }
> }
> ```

### /article

#### GET /article/
*In article API, prefix 'post' means obtain abstract of articles*
Get all articles abstract infomation
##### input
> ```json
> {
>   (NO INPUT NEEDED)
> }
> ```

##### output
> ```json
> {
>   "success": true or false,
>   "articles": [
>     {
>       "article_id": "article's id",
>       "title": "article title",
>       "created_at": "time of creation",
>       "last_modified_at": "time of last modified",
>       "author": {
>         (The same of "userData" of the response of /user/login API)
>         "uuid": "author's id",
>         "userName": "author's name",
>         "userBio": "author's bio",
>         "userLevel": "User" / "admin" / "SuperAdmin",
>       },
>      },
>
>      {
>         ...
>      },
>
>      ...
>
>    ]
> }
> ```

#### GET /article/article/
##### LOGIN NEEDED
Get *ONE* article by its id.
##### input
> ```json
> {
>   "article_id": "article's id"
> }
> ```

##### output
> ```json
> {
>   "success": true or false,
>   "article": 
>     {
>       "article_id": "article's id",
>       "title": "article title",
>       "created_at": "time of creation",
>       "last_modified_at": "time of last modified",
>       "author": {
>         (The same of "userData" of the response of /user/login API)
>         "uuid": "author's id",
>         "userName": "author's name",
>         "userBio": "author's bio",
>         "userLevel": "User" / "admin" / "SuperAdmin",
>       },
>       "content": "content of article in .md format",
>      }
> }
> ```

#### GET /article/articles/
##### LOGIN NEEDED
Get *A List of* articles by their ids.
##### input
> ```json
> {
>   "article_ids": ["article_id_0", "article_id_1", ...]
> }
> ```

##### output
> ```json
> {
>   "success": true or false,
>   "articles": [
>     {
>       "article_id": "article's id",
>       "title": "article title",
>       "created_at": "time of creation",
>       "last_modified_at": "time of last modified",
>       "author": {
>         (The same of "userData" of the response of /user/login API)
>         "uuid": "author's id",
>         "userName": "author's name",
>         "userBio": "author's bio",
>         "userLevel": "User" / "admin" / "SuperAdmin",
>       },
>       "content": "content of article in .md format",
>      },
>
>      {
>         ...
>      },
>
>      ...
>
>    ]
> }
> ```

#### GET /article/byUser/
##### LOGIN NEEDED
Get all articles published by one certain user.
##### input
> ```json
> {
>   "user_id": "id of the author",
> }
> ```

##### output
> ```json
> {
>   "success": true or false,
>   "articles": [
>     {
>       "article_id": "article's id",
>       "title": "article title",
>       "created_at": "time of creation",
>       "last_modified_at": "time of last modified",
>       "author": {
>         (The same of "userData" of the response of /user/login API)
>         "uuid": "author's id",
>         "userName": "author's name",
>         "userBio": "author's bio",
>         "userLevel": "User" / "admin" / "SuperAdmin",
>       },
>       "content": "content of article in .md format",
>      },
>
>      {
>         ...
>      },
>
>      ...
>
>    ]
> }
> ```

#### POST /article/create/
##### LOGIN NEEDED
Create a new article under a certain logged in user.
##### input
> ```json
> {
>   "title": "title of article",
>   "content": "content of article, in md format",
> }
> ```

##### output
> ```json
> {
>   "success": true or false,
>   "flag": flag,
>   "article" (if success): 
>     {
>       "article_id": "article's id",
>       "title": "article title",
>       "created_at": "time of creation",
>       "last_modified_at": "time of last modified",
>       "author": {
>         (The same of "userData" of the response of /user/login API)
>         "uuid": "author's id",
>         "userName": "author's name",
>         "userBio": "author's bio",
>         "userLevel": "User" / "admin" / "SuperAdmin",
>       },
>       "content": "content of article in .md format",
>      }
> }
> ```

#### PUT /article/update/
##### LOGIN NEEDED
Update an exsited article under a certain logged in user.
##### input
> ```json
> {
>   "article_id": "id of the article to be updated",
>   "title": "title of article",
>   "content": "content of article, in md format",
> }
> ```

##### output
> ```json
> {
>   "success": true or false,
>   "flag": flag,
>   "article" (if success): 
>     {
>       "article_id": "article's id",
>       "title": "article title",
>       "created_at": "time of creation",
>       "last_modified_at": "time of last modified",
>       "author": {
>         (The same of "userData" of the response of /user/login API)
>         "uuid": "author's id",
>         "userName": "author's name",
>         "userBio": "author's bio",
>         "userLevel": "User" / "admin" / "SuperAdmin",
>       },
>       "content": "content of article in .md format",
>      }
> }
> ```

#### PATCH /article/update/
##### LOGIN NEEDED
Update *Partially* an exsited article under a certain logged in user.
##### input
> ```json
> {
>   "article_id": "id of the article to be updated",
>   "title": "title of article",
>   "content": "content of article, in md format",
> }
> ```

##### output
> ```json
> {
>   "success": true or false,
>   "flag": flag,
>   "article" (if success): 
>     {
>       "article_id": "article's id",
>       "title": "article title",
>       "created_at": "time of creation",
>       "last_modified_at": "time of last modified",
>       "author": {
>         (The same of "userData" of the response of /user/login API)
>         "uuid": "author's id",
>         "userName": "author's name",
>         "userBio": "author's bio",
>         "userLevel": "User" / "admin" / "SuperAdmin",
>       },
>       "content": "content of article in .md format",
>      }
> }
> ```

#### DELETE /article/delete/
##### LOGIN NEEDED
Delete an exsited article under a certain logged in user.
##### input
> ```json
> {
>   "article_id": "id of the article to be deleted",
> }
> ```

##### output
> ```json
> {
>   "success": true or false,
>   "flag": flag,
> }
> ```