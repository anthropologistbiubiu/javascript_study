// src/server.js
import express from "express";
import cors from "cors";

//const express = ("express");
//const cors = require("cors");

const app = express();
const PORT = 9090;

// 允许跨域（前端/axios 调用必备）
app.use(cors());

// 解析 JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * GET 接口
 * http://localhost:9090/fetch
 */
app.get("/fetch", (req, res) => {
  console.log("GET /fetch", req.query);

  res.json({
    code: 0,
    msg: "GET success",
    data: {
      query: req.query,
    },
  });
});

/**
 * POST 接口
 * http://localhost:9090/fetch
 */
app.post("/fetch", (req, res) => {
  console.log("POST /fetch", req.body);

  res.json({
    code: 0,
    msg: "POST success",
    data: {
      body: req.body,
    },
  });
});

/**
 * 启动服务
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
