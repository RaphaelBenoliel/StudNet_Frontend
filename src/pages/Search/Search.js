/* eslint-disable */
/* eslint max-len: ["error", { "code": 400 }] */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  Text,
  SearchButton,
  Title,
  SearchHolder,
  CreateSearchContainer,
  SearchInput,
  PageWrapper,
  DropdownContainer,
  DropdownList,
  DropdownItem,
  UserContainer,
  UserImage,
  UserName,
  SearchContainer,
} from './Search.style';
import { getAllusers }  from '../../API/Auth_calls';

export default function Search() {
  const [auth, setAuth] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('user');
      if (JSON.parse(authData)) {
        setAuth(authData);
      }
    }
    const getUsers = async () => {
      try {
        const result = await getAllusers();
        if (result.users.success) {
          setUsers(result.users.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    if (searchText === '') {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const filteredResults = users.filter(user => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const search = searchText.toLowerCase();
      return fullName.includes(search);
    });

    setSearchResults(filteredResults);
    setShowDropdown(true);
  }, [searchText, users]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleItemClick = (user) => {
    setSearchText(`${user.firstName} ${user.lastName}`);
    // console.log('$$$$$$', user._id);
    var url = '/profile?id=' + user._id;
    navigate(url);
    setShowDropdown(false);
  };
  return (
    <PageWrapper>
    <SearchContainer>
      {auth ? (
        <>
          <Title>Search</Title>
          <SearchHolder>
            <CreateSearchContainer>
              <SearchInput
                type="text"
                value={searchText}
                onChange={handleInputChange}
                placeholder="Search..."
              />
              <SearchButton>Search</SearchButton>
            </CreateSearchContainer>
            {showDropdown && (
              <DropdownContainer>
                <DropdownList>
                  {searchResults.length > 0 ? (
                    <DropdownList>
                      {searchResults.map(user => (
                        <DropdownItem key={user._id} onClick={() => handleItemClick(user)}>
                          <UserContainer>
                            <UserImage src={user.picture} alt="User" />
                            <UserName>
                              {user.firstName} {user.lastName}
                            </UserName>
                          </UserContainer>
                        </DropdownItem>
                      ))}
                    </DropdownList>
                  ) : (
                    <DropdownList><Text>No results found</Text></DropdownList>
                  )}
                </DropdownList>
              </DropdownContainer>
            )}
          </SearchHolder>
        </>
      ) : (
        <Title>Please log in to use the search feature.</Title>
      )}
    </SearchContainer>
  </PageWrapper>
);
};
      