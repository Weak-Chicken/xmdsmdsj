import fakeArticle0 from '@/temp/data/topics/00003.md';
import fakeArticle1 from '@/temp/data/topics/00004.md';
import fakeArticle2 from '@/temp/data/topics/00005.md';

/**
 * Define your fake data and their getters here.
 */
export default {
  install(Vue, options){
    let mountingPoint = Vue.prototype.$DataProvider = {};

    mountingPoint.userLogin = (succeeded) => {
      if (succeeded) {
        return {
          "success": true,
          "flag": "INFO_USER_LOGIN_SUCCEEDED",
          "userData": {
              "uuid": 1,
              "userName": "Jon",
              "userPwd": "12345",
              "userEmail": "jon@233.com",
              "userBio": "wahaha",
              "userLevel": "User"
          }
        }
      } else {
        return {
          "success": false,
          "flag": "ERROR_USER_NAME_WRONG"
        }
      }
    };

    mountingPoint.getAllArticlesPosts = (succeeded) => {
      if (succeeded) {
        return {
          "success": true,
          "articles": [
            {
              "article_id": "testArticleId0",
              "user_id": "testUserId0",
              "title": "Authentication System Part 1",
              "created_at": "2019-05-02T04:32:09.537Z",
              "last_modified_at": "2019-05-02T04:32:09.537Z",
              "author": {
                "userName": "Jon",
              },
            },
            {
              "article_id": "testArticleId1",
              "user_id": "testUserId1",
              "title": "Authentication System Part 2",
              "created_at": "2019-05-02T04:32:09.537Z",
              "last_modified_at": "2019-05-02T04:32:09.537Z",
              "author": {
                "userName": "Jon",
              },
            },
            {
              "article_id": "testArticleId2",
              "user_id": "testUserId2",
              "title": "Run Our Web",
              "created_at": "2019-05-02T04:32:09.537Z",
              "last_modified_at": "2019-05-02T04:32:09.537Z",
              "author": {
                "userName": "Jon",
              },
            }
          ]
        }
      } else {
        return {
          "success": false,
          "flag": "ERROR_NOT_LOGGED_IN"
        }
      }
    };

    mountingPoint.getArticleById = (succeeded, article_id) => {
      if (succeeded) {
        let fakeAllArticles = [
          {
            "article_id": "testArticleId0",
            "user_id": "testUserId0",
            "title": "Authentication System Part 1",
            "created_at": "2019-05-02T04:32:09.537Z",
            "last_modified_at": "2019-05-02T04:32:09.537Z",
            "author": {
              "userName": "Jon",
            },
            "content": fakeArticle0,
          },
          {
            "article_id": "testArticleId1",
            "user_id": "testUserId1",
            "title": "Authentication System Part 2",
            "created_at": "2019-05-02T04:32:09.537Z",
            "last_modified_at": "2019-05-02T04:32:09.537Z",
            "author": {
              "userName": "Jon",
            },
            "content": fakeArticle1,
          },
          {
            "article_id": "testArticleId2",
            "user_id": "testUserId2",
            "title": "Run Our Web",
            "created_at": "2019-05-02T04:32:09.537Z",
            "last_modified_at": "2019-05-02T04:32:09.537Z",
            "author": {
              "userName": "Jon",
            },
            "content": fakeArticle2,
          }
        ];

        return {
          "success": true,
          "article": fakeAllArticles.filter(article => article.article_id === article_id)[0]
        }
      } else {
        return {
          "success": false,
          "flag": "ERROR_NOT_LOGGED_IN"
        }
      }
    };

    /**
     * Login is needed for this API
     */
    mountingPoint.getArticlesOfUser = (succeeded, user_id) => {
      if (succeeded) {
        let fakeAllArticles = [
          {
            "article_id": "testArticleId0",
            "user_id": "1",
            "title": "Authentication System Part 1",
            "created_at": "2019-05-02T04:32:09.537Z",
            "last_modified_at": "2019-05-02T04:32:09.537Z",
            "author": {
              "userName": "Jon",
            },
            "content": fakeArticle0,
          },
          {
            "article_id": "testArticleId1",
            "user_id": "1",
            "title": "Authentication System Part 2",
            "created_at": "2019-05-02T04:32:09.537Z",
            "last_modified_at": "2019-05-02T04:32:09.537Z",
            "author": {
              "userName": "Jon",
            },
            "content": fakeArticle1,
          },
          {
            "article_id": "testArticleId2",
            "user_id": "2",
            "title": "Run Our Web",
            "created_at": "2019-05-02T04:32:09.537Z",
            "last_modified_at": "2019-05-02T04:32:09.537Z",
            "author": {
              "userName": "Jon2",
            },
            "content": fakeArticle2,
          }
        ];

        return {
          "success": true,
          "articles": fakeAllArticles.filter(article => article.user_id === user_id)
        }
      } else {
        return {
          "success": false,
          "flag": "ERROR_NOT_LOGGED_IN"
        }
      }
    };

    /**
     * Login is needed for this API
     */
    mountingPoint.createArticle = (article_content) => {
      console.log('createArticle', article_content);
    };

    /**
     * Login is needed for this API
     */
    mountingPoint.updateArticle = (article_content) => {
      console.log('updateArticle', article_content);
    };

    mountingPoint.getArticlesById = (succeeded, article_id) => {
      if (succeeded) {
        let fakeAllArticles = [
          {
            "article_id": "testArticleId0",
            "user_id": "testUserId0",
            "title": "Authentication System Part 1",
            "created_at": "2019-05-02T04:32:09.537Z",
            "last_modified_at": "2019-05-02T04:32:09.537Z",
            "author": {
              "userName": "Jon",
            },
            "content": fakeArticle0,
          },
          {
            "article_id": "testArticleId1",
            "user_id": "testUserId1",
            "title": "Authentication System Part 2",
            "created_at": "2019-05-02T04:32:09.537Z",
            "last_modified_at": "2019-05-02T04:32:09.537Z",
            "author": {
              "userName": "Jon",
            },
            "content": fakeArticle1,
          },
          {
            "article_id": "testArticleId2",
            "user_id": "testUserId2",
            "title": "Run Our Web",
            "created_at": "2019-05-02T04:32:09.537Z",
            "last_modified_at": "2019-05-02T04:32:09.537Z",
            "author": {
              "userName": "Jon",
            },
            "content": fakeArticle2,
          }
        ];

        return {
          "success": true,
          "articles": fakeAllArticles.filter(article => article.article_id === article_id)
        }
      } else {
        return {
          "success": false,
          "flag": "ERROR_NOT_LOGGED_IN"
        }
      }
    };

    /**
     * Login is needed for this API
     */
    mountingPoint.deleteArticle = (article_ids) => {
      console.log('deleteArticle', article_ids);
    };

  }
};