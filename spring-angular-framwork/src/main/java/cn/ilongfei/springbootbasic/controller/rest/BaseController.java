package cn.ilongfei.springbootbasic.controller.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

import cn.ilongfei.springbootbasic.domain.BaseEntity;
import cn.ilongfei.springbootbasic.service.BaseService;

public abstract class BaseController<T extends BaseEntity, S extends BaseService> {

	Logger log = LoggerFactory.getLogger(this.getClass());
	
	S service;

	@RequestMapping(method = RequestMethod.GET)
	public Iterable<T> list() {
		return service.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public T findById(@PathVariable long id) {
		return (T)service.findOne(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable long id) {
		service.delete(id);
	}

	@RequestMapping(value = "/{id}",method = RequestMethod.PUT)
	public T update(@PathVariable long id, @RequestBody T entity, @RequestParam String props) throws Exception {
		if(entity.getId() != id)throw new Exception(entity.getClass().getSimpleName() + "更新数据库时发生错误，id为空");
		try {
			T result;
			if(props == null)result = (T)service.update(entity);
			else result = (T)service.update(entity, props);
			return result;
		} catch (Exception e) {
			log.error("{0}更新数据库时发生类型转换错误，{1}", entity.getClass().getSimpleName(), e);
			throw e;
		}
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public T save(@RequestBody T entity) {
		return (T)service.create(entity);
	}

}
