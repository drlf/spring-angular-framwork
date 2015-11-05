package cn.ilongfei.springbootbasic.service;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class AccessService {
	private static Logger log = LoggerFactory.getLogger(AccessService.class);
	
	//验证密码，返回refereshToken
	public Map login(String username, String password){
		String refereshToken = "asdfgh";
		HashMap result = new HashMap();
		result.put("refereshToken", refereshToken);
		result.put("userId", "1");
		result.put("username", "lf");
		return result;
	}
	
	public Map logout(String username){
		HashMap result = new HashMap();
		result.put("code", "00");
		result.put("msg", "登出成功");
		return result;
	}
	
	// 重新获取accessToken
	public Map referesh(String refereshToken){
		String accessToken = "qwerty";
		HashMap result = new HashMap();
		result.put("accessToken", accessToken);
		result.put("perms", "users:list, users:add, home");
		return result;
	}
	
	/*public boolean checkAccessToken(String token){
		return "qwerty".equals(token);
	}*/
	
}
