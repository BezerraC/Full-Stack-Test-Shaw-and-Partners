const express = require("express");
const router = express.Router();
const async = require("express-async-await");
const fetch = require("node-fetch");

// @route GET api/users
// @desc Get next 30 users from id (id, login)
// @access public
router.get("/:since", async (req, res) => {
  const users = await fetch(
    `https://api.github.com/users?since=${req.params.since}`
  );

  const data = await users.json();
  const result = [];
  data.map(({ login, id }) => {
    result.push({ login, id });
  });

  const headerLink = users.headers.get("link");

  const nextLink = headerLink.includes("next")
    ? headerLink.substring(
        headerLink.indexOf("<") + 1,
        headerLink.indexOf('>; rel="next"')
      )
    : "";

  res.setHeader("next", nextLink);
  res.send(result);
});

// @route GET api/users/:username/details
// @desc Get details from an user (id, login, html_url, created_at)
// @access public
router.get("/:username/details", async (req, res) => {
  const user = await fetch(
    `https://api.github.com/users/${req.params.username}`
  );
  const data = await user.json();

  const result = (({ id, login, html_url, created_at, avatar_url }) => ({
    id,
    login,
    profileUrl: html_url,
    createdAt: created_at,
    avatarUrl: avatar_url
  }))(data);

  res.send(result);
});

// @route GET api/users/:username/repos
// @desc Get repos from an user (id, name, html_url)
// @access public
router.get("/:username/repos", async (req, res) => {
  const repos = await fetch(
    `https://api.github.com/users/${req.params.username}/repos`
  );
  const data = await repos.json();

  const result = [];
  data.map(({ id, name, html_url }) => {
    result.push({ id, name, url: html_url });
  });

  res.send(result);
});

module.exports = router;
