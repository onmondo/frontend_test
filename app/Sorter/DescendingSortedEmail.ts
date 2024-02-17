import { User } from "../types/user";
import { SortedCollection } from "./SortedCollection";

export class DescendingSortedEmail implements SortedCollection<User[]> {
    collection: User[];

    constructor(collection: User[]) {
        this.collection = collection
    }

    sort(): void {
        // sort by name
        this.collection.sort((a, b) => {
            const nameA = a.email.toUpperCase(); // ignore upper and lowercase
            const nameB = b.email.toUpperCase(); // ignore upper and lowercase
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