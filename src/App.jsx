import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContactId";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div>
      {selectedContactId ? (
          <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>
      )}   
    </div>
  );
}