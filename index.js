// Inbuild module of nodeJS
const http = require("http");
//import data "API-DATA/";
const BollywoodApi = require("./API-DATA/BollywoodApi");
const FitnessApi = require("./API-DATA/FitnessApi");
const FoodApi = require("./API-DATA/FoodApi");
const HollywoodApi = require("./API-DATA/HollywoodApi");
const TechnologyApi = require("./API-DATA/TechnologyApi");

// Creating server routing logic
const server = http.createServer((req, res) => {
  // Base URL

  if (req.url === "/") {
    // false
    console.log(req.url); // no usage
    res.write("Base URL"); // sending JSON, text , errors, xml from server to client
    res.end(); // is used to close any open
  }

  // Get request to particular URL
  else if (req.url === "/api") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }

  // Validation for request method and Login URL
  else if (req.method === "GET" && req.url === "/Bollywood") {
    console.log("/data" + ": Calling via GET Method");
    res.write(JSON.stringify(BollywoodApi.data));
    res.end();
  } else if (req.method === "GET" && req.url === "/Fitness") {
    console.log("/data" + ": Calling via GET Method");
    res.write(JSON.stringify(FitnessApi.data));
    res.end();
  } else if (req.method === "GET" && req.url === "/Food") {
    console.log("/data" + ": Calling via GET Method");
    res.write(JSON.stringify(FoodApi.data));
    res.end();
  } else if (req.method === "GET" && req.url === "/Hollywood") {
    console.log("/data" + ": Calling via GET Method");
    res.write(JSON.stringify(HollywoodApi.data));
    res.end();
  } else if (req.method === "GET" && req.url === "/Technology") {
    console.log("/data" + ": Calling via GET Method");
    res.write(JSON.stringify(TechnologyApi.data));
    res.end();
  }

  //validation for send endpoints both get and post
  else if (req.method === "GET" && req.url === "/send") {
    res.write(JSON.stringify(["Send", "GET Request"]));
    res.end();
  }

  // post endpoint for send
  else if (req.method === "POST" && req.url === "/send") {
    var raw_data;
    req.on("data", (data_chunk) => {
      // data => body of the post request
      //data is getting collected here
      // body we have written that data is coming
      raw_data = data_chunk;
      console.log(raw_data); // printed the data to see how post request body looks like when it comes to the backend // Buffer data
      console.log(raw_data.toString("utf8")); // converting data into readable format
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "test/html" });
      //console.log(raw_data.toString("utf8"));
      res.end(`${raw_data}`);
    });
  }
});

// Creating connection from the socket
server.on("connection", (socket) => {
  console.log("New Connection Created");
});
// Providing port details for server
server.listen(3001);
console.log("Listening on port 3001");
