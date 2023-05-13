export default function handler(req, res) {
  res.status(200).json({ nickName : req.query.nickName})
}

