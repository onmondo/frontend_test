import { Sorter } from ".";
import { User } from "../types/user";
import { AscendingSortedName } from "./AscendingSortedName";
import { DescendingSortedName } from "./DescendingSortedName";
import { SortedCollection } from "./SortedCollection";

export class NameSorter extends Sorter {
    aSortedCollection: SortedCollection<User[]>;
    dSortedCollection: SortedCollection<User[]>;

    constructor(users: User[]) {
        super();
        this.aSortedCollection = new AscendingSortedName(users)
        this.dSortedCollection = new DescendingSortedName(users)
    }

    ascendingSort(): void {
        this.aSortedCollection.sort()
    }
    descendingSort(): void {
        this.dSortedCollection.sort()
    }

}