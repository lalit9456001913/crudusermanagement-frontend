/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const customCreateUser = /* GraphQL */ `
  mutation CustomCreateUser(
    $email: String!
    $phone: String
    $firstName: String
    $lastName: String
    $profilePhoto: String
  ) {
    customCreateUser(
      email: $email
      phone: $phone
      firstName: $firstName
      lastName: $lastName
      profilePhoto: $profilePhoto
    ) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
