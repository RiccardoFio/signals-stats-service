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
        console.log("Received GET request to view the signal of a device")
        return await this.signalService.getOneById(id);
    }

    @Get('/device/:deviceId')
    async getAllByDeviceId(@Param('deviceId') deviceId: number): Promise<Signal[]>{
        console.log("Received GET request to view all the signals of a device")
        return await this.signalService.getAllByDeviceId(deviceId);
    }
}