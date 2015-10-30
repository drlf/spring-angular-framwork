package cn.ilongfei.springbootbasic.controller.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import cn.ilongfei.springbootbasic.domain.User;
import cn.ilongfei.springbootbasic.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

	private static Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	UserService userService;

	@RequestMapping(method = RequestMethod.GET)
	public Iterable<User> list() {
		return userService.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public User findById(@PathVariable long id) {
		return userService.findOne(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable long id) {
		userService.delete(id);
	}

	@RequestMapping(value = "/{id}",method = RequestMethod.PUT)
	public User update(@PathVariable long id, @RequestBody User user) {
		if(user.getId() == id){
			userService.update(user);
			return user;
		}else{
			return null;
		}
		
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User save(@RequestBody User user) {
		return userService.createUser(user);
	}

}
