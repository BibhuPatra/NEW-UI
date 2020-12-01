export const IS_LOGEDIN = 'IS_LOGEDIN';
export const IS_LOGEDOUT = 'IS_LOGEDOUT';

export const userLogin = (user) => {
          return {
          type: IS_LOGEDIN,
          user
          };
}