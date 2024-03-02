Container should be started with this as format of argument<BR>
http://<BRIDGEIP>/api/<APIKEY>/sensors/<BR>
<BR>
Server side code looks for all sensors with a valid temperature readning then render them in the html. <BR>
<BR><BR>
Useful Commands<BR><BR>
git clone https://github.com/laserkestrel/familydashboard.git
docker build -t familydashboard . <BR>
docker ps # lists all images running<BR>
docker run -d -p 80:80 familydashboard<BR>
docker run -d -p 80:80 -e HUE_API_URL=http://ipaddress/api/secret/sensors/ familydashboard<BR>
c=$(docker ps -q) && [[ $c ]] && docker kill $c<BR>
docker logs biglongcontainerguid<BR>
docker exec -it containername bash<BR>