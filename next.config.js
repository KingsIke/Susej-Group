/** @type {import('next').NextConfig} */
// require('dotenv').config()
// import dotenv from "dotenv"
// dotenv.config()

require("dotenv").config();

const environment = process.env.NODE_ENV || "dev";
const nextConfig = {
  reactStrictMode: true,

}

module.exports = nextConfig
