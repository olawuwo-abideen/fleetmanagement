"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensordataController = void 0;
const common_1 = require("@nestjs/common");
const sensordata_service_1 = require("./sensordata.service");
const create_sensordata_dto_1 = require("../dto/create-sensordata.dto");
let SensordataController = class SensordataController {
    constructor(sensorService) {
        this.sensorService = sensorService;
    }
    async createSensorData(sensordata) {
        return this.sensorService.create(sensordata);
    }
    async findAll(query) {
        const filter = {};
        if (query.vehicle_id)
            filter['vehicle_id'] = query.vehicle_id;
        if (query.sensor_type)
            filter['sensor_type'] = query.sensor_type;
        if (query.start_time || query.end_time) {
            filter['timestamp'] = {};
            if (query.start_time)
                filter['timestamp']['$gte'] = new Date(query.start_time);
            if (query.end_time)
                filter['timestamp']['$lte'] = new Date(query.end_time);
        }
        return this.sensorService.findAll(query);
    }
};
exports.SensordataController = SensordataController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sensordata_dto_1.CreatesensorDto]),
    __metadata("design:returntype", Promise)
], SensordataController.prototype, "createSensorData", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SensordataController.prototype, "findAll", null);
exports.SensordataController = SensordataController = __decorate([
    (0, common_1.Controller)('sensor-data'),
    __metadata("design:paramtypes", [sensordata_service_1.SensordataService])
], SensordataController);
//# sourceMappingURL=sensordata.controller.js.map