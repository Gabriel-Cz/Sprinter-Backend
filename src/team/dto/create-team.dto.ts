import { ObjectId } from 'mongoose';

export class CreateTeamDto {
    decisorId: ObjectId;
    financesExpId: ObjectId;
    customerExpId: ObjectId;
    marketingExpId: ObjectId;
    techExpId: ObjectId;
    designExpId: ObjectId;
}