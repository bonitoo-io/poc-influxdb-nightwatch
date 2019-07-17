import { client } from 'nightwatch-api';
import { Given, Then, When } from 'cucumber';
import { flush, config, defaultUser } from '../../utils/InfluxUtils';

var wumpus = client.page.wumpusPage();

Then(/^fail an assertion?/, async () => {
    await wumpus.failAssertion()
})
