package cn.ilongfei.springbootbasic.controller.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cn.ilongfei.springbootbasic.domain.Setting;
import cn.ilongfei.springbootbasic.repository.SettingRepository;

@RestController
@RequestMapping("/api/setting")
public class SettingController {

	private static Logger log = LoggerFactory.getLogger(SettingController.class);
	
	@Autowired SettingRepository settingRepository;
	
	@RequestMapping(method = RequestMethod.GET)
	public Iterable<Setting> list() {
		return settingRepository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Setting findById(@PathVariable long id) {
		return settingRepository.findOne(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public String deleteById(@PathVariable long id) {
		settingRepository.delete(id);
		return "ok";
	}

	@RequestMapping(value = "/{id}",method = RequestMethod.PUT)
	public String update(@PathVariable long id, @RequestBody Setting setting) {
		if(setting.getId() == id){
			settingRepository.save(setting);
			return "OK.";
		}else{
			return "Failed.";
		}
		
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Setting save(@RequestBody Setting setting) {
		return settingRepository.save(setting);
	}

}
