import { Get, Param, JsonController } from 'routing-controllers';
import { SignalService } from '../services/signal.service';
import { Signal } from '../entities/signal.entity';


@JsonController('/signals')
export class SignalController {
    constructor(
        private signalService: SignalService,
    ) {}
    
    @Get('/:id')
    async getOneById(@Param('id') id: number): Promise<Signal>{
        return await this.signalService.getOneById(id);
    }

    @Get('/device/:deviceId')
    async getAllByDeviceId(@Param('deviceId') deviceId: number): Promise<Signal[]>{
        return await this.signalService.getAllByDeviceId(deviceId);
    }
}