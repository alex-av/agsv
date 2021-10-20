import { ModelLocation } from "../location/location.model";
import { ModelUser } from "./user.model";
import { ModelUserType } from "./userType.model";

export class ModelProfile{

    
    Id: number = 0;
    Condition: number = 0;
    DateOfBirth: string | null = '';
    Detail: string | null = '';
    Description: string = '';
    Image: string | null = '';
    NickName: string | null = '';
    ParentPost: number | null = 0;
    Trophy: string | null = '';
    User: ModelUser = new ModelUser();
    UserType: ModelUserType = new ModelUserType();
    Location: ModelLocation = new ModelLocation();

    constructor(){
    }
}