# My second FullStack Project adding JWT

---

In this Project, I utilized "ProtectedRoutes" component on Client Side, to secure routes and verify user. On the serve side, I implemented JWT to protect routes and added three roles:

- User: this type of user can´t do much. They only have access to "/products".
- Moderator: this type of user has access to "/products" and /analysis. However, in the "/analysis" routes, they can only see users but can´t create, update or delete them. On the other hand, they have all the features with respect to products (Create, Update or Delete) in "/analysis" route.
- Admin: this type of user does not have restrictions.

For access with any of these roles, here are some accounts:

- User Role:
  - username: user3
  - password: user3
- Moderator Role:
  - username: user2
  - password: user2
- Admin Role:
  - username: user1
  - password: user1

As the title suggests, this is my second Full-Stack project developed with the MERN stack. Again, I followed Fazt´s videos, particularly, [this one](https://www.youtube.com/watch?v=lV7mxivGX_I&t=1954s). This time, I added some new features.
