'use strict';

let infra1 = {
	"_id": ObjectId('5af57221c32d1309b7d43ab6'),
	"api": {
		"ipaddress": "127.0.0.1",
		"token": "66493e2406e342207932caffba0d46893ae02c7482a59633a9ad9084f96e21228aea30e0adccb6aa7f9ee0a0b87f59ffa7aaa66b6941b419c5d0481bab6061262fbe04e7f494965cfa906dcb933ccd2935cf241b867abeee1d7d92c16cbfa6d7d1154f6adda15def779bfc08ca88306a8f53a202c65132a4b606c4d9311e88b160aa4b44afaeb5e39e8f8d2f8c9b06af1090df6912e6577fd5104be25c45c22d5b2c2934c055b7a358b37917c434bb45490d030b02bf93d79ab346588b7bd2a0e8c33e55358d3f5b8147c1b4eeae0fd47000700734cda6ad8265e2a84bb218e730bdee86eb50c75bedf1db89e3596716c76dfd2bd98bb6f18712fb25b20675ee47a9e20b4f553ddd00f1a14871354e4431138b04b7eb3c8b5d33579a9f1936d13afa197e755d4f546cd3cb50f7e3d90d2d4fb6cecf87a1850b93a543c36a2181704e55529363759fba72dc25640fba8b958d142302d35906064fb9921e7dcd20618cfd477db15d184caa0366d25e81fff45a31e84d864786c1d56379deb77f01769085496f514a52473d917053a0f1f432a94e375ab66d5d01ad79c833081e9468ff457ee0eacb1d8ff2ff888e3c72bca93caad06e820bf0ff2e6a9fc69bbdc83f085a040cc4d4b78c89f397363eaea9b6b7713ba621036abcb37af0b5b2979f13035310a6871fb5a78c497263c8f1db6fd6a5524a1a8e92056ea4ea9ea2f942",
		"network": "soajsnet",
		"port": 443,
		"protocol": "https"
	},
	"name": "local",
	"technologies": [
		"docker"
	],
	"templates": null,
	"label": "LOCAL_DOCKER_EXAMPLE",
	"deployments": [
		{
			"technology": "docker",
			"options": {
				"zone": "local"
			},
			"environments": [
				"DEV", "DASHBOARD"
			],
			"loadBalancers": {},
			"name": "htlocal3roszjc7aiclc",
			"id": "htlocal3roszjc7aiclc"
		},
		{
			"technology": "docker",
			"options": {
				"zone": "local"
			},
			"environments": [
				"DEV", "DASHBOARD"
			],
			"loadBalancers": {},
			"name": "htlocalegv2pn43cyo7s",
			"id": "htlocalegv2pn43cyo7s"
		},
		{
			"technology": "docker",
			"options": {
				"zone": "local"
			},
			"environments": [
				"DEV", "DASHBOARD"
			],
			"loadBalancers": {},
			"name": "htlocalm0t0m59e5aa7g",
			"id": "htlocalm0t0m59e5aa7g"
		}
	]
};

let infra2 = {
	"_id": ObjectId('5b9b7e733c2054eec725e719'),
	"api": {
		"ipaddress": "127.0.0.1",
		"token": "66493e2406e342207932caffba0d46893ae02c7482a59633a9ad9084f96e21228aea30e0adccb6aa7f9ee0a0b87f59ffa7aaa66b6941b419c5d0481bab6061262fbe04e7f494965cfa906dcb933ccd2935cf241b867abeee1d7d92c16cbfa6d7d1154f6adda15def779bfc08ca88306a8f53a202c65132a4b606c4d9311e88b160aa4b44afaeb5e39e8f8d2f8c9b06af1090df6912e6577fd5104be25c45c22d5b2c2934c055b7a358b37917c434bb45490d030b02bf93d79ab346588b7bd2a0e8c33e55358d3f5b8147c1b4eeae0fd47000700734cda6ad8265e2a84bb218e730bdee86eb50c75bedf1db89e3596716c76dfd2bd98bb6f18712fb25b20675ee47a9e20b4f553ddd00f1a14871354e4431138b04b7eb3c8b5d33579a9f1936d13afa197e755d4f546cd3cb50f7e3d90d2d4fb6cecf87a1850b93a543c36a2181704e55529363759fba72dc25640fba8b958d142302d35906064fb9921e7dcd20618cfd477db15d184caa0366d25e81fff45a31e84d864786c1d56379deb77f01769085496f514a52473d917053a0f1f432a94e375ab66d5d01ad79c833081e9468ff457ee0eacb1d8ff2ff888e3c72bca93caad06e820bf0ff2e6a9fc69bbdc83f085a040cc4d4b78c89f397363eaea9b6b7713ba621036abcb37af0b5b2979f13035310a6871fb5a78c497263c8f1db6fd6a5524a1a8e92056ea4ea9ea2f942",
		"network": "soajsnet",
		"port": 443,
		"protocol": "https"
	},
	"name": "local",
	"technologies": [
		"docker"
	],
	"templates": [],
	"label": "LOCAL_DOCKER_TEST",
	"deployments": [
		{
			"technology": "docker",
			"options": {
				"zone": "local"
			},
			"environments": [
				"DEV", "DASHBOARD"
			],
			"loadBalancers": {},
			"name": "htlocal3roszjc7aiclc",
			"id": "htlocal3roszjc7aiclc"
		}
	]
};