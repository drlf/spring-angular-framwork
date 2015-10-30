package cn.ilongfei.springbootbasic.service;

import java.lang.reflect.InvocationTargetException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.apache.commons.beanutils.PropertyUtils;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import cn.ilongfei.springbootbasic.domain.BaseEntity;
import cn.ilongfei.springbootbasic.domain.User;
import cn.ilongfei.springbootbasic.util.BeanUtil;

@Service
public abstract class BaseService<T extends BaseEntity, R extends JpaRepository<T, Long>> {

	R repository;
	
	public List<T> findAll(){
		return repository.findAll();
	}
	
	public T findOne(long id){
		return repository.findOne(id);
	}
	
	@Transactional
    public T create(T entity) {
        return repository.save(entity);
    }

	@Transactional
	public T update(T entity) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException{
		if(entity.getId() == 0)throw new IllegalArgumentException("更新数据失败，id不能为空");
		T tmp = repository.findOne(entity.getId());
		PropertyUtils.copyProperties(tmp, entity);
		repository.save(tmp);
		return tmp;
	}
	
	//更新部分属性，由properties指定更新哪些属性，格式为 "name,addr,title"
	@Transactional
	public T update(T entity, String properties) throws Exception{
		if(entity.getId() == 0)throw new IllegalArgumentException("更新数据失败，id不能为空");
		String[] props = properties.split(",");
		for(int i=0; i<props.length; i++){
			if(props[i] == null)continue;
			if(!props[i].equals(props[i].trim()))props[i] = props[i].trim();
		}
		if(props.length < 1)throw new IllegalArgumentException("更新数据失败，没有需要更新的对象属性");
		T tmp = repository.findOne(entity.getId());
		BeanUtil.copyPropertiesInclude( entity, tmp, props);
		repository.save(tmp);
		return tmp;
	}
	
	@Transactional
	public void delete(long id){
		repository.delete(id);
	}
	
}
