import { Repository, EntityRepository } from 'typeorm';
import { Signal } from '../entities/signal.entity';


@EntityRepository(Signal)
export class SignalRepository extends Repository<Signal> {

    public getOneById(id: number): Promise<Signal>{
        return this.findOneOrFail({ id })
    }

    public getAllByDeviceId(deviceId: number): Promise<Signal[]>{
        return this.find({
            deviceId: deviceId,
        })
    }
}