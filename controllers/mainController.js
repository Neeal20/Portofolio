async function renderHomePage (req,res) {
  res.render("home");
}

async function renderProjectPage (req,res) {
  res.render("project");
}

module.exports = {
  renderHomePage,
  renderProjectPage
};
