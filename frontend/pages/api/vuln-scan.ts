import { NextApiRequest, NextApiResponse } from 'next';
import Docker from 'dockerode';

// Connect to Docker daemon via TCP
const docker = new Docker({ host: 'localhost', port: 2375 });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const container = docker.getContainer('webtrey_vm');

    // Execute command in the container
    const exec = await container.exec({
      Cmd: ['/giza_venv/bin/python', '/app/vuln_scan.py'],
      AttachStdout: true,
      AttachStderr: true,
      Tty: true,
    });

    exec.start({ hijack: true, stdin: true }, (err, stream) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      let output = '';
      stream.on('data', (data) => {
        output += data.toString();
      });

      stream.on('end', () => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ output });
      });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
