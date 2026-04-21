import { projectCatalog } from '../src/data/projectsCatalog.js'

function json(res, status, body) {
  res.status(status).json(body)
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return json(res, 405, { error: 'Method not allowed' })
  }

  return json(res, 200, { projects: projectCatalog })
}
