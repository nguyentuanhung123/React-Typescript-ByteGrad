// example of type alias vs interface

// type UserProps = {
//     name:  string;
//     age: number;
// }

// interface IUserProps {
//     name:  string;
//     age: number;
// }

// const User = ({} : UserProps) => {
//     return (
//         <div></div>
//     )
// }

// export default User;


/**
 * combining a base with additional properties
 */

// "intersection"

// type UserProps = {
//     name:  string;
//     age: number;
// }

// type AdminProps = UserProps & {
//     role: string;
// }


// "extending"

// interface IUserProps {
//     name:  string;
//     age: number;
// }

// interface IAdminProps extends IUserProps {
//     role: string;
// }

// ---------------------------------------------------------

/**
 * interface can only descripe object - type alias can also
 * descripe object AND evevrything elese (e.g. primitive values)
 * such as string, number, boolean)
 */

// type Address = string | string[];

// const address: Address = '123 Maiun St';

// interface IAddress {
//     address: string;
// }

// const address: IAddress =  {
//     address: '123 Maiun St';
// }

/**
 * type alias can easily use utility types - interface can too 
 * but only with ugly syntax
 */

// type UserProps = {
//     name:  string;
//     age: number;
//     createAt: Date;
// }

// Xoá nhiều thứ bằng Omit (giờ chủ còn createAt: Date;)

// type GuestProps = Omit<UserProps, "name" | "age">

// interface IGuestProps extends Omit<UserProps, "name" | "age"> {}

/**
 * type alias can easily descripe tuples - interface can too
 * but only with ugly syntax
 */

// type Address = [number, string];

// interface Address extends Array<number | string> {
//     0: number;
//     1: string;
// }

// const address: Address = [2, "Other At."]

// ---------------------------------------------------------------

/**
 * extracting type from something else
 * 
 */

// const project = {
//     tilte: "Project 1",
//     specification: {
//         areaSize: 100,
//         rooms: 3,
//     },
// };

// type Specification = typeof project;

// type Specification = typeof project["specification"];

/**
 * interfaces can be merged
 * "interfaces are open" and "type aliases are close"
 */

// interface User {
//     name:  string;
//     age: number;
// }

// interface User {
//     role: string;
// }

// let user: User = {
//     name: 'Hung',
//     age: 21,
//     role: 'Develop'
// }

// type User = {
//     name:  string;
//     age: number;
// }

// type User2 = User & {
//     role: string;
// }

// let user: User2 = {
//     name: 'Hung',
//     age: 21,
//     role: 'Develop'
// }

/**
 * type alias can be used for classes too
 */

// interface IUser {
//     name: string;
//     age: number;
// }

// class User implements IUser {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// type TUser =  {
//     name: string;
//     age: number;
// }

// class User implements TUser {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// --------------------------------------------------------

/**
 * type alias can be used for functions too
 */









