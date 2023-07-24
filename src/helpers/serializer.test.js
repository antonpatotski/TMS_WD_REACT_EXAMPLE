import { userSerializer } from "./serializers";

describe('userSerializer', () => {
  it('should return converted data for non empty user', () => {
    const user = { email: 'email', id: 'id', username: 'userName' };
    const expectedResult = { email: 'email', id: 'id', userName: 'userName' };

    expect(userSerializer(user)).toEqual(expectedResult);
  });

  it('should return converted data for empty user', () => {
    const user = {};
    const expectedResult = { email: undefined, id: undefined, userName: undefined };

    expect(userSerializer(user)).toEqual(expectedResult);
  });
})
