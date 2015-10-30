location / {
            root   C:/Users/0001/git/spring-angular-framwork/spring-angular-framwork/src/main/resources/static;
            index  index.html;
        }
		
location /api {
   proxy_pass http://localhost:9000/api;
   
   proxy_cache_valid  200 302 404 1s;
}