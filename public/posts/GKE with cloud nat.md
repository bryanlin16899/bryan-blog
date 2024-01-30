此篇講解如何在 GCP 建立 VPC 及使用 CloudNAT，這裡以 GKE 做為 server 端
- 建VPC
- 建Cloud Router
- 預留IP 
- 建Cloud Nat
- 建cluster
	- 選擇network與subnet到先前建立的VPC
	- 設定為私人叢集
	- 看需求是否要限制存取層IP
	等cluster建立好後可以先run一個ubuntu pod確認cloud nat是否運作正常
	- 建立一個ubuntu pod
	```shell
	$ kubectl apply -f https://gist.githubusercontent.com/tcdowney/
	b8a0297241b74f94ef1fc6627f7ea69a/raw/eaae035f5adca37ca00d4a49f1c1958f
	e3db89e3/ubuntu-sleep.yaml
	```
	- 進入ubuntu的shell
	```shell
	$ kubectl exec -it ubuntu -- /bin/bash
	```
	- 安裝curl後確認對外ip是否為cloud nat的ip
	```shell
	$ apt update
	$ apt install curl -y
	$ curl ifconfig.co
    >>> 34.80.xxx.xxx (cloud nat ip) ✅
	```

- 備份原本的cluster
	- 建立備份方案
	- 手動執行備份
- 還原到新的cluster
- load balancer更新
	- 刪除新舊的service
	- 重新到新的cluster中apply，建立新的load balancer

