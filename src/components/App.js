import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import Packinglist from './Packinglist';
import Stats from "./Stats";


export default function App(){

  const [items, setItems] = useState([]);

  function handleAdd(item){
    setItems ((items) => [...items, item]);
  }
  function handleDelete (id){
    setItems ( items => items.filter(item => item.id !== id));
  }

  function handleToggleItem (id){
    setItems( items => items.map(item => item.id === id ? {...item, packed : !item.packed}
      : item));
  }
  function handleClearList(){
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if (confirmed) setItems ([]);
  }

  return <div className="app">
    <Logo />
    <Form onAddItems={handleAdd}/>
    <Packinglist items={items} onDeleteItem = {handleDelete} onToggleItem = {handleToggleItem} handleClearList={handleClearList}/>
    <Stats items={items} />
  </div>
}
