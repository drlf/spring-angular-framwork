package cn.ilongfei.springbootbasic.service;

import java.lang.reflect.InvocationTargetException;

import org.apache.commons.beanutils.PropertyUtils;
import org.junit.Test;

import cn.ilongfei.springbootbasic.domain.Book;
import cn.ilongfei.springbootbasic.util.BeanUtil;

import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.hamcrest.CoreMatchers.*;

public class BaseServiceTest {

	
	@Test
	public void testCreate() throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
		Book book = new Book();
		book.setId(1L);
		book.setName("book1");
		book.setSid("sid1");
		//Book tmp = null;	//dest can not be null
		Book tmp = new Book();
		/*book.setId(1L);
		book.setName("book1");
		book.setSid("sid1");*/
		PropertyUtils.copyProperties(tmp, book);
		assertThat(tmp.getName(), is(book.getName()));
	}
	
	@Test
	public void testPartitral() throws Exception {
		Book book = new Book();
		book.setId(1L);
		book.setName("book1");
		//book.setSid("sid1");
		Book tmp = new Book();
		tmp.setId(2L);
		tmp.setName("book2");
		tmp.setSid("ddd");
		String[] str={"name"};
		BeanUtil.copyPropertiesInclude( book, tmp, str);
		assertThat(tmp.getName(), is(book.getName()));
		assertThat(tmp.getId(), is(2L));
		assertThat(tmp.getSid(), not(book.getSid()));
	}
	
	@Test
	public void testSetNull() throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
		Book book = new Book();
		book.setId(1L);
		Book tmp = new Book();
		tmp.setId(2L);
		tmp.setName("book2");
		PropertyUtils.copyProperties(tmp, book);
		assertTrue(tmp.getName() == null);
	}
	
	@Test
	public void testPartitralWithNullProps() throws Exception {
		Book book = new Book();
		book.setId(1L);
		book.setName("book1");
		//book.setSid("sid1");
		Book tmp = new Book();
		tmp.setId(2L);
		tmp.setName("book2");
		tmp.setSid("ddd");
		String[] str={"name", ""};
		BeanUtil.copyPropertiesInclude( book, tmp, str);
		assertThat(tmp.getName(), is(book.getName()));
		assertThat(tmp.getId(), is(2L));
		assertThat(tmp.getSid(), not(book.getSid()));
	}
	
	@Test
	public void testString(){
		String properties = "name, , addr";
		String[] props = properties.split(",");
		for(int i=0; i<props.length; i++){
			if(props[i] == null)continue;
			if(!props[i].equals(props[i].trim()))props[i] = props[i].trim();
		}
		assertThat(props.length, is(3));
	}

}
