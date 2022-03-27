module.exports = {
  secret: process.env.AUTH_SECRET || "kevinpaez",
  expires: process.env.AUTH_EXPIRES || "20",
  rounds: process.env.AUTH_ROUNDS || 10
}