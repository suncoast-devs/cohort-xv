dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t sdg-blog-xv-image ./bin/release/netcoreapp2.2/publish

docker tag sdg-blog-xv-image registry.heroku.com/sdg-blog-xv/web

docker push registry.heroku.com/sdg-blog-xv/web

heroku container:release web -a sdg-blog-xv

# sudo chmod 755 deploy.sh
# ./deploy.sh