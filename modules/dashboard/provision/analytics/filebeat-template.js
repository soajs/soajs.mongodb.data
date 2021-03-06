'use strict';
var filebeatTemplates = [
	{
		"_type": 'template',
		"_name": 'filebeat',
		"_json": {
			"mappings": {
				"_default_": {
					"_all": {
						"norms": false
					},
					"_meta": {
						"version": "5.3.0"
					},
					"date_detection": false,
					"dynamic_templates": [
						{
							"strings_as_keyword": {
								"mapping": {
									"ignore_above": 1024,
									"type": "keyword"
								},
								"match_mapping_type": "string"
							}
						}
					],
					"properties": {
						"@timestamp": {
							"type": "date"
						},
						"bytes": {
							"type": "long"
						},
						"user_agent": {
							"properties": {
								"device": {
									"ignore_above": 1024,
									"type": "keyword"
								},
								"major": {
									"type": "long"
								},
								"minor": {
									"type": "long"
								},
								"name": {
									"ignore_above": 1024,
									"type": "keyword"
								},
								"os": {
									"ignore_above": 1024,
									"type": "keyword"
								},
								"os_major": {
									"type": "long"
								},
								"os_minor": {
									"type": "long"
								},
								"os_name": {
									"ignore_above": 1024,
									"type": "keyword"
								},
								"patch": {
									"type": "long"
								}
							}
						},
						"geoip": {
							"properties": {
								"continent_name": {
									"ignore_above": 1024,
									"type": "keyword"
								},
								"country_iso_code": {
									"ignore_above": 1024,
									"type": "keyword"
								},
								"location": {
									"type": "geo_point"
								}
							}
						},
						"error": {
							"ignore_above": 1024,
							"type": "keyword"
						},
						"beat": {
							"properties": {
								"hostname": {
									"ignore_above": 1024,
									"type": "keyword"
								},
								"name": {
									"ignore_above": 1024,
									"type": "keyword"
								},
								"version": {
									"ignore_above": 1024,
									"type": "keyword"
								}
							}
						},
						"fields": {
							"properties": {}
						},
						"fileset": {
							"properties": {
								"module": {
									"ignore_above": 1024,
									"type": "keyword"
								},
								"name": {
									"ignore_above": 1024,
									"type": "keyword"
								}
							}
						},
						"input_type": {
							"ignore_above": 1024,
							"type": "keyword"
						},
						"message": {
							"norms": false,
							"type": "text"
						},
						"meta": {
							"properties": {
								"cloud": {
									"properties": {
										"availability_zone": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"instance_id": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"machine_type": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"project_id": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"provider": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"region": {
											"ignore_above": 1024,
											"type": "keyword"
										}
									}
								}
							}
						},
						"nginx": {
							"properties": {
								"access": {
									"properties": {
										"agent": {
											"norms": false,
											"type": "text"
										},
										"body_sent": {
											"properties": {
												"bytes": {
													"type": "long"
												}
											}
										},
										"geoip": {
											"properties": {
												"continent_name": {
													"ignore_above": 1024,
													"type": "keyword"
												},
												"country_iso_code": {
													"ignore_above": 1024,
													"type": "keyword"
												},
												"location": {
													"type": "geo_point"
												}
											}
										},
										"http_version": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"method": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"referrer": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"remote_ip": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"response_code": {
											"type": "long"
										},
										"url": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"user_agent": {
											"properties": {
												"device": {
													"ignore_above": 1024,
													"type": "keyword"
												},
												"major": {
													"type": "long"
												},
												"minor": {
													"type": "long"
												},
												"name": {
													"ignore_above": 1024,
													"type": "keyword"
												},
												"os": {
													"ignore_above": 1024,
													"type": "keyword"
												},
												"os_major": {
													"type": "long"
												},
												"os_minor": {
													"type": "long"
												},
												"os_name": {
													"ignore_above": 1024,
													"type": "keyword"
												},
												"patch": {
													"type": "long"
												}
											}
										},
										"user_name": {
											"ignore_above": 1024,
											"type": "keyword"
										}
									}
								},
								"error": {
									"properties": {
										"connection_id": {
											"type": "long"
										},
										"level": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"message": {
											"norms": false,
											"type": "text"
										},
										"pid": {
											"type": "long"
										},
										"tid": {
											"type": "long"
										}
									}
								}
							}
						},
						"offset": {
							"type": "long"
						},
						"read_timestamp": {
							"ignore_above": 1024,
							"type": "keyword"
						},
						"source": {
							"ignore_above": 1024,
							"type": "keyword"
						},
						"system": {
							"properties": {
								"syslog": {
									"properties": {
										"hostname": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"message": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"pid": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"program": {
											"ignore_above": 1024,
											"type": "keyword"
										},
										"timestamp": {
											"ignore_above": 1024,
											"type": "keyword"
										}
									}
								}
							}
						},
						"tags": {
							"ignore_above": 1024,
							"type": "keyword"
						},
						"type": {
							"ignore_above": 1024,
							"type": "keyword"
						}
					}
				}
			},
			"order": 0,
			"settings": {
				"index-mapping-total_fields-limit": 10000,
				"index-refresh_interval": "5s"
			},
			"template": "filebeat-*"
		}
	},
];
