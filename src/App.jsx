import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContactId from "./components/SelectedContactId";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}