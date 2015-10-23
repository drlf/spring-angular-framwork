package cn.ilongfei.springbootbasic.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ilongfei.springbootbasic.domain.User;

@Controller
public class IndexController {

	private static Logger log = LoggerFactory.getLogger(IndexController.class);
	
	@RequestMapping(value = "/login"    )
    public String showLoginForm(HttpServletRequest req, Model model) {
        return "/login.html";
    }
	
	@RequestMapping(value = "/login", method = RequestMethod.POST )
	@ResponseBody
    public Map login(@RequestBody User user) {
		HashMap result = new HashMap();
		result.put("msg", "success");
		result.put("refereshToken", "123321");
		result.put("userId", "111");
        return result;
    }
	
	
}
