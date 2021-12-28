package net.javaguides.springboot.dao;

import net.javaguides.springboot.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {

    int insertUser(User user);

    List<User> selectAllUsers();

    Optional<User> selectUserByEmail(String USER_EMAIL);

}
