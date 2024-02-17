import { Sorter } from ".";
import { User } from "../types/user";
import { AscendingSortedCompany } from "./AscendingSortedCompany";
import { DescendingSortedCompany } from "./DescendingSortedCompany";
import { SortedCollection } from "./SortedCollection";

export class CompanySorter extends Sorter {
    aSortedCollection: SortedCollection<User[]>;
    dSortedCollection: SortedCollection<User[]>;

    constructor(users: User[]) {
        super();
        this.aSortedCollection = new AscendingSortedCompany(users)
        this.dSortedCollection = new DescendingSortedCompany(users)
    }

    ascendingSort(): void {
        this.aSortedCollection.sort()
    }
    descendingSort(): void {
        this.dSortedCollection.sort()
    }

}