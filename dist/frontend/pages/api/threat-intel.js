"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockThreatIntel = [
    { id: '1', name: 'Sample Threat 1', description: 'Description for sample threat 1' },
    { id: '2', name: 'Sample Threat 2', description: 'Description for sample threat 2' }
];
exports.default = (req, res) => {
    res.status(200).json(mockThreatIntel);
};
