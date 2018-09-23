import {Deserializable} from './deserializable.model';

export class Project implements Deserializable {
    project_name: string;
    project_company: string;
    project_description: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
