module.exports = function (app) {
  var express = require('express');
  var sharesRouter = express.Router();

  sharesRouter.get('/', function (req, res) {
    res.send([{
      "name": "<b>william</b> cheung",
      "type": "STANDARD",
      "roles": ["READER", "COMMENTER"],
      "uuid": "1b01-43c5-c7fb-4617-928d-babe-eb45-610f",
      "email": "william.cheung@objective.com",
      "joinedDate": "2015-06-09T06:27:59Z",
      "shareUuid": "62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c",
      "accepted": true,
      "isOwner": true,
      "model": "participants",
      "_links": {
        "self": {"href": "/rest/participants/1b01-43c5-c7fb-4617-928d-babe-eb45-610f"},
        "share": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c"},
        "avatar": {
          "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
          "templated": "true"
        },
        "user": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
      },
      "_embedded": {
        "share": {
          "name": "Aaa",
          "status": "COMPLETE",
          "uuid": "62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c",
          "access": "READ",
          "createdDate": "2015-06-09T06:27:59Z",
          "modifiedDate": "2015-07-08T05:06:05Z",
          "endOnDate": "2016-07-07T22:45:00Z",
          "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "organisationUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
          "ownerUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "endOnDateOptionalValue": {"value": null, "present": false},
          "endOnDateSpecified": false,
          "model": "shares",
          "_links": {
            "self": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c"},
            "createAsset": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets"},
            "participants": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/participants"},
            "batchParticipants": {"href": "/rest/participants/batch"},
            "getParticipants": {
              "href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/participants?offset={offset}&length={length}",
              "templated": "true"
            },
            "children": {
              "href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/assets?parentUuid=62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c&sort={sort}&offset={offset}&length={length}",
              "templated": "true"
            },
            "comments": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/comments"},
            "rename": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/name"},
            "changeOwner": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/owner"},
            "setSummary": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/summary"},
            "owner": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
            "acl": {"href": "/rest/acls/92bf-becb-1cea-444a-aaf5-3227-06d7-76cf"},
            "threads": {"href": "/rest/threads?shareUuid=62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c"},
            "metadata": {"href": "/rest/shares/62cd-cf62-8f5e-4a2c-b69a-5e10-2afc-428c/metadata"},
            "actions": {"href": "/rest/actions?userUuid={userUuid}&shareUuid={shareUuid}", "templated": "true"},
            "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
          },
          "_embedded": {
            "owner": {
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
            },
            "organisation": {
              "name": "A team",
              "id": 37,
              "domains": [],
              "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
              "timezone": "Australia/Sydney",
              "uuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
              "accountName": "A team",
              "model": "organisations",
              "_links": {
                "self": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793"},
                "avatar": {
                  "href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/avatar?size={size}&defaultUrl={defaultUrl}",
                  "templated": "true"
                },
                "memberships": {"href": "/rest/members"},
                "batchMemberships": {"href": "/rest/members/batch"},
                "actions": {"href": "/rest/actions?userUuid={userUuid}&orgUuid={orgUuid}", "templated": "true"},
                "quota": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/quota"}
              }
            },
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
        }
      }
    }, {
      "name": "<b>william</b> cheung",
      "type": "STANDARD",
      "roles": ["READER", "COMMENTER"],
      "uuid": "a0b3-6b18-2da8-46b5-a3b2-8238-2713-70ba",
      "email": "william.cheung@objective.com",
      "joinedDate": "2015-06-09T06:20:39Z",
      "shareUuid": "a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf",
      "accepted": true,
      "isOwner": true,
      "model": "participants",
      "_links": {
        "self": {"href": "/rest/participants/a0b3-6b18-2da8-46b5-a3b2-8238-2713-70ba"},
        "share": {"href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf"},
        "avatar": {
          "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
          "templated": "true"
        },
        "user": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
      },
      "_embedded": {
        "share": {
          "name": "Hello",
          "status": "COMPLETE",
          "uuid": "a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf",
          "access": "READ",
          "createdDate": "2015-06-09T06:20:39Z",
          "modifiedDate": "2015-06-12T00:53:51Z",
          "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "organisationUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
          "ownerUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "endOnDateOptionalValue": {"value": null, "present": false},
          "endOnDateSpecified": false,
          "model": "shares",
          "_links": {
            "self": {"href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf"},
            "createAsset": {"href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf/assets"},
            "participants": {"href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf/participants"},
            "batchParticipants": {"href": "/rest/participants/batch"},
            "getParticipants": {
              "href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf/participants?offset={offset}&length={length}",
              "templated": "true"
            },
            "children": {
              "href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf/assets?parentUuid=a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf&sort={sort}&offset={offset}&length={length}",
              "templated": "true"
            },
            "comments": {"href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf/comments"},
            "rename": {"href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf/name"},
            "changeOwner": {"href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf/owner"},
            "setSummary": {"href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf/summary"},
            "owner": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
            "acl": {"href": "/rest/acls/e501-01e1-35d2-4eed-abac-dabc-b376-1989"},
            "threads": {"href": "/rest/threads?shareUuid=a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf"},
            "metadata": {"href": "/rest/shares/a9f5-8943-3fda-4a94-9f15-f35f-6efd-51bf/metadata"},
            "actions": {"href": "/rest/actions?userUuid={userUuid}&shareUuid={shareUuid}", "templated": "true"},
            "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
          },
          "_embedded": {
            "owner": {
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
            },
            "organisation": {
              "name": "A team",
              "id": 37,
              "domains": [],
              "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
              "timezone": "Australia/Sydney",
              "uuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
              "accountName": "A team",
              "model": "organisations",
              "_links": {
                "self": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793"},
                "avatar": {
                  "href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/avatar?size={size}&defaultUrl={defaultUrl}",
                  "templated": "true"
                },
                "memberships": {"href": "/rest/members"},
                "batchMemberships": {"href": "/rest/members/batch"},
                "actions": {"href": "/rest/actions?userUuid={userUuid}&orgUuid={orgUuid}", "templated": "true"},
                "quota": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/quota"}
              }
            },
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
        }
      }
    }, {
      "name": "<b>william</b> cheung",
      "type": "STANDARD",
      "roles": ["READER", "COMMENTER"],
      "uuid": "f6ce-00f0-5c6c-41a7-a6b4-10d7-299c-210b",
      "email": "william.cheung@objective.com",
      "joinedDate": "2015-04-22T00:08:39Z",
      "shareUuid": "0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65",
      "accepted": true,
      "isOwner": true,
      "model": "participants",
      "_links": {
        "self": {"href": "/rest/participants/f6ce-00f0-5c6c-41a7-a6b4-10d7-299c-210b"},
        "share": {"href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65"},
        "avatar": {
          "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
          "templated": "true"
        },
        "user": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
      },
      "_embedded": {
        "share": {
          "name": "ReadOnlyShare",
          "status": "COMPLETE",
          "uuid": "0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65",
          "access": "READ",
          "createdDate": "2015-04-22T00:08:39Z",
          "modifiedDate": "2015-05-19T00:31:39Z",
          "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "organisationUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
          "ownerUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "endOnDateOptionalValue": {"value": null, "present": false},
          "endOnDateSpecified": false,
          "model": "shares",
          "_links": {
            "self": {"href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65"},
            "createAsset": {"href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65/assets"},
            "participants": {"href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65/participants"},
            "batchParticipants": {"href": "/rest/participants/batch"},
            "getParticipants": {
              "href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65/participants?offset={offset}&length={length}",
              "templated": "true"
            },
            "children": {
              "href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65/assets?parentUuid=0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65&sort={sort}&offset={offset}&length={length}",
              "templated": "true"
            },
            "comments": {"href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65/comments"},
            "rename": {"href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65/name"},
            "changeOwner": {"href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65/owner"},
            "setSummary": {"href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65/summary"},
            "owner": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
            "acl": {"href": "/rest/acls/b6fd-6634-4f0b-49b4-8272-a244-c99c-7210"},
            "threads": {"href": "/rest/threads?shareUuid=0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65"},
            "metadata": {"href": "/rest/shares/0130-cac9-b4ce-47c4-8c0c-21f9-cfdf-ef65/metadata"},
            "actions": {"href": "/rest/actions?userUuid={userUuid}&shareUuid={shareUuid}", "templated": "true"},
            "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
          },
          "_embedded": {
            "owner": {
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
            },
            "organisation": {
              "name": "A team",
              "id": 37,
              "domains": [],
              "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
              "timezone": "Australia/Sydney",
              "uuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
              "accountName": "A team",
              "model": "organisations",
              "_links": {
                "self": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793"},
                "avatar": {
                  "href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/avatar?size={size}&defaultUrl={defaultUrl}",
                  "templated": "true"
                },
                "memberships": {"href": "/rest/members"},
                "batchMemberships": {"href": "/rest/members/batch"},
                "actions": {"href": "/rest/actions?userUuid={userUuid}&orgUuid={orgUuid}", "templated": "true"},
                "quota": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/quota"}
              }
            },
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
        }
      }
    }, {
      "name": "<b>william</b> cheung",
      "type": "STANDARD",
      "roles": ["READER", "COMMENTER"],
      "uuid": "2115-98da-fda5-48dd-9092-5c27-2171-1e29",
      "email": "william.cheung@objective.com",
      "joinedDate": "2015-04-20T07:10:25Z",
      "shareUuid": "49c5-6e96-b939-4042-b650-de4c-8c2a-3b15",
      "accepted": true,
      "isOwner": true,
      "model": "participants",
      "_links": {
        "self": {"href": "/rest/participants/2115-98da-fda5-48dd-9092-5c27-2171-1e29"},
        "share": {"href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15"},
        "avatar": {
          "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
          "templated": "true"
        },
        "user": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
      },
      "_embedded": {
        "share": {
          "name": "new share",
          "status": "COMPLETE",
          "uuid": "49c5-6e96-b939-4042-b650-de4c-8c2a-3b15",
          "access": "READ",
          "createdDate": "2015-04-20T07:10:25Z",
          "modifiedDate": "2015-04-20T07:10:25Z",
          "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "organisationUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
          "ownerUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "endOnDateOptionalValue": {"value": null, "present": false},
          "endOnDateSpecified": false,
          "model": "shares",
          "_links": {
            "self": {"href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15"},
            "createAsset": {"href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15/assets"},
            "participants": {"href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15/participants"},
            "batchParticipants": {"href": "/rest/participants/batch"},
            "getParticipants": {
              "href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15/participants?offset={offset}&length={length}",
              "templated": "true"
            },
            "children": {
              "href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15/assets?parentUuid=49c5-6e96-b939-4042-b650-de4c-8c2a-3b15&sort={sort}&offset={offset}&length={length}",
              "templated": "true"
            },
            "comments": {"href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15/comments"},
            "rename": {"href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15/name"},
            "changeOwner": {"href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15/owner"},
            "setSummary": {"href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15/summary"},
            "owner": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
            "acl": {"href": "/rest/acls/d86a-340c-fb02-484c-8a82-1afd-64c3-9c1e"},
            "threads": {"href": "/rest/threads?shareUuid=49c5-6e96-b939-4042-b650-de4c-8c2a-3b15"},
            "metadata": {"href": "/rest/shares/49c5-6e96-b939-4042-b650-de4c-8c2a-3b15/metadata"},
            "actions": {"href": "/rest/actions?userUuid={userUuid}&shareUuid={shareUuid}", "templated": "true"},
            "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
          },
          "_embedded": {
            "owner": {
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
            },
            "organisation": {
              "name": "A team",
              "id": 37,
              "domains": [],
              "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
              "timezone": "Australia/Sydney",
              "uuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
              "accountName": "A team",
              "model": "organisations",
              "_links": {
                "self": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793"},
                "avatar": {
                  "href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/avatar?size={size}&defaultUrl={defaultUrl}",
                  "templated": "true"
                },
                "memberships": {"href": "/rest/members"},
                "batchMemberships": {"href": "/rest/members/batch"},
                "actions": {"href": "/rest/actions?userUuid={userUuid}&orgUuid={orgUuid}", "templated": "true"},
                "quota": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/quota"}
              }
            },
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
        }
      }
    }, {
      "name": "<b>william</b> cheung",
      "type": "STANDARD",
      "roles": ["READER", "COMMENTER"],
      "uuid": "ce05-1e82-a1d7-48c1-9a27-15fa-5cc0-b02a",
      "email": "william.cheung@objective.com",
      "joinedDate": "2015-04-13T01:48:48Z",
      "shareUuid": "07f1-c14a-a42e-42ba-b319-c570-91f6-4029",
      "accepted": true,
      "isOwner": true,
      "model": "participants",
      "_links": {
        "self": {"href": "/rest/participants/ce05-1e82-a1d7-48c1-9a27-15fa-5cc0-b02a"},
        "share": {"href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029"},
        "avatar": {
          "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
          "templated": "true"
        },
        "user": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
      },
      "_embedded": {
        "share": {
          "name": "happy",
          "status": "COMPLETE",
          "uuid": "07f1-c14a-a42e-42ba-b319-c570-91f6-4029",
          "access": "READ",
          "createdDate": "2015-04-13T01:48:48Z",
          "modifiedDate": "2015-04-13T01:48:48Z",
          "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "organisationUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
          "ownerUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "endOnDateOptionalValue": {"value": null, "present": false},
          "endOnDateSpecified": false,
          "model": "shares",
          "_links": {
            "self": {"href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029"},
            "createAsset": {"href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029/assets"},
            "participants": {"href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029/participants"},
            "batchParticipants": {"href": "/rest/participants/batch"},
            "getParticipants": {
              "href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029/participants?offset={offset}&length={length}",
              "templated": "true"
            },
            "children": {
              "href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029/assets?parentUuid=07f1-c14a-a42e-42ba-b319-c570-91f6-4029&sort={sort}&offset={offset}&length={length}",
              "templated": "true"
            },
            "comments": {"href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029/comments"},
            "rename": {"href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029/name"},
            "changeOwner": {"href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029/owner"},
            "setSummary": {"href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029/summary"},
            "owner": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
            "acl": {"href": "/rest/acls/fecf-1e50-1d91-4937-b55a-a1dc-aecd-d1b8"},
            "threads": {"href": "/rest/threads?shareUuid=07f1-c14a-a42e-42ba-b319-c570-91f6-4029"},
            "metadata": {"href": "/rest/shares/07f1-c14a-a42e-42ba-b319-c570-91f6-4029/metadata"},
            "actions": {"href": "/rest/actions?userUuid={userUuid}&shareUuid={shareUuid}", "templated": "true"},
            "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
          },
          "_embedded": {
            "owner": {
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
            },
            "organisation": {
              "name": "A team",
              "id": 37,
              "domains": [],
              "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
              "timezone": "Australia/Sydney",
              "uuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
              "accountName": "A team",
              "model": "organisations",
              "_links": {
                "self": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793"},
                "avatar": {
                  "href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/avatar?size={size}&defaultUrl={defaultUrl}",
                  "templated": "true"
                },
                "memberships": {"href": "/rest/members"},
                "batchMemberships": {"href": "/rest/members/batch"},
                "actions": {"href": "/rest/actions?userUuid={userUuid}&orgUuid={orgUuid}", "templated": "true"},
                "quota": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/quota"}
              }
            },
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
        }
      }
    }, {
      "name": "<b>william</b> cheung",
      "type": "STANDARD",
      "roles": ["READER", "COMMENTER"],
      "uuid": "b597-7702-414b-4c30-b721-5357-a41d-9cb9",
      "email": "william.cheung@objective.com",
      "joinedDate": "2015-02-05T04:46:03Z",
      "shareUuid": "662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4",
      "accepted": true,
      "isOwner": true,
      "model": "participants",
      "_links": {
        "self": {"href": "/rest/participants/b597-7702-414b-4c30-b721-5357-a41d-9cb9"},
        "share": {"href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4"},
        "avatar": {
          "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
          "templated": "true"
        },
        "user": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
      },
      "_embedded": {
        "share": {
          "name": "asdfsadfsdaf",
          "status": "COMPLETE",
          "uuid": "662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4",
          "access": "READ",
          "createdDate": "2015-02-05T04:46:03Z",
          "modifiedDate": "2015-02-05T04:46:03Z",
          "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "organisationUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
          "ownerUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "endOnDateOptionalValue": {"value": null, "present": false},
          "endOnDateSpecified": false,
          "model": "shares",
          "_links": {
            "self": {"href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4"},
            "createAsset": {"href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4/assets"},
            "participants": {"href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4/participants"},
            "batchParticipants": {"href": "/rest/participants/batch"},
            "getParticipants": {
              "href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4/participants?offset={offset}&length={length}",
              "templated": "true"
            },
            "children": {
              "href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4/assets?parentUuid=662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4&sort={sort}&offset={offset}&length={length}",
              "templated": "true"
            },
            "comments": {"href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4/comments"},
            "rename": {"href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4/name"},
            "changeOwner": {"href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4/owner"},
            "setSummary": {"href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4/summary"},
            "owner": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
            "acl": {"href": "/rest/acls/d950-f313-809c-4fbd-b6f5-2d51-3729-f03d"},
            "threads": {"href": "/rest/threads?shareUuid=662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4"},
            "metadata": {"href": "/rest/shares/662c-fa8c-3820-4cbf-8aad-ed70-159f-56f4/metadata"},
            "actions": {"href": "/rest/actions?userUuid={userUuid}&shareUuid={shareUuid}", "templated": "true"},
            "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
          },
          "_embedded": {
            "owner": {
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
            },
            "organisation": {
              "name": "A team",
              "id": 37,
              "domains": [],
              "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
              "timezone": "Australia/Sydney",
              "uuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
              "accountName": "A team",
              "model": "organisations",
              "_links": {
                "self": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793"},
                "avatar": {
                  "href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/avatar?size={size}&defaultUrl={defaultUrl}",
                  "templated": "true"
                },
                "memberships": {"href": "/rest/members"},
                "batchMemberships": {"href": "/rest/members/batch"},
                "actions": {"href": "/rest/actions?userUuid={userUuid}&orgUuid={orgUuid}", "templated": "true"},
                "quota": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/quota"}
              }
            },
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
        }
      }
    }, {
      "name": "<b>william</b> cheung",
      "type": "STANDARD",
      "roles": ["READER", "COMMENTER"],
      "uuid": "9048-0ae3-61ac-4cab-9a27-d54c-9466-6229",
      "email": "william.cheung@objective.com",
      "joinedDate": "2015-02-04T00:31:24Z",
      "shareUuid": "2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d",
      "accepted": true,
      "isOwner": true,
      "model": "participants",
      "_links": {
        "self": {"href": "/rest/participants/9048-0ae3-61ac-4cab-9a27-d54c-9466-6229"},
        "share": {"href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d"},
        "avatar": {
          "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
          "templated": "true"
        },
        "user": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
      },
      "_embedded": {
        "share": {
          "name": "ab testing",
          "status": "COMPLETE",
          "uuid": "2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d",
          "access": "READ",
          "createdDate": "2015-02-04T00:31:24Z",
          "modifiedDate": "2015-02-04T00:31:24Z",
          "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "organisationUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
          "ownerUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "endOnDateOptionalValue": {"value": null, "present": false},
          "endOnDateSpecified": false,
          "model": "shares",
          "_links": {
            "self": {"href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d"},
            "createAsset": {"href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d/assets"},
            "participants": {"href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d/participants"},
            "batchParticipants": {"href": "/rest/participants/batch"},
            "getParticipants": {
              "href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d/participants?offset={offset}&length={length}",
              "templated": "true"
            },
            "children": {
              "href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d/assets?parentUuid=2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d&sort={sort}&offset={offset}&length={length}",
              "templated": "true"
            },
            "comments": {"href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d/comments"},
            "rename": {"href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d/name"},
            "changeOwner": {"href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d/owner"},
            "setSummary": {"href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d/summary"},
            "owner": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
            "acl": {"href": "/rest/acls/a627-fa97-4c93-4295-9cc1-109a-e1ee-9014"},
            "threads": {"href": "/rest/threads?shareUuid=2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d"},
            "metadata": {"href": "/rest/shares/2794-0031-a08e-4a7b-b507-d3c6-8f63-ca6d/metadata"},
            "actions": {"href": "/rest/actions?userUuid={userUuid}&shareUuid={shareUuid}", "templated": "true"},
            "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
          },
          "_embedded": {
            "owner": {
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
            },
            "organisation": {
              "name": "A team",
              "id": 37,
              "domains": [],
              "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
              "timezone": "Australia/Sydney",
              "uuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
              "accountName": "A team",
              "model": "organisations",
              "_links": {
                "self": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793"},
                "avatar": {
                  "href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/avatar?size={size}&defaultUrl={defaultUrl}",
                  "templated": "true"
                },
                "memberships": {"href": "/rest/members"},
                "batchMemberships": {"href": "/rest/members/batch"},
                "actions": {"href": "/rest/actions?userUuid={userUuid}&orgUuid={orgUuid}", "templated": "true"},
                "quota": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/quota"}
              }
            },
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
        }
      }
    }, {
      "name": "<b>william</b> cheung",
      "type": "STANDARD",
      "roles": ["READER", "DOCUMENT_CREATOR", "CONTAINER_CREATOR"],
      "uuid": "6a3d-a037-f2c4-4f10-b8ce-bd37-b86d-e31f",
      "email": "william.cheung@objective.com",
      "joinedDate": "2015-02-04T03:04:39Z",
      "shareUuid": "3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a",
      "accepted": true,
      "isOwner": false,
      "model": "participants",
      "_links": {
        "self": {"href": "/rest/participants/6a3d-a037-f2c4-4f10-b8ce-bd37-b86d-e31f"},
        "share": {"href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a"},
        "avatar": {
          "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
          "templated": "true"
        },
        "user": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
      },
      "_embedded": {
        "share": {
          "name": "new asdf",
          "status": "COMPLETE",
          "uuid": "3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a",
          "access": "READ",
          "createdDate": "2015-01-08T03:56:51Z",
          "modifiedDate": "2015-01-08T03:56:51Z",
          "modifiedByUuid": "a585-016f-5bd5-4c94-842c-42bc-f427-785f",
          "organisationUuid": "79fc-5287-bb11-402c-bb4f-4d1e-0572-27c3",
          "ownerUuid": "a585-016f-5bd5-4c94-842c-42bc-f427-785f",
          "endOnDateOptionalValue": {"value": null, "present": false},
          "endOnDateSpecified": false,
          "model": "shares",
          "_links": {
            "self": {"href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a"},
            "createAsset": {"href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a/assets"},
            "participants": {"href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a/participants"},
            "batchParticipants": {"href": "/rest/participants/batch"},
            "getParticipants": {
              "href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a/participants?offset={offset}&length={length}",
              "templated": "true"
            },
            "children": {
              "href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a/assets?parentUuid=3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a&sort={sort}&offset={offset}&length={length}",
              "templated": "true"
            },
            "comments": {"href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a/comments"},
            "rename": {"href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a/name"},
            "changeOwner": {"href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a/owner"},
            "setSummary": {"href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a/summary"},
            "owner": {"href": "/rest/users/a585-016f-5bd5-4c94-842c-42bc-f427-785f"},
            "acl": {"href": "/rest/acls/ffe4-8f83-f1d9-408c-b4cd-acf9-1c43-820b"},
            "threads": {"href": "/rest/threads?shareUuid=3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a"},
            "metadata": {"href": "/rest/shares/3010-f91c-c0fc-41d5-9f1b-b10c-152d-5a3a/metadata"},
            "actions": {"href": "/rest/actions?userUuid={userUuid}&shareUuid={shareUuid}", "templated": "true"},
            "modifiedBy": {"href": "/rest/users/a585-016f-5bd5-4c94-842c-42bc-f427-785f"}
          },
          "_embedded": {
            "owner": {
              "name": "Viljami Peltola",
              "uuid": "a585-016f-5bd5-4c94-842c-42bc-f427-785f",
              "email": "will.peltola@objective.com",
              "model": "userinfos",
              "_links": {
                "self": {"href": "/rest/userinfos/a585-016f-5bd5-4c94-842c-42bc-f427-785f"},
                "avatar": {
                  "href": "/rest/avatar?userUuid=a585-016f-5bd5-4c94-842c-42bc-f427-785f&size={size}",
                  "templated": "true"
                }
              }
            },
            "organisation": {
              "name": "Corporation 2",
              "id": 45,
              "domains": [],
              "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
              "timezone": "Etc/GMT-12",
              "uuid": "79fc-5287-bb11-402c-bb4f-4d1e-0572-27c3",
              "accountName": "Corporation 2",
              "model": "organisations",
              "_links": {
                "self": {"href": "/rest/organisations/79fc-5287-bb11-402c-bb4f-4d1e-0572-27c3"},
                "avatar": {
                  "href": "/rest/organisations/79fc-5287-bb11-402c-bb4f-4d1e-0572-27c3/avatar?size={size}&defaultUrl={defaultUrl}",
                  "templated": "true"
                },
                "memberships": {"href": "/rest/members"},
                "batchMemberships": {"href": "/rest/members/batch"},
                "actions": {"href": "/rest/actions?userUuid={userUuid}&orgUuid={orgUuid}", "templated": "true"},
                "quota": {"href": "/rest/organisations/79fc-5287-bb11-402c-bb4f-4d1e-0572-27c3/quota"}
              }
            },
            "modifiedBy": {
              "name": "Viljami Peltola",
              "uuid": "a585-016f-5bd5-4c94-842c-42bc-f427-785f",
              "email": "will.peltola@objective.com",
              "model": "userinfos",
              "_links": {
                "self": {"href": "/rest/userinfos/a585-016f-5bd5-4c94-842c-42bc-f427-785f"},
                "avatar": {
                  "href": "/rest/avatar?userUuid=a585-016f-5bd5-4c94-842c-42bc-f427-785f&size={size}",
                  "templated": "true"
                }
              }
            }
          }
        }
      }
    }, {
      "name": "<b>william</b> cheung",
      "type": "STANDARD",
      "roles": ["READER", "COMMENTER"],
      "uuid": "fb1d-136c-58de-40dc-8d4c-8482-f7ad-4ab6",
      "email": "william.cheung@objective.com",
      "joinedDate": "2014-12-16T02:16:36Z",
      "shareUuid": "d155-5713-6ac1-4ac9-9c79-690a-4708-00be",
      "accepted": true,
      "isOwner": true,
      "model": "participants",
      "_links": {
        "self": {"href": "/rest/participants/fb1d-136c-58de-40dc-8d4c-8482-f7ad-4ab6"},
        "share": {"href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be"},
        "avatar": {
          "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
          "templated": "true"
        },
        "user": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
      },
      "_embedded": {
        "share": {
          "name": "sdfsdafs",
          "status": "COMPLETE",
          "uuid": "d155-5713-6ac1-4ac9-9c79-690a-4708-00be",
          "access": "READ",
          "createdDate": "2014-12-16T02:16:36Z",
          "modifiedDate": "2014-12-16T02:16:36Z",
          "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "organisationUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
          "ownerUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "endOnDateOptionalValue": {"value": null, "present": false},
          "endOnDateSpecified": false,
          "model": "shares",
          "_links": {
            "self": {"href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be"},
            "createAsset": {"href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be/assets"},
            "participants": {"href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be/participants"},
            "batchParticipants": {"href": "/rest/participants/batch"},
            "getParticipants": {
              "href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be/participants?offset={offset}&length={length}",
              "templated": "true"
            },
            "children": {
              "href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be/assets?parentUuid=d155-5713-6ac1-4ac9-9c79-690a-4708-00be&sort={sort}&offset={offset}&length={length}",
              "templated": "true"
            },
            "comments": {"href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be/comments"},
            "rename": {"href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be/name"},
            "changeOwner": {"href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be/owner"},
            "setSummary": {"href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be/summary"},
            "owner": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
            "acl": {"href": "/rest/acls/bc1a-debe-6f7b-49cd-b868-2e74-6086-a373"},
            "threads": {"href": "/rest/threads?shareUuid=d155-5713-6ac1-4ac9-9c79-690a-4708-00be"},
            "metadata": {"href": "/rest/shares/d155-5713-6ac1-4ac9-9c79-690a-4708-00be/metadata"},
            "actions": {"href": "/rest/actions?userUuid={userUuid}&shareUuid={shareUuid}", "templated": "true"},
            "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
          },
          "_embedded": {
            "owner": {
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
            },
            "organisation": {
              "name": "A team",
              "id": 37,
              "domains": [],
              "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
              "timezone": "Australia/Sydney",
              "uuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
              "accountName": "A team",
              "model": "organisations",
              "_links": {
                "self": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793"},
                "avatar": {
                  "href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/avatar?size={size}&defaultUrl={defaultUrl}",
                  "templated": "true"
                },
                "memberships": {"href": "/rest/members"},
                "batchMemberships": {"href": "/rest/members/batch"},
                "actions": {"href": "/rest/actions?userUuid={userUuid}&orgUuid={orgUuid}", "templated": "true"},
                "quota": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/quota"}
              }
            },
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
        }
      }
    }, {
      "name": "<b>william</b> cheung",
      "type": "STANDARD",
      "roles": ["READER", "COMMENTER"],
      "uuid": "395f-14ac-ef17-4cf6-ba29-cd04-aeeb-33eb",
      "email": "william.cheung@objective.com",
      "joinedDate": "2014-12-03T23:09:45Z",
      "shareUuid": "102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99",
      "accepted": true,
      "isOwner": true,
      "model": "participants",
      "_links": {
        "self": {"href": "/rest/participants/395f-14ac-ef17-4cf6-ba29-cd04-aeeb-33eb"},
        "share": {"href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99"},
        "avatar": {
          "href": "/rest/avatar?userUuid=3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7&size={size}",
          "templated": "true"
        },
        "user": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
      },
      "_embedded": {
        "share": {
          "name": "The AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA team",
          "status": "COMPLETE",
          "uuid": "102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99",
          "access": "READ",
          "createdDate": "2014-12-03T23:09:45Z",
          "modifiedDate": "2015-06-03T04:29:25Z",
          "modifiedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "organisationUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
          "ownerUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
          "endOnDateOptionalValue": {"value": null, "present": false},
          "endOnDateSpecified": false,
          "model": "shares",
          "_links": {
            "self": {"href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99"},
            "createAsset": {"href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99/assets"},
            "participants": {"href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99/participants"},
            "batchParticipants": {"href": "/rest/participants/batch"},
            "getParticipants": {
              "href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99/participants?offset={offset}&length={length}",
              "templated": "true"
            },
            "children": {
              "href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99/assets?parentUuid=102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99&sort={sort}&offset={offset}&length={length}",
              "templated": "true"
            },
            "comments": {"href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99/comments"},
            "rename": {"href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99/name"},
            "changeOwner": {"href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99/owner"},
            "setSummary": {"href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99/summary"},
            "owner": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"},
            "acl": {"href": "/rest/acls/d122-d283-511b-4ce2-bdeb-05df-7162-49cb"},
            "threads": {"href": "/rest/threads?shareUuid=102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99"},
            "metadata": {"href": "/rest/shares/102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99/metadata"},
            "actions": {"href": "/rest/actions?userUuid={userUuid}&shareUuid={shareUuid}", "templated": "true"},
            "modifiedBy": {"href": "/rest/users/3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7"}
          },
          "_embedded": {
            "owner": {
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
            },
            "organisation": {
              "name": "A team",
              "id": 37,
              "domains": [],
              "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
              "timezone": "Australia/Sydney",
              "uuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
              "accountName": "A team",
              "model": "organisations",
              "_links": {
                "self": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793"},
                "avatar": {
                  "href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/avatar?size={size}&defaultUrl={defaultUrl}",
                  "templated": "true"
                },
                "memberships": {"href": "/rest/members"},
                "batchMemberships": {"href": "/rest/members/batch"},
                "actions": {"href": "/rest/actions?userUuid={userUuid}&orgUuid={orgUuid}", "templated": "true"},
                "quota": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/quota"}
              }
            },
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
        }
      }
    }]);
  });
  app.use('/rest/shares', sharesRouter);
};
