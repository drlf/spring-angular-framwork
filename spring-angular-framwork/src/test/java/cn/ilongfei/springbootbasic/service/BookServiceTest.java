package cn.ilongfei.springbootbasic.service;

import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.assertThat;

import java.util.List;

import javax.transaction.Transactional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import cn.ilongfei.springbootbasic.RepositoryTestConfig;
import cn.ilongfei.springbootbasic.domain.Book;
import cn.ilongfei.springbootbasic.domain.User;

@RunWith(SpringJUnit4ClassRunner.class)
@Transactional
@ContextConfiguration(classes = RepositoryTestConfig.class)
public class BookServiceTest {

	@Autowired BookService service;
	Book book;
	

	@Before
	public void setUp() {
		book =  new Book();
		book.setName("sdfsdf");
		book.setSid("111");
	}
	
	@Test
	public void save() {
		Book tmp = service.create(book);
		assertThat(tmp.getId(), not(0L));
	}
	
	@Test
	public void list() {
		List<Book> books = service.findAll();
		assertThat(books.size(), not(0));
		for(Book book: books){
			System.out.println("book:" + book.getName());
		}
	}

}
