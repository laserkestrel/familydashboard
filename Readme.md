Outdoor Garage<BR>
http://<BRIDGEIP>/api/<APIKEY>/sensors/101<BR>
Outdoor Front<BR>
http://<BRIDGEIP>/api/<APIKEY>/sensors/166<BR>
Landing<BR>
http://<BRIDGEIP>/api/<APIKEY>/sensors/203<BR>
Noidea<BR>
http://<BRIDGEIP>/api/<APIKEY>/sensors/206<BR>
<BR><BR>
docker build https://github.com/laserkestrel/familydashboard.git<BR>
docker ps # lists all images running<BR>
docker run -d -p 3000:3000 your_image_name<BR>
