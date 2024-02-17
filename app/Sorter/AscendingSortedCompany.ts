import { User } from "../types/user";
import { SortedCollection } from "./SortedCollection";

export class AscendingSortedCompany implements SortedCollection<User[]> {
    collection: User[];

    constructor(collection: User[]) {
        this.collection = collection
    }

    sort(): void {
        // sort by name
        this.collection.sort((a, b) => {
            const nameA = a.company.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.company.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }
        
            // names must be equal
            return 0;
        });
    }

}