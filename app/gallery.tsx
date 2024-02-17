"use client";

import { useState } from "react";
import Avatar from "boring-avatars";
import {
  FaRegCircleXmark,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { SingleValue, ActionMeta } from "react-select";
import Controls from "./controls";
import Modal from "./modal";

import { User } from "./types/user";
import { NameSorter } from "./Sorter/NameSorter";
import { EmailSorter } from "./Sorter/EmailSorter";
import { CompanySorter } from "./Sorter/CompanySorter";

export type GalleryProps = {
  users: User[];
};

export type ControlProps = {
  handleSortChange: (newValue: SingleValue<{ label: string; value: string; }>, actionMeta: ActionMeta<{ label: string; value: string; }>) => void
  handleSortDirChange: (newValue: SingleValue<{ label: string; value: string; }>, actionMeta: ActionMeta<{ label: string; value: string; }>) => void
}
const Gallery = ({ users }: GalleryProps) => {
  const [usersList, setUsersList] = useState(users);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedSortField, setSelectedSortField] = useState('');
  const [selectedSortDir, setSelectedSortDir] = useState('');

  const handleModalOpen = (id: number) => {
    const user = usersList.find((item) => item.id === id) || null;

    if (user) {
      setSelectedUser(user);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleSortChange = (
      newValue: SingleValue<{ label: string; value: string; }>, 
      actionMeta: ActionMeta<{ label: string; value: string; }>
    ): void => {
      console.log("selected field", newValue)
      if (newValue) {
        setSelectedSortField(newValue.value)
        switch(newValue?.value) {
          case 'name':
            if (selectedSortDir === 'ascending') {
              const sorter = new NameSorter(usersList);
              sorter.ascendingSort()
              const sortedUser = sorter.aSortedCollection.collection as unknown
              console.log("sortedUser", sortedUser);
              setUsersList([...sortedUser as User[]]);
            } else {
              const sorter = new NameSorter(usersList);
              sorter.descendingSort();
              const sortedUser = sorter.dSortedCollection.collection as unknown
              console.log("sortedUser", sortedUser);
              setUsersList([...sortedUser as User[]]);
            }
          break;
          case 'email':
            if (selectedSortDir === 'ascending') {
              const sorter = new EmailSorter(usersList);
              sorter.ascendingSort()
              const sortedUser = sorter.aSortedCollection.collection as unknown
              console.log("sortedUser", sortedUser);
              setUsersList([...sortedUser as User[]]);
            } else {
              const sorter = new EmailSorter(usersList);
              sorter.descendingSort();
              const sortedUser = sorter.dSortedCollection.collection as unknown
              console.log("sortedUser", sortedUser);
              setUsersList([...sortedUser as User[]]);
            }
          break;
          case 'company':
            if (selectedSortDir === 'ascending') {
              const sorter = new CompanySorter(usersList);
              sorter.ascendingSort()
              const sortedUser = sorter.aSortedCollection.collection as unknown
              console.log("sortedUser", sortedUser);
              setUsersList([...sortedUser as User[]]);
            } else {
              const sorter = new CompanySorter(usersList);
              sorter.descendingSort();
              const sortedUser = sorter.dSortedCollection.collection as unknown
              console.log("sortedUser", sortedUser);
              setUsersList([...sortedUser as User[]]);
            }
          break;
        }
      }

  }

  const handleSortDirChange = (
      newValue: SingleValue<{ label: string; value: string; }>, 
      actionMeta: ActionMeta<{ label: string; value: string; }>
    ): void => {
      console.log("selected direction", newValue)
      if (newValue) {
        setSelectedSortDir(newValue.value)
        if (newValue.value === 'ascending') {
          switch(selectedSortField) {
            case 'name':
              const nameSorter = new NameSorter(usersList);
              nameSorter.ascendingSort()
              const sortedUserByName = nameSorter.aSortedCollection.collection as unknown
              console.log("sortedUser", sortedUserByName);
              setUsersList([...sortedUserByName as User[]]);
            break;
            case 'email':
              const emailSorter = new EmailSorter(usersList);
              emailSorter.ascendingSort()
              const sortedUserByEmail = emailSorter.aSortedCollection.collection as unknown
              console.log("sortedUser", sortedUserByEmail);
              setUsersList([...sortedUserByEmail as User[]]);
            break;
            case 'company':
              const companySorter = new CompanySorter(usersList);
              companySorter.ascendingSort()
              const sortedUserByCompany = companySorter.aSortedCollection.collection as unknown
              console.log("sortedUser", sortedUserByCompany);
              setUsersList([...sortedUserByCompany as User[]]);
            break;
          }
        } else {
          switch(selectedSortField) {
            case 'name':
              const nameSorter = new NameSorter(usersList);
              nameSorter.descendingSort()
              const sortedUserByName = nameSorter.dSortedCollection.collection as unknown
              console.log("sortedUser", sortedUserByName);
              setUsersList([...sortedUserByName as User[]]);
            break;
            case 'email':
              const emailSorter = new EmailSorter(usersList);
              emailSorter.descendingSort()
              const sortedUserByEmail = emailSorter.dSortedCollection.collection as unknown
              console.log("sortedUser", sortedUserByEmail);
              setUsersList([...sortedUserByEmail as User[]]);
            break;
            case 'company':
              const companySorter = new CompanySorter(usersList);
              companySorter.descendingSort()
              const sortedUserByCompany = companySorter.dSortedCollection.collection as unknown
              console.log("sortedUser", sortedUserByCompany);
              setUsersList([...sortedUserByCompany as User[]]);
            break;
          }
        }
      }
      
  }

  return (
    <div className="user-gallery">
      <div className="heading">
        <h1 className="title">Users</h1>
        <Controls handleSortChange={handleSortChange} handleSortDirChange={handleSortDirChange} />
      </div>
      <div className="items">
        {usersList.map((user, index) => (
          <div
            className="item user-card"
            key={index}
            onClick={() => handleModalOpen(user.id)}
          >
            <div className="body">
              <Avatar
                size={96}
                name={user.name}
                variant="marble"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
            </div>
            <div className="info">
              <div className="name">{user.name}</div>
              <div className="company">{user.company.name}</div>
            </div>
          </div>
        ))}
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <div className="user-panel">
            <div className="header">
              <div
                role="button"
                tabIndex={0}
                className="close"
                onClick={handleModalClose}
              >
                <FaRegCircleXmark size={32} />
              </div>
            </div>
            <div className="body">
              {selectedUser && (
                <div className="user-info info">
                  <div className="avatar">
                    <Avatar
                      size={240}
                      name={selectedUser.name}
                      variant="marble"
                      colors={[
                        "#92A1C6",
                        "#146A7C",
                        "#F0AB3D",
                        "#C271B4",
                        "#C20D90",
                      ]}
                    />
                  </div>
                  <div className="name">
                    {selectedUser.name} ({selectedUser.username})
                  </div>
                  <div className="field">
                    <FaLocationDot className="icon" />
                    <div className="data">{`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}`}</div>
                  </div>
                  <div className="field">
                    <FaPhone className="icon" />
                    <div className="value">{selectedUser.phone}</div>
                  </div>
                  <div className="fields">
                    <FaEnvelope className="icon" />
                    <div className="value">{selectedUser.email}</div>
                  </div>
                  <div className="company">
                    <div className="name">{selectedUser.company.name}</div>
                    <div className="catchphrase">
                      {selectedUser.company.catchPhrase}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
