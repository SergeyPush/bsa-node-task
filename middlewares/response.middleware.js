const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  // if (!res.body) {
  //   return res
  //     .status(400)
  //     .json({ error: true, message: "Something went wrong" });
  // }
  // console.log(res.body);
  next();
};

export { responseMiddleware };
