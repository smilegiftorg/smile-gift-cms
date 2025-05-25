"use strict";

const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const { promisify } = require("util");

const streamPipeline = promisify(pipeline);

module.exports = async function uploadFile(image, app) {
  const fileName = path.basename(image.split("?")[0]);
  const tmpPath = path.join(__dirname, fileName);

  // Download image
  const response = await axios({
    method: "GET",
    url: image,
    responseType: "stream",
  });
  await streamPipeline(response.data, fs.createWriteStream(tmpPath));

  // Upload to Strapi
  const uploadedFiles = await app
    .plugin("upload")
    .service("upload")
    .upload({
      data: {},
      files: {
        path: tmpPath,
        name: fileName,
        type: response.headers["content-type"],
        size: fs.statSync(tmpPath).size,
      },
    });

  fs.unlinkSync(tmpPath); // Delete temp file

  const imageId = uploadedFiles[0]?.id;

  return {
    imageId,
    fileName,
  };
};
