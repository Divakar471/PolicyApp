package net.javaguides.springboot.dao;

import net.javaguides.springboot.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("ArrayListDao")
public class ArrayListDao implements UserDao {

    private static List<User> DB = new ArrayList<>();

    static {
        DB.add(new User("tuncayemekci@gmail.com", "12345"));
        DB.add(new User("ali@gmail.com", "abcasd"));
        DB.add(new User("veli@gmail.com", "tasdsd"));
        DB.add(new User("hasan@gmail.com", "kjghas"));
        DB.add(new User("huseyin@gmail.com", "fahgwa"));
    }

    @Override
    public int insertUser(User user) {
        DB.add(user);
        return 1;
    }

    @Override
    public List<User> selectAllUsers(){
        return DB;
    }

    @Override
    public Optional<User> selectUserByEmail(String USER_EMAIL) {
        return DB.stream()
                .filter(user -> user.getUSER_EMAIL().equals(USER_EMAIL))
                .findFirst();
    }


}
