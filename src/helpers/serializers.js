export const userSerializer = (userData) => {
  const { email, id, username } = userData;

  return {
    email, id, userName: username
  }
}
