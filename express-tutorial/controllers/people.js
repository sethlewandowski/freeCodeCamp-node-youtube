const getPeople = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name' })
  }
  res.status(201).send({ success: true, person: name })
}
