# .NET Core and Angular

## Setup Dev Envorment On Mac

### .NET Core
[Install .NET Core SDK](https://www.microsoft.com/net/core#macos)

- NOTE : [Create a Simple .NET Application on Mac](https://channel9.msdn.com/Blogs/dotnet/Create-NET-App-on-Mac?ocid=player)

### VS Code
[Downlaod VS Code](https://code.visualstudio.com/)

### VS Code Extention

- Angular v4 TypeScript Snippets 2.7.0
- ASP.NET Helper 0.6.3
- Auto Import 1.2.2
- C# 1.12.1
- C# Extensions for VSCode 1.3.0
- Docker 0.018
- mssql 1.2.0
- REST Client 0.15.3

### "Yeoman" OR "dotnet new ..."
- yeoman
$ npm install -g yo generator-aspnetcore-spa

### Installing SQL Server on macOS / Linux

To use the MSSQL on Mac, easy way is to download Docker image

- [install Docker](https://www.docker.com/docker-mac)
after install docker, go to `preferences` -> `Advanced` -> change the memory to be 4G ( mssql need 4G memory to run)

- [Docker for Mac](https://docs.docker.com/docker-for-mac/#general)
- [Pull the SQL Server 2017 Linux container image from Docker](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker)

```javascript
$ docker pull microsoft/mssql-server-linux:2017-latest
```
```javascript
$ docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=MyComplexPassw0rd!234' -e 'MSSQL_PID=Developer' -p 1401:1433 --name sql1 -d microsoft/mssql-server-linux:2017-latest

// List active container
$ docker ps -a
// start docker container
$ docker start 0bc6e87dc454
// Stop docker container
$ docker stop 0bc6e87dc454

// Error log
$ docker cp 0bc6e87dc454:/var/opt/mssql/log/errorlog .
```

- Starting with SQL Server 2017 CTP 2.0, the SQL Server command-line tools are included in the Docker image. If you attach to the image with an interactive command-prompt, you can run the tools locally.


### Create new project

```javascript
$ mkdir demo1
$ cd demo1

$ dotnet new
$ dotnet new angular
$ npm install

$ code .

```

### In-process HTTP Servers ( Kestrel vs WebListen )

- `Kestrel` Cross-platform, lower security, good for internet, Kestrel for Production site should be behind the IIS, Apach, etc..

- `WebListen` Windows-only, IIS

### Startup
- Startup.cs `ConfigureServices` 
DI

- Startup.cs `Configure` 

Middleware : like a function, order is important

```javascript
loggerFactory. : log middlewares .

app.UseWebpackDevMiddleware(...) : Webpack HotModuleReplacement auto refresh client side (Not Server side ) page without restart the project

app.UseStaticFiles(): for using imgs

app.UseMvc(...) : MVC middleware
```

### Environment

```javascript
Windows :

Run > set ASPNETCORE_ENVIRONMENT="Development"

Mac :

$ export ASPNETCORE_ENVIRONMENT=Development

`above only for this session`

```

### Setup client side machine level developement environment for mac

```javascript
//go to home
$ cd
$ code .bash_profile

`copy the following line inside the bash_profile` 
export ASPNETCORE_ENVIRONMENT=Development
```

### Setup server side dotnet watch
[Microsoft.DotNet.Watcher.Tools](https://github.com/aspnet/DotNetTools/tree/dev/src/Microsoft.DotNet.Watcher.Tools)

Install Microsoft.DotNet.Watcher.Tools as a DotNetCliToolReference to your project, demo1.csproj file.

```javascript
  <ItemGroup>
    <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="2.0.0" />
  </ItemGroup>
```

```javascript

$ dotnet restore

// insted of using $ dotnet run, we will use $ dotnet watch run
$ dotnet watch run

```

### SDLC Steps 

- requirement
- use cases
- dependncy graph

```
3.filter vehicles --> 2. List vehicles --> 1. Create Vehices
```
```
Create Vehicle --> Angular Form --> API --> Database --> Domain Model
```


## Build Domain Modles

`
the templet has the Controllers & Views, but not Models, we need to create it
`
```javascript
$ mkdir Models
```

#### ICollection vs IList

```javascript
There are similar, but IColletion does not have Index. IList have Index

```