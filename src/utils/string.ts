export const getInitialsOf = (username: string): string => {
   const splittedUsername = username.split(" ");

   let initials: string = "";

   splittedUsername.forEach((subUsername) => (initials += subUsername.charAt(0)));

   return initials;
};
