module.exports = function (app) {
  var express = require('express');
  var assetsRouter = express.Router();

  assetsRouter.get('/', function (req, res) {
    res.send([{
        "name": "11 - Routing - Step 4 - link-to",
        "type": "DOCUMENT",
        "status": "SCANNING",
        "extension": "mp4",
        "uuid": "e371-6311-9e1e-44ef-b9c9-76a6-ef60-4971",
        "createdDate": "2015-07-16T06:08:35Z",
        "modifiedDate": "2015-07-16T06:08:39Z",
        "contentVersion": 1,
        "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
        "fileSize": 8131888,
        "commentCount": 0,
        "model": "assets",
        "_links": {
          "self": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/e371-6311-9e1e-44ef-b9c9-76a6-ef60-4971"},
          "share": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c"},
          "ancestors": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/ancestors?ancestorOf=e371-6311-9e1e-44ef-b9c9-76a6-ef60-4971"},
          "rename": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/e371-6311-9e1e-44ef-b9c9-76a6-ef60-4971/name"},
          "acl": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/e371-6311-9e1e-44ef-b9c9-76a6-ef60-4971/acl"},
          "metadata": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/e371-6311-9e1e-44ef-b9c9-76a6-ef60-4971/metadata"},
          "actions": {"href": "/rest/actions?userUuid={userUuid}&assetUuid={assetUuid}", "templated": "true"},
          "versions": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/e371-6311-9e1e-44ef-b9c9-76a6-ef60-4971/versions"},
          "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
          "content": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/e371-6311-9e1e-44ef-b9c9-76a6-ef60-4971/contents/latest"}
        },
        "_embedded": {
          "modifiedBy": {
            "name": "<b>william</b> cheung",
            "uuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
            "email": "william.cheung@objective.com",
            "model": "userinfos",
            "_links": {
              "self": {"href": "/rest/userinfos/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
              "avatar": {
                "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
                "templated": "true"
              }
            }
          }
        }
      }, {
        "name": "15 - Ember Data Models - Step 5 - Ember Data Models",
        "type": "DOCUMENT",
        "status": "SCANNING",
        "extension": "mp4",
        "uuid": "fc90-e650-3e48-477e-a2d3-98d9-220d-a90d",
        "createdDate": "2015-07-16T06:08:35Z",
        "modifiedDate": "2015-07-16T06:08:39Z",
        "contentVersion": 1,
        "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
        "fileSize": 28821804,
        "commentCount": 0,
        "model": "assets",
        "_links": {
          "self": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/fc90-e650-3e48-477e-a2d3-98d9-220d-a90d"},
          "share": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c"},
          "ancestors": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/ancestors?ancestorOf=fc90-e650-3e48-477e-a2d3-98d9-220d-a90d"},
          "rename": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/fc90-e650-3e48-477e-a2d3-98d9-220d-a90d/name"},
          "acl": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/fc90-e650-3e48-477e-a2d3-98d9-220d-a90d/acl"},
          "metadata": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/fc90-e650-3e48-477e-a2d3-98d9-220d-a90d/metadata"},
          "actions": {"href": "/rest/actions?userUuid={userUuid}&assetUuid={assetUuid}", "templated": "true"},
          "versions": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/fc90-e650-3e48-477e-a2d3-98d9-220d-a90d/versions"},
          "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
          "content": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/fc90-e650-3e48-477e-a2d3-98d9-220d-a90d/contents/latest"}
        },
        "_embedded": {
          "modifiedBy": {
            "name": "<b>william</b> cheung",
            "uuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
            "email": "william.cheung@objective.com",
            "model": "userinfos",
            "_links": {
              "self": {"href": "/rest/userinfos/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
              "avatar": {
                "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
                "templated": "true"
              }
            }
          }
        }
      }, {
        "name": "AAAAA folder",
        "type": "FOLDER",
        "status": "COMPLETE",
        "uuid": "158a-3ffe-56b3-470d-a6fa-aa85-51cd-5707",
        "createdDate": "2015-07-16T06:09:20Z",
        "modifiedDate": "2015-07-16T06:09:20Z",
        "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
        "commentCount": 0,
        "model": "assets",
        "_links": {
          "self": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/158a-3ffe-56b3-470d-a6fa-aa85-51cd-5707"},
          "share": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c"},
          "ancestors": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/ancestors?ancestorOf=158a-3ffe-56b3-470d-a6fa-aa85-51cd-5707"},
          "rename": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/158a-3ffe-56b3-470d-a6fa-aa85-51cd-5707/name"},
          "acl": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/158a-3ffe-56b3-470d-a6fa-aa85-51cd-5707/acl"},
          "metadata": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/158a-3ffe-56b3-470d-a6fa-aa85-51cd-5707/metadata"},
          "actions": {"href": "/rest/actions?userUuid={userUuid}&assetUuid={assetUuid}", "templated": "true"},
          "versions": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/158a-3ffe-56b3-470d-a6fa-aa85-51cd-5707/versions"},
          "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
          "children": {
            "href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets?parentUuid=158a-3ffe-56b3-470d-a6fa-aa85-51cd-5707&sort={sort}&offset={offset}&length={length}",
            "templated": "true"
          },
          "createAsset": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets"}
        },
        "_embedded": {
          "modifiedBy": {
            "name": "<b>william</b> cheung",
            "uuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
            "email": "william.cheung@objective.com",
            "model": "userinfos",
            "_links": {
              "self": {"href": "/rest/userinfos/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
              "avatar": {
                "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
                "templated": "true"
              }
            }
          }
        }
      }, {
        "name": "BBBB",
        "type": "FOLDER",
        "status": "COMPLETE",
        "uuid": "a3e5-0777-2ce0-4548-a373-ef54-16be-1a68",
        "createdDate": "2015-07-03T01:02:56Z",
        "modifiedDate": "2015-07-03T01:02:56Z",
        "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
        "commentCount": 1,
        "model": "assets",
        "_links": {
          "self": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/a3e5-0777-2ce0-4548-a373-ef54-16be-1a68"},
          "share": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c"},
          "ancestors": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/ancestors?ancestorOf=a3e5-0777-2ce0-4548-a373-ef54-16be-1a68"},
          "rename": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/a3e5-0777-2ce0-4548-a373-ef54-16be-1a68/name"},
          "acl": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/a3e5-0777-2ce0-4548-a373-ef54-16be-1a68/acl"},
          "metadata": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/a3e5-0777-2ce0-4548-a373-ef54-16be-1a68/metadata"},
          "actions": {"href": "/rest/actions?userUuid={userUuid}&assetUuid={assetUuid}", "templated": "true"},
          "versions": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/a3e5-0777-2ce0-4548-a373-ef54-16be-1a68/versions"},
          "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
          "children": {
            "href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets?parentUuid=a3e5-0777-2ce0-4548-a373-ef54-16be-1a68&sort={sort}&offset={offset}&length={length}",
            "templated": "true"
          },
          "createAsset": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets"}
        },
        "_embedded": {
          "modifiedBy": {
            "name": "<b>william</b> cheung",
            "uuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
            "email": "william.cheung@objective.com",
            "model": "userinfos",
            "_links": {
              "self": {"href": "/rest/userinfos/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
              "avatar": {
                "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
                "templated": "true"
              }
            }
          }
        }
      }, {
        "name": "Cucina 105 Menu",
        "type": "DOCUMENT",
        "status": "SCANNING",
        "extension": "docx",
        "uuid": "7644-40d5-13f8-4ac9-a91f-4513-93ec-e18c",
        "createdDate": "2015-07-16T06:08:35Z",
        "modifiedDate": "2015-07-16T06:08:40Z",
        "contentVersion": 1,
        "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
        "fileSize": 96746,
        "commentCount": 0,
        "model": "assets",
        "_links": {
          "self": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/7644-40d5-13f8-4ac9-a91f-4513-93ec-e18c"},
          "share": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c"},
          "ancestors": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/ancestors?ancestorOf=7644-40d5-13f8-4ac9-a91f-4513-93ec-e18c"},
          "rename": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/7644-40d5-13f8-4ac9-a91f-4513-93ec-e18c/name"},
          "acl": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/7644-40d5-13f8-4ac9-a91f-4513-93ec-e18c/acl"},
          "metadata": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/7644-40d5-13f8-4ac9-a91f-4513-93ec-e18c/metadata"},
          "actions": {"href": "/rest/actions?userUuid={userUuid}&assetUuid={assetUuid}", "templated": "true"},
          "versions": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/7644-40d5-13f8-4ac9-a91f-4513-93ec-e18c/versions"},
          "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
          "content": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/7644-40d5-13f8-4ac9-a91f-4513-93ec-e18c/contents/latest"}
        },
        "_embedded": {
          "modifiedBy": {
            "name": "<b>william</b> cheung",
            "uuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
            "email": "william.cheung@objective.com",
            "model": "userinfos",
            "_links": {
              "self": {"href": "/rest/userinfos/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
              "avatar": {
                "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
                "templated": "true"
              }
            }
          }
        }
      }, {
        "name": "BPY189264920",
        "type": "DOCUMENT",
        "status": "SCANNING",
        "extension": "txt",
        "uuid": "af46-52c6-d72f-489d-ba42-00e4-914c-b9d0",
        "createdDate": "2015-07-16T06:08:35Z",
        "modifiedDate": "2015-07-16T06:08:40Z",
        "contentVersion": 1,
        "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
        "fileSize": 565,
        "commentCount": 0,
        "model": "assets",
        "_links": {
          "self": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/af46-52c6-d72f-489d-ba42-00e4-914c-b9d0"},
          "share": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c"},
          "ancestors": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/ancestors?ancestorOf=af46-52c6-d72f-489d-ba42-00e4-914c-b9d0"},
          "rename": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/af46-52c6-d72f-489d-ba42-00e4-914c-b9d0/name"},
          "acl": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/af46-52c6-d72f-489d-ba42-00e4-914c-b9d0/acl"},
          "metadata": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/af46-52c6-d72f-489d-ba42-00e4-914c-b9d0/metadata"},
          "actions": {"href": "/rest/actions?userUuid={userUuid}&assetUuid={assetUuid}", "templated": "true"},
          "versions": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/af46-52c6-d72f-489d-ba42-00e4-914c-b9d0/versions"},
          "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
          "content": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets/af46-52c6-d72f-489d-ba42-00e4-914c-b9d0/contents/latest"}
        },
        "_embedded": {
          "modifiedBy": {
            "name": "<b>william</b> cheung",
            "uuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
            "email": "william.cheung@objective.com",
            "model": "userinfos",
            "_links": {
              "self": {"href": "/rest/userinfos/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
              "avatar": {
                "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
                "templated": "true"
              }
            }
          }
        }
      }]
    )
  });
  app.use('/rest/assets', assetsRouter);
}
