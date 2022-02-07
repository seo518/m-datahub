




Install and configure the Amplify CLI
```
$ npm install -g @aws-amplify/cli
$ amplify configure
region:
user name:
accessKeyId:
secretAccessKey:
Profile Name:
```
Create a react app
```
npm create-react-app myapp
cd .\myapp\
amplify init
choose  vs code & javascript & react
```

## Cors configuration
```
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>HEAD</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```
## Bucket Policy


## open block public access