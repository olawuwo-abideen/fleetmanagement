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
exports.SensordataService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const sensordata_schema_1 = require("../schemas/sensordata.schema");
let SensordataService = class SensordataService {
    constructor(sensorDataModel) {
        this.sensorDataModel = sensorDataModel;
    }
    async create(sensordata) {
        try {
            const res = await this.sensorDataModel.create(sensordata);
            return res;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create sensor data.', error.message);
        }
    }
    async findAll(query) {
        const data = await this.sensorDataModel.find(query).exec();
        if (data.length === 0) {
            throw new common_1.NotFoundException('No sensor data found for the given query.');
        }
        return data;
    }
};
exports.SensordataService = SensordataService;
exports.SensordataService = SensordataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(sensordata_schema_1.sensorData.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], SensordataService);
//# sourceMappingURL=sensordata.service.js.map