## MongoDB Install(Mac or Linux)

Install Homebrew

    sudo /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Install MongoDB

    brew install MongoDB

Create directory where mongo stores data
    
    sudo mkdir -p /data/db
    
    sudo chmod -R `id -un` /data/db
    
Run mongo daemon

    mongod
    
Download MongoDB Compass Community Edition Stable

    https://www.mongodb.com/products/compass

Download Mongooose

    npm install mongoose
