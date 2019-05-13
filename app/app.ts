import 'reflect-metadata';
import { useContainer as typeormUseContainer, createConnection } from 'typeorm';
import { Container } from 'typedi';
import { createExpressServer, useContainer as routingUseContainer } from 'routing-controllers';
import { SignalController } from './controllers/signal.controller';


typeormUseContainer(Container)
routingUseContainer(Container)

const port = process.env.PORT || 3000;

const app = createExpressServer({
    controllers: [SignalController]
});

app.listen(port, () => {
    console.log("Signal service listening on port " + port);
})

createConnection()
.then(async connection => {
    console.log("Database connection started successfully");
})
.catch(error => console.log(error))

