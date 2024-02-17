import { Sorter } from ".";
import { User } from "../types/user";
import { AscendingSortedEmail } from "./AscendingSortedEmail";
import { DescendingSortedEmail } from "./DescendingSortedEmail";
import { SortedCollection } from "./SortedCollection";

export class EmailSorter extends Sorter {
    aSortedCollection: SortedCollection<User[]>;
    dSortedCollection: SortedCollection<User[]>;

    constructor(users: User[]) {
        super();
        this.aSortedCollection = new AscendingSortedEmail(users)
        this.dSortedCollection = new DescendingSortedEmail(users)
    }

    ascendingSort(): void {
        this.aSortedCollection.sort()
    }
    descendingSort(): void {
        this.dSortedCollection.sort()
    }

}