import {ApiFactory} from './API/api-factory';
import { initDBConnection } from './DB/db-connection';

// קובץ השורש של הפרויקט

// אתחול חיבור למסד הנתונים
initDBConnection().then();


// init api
const api: ApiFactory = new ApiFactory(3000);