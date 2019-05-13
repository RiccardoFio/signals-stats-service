import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Signal } from '../entities/signal.entity';
import { SignalRepository } from '../repositories/signal.repository';


@Service()
export class SignalService {
    constructor(
        @InjectRepository()
        private readonly signals: SignalRepository,
    ) {}

    public async getOneById(id: number): Promise<Signal>{
        return await this.signals.getOneById(id)
    }

    public async getAllByDeviceId(deviceId: number): Promise<Signal[]>{
        return await this.signals.getAllByDeviceId(deviceId);
    }
}