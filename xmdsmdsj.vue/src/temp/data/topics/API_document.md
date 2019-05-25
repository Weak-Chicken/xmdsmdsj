### /User

#### /User/Login
##### input
> ```json
> {
>   "uuid": (int) user's id,
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
>     "uuid": (int) user's id,
>     "userName": "user's name",
>     "userPwd": "user's password",
>     "userEmail": "user's email",
>     "userBio": "user's bio",
>     "userLevel": "User" / "admin" / "SuperAdmin",
>   }
> }
> ```

#### /User/Login
##### input
> ```json
> {
>   "uuid": (int) user's id,
>   "userName": "user's name",
>   "userPwd": "user's password",
>   "userEmail": "user's email",
> }
> ```

##### output
> ```json
> {
>   "success": true or false,
>   "flag": flag,
> }
> ```