README

## Use Homestead

Homestead install

https://laravel.com/docs/5.7/homestead

/path/to/your/uio3/project

```
folders:
    - map: /path/to/your/uio3/project
      to: /home/vagrant/Code/uio3

sites:
    - map: tms.local
      to: /home/vagrant/Code/uio3/src/public

databases:
    - homestead
    - uio3
```

set  hosts 

```
192.168.10.10 uio3.com
```


Clone code

```

```

Create environment file.

```
cp src/.env.example src/.env
```

Please change the connection destination of DB and APP_URL as follows (Update .env file as bellow).

## Use mail

https://mailtrap.io/


After creating your account, follow the site

Username, password

Please set to MAIL_USERNAME, MAIL_ PASSWORD above

After that, the mail sent locally will be delivered to that mailbox

```
MAIL_USERNAME=Username_Value
MAIL_PASSWORD=Password_Value
```

## Update reference to Market site
```
APP_MARKET_URL_JP=
APP_MARKET_URL_US=
APP_MARKET_URL_CA=
APP_MARKET_URL_FR=
APP_MARKET_URL_GB=
APP_MARKET_URL_IT=
APP_MARKET_URL_ES=
APP_MARKET_URL_DE=
```
## Update timezone to JST zone in .env file
```
APP_TIMEZONE=Asia/Tokyo
```