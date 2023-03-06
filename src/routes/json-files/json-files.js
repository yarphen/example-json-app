import multer from 'multer';
import { handler } from '../../middlewares/handler';
import * as jsonFileService from '../../services/json-files';
import { validateJsonFileCreation } from './validation';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const listJsonFiles = async (req, res) => {
  const { query } = req.query;
  const jsonFiles = await jsonFileService.listJsonFiles(query);
  res.status(200).json(jsonFiles);
};

const downloadJsonFile = async (req, res) => {
  const { id: rawId } = req.params;
  const id = parseInt(rawId, 10);
  const jsonFileData = await jsonFileService.getJsonFile(id);
  if (!jsonFileData) {
    res.status(404).json({ error: 'Not found' });
    return;
  }
  res.status(200)
    .setHeader('content-type', 'application/octet-stream')
    .send(jsonFileData?.jsonFile);
};

const uploadJsonFile = async (req, res) => {
  const { body: { name, description }, file } = req;

  const data = {
    name,
    description,
    jsonFile: JSON.parse(file.buffer.toString()),
  };
  const errors = await validateJsonFileCreation(data);
  if (errors.length) {
    res.status(400).json({ message: 'Errors', errors });
    return;
  }

  await jsonFileService.createJsonFile(data);
  res.status(201).json({ message: 'Created' });
};

const deleteJsonFile = async (req, res) => {
  const { id } = req.params;
  const removed = await jsonFileService.deleteJsonFile(id);
  if (!removed) {
    res.status(404).json({ error: 'Remove failed' });
    return;
  }
  res.status(200).json({ message: 'OK' });
};

export default (app) => {
  app.get('/json-files', handler(listJsonFiles));
  app.get('/json-files/:id/download', handler(downloadJsonFile));
  app.post('/json-files', upload.single('jsonFile'), handler(uploadJsonFile));
  app.delete('/json-files/:id', handler(deleteJsonFile));
};
