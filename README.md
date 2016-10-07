# Payment_Develop_Interface
This project provide a development tool for front end development.

# Setup

Make sure that you have installed `node` and `npm`. We use node v6.5 in production for now. 

    nvm install v6.5

Download the source code after you have your `node` and `npm` installed.

    cd your/work/path
    git clone https://github.com/TTEasyPayment/Payment_Develop_Interface.git
    cd Payment_Develop_Interface
    npm install     # install dependent modules

# Start and stop

Start:
    node ./bin/www

Stop it:
    use ctrl+c to stop the application

# Interfaces

All the interface saved in Payment_Develop_Interface/mockdatas.
Suppose the request url is: /aaaa
aaaa_get_req.json : The request parameters and url of HTTP GET request "/aaaa".
aaaa_get.json : The response of HTTP GET request "/aaaa".

aaaa_post_req.json : The request parameters and url of HTTP POST request "/aaaa".
aaaa_post.json : The response of HTTP POST request "/aaaa".

