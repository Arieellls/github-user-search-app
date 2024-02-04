import { useState } from 'react';
import Search from "../Search";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useProfileStore } from "@/components/store/store";

import searchImage from '/src/assets/icon-search.svg';

export function InputWithButton() {
  const [searchQuery, setSearchQuery] = useState('');

  const getUserProfile = () => {
    console.log(searchQuery)
    useProfileStore.setState((state) => ({ ...state, show: true }));
    useProfileStore.getState().getUserProfile(searchQuery);
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  }

  return (
    <Search>
      <img
        src={searchImage} 
        alt="Search Icon"
        width={24} 
        height={24} 
      />
      <Input
        type="text"
        placeholder="Search..."
        className="border-none focus:outline-none active:border-bg-secondary text-txt-high-contrast bg-bg-secondary placeholder-txt-high-contrast"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <Button type="submit" className='bg-primary-color text-txt-high-contrast' onClick={getUserProfile}>
        Search
      </Button>
    </Search>
  );
}
