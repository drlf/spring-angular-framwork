package cn.ilongfei.springbootbasic.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.MatrixVariable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ilongfei.springbootbasic.domain.Setting;
import cn.ilongfei.springbootbasic.domain.User;

@Controller
@RequestMapping(value = "/test")
public class TestController {

	private static Logger log = LoggerFactory.getLogger(TestController.class);
	
	
	
	@RequestMapping(value = "/param")
	@ResponseBody
    public String param(@RequestParam String foo) {
		log.info("@RequestParam is {0}", foo);
        return foo;
    }
	
	/*@RequestMapping(value = "/body")
	@ResponseBody
    public String body(@RequestParam String foo) {
		log.info("@RequestParam is {0}", foo);
        return foo;
    }*/
	
	@RequestMapping(value="{path1}/{path2}", method=RequestMethod.GET)
	public @ResponseBody String withMatrixVariablesMultiple (
			@PathVariable String path1, @MatrixVariable(value="foo", pathVar="path1") String foo1,
			@PathVariable String path2, @MatrixVariable(value="foo", pathVar="path2") String foo2) {

		return "Obtained matrix variable foo=" + foo1 + " from path segment '" + path1
				+ "' and variable 'foo=" + foo2 + " from path segment '" + path2 + "'";
	}
	
	@RequestMapping(value="body", method=RequestMethod.POST)
	public @ResponseBody String withBody(@RequestBody User user, @RequestParam String setting) {
		log.info("User[{0}], setting[{1}]",user,setting);
		return user.toString() +" - " + setting.toString();
	}	
}
