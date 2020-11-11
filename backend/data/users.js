import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Ioana Dragomir',
    email: 'ioana@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Cody Dog',
    email: 'cody@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kim Cat',
    email: 'kim@email.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users
