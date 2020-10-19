const express = require("express");
const router = express.Router();
var request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const RPC_HOST = process.env.RPC_HOST;
const RPC_PORT = process.env.RPC_PORT;

const headersText = {
  "content-type": "text/plain;"
};

const OPTIONS_URL = `http://${USER}:${PASS}@${RPC_HOST}:${RPC_PORT}/`;

const optionsByReq = (dataString) => {
  return {
    url: OPTIONS_URL,
    method: "POST",
    headers: headersText,
    body: dataString
  };
}

const responseError = (res, error) => {
  {
    res.send({
      msg: "Is Bitcoin server running ?",
      error: error
    });
  }
}

const logNoParams = (reqName) => {
  console.log(`${reqName} request received for RPC: ${RPC_HOST}:${RPC_PORT}`);
}

router.get("/test", (req, res) => res.json({
  msg: "backend works"
}));

router.get("/getblockcount", (req, res) => {
  logNoParams('get block count');
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
  var options = optionsByReq(dataString);

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/getbestblockhash", (req, res) => {
  logNoParams('get best block hash');
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`;
  var options = optionsByReq(dataString);

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/getconnectioncount", (req, res) => {
  logNoParams('get connection count');
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getconnectioncount","params":[]}`;
  var options = optionsByReq(dataString);
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/getdifficulty", (req, res) => {
  logNoParams('get difficulty');
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getdifficulty","params":[]}`;
  var options = optionsByReq(dataString);

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/getblockchaininfo", (req, res) => {
  logNoParams('get blockchain info');
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockchaininfo","params":[]}`;
  var options = optionsByReq(dataString);

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/getmininginfo", (req, res) => {
  logNoParams('get mining info');
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getmininginfo","params":[]}`;
  var options = optionsByReq(dataString);

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/getpeerinfo", (req, res) => {
  logNoParams('get peer info');
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getpeerinfo","params":[]}`;
  var options = optionsByReq(dataString);

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/getrawmempool", (req, res) => {
  logNoParams('get raw mempool');
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawmempool","params":[]}`;
  var options = optionsByReq(dataString);
  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/getblock/:hash", (req, res) => {
  console.log(`Get block by hash: ${req.params.hash}`);
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.hash
  }"]}`;
  var options = optionsByReq(dataString);

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/getblockhash/:index", (req, res) => {
  console.log(`Get block by id: ${req.params.index}`);
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash","params":[${
    req.params.index
  }]}`;
  var options = optionsByReq(dataString);

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/getrawtransaction/:id", (req, res) => {
  console.log(`Get tx by id: ${req.params.id}`);
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
    req.params.id
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headersText,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

router.get("/decoderawtransaction/:hex", (req, res) => {
  console.log(`Decode raw tx by: ${req.params.hex}`);
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
    req.params.hex
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    method: "POST",
    headers: headersText,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    } else responseError(res, error);
  };
  request(options, callback);
});

module.exports = router;


