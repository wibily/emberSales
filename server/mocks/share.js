module.exports = function(app) {
  var express = require('express');
  var sharesRouter = express.Router();

  sharesRouter.get('/:id', function(req, res) {
    res.send({
      "name": "The AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA team",
      "status": "COMPLETE",
      "uuid": "102f-3b2b-b087-4a19-8632-a62a-6fa3-2b99",
      "createdDate": "2014-12-03T23:09:45Z",
      "access": "READ",
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
          "name": "william THE LLLLLLLLLLLLLLOOOOOONNNNGGGG cheung",
          "email": "william.cheung@objective.com",
          "uuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
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
          "accountName": "A team",
          "uuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
          "membershipCount": -2,
          "suspended": false,
          "selfStartedTrial": false,
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
            "quota": {"href": "/rest/organisations/fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793/quota"},
            "contract": {"href": "/rest/contracts/4daa-d0ed-ef99-4910-9a24-9df7-5de1-8336"}
          },
          "_embedded": {
            "contract": {
              "state": "ACTIVE",
              "type": "UPGRADE",
              "startDate": "2015-04-16",
              "uuid": "4daa-d0ed-ef99-4910-9a24-9df7-5de1-8336",
              "endDate": "2016-03-02",
              "createdDate": "2015-04-16T07:09:24Z",
              "invoiceState": "SUPERSEDED",
              "price": 16622,
              "committedDate": "2015-04-16T07:09:57Z",
              "invoicedDate": "2015-04-16T07:09:58Z",
              "paidDate": "2015-04-16T07:10:01Z",
              "orgUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
              "editionUuid": "878c-3418-9444-4aa1-a056-9aef-ad77-4087",
              "createdByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
              "committedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
              "invoicedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
              "paidByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
              "model": "contracts",
              "_links": {
                "self": {"href": "/rest/contracts/4daa-d0ed-ef99-4910-9a24-9df7-5de1-8336"},
                "edition": {"href": "/rest/editions/878c-3418-9444-4aa1-a056-9aef-ad77-4087"},
                "supersededContract": {"href": "/rest/contracts/1ef2-b155-dfd8-4713-be1c-b221-f94e-72ca"}
              },
              "_embedded": {
                "edition": {
                  "name": "Enterprise 50k",
                  "rank": 50000,
                  "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
                  "connections": 50000,
                  "uuid": "878c-3418-9444-4aa1-a056-9aef-ad77-4087",
                  "rrp": 28500,
                  "grandfathered": false,
                  "model": "editions",
                  "_links": {"self": {"href": "/rest/editions/878c-3418-9444-4aa1-a056-9aef-ad77-4087"}}
                },
                "supersededContract": {
                  "state": "ACTIVE",
                  "type": "UPGRADE",
                  "startDate": "2015-03-11",
                  "uuid": "1ef2-b155-dfd8-4713-be1c-b221-f94e-72ca",
                  "endDate": "2016-03-02",
                  "createdDate": "2015-03-11T06:09:59Z",
                  "invoiceState": "SUPERSEDED",
                  "price": 9214,
                  "committedDate": "2015-03-11T06:10:04Z",
                  "invoicedDate": "2015-03-11T06:10:06Z",
                  "paidDate": "2015-03-11T06:10:08Z",
                  "orgUuid": "fcf7-3e71-73ba-4d25-9e6b-79b5-00e4-0793",
                  "editionUuid": "38c5-7bd7-8317-4c60-b286-59d5-f92e-cd15",
                  "createdByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
                  "committedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
                  "invoicedByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
                  "paidByUuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
                  "model": "contracts",
                  "_links": {
                    "self": {"href": "/rest/contracts/1ef2-b155-dfd8-4713-be1c-b221-f94e-72ca"},
                    "edition": {"href": "/rest/editions/38c5-7bd7-8317-4c60-b286-59d5-f92e-cd15"},
                    "supersededContract": {"href": "/rest/contracts/a4b3-0948-9f4c-4db1-8004-a51a-5fcd-b3eb"}
                  },
                  "_embedded": {
                    "edition": {
                      "name": "Workgroup 10k",
                      "rank": 10000,
                      "features": ["ADMIN", "CREATE_SHARE", "REPORTING", "VERSIONING"],
                      "connections": 10000,
                      "uuid": "38c5-7bd7-8317-4c60-b286-59d5-f92e-cd15",
                      "rrp": 9600,
                      "grandfathered": false,
                      "model": "editions",
                      "_links": {"self": {"href": "/rest/editions/38c5-7bd7-8317-4c60-b286-59d5-f92e-cd15"}}
                    }
                  }
                }
              }
            }
          }
        },
        "modifiedBy": {
          "name": "william THE LLLLLLLLLLLLLLOOOOOONNNNGGGG cheung",
          "email": "william.cheung@objective.com",
          "uuid": "3136-c8d8-72d0-4c98-8b73-543e-f676-3cb7",
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
    });
  });

  app.use('/rest/shares', sharesRouter);
};
