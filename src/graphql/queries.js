/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      phone
      firstName
      lastName
      profilePhoto
      addresses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone
        firstName
        lastName
        profilePhoto
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      house
      city
      pincode
      userID
      isActive
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        house
        city
        pincode
        userID
        isActive
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const addressesByUserIDAndHouse = /* GraphQL */ `
  query AddressesByUserIDAndHouse(
    $userID: ID!
    $house: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addressesByUserIDAndHouse(
      userID: $userID
      house: $house
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        house
        city
        pincode
        userID
        isActive
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
