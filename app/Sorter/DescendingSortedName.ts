import { User } from "../types/user";
import { SortedCollection } from "./SortedCollection";

export class DescendingSortedName implements SortedCollection<User[]> {
    collection: User[];

    constructor(collection: User[]) {
        this.collection = collection
    }

    sort(): void {
        // sort by name
        this.collection.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
            return -1;
            }
            if (nameA < nameB) {
            return 1;
            }
        
            // names must be equal
            return 0;
        });
    }

}