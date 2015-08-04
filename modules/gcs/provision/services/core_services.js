var core_services = [
    {
        "gcId": "55c0855923f9fd8f0d86b736",
        "name": "gc_pages",
        "port": 4500,
        "extKeyRequired": true,
        "awareness": false,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 5,
        "image": "soajsorg/gcs",
        "gcV": 1,
        "apis": [
            {
                "l": "List Entries",
                "v": "/list",
                "group": "Pages",
                "groupMain": true
            },
            {
                "l": "Add Page",
                "v": "/add",
                "group": "Pages"
            },
            {
                "l": "Update Page",
                "v": "/update",
                "group": "Pages"
            },
            {
                "l": "Get One Page",
                "v": "/get",
                "group": "Pages"
            },
            {
                "l": "Delete Page",
                "v": "/delete",
                "group": "Pages"
            }
        ]
    },
    {
        "gcId": "55c0c5aee0e554410b76dbe8",
        "name": "gc_posts",
        "port": 4600,
        "extKeyRequired": true,
        "awareness": false,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 5,
        "image": "soajsorg/gcs",
        "gcV": 1,
        "apis": []
    },
    {
        "name": "urac",
        "extKeyRequired": true,
        "port": 4001,
        "requestTimeout": 30,
        "requestTimeoutRenewal": 5,
        "apis": []
    }
];