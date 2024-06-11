"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dockerode_1 = __importDefault(require("dockerode"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Connect to Docker daemon via TCP
const docker = new dockerode_1.default({ host: 'localhost', port: 2375 });
const scanScripts = {
    url_scans: ['burp_scan.py', 'nmap_scan.py', 'nikto_scan.py', 'sslscan.py'],
    contract_scans: ['slither_scan.py', 'echidna_scan.py', 'foundry_scan.py', 'hardhat_scan.py'],
};
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const target = req.query.target || 'zksync';
        const scanType = req.query.scanType || 'url_scans';
        const container = docker.getContainer('webtrey_vm');
        if (!scanScripts[scanType]) {
            return res.status(400).json({ error: 'Invalid scan type' });
        }
        const results = yield Promise.all(scanScripts[scanType].map((scriptName) => __awaiter(void 0, void 0, void 0, function* () {
            const exec = yield container.exec({
                Cmd: ['/usr/bin/python3', `/app/scripts/scans/${scriptName}`, target],
                AttachStdout: true,
                AttachStderr: true,
                Tty: true,
            });
            const stream = yield exec.start({});
            return new Promise((resolve, reject) => {
                let output = '';
                stream.on('data', (data) => {
                    output += data.toString();
                });
                stream.on('end', () => {
                    resolve({ scriptName, output });
                });
                stream.on('error', (error) => {
                    reject(error);
                });
            });
        })));
        // Read logs directory and return the list of log files
        const logDir = path_1.default.join('/app/logs');
        const logFiles = fs_1.default.readdirSync(logDir).map((file) => ({
            fileName: file,
            content: fs_1.default.readFileSync(path_1.default.join(logDir, file), 'utf-8'),
        }));
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ results, logFiles });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
