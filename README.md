
<!-- ABOUT THE PROJECT -->
## About The Project
# multirepo



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Express][Express]][Next-url]
* [![Axios][Axios]][React-url]




<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

You must have the Docker desktop downloaded on the computer, due to the docker-compose in addition to having Postman installed, y la version de npm instalada
* npm
  ```sh
  npm install npm@latest -g
  ```
* Windows Version Docker Desktop
[Docker](https://docs.docker.com/desktop/install/windows-install/)

* Windows Postman app version
[Postman](https://www.postman.com/downloads/)

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/antichrist667/multirepo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Open the terminal and type the following command
   ```sh
   docker-compose up --build
   ```




<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

1. Open Postman and add the following URL in the POST method:
```sh
http://localhost:8082/register
```
2. Add the following body in the JSON format:
```sh
{
  "username": "usuario1",
  "password": "password1"
}
```
3. Click on the Send button and you will see the following response:

'User registered succesfully'

You can create as many different users as you want. They are stored in memory, but the username cannot be duplicated.

4. To review the created users, just change the endpoint to and switch to the GET method.

```sh
http://localhost:8082/users
```

5. To use the login microservice, we just need to create a new tab and put the following URL in the method:
```sh
http://localhost:8083/login
```

5. To log in, you just need to copy the same JSON of the created user like this:
```sh
{
  "username": "usuario1",
  "password": "password1"
}
```
6. Click on the Send button and you will see the following response:

'Authentication successful'





<!-- CONTRIBUTING -->
## Contributing

This project was carried out by the following collaborator:

* [Cristian Caiza](https://github.com/antichrist667)
* [Ariel Campoverde](https://github.com/Matari7)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Express]: https://img.shields.io/badge/express-8A2BE2
[Express-url]: https://axios-http.com/docs/intro
[Axios]: https://img.shields.io/badge/Axios-1A79F5
[Axios-url]: https://reactjs.org/