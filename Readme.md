Outdoor Garage<BR>
http://<BRIDGEIP>/api/<APIKEY>/sensors/101<BR>
Outdoor Front<BR>
http://<BRIDGEIP>/api/<APIKEY>/sensors/166<BR>
Landing<BR>
http://<BRIDGEIP>/api/<APIKEY>/sensors/203<BR>
Noidea<BR>
http://<BRIDGEIP>/api/<APIKEY>/sensors/206<BR>
<BR><BR>
Useful Commands<BR><BR>
git clone https://github.com/laserkestrel/familydashboard.git
docker build -t familydashboard . <BR>
docker ps # lists all images running<BR>
docker run -d -p 80:80 familydashboard<BR>
docker run -d -p 80:80 -e HUE_API_URL=http://ipaddress/api/secret/sensors/ familydashboard<BR>
c=$(docker ps -q) && [[ $c ]] && docker kill $c<BR>
docker logs biglongcontainerguid<BR>